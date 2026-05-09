"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import SmartLink from "@/components/SmartLink";

export type ProductButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type ProductCardProps = {
  icon: string;
  name: string;
  tagline?: string;
  description: string;
  benefits: string[];
  status: "Live" | "App Available" | "Coming Soon";
  buttons: ProductButton[];
  accent?: "cyan" | "violet" | "emerald" | "amber";
  preview?: ReactNode;
};

const statusStyles: Record<ProductCardProps["status"], string> = {
  Live: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
  "App Available": "bg-blue-500/15 text-blue-200 border-blue-400/40",
  "Coming Soon": "bg-amber-500/15 text-amber-200 border-amber-400/40"
};

const accentStyles: Record<NonNullable<ProductCardProps["accent"]>, string> = {
  cyan: "from-cyan-400/40 via-blue-500/30 to-indigo-500/30",
  violet: "from-violet-500/40 via-fuchsia-500/30 to-blue-500/30",
  emerald: "from-emerald-400/40 via-cyan-400/30 to-blue-500/30",
  amber: "from-amber-400/40 via-rose-500/30 to-violet-500/30"
};

export default function ProductCard({
  icon,
  name,
  tagline,
  description,
  benefits,
  status,
  buttons,
  accent = "cyan",
  preview
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glass-card-hover gradient-border group relative flex h-full flex-col overflow-hidden p-6"
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${accentStyles[accent]} opacity-40 blur-3xl transition duration-500 group-hover:opacity-70`}
      />

      <div className="relative mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] text-2xl shadow-inner ring-1 ring-white/10">
            {icon}
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
            {tagline ? <p className="text-xs text-cyan-200">{tagline}</p> : null}
          </div>
        </div>
        <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${statusStyles[status]}`}>
          {status}
        </span>
      </div>

      {preview ? (
        <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60">
          {preview}
        </div>
      ) : null}

      <p className="relative mb-4 text-sm leading-relaxed text-slate-300">{description}</p>
      <ul className="relative mb-6 space-y-2 text-sm text-slate-200">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="relative mt-auto flex flex-wrap gap-2">
        {buttons.map((button) => (
          <SmartLink
            key={`${name}-${button.label}`}
            href={button.href}
            className={button.variant === "secondary" ? "btn-secondary" : "btn-primary"}
          >
            {button.label}
          </SmartLink>
        ))}
      </div>
    </motion.article>
  );
}
