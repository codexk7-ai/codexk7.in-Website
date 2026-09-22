'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = NAV_ITEMS.filter((item) => item.label !== 'Book Call');

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__bar">
        {/* Brand */}
        <Link 
          href="/" 
          className="site-header__brand flex items-center gap-1 text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-90"
          onClick={() => setMobileMenuOpen(false)}
        >
          CODEX<span className="text-[#E50914]">K7</span>
        </Link>

        {/* Desktop Nav: Home, Service, Product, About */}
        <nav className="site-header__desktop" aria-label="Primary Desktop Navigation">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#E50914] ${
                  isActive ? 'text-[#E50914] font-semibold' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="site-header__end">
          <Link
            href="/book-call"
            className="site-header__cta site-header__cta--desktop group"
          >
            <span>Book Call</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            type="button"
            className="site-header__toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="site-header__mobile"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`py-2 text-base font-medium transition-colors hover:text-[#E50914] ${
                  isActive ? 'text-[#E50914] font-semibold' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/book-call"
            className="site-header__cta mt-3 flex w-full items-center justify-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Book Call</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
