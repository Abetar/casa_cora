import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
// ⬇️ nuevo wrapper cliente
import AppNavbarShell from "@/components/AppNavbarShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://casacora.org"),
  title: {
    default: "Casa Cora — Fundación viva de psicoterapia económica",
    template: "%s · Casa Cora",
  },
  description:
    "Acompañamiento psicológico accesible con enfoque integrativo, terapias alternativas y comunidad. Donde la planta, la palabra y la comunidad se encuentran para sanar.",
  keywords: [
    "psicoterapia económica",
    "terapia accesible",
    "salud mental",
    "Casa Cora",
    "terapias alternativas",
    "círculos",
    "comunidad",
  ],
  authors: [{ name: "Fundación Casa Cora" }],
  creator: "Casa Cora",
  publisher: "Casa Cora",
  category: "healthcare",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://casacora.org/",
    siteName: "Casa Cora",
    title: "Casa Cora — Fundación viva de psicoterapia económica",
    description:
      "Acompañamiento psicológico accesible, terapias alternativas y sanación colectiva.",
    images: [
      {
        url: "/og-casacora.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Cora — Fundación viva de psicoterapia económica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@casacora",
    creator: "@casacora",
    title: "Casa Cora — Fundación viva de psicoterapia económica",
    description:
      "Acompañamiento psicológico accesible, terapias alternativas y comunidad.",
    images: ["/og-casacora.jpg"],
  },
  themeColor: "#0f0e17",
  icons: {
    icon: [
      { url: "/favicon-v2.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans bg-[#0f0e17] text-white">
        {/* Navbar condicional */}
        <AppNavbarShell>
          {children}
        </AppNavbarShell>

        {/* JSON-LD */}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: "Fundación Casa Cora",
            url: "https://casacora.org/",
            description:
              "Fundación viva de psicoterapia económica, terapias alternativas y comunidad.",
            sameAs: [],
            logo: "https://casacora.org/apple-touch-icon.png",
          })}
        </Script>

        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
