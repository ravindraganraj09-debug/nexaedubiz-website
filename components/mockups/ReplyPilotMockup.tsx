"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

export default function ReplyPilotMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-2xl" />
      <BrowserFrame url="replypilot.nexaedubiz.com">
        <div className="grid gap-3 p-4 sm:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                  <div>
                    <p className="text-xs font-semibold text-white">Priya · Customer</p>
                    <p className="text-[10px] text-slate-400">2 min ago</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  New
                </span>
              </div>
              <p className="mt-2 rounded-lg bg-white/5 p-2 text-xs text-slate-200">
                Hi! Do you offer same-day shipping on orders above ₹999?
              </p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-2 rounded-lg border border-cyan-300/30 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 p-2"
              >
                <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  AI Reply · Sent
                </div>
                <p className="mt-1 text-xs text-slate-100">
                  Yes! Orders above ₹999 get same-day shipping in 12 cities. Want me to share the
                  list?
                </p>
              </motion.div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-white">Suggested replies</p>
                <span className="text-[10px] text-slate-400">AI · 0.4s</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Share shipping cities", "Send tracking link", "Offer 5% coupon"].map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                Replies today
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-white">1,284</p>
              <div className="mt-2 flex items-end gap-1">
                {[18, 26, 14, 32, 22, 36, 28, 40, 24, 32, 38, 46].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}px` }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="block w-1.5 rounded-sm bg-gradient-to-t from-blue-500 to-cyan-300"
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                Lead capture
              </p>
              <p className="mt-1 text-xs text-slate-200">+38 new leads</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ delay: 0.4, duration: 0.9 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                />
              </div>
              <p className="mt-1 text-[10px] text-slate-400">78% converted</p>
            </div>
            <div className="rounded-xl border border-emerald-300/30 bg-emerald-500/10 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-200">
                Avg response
              </p>
              <p className="mt-1 font-display text-xl font-bold text-white">2.4s</p>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}
