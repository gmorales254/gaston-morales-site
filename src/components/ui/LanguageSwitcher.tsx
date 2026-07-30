"use client";

import { useRef } from "react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localeOptions, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, dictionary, setLocale } = useLocale();
  const groupRef = useRef<HTMLDivElement>(null);

  function focusOption(code: Locale) {
    const button = groupRef.current?.querySelector<HTMLButtonElement>(
      `[data-locale="${code}"]`
    );
    button?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const index = localeOptions.findIndex((option) => option.code === locale);
    if (index < 0) return;

    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (index + 1) % localeOptions.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = (index - 1 + localeOptions.length) % localeOptions.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = localeOptions.length - 1;
    } else {
      return;
    }

    const next = localeOptions[nextIndex];
    setLocale(next.code);
    focusOption(next.code);
  }

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-label={dictionary.languageGroupLabel}
      onKeyDown={onKeyDown}
      className={cn(
        "inline-flex flex-wrap items-center gap-1 rounded-md border border-slate-300 bg-background p-1 dark:border-zinc-600",
        className
      )}
    >
      {localeOptions.map((option) => {
        const selected = locale === option.code;

        return (
          <button
            key={option.code}
            type="button"
            role="radio"
            data-locale={option.code}
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            lang={option.htmlLang}
            onClick={() => setLocale(option.code)}
            className={cn(
              "inline-flex min-h-10 items-center gap-1.5 rounded px-2.5 py-1.5 text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              selected
                ? "bg-emerald-700 text-emerald-50 dark:bg-emerald-400 dark:text-emerald-950"
                : "text-slate-900 hover:bg-slate-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
            )}
          >
            <span aria-hidden className="text-base leading-none">
              {option.flag}
            </span>
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
