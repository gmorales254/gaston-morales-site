import type { Locale } from "@/i18n/config";

export interface Project {
  id: string;
  title: string | Record<Locale, string>;
  description: Record<Locale, string>;
  techDescription?: Record<Locale, string>;
  stack: string[];
  image?: string;
  imageAlt?: Record<Locale, string>;
  demoUrl?: string;
  repoUrl?: string;
  confidential?: boolean;
}

export const projects: Project[] = [
  {
    id: "uclever",
    title: "uClever",
    description: {
      es: "uClever App extiende la plataforma uContact a tu móvil. Gestiona WhatsApp Business, estados de agente e interacciones sin entrar al portal web. Todo desde una app ágil y práctica para agentes en movimiento.",
      en: "uClever App extends the uContact platform to your phone. Manage WhatsApp Business, agent status, and interactions without opening the web portal. A practical app for agents on the go.",
      pt: "uClever App estende a plataforma uContact ao seu celular. Gerencie WhatsApp Business, status de agente e interações sem entrar no portal web. Um app ágil e prático para agentes em movimento.",
    },
    techDescription: {
      es: "App generada con React Native, Tailwind y APIs de uContact a través de WebSockets.",
      en: "Built with React Native, Tailwind, and uContact APIs over WebSockets.",
      pt: "App gerado com React Native, Tailwind e APIs do uContact via WebSockets.",
    },
    stack: ["React Native", "Tailwind CSS", "WebSockets", "uContact"],
    image: "/projects/uclever.webp",
    imageAlt: {
      es: "Promocional de uClever: tres móviles mostrando login y mensajes sobre fondo teal",
      en: "uClever promo: three phones showing login and messages on a teal background",
      pt: "Promocional do uClever: três celulares mostrando login e mensagens em fundo teal",
    },
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.ucleverapp&hl=es_419",
  },
  {
    id: "herreria-industrial",
    title: "Herrería Industrial MG",
    description: {
      es: "Tienda online para una herrería en Las Toscas, Canelones. Catálogo de cerramientos, techos y productos destacados con carrito 100% client-side: el cliente arma el pedido en el sitio y lo cierra por WhatsApp, sin pasarela de pagos.",
      en: "Online store for a metalwork shop in Las Toscas, Canelones. Catalog of enclosures, roofs, and featured products with a fully client-side cart: shoppers build their order on the site and complete it via WhatsApp—no payment gateway.",
      pt: "Loja online para uma serralheria em Las Toscas, Canelones. Catálogo de fechamentos, telhados e produtos em destaque com carrinho 100% client-side: o cliente monta o pedido no site e finaliza pelo WhatsApp, sem gateway de pagamento.",
    },
    techDescription: {
      es: "Sitio en Next.js con carrito gestionado por Zustand y estilos en Tailwind CSS. Checkout vía WhatsApp, sin integraciones de pago.",
      en: "Next.js storefront with a Zustand-managed cart and Tailwind CSS styling. WhatsApp checkout, no payment integrations.",
      pt: "Site em Next.js com carrinho gerenciado por Zustand e estilos em Tailwind CSS. Checkout via WhatsApp, sem integrações de pagamento.",
    },
    stack: ["Next.js", "Zustand", "Tailwind CSS", "WhatsApp"],
    image: "/projects/herreria-industrial.jpeg",
    imageAlt: {
      es: "Portada de Herrería Industrial MG con trabajos de herrería",
      en: "Herrería Industrial MG cover showing metalwork pieces",
      pt: "Capa da Herrería Industrial MG com trabalhos de serralheria",
    },
    demoUrl: "https://www.herreria-industrial-mg-uy.com/",
  },
  {
    id: "airline-homepage",
    title: {
      es: "Aerolínea internacional",
      en: "International airline",
      pt: "Companhia aérea internacional",
    },
    description: {
      es: "Desarrollo de features especiales para la homepage de una aerolínea internacional, con foco en el Flight Search box: flujos de búsqueda de vuelos más claros, robustos y usables en web. Trabajo alineado a WCAG 2.2 AA (teclado, contraste, labels y anuncios a lectores de pantalla).",
      en: "Special feature work on an international airline homepage, centered on the Flight Search box: clearer, more robust flight-search flows for the web. Delivery aligned to WCAG 2.2 AA (keyboard, contrast, labels, and screen-reader announcements).",
      pt: "Desenvolvimento de features especiais para a homepage de uma companhia aérea internacional, com foco no Flight Search box: fluxos de busca de voos mais claros, robustos e usáveis na web. Trabalho alinhado a WCAG 2.2 AA (teclado, contraste, labels e anúncios para leitores de tela).",
    },
    techDescription: {
      es: "Features front-end sobre la homepage corporativa, priorizando accesibilidad WCAG 2.2 AA en el componente de búsqueda de vuelos.",
      en: "Front-end features on the corporate homepage, prioritizing WCAG 2.2 AA accessibility in the flight search component.",
      pt: "Features front-end na homepage corporativa, priorizando acessibilidade WCAG 2.2 AA no componente de busca de voos.",
    },
    stack: ["WCAG 2.2 AA", "Flight Search", "Accessibility", "Frontend"],
    image: "/projects/airline-confidential.jpg",
    imageAlt: {
      es: "Ala de un avión comercial sobre nubes al atardecer, sin marcas visibles",
      en: "Commercial airplane wing above clouds at sunset, with no visible branding",
      pt: "Asa de um avião comercial sobre nuvens ao entardecer, sem marcas visíveis",
    },
    confidential: true,
  },
  {
    id: "entertainment-b2c",
    title: {
      es: "Destinos de entretenimiento",
      en: "Entertainment destinations",
      pt: "Destinos de entretenimento",
    },
    description: {
      es: "Liderazgo y desarrollo del canal B2C para destinos de entretenimiento: experiencia de compra online, con pasarela de pagos Hyperpay e integración de Apple Pay para checkout nativo en dispositivos Apple.",
      en: "Led and built the B2C channel for entertainment destinations: an online commerce experience with a Hyperpay payment gateway and Apple Pay integration for native checkout on Apple devices.",
      pt: "Liderança e desenvolvimento do canal B2C para destinos de entretenimento: experiência de compra online, com gateway de pagamento Hyperpay e integração Apple Pay para checkout nativo em dispositivos Apple.",
    },
    techDescription: {
      es: "Stack full-stack con SvelteKit y TypeScript en el front, NestJS en el backend, Tailwind CSS para UI, e integración Hyperpay + Apple Pay.",
      en: "Full-stack stack with SvelteKit and TypeScript on the front end, NestJS on the backend, Tailwind CSS for UI, and Hyperpay + Apple Pay integration.",
      pt: "Stack full-stack com SvelteKit e TypeScript no front, NestJS no backend, Tailwind CSS na UI e integração Hyperpay + Apple Pay.",
    },
    stack: ["SvelteKit", "TypeScript", "NestJS", "Tailwind CSS", "Hyperpay", "Apple Pay"],
    image: "/projects/entertainment-destinations.jpg",
    imageAlt: {
      es: "Personas disfrutando un destino de entretenimiento al aire libre por la noche",
      en: "People enjoying an outdoor entertainment destination at night",
      pt: "Pessoas aproveitando um destino de entretenimento ao ar livre à noite",
    },
    confidential: true,
  },
];
