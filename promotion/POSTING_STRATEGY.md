# Posting Strategy, Hashtags & Asset Usage Guide

**For the v1.0.0 Launch of the Igor Holt OpenClaw Skills Trio**  
Repo: https://github.com/igor-holt/openclaw-skills

---

## Primary Assets (All Copy-Paste Ready)

| Asset File                        | Purpose                              | Recommended Primary Channel | Word / Tweet Count | Key Elements Included |
|-----------------------------------|--------------------------------------|-----------------------------|--------------------|-----------------------|
| `X_THREAD.md`                     | 7-tweet professional thread          | X / Twitter                 | 7 tweets           | Install commands, GitHub link on multiple tweets, Genesis Conductor angle |
| `LINKEDIN_POST.md`                | Long-form professional positioning   | LinkedIn                    | ~510 words         | Full stack explanation, install commands, repo link |
| `GITHUB_RELEASE_v1.0.0.md`        | GitHub Releases page content         | GitHub (as release body)    | Full release notes | Detailed highlights, workflows, attribution |
| `THREE_SKILLS_ONE_STACK.md`       | Short integration & workflow guide   | ClawHub skill pages, repo, announcements | Concise markdown | Composition loop, 3 detailed workflows, safety checklist |
| `ABOUT_THE_AUTHOR.md`             | Author blurb for profiles            | LinkedIn About, GitHub bio, ClawHub author, X | 1 paragraph        | Technical credibility + Genesis Conductor + specific skills |

**All assets contain the exact ClawHub install commands and the canonical GitHub link.**

---

## Recommended Hashtags (Use Consistently)

**Core (always include on X, LinkedIn, GitHub):**
`#OpenClaw #ClawHub #MCP #Smithery #GenesisConductor #AgentInfrastructure`

**Secondary (rotate 3–5 per post for reach):**
`#AIAgents #AutonomousAgents #Grok #PersistentState #TokenScoping #ModelContextProtocol #OpenSourceAI #AgenticAI #AIOrchestration`

**Platform-specific notes:**
- X: Use 3–5 total per tweet (main ones in final tweet). Avoid over-tagging.
- LinkedIn: Place in the last paragraph or first comment. 4–6 is effective.
- GitHub release: Include in the release body description.

---

## Posting Cadence & Sequence (Launch Day Plan)

**T-0 (Launch Day — Recommended: Tuesday or Wednesday, 9:30–11:00 AM PT)**

1. **09:30 AM PT** — Create GitHub Release v1.0.0 (use `GITHUB_RELEASE_v1.0.0.md`). This is the canonical source of truth. Pin the release on the repo.
2. **09:45 AM PT** — Post the X thread (`X_THREAD.md`). Pin Tweet 1 for 7–10 days. Immediately reply to the thread with:
   - Link to the GitHub release
   - Link to the LinkedIn post (once live)
   - Link to `THREE_SKILLS_ONE_STACK.md` (raw or rendered)
3. **10:15 AM PT** — Publish the LinkedIn post (`LINKEDIN_POST.md`). In the first comment, add:
   - GitHub release link
   - X thread link
   - "Full integration guide and workflows: [link to THREE_SKILLS_ONE_STACK.md]"
4. **Throughout the day** — Share the GitHub release link in relevant Discords (OpenClaw, Smithery, MCP communities) and technical Slack channels. Use the concise blurb from `ABOUT_THE_AUTHOR.md` when introducing yourself.

**Follow-up (Days 2–7)**
- Share `THREE_SKILLS_ONE_STACK.md` as a standalone post or thread reply with the headline "How the three skills actually compose — with real workflows."
- Post a short technical thread or LinkedIn carousel breaking down one skill per day (e.g., token scoping patterns on Day 3).
- Engage with every thoughtful reply/comment for the first 72 hours.

---

## Cross-Promotion & Amplification

- **In the X thread final tweet and LinkedIn first comment:** Always include the three exact `clawhub install` commands + repo link.
- **In ClawHub skill pages** (after publishing): Link to `THREE_SKILLS_ONE_STACK.md` and the GitHub repo in the "Related" or "Documentation" fields. Use the author blurb.
- **In other project READMEs** (mcp-server, clawbot-grok, gc-* workers): The background update process has already added tasteful references. Keep them consistent with the phrasing in this promotion set.
- **Quote-tweet or repost strategy:** When others share the launch, quote with one concrete benefit (e.g., "The rpcReqMatch token scoping example in smithery-mcp-orchestrator is the part I wish every agent builder had on day one.").
- **Visuals:** For LinkedIn and X, consider a simple three-box diagram (Discovery / Memory / Distribution) or screenshots of the three ClawHub skill pages once live. The repo README screenshot also works well.

---

## Tone & Messaging Guardrails (Enforced Across All Assets)

- Technical, credible, architectural — never hype or "revolutionary."
- Emphasize: reliability, security (token scoping + human handoff), memory hygiene, composability with the broader OpenClaw/Smithery/MCP ecosystem.
- Always surface the Genesis Conductor lineage (thermodynamic verification + topological orchestration mindset) as the philosophical foundation, not as marketing.
- Every asset must contain the install commands and GitHub link verbatim.
- Credit the OpenClaw and Smithery communities explicitly when appropriate.

---

## Asset Maintenance

- When shipping v1.0.1+ of any individual skill, update the changelogs in `publishing/CHANGELOGS.md` first, then mirror concise updates into the promotion assets and the GitHub release (new minor release or edit existing).
- Keep `THREE_SKILLS_ONE_STACK.md` as the living integration reference — it is the document most likely to be linked from ClawHub and external tutorials.
- The `ABOUT_THE_AUTHOR.md` blurb should be reviewed annually or after major new contributions.

---

## Quick Copy Blocks (for speed)

**Minimal install block (safe for any platform):**
```
clawhub install grok-persistent-state
clawhub install mcp-openclaw-bridge
clawhub install smithery-mcp-orchestrator
```

**Repo attribution line (use at end of every asset or comment):**
Full documentation, workflows, and source: https://github.com/igor-holt/openclaw-skills

**Short author signature:**
Igor Holt — Creator of Genesis Conductor. Shipping reliable agent infrastructure on OpenClaw + MCP + Smithery.

---

**This strategy document is the single source of truth for launch execution.** Update it with actual publish dates, engagement metrics, or lessons learned after the campaign.

**End of strategy & hashtags guide.**