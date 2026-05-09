"use client";

import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

export default function MovixaMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-amber-400/20 via-rose-500/20 to-violet-500/25 blur-2xl" />
      <BrowserFrame url="movixa.nexaedubiz.com">
        <div className="grid gap-3 p-4 sm:grid-cols-[1.3fr_1fr]">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-900/40 via-slate-900 to-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.4),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.35),transparent_55%)]" />
            <div className="relative aspect-video">
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
                Generating · 4K
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="h-24 w-24 rounded-full border-2 border-dashed border-white/30"
                />
                <span className="absolute font-display text-xl font-bold text-white">AI Studio</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "62%" }}
                    transition={{ duration: 1.4 }}
                    className="block h-full rounded-full bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-300"
                  />
                </span>
                <span className="text-[10px] font-semibold text-white">62%</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                Prompt
              </p>
              <p className="mt-1 text-[11px] text-slate-200">
                &ldquo;Cinematic AI startup intro, neon city, smooth camera, premium feel.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="aspect-square rounded-md border border-white/10 bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(135deg, hsl(${(i * 50 + 220) % 360},75%,55%) 0%, hsl(${
                      (i * 50 + 280) % 360
                    },75%,40%) 100%)`
                  }}
                />
              ))}
            </div>
            <div className="rounded-xl border border-amber-300/30 bg-amber-500/10 p-2 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-200">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}
