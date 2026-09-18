import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./expansion.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: "A Sua Publicidade | Branding, Marketing, Design e Sites",
  description: "Agência criativa, digital e tecnológica. Branding, identidade visual, conteúdo estratégico, campanhas, tráfego pago, sites e experiências digitais para empresas.",
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: "A Sua Publicidade | Branding, Marketing, Design e Sites",
    description: "Da identidade da sua marca à presença digital completa.",
    url: siteUrl,
    siteName: "A Sua Publicidade",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${siteUrl || "http://localhost:3000"}/opengraph-image.png`, width: 1200, height: 630, alt: "A Sua Publicidade" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: [{ url: `${basePath}/images/logo-square.jpg`, type: "image/jpeg" }] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050A12",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
