# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Visual Lovelace card designer for Home Assistant, distributed as a HACS custom integration. The Python side registers a sidebar panel; the TypeScript/Lit side renders a 4-pane editor (card list → ha-form → live `<hui-card>` preview → YAML output) inside HA's own document.

The authoritative status doc is **`HANDOFF.md`** — read it first for current task, next steps, blockers, and recent decisions.

## Commands

```bash
npm install            # one-time
npm run build          # production rollup bundle → custom_components/ha_card_designer/assets/ha-card-designer-panel.js
npm run dev            # rollup --watch
npm run typecheck      # tsc --noEmit
npm run lint           # eslint src --ext .ts
scripts/deploy-test.sh # build → tar-pipe over SSH → restart HA on test VM
```

There is **no test framework** configured. Don't suggest `npm test`, jest, vitest, etc. — they aren't wired up. CI runs typecheck + build only (`.github/workflows/ci.yml`).

## Architecture

- **Two halves, one repo.** `custom_components/ha_card_designer/` is a Python HA integration that registers the panel and serves the bundled JS. `src/` is the Lit/TypeScript frontend that gets bundled into `assets/ha-card-designer-panel.js` and committed to the repo (HACS pulls the built artifact).
- **Schema-per-file + central registry.** Every supported card is one exported `CardSchema` in `src/cards/<id>.ts`, listed in `src/core/registry.ts:ALL_CARDS`. Adding a new card = new file + one line in the registry. See `docs/adding-a-card.md`.
- **`CardSchema`** (`src/core/schema.ts`): `id`, `type`, `label`, `category` (`stock` | `mushroom` | `custom`), `installed(hass)`, `form(data) => FormSchema[]`, `defaults`, optional `resourceUrl`, `yamlOrder`. The `form` field is a **function**, not a static array — that's how conditional fields work.
- **YAML emitter** (`src/core/yaml.ts`): recursively strips fields that match `defaults` to keep output minimal, then reorders keys (`type`, `entity`, `entities`, then `yamlOrder`, then rest). `js-yaml` with `lineWidth: -1`, double-quote style.
- **Live preview** (`src/panel/card-preview.ts`): debounced 150ms, calls `createThing()` from `custom-card-helpers` and injects `hass`. For `resourceUrl`-bearing custom cards, lazy-loads the JS by injecting `<script type="module">` and waits ~200ms before render. Dedupes by `src` attribute.
- **State management:** plain Lit `@state` on the root `ha-card-designer-panel`; child panes (`hcd-card-list`, `hcd-card-form`, `hcd-card-preview`, `hcd-yaml-output`) bubble `card-selected` / `config-changed` `CustomEvent`s. No store.

## Load-bearing constraints — do not change without thinking

- **`embed_iframe: false`** in `__init__.py`'s panel registration. The preview only works because the panel runs in HA's main document and can reach `createThing()` / `<hui-card>`. Switching to `true` breaks the entire preview pane.
- **`ALWAYS_INCLUDE = ["type", "card_type"]`** in `src/core/yaml.ts`. The default-stripper would otherwise omit `type` when it equals the schema's default, producing invalid card YAML.
- **Use `createThing()` from `custom-card-helpers`** — there is no `createCardElement` export despite IDE suggestions.
- **Form schemas are functions `(data) => FormSchema[]`**, not static arrays. Required for conditional fields.
- **Bump `const.py:VERSION` when shipping a JS bundle without a HACS release.** The static asset URL appends `?v={VERSION}`; without a bump, browsers and HA serve stale JS.
- **Don't `scp` to the hassio SSH addon** — it has no SCP/SFTP subsystem. Use the `tar | ssh ... 'sudo tar -xzf -'` pipe in `scripts/deploy-test.sh`.

## Tech stack (overrides workspace CLAUDE.md)

The workspace-level `~/CLAUDE.md` lumps "personal Node projects" under Vite + Playwright. This project is different:

- Bundler: **Rollup 4** (`rollup.config.mjs`), not Vite. No `vite.config.*`.
- Tests: **none.** No jest, vitest, playwright. CI is typecheck + build only.
- Deploy: `scripts/deploy-test.sh` (tar-pipe over SSH), not plain `scp`.
- TypeScript: strict, ES2020, experimental decorators enabled for Lit.

## Critical files

- `HANDOFF.md` — current task, next steps, blockers (read first)
- `custom_components/ha_card_designer/__init__.py` — panel + static route registration
- `custom_components/ha_card_designer/const.py` — `VERSION` (bump to bust cache)
- `custom_components/ha_card_designer/manifest.json` — HA deps: `panel_custom`, `websocket_api`, `http`, `frontend`
- `hacs.json` — HACS metadata (`domains: ["lovelace"]`)
- `src/core/schema.ts` — `CardSchema`, `FormSchema` types
- `src/core/registry.ts` — `ALL_CARDS` list (add new cards here)
- `src/core/yaml.ts` — `ALWAYS_INCLUDE` lives here
- `src/panel/ha-card-designer-panel.ts` — root 4-pane component
- `src/panel/card-preview.ts` — `createThing` + lazy resource loader
- `docs/adding-a-card.md` — contributor guide for new schemas
- `scripts/deploy-test.sh` — build → deploy → restart workflow
- `.github/workflows/ci.yml` and `release.yml` — typecheck/build, release-asset upload

## Handoff Config
<!-- handoff:file=HANDOFF.md -->
<!-- handoff:project=ha-card-designer — visual Lovelace card designer for Home Assistant (HACS panel) -->
