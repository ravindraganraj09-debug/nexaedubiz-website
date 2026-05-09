"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "./BrowserFrame";

export default function TalkentiaMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-violet-500/25 via-blue-500/20 to-cyan-500/25 blur-2xl" />
      <PhoneFrame>
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-3">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Talkentia</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-cyan-200">Topic</p>
              <p className="text-sm font-semibold text-white">Job Interview Prep</p>
            </div>
            <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-200">
              Level B2
            </span>
          </div>

          <div className="mt-3 space-y-2">
            <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] p-2 text-[11px] text-slate-100">
              Tell me about your last project. What did you enjoy most?
            </div>
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-cyan-500/30 to-blue-500/30 p-2 text-[11px] text-slate-100">
              I worked on a customer-support tool. I really enjoyed designing the AI replies.
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-emerald-300/30 bg-emerald-500/10 p-2 text-[10px] text-emerald-100">
              <p className="font-semibold">Grammar tip</p>
              <p className="mt-0.5 text-emerald-200/90">
                Try: &ldquo;designing the AI-powered replies&rdquo; for stronger phrasing.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
            <div className="relative">
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 blur-xl opacity-70" />
              <motion.button
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-white shadow-glow-cyan"
                aria-label="Mic"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="2" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </motion.button>
            </div>
            <span className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
          </div>

          <div className="mt-3 flex items-end justify-center gap-1">
            {[12, 22, 10, 28, 16, 34, 18, 24, 14, 30, 20].map((h, i) => (
              <motion.span
                key={i}
                animate={{ height: [`${h - 4}px`, `${h + 6}px`, `${h - 2}px`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
                className="block w-1 rounded-full bg-gradient-to-t from-cyan-400 to-violet-400"
              />
            ))}
          </div>
          <p className="mt-2 text-center text-[10px] text-slate-400">Listening… speak naturally</p>
        </div>
      </PhoneFrame>
    </div>
  );
}
