import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CODEXK7 — Agentic AI & AI Engineering",
  description:
    "CODEXK7 builds Agentic AI systems, AI agents, Generative AI applications, AI SaaS products, automation workflows and production-ready digital products.",
  metadataBase: new URL('https://codexk7.in'),
  openGraph: {
    title: 'CODEXK7 — Agentic AI & AI Engineering Studio',
    description: 'We build Agentic AI, autonomous workflows, RAG engines, and scalable AI SaaS applications.',
    url: 'https://codexk7.in',
    siteName: 'CODEXK7',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CODEXK7 — Agentic AI & AI Engineering',
    description: 'We build Agentic AI systems, AI agents, and production applications.',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
