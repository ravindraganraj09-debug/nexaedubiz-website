"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

export default function HeroDashboard({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] bg-gradient-to-br from-cyan-500/30 via-blue-500/25 to-violet-500/30 blur-3xl" />

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-10 z-10 hidden rounded-2xl border border-white/15 bg-slate-900/80 p-3 shadow-glow-cyan backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold text-white">AI replied</p>
            <p className="text-[10px] text-slate-400">in 2.4s · auto</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-10 z-10 hidden rounded-2xl border border-white/15 bg-slate-900/80 p-3 shadow-glow-violet backdrop-blur-xl sm:block"
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-200">Leads</p>
        <p className="font-display text-xl font-bold text-white">+128</p>
        <p className="text-[10px] text-emerald-300">▲ 32% this week</p>
      </motion.div>

      <BrowserFrame url="dashboard.nexaedubiz.com">
        <div className="grid gap-3 p-4 sm:grid-cols-[180px_1fr]">
          {/* Sidebar */}
          <div className="hidden space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:block">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 text-[11px] font-black text-white">
                N
              </span>
              <p className="text-xs font-semibold text-white">NexaEduBiz</p>
            </div>
            <div className="space-y-1 pt-2">
              {[
                { label: "Overview", active: true },
                { label: "ReplyPilot" },
                { label: "Talkentia" },
                { label: "AskBuddy" },
                { label: "Movixa" },
                { label: "Settings" }
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-md px-2 py-1.5 text-[11px] ${
                    item.active
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white"
                      : "text-slate-400"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Main */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "AI replies", v: "12.4K", c: "from-cyan-400 to-blue-500" },
                { l: "Leads", v: "832", c: "from-violet-400 to-fuchsia-500" },
                { l: "Saved hrs", v: "248", c: "from-emerald-400 to-cyan-500" }
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">{s.l}</p>
                  <p className={`mt-0.5 bg-gradient-to-r ${s.c} bg-clip-text font-display text-lg font-bold text-transparent`}>
                    {s.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-white">Engagement (7d)</p>
                <span className="text-[10px] text-emerald-300">▲ 18%</span>
              </div>
              <svg viewBox="0 0 240 80" className="mt-2 h-20 w-full">
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(34,211,238,0.5)" />
                    <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                  </linearGradient>
                  <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  d="M0,60 C20,50 40,30 60,40 C80,52 100,20 120,28 C140,36 160,18 180,22 C200,26 220,12 240,18"
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M0,60 C20,50 40,30 60,40 C80,52 100,20 120,28 C140,36 160,18 180,22 C200,26 220,12 240,18 L240,80 L0,80 Z"
                  fill="url(#grad)"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Top intent</p>
                <p className="mt-1 text-[11px] font-semibold text-white">Pricing query</p>
                <p className="text-[10px] text-slate-400">38% of replies</p>
              </div>
              <div className="rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                  AI Suggest
                </p>
                <p className="mt-1 text-[11px] text-slate-100">Add a 5% offer to pricing replies</p>
              </div>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}
