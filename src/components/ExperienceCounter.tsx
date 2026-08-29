'use client';

import { useEffect, useState } from 'react';

// Professional experience start date: Feb 2025 (Synthbit Group internship start,
// per resume). Everything below is computed live in the browser — no backend.
const EXPERIENCE_START = new Date('2025-02-01T00:00:00');

function getElapsed(start: Date, now: Date) {
  let years = now.getFullYear() - start.getFullYear();
  const anniversary = new Date(start);
  anniversary.setFullYear(start.getFullYear() + years);

  if (anniversary.getTime() > now.getTime()) {
    years -= 1;
    anniversary.setFullYear(start.getFullYear() + years);
  }

  let diffMs = now.getTime() - anniversary.getTime();

  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(diffMs / msPerDay);
  diffMs -= days * msPerDay;

  const msPerHour = 1000 * 60 * 60;
  const hours = Math.floor(diffMs / msPerHour);
  diffMs -= hours * msPerHour;

  const msPerMinute = 1000 * 60;
  const minutes = Math.floor(diffMs / msPerMinute);

  return { years, days, hours, minutes };
}

export default function ExperienceCounter() {
  const [elapsed, setElapsed] = useState<{ years: number; days: number; hours: number; minutes: number } | null>(
    null
  );

  useEffect(() => {
    const update = () => setElapsed(getElapsed(EXPERIENCE_START, new Date()));
    update();
    const id = setInterval(update, 1000 * 30); // refresh every 30s, minute granularity is what we show
    return () => clearInterval(id);
  }, []);

  if (!elapsed) {
    // Render nothing until mounted, so we never mismatch server/client output
    return (
      <span className="font-mono text-xs uppercase tracking-[0.15em]">
        BSc CSIT · Experience
      </span>
    );
  }

  const { years, days, hours, minutes } = elapsed;

  return (
    <span className="font-mono text-xs uppercase tracking-[0.15em]">
      BSc CSIT ·{' '}
      <span className="text-ink-200">
        {years}y {days}d {hours}h {minutes}m
      </span>{' '}
      experience
    </span>
  );
}
