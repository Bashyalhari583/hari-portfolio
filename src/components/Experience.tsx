import { portfolio } from '@/lib/portfolio';
import { Briefcase, TrendingUp } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="section-padding relative bg-ink-900/40">
      <div className="container-x">
        <div className="mb-14">
          <p className="label">04 — Experience</p>
          <h2 className="mt-3 font-display text-display-lg font-medium">
            Where I&apos;ve <em className="text-accent not-italic">built</em>.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline rail (desktop) */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent md:block md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-12 md:space-y-16">
            {experience.map((job, idx) => (
              <li
                key={`${job.company}-${idx}`}
                className="relative grid gap-6 md:grid-cols-2 md:gap-12"
              >
                {/* Dot */}
                <div
                  aria-hidden
                  className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ink-950 bg-accent md:left-1/2"
                />

                {/* Card alternates left/right on desktop */}
                <div
                  className={`pl-10 md:pl-0 ${
                    idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-ink-100 md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-ink-300 md:justify-end md:gap-1.5">
                    {idx % 2 !== 0 && (
                      <Briefcase size={14} className="text-ink-400 md:hidden" />
                    )}
                    <span className="font-mono text-sm">{job.company}</span>
                    {idx % 2 === 0 && (
                      <Briefcase size={14} className="hidden text-ink-400 md:inline" />
                    )}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-500">{job.location}</p>
                </div>

                <div
                  className={`pl-10 md:pl-0 ${
                    idx % 2 === 0 ? 'md:col-start-2 md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12 md:text-right'
                  }`}
                >
                  <div className={`${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <p className="label mb-2">Responsibilities</p>
                    <ul className={`space-y-1.5 text-sm leading-relaxed text-ink-300 md:text-base ${idx % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                      {job.responsibilities.map((r) => (
                        <li key={r}>· {r}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-5 ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <p className="label mb-2 flex items-center gap-2 text-accent">
                      <TrendingUp size={12} /> Key achievements
                    </p>
                    <ul className={`space-y-1.5 text-sm leading-relaxed text-ink-100 md:text-base ${idx % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                      {job.achievements.map((a) => (
                        <li key={a}>→ {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
