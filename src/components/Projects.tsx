import { portfolio } from '@/lib/portfolio';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolio;

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">03 — Selected work</p>
            <h2 className="mt-3 font-display text-display-lg font-medium">
              Things I&apos;ve <em className="text-accent not-italic">built</em>.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink-400 text-pretty md:text-lg">
            A few projects I&apos;ve built recently — websites, automations, and SEO work.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={project.name}
              className="card group flex flex-col"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="label mb-2">
                    {String(idx + 1).padStart(2, '0')} · {project.role}
                  </p>
                  <h3 className="font-display text-2xl font-medium leading-tight text-ink-100 md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-ink-400">
                    @ {project.company}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-ink-200 transition-all hover:border-accent hover:bg-accent hover:text-ink-950"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <p className="text-sm leading-relaxed text-ink-300 md:text-base">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500">
                  Problem ·{' '}
                </span>
                {project.problem}
              </p>

              <ul className="mt-5 space-y-2.5">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2.5 text-sm text-ink-200 md:text-base"
                  >
                    <Check
                      size={14}
                      className="mt-1 shrink-0 text-accent"
                      strokeWidth={2.5}
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
