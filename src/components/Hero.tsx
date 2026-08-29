'use client';

import Image from 'next/image';
import { ArrowDownRight, MapPin } from 'lucide-react';
import { portfolio } from '@/lib/portfolio';

export default function Hero() {
  const { personal } = portfolio;

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-24 md:pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 mask-fade-b" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[100px]" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: '50ms' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="label">Available for work</span>
            </div>

            <h1
              className="mt-6 font-display text-display-2xl font-medium text-balance opacity-0 animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              <span className="block">{personal.name.split(' ')[0]}</span>
              <span className="block italic text-ink-300">
                {personal.name.split(' ').slice(1).join(' ')}
                <span className="text-accent">.</span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 text-pretty md:text-xl opacity-0 animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              {personal.tagline}
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: '320ms' }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-950 transition-all hover:bg-accent-glow"
              >
                See projects
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-100 transition-all hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-0 animate-fade-up"
              style={{ animationDelay: '420ms' }}
            >
              <div className="flex items-center gap-2 text-ink-400">
                <MapPin size={14} className="text-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  {personal.location}
                </span>
              </div>
              <div className="text-ink-400">
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  BSc CSIT · 1+ yr experience
                </span>
              </div>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto aspect-[3/4] w-full max-w-sm opacity-0 animate-fade-up lg:max-w-none"
              style={{ animationDelay: '180ms' }}
            >
              {/* Decorative frame */}
              <div className="absolute -inset-2 rounded-3xl border border-accent/30" />
              <div className="absolute -inset-4 rounded-3xl border border-white/5" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ink-800">
                <Image
                  src="/profile.jpg"
                  alt={`${personal.name} — ${personal.role}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />

                {/* Name plate */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur-md">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                      Currently
                    </p>
                    <p className="font-display text-sm text-ink-100">
                      {personal.role}
                    </p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling marquee of tech */}
        <div className="mt-20 overflow-hidden border-y border-white/[0.06] py-6 md:mt-28">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-2xl text-ink-500 md:text-4xl">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-12">
                {['React', 'Node.js', 'MySQL', 'n8n', 'Next.js', 'TypeScript', 'Laravel', 'Python', 'SEO', 'AEO'].map(
                  (tech) => (
                    <span key={`${i}-${tech}`} className="flex items-center gap-12">
                      <span className="italic">{tech}</span>
                      <span className="text-accent">✦</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
