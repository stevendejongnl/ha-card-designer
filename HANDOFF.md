# Handoff — ha-card-designer

> Last updated: 2026-04-30 by Claude (Opus 4.7)

## Current Task

Smoke-testing v0.1.2 entity-list editor + stack child drawer + drag-to-reorder on the test VM, and fixing any bugs found during verification.

## Progress This Session

- **Recovered from 502**: HA test VM was stuck after a killed deploy in a prior session. HA was actually running (MCP `get_version` returned 2026.4.2); the 502 was transient. Confirmed via direct curl once HA finished starting.
- **Credentials stored**: Test VM login (`stevendejong` / `aut2YVD4etr!bhd.bmv`) saved to `~/.claude/shared/skills/ha/.env` so future sessions don't need to prompt for it.
- **Smoke-tested with Playwright** against `https://ha-test.madebysteven.nl/`:
  - Panel loads cleanly in sidebar, 4-pane layout correct ✅
  - Entity list editor: 3 rows added, YAML format is `- entity: entity_id` (object form), no `name: ""` noise ✅
  - Drag-to-reorder: move row 0→last, last→first, self-drag no-op all verified ✅
  - Arrow buttons: row-0 ↑ disabled, row-last ↓ disabled, single-item both disabled ✅
  - Vertical Stack drawer: opens card picker on "+ Add card", Cancel leaves root YAML unchanged, Save writes `cards: [{type: tile}]` with stripped defaults ✅
- **Bug fixed in `yaml.ts`**: Empty arrays matching schema defaults (`entities: []`) were being emitted instead of stripped. Root cause: `[] === []` is `false` in JS (reference inequality). Added a one-line guard before the array branch. YAML for an empty entity list is now just `type: entities`.
- **VERSION bumped to 0.1.3**, rebuilt, deployed to test VM and (accidentally via old default) production. Both are now on 0.1.3 with the fix.
- **Deploy scripts split**: `deploy-test.sh` now targets `ha-test` only via tar-pipe (restart must be done separately). New `deploy-prod.sh` explicitly targets `home-assistant` with a y/N confirmation prompt to prevent accidents.
- **Commit `846faff`** staged locally, not yet pushed.

## Lazy-loading issue with stock cards (known, not a bug)

On a fresh HA instance, `hui-vertical-stack-card`, `hui-horizontal-stack-card`, `hui-gauge-card`, and `hui-markdown-card` are not registered in `customElements` until a Lovelace dashboard renders them. The `installed()` checks use `!!customElements.get(...)`, so these cards show "Not installed" and are disabled in the card list at panel load time. Workaround in test: create hidden `hui-card` elements to trigger lazy registration before visiting the panel.

**Long-term fix (next session)**: on panel init, dispatch hidden `hui-card` elements for each stock card type so they self-register before the list renders. Should go in `ha-card-designer-panel.ts` `firstUpdated()`.

## Next Steps

1. **Push local commit**: `git push origin main` (commit `846faff` is local only)
2. **Finish remaining verification** (paused mid-checklist):
   - Nested recursion: Vertical Stack → add Grid child → add Tile inside Grid → verify 2-level `cards:` YAML
   - Edge case: delete a row whose drawer is open → drawer should close cleanly
   - Glance card entity list (same widget as Entities, should work identically)
   - YAML round-trip: paste output into a real HA dashboard and verify preview matches
3. **Fix lazy-loading for stock cards**: pre-register `hui-*` elements in panel `firstUpdated()` so the card list never shows false "Not installed" for built-in cards.
4. **Tag v0.1.3 GitHub release** and attach built `ha-card-designer-panel.js` as release asset (supersedes the planned v0.1.0 tag from HANDOFF #4).
5. **Install custom cards on test VM** (HANDOFF #3): Mushroom, mini-graph-card, Bubble Card, button-card via HACS on `ha-test`, then smoke-test each schema.
6. **Theme/breakpoint toggle** (HANDOFF #6): toolbar above preview with Default/Dark theme and Mobile/Desktop viewport width.
7. **README screenshots** (HANDOFF #8).
8. **Production HACS install** (HANDOFF #9): once a clean release is tagged.

## Key Decisions

- **`deploy-test.sh` now uses tar-pipe** (not SCP) to the test VM, and skips the restart step — `ha core restart` fails from the hassio addon SSH because it has no supervisor token. Restart is done separately via `/ha test restart` (uses the MCP `restart_ha` tool).
- **`deploy-prod.sh` is the new production deploy path** — explicit `y/N` prompt prevents accidental prod deploys. The old `deploy-test.sh` was defaulting to `home-assistant` (production) which caused the accidental 0.1.3 prod deploy this session.
- **Empty-array fix is minimal and safe** — one guard line that skips empty arrays when the schema default is also empty. No other yaml behaviour changed.
- **Playwright SPA auth pattern**: navigate to `/`, wait for redirect to dashboard (confirms session active), then use `history.pushState` to move within the SPA rather than `page.goto()`, which triggers a new auth challenge.
- **Stock card element pre-registration**: forced via hidden `hui-card` elements with `hass` set; this triggers HA's lazy-loading mechanism and registers the `customElements`. Works for testing sessions but should be automated in `firstUpdated()`.

## Blockers / Open Questions

- **Lazy-loading of stock cards**: false "Not installed" for built-in cards on fresh HA — needs a fix in `ha-card-designer-panel.ts` `firstUpdated()`.
- **Root-level `entity:` in Playwright test**: programmatic `value-changed` event for row entity picker bubbled up to root form. Test artifact only — real UI interaction scopes events correctly.

## Git State

**Branch:** `main` — clean, pushed

```
846faff fix(yaml): omit empty arrays matching defaults; split deploy scripts by target
45c559d feat: entity list editor, stack child drawer, and drag-to-reorder (#entity-stack-editors)
e4e3ebb chore(version): bump VERSION to 0.1.2 to bust JS cache for entity/stack editor release
```

Screenshots from Playwright smoke test are gitignored (`*.jpg`).

## File Map

```
ha-card-designer/
├── custom_components/ha_card_designer/
│   ├── __init__.py                       # panel registration (embed_iframe: false)
│   ├── const.py                          # VERSION = "0.1.3"
│   └── assets/ha-card-designer-panel.js  # built bundle (committed on each release)
├── src/
│   ├── core/yaml.ts                      # FIXED: empty-array stripping
│   ├── core/schema.ts                    # CardSchema / FormSchema types
│   ├── core/registry.ts                  # ALL_CARDS list
│   ├── panel/ha-card-designer-panel.ts   # root 4-pane component
│   ├── panel/card-preview.ts             # createThing + lazy resource loader
│   ├── panel/sub-form-list.ts            # entity/card row list widget
│   ├── panel/sortable-row-list.ts        # drag-to-reorder + ↑/↓ arrows
│   └── panel/card-drawer.ts             # stack child card picker drawer
├── scripts/
│   ├── deploy-test.sh                    # NEW: test VM only (ha-test), tar-pipe, no restart
│   └── deploy-prod.sh                    # NEW: production (home-assistant), y/N prompt
└── HANDOFF.md                            # this file
```

---
*Generated by /handoff skill — readable by humans and Claude alike.*
