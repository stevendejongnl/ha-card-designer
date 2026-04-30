import type { HomeAssistant } from "custom-card-helpers";

export type HaFormSelector =
  | { entity: { domain?: string | string[]; device_class?: string } }
  | { icon: object }
  | { text: { multiline?: boolean; type?: string } }
  | { number: { min?: number; max?: number; step?: number; mode?: "box" | "slider" } }
  | { boolean: object }
  | { select: { options: Array<{ value: string; label: string }> } }
  | { action: object }
  | { theme: object }
  | { color_rgb: object }
  | { template: object }
  | { ui_action: object }
  | { attribute: { entity_id?: string } }
  | { target: object };

export interface HaFormSchema {
  name: string;
  label?: string;
  selector: HaFormSelector;
  required?: boolean;
  default?: unknown;
  description?: { suffix?: string; suggested_value?: unknown };
}

export interface HaFormSection {
  type: "expandable" | "grid";
  name?: string;
  title?: string;
  icon?: string;
  schema: HaFormSchema[];
  columns?: number;
}

export interface HcdSubFormList {
  type: "hcd-sub-form-list";
  name: string;
  title?: string;
  addLabel?: string;
  itemSchema: HaFormSchema[];
  itemDefaults?: Record<string, unknown>;
  itemLabel?: (row: Record<string, unknown>, i: number) => string;
  reorderable?: boolean;
}

export interface HcdCardList {
  type: "hcd-card-list";
  name: string;
  title?: string;
  addLabel?: string;
  allowChildType?: (childType: string, parentType: string) => boolean;
  reorderable?: boolean;
}

export type FormSchema = HaFormSchema | HaFormSection | HcdSubFormList | HcdCardList;

export const isHaFormField = (s: FormSchema): s is HaFormSchema | HaFormSection =>
  !("type" in s) || s.type === "expandable" || s.type === "grid";

export interface CardSchema {
  id: string;
  type: string;
  label: string;
  category: "stock" | "mushroom" | "custom";
  description: string;
  icon: string;
  resourceUrl?: string;
  installed: (hass: HomeAssistant) => boolean;
  form: (data: Record<string, unknown>) => FormSchema[];
  defaults: Record<string, unknown>;
  yamlOrder?: string[];
}
