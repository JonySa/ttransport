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

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ttransport.at"),
  
  title: {
  default: "T-Transport Innsbruck – Umzüge, Transporte & Second-Hand Elektrogeräte",
  template: "%s | T-Transport Innsbruck",
},
description: "Ihr zuverlässiger Partner in Innsbruck für Umzüge, Schwertransporte, Entrümpelungen und geprüfte Second-Hand-Elektrogeräte in ganz Österreich.",

  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "T-Transport Innsbruck",
    description: "Ihr zuverlässiger Partner in Innsbruck für Umzüge, Schwertransporte, Entrümpelungen und geprüfte Second-Hand-Elektrogeräte in ganz Österreich.",
    url: "https://ttransport.at",
    siteName: "T-Transport Innsbruck",
    type: "website",
    locale: "de_AT",
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
