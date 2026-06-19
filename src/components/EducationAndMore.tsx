import { portfolio } from '@/lib/portfolio';
import { GraduationCap, Award, Heart } from 'lucide-react';

export default function EducationAndMore() {
  const { education, certifications, softSkills, interests } = portfolio;

  return (
    <section id="education" className="section-padding relative">
      <div className="container-x">
        <div className="mb-14">
          <p className="label">05 — Background</p>
          <h2 className="mt-3 font-display text-display-lg font-medium">
            Education &amp; <em className="text-accent not-italic">ongoing</em>.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Education */}
          <div className="card">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                <GraduationCap size={16} />
              </div>
              <h3 className="font-display text-xl font-medium">Education</h3>
            </div>
            {education.map((edu) => (
              <div key={edu.degree}>
                <h4 className="font-display text-lg leading-snug text-ink-100">
                  {edu.degree}
                </h4>
                <p className="mt-1 font-mono text-xs text-ink-400">
                  {edu.institution} · {edu.period}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-300">
                  {edu.highlights.map((h) => (
                    <li key={h}>· {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="card">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                <Award size={16} />
              </div>
              <h3 className="font-display text-xl font-medium">Certifications &amp; learning</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-ink-300">
              {certifications.map((c) => (
                <li key={c}>→ {c}</li>
              ))}
            </ul>
          </div>

          {/* Soft skills + interests */}
          <div className="card">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                <Heart size={16} />
              </div>
              <h3 className="font-display text-xl font-medium">How I work</h3>
            </div>

            <p className="label mb-3">Soft skills</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            <p className="label mb-3">Interests</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
