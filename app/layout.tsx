import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./sections.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://qualia-cx.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Qualia — Quality & coaching for human and AI agents",
  description:
    "Qualia is the optimization platform that scores 100% of conversations and coaches your human and AI agents — making every customer interaction sharper, faster, and more consistent.",
  keywords: [
    "customer experience",
    "quality assurance",
    "agent coaching",
    "AI agents",
    "contact center",
    "conversation analytics",
  ],
  authors: [{ name: "Paliy" }],
  creator: "Paliy",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Qualia",
    title: "Qualia — Quality & coaching for human and AI agents",
    description:
      "Score every conversation and coach every agent — human or AI. Raise the bar on customer experience with one optimization platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualia — Quality & coaching for human and AI agents",
    description:
      "Score every conversation and coach every agent — human or AI. Raise the bar on customer experience.",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal,.reveal-scale{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
