#!/usr/bin/env bash
# Deploy to PRODUCTION HA (home-assistant / 192.168.1.25).
# ⚠️  This restarts the live Home Assistant instance.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPT_DIR/.."
HA_HOST="${HA_HOST:-home-assistant}"
HA_CONFIG="${HA_CONFIG:-/config}"

echo "⚠️  Deploying to PRODUCTION: ${HA_HOST}:${HA_CONFIG}/custom_components/ha_card_designer/"
read -r -p "Are you sure? [y/N] " confirm
[[ "$confirm" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 1; }

echo "Building..."
cd "$ROOT"
npm run build

echo "Deploying..."
scp -r custom_components/ha_card_designer/ "${HA_HOST}:${HA_CONFIG}/custom_components/"

echo "Restarting HA..."
ssh "${HA_HOST}" 'bash -l -c "ha core restart"'

echo "Done. Panel will be available at /card-designer after restart."
