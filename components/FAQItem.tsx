import type { ReactNode } from "react";

type FAQItemProps = {
  question: string;
  answer: ReactNode;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 open:border-cyan-300/40 open:bg-white/[0.05] hover:border-white/20">
      <summary className="cursor-pointer list-none text-base font-semibold text-white">
        <span className="flex items-center justify-between gap-4">
          <span>{question}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-300 transition group-open:rotate-45">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </span>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-slate-300">{answer}</div>
    </details>
  );
}
