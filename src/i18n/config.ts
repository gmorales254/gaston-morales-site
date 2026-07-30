export const LOCALES = ["es", "en", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

/** Fallback when the browser locale is unsupported or unavailable. */
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "portfolio-locale";

export interface LocaleOption {
  code: Locale;
  label: string;
  flag: string;
  htmlLang: string;
}

/** Native labels + flags (flags are decorative; labels carry meaning for a11y). */
export const localeOptions: LocaleOption[] = [
  { code: "es", label: "Español", flag: "🇪🇸", htmlLang: "es" },
  { code: "en", label: "English", flag: "🇬🇧", htmlLang: "en" },
  { code: "pt", label: "Português", flag: "🇧🇷", htmlLang: "pt-BR" },
];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

/**
 * Maps Chrome/Safari `navigator.language(s)` (BCP 47) to a supported locale.
 * Examples: es-UY → es, pt-BR → pt, en-GB → en. Unsupported → DEFAULT_LOCALE (en).
 */
export function resolveLocaleFromBrowserTags(tags: readonly string[]): Locale {
  for (const tag of tags) {
    const normalized = tag.trim().toLowerCase().replace("_", "-");
    if (!normalized) continue;

    const primary = normalized.split("-")[0];
    if (isLocale(primary)) return primary;
  }

  return DEFAULT_LOCALE;
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;

  const tags =
    navigator.languages?.length > 0
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : [];

  return resolveLocaleFromBrowserTags(tags);
}
