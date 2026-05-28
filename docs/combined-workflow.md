# Combined Workflow: The Three Skills Used Together

This document demonstrates the canonical way the three Igor Holt OpenClaw skills are designed to be used in concert for professional, long-running autonomous agent work.

**The Trio:**
- `smithery-mcp-orchestrator` — Discovery, secure connections, token scoping, and Smithery orchestration
- `grok-persistent-state` — Durable memory of goals, decisions, tasks, artifacts, and active Smithery state across every turn
- `mcp-openclaw-bridge` — Promotion of valuable discovered MCP capabilities into permanent, versioned ClawHub skills for the whole community

## Realistic Scenario

You are running a multi-week research + release operations agent for the Genesis Conductor project, **connected in production to the DiamondNodeBot Telegram channel via the InvariantX identity layer**.

The agent must:

- Connect to GitHub, Linear, and the DiamondNodeBot Telegram channel (via Smithery + InvariantX connectors)
- Maintain perfect memory + DiamondNode-attested provenance across web, CLI, and Telegram
- Identify high-value attested Telegram workflows and turn them into reusable published skills for the network

## Turn-by-Turn Example (Agent Execution)

### Turn 1: Secure Discovery & Connection (smithery-mcp-orchestrator + grok-persistent-state)

**User:** "Set up GitHub and Linear access for the Genesis Conductor 2026 release tracking project using Smithery. Remember everything."

**Agent actions:**
1. Activates `smithery-mcp-orchestrator`.
2. Ensures namespace `genesis-conductor-release-2026` exists and is active.
3. Creates two long-lived MCP connections with rich metadata.
4. Mints narrowly scoped tokens (using `rpcReqMatch` policies where possible).
5. Immediately calls into `grok-persistent-state` via `patch_state`:

```json
{
  "project_id": "genesis-conductor-2026",
  "goal": "Track and coordinate the Genesis Conductor 2026 release across GitHub and Linear",
  "current_focus": "Establish secure Smithery connections for release tooling",
  "smithery": {
    "active_namespace": "genesis-conductor-release-2026",
    "active_connections": ["gh-release-tracking", "linear-release-tracking"],
    "scoped_tokens": {
      "gh-release-tracking": { "expires": "2026-05-28T18:00:00Z" }
    }
  },
  "open_tasks": [
    "Define release criteria in Linear",
    "Sync high-priority issues to GitHub project"
  ],
  "decisions": ["All Smithery tokens must use short TTLs and metadata filtering"]
}
```

### Turn 4: Memory Restores Context Automatically (grok-persistent-state)

**User:** "Where were we with the release criteria?"

**Agent actions:**
1. Loads state via `grok-persistent-state` at the very start of the turn.
2. Injects a crisp summary of the project goal, active Smithery connections, and open tasks **before** processing the user message.
3. Restores the exact Smithery namespace.
4. Continues work without the user re-explaining context or re-authenticating flows.

### Later Turns: Promotion to Permanent Skills (smithery-mcp-orchestrator + mcp-openclaw-bridge)

After the agent has used particular Linear + GitHub tool combinations heavily and validated them in production:

1. Agent (guided by `smithery-mcp-orchestrator`) identifies the 3–4 highest-value repeated patterns (e.g., "create release tracking issue + link to GitHub PR").
2. Using patterns from `mcp-openclaw-bridge`, the agent drafts thin wrapper `SKILL.md` files with:
   - Precise trigger phrases
   - One-to-one MCP tool mappings
   - Full privacy & safety declarations
3. Human reviews the drafts.
4. Skills are published via ClawHub as `genesis-release-linear-sync`, `genesis-release-github-bridge`, etc.
5. Future agents (including other contributors) can simply `clawhub install` them instead of repeating discovery work.

Persistent state is updated with the newly promoted skills:

```json
"promoted_skills": [
  { "name": "genesis-release-linear-sync", "published": true, "clawhub_slug": "..." }
]
```

## Key Principles Enforced by the Trio

- **Never** treat Smithery connections, namespaces, or discovered MCP tools as ephemeral.
- **Always** record connection IDs, active namespaces, and token expiry in persistent state.
- **Prefer** narrowly-scoped tokens + human handoff on `auth_required`.
- **Promote** repeated high-value capabilities into permanent community skills using the bridge pattern.
- **Document** everything with the same rigor used in the original three `SKILL.md` files.

## Recommended Extended State Shape

See the example in `examples/combined-three-skill-workflow.md` and the base template in `grok-persistent-state/state-template.json`.

## Installation of the Full Stack

```bash
clawhub install grok-persistent-state
clawhub install mcp-openclaw-bridge
clawhub install smithery-mcp-orchestrator
```

This combination gives agents professional-grade **discovery + memory + security + distribution** on the Smithery + OpenClaw + MCP stack.

---

*Maintained as part of the Igor Holt OpenClaw Skills (v1.0.0).*