---
# InvariantX OpenClaw Skills + LidLift Dashboard — Full Execution Checklist

**Canonical Secure Production Domain:** https://clawdash.genesisconductor.io

**Primary Attribution:** @invariantx (https://x.com/invariantx)

This checklist incorporates all previous recommended steps, the A2A Copilot Fleet mission, DiamondNode + Telegram auth flow, and GitHub Pages custom domain setup.

## Phase 0: Authentication (Required First Step)

**Preferred path (as specified):**

1. SSH into the DiamondNode host:
   ```bash
   ssh diamondnode@192.168.1.228
   ```

2. Inside the DiamondNode environment, complete ClawHub authentication through the Telegram bot (diamondnodebot).

3. Verify authentication:
   ```bash
   clawhub whoami
   ```

4. (If running the publish script from a different machine) Copy any required token/config or re-authenticate locally using:
   ```bash
   clawhub login --device
   ```

After successful auth, proceed to Phase 1.

## Phase 1: Publish the Three Skills

From the `openclaw-skills` repository root:

```bash
cd /Users/Igor/openclaw-skills
./publishing/publish-all.sh
```

- The script uses modern `clawhub skill publish` commands.
- It includes high-quality changelogs and ClawScan notes.
- Use `--dry-run` first to preview.
- Use `--yes` for non-interactive mode.

**Verify after publish:**
```bash
clawhub inspect grok-persistent-state --versions --files
clawhub inspect mcp-openclaw-bridge --versions
clawhub inspect smithery-mcp-orchestrator --versions
```

## Phase 2: Activate clawdash.genesisconductor.io (GitHub Pages + Custom Domain + HTTPS)

**Goal:** Make https://clawdash.genesisconductor.io the secure, canonical production URL for the LidLift dashboard.

### Steps:

1. **CNAME file** (already created in repo):
   - `docs/CNAME` contains: `clawdash.genesisconductor.io`

2. **GitHub Pages configuration**:
   - Repo → Settings → Pages
   - Source: Deploy from a branch → `main` / `/docs`
   - Add custom domain: `clawdash.genesisconductor.io`
   - Check "Enforce HTTPS" (GitHub will provision Let's Encrypt cert — this can take a few minutes to 24h after DNS is correct)

3. **DNS Record** (most common cause of "not accessible"):

   If using Google Cloud DNS (common in your setup):

   ```bash
   gcloud dns record-sets create clawdash.genesisconductor.io \
     --zone="YOUR_ZONE_NAME" \
     --type="CNAME" \
     --ttl="300" \
     --rrdatas="igor-holt.github.io."
   ```

   Or manually add:
   - Type: **CNAME**
   - Name: `clawdash.genesisconductor.io`
   - Value: `igor-holt.github.io.`
   - TTL: 300 (or 5 minutes)

   **Important**: Use the trailing dot after `github.io.` for the canonical name.

4. Wait for DNS propagation (use `dig clawdash.genesisconductor.io` or https://dnschecker.org).

5. Once DNS resolves and Pages is configured, GitHub will automatically secure it with HTTPS at `https://clawdash.genesisconductor.io`.

The dashboard is already configured to force HTTPS and use the correct canonical URL.

**Current status of the site (while DNS is pending):**
- It remains accessible via: https://igor-holt.github.io/openclaw-skills/

After DNS + custom domain activation, the full secure URL `https://clawdash.genesisconductor.io` will serve the interactive LidLift Pareto dashboard.

## Phase 3: Update All Surfaces (Per Explorer Map + A2A Mission)

### Local Workspace Updates
- mcp-server/README.md
- clawbot-grok/README.md
- MCP_SERVER_CLAUDE_DESKTOP_SETUP.md
- chat-agent/AGENTS.md
- All relevant gc-workers/*/AGENTS.md and CLAUDE.md
- Genesis Soul Capsule v1/MANIFEST.md
- TeamTitans docs and playbooks

Use the exact copy from the explorer subagent output, always leading with `@invariantx` and linking to:
- https://github.com/igor-holt/openclaw-skills
- https://clawdash.genesisconductor.io
- https://x.com/invariantx

### Public GitHub Surfaces
- https://github.com/igor-holt/Igor-Holt (bio repo)
- https://github.com/igor-holt/mcp-servers
- https://github.com/Genesis-Conductor-Engine/Genesis-Conductor (and org repos)

### Public Project Surfaces
- genesisconductor.io (main site + subpages)
- Any Notion exports or funding documents referencing Genesis Conductor

### Promotion Execution (from @invariantx)
- Post the full X thread from `promotion/X_THREAD.md`
- Publish GitHub Release using `promotion/GITHUB_RELEASE_v1.0.0.md`
- Post LinkedIn using `promotion/LINKEDIN_POST.md`
- Amplify `promotion/PRODUCTION_STORY_DIAMONDNODEBOT.md` and `THREE_SKILLS_ONE_STACK.md`

Pin the thread and update your X bio using text from `promotion/ABOUT_THE_AUTHOR.md`.

## Phase 4: A2A Copilot Fleet Mission Execution

The full machine-readable plan is here:
`publishing/a2a-copilot-fleet-mission.jsonl`

The fleet should execute records in order (connections field shows handoff sequence), starting with auth on the DiamondNode host.

## Phase 5: Verification & Provenance

- Confirm skills are discoverable on ClawHub.
- Confirm author page is live: https://llmbase.ai/openclaw/authors/igor-holt/
- Confirm dashboard is serving at https://clawdash.genesisconductor.io
- Add a new record to the Genesis Soul Capsule documenting this campaign.
- (If tooling available) Create a DiamondNode attestation for the bundle.

## Ongoing

All future updates, threads, and cross-references must route through **@invariantx** on X as the single source of truth.

---

**Status:** Ready for execution.

Run Phase 0 (auth) first, then Phase 1 (publish), then enable the custom domain.

All files and instructions generated by Grok in this session are now aligned under the canonical production domain `clawdash.genesisconductor.io`.