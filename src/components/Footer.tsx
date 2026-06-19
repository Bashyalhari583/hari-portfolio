import { portfolio } from '@/lib/portfolio';

export default function Footer() {
  const { personal } = portfolio;
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500">
          © {new Date().getFullYear()} {personal.name}. Built with Next.js + Tailwind.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500">
          {personal.location}
        </p>
      </div>
    </footer>
  );
}
