"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

export default function AskBuddyMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-emerald-500/20 blur-2xl" />
      <BrowserFrame url="askbuddy.nexaedubiz.com">
        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_1.3fr]">
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                Subject
              </p>
              <p className="mt-1 text-sm font-semibold text-white">Mathematics · Class 10</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Algebra", "Geometry", "Trig"].map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                Today
              </p>
              <p className="mt-1 text-xs text-slate-200">Doubts solved</p>
              <p className="font-display text-2xl font-bold text-white">12</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                />
              </div>
              <p className="mt-1 text-[10px] text-slate-400">Goal: 18 / day</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-start gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-white">Aarav asked</p>
                  <p className="mt-0.5 rounded-lg bg-white/5 p-2 text-[11px] text-slate-200">
                    Solve: 2x² − 5x + 3 = 0 — explain step by step.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-3"
            >
              <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                AskBuddy AI · Step by step
              </div>
              <ol className="mt-2 space-y-1 text-[11px] text-slate-100">
                <li>1. Identify a=2, b=−5, c=3.</li>
                <li>2. Discriminant: b² − 4ac = 25 − 24 = 1.</li>
                <li>3. x = (5 ± 1) / 4 → x = 1.5 or x = 1.</li>
              </ol>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-200">
                  Verified
                </span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-200">
                  Practice 3 similar
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}
