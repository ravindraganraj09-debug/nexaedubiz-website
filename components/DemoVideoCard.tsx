"use client";

import { motion } from "framer-motion";
import SmartLink from "@/components/SmartLink";

type DemoVideoCardProps = {
  title?: string;
  subtitle?: string;
  href: string;
};

export default function DemoVideoCard({
  title = "Watch ReplyPilot AI in Action",
  subtitle = "See how customer messages get instant smart replies in seconds.",
  href
}: DemoVideoCardProps) {
  return (
    <SmartLink
      href={href}
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-card-hover"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.4),transparent_55%)]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative grid min-h-[320px] place-items-center p-10 md:min-h-[420px]">
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 blur-2xl opacity-70 group-hover:opacity-100" />
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/30" />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
          <p className="mt-6 font-display text-2xl font-bold text-white sm:text-3xl">{title}</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-300">{subtitle}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 transition group-hover:border-cyan-300/50 group-hover:text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            2 min · Live demo
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </SmartLink>
  );
}
