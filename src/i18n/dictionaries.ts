import type { Locale } from "@/i18n/config";

export interface Dictionary {
  skipToContent: string;
  navLabel: string;
  languageGroupLabel: string;
  languageChanged: string;
  heroRole: string;
  heroSupport: string;
  ctaProjects: string;
  ctaExperience: string;
  ctaContact: string;
  projectsHeading: string;
  projectsIntro: string;
  stackLabel: string;
  viewProject: string;
  opensNewTab: string;
  confidentialLabel: string;
  experienceHeading: string;
  experienceIntro: string;
  until: string;
  present: string;
  contactHeading: string;
  contactIntro: string;
  contactEmailLabel: string;
  contactLinkedInLabel: string;
  contactPhoneLabel: string;
  monthLabels: {
    "2019-02": string;
    "2019-03": string;
    "2022-05": string;
    "2023-12": string;
    "2024-01": string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    skipToContent: "Saltar al contenido principal",
    navLabel: "Navegación principal",
    languageGroupLabel: "Idioma",
    languageChanged: "Idioma cambiado a",
    heroRole:
      "Tech Leader & Full Stack / Mobile Developer. Interfaces accesibles con Next.js, React Native y TypeScript.",
    heroSupport:
      "Liderazgo técnico, arquitecturas escalables y cumplimiento WCAG 2.2 AA en producto web y mobile.",
    ctaProjects: "Ver proyectos",
    ctaExperience: "Experiencia",
    ctaContact: "Contacto",
    projectsHeading: "Proyectos",
    projectsIntro:
      "Selección alineada a Next.js, React Native, TypeScript y WCAG 2.2.",
    stackLabel: "Stack técnico",
    viewProject: "Ver proyecto",
    opensNewTab: "(se abre en una pestaña nueva)",
    confidentialLabel: "CONFIDENTIAL",
    experienceHeading: "Trayectoria Profesional",
    experienceIntro:
      "Tech Leader & Full Stack / Mobile Developer. Liderazgo técnico, producto accesible y entrega en web y mobile.",
    until: "hasta",
    present: "Presente",
    contactHeading: "Contacto",
    contactIntro: "¿Tenés un proyecto o querés conversar? Escribime o conectá por LinkedIn.",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactPhoneLabel: "Teléfono",
    monthLabels: {
      "2019-02": "Feb 2019",
      "2019-03": "Mar 2019",
      "2022-05": "May 2022",
      "2023-12": "Dic 2023",
      "2024-01": "Ene 2024",
    },
  },
  en: {
    skipToContent: "Skip to main content",
    navLabel: "Main navigation",
    languageGroupLabel: "Language",
    languageChanged: "Language changed to",
    heroRole:
      "Tech Leader & Full Stack / Mobile Developer. Accessible interfaces with Next.js, React Native, and TypeScript.",
    heroSupport:
      "Technical leadership, scalable architectures, and WCAG 2.2 AA compliance for web and mobile products.",
    ctaProjects: "View projects",
    ctaExperience: "Experience",
    ctaContact: "Contact",
    projectsHeading: "Projects",
    projectsIntro:
      "A selection focused on Next.js, React Native, TypeScript, and WCAG 2.2.",
    stackLabel: "Tech stack",
    viewProject: "View project",
    opensNewTab: "(opens in a new tab)",
    confidentialLabel: "CONFIDENTIAL",
    experienceHeading: "Career Path",
    experienceIntro:
      "Tech Leader & Full Stack / Mobile Developer. Technical leadership, accessible products, and delivery across web and mobile.",
    until: "to",
    present: "Present",
    contactHeading: "Contact",
    contactIntro: "Have a project or want to chat? Email me or connect on LinkedIn.",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactPhoneLabel: "Phone",
    monthLabels: {
      "2019-02": "Feb 2019",
      "2019-03": "Mar 2019",
      "2022-05": "May 2022",
      "2023-12": "Dec 2023",
      "2024-01": "Jan 2024",
    },
  },
  pt: {
    skipToContent: "Ir para o conteúdo principal",
    navLabel: "Navegação principal",
    languageGroupLabel: "Idioma",
    languageChanged: "Idioma alterado para",
    heroRole:
      "Tech Leader & Full Stack / Mobile Developer. Interfaces acessíveis com Next.js, React Native e TypeScript.",
    heroSupport:
      "Liderança técnica, arquiteturas escaláveis e conformidade WCAG 2.2 AA em produtos web e mobile.",
    ctaProjects: "Ver projetos",
    ctaExperience: "Experiência",
    ctaContact: "Contato",
    projectsHeading: "Projetos",
    projectsIntro:
      "Seleção alinhada a Next.js, React Native, TypeScript e WCAG 2.2.",
    stackLabel: "Stack técnico",
    viewProject: "Ver projeto",
    opensNewTab: "(abre em uma nova aba)",
    confidentialLabel: "CONFIDENTIAL",
    experienceHeading: "Trajetória Profissional",
    experienceIntro:
      "Tech Leader & Full Stack / Mobile Developer. Liderança técnica, produto acessível e entrega em web e mobile.",
    until: "até",
    present: "Atual",
    contactHeading: "Contato",
    contactIntro: "Tem um projeto ou quer conversar? Me escreva ou conecte no LinkedIn.",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactPhoneLabel: "Telefone",
    monthLabels: {
      "2019-02": "Fev 2019",
      "2019-03": "Mar 2019",
      "2022-05": "Mai 2022",
      "2023-12": "Dez 2023",
      "2024-01": "Jan 2024",
    },
  },
};
