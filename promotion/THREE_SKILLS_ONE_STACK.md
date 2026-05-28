# Three Skills, One Stack — Integration Guide

**The Professional OpenClaw Agent Infrastructure Bundle by Igor Holt**

This short guide explains how `grok-persistent-state`, `mcp-openclaw-bridge`, and `smithery-mcp-orchestrator` are designed to compose into a complete, reliable loop for long-running autonomous agents.

**GitHub repo:** https://github.com/igor-holt/openclaw-skills

**One-command install for the full stack:**

```bash
clawhub install grok-persistent-state
clawhub install mcp-openclaw-bridge
clawhub install smithery-mcp-orchestrator
```

---

## The Three Layers

| Skill                        | Role                              | Primary Responsibility                          | Key Safety Emphasis                  |
|-----------------------------|-----------------------------------|--------------------------------------------------|--------------------------------------|
| smithery-mcp-orchestrator   | Discovery & Security              | Namespaces, connections, scoped tokens, auth handoff | Never hand raw credentials to agents |
| grok-persistent-state       | Memory & Continuity               | Durable project state injection + patching      | Zero secrets/PII in state; local only |
| mcp-openclaw-bridge         | Distribution & Permanence         | Promote valuable MCP surfaces into ClawHub skills | Explicit privacy declarations in every bridged skill |

**The loop they enable:**  
Discovery (Smithery) → Memory (persistent state) → Distribution (permanent skills) → repeat.

---

## Core Composition Principles

1. **Never treat Smithery connections or MCP capabilities as ephemeral.** Every namespace, connection ID, and scoped token must be recorded in persistent state immediately.
2. **Prefer narrow, short-lived, policy-scoped tokens** (`rpcReqMatch` where supported) over broad credentials.
3. **Surface `auth_required` states to a human** — the agent must never attempt to bypass interactive flows.
4. **Promote high-value repeated patterns.** When an agent validates a useful MCP tool combination in production, use the bridge patterns to publish it as a standalone ClawHub skill.
5. **Inject state at the absolute start of every turn.** The agent must treat the loaded `project_state.json` summary as canonical memory.

---

## Recommended Persistent State Shape (Extended)

Base schema lives in `grok-persistent-state/state-template.json`. Extend it for the full stack:

```json
{
  "project_id": "genesis-conductor-release-2026",
  "goal": "Coordinate Genesis Conductor 2026 release across GitHub and Linear",
  "current_focus": "Sync high-priority Linear issues to GitHub project",
  "recent_changes": ["Established scoped Smithery connections"],
  "open_tasks": ["Define release criteria", "Create release tracking dashboard"],
  "decisions": ["All Smithery tokens use short TTLs + metadata filters"],
  "artifacts": ["docs/release-criteria.md"],
  "smithery": {
    "active_namespace": "genesis-conductor-release-2026",
    "active_connections": ["gh-release-tracking", "linear-release-tracking"],
    "scoped_tokens": {
      "gh-release-tracking": {
        "expires": "2026-05-28T18:00:00Z",
        "policy": "narrow read/execute"
      }
    }
  },
  "promoted_skills": [
    {
      "name": "genesis-release-linear-sync",
      "published": true,
      "clawhub_slug": "igor-holt/genesis-release-linear-sync"
    }
  ],
  "updated_at": "2026-05-27T..."
}
```

After any Smithery operation that mutates state, immediately call the equivalent of `patch_state` with the delta.

---

## Example Workflows

### Workflow A: Initial Secure Setup (smithery-mcp-orchestrator + grok-persistent-state)

**User prompt:** "Set up GitHub and Linear access for the Genesis Conductor 2026 release project using Smithery. Remember everything."

**Agent steps (guided by the two skills):**

1. Activate `smithery-mcp-orchestrator`.
2. `smithery namespace create genesis-conductor-release-2026 && smithery namespace use ...`
3. Create connections with rich metadata:
   ```bash
   smithery mcp add https://github.run.tools --id gh-release-tracking --metadata '{"project":"genesis-conductor-release-2026"}'
   smithery mcp add https://linear.app --id linear-release-tracking --metadata ...
   ```
4. Mint narrowly scoped tokens (example policy):
   ```bash
   smithery auth token --policy '{
     "namespaces": "genesis-conductor-release-2026",
     "resources": "connections",
     "operations": ["read", "execute"],
     "ttl": "2h"
   }'
   ```
5. Immediately patch state (via `grok-persistent-state`) recording namespace, connection IDs, and token expiry.
6. Confirm to user and list next concrete open tasks.

Future turns begin by loading the exact same namespace and connections from state — zero re-explanation required.

### Workflow B: Promotion to Permanent Skills (All Three Skills)

After repeated successful use of specific Linear + GitHub tool combinations:

1. Agent (guided by `smithery-mcp-orchestrator`) identifies the 3–4 highest-value repeated patterns.
2. Using `mcp-openclaw-bridge` patterns, it drafts thin `SKILL.md` + `mcp-mapping.json` files with:
   - Precise trigger phrases
   - One-to-one MCP tool mappings
   - Full "Data that stays local" declarations
3. Human reviews the drafts for safety and accuracy.
4. Skills are published via ClawHub (e.g., `genesis-release-linear-sync`).
5. `grok-persistent-state` is updated with the new `promoted_skills` entries.

Future agents (including contributors on other machines) simply `clawhub install` the promoted skills instead of repeating discovery and connection work.

### Workflow C: Memory Restoration Mid-Project

**User:** "Where were we with the release criteria?"

**Agent (with grok-persistent-state active):**

1. At the very start of the turn: load `project_state.json`.
2. Inject a crisp summary (current_focus, open_tasks, active Smithery namespace + connections) **before** processing the user message.
3. Restore the exact Smithery namespace via `smithery namespace use`.
4. Continue work with full context. No user re-explains goals or re-authenticates flows.

---

## Quick Reference — Trigger Phrases

- **smithery-mcp-orchestrator:** "find me a tool for...", "connect to GitHub via Smithery", "create a scoped token", "handle Smithery auth_required"
- **grok-persistent-state:** "remember the project state", "update the project state", "what are our open tasks?", "continue from where we left off"
- **mcp-openclaw-bridge:** "turn this MCP server into an OpenClaw skill", "bridge MCP to clawhub", "publish my MCP tools as skills"

---

## Safety Checklist (Enforced by the Skills)

- [ ] All Smithery work occurs inside a named namespace with metadata.
- [ ] Tokens are minted with the narrowest possible policy and short TTL.
- [ ] `auth_required` URLs are always surfaced to a human.
- [ ] Every state mutation is recorded via `patch_state`.
- [ ] No secrets or PII ever enter `project_state.json`.
- [ ] High-value MCP surfaces are considered for promotion via the bridge.

---

**Full details, SKILL.md files, templates, and advanced examples:**  
https://github.com/igor-holt/openclaw-skills

These three skills together deliver **discovery + memory + security + distribution** for professional autonomous agent work.

---

**End of integration guide.** This file is intended to be linked from ClawHub skill pages, the GitHub README, and announcement posts.