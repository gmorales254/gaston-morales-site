import type { Locale } from "@/i18n/config";

export interface ExperiencePeriod {
  start: string;
  end?: string;
  current?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: Record<Locale, string>;
  period: ExperiencePeriod;
  highlights: Record<Locale, string[]>;
}

export const experience: ExperienceItem[] = [
  {
    id: "globant",
    company: "Globant",
    role: {
      es: "Tech Leader & Full Stack / Mobile Developer",
      en: "Tech Leader & Full Stack / Mobile Developer",
      pt: "Tech Leader & Full Stack / Mobile Developer",
    },
    period: {
      start: "2023-12",
      current: true,
    },
    highlights: {
      es: [
        "Liderazgo técnico de equipos multidisciplinarios en proyectos globales (aviación, entretenimiento y e-commerce).",
        "Diseño e implementación de arquitecturas con microfrontends y Module Federation.",
        "Desarrollo web con Next.js/React y mobile multiplataforma con React Native.",
        "Cumplimiento de estándares de accesibilidad WCAG 2.2 AA en entregas de producto.",
        "Optimización de flujos SDD/BDD con integración de herramientas de inteligencia artificial.",
      ],
      en: [
        "Technical leadership of multidisciplinary teams on global projects (aviation, entertainment, and e-commerce).",
        "Design and implementation of microfrontend architectures with Module Federation.",
        "Web development with Next.js/React and cross-platform mobile with React Native.",
        "WCAG 2.2 AA accessibility standards on product deliveries.",
        "SDD/BDD workflow optimization through AI tooling integration.",
      ],
      pt: [
        "Liderança técnica de times multidisciplinares em projetos globais (aviação, entretenimento e e-commerce).",
        "Desenho e implementação de arquiteturas com microfrontends e Module Federation.",
        "Desenvolvimento web com Next.js/React e mobile multiplataforma com React Native.",
        "Conformidade com padrões de acessibilidade WCAG 2.2 AA nas entregas de produto.",
        "Otimização de fluxos SDD/BDD com integração de ferramentas de inteligência artificial.",
      ],
    },
  },
  {
    id: "ucontact",
    company: "uContact",
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
      pt: "Full Stack Developer",
    },
    period: {
      start: "2019-03",
      end: "2023-12",
    },
    highlights: {
      es: [
        "Desarrollo de aplicaciones empresariales: CRMs, plataformas LMS y WebForms.",
        "Mejora de rendimiento UI/UX y diseño de endpoints backend eficientes.",
        "Integración de Vue.js, React, Node.js, Python (FastAPI/Flask) y Java.",
        "Administración de servidores Linux y automatización con scripts.",
      ],
      en: [
        "Built enterprise applications: CRMs, LMS platforms, and WebForms.",
        "Improved UI/UX performance and designed efficient backend endpoints.",
        "Integrated Vue.js, React, Node.js, Python (FastAPI/Flask), and Java.",
        "Managed Linux servers and automation scripts.",
      ],
      pt: [
        "Desenvolvimento de aplicações empresariais: CRMs, plataformas LMS e WebForms.",
        "Melhoria de desempenho UI/UX e desenho de endpoints backend eficientes.",
        "Integração de Vue.js, React, Node.js, Python (FastAPI/Flask) e Java.",
        "Administração de servidores Linux e automação com scripts.",
      ],
    },
  },
  {
    id: "freelance",
    company: "Freelance",
    role: {
      es: "Full Stack Developer & Consultant",
      en: "Full Stack Developer & Consultant",
      pt: "Full Stack Developer & Consultant",
    },
    period: {
      start: "2019-02",
      current: true,
    },
    highlights: {
      es: [
        "Creación y despliegue end-to-end de plataformas SaaS para empresas y startups.",
        "Design systems accesibles desde Figma hasta implementación con Next.js/React.",
        "APIs REST/GraphQL escalables e integración con AWS, GCP y Supabase.",
      ],
      en: [
        "End-to-end creation and deployment of SaaS platforms for companies and startups.",
        "Accessible design systems from Figma to Next.js/React implementation.",
        "Scalable REST/GraphQL APIs and integration with AWS, GCP, and Supabase.",
      ],
      pt: [
        "Criação e deploy end-to-end de plataformas SaaS para empresas e startups.",
        "Design systems acessíveis do Figma à implementação com Next.js/React.",
        "APIs REST/GraphQL escaláveis e integração com AWS, GCP e Supabase.",
      ],
    },
  },
  {
    id: "coderhouse",
    company: "CoderHouse / SuperProf",
    role: {
      es: "Lead Instructor (React & JavaScript)",
      en: "Lead Instructor (React & JavaScript)",
      pt: "Lead Instructor (React & JavaScript)",
    },
    period: {
      start: "2022-05",
      end: "2024-01",
    },
    highlights: {
      es: [
        "Formación y mentoría de futuros ingenieros de software en desarrollo web moderno.",
        "Code reviews orientados a arquitectura, React y accesibilidad.",
      ],
      en: [
        "Training and mentoring future software engineers in modern web development.",
        "Code reviews focused on architecture, React, and accessibility.",
      ],
      pt: [
        "Formação e mentoria de futuros engenheiros de software em desenvolvimento web moderno.",
        "Code reviews focados em arquitetura, React e acessibilidade.",
      ],
    },
  },
];
