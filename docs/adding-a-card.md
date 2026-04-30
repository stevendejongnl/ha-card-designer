# Adding a new card schema

Create a new file in `src/cards/<card-id>.ts` and export a `CardSchema` object. Then register it in `src/core/registry.ts`.

## Minimal example

```ts
import type { CardSchema } from "../core/schema";
import { entitySelector } from "../core/selectors";

export const myCard: CardSchema = {
  id: "my-card",
  type: "custom:my-card",
  label: "My Card",
  category: "custom",
  description: "Short description shown in the card list tooltip.",
  icon: "mdi:card",
  resourceUrl: "/hacsfiles/my-card/my-card.js",
  installed: () => !!customElements.get("my-card"),
  defaults: {
    type: "custom:my-card",
  },
  yamlOrder: ["entity", "name"],
  form: () => [
    entitySelector("entity", "Entity", { required: true }),
  ],
};
```

## CardSchema fields

| Field | Required | Description |
|---|---|---|
| `id` | yes | Unique identifier, used in UI state |
| `type` | yes | The YAML `type` value (e.g. `tile` or `custom:mushroom-entity-card`) |
| `label` | yes | Display name in the card list |
| `category` | yes | `"stock"` / `"mushroom"` / `"custom"` |
| `description` | yes | Tooltip in the card list |
| `icon` | yes | MDI icon identifier |
| `resourceUrl` | no | Path to the card's JS bundle (custom cards only). Used for lazy loading. |
| `installed` | yes | Returns `true` if the card's custom element is registered. Stock cards always return `true`. |
| `form` | yes | Function `(data) => FormSchema[]`. Returns ha-form schema. Can branch on current `data` values. |
| `defaults` | yes | Default config values. Used to strip defaults from YAML output. |
| `yamlOrder` | no | Array of field names to sort first in YAML output (after `type` and `entity`). |

## Selector helpers

`src/core/selectors.ts` provides shorthand helpers for common selectors:

- `entitySelector(name, label, { domain?, required? })`
- `textSelector(name, label, { multiline? })`
- `iconSelector(name, label)`
- `booleanSelector(name, label, defaultValue?)`
- `selectSelector(name, label, options[], { required? })`
- `numberSelector(name, label, { min?, max?, step?, mode? })`
- `themeSelector()`
- `actionSelector(name, label)`
- `templateSelector(name, label)`

You can also write raw ha-form schema objects directly if no helper exists for your selector type.

## Registration

Add an import and push your schema into `ALL_CARDS` in `src/core/registry.ts`.
