---
name: mcp-openclaw-bridge
description: Bridge Model Context Protocol (MCP) servers and tools into OpenClaw / ClawHub skills. Publish, discover, and use production MCP capabilities as native agent skills.
version: 1.0.0
metadata:
  openclaw:
    requires:
      env:
        - MCP_SERVER_PATH
      bins: []
    emoji: "🔌"
    homepage: "https://github.com/igor-holt/openclaw-skills"
    os: ["darwin", "linux"]
---

# MCP ↔ OpenClaw Bridge

**Primary use:** When you have (or want to build) an MCP server and need to surface its tools, resources, and prompts as first-class, installable OpenClaw skills that any compatible agent can discover and invoke.

## When to Use (Trigger Phrases)

Activate on phrases such as:
- "turn this MCP server into an OpenClaw skill"
- "bridge MCP tools to clawhub"
- "publish my MCP capabilities as skills"
- "use the MCP registry inside OpenClaw"
- "mcp skill" / "mcp to openclaw" / "mcp bridge"
- "expose my tools via clawhub"
- "how do I make my MCP server discoverable to agents"

## Why This Bridge Matters

- **MCP** (Model Context Protocol) is the emerging standard for tool/resource/prompt exposure to LLMs (Anthropic, OpenAI-compatible, etc.).
- **OpenClaw / ClawHub** is the dominant practical skill distribution and execution layer for autonomous agents.
- Without a bridge, valuable production MCP servers remain siloed.
- This skill gives a repeatable, safe pattern to publish MCP surface area as versioned, triggerable, auditable OpenClaw skills.

## Core Pattern

### 1. MCP Server Side (Already Done)
A compliant MCP server exposes:
- Tools (with JSON Schema input)
- Resources (URI-addressable data)
- Prompts (reusable templates)

Example production server: the multi-provider MCP server with calculator, web search, file ops, code execution, and dynamic provider routing.

### 2. Skill-ification Layer (This Skill)
For each logical capability or coherent tool group:

- Create a thin `SKILL.md` wrapper.
- Document exact trigger conditions.
- Provide the mapping from natural language → MCP tool call.
- Declare security, privacy, and data-flow boundaries.
- Version it and publish via `clawhub publish`.

### 3. Consumption
Agent sees the skill, matches trigger phrases, follows the documented mapping, and calls the underlying MCP endpoint (stdio, HTTP, or SDK).

## Recommended Skill Structure for an MCP-Bridged Skill

```
my-mcp-capability/
├── SKILL.md
├── mcp-mapping.json          # tool name → MCP method + param transform
├── examples/
│   └── usage.md
└── README.md                 # human onboarding
```

Inside `SKILL.md` include:

- Explicit "When to use" section with mandatory trigger phrases
- One-to-one mapping table (user intent → exact MCP tool + args)
- Privacy declaration ("all credentials remain local; nothing leaves except the declared tool payload")
- Error handling and fallback guidance
- Self-modification ban

## Security & Privacy Rules (Non-Negotiable)

**MUST declare:**
- Which environment variables or secrets the bridged MCP server requires.
- That credentials **never** travel to ClawHub, LLMBase, or any third party.
- Exact data that leaves the machine (only the minimal tool invocation payload).
- That the skill performs **no** autonomous execution outside the explicit user-approved MCP tool call.

**Example declaration block (copy into your bridged skills):**

```markdown
**Data that stays local:**
- All MCP server configuration and credentials
- Any intermediate files or state created by the MCP server

**Data that leaves your machine:**
- Only the serialized tool call arguments for the specific MCP tool invoked
- Standard OpenAI/Anthropic-compatible function call framing (if using remote LLM)
```

## Practical Example: Bridging a Multi-Provider MCP Server

Original MCP tools:
- `calculator` (add, multiply, ...)
- `web_search`
- `file_operations`
- `code_execution` (Python/JS/Bash with sandbox)

Bridged OpenClaw skills you can publish:
- `mcp-calculator` (simple arithmetic with verification)
- `mcp-web-research` (current information with source grounding)
- `mcp-secure-file-ops` (read/write with path validation rules)
- `mcp-code-execution` (sandboxed execution + result interpretation)

Each becomes its own versioned ClawHub skill with its own trigger table and safety surface.

## Recommended Frontmatter Additions for MCP-Bridged Skills

```yaml
metadata:
  openclaw:
    requires:
      env:
        - MCP_SERVER_PATH
        - ANY_REQUIRED_API_KEYS
    primaryEnv: MCP_SERVER_PATH
    envVars:
      - name: MCP_SERVER_PATH
        required: true
        description: "Path to the MCP server executable or stdio command"
```

## Workflow for Authors (You)

1. Identify a coherent slice of your MCP surface.
2. Write the SKILL.md using this bridge pattern.
3. Add mapping examples and safety rules.
4. Test locally with a real OpenClaw + Grok/Claude session.
5. `clawhub publish` with clear changelog.
6. Announce the new skill + install command.

## Workflow for Consumers (Agents & Users)

1. `clawhub install mcp-openclaw-bridge` (or the specific bridged skill).
2. The agent learns the trigger phrases and mapping.
3. On matching user intent, the agent follows the documented steps to invoke the real MCP capability safely.

## Relationship to Native OpenClaw Skills

- Native skills are pure text instruction files.
- MCP-bridged skills are **thin adapters** that unlock an entire existing tool ecosystem.
- The two compose beautifully: use native OpenClaw skills for high-level orchestration + MCP-bridged skills for deep, audited, production tool access.

## Version History

- v1.0.0 — Foundational bridge pattern, mapping guidance, privacy declarations, and publication workflow extracted from real multi-provider MCP server deployments and Genesis Conductor agent infrastructure.

## Attribution

Produced by Igor Holt (Genesis Conductor, thermodynamic AI verification, autonomous agent systems) as part of the open agent infrastructure layer. Complements the clawbot-grok persistent state patterns and the production MCP server implementation.

---

**Install via ClawHub (once published):**

`clawhub install mcp-openclaw-bridge`

Use whenever you need to make existing or new MCP servers first-class citizens in the OpenClaw ecosystem.
