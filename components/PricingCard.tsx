"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type PricingCardProps = {
  plan: string;
  price: string;
  period?: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
  highlight?: boolean;
  badge?: string;
  description?: string;
};

export default function PricingCard({
  plan,
  price,
  period = "/ month",
  features,
  ctaLabel,
  ctaLink,
  highlight = false,
  badge,
  description
}: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
        highlight
          ? "border-cyan-300/50 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10 shadow-[0_30px_80px_rgba(34,211,238,0.25)]"
          : "border-white/10 bg-white/[0.04] shadow-glass hover:border-cyan-300/40"
      }`}
    >
      {highlight ? (
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/30 blur-3xl" />
      ) : null}
      {badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-950">
          {badge}
        </span>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-white">{plan}</h3>
      {description ? <p className="mt-1 text-xs text-slate-400">{description}</p> : null}
      <div className="mt-4 flex items-baseline gap-1">
        <p className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text font-display text-4xl font-bold text-transparent">
          {price}
        </p>
        <span className="text-xs text-slate-400">{period}</span>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={ctaLink} className={`mt-6 w-full ${highlight ? "btn-primary" : "btn-secondary"}`}>
        {ctaLabel}
      </Link>
    </motion.article>
  );
}
