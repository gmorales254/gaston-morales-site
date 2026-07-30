"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { experience } from "@/data/experience";
import type { ExperienceItem } from "@/data/experience";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

interface CareerPathProps {
  className?: string;
}

function ExperiencePeriod({
  period,
  dictionary,
}: {
  period: ExperienceItem["period"];
  dictionary: Dictionary;
}) {
  const startLabel =
    dictionary.monthLabels[period.start as keyof Dictionary["monthLabels"]];
  const endLabel = period.end
    ? dictionary.monthLabels[period.end as keyof Dictionary["monthLabels"]]
    : undefined;

  return (
    <p className="mt-1 text-sm font-medium text-emerald-800 dark:text-emerald-400">
      <time dateTime={period.start}>{startLabel}</time>
      <span aria-hidden> – </span>
      <span className="sr-only">{dictionary.until} </span>
      {period.current ? (
        <span>{dictionary.present}</span>
      ) : period.end && endLabel ? (
        <time dateTime={period.end}>{endLabel}</time>
      ) : null}
    </p>
  );
}

export function CareerPath({ className }: CareerPathProps) {
  const { locale, dictionary } = useLocale();

  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className={cn("mx-auto w-full max-w-3xl px-6 py-16", className)}
    >
      <h2
        id="experiencia-heading"
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {dictionary.experienceHeading}
      </h2>
      <p className="mt-2 max-w-prose text-muted">{dictionary.experienceIntro}</p>

      <ol className="mt-10 list-none space-y-0 p-0">
        {experience.map((item) => (
          <li key={item.id}>
            <article className="border-b border-border py-8 first:pt-0 last:border-b-0">
              <header>
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {item.role[locale]}
                  <span className="font-normal text-muted"> — </span>
                  <span className="text-emerald-800 dark:text-emerald-400">
                    {item.company}
                  </span>
                </h3>
                <ExperiencePeriod period={item.period} dictionary={dictionary} />
              </header>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-800 marker:text-emerald-700 dark:text-zinc-200 dark:marker:text-emerald-400">
                {item.highlights[locale].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
