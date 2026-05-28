# Recommended Exact `clawhub` Publish Commands

Copy-paste ready commands for publishing the three skills (and notes for the bundle).

**Always run from the `openclaw-skills` repository root.**

**Best practice order:**
1. `./publishing/publish-all.sh --dry-run` (review everything)
2. `./publishing/publish-all.sh` (guided)
3. Or the manual commands below for full control

---

## Modern Recommended Form (Preferred)

Use the explicit `skill publish` subcommand.

### 1. grok-persistent-state

```bash
clawhub skill publish ./grok-persistent-state \
  --slug grok-persistent-state \
  --version 1.0.0 \
  --changelog "v1.0.0 — Initial public release. Production-grade persistent project state + unified omniskill registry for stateless LLMs (Grok, OpenClaw, Claude Code, Cursor, etc.). Delivers canonical JSON state schema (goal, current_focus, open_tasks, decisions, artifacts, etc.), safe read/inject + patch_state workflow, explicit trigger phrases, and strict MUST / MUST NEVER safety boundaries (never store secrets or PII; no autonomous execution). Extracted and hardened from the clawbot-grok reference implementation and Genesis Conductor multi-agent systems. Composes directly with the other two skills in this bundle." \
  --clawscan-note "Purely local filesystem reads and writes inside the user's own project directories (project_state.json and optional PROJECT_STATE.md). No network access whatsoever. No external binaries required. Never stores, transmits, or handles API keys, tokens, or PII. MIT-0 licensed."
```

### 2. mcp-openclaw-bridge

```bash
clawhub skill publish ./mcp-openclaw-bridge \
  --slug mcp-openclaw-bridge \
  --version 1.0.0 \
  --changelog "v1.0.0 — Initial public release. Authoritative patterns for turning any MCP server into first-class, versioned, triggerable OpenClaw / ClawHub skills. Covers explicit mapping strategy (with mcp-mapping-example.json), mandatory privacy declarations (all credentials and execution remain strictly local), recommended SKILL.md structure, and workflows for promoting Smithery or custom MCP tools into permanent community skills. Designed to complement native OpenClaw skills and pair with the persistent-state and Smithery orchestrator skills in this bundle." \
  --clawscan-note "Documentation, patterns, and thin-adapter examples only. This skill performs zero execution of MCP servers. The user supplies MCP_SERVER_PATH and any required credentials/environment. All network activity or secret handling (if present) occurs exclusively inside the user-controlled MCP server process. No secrets or credentials are present in this skill package. MIT-0."
```

### 3. smithery-mcp-orchestrator

```bash
clawhub skill publish ./smithery-mcp-orchestrator \
  --slug smithery-mcp-orchestrator \
  --version 1.0.0 \
  --changelog "v1.0.0 — Initial public release. Production-ready Smithery MCP orchestration layer for OpenClaw and Grok agents. Includes namespace discipline + persistent tracking, long-lived connection lifecycle (connected/auth_required/error), advanced secure token scoping using policies and rpcReqMatch, tool discovery (search/list/get), JSONL piping support, auth handoff guidance, and explicit composition recipes with grok-persistent-state (memory) and mcp-openclaw-bridge (promotion to permanent skills). Hardened from real deployments using Genesis Conductor patterns." \
  --clawscan-note "Teaches safe usage patterns for the official Smithery CLI (@smithery/cli). The skill itself never handles credentials, mints tokens, or makes direct API calls. All authentication flows, namespace management, and token scoping are performed by the human operator via the Smithery CLI (guided by the agent). Requires local 'smithery' and 'npm' binaries. Strongly encourages narrow scoping and human handoff on auth_required. MIT-0."
```

---

## Legacy / Short Form (Still Supported)

The original `publish` command remains a working alias:

```bash
clawhub publish ./grok-persistent-state --slug grok-persistent-state --version 1.0.0 --changelog "..." --clawscan-note "..."
```

Prefer the modern `skill publish` form shown above.

---

## Non-Interactive / CI-Friendly Variants

Add `--yes` (or `--no-input`) to skip prompts:

```bash
clawhub skill publish ./grok-persistent-state \
  --slug grok-persistent-state \
  --version 1.0.0 \
  --changelog "..." \
  --clawscan-note "..." \
  --yes
```

For headless environments, authenticate first with a token or device flow:

```bash
clawhub login --token "$CLAWHUB_TOKEN"
# or
clawhub login --device
```

---

## Dry-Run / Validation Before Publishing

The official CLI supports `--dry-run` for package publishing and the `sync` command. For individual skills you can simulate locally or simply review with the helper:

```bash
./publishing/publish-all.sh --dry-run
```

Or manually construct the commands and review them before execution.

---

## Verification After Publishing

```bash
# Inspect published versions + files
clawhub inspect grok-persistent-state --versions --files
clawhub inspect mcp-openclaw-bridge --versions
clawhub inspect smithery-mcp-orchestrator --versions

# Quick search
clawhub search "persistent state"
clawhub search "mcp bridge"
clawhub search "smithery orchestrator"

# Local test install (into current workspace)
clawhub install grok-persistent-state
```

Public URLs (owner handle `igor-holt` assumed; replace if publishing under a different publisher or org):

- https://clawhub.ai/igor-holt/grok-persistent-state
- https://clawhub.ai/igor-holt/mcp-openclaw-bridge
- https://clawhub.ai/igor-holt/smithery-mcp-orchestrator

---

## Bundle Publishing Notes

There is no single "bundle" publish command. The three skills are published individually but released together.

For maximum consistency, publish all three in the same session (the `publish-all.sh` script does exactly this).

After the three individual publishes, you may optionally star the skills or create a short announcement post referencing the bundle changelog in `CHANGELOGS.md`.

---

## Owner / Publisher Flags (Advanced)

If publishing under an organization publisher you control:

```bash
clawhub skill publish ./grok-persistent-state \
  --slug grok-persistent-state \
  --version 1.0.0 \
  --owner my-org-handle \
  --changelog "..." \
  --clawscan-note "..."
```

Owner migration (rare, requires admin rights on both):

```bash
... --owner new-owner --migrate-owner ...
```

---

## Tips for a Smooth Publish

- Always include a strong, specific `--changelog` (even on v1.0.0).
- Always include a `--clawscan-note` when the skill touches files, network, external CLIs, or credentials (even indirectly).
- Run the helper script first with `--dry-run`.
- After publishing, immediately run the inspect commands above.
- The registry performs automated security scanning (ClawScan). Good notes dramatically reduce false positives.

All commands above were prepared as part of the official Publishing Preparation for the ClawHub / LLMBase OpenClaw release of these skills.

MIT-0 — 2026 Igor Holt