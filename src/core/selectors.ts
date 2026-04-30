import type { HaFormSchema } from "./schema";

export const entitySelector = (
  name: string,
  label: string,
  opts: { domain?: string | string[]; required?: boolean } = {}
): HaFormSchema => ({
  name,
  label,
  selector: { entity: opts.domain ? { domain: opts.domain } : {} },
  required: opts.required ?? false,
});

export const textSelector = (
  name: string,
  label: string,
  opts: { multiline?: boolean; required?: boolean } = {}
): HaFormSchema => ({
  name,
  label,
  selector: { text: { multiline: opts.multiline ?? false } },
  required: opts.required ?? false,
});

export const iconSelector = (name: string, label: string): HaFormSchema => ({
  name,
  label,
  selector: { icon: {} },
});

export const booleanSelector = (
  name: string,
  label: string,
  defaultVal?: boolean
): HaFormSchema => ({
  name,
  label,
  selector: { boolean: {} },
  default: defaultVal,
});

export const selectSelector = (
  name: string,
  label: string,
  options: Array<{ value: string; label: string }>,
  opts: { required?: boolean } = {}
): HaFormSchema => ({
  name,
  label,
  selector: { select: { options } },
  required: opts.required ?? false,
});

export const numberSelector = (
  name: string,
  label: string,
  opts: { min?: number; max?: number; step?: number; mode?: "box" | "slider" } = {}
): HaFormSchema => ({
  name,
  label,
  selector: {
    number: {
      min: opts.min,
      max: opts.max,
      step: opts.step ?? 1,
      mode: opts.mode ?? "box",
    },
  },
});

export const themeSelector = (name = "theme", label = "Theme"): HaFormSchema => ({
  name,
  label,
  selector: { theme: {} },
});

export const actionSelector = (
  name: string,
  label: string
): HaFormSchema => ({
  name,
  label,
  selector: { ui_action: {} },
});

export const templateSelector = (name: string, label: string): HaFormSchema => ({
  name,
  label,
  selector: { template: {} },
});
