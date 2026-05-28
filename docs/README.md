# LidLift Pareto Lifecycle — GitHub Pages

This folder contains the static site for the **LidLift Pareto Lifecycle: MCP Tool Dissonance Scoring Dashboard**.

**Canonical Secure Production URL:** https://clawdash.genesisconductor.io

## Deployment (GitHub Pages + Custom Domain)

1. Go to the repository **Settings → Pages**.
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/docs`
3. Add the custom domain `clawdash.genesisconductor.io` and enable "Enforce HTTPS".
4. Create the DNS CNAME record:
   - Type: `CNAME`
   - Name: `clawdash`
   - Value: `igor-holt.github.io.`

Once DNS propagates and the certificate is issued, the dashboard will be securely available at **https://clawdash.genesisconductor.io**.

## Content

- `index.html` — The full interactive dashboard experience
- `assets/` — Dashboard data, QUBO script, and OG assets

## Branding & Attribution

All pages prominently feature **@invariantx** as the creator and operator, with strong links to the three OpenClaw skills, the A2A Copilot Fleet mission, and Genesis Conductor.

## Updating

Edit `index.html` directly. Keep the design language consistent with the rest of the Genesis Conductor / @invariantx ecosystem.

---

Part of the OpenClaw Skills bundle by @invariantx.