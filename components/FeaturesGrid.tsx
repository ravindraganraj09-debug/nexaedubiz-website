"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
  accent: string;
};

const features: Feature[] = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive customer messages, follow-ups, and workflows so your team focuses on real conversations.",
    accent: "from-cyan-400 to-blue-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="m16.24 16.24 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="m16.24 7.76 2.83-2.83" />
      </svg>
    )
  },
  {
    title: "Lead Capture",
    description:
      "Turn every chat into structured leads with auto-tagged contact info, source tracking, and CRM-ready exports.",
    accent: "from-emerald-400 to-cyan-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 19-9-9 19-2-8-8-2Z" />
      </svg>
    )
  },
  {
    title: "Smart Replies",
    description:
      "Context-aware AI replies that match your brand voice, with one-click suggestions that learn from your history.",
    accent: "from-violet-400 to-fuchsia-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      </svg>
    )
  },
  {
    title: "AI Voice & Speaking",
    description:
      "Real-time speech understanding and natural voice responses for tutoring, coaching, and customer interactions.",
    accent: "from-rose-400 to-violet-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    )
  },
  {
    title: "AI Learning",
    description:
      "Personalized study plans, doubt solving, and progress tracking — designed to make complex topics simple.",
    accent: "from-amber-400 to-rose-500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5a6 6 0 0 0 12 0v-5" />
      </svg>
    )
  },
  {
    title: "Analytics Dashboard",
    description:
      "Beautiful, real-time analytics for replies, leads, retention, and growth — built into every NexaEduBiz product.",
    accent: "from-indigo-400 to-cyan-400",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  }
];

export default function FeaturesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <motion.article
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.05 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card glass-card-hover group relative overflow-hidden p-6"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition duration-500 group-hover:opacity-30"
            style={{ backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.5), transparent 60%)" }}
          />
          <span className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}>
            {f.icon}
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
