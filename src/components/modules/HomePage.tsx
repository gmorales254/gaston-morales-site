"use client";

import { CareerPath } from "@/components/modules/CareerPath";
import { ProjectCard } from "@/components/modules/ProjectCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { projects } from "@/data/projects";
import { CONTACT_EMAIL } from "@/lib/site";

export function HomePage() {
  const { dictionary } = useLocale();

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(4,120,87,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(52,211,153,0.1),transparent)]"
      />

      <section
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-3xl flex-col justify-center px-6 pb-20 pt-28 sm:pt-36 animate-fade-in"
      >
        <p className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Gastón Morales
        </p>
        <h1
          id="hero-heading"
          className="mt-6 max-w-xl text-xl font-medium leading-snug text-slate-800 dark:text-zinc-200 sm:text-2xl"
        >
          {dictionary.heroRole}
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
          {dictionary.heroSupport}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-medium text-emerald-50 hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
          >
            {dictionary.ctaProjects}
          </a>
          <a
            href="#experiencia"
            className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            {dictionary.ctaExperience}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            {dictionary.ctaContact}
          </a>
        </div>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="mx-auto w-full max-w-3xl px-6 py-16 animate-fade-in-delay"
      >
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {dictionary.projectsHeading}
        </h2>
        <p className="mt-2 max-w-prose text-muted">{dictionary.projectsIntro}</p>
        <ul className="mt-4 list-none p-0">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <CareerPath className="animate-fade-in-delay" />

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="mx-auto w-full max-w-3xl px-6 pb-28 pt-8 animate-fade-in-delay-2"
      >
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {dictionary.contactHeading}
        </h2>
        <p className="mt-2 max-w-prose text-muted">{dictionary.contactIntro}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex items-center rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-medium text-emerald-50 hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
        >
          {CONTACT_EMAIL}
        </a>
      </section>
    </div>
  );
}
