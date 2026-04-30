# Handoff — ha-card-designer

> Last updated: 2026-04-30 by Claude (Opus 4.7)

## Current Task

Building a HACS Lovelace panel that lets users visually design Home Assistant cards (Mushroom, stock, custom), see a real `<hui-card>` live preview, and copy the generated YAML into any dashboard.

The M0–M1 skeleton is fully shipped and smoke-tested on the test VM. The panel loads in the HA sidebar, entity pickers show live entities, the real card preview renders (tested with `sun.sun` → Tile card showing "Above horizon"), and YAML output is clean and copy-ready.

## Progress This Session

- **Repo created:** `github.com/stevendejongnl/ha-card-designer` (public, 3 commits on `main`)
- **Python integration:** registers HA side panel with `embed_iframe: false` (required for real `<hui-card>` preview access)
- **CardSchema abstraction:** typed interface — `id`, `type`, `label`, `category`, `installed()`, `form()`, `defaults`, `yamlOrder`
- **11 card schemas authored:** Tile, Entities, Stacks (×3), Button, Gauge, Glance, Markdown, Mushroom (entity/template/chips), mini-graph-card, Bubble Card, button-card
- **4-pane panel UI:** card list (with search + "Not installed" badges) → ha-form editor → live preview → YAML output with Copy button
- **YAML emitter:** strips default values, always preserves `type`, applies key ordering
- **Build tooling:** rollup + TypeScript, 62KB output bundle, `npm run build` / `npm run dev`
- **SCP deploy script:** `scripts/deploy-test.sh` — build → scp → restart HA
- **Bug fixed:** `type` field was being stripped by default-value remover; now always included
- **Smoke test passed:** deployed to test VM 102 (192.168.1.141 / ha-test.madebysteven.nl), integration added via REST API, panel loaded, entity picker showed live entities, Tile card rendered real preview with `sun.sun`

## Next Steps

1. **Entity list editor for Entities + Glance cards** — currently these cards show only title/options in the form, but the most important field (`entities: [...]`) has no editor. Need a chip/tag input that lets users add entity IDs one by one. This is the highest-priority UX gap.

2. **Stack child editor** — Vertical Stack, Horizontal Stack, and Grid show an empty form because there's no way to add child cards in the form yet. Need a recursive card picker that lets you build up the `cards: []` list. Could be a "Add child card" button that opens a mini card-selector modal.

3. **Install custom cards on test VM and smoke-test remaining schemas** — Mushroom, mini-graph-card, Bubble Card, button-card are authored but untested on the test VM (they showed "Not installed" because HACS hadn't installed them). Install via HACS on test VM and verify each schema renders the right preview.

4. **Tag `v0.1.0` GitHub release** — attach the built `ha-card-designer-panel.js` as a release asset so HACS can install it cleanly. Update `hacs.json` if needed. Test the full HACS install path on a clean HA instance.

5. **Entities card row types (v2 scope but note it)** — currently only bare entity strings are supported. Row types (button, toggle, attribute, divider, section, etc.) are a v2 feature but should be called out in the form with a note.

6. **Theme / breakpoint preview toggle** — add a toolbar above the preview pane: toggle between Default / Dark theme and Mobile / Desktop viewport. Uses HA's `applyThemesOnElement` + `<ha-card>` width constraint.

7. **Stack child drag-to-reorder** — once step 2 is done, add drag-and-drop ordering within the child card list. Use the browser's native drag API or `@sortablejs/sortablejs`.

8. **README screenshots + docs polish** — take clean screenshots of the panel in action (entity picker, live preview, copy button) and embed in README for the HACS store page. Add a short "How it works" section.

9. **Production install via HACS** — once `v0.1.0` release is tagged and tested, install on the production HA next to switch_manager.

## Key Decisions

- **`embed_iframe: false`** — panel runs in HA's own document (not an iframe) so `createThing()` / `<hui-card>` are accessible. This is what makes real preview possible. switch_manager uses `embed_iframe: true` because it doesn't need card rendering.
- **`custom-card-helpers` → `createThing()`** — not `createCardElement`; that export doesn't exist in the library.
- **Schema-per-file pattern** — each card is one exported `CardSchema` in `src/cards/<id>.ts`. Form schema is a function `(data) => FormSchema[]` not a static array, enabling conditional fields.
- **YAML stripping** — default values are removed from output to keep YAML minimal; `type` and `card_type` are always preserved via `ALWAYS_INCLUDE` constant.
- **Version bump = cache bust** — when deploying a new JS build without a HACS release, bump `VERSION` in `const.py` so HA re-fetches the JS (avoids browser/HA cache serving stale bundle).
- **SCP via tar pipe** — hassio SSH addon doesn't support SCP/SFTP subsystem; use `tar -czf - ... | ssh ha-test 'sudo tar -xzf -'` instead.

## Blockers / Open Questions

- **Entities / Glance entity list** — no ha-form selector for "list of entity IDs" out of the box. Options: (a) use `selector: { entity: {} }` repeated with an "Add another" pattern, (b) use a `target` selector (selects multiple entities at once), or (c) render a custom sub-form with a `+` button. Option (b) is easiest but outputs `target:` not `entities:`.
- **Stack child recursion** — the card designer needs to render a nested card picker inside the form. This means the `hcd-card-form` component would need to embed itself recursively. Consider a flat "Add card" drawer approach to avoid infinite nesting.
- **Custom card lazy loading** — `_ensureResourceLoaded()` in `card-preview.ts` dynamically injects the card's JS bundle. This requires knowing the correct `/hacsfiles/...` path per card. The `resourceUrl` in each schema is hardcoded; if HACS changes the path or the user installs a card differently, this breaks. Consider reading the path from `lovelace_resources/list` WS command at runtime.

## Git State

```
Branch: main (up to date with origin/main)

Recent commits:
3bd2d06 fix(yaml): always include type field in YAML output
a8742f6 docs: add README with architecture overview and deploy instructions
d113f48 feat: initial scaffold for ha-card-designer HACS panel

Working tree: clean
Remote: git@github.com:stevendejongnl/ha-card-designer.git
```

## File Map

```
ha-card-designer/
├── custom_components/ha_card_designer/    # Python integration (installs panel)
│   ├── __init__.py                        # registers panel + static JS route
│   ├── const.py                           # VERSION = "0.1.1" (bump to cache-bust)
│   ├── config_flow.py                     # single-instance config flow
│   └── assets/ha-card-designer-panel.js   # built frontend bundle (committed)
├── src/
│   ├── core/
│   │   ├── schema.ts      # CardSchema interface
│   │   ├── registry.ts    # ALL_CARDS list
│   │   ├── selectors.ts   # ha-form selector helpers
│   │   └── yaml.ts        # config → YAML (strips defaults, preserves type)
│   ├── panel/
│   │   ├── ha-card-designer-panel.ts  # root Lit component (4-pane layout)
│   │   ├── card-list.ts               # left rail (search + category grouping)
│   │   ├── card-form.ts               # middle (ha-form binding)
│   │   ├── card-preview.ts            # right (createThing + hass, debounced)
│   │   └── yaml-output.ts             # bottom (textarea + copy button)
│   └── cards/             # 11 schema files (one per card type)
├── scripts/
│   └── deploy-test.sh     # build → scp → restart (test VM workflow)
├── docs/adding-a-card.md  # contributor guide
└── rollup.config.mjs      # bundles src/ → assets/ha-card-designer-panel.js
```

---
*Generated by /handoff skill — readable by humans and Claude alike.*
