import type { HcdSubFormList, HcdCardList } from "./schema";
import { entitySelector, textSelector, iconSelector, selectSelector } from "./selectors";

export function entityRowList(
  name = "entities",
  title = "Entities"
): HcdSubFormList {
  return {
    type: "hcd-sub-form-list",
    name,
    title,
    addLabel: "Add entity",
    itemDefaults: { entity: "" },
    itemSchema: [
      entitySelector("entity", "Entity"),
      textSelector("name", "Name (override)"),
      iconSelector("icon", "Icon"),
      selectSelector("secondary_info", "Secondary info", [
        { value: "", label: "None" },
        { value: "entity-id", label: "Entity ID" },
        { value: "last-changed", label: "Last changed" },
        { value: "last-updated", label: "Last updated" },
        { value: "last-triggered", label: "Last triggered" },
        { value: "position", label: "Position" },
        { value: "tilt-position", label: "Tilt position" },
        { value: "brightness", label: "Brightness" },
      ]),
    ],
    itemLabel: (r, i) =>
      (r.entity as string) || (r.name as string) || `Item ${i + 1}`,
    reorderable: true,
  };
}

export function stackChildrenList(): HcdCardList {
  return {
    type: "hcd-card-list",
    name: "cards",
    title: "Cards",
    addLabel: "Add card",
    reorderable: true,
  };
}
