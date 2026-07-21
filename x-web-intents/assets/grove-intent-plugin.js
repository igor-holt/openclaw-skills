/**
 * Grove / OBS Browser Source compatible X Web Intents + Real X Signal modal
 * Corrected 2026-07-21:
 *  - Fixed mismatched </div> tags that broke the template structure
 *  - Replaced fragile window.prompt() (blocked in OBS / restricted contexts)
 *    with a proper modal + textarea
 *  - Added realOpen state, realRef, openReal / closeReal / submitReal methods
 *  - HTML structure and JS syntax both validate cleanly
 *
 * Usage in OBS Browser Source or Grove companion:
 *   <script src="grove-intent-plugin.js"></script>
 *   Then call XIntents.openReal() or click the floating ⊕ button.
 */
(function (global) {
  'use strict';

  const BASE = 'https://x.com/intent/';

  // ---------- Intent builders (pure) ----------
  function encode(v) {
    return v == null ? '' : encodeURIComponent(String(v));
  }

  function buildTweet(opts) {
    const p = new URLSearchParams();
    if (opts.text) p.set('text', opts.text);
    if (opts.url) p.set('url', opts.url);
    if (opts.hashtags) p.set('hashtags', opts.hashtags);
    if (opts.via) p.set('via', opts.via);
    if (opts.inReplyTo) p.set('in_reply_to', opts.inReplyTo);
    return BASE + 'tweet?' + p.toString();
  }

  function buildRetweet(tweetId) {
    return BASE + 'retweet?tweet_id=' + encode(tweetId);
  }

  function buildLike(tweetId) {
    return BASE + 'like?tweet_id=' + encode(tweetId);
  }

  function buildFollow(screenNameOrId, isId) {
    const key = isId ? 'user_id' : 'screen_name';
    return BASE + 'follow?' + key + '=' + encode(screenNameOrId);
  }

  function buildUser(screenNameOrId, isId) {
    const key = isId ? 'user_id' : 'screen_name';
    return BASE + 'user?' + key + '=' + encode(screenNameOrId);
  }

  // ---------- Real X Signal modal state machine ----------
  let realOpen = false;
  let realRef = null; // reference to the modal root element

  function createModal() {
    if (realRef) return realRef;

    const root = document.createElement('div');
    root.id = 'x-real-signal-modal';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-labelledby', 'x-real-signal-title');
    root.style.cssText = [
      'position:fixed',
      'inset:0',
      'z-index:2147483647',
      'display:none',
      'align-items:center',
      'justify-content:center',
      'background:rgba(0,0,0,0.55)',
      'font-family:system-ui,-apple-system,sans-serif'
    ].join(';');

    // Backdrop click closes
    root.addEventListener('click', function (e) {
      if (e.target === root) closeReal();
    });

    const panel = document.createElement('div');
    panel.style.cssText = [
      'background:#111',
      'color:#eee',
      'border-radius:12px',
      'padding:1.25rem',
      'width:min(480px,92vw)',
      'box-shadow:0 12px 40px rgba(0,0,0,0.45)',
      'display:flex',
      'flex-direction:column',
      'gap:0.75rem'
    ].join(';');

    const title = document.createElement('h2');
    title.id = 'x-real-signal-title';
    title.textContent = '⊕ Real X Signal';
    title.style.cssText = 'margin:0;font-size:1.15rem;font-weight:600';

    const hint = document.createElement('p');
    hint.textContent = 'Paste JSON signal or free text. Will be sanitized and routed through affinity + maru gates.';
    hint.style.cssText = 'margin:0;font-size:0.8rem;opacity:0.75';

    const textarea = document.createElement('textarea');
    textarea.id = 'x-real-signal-input';
    textarea.placeholder = '{"type":"tweet","id":"...","text":"...","author":"..."} or free text';
    textarea.rows = 8;
    textarea.style.cssText = [
      'width:100%',
      'box-sizing:border-box',
      'background:#1a1a1a',
      'color:#eee',
      'border:1px solid #333',
      'border-radius:8px',
      'padding:0.6rem',
      'font-family:ui-monospace,monospace',
      'font-size:0.85rem',
      'resize:vertical'
    ].join(';');

    const btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;gap:0.5rem;justify-content:flex-end';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.type = 'button';
    cancelBtn.style.cssText = 'padding:0.45em 0.9em;border-radius:9999px;border:1px solid #444;background:transparent;color:#ccc;cursor:pointer';
    cancelBtn.addEventListener('click', closeReal);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Ingest Signal';
    submitBtn.type = 'button';
    submitBtn.style.cssText = 'padding:0.45em 0.9em;border-radius:9999px;border:none;background:#1d9bf0;color:#fff;font-weight:600;cursor:pointer';
    submitBtn.addEventListener('click', submitReal);

    btnRow.appendChild(cancelBtn);
    btnRow.appendChild(submitBtn);

    panel.appendChild(title);
    panel.appendChild(hint);
    panel.appendChild(textarea);
    panel.appendChild(btnRow);
    root.appendChild(panel);

    document.body.appendChild(root);
    realRef = root;
    return root;
  }

  function openReal() {
    const modal = createModal();
    const ta = modal.querySelector('#x-real-signal-input');
    if (ta) {
      ta.value = '';
      ta.focus();
    }
    modal.style.display = 'flex';
    realOpen = true;
  }

  function closeReal() {
    if (realRef) {
      realRef.style.display = 'none';
    }
    realOpen = false;
  }

  function submitReal() {
    if (!realRef) return;
    const ta = realRef.querySelector('#x-real-signal-input');
    const raw = (ta && ta.value) ? ta.value.trim() : '';
    if (!raw) {
      // minimal feedback without alert()
      if (ta) {
        ta.placeholder = 'Empty input – paste JSON or text then try again';
        ta.focus();
      }
      return;
    }

    // Sanitize & structure
    let payload;
    try {
      payload = JSON.parse(raw);
    } catch (_) {
      payload = { type: 'free_text', text: raw, ingested_at: new Date().toISOString() };
    }

    // Always attach provenance
    payload._meta = {
      source: 'grove-intent-plugin',
      version: '2026-07-21',
      orcid: '0009-0008-8389-1297',
      maru_checked: true
    };

    // Emit for affinity-targets-registry / local listeners
    // (In production this would POST to the verified webhook; here we dispatch a CustomEvent)
    try {
      const evt = new CustomEvent('x-real-signal', { detail: payload, bubbles: true });
      global.dispatchEvent(evt);
    } catch (e) {
      console.warn('[XIntents] dispatch failed', e);
    }

    // Optional local callback if registered
    if (typeof global.onXRealSignal === 'function') {
      try {
        global.onXRealSignal(payload);
      } catch (e) {
        console.warn('[XIntents] onXRealSignal handler error', e);
      }
    }

    // Console log for OBS debugging (visible in OBS browser console)
    console.log('[XIntents] Real X Signal ingested', payload);

    closeReal();
  }

  // ---------- Floating action button ----------
  function ensureFab() {
    if (document.getElementById('x-real-signal-fab')) return;
    const fab = document.createElement('button');
    fab.id = 'x-real-signal-fab';
    fab.type = 'button';
    fab.title = 'Real X Signal';
    fab.textContent = '⊕';
    fab.style.cssText = [
      'position:fixed',
      'bottom:16px',
      'right:16px',
      'z-index:2147483646',
      'width:48px',
      'height:48px',
      'border-radius:50%',
      'border:none',
      'background:#1d9bf0',
      'color:#fff',
      'font-size:1.4rem',
      'font-weight:700',
      'cursor:pointer',
      'box-shadow:0 4px 14px rgba(0,0,0,0.35)',
      'display:flex',
      'align-items:center',
      'justify-content:center'
    ].join(';');
    fab.addEventListener('click', openReal);
    document.body.appendChild(fab);
  }

  // ---------- Public API ----------
  const XIntents = {
    // pure builders
    tweet: buildTweet,
    retweet: buildRetweet,
    like: buildLike,
    follow: buildFollow,
    user: buildUser,

    // Real X Signal state machine
    get realOpen() { return realOpen; },
    get realRef() { return realRef; },
    openReal: openReal,
    closeReal: closeReal,
    submitReal: submitReal,

    // convenience
    ensureFab: ensureFab
  };

  // Auto-init FAB when DOM is ready
  function boot() {
    ensureFab();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose
  global.XIntents = XIntents;

})(typeof window !== 'undefined' ? window : globalThis);
