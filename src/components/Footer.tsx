import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { navLinks } from '@/lib/constants';
import CTAButton from './CTAButton';

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-brand-purple-dark text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline + social */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: 'var(--font-lora)' }}>
                Healing Word Counseling
              </span>
            </div>
            <p className="text-purple-200 text-sm italic leading-relaxed" style={{ color: '#A8C9A0' }}>
              Your story isn&apos;t over. Let&apos;s write the next chapter.
            </p>
            <div className="flex gap-3 mt-2">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-purple-200 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded" style={{ color: '#A8C9A0' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Contact + CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white mb-1 text-sm uppercase tracking-wider">Contact</h3>
            <p className="text-sm" style={{ color: '#A8C9A0' }}>Telehealth only — Serving Texas</p>
            <p className="text-sm" style={{ color: '#A8C9A0' }}>Evenings &amp; weekends available</p>
            <p className="text-sm" style={{ color: '#A8C9A0' }}>Ages 15–32</p>
            <p className="text-sm" style={{ color: '#A8C9A0' }}>Response within 1 business day</p>
            <CTAButton href="/contact" variant="light" className="mt-2 text-sm py-3 px-6">
              Book a Free Consultation
            </CTAButton>
          </div>
        </div>

        {/* Legal links */}
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-green-900 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#8FB98A' }}>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded">Terms of Service</Link>
            <Link href="/good-faith-estimate" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded">Good Faith Estimate</Link>
          </div>
          <p>&copy; 2026 Healing Word Counseling — All Rights Reserved</p>
        </div>
      </div>

      {/* Crisis safety bar */}
      <div className="bg-neutral-100 text-neutral-600 text-xs text-center py-3 px-6">
        If you or someone you know is in crisis, please call or text{' '}
        <strong>988</strong> (Suicide &amp; Crisis Lifeline). This site is not monitored for crisis situations.
      </div>
    </footer>
  );
}
