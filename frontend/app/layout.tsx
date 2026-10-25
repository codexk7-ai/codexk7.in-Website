import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CODEXK7 — Agentic AI & AI Engineering Studio",
  description:
    "CODEXK7 builds Agentic AI systems, AI agents, Generative AI applications, AI SaaS products, automation workflows and production-ready digital products.",
  metadataBase: new URL("https://codexk7.in"),
  openGraph: {
    title: "CODEXK7 — Agentic AI & AI Engineering Studio",
    description:
      "We build Agentic AI, autonomous workflows, RAG engines, and scalable AI SaaS applications.",
    url: "https://codexk7.in",
    siteName: "CODEXK7",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODEXK7 — Agentic AI & AI Engineering",
    description:
      "We build Agentic AI systems, AI agents, and production applications.",
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
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
