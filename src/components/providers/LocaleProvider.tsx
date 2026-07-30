"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  detectBrowserLocale,
  isLocale,
  localeOptions,
  type Locale,
} from "@/i18n/config";
import { dictionaries, type Dictionary } from "@/i18n/dictionaries";

interface LocaleContextValue {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);
const LOCALE_CHANGE_EVENT = "portfolio-locale-change";

/** Explicit user choice wins; otherwise Chrome/Safari region via navigator APIs. */
function getClientLocale(): Locale {
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && isLocale(stored)) return stored;
  return detectBrowserLocale();
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  };
}

function applyHtmlLang(locale: Locale) {
  const option = localeOptions.find((item) => item.code === locale);
  document.documentElement.lang = option?.htmlLang ?? locale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    getClientLocale,
    () => DEFAULT_LOCALE
  );
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    applyHtmlLang(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    applyHtmlLang(next);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
    const label =
      localeOptions.find((item) => item.code === next)?.label ?? next;
    setAnnouncement(`${dictionaries[next].languageChanged} ${label}`);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
