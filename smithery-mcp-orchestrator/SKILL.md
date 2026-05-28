---
name: smithery-mcp-orchestrator
description: Discover, securely connect, scope tokens, and orchestrate 100K+ MCP tools from Smithery inside OpenClaw and Grok agents. Pairs with persistent state and MCP bridging patterns.
version: 1.0.0
metadata:
  openclaw:
    requires:
      bins: ["smithery", "npm"]
    emoji: "🧰"
    homepage: "https://github.com/igor-holt/openclaw-skills"
    os: ["darwin", "linux"]
---

# Smithery MCP Orchestrator for OpenClaw Agents

**Primary use:** When an agent needs to dynamically discover new tools/skills, connect to external services (GitHub, Linear, Notion, Slack, databases, cloud APIs, etc.), or manage long-lived MCP connections securely — all while running inside OpenClaw or with Grok.

## When to Use (Strong Trigger Phrases)

Activate automatically or on any of these phrases:
- "find me a tool for..."
- "connect to GitHub / Linear / Notion via Smithery"
- "search Smithery for..."
- "list my Smithery connections"
- "create a scoped token for..."
- "use Smithery to..."
- "discover new MCP servers"
- "handle Smithery auth_required"
- "orchestrate tools with Smithery"

## Why Pair Smithery with OpenClaw + Genesis Conductor Patterns

Smithery is the leading marketplace and connection layer for MCP servers. It solves discovery, OAuth, credential lifecycle, and namespacing at scale.

However, Smithery by itself is stateless CLI tooling. When used inside autonomous agents you need:

1. **Memory of connections and namespaces** across turns → pair with `grok-persistent-state`
2. **Ability to turn valuable discovered MCP servers into permanent, versioned OpenClaw skills** → pair with `mcp-openclaw-bridge`
3. **Safe, auditable token scoping** so agents never receive full API keys
4. **Reliable handling of interactive auth flows** (`auth_required` status)

This skill provides the canonical, production-grade workflows that combine all three.

## Core Concepts (Agent-Ready)

### 1. Namespaces — The Workspace Boundary

Always work inside a named namespace. One namespace per project/environment.

Recommended persistent state keys:
- `smithery.active_namespace`
- `smithery.namespaces` (list of known ones)

Canonical agent workflow:
```bash
smithery namespace list
smithery namespace create my-project-prod
smithery namespace use my-project-prod
```

After every change, update persistent state.

### 2. MCP Connections — Long-Lived Managed Sessions

A connection is a durable MCP session with OAuth, token refresh, and status tracking.

Status model agents must understand:
- `connected` → ready to use (`smithery tool list <id>`)
- `auth_required` → tell the human to open the URL shown by the CLI, then retry
- `error` → inspect and recover

Canonical user-scoped connection:
```bash
smithery mcp add https://github.run.tools \
  --id user-123-github \
  --metadata '{"userId":"user-123"}'

smithery mcp list --metadata '{"userId":"user-123"}'
```

Store the connection `id` in persistent state immediately after creation.

### 3. Secure Token Scoping (Critical for Agents)

**Never** give an agent a full Smithery or service API key.

Use `smithery auth token --policy '...' ` to mint short-lived, narrowly-scoped tokens.

Policy mental model:
- Fields inside one constraint are AND-ed (narrower)
- Multiple constraints or list values are OR-ed (wider)

Strong example (store the resulting token in state or env for the session only):

```bash
smithery auth token --policy '{
  "namespaces": "my-project-prod",
  "resources": "connections",
  "operations": ["read", "execute"],
  "metadata": { "userId": "user-123" },
  "ttl": "2h"
}'
```

Advanced request-level restriction (experimental but powerful):

```bash
smithery auth token --policy '{
  "resources": "connections",
  "operations": "execute",
  "metadata": { "connectionId": "my-github" },
  "rpcReqMatch": {
    "method": "tools/call",
    "params.name": "^issues\\."
  },
  "ttl": "30m"
}'
```

### 4. Tool Discovery & Inspection

```bash
smithery mcp search "github"
smithery tool list my-github
smithery tool list my-github issues.
smithery tool get my-github issues.create
```

Agents should prefer `smithery tool get` before calling unfamiliar tools to see the exact JSON schema.

### 5. Piped JSONL Output (Agent-Friendly)

When output is piped, Smithery emits clean JSONL:

```bash
smithery tool list my-github --flat --limit 500 | grep -i label
```

This is excellent for agents that want to filter or process results programmatically.

## Recommended Paired Patterns with the Other Skills in This Bundle

### Pattern A: Persistent Smithery Memory (with grok-persistent-state)

After any Smithery operation that creates or changes state, immediately patch:

```json
{
  "smithery": {
    "active_namespace": "my-project-prod",
    "active_connections": ["user-123-github", "user-123-linear"],
    "last_scoped_token_expiry": "2026-05-28T14:00:00Z"
  }
}
```

At the beginning of every session, restore the active namespace and list known connections before taking action.

### Pattern B: Permanent Skill Extraction (with mcp-openclaw-bridge)

When an agent discovers a high-value MCP server via Smithery that it will use repeatedly:

1. Use Smithery to explore and validate the server.
2. Apply the `mcp-openclaw-bridge` patterns to turn the most useful tool groups into dedicated, versioned ClawHub skills.
3. Publish those as `my-mcp-capability` skills so other agents can install them directly without repeating the discovery work.

### Pattern C: Safe Agent Token Lifecycle

- Mint scoped tokens with short TTLs.
- Store only the token (never the master key) in the current session's environment or state.
- When a token is about to expire, use persistent state to trigger re-minting before the next major action.

## Full Quick-Start Workflow (Copy into Agent Context) — Including Telegram / DiamondNodeBot

```bash
# 1. Ensure CLI is present
npm install -g @smithery/cli

# 2. Login (human interaction required on first use)
smithery auth login

# 3. Namespace discipline
smithery namespace create my-project
smithery namespace use my-project

# 4. Connect services (example: GitHub + production DiamondNodeBot Telegram channel via InvariantX)
smithery mcp add https://github.run.tools --id my-github --metadata '{"project":"genesis-conductor-release"}'
# DiamondNodeBot Telegram connection exposed via existing InvariantX MCP surface or custom connector

# 5. Explore & scope tokens carefully for Telegram actions
smithery tool list my-telegram-connection --flat

# 6. Mint narrow token (especially important for Telegram bot channels)
smithery auth token --policy '{ ... with rpcReqMatch for telegram actions ... }'

# 7. Operate safely across channels (web + Telegram DiamondNodeBot)
smithery tool call ...
```

**Production Note:** This pattern is used in live InvariantX deployments where OpenClaw (with these skills) is connected to the DiamondNodeBot Telegram channel for attested, multi-user agent operation.

## Safety & Scope Rules

**This skill MUST:**
- Enforce namespace discipline and connection metadata
- Teach agents to request human help on `auth_required`
- Always prefer narrowly-scoped tokens over broad credentials
- Record all created connections and tokens in persistent state

**This skill MUST NEVER:**
- Ask the agent to store or transmit full API keys
- Skip the `smithery tool get` inspection step for new tools
- Ignore `auth_required` states (always surface the URL to a human)
- Create connections without meaningful `--metadata` for later filtering

## Version History

- v1.0.0 — Initial release. Canonical Smithery workflows for OpenClaw agents, with explicit pairing instructions for `grok-persistent-state` and `mcp-openclaw-bridge`. Extracted from the official Smithery AI CLI skill and hardened with Genesis Conductor reliability patterns.

## Attribution

Composed by Igor Holt as part of the open agent infrastructure series.

Pairs naturally with:
- grok-persistent-state (memory of namespaces & connections)
- mcp-openclaw-bridge (turning discovered MCP servers into permanent skills)

Together these three skills give agents professional-grade discovery, memory, security, and distribution capabilities on the OpenClaw + Smithery + MCP stack.

---

**Install (once published):**

```bash
clawhub install smithery-mcp-orchestrator
clawhub install grok-persistent-state
clawhub install mcp-openclaw-bridge
```

Use this skill whenever dynamic tool discovery or secure multi-service orchestration is required inside autonomous agents.
