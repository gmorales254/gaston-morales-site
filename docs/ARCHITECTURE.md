# Arquitectura — Portfolio Gastón Morales

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Estilos | Tailwind CSS v4 (`@theme` + CSS variables) |
| Lenguaje | TypeScript 5 (strict) |
| Accesibilidad | WCAG 2.1 AA (skip link, semántica HTML) |
| Fuentes | Geist Sans / Geist Mono (`next/font`) |
| Lint | ESLint + `eslint-config-next` |

## Sistema de archivos

```
gaston-morales-site/
├── public/                 # Assets estáticos
├── src/
│   └── app/                # App Router
│       ├── layout.tsx      # Shell semántico + Metadata SEO + skip link
│       ├── page.tsx        # Home
│       └── globals.css     # Tokens de color + utilidades a11y
├── ARCHITECTURE.md
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

### Estructura prevista (próximos pasos)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/             # Header, Footer, SkipLink
│   ├── ui/                 # Primitivos reutilizables
│   └── sections/           # Bloques de página
└── lib/
    └── constants.ts        # Datos del sitio, nav, SEO helpers
```

## Design tokens (Emerald / Slate)

| Token | Light | Dark (`prefers-color-scheme`) |
|-------|-------|-------------------------------|
| `background` | `slate-50` `#f8fafc` | `zinc-950` `#09090b` |
| `foreground` | `slate-900` `#0f172a` | `zinc-100` `#f4f4f5` |
| `primary` | `emerald-700` `#047857` | `emerald-400` `#34d399` |
| `muted` | `slate-500` | `zinc-400` |
| `border` | `slate-200` | `zinc-800` |

Uso en clases: `bg-background`, `text-foreground`, `text-primary`, `text-muted`, `border-border`.

Contraste primario emerald-700 sobre slate-50 y emerald-400 sobre zinc-950 cumple umbral AA para texto normal/grande según ratios típicos de la paleta Tailwind.

## Layout semántico (`app/layout.tsx`)

1. `<a class="skip-link" href="#main-content">` — oculto hasta `:focus` (Tab).
2. `<header>` + `<nav aria-label="Navegación principal">`
3. `<main id="main-content" tabIndex={-1}>` — destino del skip; focus programático sin outline permanente.
4. `<footer>`

`lang="es"` en `<html>`.

## SEO (Metadata API)

Export `metadata` en root layout:

- `title` (default + template)
- `description`, `keywords`
- `openGraph` + `twitter`
- `metadataBase`, `robots`

## Scripts

```bash
npm run dev    # next dev (Turbopack)
npm run build  # producción
npm run start  # servir build
npm run lint   # ESLint
```

## Principios

- App Router only (`src/app`)
- Server Components por defecto; Client solo si hace falta interactividad
- Tokens semánticos, no hex sueltos en componentes
- Sin overlays/cards innecesarios; composición limpia
