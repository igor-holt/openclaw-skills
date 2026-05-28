# OpenClaw Skills (Genesis Conductor Layer) — by @invariantx

**@invariantx** (Igor Holt) — https://x.com/invariantx

Production-grade agent infrastructure extracted from previous Genesis Conductor sessions (soul capsules, clawbot-grok persistent state patterns, A2A coordination, thermodynamic verification mindset).

These three skills form a complete, designed-to-compose professional stack for reliable, memoryful, securely orchestrated autonomous agents on the OpenClaw + Smithery + MCP substrate.

Follow @invariantx on X for all updates, deeper threads, and the full series.

## The Paired Trio (Designed to Work Together)

These three skills form a complete professional stack:

### 1. grok-persistent-state (v1.0.0)
**Persistent project state + unified skill registry** for stateless LLMs (Grok, OpenClaw, Claude Code, etc.).

Solves the fundamental "amnesia" problem. Agents can now remember goals, decisions, open tasks, artifacts, and active Smithery namespaces/connections across every turn.

**Install:** `clawhub install grok-persistent-state`

### 2. mcp-openclaw-bridge (v1.0.0)
**Turn any MCP server into first-class, versioned OpenClaw skills.**

Extract the most valuable tools/resources from an MCP server (discovered via Smithery or otherwise) and publish them as permanent, triggerable ClawHub skills that any agent can install.

**Install:** `clawhub install mcp-openclaw-bridge`

### 3. smithery-mcp-orchestrator (v1.0.0) — NEW
**Discover, securely connect, scope tokens, and orchestrate 100K+ tools from Smithery inside OpenClaw agents.**

Canonical workflows for namespaces, long-lived MCP connections, advanced token policies with `rpcReqMatch` restrictions, handling `auth_required` flows, and piped JSONL output — all explicitly paired with the persistent state and MCP bridge skills above.

**Install:** `clawhub install smithery-mcp-orchestrator`

## How the Three Skills Compose

- Use **smithery-mcp-orchestrator** to find and connect to new services safely.
- Use **grok-persistent-state** to remember active namespaces, connection IDs, and scoped tokens.
- Use **mcp-openclaw-bridge** to promote the best discovered capabilities into permanent, published skills for the whole community.

Together they give agents professional-grade discovery + memory + security + distribution on the Smithery + OpenClaw + MCP stack.

## Philosophy

These skills prioritize:
- **Correctness & verifiability** (thermodynamic/topological mindset from Genesis Conductor)
- **Clear trigger surfaces** (agents know exactly when to activate them)
- **Explicit safety & privacy boundaries** (especially around credentials and token scoping)
- **Real production patterns** (not toy examples)

They are designed to compose with the dominant tactical skills in the ClawHub ecosystem (browser automation, code review, tool discovery, etc.).

## Publishing & Versioning

All skills follow strict semantic versioning + detailed changelogs on every publish.

MIT-0 / open contribution friendly.

## Real-World Production Usage

These skills power live autonomous agent systems, including:

- **InvariantX ↔ DiamondNodeBot** on Telegram — OpenClaw (with persistent state, MCP bridging, and Smithery orchestration) connected through the InvariantX identity layer to the DiamondNodeBot Telegram channel for reliable, attested, multi-channel agent operation.

This deployment demonstrates the full trio in production: durable memory across turns, safe exposure of MCP tools, and professional Smithery-driven discovery + token scoping for Telegram-based agent interfaces.

## Attribution

**@invariantx** (Igor Holt)

Creator of Genesis Conductor. Shipping the professional OpenClaw skills trio for production autonomous agents (thermodynamic verification + topological orchestration applied to real infrastructure).

- **X**: https://x.com/invariantx (primary updates + threads)
- GitHub: https://github.com/igor-holt
- Main site: https://genesisconductor.io

All work in this repository and the associated ClawHub skills is authored and maintained by @invariantx. Follow on X for ongoing Genesis Conductor agent infrastructure releases, DiamondNode integrations, and production patterns.

Part of the broader effort to raise the reliability and architectural floor of the open agent ecosystem.
