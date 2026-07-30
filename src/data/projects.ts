import type { Locale } from "@/i18n/config";

export interface Project {
  id: string;
  title: string;
  description: Record<Locale, string>;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "a11y-dashboard",
    title: "A11y Dashboard",
    description: {
      es: "Panel de auditoría WCAG 2.2 que prioriza fallos de contraste, foco y landmarks para equipos de producto.",
      en: "WCAG 2.2 audit dashboard that prioritizes contrast, focus, and landmark issues for product teams.",
      pt: "Painel de auditoria WCAG 2.2 que prioriza falhas de contraste, foco e landmarks para times de produto.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WCAG 2.2"],
    demoUrl: "https://example.com/a11y-dashboard",
    repoUrl: "https://github.com/example/a11y-dashboard",
  },
  {
    id: "mobile-fleet",
    title: "Fleet Companion",
    description: {
      es: "App React Native para operaciones en campo con flujos offline-first y navegación accesible por teclado/lector de pantalla.",
      en: "React Native field-ops app with offline-first flows and accessible keyboard/screen-reader navigation.",
      pt: "App React Native para operações em campo com fluxos offline-first e navegação acessível por teclado/leitor de tela.",
    },
    stack: ["React Native", "TypeScript", "Next.js", "Tailwind CSS"],
    demoUrl: "https://example.com/fleet-companion",
    repoUrl: "https://github.com/example/fleet-companion",
  },
  {
    id: "design-system",
    title: "Emerald System",
    description: {
      es: "Design system web con tokens semánticos, componentes tipados y documentación de patrones accesibles AA.",
      en: "Web design system with semantic tokens, typed components, and AA accessible pattern documentation.",
      pt: "Design system web com tokens semânticos, componentes tipados e documentação de padrões acessíveis AA.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WCAG 2.2"],
    demoUrl: "https://example.com/emerald-system",
    repoUrl: "https://github.com/example/emerald-system",
  },
];
