#!/usr/bin/env bash
# Deploy to test HA instance via SCP (no HACS release needed)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPT_DIR/.."
HA_HOST="${HA_HOST:-home-assistant}"
HA_CONFIG="${HA_CONFIG:-/config}"

echo "Building..."
cd "$ROOT"
npm run build

echo "Deploying to $HA_HOST:$HA_CONFIG/custom_components/ha_card_designer/..."
scp -r custom_components/ha_card_designer/ "$HA_HOST:$HA_CONFIG/custom_components/"

echo "Restarting HA..."
ssh "$HA_HOST" 'bash -l -c "ha core restart"'

echo "Done. Panel will be available at /card-designer after restart."
