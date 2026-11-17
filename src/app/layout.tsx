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
    default: "T-Transport Innsbruck",
    template: "%s | T-Transport Innsbruck",
  },
  description:
    "Professionelle Umzüge, Möbeltransporte und geprüfte gebrauchte Elektrogeräte in Innsbruck und Tirol.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "T-Transport Innsbruck",
    description:
      "Kleintransporte, Möbeltransporte, Umzüge und gebrauchte Elektrogeräte in Innsbruck und Umgebung.",
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
