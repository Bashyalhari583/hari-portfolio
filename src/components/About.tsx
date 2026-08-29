import { portfolio } from '@/lib/portfolio';

export default function About() {
  const { about, elevatorPitch } = portfolio;

  return (
    <section id="about" className="section-padding relative">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label">01 — About</p>
            <h2 className="mt-3 font-display text-display-lg font-medium text-balance">
              I don&apos;t just write code. I <em className="text-accent not-italic">finish</em> what I build.
            </h2>
          </div>

          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-ink-200 text-pretty md:text-xl">
              {about.short}
            </p>
            <p className="text-base leading-relaxed text-ink-400 text-pretty md:text-lg">
              {about.long}
            </p>

            <div className="rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 md:p-8">
              <p className="label mb-3 text-accent">Elevator pitch</p>
              <p className="font-display text-lg italic leading-relaxed text-ink-100 md:text-xl">
                “{elevatorPitch}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
