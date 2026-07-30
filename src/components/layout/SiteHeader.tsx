"use client";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/components/providers/LocaleProvider";

export function SiteHeader() {
  const { dictionary } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-6 py-3">
        <nav aria-label={dictionary.navLabel} className="min-w-0">
          <a
            href="#main-content"
            className="truncate text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Gastón Morales
          </a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export function SkipLink() {
  const { dictionary } = useLocale();

  return (
    <a href="#main-content" className="skip-link">
      {dictionary.skipToContent}
    </a>
  );
}
