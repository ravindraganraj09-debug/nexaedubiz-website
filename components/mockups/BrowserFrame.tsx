import type { ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
};

export default function BrowserFrame({
  children,
  url = "app.nexaedubiz.com",
  className
}: BrowserFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-card-hover backdrop-blur-xl ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="ml-3 hidden flex-1 sm:block">
          <div className="mx-auto max-w-md rounded-md border border-white/5 bg-black/30 px-3 py-1 text-center text-[11px] text-slate-400">
            {url}
          </div>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] rounded-[2.4rem] border-[10px] border-slate-900 bg-slate-950 shadow-[0_30px_80px_rgba(34,211,238,0.25)] ${
        className ?? ""
      }`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="relative overflow-hidden rounded-[1.6rem]">{children}</div>
    </div>
  );
}
