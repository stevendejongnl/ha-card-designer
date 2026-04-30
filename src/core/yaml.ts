import * as jsYaml from "js-yaml";
import { getCardSchemaByType } from "./registry";

function reorderKeys(
  obj: Record<string, unknown>,
  order: string[]
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const key of order) {
    if (key in obj) result[key] = obj[key];
  }
  for (const key of Object.keys(obj)) {
    if (!(key in result)) result[key] = obj[key];
  }
  return result;
}

const ALWAYS_INCLUDE = ["type", "card_type"];

function cleanEntityRow(row: Record<string, unknown>): Record<string, unknown> {
  const cleaned: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(row)) {
    if (k === "entity" || (v !== "" && v !== null && v !== undefined)) {
      cleaned[k] = v;
    }
  }
  return cleaned;
}

function stripDefaults(
  config: Record<string, unknown>,
  defaults: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(config)) {
    if (v === undefined || v === null) continue;
    if (v === defaults[k]) continue;
    if (Array.isArray(v) && v.length === 0 && Array.isArray(defaults[k]) && (defaults[k] as unknown[]).length === 0) continue;
    if (Array.isArray(v)) {
      if (k === "entities") {
        // Entity rows: clean empty string fields (except entity itself)
        result[k] = (v as Record<string, unknown>[]).map(cleanEntityRow);
      } else if (k === "cards") {
        // Card arrays: recurse into each child card using its schema defaults
        result[k] = (v as Record<string, unknown>[]).map((child) => {
          if (typeof child !== "object" || child === null) return child;
          const childObj = child as Record<string, unknown>;
          const childType = childObj.type as string | undefined;
          const childSchema = childType
            ? getCardSchemaByType(childType)
            : undefined;
          if (!childSchema) return child; // Unknown type: pass through unchanged
          const stripped = stripDefaults(childObj, childSchema.defaults);
          // Restore ALWAYS_INCLUDE fields that stripDefaults may have removed
          for (const alwaysKey of ALWAYS_INCLUDE) {
            if (alwaysKey in childObj && !(alwaysKey in stripped)) {
              stripped[alwaysKey] = childObj[alwaysKey];
            }
          }
          return stripped;
        });
      } else {
        result[k] = v; // Other arrays pass through unchanged
      }
    } else if (typeof v === "object" && v !== null) {
      const nested = stripDefaults(
        v as Record<string, unknown>,
        (defaults[k] as Record<string, unknown>) ?? {}
      );
      if (Object.keys(nested).length > 0) result[k] = nested;
    } else {
      result[k] = v;
    }
  }
  return result;
}

function applyChildOrdering(
  config: Record<string, unknown>
): Record<string, unknown> {
  if (!Array.isArray(config.cards)) return config;
  return {
    ...config,
    cards: (config.cards as Record<string, unknown>[]).map((child) => {
      if (typeof child !== "object" || child === null) return child;
      const childType = (child as Record<string, unknown>).type as
        | string
        | undefined;
      const childSchema = childType ? getCardSchemaByType(childType) : undefined;
      if (!childSchema) return child;
      return applyChildOrdering(
        reorderKeys(child as Record<string, unknown>, [
          "type",
          "entity",
          "entities",
          ...(childSchema.yamlOrder ?? []),
        ])
      );
    }),
  };
}

export function configToYaml(
  config: Record<string, unknown>,
  defaults: Record<string, unknown>,
  yamlOrder: string[] = []
): string {
  const stripped = stripDefaults(config, defaults);
  // Always keep card type fields even if they match the default
  for (const key of ALWAYS_INCLUDE) {
    if (key in config && !(key in stripped)) stripped[key] = config[key];
  }
  const ordered = reorderKeys(stripped, [
    "type",
    "entity",
    "entities",
    ...yamlOrder,
  ]);
  const withChildOrder = applyChildOrdering(ordered);
  return jsYaml.dump(withChildOrder, {
    noRefs: true,
    lineWidth: -1,
    quotingType: '"',
    forceQuotes: false,
  });
}
