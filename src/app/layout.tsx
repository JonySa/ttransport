
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  metadataBase: new URL("https://ttransport.at"),

  title: {
    default: "TTOM Innsbruck | Umzüge, Spedition & Entrümpelungen",
    template: "%s | TTOM Innsbruck",
  },

  description:
    "TTOM Innsbruck – Ihr Partner für Umzüge, Spedition, Gütertransporte, Möbeltransporte sowie Keller-, Dachboden- und Haushaltsentrümpelungen in Innsbruck und Tirol.",

  alternates: {
    canonical: "https://ttransport.at/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "TTOM Innsbruck | Umzüge, Spedition & Entrümpelungen",
    description:
      "Umzüge, Möbeltransporte, Spedition und professionelle Entrümpelungen in Innsbruck und Tirol.",
    url: "https://ttransport.at/",
    siteName: "TTOM Innsbruck",
    locale: "de_AT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TTOM Innsbruck | Umzüge & Transporte",
    description:
      "Ihr Partner für Umzüge, Spedition und Entrümpelungen in Innsbruck und Tirol.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
