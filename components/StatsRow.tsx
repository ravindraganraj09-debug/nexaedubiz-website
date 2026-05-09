"use client";

import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
  description?: string;
};

const stats: Stat[] = [
  { value: "10M+", label: "AI replies generated", description: "across our customer apps" },
  { value: "50K+", label: "Learners practicing", description: "speaking & studying with AI" },
  { value: "4.8★", label: "Avg user rating", description: "across product reviews" },
  { value: "99.9%", label: "Uptime promise", description: "global edge infrastructure" }
];

export default function StatsRow() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 * i, duration: 0.5 }}
          className="glass-card glass-card-hover gradient-border p-5"
        >
          <p className="bg-gradient-to-br from-cyan-200 via-blue-300 to-violet-300 bg-clip-text font-display text-3xl font-bold text-transparent sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
          {stat.description ? (
            <p className="mt-1 text-xs text-slate-400">{stat.description}</p>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
