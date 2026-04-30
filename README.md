# Card Designer for Home Assistant

A visual drag-and-drop Lovelace card designer — pick a card type, configure it with form fields, see a **real live preview**, then copy the YAML and paste it into any dashboard.

Installed via HACS as a custom integration. Adds a **Card Designer** entry to the HA sidebar, modelled after the switch_manager UX.

## Supported Cards (v0.1)

| Category | Cards |
|---|---|
| **Stock** | Tile, Entities, Vertical Stack, Horizontal Stack, Grid, Button, Gauge, Glance, Markdown |
| **Mushroom** | Entity, Template, Chips |
| **Custom** | Mini Graph Card, Bubble Card, Button Card (non-template subset) |

Custom cards are greyed out when not installed — click them to see the HACS install hint.

## Installation

### HACS (recommended, production)

1. Add this repo to HACS custom repositories:  
   `https://github.com/stevendejongnl/ha-card-designer`  
   Category: **Integration**
2. Install **Card Designer** from HACS
3. Restart Home Assistant
4. Go to **Settings → Devices & Services → Add Integration** and search for **Card Designer**
5. The **Card Designer** panel appears in the sidebar

### SCP (testing / development)

```bash
# Build the frontend
cd /path/to/ha-card-designer
npm run build

# Deploy to HA test instance
scp -r custom_components/ha_card_designer/ home-assistant:/config/custom_components/

# Restart HA (or use the MCP tool)
ssh home-assistant 'bash -l -c "ha core restart"'
```

## Development

```bash
npm install
npm run build      # production bundle
npm run dev        # watch mode (rebuilds on save)
npm run typecheck  # TypeScript type checking
```

### Adding a card schema

See [`docs/adding-a-card.md`](docs/adding-a-card.md) for the full guide.

## Architecture

- **`custom_components/ha_card_designer/`** — Python integration. Registers a HA panel (`embed_iframe: false`) and serves the built JS bundle.
- **`src/core/schema.ts`** — `CardSchema` interface. Every card is one exported object.
- **`src/core/selectors.ts`** — Shorthand helpers for ha-form selector types.
- **`src/core/yaml.ts`** — Config → clean YAML (strips defaults, applies key ordering).
- **`src/core/registry.ts`** — Master list of all supported cards.
- **`src/panel/`** — Lit components: card list rail, ha-form editor, real preview (`createThing` + `hass`), YAML output.
- **`src/cards/`** — One file per card schema.

## Why `embed_iframe: false`?

The panel runs directly in HA's document (not an iframe) so our preview component can call `createThing()` and inject `hass` — the same way Lovelace dashboards render cards. This gives pixel-perfect preview without any additional rendering infrastructure.
