"use client";

import { Mail, Phone } from "lucide-react";
import { CareerPath } from "@/components/modules/CareerPath";
import { ProjectCard } from "@/components/modules/ProjectCard";
import { useLocale } from "@/components/providers/LocaleProvider";
import { projects } from "@/data/projects";
import {
  CONTACT_EMAIL,
  CONTACT_LINKEDIN,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
        <ul className="mt-8 flex list-none flex-col gap-3 p-0">
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-emerald-300"
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              <span>
                <span className="sr-only">{dictionary.contactEmailLabel}: </span>
                {CONTACT_EMAIL}
              </span>
            </a>
          </li>
          <li>
            <a
              href={CONTACT_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-emerald-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-emerald-300"
            >
              <LinkedInIcon className="size-4 shrink-0" />
              <span>
                {dictionary.contactLinkedInLabel}
                <span className="sr-only"> {dictionary.opensNewTab}</span>
              </span>
              <span className="font-normal text-muted">
                linkedin.com/in/gaston-morales
              </span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-emerald-300"
            >
              <Phone className="size-4 shrink-0" aria-hidden />
              <span>
                <span className="sr-only">{dictionary.contactPhoneLabel}: </span>
                {CONTACT_PHONE_DISPLAY}
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
