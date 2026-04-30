#!/usr/bin/env bash
# Deploy to the TEST HA VM (ha-test / 192.168.1.141) only.
# Never targets production. Use deploy-prod.sh for production deploys.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$SCRIPT_DIR/.."
HA_TEST_HOST="${HA_TEST_HOST:-ha-test}"
HA_CONFIG="${HA_CONFIG:-/config}"

echo "Building..."
cd "$ROOT"
npm run build

echo "Deploying to ${HA_TEST_HOST}:${HA_CONFIG}/custom_components/ha_card_designer/ via tar pipe..."
tar -czf - custom_components/ha_card_designer/ | \
  ssh "${HA_TEST_HOST}" "tar -xzf - -C ${HA_CONFIG}/"

echo ""
echo "Deploy complete. Restart HA to pick up the new bundle:"
echo "  /ha test restart   (Claude Code)"
echo "  or: mcp__hass-mcp-test__restart_ha"
