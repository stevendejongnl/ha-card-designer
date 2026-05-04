# Handoff — ha-card-designer

> Last updated: 2026-05-04 by Claude (Opus 4.7)

## Current Task

Idle — v0.1.5 shipped. All verification complete. Next session should pick up from the deferred feature backlog.

## What Was Completed (2026-05-04)

**Full verification pass of v0.1.2 → v0.1.5 feature set on test VM:**
- Panel loads cleanly, 4-pane layout correct ✅
- Entity list editor: object-form YAML (`- entity: sensor.x`), no `name: ""` noise ✅
- Drag-to-reorder + arrow buttons ✅
- Vertical Stack drawer: opens picker, Cancel is no-op, Save writes nested `cards:` ✅
- Nested recursion: Vertical Stack → Grid → Tile → 2-level `cards:` YAML, defaults stripped ✅
- Empty entity list → key omitted from YAML (not `entities: []`) ✅
- Glance entity list: same widget, same YAML format ✅
- Delete row while drawer open → drawer now closes cleanly (bug fixed this session) ✅
- YAML round-trip: output rendered `hui-vertical-stack-card > hui-grid-card > hui-tile-card` correctly ✅
- Stock cards no longer show "Not installed" on cold load (pre-registration fixed) ✅

**Bugs fixed this session:**
1. `cards-list-widget.ts` `_onRowRemove`: drawer was left open when the row it was editing was deleted. One-line fix: call `_closeDrawer()` if `_drawerEditIndex === removedIndex`.
2. `ha-card-designer-panel.ts` `updated()`: added first-hass-assignment hook that creates hidden `hui-card` elements to trigger lazy registration of stock card types (`vertical-stack`, `horizontal-stack`, `gauge`, `markdown`, `glance`, `entities`, `grid`). Card list re-renders 500ms later to reflect new registrations.

**Released:** v0.1.5 tagged at https://github.com/stevendejongnl/ha-card-designer/releases/tag/v0.1.5 with bundle attached.

## Next Steps

1. **Install custom cards on test VM** (HANDOFF #3): Mushroom, mini-graph-card, Bubble Card, button-card via HACS on `ha-test`, then smoke-test each schema. Currently all show "Not installed" because the HACS packages aren't installed.
2. **Theme/breakpoint toggle** (HANDOFF #6): toolbar above preview with Default/Dark theme and Mobile/Desktop viewport width switcher.
3. **README screenshots** (HANDOFF #8): capture screenshots of the 4-pane editor for the README.
4. **Production HACS install** (HANDOFF #9): now that v0.1.5 is tagged, install via HACS on production HA.

## Key Decisions

- **`deploy-test.sh` uses tar-pipe** (not SCP) to the test VM — `ha core restart` from the hassio addon SSH has no supervisor token. Restart is done separately via `mcp__hass-mcp-test__restart_ha`.
- **`deploy-prod.sh`** — explicit `y/N` prompt prevents accidental prod deploys.
- **Empty-array stripping** (`yaml.ts`): guard checks `v.length === 0 && defaults[k].length === 0` because `[] === []` is false in JS.
- **Stock card pre-registration**: runs in `updated()` on first `hass` assignment (not `firstUpdated()` which fires before `hass` is available). Creates hidden `hui-card` elements with `config = { type }` — setting `config` alone (without `hass`) is enough to trigger HA's lazy-loading mechanism.
- **VERSION bump = cache bust**: always bump `const.py:VERSION` before deploying a new bundle. The URL `?v=X` is the only cache-buster; same version = browser serves old cached bundle.
- **Playwright SPA auth**: navigate to `/`, wait for SPA to load from localStorage session, then `history.pushState` for intra-SPA navigation. `page.goto('/card-designer')` triggers a new auth challenge.
- **Circular dependency warning** in Rollup: `card-form → cards-list-widget → card-drawer → card-form`. Pre-existing; no runtime impact.

## Git State

**Branch:** `main` — clean, pushed

```
a631aad fix(panel): close drawer on row delete; pre-register stock hui-* cards on startup
8179690 chore: gitignore Playwright screenshots; mark push done in handoff
846faff fix(yaml): omit empty arrays matching defaults; split deploy scripts by target
45c559d feat: entity list editor, stack child drawer, and drag-to-reorder (#entity-stack-editors)
```

## File Map

```
ha-card-designer/
├── custom_components/ha_card_designer/
│   ├── __init__.py                       # panel registration (embed_iframe: false)
│   ├── const.py                          # VERSION = "0.1.5"
│   └── assets/ha-card-designer-panel.js  # built bundle (committed on each release)
├── src/
│   ├── core/yaml.ts                      # empty-array stripping fix
│   ├── core/schema.ts                    # CardSchema / FormSchema types
│   ├── core/registry.ts                  # ALL_CARDS list
│   ├── panel/ha-card-designer-panel.ts   # root 4-pane; updated() pre-registers stock cards
│   ├── panel/card-preview.ts             # createThing + lazy resource loader
│   ├── panel/cards-list-widget.ts        # stack child list; drawer-close-on-row-delete fix
│   ├── panel/sub-form-list.ts            # entity row list widget
│   ├── panel/sortable-row-list.ts        # drag-to-reorder + ↑/↓ arrows
│   └── panel/card-drawer.ts             # stack child card picker drawer
├── scripts/
│   ├── deploy-test.sh                    # test VM only (ha-test), tar-pipe, no restart
│   └── deploy-prod.sh                    # production (home-assistant), y/N prompt
└── HANDOFF.md                            # this file
```

---
*Generated by /handoff skill — readable by humans and Claude alike.*
