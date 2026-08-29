'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        className="flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div>
            <p className="font-display text-sm font-medium text-ink-100">Resume</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400">
              View only — no download button here
            </p>
          </div>
          <button
            type="button"
            aria-label="Close resume"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors hover:border-accent hover:text-accent"
          >
            <X size={16} />
          </button>
        </div>

        <div
          className="relative flex-1 select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&statusbar=0&view=FitH"
            title="Hari Bashyal — Resume"
            className="h-full w-full border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
