#!/usr/bin/env bash
# publish-all.sh
# Production-ready publishing script for Igor Holt's OpenClaw Skills trio (v1.0.0)
#
# Modern command usage:
#   ./publishing/publish-all.sh
#   ./publishing/publish-all.sh --dry-run
#   ./publishing/publish-all.sh --yes
#
# Special DiamondNode/Telegram auth path (recommended for this environment):
#   1. ssh diamondnode@192.168.1.228
#   2. From that machine, complete ClawHub login via Telegram (diamondnodebot)
#   3. Then run this script on the machine that has the source (or copy the repo)

set -euo pipefail

# --- Configuration ---
DRY_RUN=false
AUTO_YES=false
VERBOSE=false

# --- Argument Parsing ---
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=true; shift ;;
    --yes)     AUTO_YES=true; shift ;;
    --verbose) VERBOSE=true; shift ;;
    -h|--help)
      echo "Usage: $0 [--dry-run] [--yes] [--verbose]"
      echo "  --dry-run   Show exactly what would be executed"
      echo "  --yes       Skip interactive confirmations"
      echo "  --verbose   Show extra diagnostic output"
      exit 0
      ;;
    *) echo "Unknown argument: $1"; exit 1 ;;
  esac
done

# --- Helper Functions ---
log() { echo -e "\033[1;34m[INFO]\033[0m $*"; }
warn() { echo -e "\033[1;33m[WARN]\033[0m $*"; }
error() { echo -e "\033[1;31m[ERROR]\033[0m $*"; exit 1; }

run_cmd() {
  echo
  echo "+ $*"
  if $DRY_RUN; then
    echo "  (DRY-RUN — not executed)"
    return 0
  fi
  "$@"
}

check_clawhub() {
  if ! command -v clawhub >/dev/null 2>&1; then
    error "clawhub CLI not found. Install with: npm install -g clawhub"
  fi
  local ver
  ver=$(clawhub --cli-version 2>/dev/null || echo "unknown")
  log "ClawHub CLI detected: $ver"
}

check_auth() {
  echo
  log "Checking authentication status..."
  if clawhub whoami >/dev/null 2>&1; then
    log "Already authenticated."
    clawhub whoami || true
    return 0
  fi

  warn "Not logged in to ClawHub."

  echo
  echo "Recommended login methods for this environment:"
  echo "  1. Device Flow (headless friendly):"
  echo "       clawhub login --device"
  echo
  echo "  2. Telegram / DiamondNode path (preferred here):"
  echo "       ssh diamondnode@192.168.1.228"
  echo "       # Then complete auth via diamondnodebot on Telegram from that machine"
  echo "       # After successful login on the remote machine, copy any token if needed or re-run from here"
  echo
  echo "  3. Direct token (if you have one):"
  echo "       clawhub login --token <token>"
  echo

  if $DRY_RUN; then
    echo "DRY-RUN: would have prompted for login"
    return 1
  fi

  read -r -p "Attempt 'clawhub login --device' now? [y/N]: " reply || true
  if [[ "${reply:-}" =~ ^[Yy]$ ]]; then
    clawhub login --device
    echo
    if ! clawhub whoami >/dev/null 2>&1; then
      error "Login via --device did not succeed. Please complete it manually and re-run this script."
    fi
    log "Authentication successful."
    clawhub whoami || true
    return 0
  else
    error "Please authenticate first using one of the methods above, then re-run this script."
  fi
}

validate_skills() {
  local missing=0
  for skill in grok-persistent-state mcp-openclaw-bridge smithery-mcp-orchestrator; do
    if [[ ! -d "$skill" || ! -f "$skill/SKILL.md" ]]; then
      error "Missing required skill directory or SKILL.md: $skill"
      missing=1
    fi
  done
  [[ $missing -eq 0 ]] || exit 1
  log "All three skill directories and SKILL.md files validated."
}

# --- High-quality changelogs and security notes (abbreviated for script size) ---
CHANGELOG_GROK="v1.0.0 — Initial release. Persistent project state + unified skill registry..."
CHANGELOG_MCP="v1.0.0 — Initial release. MCP → ClawHub skill bridging patterns..."
CHANGELOG_SMITHERY="v1.0.0 — Initial release. Smithery orchestration + secure token scoping..."

CLAWSCAN_GROK="Local-only state management. No network, no secrets."
CLAWSCAN_MCP="Documentation and mapping patterns only."
CLAWSCAN_SMITHERY="Guides use of official Smithery CLI. No credential handling in skill."

publish_one() {
  local dir=$1 slug=$2 version=$3 changelog=$4 clawscan=$5

  echo
  log "Publishing ${slug} v${version} from ./${dir}/"

  local cmd=(
    clawhub skill publish "./${dir}"
    --slug "${slug}"
    --version "${version}"
    --changelog "${changelog}"
    --clawscan-note "${clawscan}"
    --tags "latest,genesis-conductor,production"
  )

  if $AUTO_YES; then cmd+=(--yes); fi

  run_cmd "${cmd[@]}"

  if ! $DRY_RUN; then
    echo "  → Publish command finished for ${slug}."
  fi
}

# --- Main Execution ---
echo "============================================================"
echo "  Igor Holt (@invariantx) — OpenClaw Skills Publishing"
echo "  Trio: grok-persistent-state + mcp-openclaw-bridge + smithery-mcp-orchestrator"
echo "============================================================"

check_clawhub
check_auth
validate_skills

echo
log "All pre-flight checks passed."

publish_one grok-persistent-state     grok-persistent-state     "1.0.0" "$CHANGELOG_GROK"     "$CLAWSCAN_GROK"
publish_one mcp-openclaw-bridge       mcp-openclaw-bridge       "1.0.0" "$CHANGELOG_MCP"      "$CLAWSCAN_MCP"
publish_one smithery-mcp-orchestrator smithery-mcp-orchestrator "1.0.0" "$CHANGELOG_SMITHERY" "$CLAWSCAN_SMITHERY"

echo
log "All three skills have been submitted for publishing."
echo
echo "Next recommended actions:"
echo "  clawhub inspect grok-persistent-state --versions"
echo "  (repeat for the other two skills)"
echo
echo "After successful publication, update your X (@invariantx), LinkedIn, and genesisconductor.io with the new ClawHub links."
echo
echo "Thank you for shipping production-grade agent infrastructure."