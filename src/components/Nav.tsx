'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { navLinks } from '@/lib/constants';
import CTAButton from './CTAButton';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-purple rounded">
          <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-brand-purple-dark text-lg" style={{ fontFamily: 'var(--font-lora)' }}>
            Healing Word Counseling
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple rounded ${
                pathname === link.href
                  ? 'text-brand-purple underline underline-offset-4'
                  : 'text-neutral-900 hover:text-brand-purple'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <CTAButton href="/contact" variant="primary" className="py-2.5 px-6 text-sm">
            Book Free Consult
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-purple"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium py-2 focus:outline-none focus:ring-2 focus:ring-brand-purple rounded ${
                pathname === link.href ? 'text-brand-purple' : 'text-neutral-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton href="/contact" variant="primary" fullWidth onClick={() => setOpen(false)}>
            Book Free Consult
          </CTAButton>
        </div>
      )}
    </header>
  );
}
