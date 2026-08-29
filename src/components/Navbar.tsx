'use client';

import { useEffect, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import ResumeModal from './ResumeModal';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            className="font-display text-xl font-medium tracking-tight md:text-2xl"
          >
            <span className="text-accent">H</span>ari
            <span className="text-ink-400">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-ink-300 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-300 transition-all hover:border-accent hover:text-accent"
            >
              <FileText size={14} />
              Resume
            </button>
            <a
              href="#contact"
              className="rounded-full border border-accent/50 bg-accent/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-all hover:bg-accent hover:text-ink-950"
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-100 transition-colors hover:border-accent md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transform bg-ink-950/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-x flex h-full flex-col justify-center pt-20">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ animationDelay: `${i * 60}ms` }}
                className={open ? 'animate-fade-up opacity-0' : ''}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-medium tracking-tight text-ink-100 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setResumeOpen(true);
              }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-100"
            >
              <FileText size={14} />
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block w-fit rounded-full border border-accent bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-950"
            >
              Hire me →
            </a>
          </div>
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
