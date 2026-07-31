"use client";

import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import type { ProjectCardProps } from "@/types/project";

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { locale, dictionary } = useLocale();
  const {
    title,
    description,
    techDescription,
    stack,
    image,
    imageAlt,
    demoUrl,
    repoUrl,
    confidential,
  } = project;
  const displayTitle = typeof title === "string" ? title : title[locale];

  return (
    <article
      className={cn(
        "flex flex-col gap-4 border-b border-border py-8 last:border-b-0",
        className
      )}
    >
      {image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200 dark:bg-zinc-800">
          <Image
            src={image}
            alt={imageAlt?.[locale] ?? displayTitle}
            fill
            sizes="(max-width: 768px) 100vw, 48rem"
            className="object-cover object-center"
            priority={false}
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {displayTitle}
          </h3>
          {confidential ? (
            <span className="rounded px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">
              {dictionary.confidentialLabel}
            </span>
          ) : null}
        </div>
        <p className="max-w-prose text-base leading-relaxed text-muted">
          {description[locale]}
        </p>
        {techDescription ? (
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            {techDescription[locale]}
          </p>
        ) : null}
      </div>

      <ul className="flex flex-wrap gap-2" aria-label={dictionary.stackLabel}>
        {stack.map((tech) => (
          <li key={tech}>
            <span className="inline-block rounded-md bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-800 dark:bg-zinc-800 dark:text-zinc-100">
              {tech}
            </span>
          </li>
        ))}
      </ul>

      {(demoUrl || repoUrl) && (
        <div className="flex flex-wrap gap-3">
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-emerald-50",
                "hover:bg-emerald-800 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              {dictionary.viewProject}
              <ArrowUpRight className="size-3.5 shrink-0 opacity-80" aria-hidden />
              <span className="sr-only"> {dictionary.opensNewTab}</span>
            </a>
          ) : null}

          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-slate-900",
                "hover:bg-slate-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <Code2 className="size-4 shrink-0" aria-hidden />
              GitHub
              <ArrowUpRight className="size-3.5 shrink-0 opacity-80" aria-hidden />
              <span className="sr-only"> {dictionary.opensNewTab}</span>
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}
