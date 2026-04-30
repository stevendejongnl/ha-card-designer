import * as jsYaml from "js-yaml";

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

function stripDefaults(
  config: Record<string, unknown>,
  defaults: Record<string, unknown>
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(config)) {
    if (v === undefined || v === null) continue;
    if (v === defaults[k]) continue;
    if (typeof v === "object" && !Array.isArray(v) && v !== null) {
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

const ALWAYS_INCLUDE = ["type", "card_type"];

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
  return jsYaml.dump(ordered, {
    noRefs: true,
    lineWidth: -1,
    quotingType: '"',
    forceQuotes: false,
  });
}
