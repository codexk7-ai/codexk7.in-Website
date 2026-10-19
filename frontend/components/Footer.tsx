'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-12 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--surface-dark)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-block"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                color: '#F9F6F1',
              }}
            >
              CODEX<span style={{ color: 'var(--primary-on-dark)' }}>K7</span>
            </Link>
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                color: 'var(--primary-on-dark)',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.1em',
              }}
            >
              WE BUILD AGENTIC AI.
            </p>
            <p
              className="text-sm max-w-sm leading-relaxed font-normal"
              style={{ color: 'rgba(249,246,241,0.5)', fontFamily: "'Inter', sans-serif" }}
            >
              AI Engineering &amp; Product Studio building autonomous agents,
              generative systems, and production software applications.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            {/* Navigation */}
            <div>
              <span
                className="font-bold uppercase tracking-wider block mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.08em',
                  color: '#F9F6F1',
                }}
              >
                Pages
              </span>
              <ul className="space-y-2.5" style={{ color: 'rgba(249,246,241,0.6)' }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Service', href: '/service' },
                  { label: 'Product', href: '/product' },
                  { label: 'About', href: '/about' },
                  { label: 'Book Call', href: '/book-call' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          'var(--primary-on-dark)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          'rgba(249,246,241,0.6)')
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering */}
            <div>
              <span
                className="font-bold uppercase tracking-wider block mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.08em',
                  color: '#F9F6F1',
                }}
              >
                Engineering
              </span>
              <ul className="space-y-2.5" style={{ color: 'rgba(249,246,241,0.6)' }}>
                {[
                  { label: 'Case Studies', href: '/#projects' },
                  { label: 'Proprietary IP', href: '/product' },
                  { label: 'Agent Demo', href: '/#agent-demo' },
                  { label: 'Contact Us', href: '/book-call' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          'var(--primary-on-dark)')
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          'rgba(249,246,241,0.6)')
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <span
                className="font-bold uppercase tracking-wider block mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.08em',
                  color: '#F9F6F1',
                }}
              >
                Focus Areas
              </span>
              <ul
                className="space-y-2.5"
                style={{
                  color: 'rgba(249,246,241,0.6)',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {[
                  'Agentic AI',
                  'Generative AI',
                  'AI Automation',
                  'RAG Engines',
                  'AI SaaS Studio',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(249,246,241,0.5)',
          }}
        >
          <p>&copy; {currentYear} CODEXK7. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>CODEXK7 &bull; AI Engineering &amp; Product Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
