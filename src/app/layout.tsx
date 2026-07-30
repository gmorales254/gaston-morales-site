import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader, SkipLink } from "@/components/layout/SiteHeader";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gastón Morales — Portfolio",
    template: "%s · Gastón Morales",
  },
  description:
    "Gastón Morales — Tech Leader & Full Stack / Mobile Developer. Accessible Next.js, React Native, and TypeScript products for the USA and Latin America. | Líder técnico fullstack/mobile: interfaces accesibles con Next.js y React Native.",
  keywords: [
    "Gaston Morales",
    "Gastón Morales",
    "portfolio",
    "tech leader",
    "full stack developer",
    "mobile developer",
    "frontend engineer",
    "software engineer",
    "Next.js developer",
    "React Native developer",
    "TypeScript",
    "Tailwind CSS",
    "web accessibility",
    "WCAG 2.2",
    "USA",
    "Latin America",
    "LATAM",
    "desarrollador full stack",
    "desarrollador mobile",
    "ingeniero frontend",
    "líder técnico",
    "accesibilidad web",
    "desarrollador Next.js",
    "desarrollador React Native",
    "América Latina",
    "desenvolvedor full stack",
    "desenvolvedor mobile",
    "acessibilidade web",
  ],
  authors: [{ name: "Gastón Morales" }],
  creator: "Gastón Morales",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_LA", "es_ES", "pt_BR", "pt_PT"],
    url: SITE_URL,
    siteName: "Gastón Morales",
    title: "Gastón Morales — Tech Leader & Full Stack / Mobile Developer",
    description:
      "Accessible web and mobile products with Next.js, React Native, and TypeScript. Serving teams across the USA and Latin America.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastón Morales — Tech Leader & Full Stack / Mobile Developer",
    description:
      "Accessible web and mobile products with Next.js, React Native, and TypeScript. USA & LATAM.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <LocaleProvider>
          <SkipLink />
          <SiteHeader />
          <main
            id="main-content"
            tabIndex={-1}
            className="flex flex-1 flex-col outline-none"
          >
            {children}
          </main>
          <footer>{/* footer */}</footer>
        </LocaleProvider>
      </body>
    </html>
  );
}
