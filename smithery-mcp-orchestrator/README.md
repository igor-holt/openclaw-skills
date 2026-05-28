# smithery-mcp-orchestrator

**Discover, securely connect, scope tokens, and orchestrate 100K+ MCP tools from Smithery inside OpenClaw and Grok agents.**

Explicitly designed to compose with `grok-persistent-state` (memory of namespaces & connections) and `mcp-openclaw-bridge` (promoting discoveries into permanent skills).

**Install:** `clawhub install smithery-mcp-orchestrator`

## When to Use

Activate on:
- "find me a tool for..."
- "connect to GitHub / Linear / Notion via Smithery"
- "search Smithery for..."
- "create a scoped token for..."
- "handle Smithery auth_required"
- "orchestrate tools with Smithery"

## Quick Start Workflow

```bash
# 1. Namespace discipline (always)
smithery namespace create my-project
smithery namespace use my-project

# 2. Connect with metadata
smithery mcp add https://github.run.tools --id my-github --metadata '{"project":"my-project"}'

# 3. Explore safely
smithery tool list my-github --flat
smithery tool get my-github issues.create

# 4. Mint narrow scoped token (critical for agents)
smithery auth token --policy '{ "namespaces": "my-project", "resources": "connections", "operations": ["read","execute"], "ttl": "2h" }'

# 5. Call tools + immediately record in persistent state
smithery tool call my-github issues.create '{"repo":"...", "title":"..."}'
```

## Key Agent Patterns (Paired with the Trio)

- **Memory:** After every namespace/connection/token change → `patch_state` via grok-persistent-state.
- **Promotion:** When a discovered MCP surface proves valuable repeatedly → use mcp-openclaw-bridge to publish it as a standalone ClawHub skill.
- **Safety:** Never hand full credentials to the agent. Always prefer `rpcReqMatch` policies and short TTLs. Surface `auth_required` URLs to the human.

See the full quick-start and policy examples in `SKILL.md`.

## Full Documentation

See [SKILL.md](./SKILL.md) for namespaces, connection lifecycle, advanced token scoping with `rpcReqMatch`, `auth_required` handling, piped JSONL usage, and the explicit paired workflows with the other two skills in this bundle.

**Version:** 1.0.0 | Part of the Igor Holt OpenClaw Skills trio (discovery + memory + distribution).