import { portfolio } from '@/lib/portfolio';
import { Code2, Database, Workflow, Cloud, Search, Sparkles } from 'lucide-react';

const SKILL_GROUPS = [
  { key: 'frontend', label: 'Frontend', icon: Code2 },
  { key: 'backend', label: 'Backend', icon: Database },
  { key: 'automation_qa', label: 'Automation & QA', icon: Workflow },
  { key: 'devops_deployment', label: 'DevOps & Deployment', icon: Cloud },
  { key: 'seo_growth', label: 'SEO / AEO / GEO', icon: Search },
  { key: 'other', label: 'Other', icon: Sparkles },
] as const;

export default function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="section-padding relative bg-ink-900/40">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">02 — Stack</p>
            <h2 className="mt-3 font-display text-display-lg font-medium">
              Tools I reach for.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink-400 text-pretty md:text-lg">
            Comfortable across the full lifecycle — from schema design to deployed UI to indexable content.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ key, label, icon: Icon }) => (
            <div key={key} className="card group">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent transition-colors group-hover:border-accent/40">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink-100">
                    {label}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
