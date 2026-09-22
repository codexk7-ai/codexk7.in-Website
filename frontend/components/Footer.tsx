'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-16 pb-12 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white inline-block">
              CODEX<span className="text-[#E50914]">K7</span>
            </Link>
            <p className="text-xs font-mono font-bold text-[#E50914] tracking-widest uppercase">
              WE BUILD AGENTIC AI.
            </p>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed font-normal">
              AI Engineering & Product Studio building autonomous agents, generative systems, and production software applications.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            {/* Navigation */}
            <div>
              <span className="font-bold text-white uppercase tracking-wider block mb-4">
                Pages
              </span>
              <ul className="space-y-2.5 text-white/70">
                <li><Link href="/" className="hover:text-[#E50914] transition-colors">Home</Link></li>
                <li><Link href="/service" className="hover:text-[#E50914] transition-colors">Service</Link></li>
                <li><Link href="/product" className="hover:text-[#E50914] transition-colors">Product</Link></li>
                <li><Link href="/about" className="hover:text-[#E50914] transition-colors">About</Link></li>
                <li><Link href="/book-call" className="hover:text-[#E50914] transition-colors">Book Call</Link></li>
              </ul>
            </div>

            {/* Work */}
            <div>
              <span className="font-bold text-white uppercase tracking-wider block mb-4">
                Engineering
              </span>
              <ul className="space-y-2.5 text-white/70">
                <li><Link href="/#projects" className="hover:text-[#E50914] transition-colors">Case Studies</Link></li>
                <li><Link href="/product" className="hover:text-[#E50914] transition-colors">Proprietary IP</Link></li>
                <li><Link href="/#agent-demo" className="hover:text-[#E50914] transition-colors">Agent Demo</Link></li>
                <li><Link href="/book-call" className="hover:text-[#E50914] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Capabilities */}
            <div>
              <span className="font-bold text-white uppercase tracking-wider block mb-4">
                Focus Areas
              </span>
              <ul className="space-y-2.5 text-white/70">
                <li>Agentic AI</li>
                <li>Generative AI</li>
                <li>AI Automation</li>
                <li>RAG Engines</li>
                <li>AI SaaS Studio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© {currentYear} CODEXK7. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>CODEXK7 • AI Engineering & Product Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
