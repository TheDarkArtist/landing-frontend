import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://landing-frontend-sigma-seven.vercel.app/'),
  title: {
    template: "%s | Landing Page",
    default: "Landing Page | Modular CMS-Driven Pages",
  },
  description:
    "Build and render modular, CMS-configured landing pages powered by Contentful. Fully customizable and production-ready.",
  openGraph: {
    title: "TDA Landing | Modular CMS-Driven Pages",
    description:
      "A flexible system for creating and rendering landing pages from Contentful using a dynamic component layout.",
    url: "https://tda-landing.vercel.app",
    siteName: "TDA Landing",
    images: [{ url: "/og/og-landing-home.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
