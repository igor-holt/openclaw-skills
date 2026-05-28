# mcp-openclaw-bridge

**Bridge Model Context Protocol (MCP) servers into first-class, versioned OpenClaw / ClawHub skills.**

Turn valuable MCP tools, resources, and prompts into permanent, discoverable, triggerable skills that any agent can install.

**Install:** `clawhub install mcp-openclaw-bridge`

## When to Use

Use when you have an MCP server (from Smithery, local, or elsewhere) and want to:
- Publish its capabilities as native OpenClaw skills
- Make production tool surfaces available to agents without custom glue each time
- Create thin, auditable adapters with clear safety boundaries

Trigger phrases include: "turn this MCP server into an OpenClaw skill", "bridge MCP to clawhub", "publish my MCP tools as skills".

## Quick Example: Mapping Pattern

Given an MCP server with a `calculator` tool:

**In your bridged skill's mapping (see `mcp-mapping-example.json`):**

```json
{
  "intent": "perform arithmetic or calculations",
  "trigger_phrases": ["calculate", "what is 15 * 23"],
  "mcp_tool": "calculator",
  "param_transform": { "operation": "multiply", "a": 15, "b": 23 }
}
```

The agent follows the documented mapping, invokes the real MCP endpoint safely, and respects privacy declarations.

## Recommended Bridged Skill Layout

```
my-mcp-capability/
├── SKILL.md
├── mcp-mapping.json
├── README.md
└── examples/
    └── usage.md
```

## Security & Privacy (Non-Negotiable)

- All MCP credentials and config stay local.
- Only the minimal serialized tool call arguments ever leave the machine.
- Explicit declarations required in every bridged skill (see `SKILL.md`).

## Full Documentation

See [SKILL.md](./SKILL.md) for the complete bridge pattern, privacy rules, recommended frontmatter, author and consumer workflows, and how this skill pairs with the rest of the trio.

**Version:** 1.0.0 | Part of the Igor Holt OpenClaw Skills professional stack.