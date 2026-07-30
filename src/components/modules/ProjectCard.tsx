"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import type { ProjectCardProps } from "@/types/project";

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { locale, dictionary } = useLocale();
  const { title, description, stack, demoUrl, repoUrl } = project;

  return (
    <article
      className={cn(
        "flex flex-col gap-4 border-b border-border py-8 last:border-b-0",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="max-w-prose text-base leading-relaxed text-muted">
          {description[locale]}
        </p>
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
              {dictionary.liveDemo}
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
