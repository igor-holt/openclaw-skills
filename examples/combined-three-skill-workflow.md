# Combined Workflow: The Three Igor Holt OpenClaw Skills Together

**Genesis Conductor Agent Infrastructure Layer**

This example shows the intended usage pattern for the professional A2A + verified memory + secure orchestration stack:

1. `smithery-mcp-orchestrator` — Discover, namespace, and securely scope connections (Smithery token policies + rpcReqMatch)
2. `grok-persistent-state` — Tamper-evident, hash-chainable persistent memory across stateless LLM turns (directly extracted from clawbot-grok patterns)
3. `mcp-openclaw-bridge` — Promote high-value discovered MCP surfaces into permanent, versioned, installable ClawHub skills for the broader agent network

## Core Principle (from previous Genesis Conductor sessions)
Single-pass autonomous execution with mission blocks, A2A handoff, and immutable provenance. Never lose context. Never hand full credentials to agents. Make valuable capabilities permanent and distributable.

## Scenario
Long-running Genesis Conductor release coordination agent that must maintain verified memory of decisions, safely orchestrate GitHub + Linear + other services via Smithery, and turn the most reliable workflows into reusable skills for the Yennefer / Grand Covenant style multi-agent network.

### Turn 1 – Multi-Channel Bootstrap including DiamondNodeBot (smithery-mcp-orchestrator + grok-persistent-state)
```
User: "Bootstrap the release agent with GitHub, Linear, and our DiamondNodeBot Telegram channel via InvariantX. Remember everything with provenance."

Agent:
1. Uses smithery-mcp-orchestrator
2. Ensures namespace "genesis-conductor-release-2026" exists and is active
3. Connects:
   - GitHub + Linear (standard Smithery)
   - DiamondNodeBot Telegram channel (via existing InvariantX connector / MCP exposure)
4. Mints narrowly scoped tokens (with Telegram-appropriate policies)
5. Immediately calls patch_state (via grok-persistent-state), including DiamondNode attestation hooks:
   {
     "smithery": {
       "active_namespace": "genesis-conductor-release-2026",
       "active_connections": ["gh-release", "linear-release", "diamondnodebot-telegram"],
       "invariantx_identity": true
     },
     "current_project": "Genesis Conductor 2026 Release Tracking",
     "open_tasks": ["Define release criteria", "Sync updates to DiamondNodeBot channel with attestation"],
     "provenance": { "diamondnode_attest_pending": true }
   }
```

### Ongoing Operation — Telegram Channel + Persistent Provenance
Users interact directly with **DiamondNodeBot** on Telegram.

The skill stack ensures:
- Full persistent state is loaded on every message (no amnesia)
- Safe, policy-scoped actions on the Telegram channel
- Actions are attested via DiamondNode for immutable audit (consistent with broader InvariantX / Grokepedia provenance systems)

### Later – Promotion (mcp-openclaw-bridge + smithery)
High-value "Telegram + attested release update" patterns discovered in real production are extracted and published as reusable ClawHub skills (e.g. `diamondnodebot-release-update`, `telegram-attested-dispatch`).

These become installable for other agents in the InvariantX / Genesis Conductor network.

## Key Principle

**Never** treat Smithery connections or MCP capabilities as ephemeral in a long-running agent.

Use the three skills as:
- Discovery & security layer (Smithery)
- Memory layer (Persistent State)
- Distribution & permanence layer (MCP Bridge)

This combination is what turns one-off agent experimentation into reliable, reusable infrastructure.

## Recommended Persistent State Shape (extend the default)

```json
{
  "smithery": {
    "active_namespace": "...",
    "active_connections": ["..."],
    "scoped_tokens": { "connectionId": { "token": "...", "expires": "..." } }
  },
  "promoted_skills": [
    { "name": "genesis-release-linear-sync", "published": true, "clawhub_slug": "..." }
  ]
}
```

Install the full set:
```bash
clawhub install grok-persistent-state
clawhub install mcp-openclaw-bridge
clawhub install smithery-mcp-orchestrator
```
