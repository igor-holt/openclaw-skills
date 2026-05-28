# ClawHub Login Methods for Igor Holt (@invariantx) Environment

## 1. Recommended for this machine: DiamondNode + Telegram Flow

1. SSH into the DiamondNode host:
   ```bash
   ssh diamondnode@192.168.1.228
   ```

2. Once inside the DiamondNode environment, complete ClawHub authentication through the Telegram bot (diamondnodebot).

3. After successful Telegram auth, the token should be available in the environment or stored for the `clawhub` CLI on that machine.

4. From that session (or by copying any required token/config), run the publishing script:
   ```bash
   ./publishing/publish-all.sh
   ```

This flow is the one explicitly requested for the current environment.

## 2. Device Flow (Headless / Remote Friendly)

Run this command:

```bash
clawhub login --device
```

You will see output similar to:

```
To sign in, use a web browser to open the page https://...
and enter the code: XXXX-XXXX
```

- Open the URL in any browser (even on your phone).
- Enter the code shown.
- Complete the GitHub OAuth.
- Return to the terminal — the CLI should now be authenticated.

This is the most reliable method when browser callbacks are problematic.

## 3. Direct Token Login

If you have generated a token (via web UI or another method):

```bash
clawhub login --token <your-token>
```

## Verification

After any login method, always run:

```bash
clawhub whoami
```

You should see your handle (e.g., `igor-holt` or your publisher org) instead of an error.

## Troubleshooting

- If `whoami` still fails after Telegram/DiamondNode login, ensure the token was written to the correct location on the target machine.
- You can force re-auth with `clawhub logout && clawhub login --device`.
- For CI or fully headless scenarios, prefer `--token` or environment variables if supported by the CLI.

This document is meant to live alongside `publish-all.sh` for future reference.