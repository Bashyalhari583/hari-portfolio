import { portfolio } from '@/lib/portfolio';
import { Mail, MapPin, Phone, Github, Linkedin, Globe, Twitter, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolio;

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-ink-900/40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="container-x relative">
        <div className="mb-12 text-center">
          <p className="label">06 — Contact</p>
          <h2 className="mt-3 font-display text-display-xl font-medium text-balance">
            Let&apos;s build <em className="text-accent not-italic">something good</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-300 text-pretty md:text-lg">
            {personal.availability}. The fastest way to reach me is email — I usually reply within a day.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${personal.email}`}
            className="card group flex items-center justify-between gap-4"
          >
            <div>
              <p className="label mb-1">Email</p>
              <p className="font-display text-lg text-ink-100 group-hover:text-accent">
                {personal.email}
              </p>
            </div>
            <Mail size={20} className="shrink-0 text-ink-400 group-hover:text-accent" />
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s/g, '')}`}
            className="card group flex items-center justify-between gap-4"
          >
            <div>
              <p className="label mb-1">Phone</p>
              <p className="font-display text-lg text-ink-100 group-hover:text-accent">
                {personal.phone}
              </p>
            </div>
            <Phone size={20} className="shrink-0 text-ink-400 group-hover:text-accent" />
          </a>

          <div className="card flex items-center justify-between gap-4">
            <div>
              <p className="label mb-1">Location</p>
              <p className="font-display text-lg text-ink-100">{personal.location}</p>
            </div>
            <MapPin size={20} className="shrink-0 text-ink-400" />
          </div>

          <div className="card flex items-center justify-between gap-4">
            <div>
              <p className="label mb-1">Availability</p>
              <p className="font-display text-lg text-ink-100">Open to roles</p>
            </div>
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-accent" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
            </span>
          </div>
        </div>

        {/* Socials */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-200 transition-all hover:border-accent hover:text-accent"
          >
            <Github size={14} />
            GitHub
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-200 transition-all hover:border-accent hover:text-accent"
          >
            <Linkedin size={14} />
            LinkedIn
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={personal.links.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-200 transition-all hover:border-accent hover:text-accent"
          >
            <Globe size={14} />
            Portfolio
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={personal.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-200 transition-all hover:border-accent hover:text-accent"
          >
            <Twitter size={14} />
            X / Twitter
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
