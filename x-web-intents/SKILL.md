---
name: x-web-intents
description: Use for correct generation of all major X (Twitter) Web Intents (tweet, reply, retweet, like, follow, user), ready-to-use HTML patterns, parameter reference, and two plugin forms (full drop-in HTML fragment and lightweight Grove/OBS-compatible JS). Auto-wiring via data-x-intent attributes. Primary triggers include X share buttons, engagement CTAs, companion pages, Grove intent plugins, OBS browser sources, Real X Signal ingest. Medium VPD utility for affinity outreach and content distribution. Integrates with affinity-targets-registry for signal ingestion and geometric synesthesia workflows.
---

# X Web Intents

## Overview

Provides deterministic, parameter-complete generation of X (formerly Twitter) Web Intent URLs and ready-to-drop HTML/JS plugins for engagement CTAs, share buttons, companion pages, and Grove/OBS browser sources. Includes a lightweight Grove/OBS-compatible plugin with modal-based Real X Signal ingest (JSON or free text) that feeds affinity-targets-registry and trace-consent. Enforces maru + trace-consent invariants. Sonnet default. Auto-wires via `data-x-intent` attributes. Critical for zero-friction engagement surfaces in Genesis Conductor affinity campaigns and sovereign content distribution without relying on fragile window.prompt() or blocked browser APIs.

## When to Activate

- Explicit: "generate X web intent", "X share button", "tweet intent URL", "follow intent", "Grove intent plugin", "OBS X button", "Real X Signal", "ingest X signal", "data-x-intent".
- Contextual: Any request for engagement CTAs, companion pages, share/retweet/like/follow buttons, or OBS browser source plugins that need to open X intents or ingest live signals into affinity workflows.
- Automatic: When affinity-targets-registry needs push/pull signal enrichment, or when building HTML surfaces that must work inside restricted contexts (OBS Browser Source, sandboxed iframes).
- Do NOT activate for pure X API calls (use x-tools / xmxp); this skill is for browser-facing Web Intent URLs and drop-in plugins only.

## Core Principles (Invariant Constraints)

maru integration on R>0.4 or no-win — unconditional #!nox reframe + A2A artifact.  
trace-consent mandatory on every invocation (especially Real X Signal ingest) with D1/Merkle/ORCID.

- Correctness First: All intent URLs must match official X Web Intent parameter semantics (text, url, hashtags, via, in_reply_to, tweet_id, screen_name, user_id, related, original_referer). No invented parameters.
- Restricted-Context Safe: Plugins must never rely on window.prompt(), alert(), or other APIs frequently blocked in OBS Browser Source or CSP-restricted environments. Use proper modal + textarea + state machine.
- Zero Private Leakage: Real X Signal ingest sanitizes input, never stores raw PII, always routes through affinity-targets-registry gates + maru before any scoring or storage.
- Auto-Wiring: Support `data-x-intent="tweet|reply|retweet|like|follow|user"` attributes that generate the correct href and click handlers without additional JS when possible.
- Thermodynamic & Structural: Intent generation is pure function (no side effects). Ingest path produces crystalline evt- artifacts only after hermetic validation.

## Instructions

1. **Intent URL Construction (Pure)**  
   Use the parameter reference in `references/intent-cheatsheet.md`. Core builders:  
   - Tweet: `https://x.com/intent/tweet?text=...&url=...&hashtags=...&via=...&related=...`  
   - Reply: `https://x.com/intent/tweet?in_reply_to=<tweet_id>&text=...`  
   - Retweet: `https://x.com/intent/retweet?tweet_id=<id>`  
   - Like: `https://x.com/intent/like?tweet_id=<id>`  
   - Follow: `https://x.com/intent/follow?screen_name=<handle>` (or user_id)  
   - User: `https://x.com/intent/user?screen_name=<handle>`  
   Always percent-encode values. Prefer `x.com` over `twitter.com` for future-proofing while remaining backward compatible. Return both the URL and a ready HTML `<a>` snippet.

2. **Drop-in HTML Plugin (`assets/web-intent-plugin.html`)**  
   Full self-contained fragment. Include the file contents or link it. It auto-scans for `[data-x-intent]` elements and wires correct href + optional analytics callbacks. Supports all six intent types. No external dependencies.

3. **Grove / OBS Lightweight Plugin (`assets/grove-intent-plugin.js`)**  
   Minimal JS suitable for OBS Browser Source or Grove companion pages.  
   - Exposes `window.XIntents` with builders.  
   - Provides a floating **⊕ Real X Signal** button that opens a proper modal (not window.prompt).  
   - Modal contains a textarea for JSON or free-text signal.  
   - On submit: validates, sanitizes, emits structured event to affinity-targets-registry webhook (or local callback), writes trace-consent evt-, applies maru if risk > 0.4.  
   - State machine: `realOpen`, `realRef`, `openReal()`, `closeReal()`, `submitReal()`.  
   - HTML structure is balanced (no mismatched `</div>`). Syntax validates cleanly.  
   - Hard-refresh required after updates because OBS caches aggressively.

4. **Real X Signal Ingest Flow**  
   - User clicks ⊕ Real X Signal → modal opens.  
   - Paste JSON (preferred: `{ "type": "tweet|reply|...", "id": "...", "text": "...", "author": "..." }`) or free text.  
   - Submit → parse → sanitize → maru risk check → if R ≤ 0.4 route to affinity-targets-registry geometric synesthesia scoring + Notion sync; else #!nox reframe to pull-only enrichment.  
   - Always produce A2A evt- JSONL and update Merkle chain via trace-consent.  
   - Never block the UI; all network is fire-and-forget with local fallback.

5. **Integration with affinity-targets-registry & skillmaru**  
   - On skill creation/update: skillmaru already injected maru + trace-consent.  
   - When Real X Signal fires, call the affinity webhook_handler or Cloudflare stub (only after verified controls).  
   - For professional affinity targets: enrich with ORCID if present, score manifold, generate comment variations.  
   - Log every ingest under ORCID 0009-0008-8389-1297.

6. **Verification**  
   - HTML/JS must pass basic syntax checks (balanced tags, no undeclared vars).  
   - Intent URLs must open the correct X compose/engagement surface when tested in a normal browser.  
   - In OBS: confirm modal appears, textarea accepts input, submit does not throw, and no prompt() is used.  
   - Crystalline target ≥ 0.85 for the skill itself.

## Value-Per-Dollar Optimization

Medium-High VPD for engagement surfaces. One-time plugin drop replaces dozens of manual intent URL constructions and eliminates OBS-specific breakage (window.prompt blocks). Real X Signal path accelerates affinity-targets-registry velocity without adding new infrastructure cost. Fractional cost via pure functions + optional webhook.

## Connections & Provenance

- Integrates with: affinity-targets-registry (signal ingest + scoring), skillmaru (creation guards), maru (R>0.4), trace-consent (every ingest), x-tools / xmxp (optional enrichment after intent), notion-workers (CRM mirror).  
- Used by: companion pages, OBS overlays, Genesis Conductor outreach CTAs, Grove browser sources, any HTML surface needing X engagement buttons.  
- Aligns with: Genesis Conductor Phase II/III, geometric synesthesia personalization, EO 14363, post-quantum attestation where applicable.  
- ORCID: 0009-0008-8389-1297 via Genesis Conductor logging.  
- Assets provenance: Corrected 2026-07-21 — fixed mismatched `</div>`, replaced window.prompt with modal+textarea, added realOpen/realRef/openReal/closeReal/submitReal state machine. Syntax validates cleanly.

## Validation Notes

Encodes the non-obvious pattern of OBS/Grove-safe intent plugins + Real X Signal modal that survives restricted browser contexts. Test by: (1) generating each of the 6 intent types, (2) dropping the HTML plugin into a page and clicking data-x-intent buttons, (3) loading grove-intent-plugin.js in OBS Browser Source, opening ⊕ Real X Signal, pasting sample JSON, submitting, and confirming no console errors and trace-consent entry. Flag any residual prompt() or unbalanced markup. This skill extends the A2A surface for frictionless X engagement while preserving all structural invariants.
