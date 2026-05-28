# Pre-Publish Checklist — Igor Holt OpenClaw Skills (v1.0.0)

Short, focused checklist for the smooth `clawhub publish` of the three skills.

## Core Verification (All Skills)
- [x] Valid OpenClaw frontmatter in every SKILL.md (`name`, `description`, `version: 1.0.0`, `metadata.openclaw` with `requires`, `emoji`, `homepage`, `os`)
- [x] Homepage links correct: `https://github.com/igor-holt/openclaw-skills` in all three
- [x] No secrets, API keys, tokens, PII, or credentials anywhere in the repository (including templates, examples, JSON files, READMEs)
- [x] LICENSE at root is MIT-0 (No Attribution) and all content is compatible
- [x] Trigger phrases are explicit, specific, and conceptually tested against real agent usage patterns (documented in "When to Use" sections)
- [x] Security & privacy declarations present and strong in each SKILL.md (data that stays local vs. leaves the machine clearly stated)
- [x] Skills declare correct requirements (`env`, `bins`) and make no unsafe assumptions

## Per-Skill Highlights
- **grok-persistent-state**: Strong trigger surface + canonical state schema + strict "MUST / MUST NEVER" rules + patch_state discipline. Purely local FS. No network.
- **mcp-openclaw-bridge**: Explicit MCP mapping examples + privacy declarations + recommended bridged-skill structure. Patterns only (no execution).
- **smithery-mcp-orchestrator**: Namespace discipline, `auth_required` human handoff, advanced `rpcReqMatch` token scoping guidance, explicit pairing instructions with the other two skills. Requires documented `smithery` + `npm` CLIs.

## Bundle & Distribution
- [x] Root README presents the three skills as a designed-to-compose professional stack (Discovery + Memory + Distribution)
- [x] Cross-references and composition patterns are consistent across all three SKILL.md files and supporting docs
- [x] Attribution (Igor Holt / Genesis Conductor) is clear, professional, and lightweight
- [x] Each skill includes version history section suitable for changelogs
- [x] Supporting files (state-template.json, mcp-mapping-example.json, combined workflow example) are present, accurate, and secret-free

## Publishing Hygiene
- [x] Changelogs drafted (see CHANGELOGS.md and the publish script) — high-quality, specific, and suitable for `--changelog`
- [x] Recommended `--clawscan-note` values prepared for each skill (security context for ClawScan)
- [x] `publish-all.sh` supports `--dry-run` for safe preview of exact commands
- [x] All files follow the documented OpenClaw skill format and ClawHub publishing expectations (MIT-0, semver, clear triggers, safety surface)

## Post-Publish (After Successful `clawhub skill publish`)
- [ ] Run `clawhub inspect <slug> --versions --files` for each of the three
- [ ] Smoke-test via `clawhub install <slug>` into a real OpenClaw + Grok (or compatible) workspace
- [ ] Verify trigger phrases activate correctly in actual agent sessions
- [ ] Update personal sites, genesisconductor.io, LinkedIn, and repo cross-links
- [ ] Monitor ClawHub stats and LLMBase.ai author page
- [ ] Consider v1.0.1 within 1–2 weeks based on early usage feedback

**Status (2026-05-27)**: All items verified. The three skills + bundle are ready for `clawhub login` followed by publish via `publishing/publish-all.sh`.

Run the script with `--dry-run` first, then without, for a smooth publication of the complete professional stack.