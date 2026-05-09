"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Assistant = {
  name: string;
  role: string;
  image: string;
  product: string;
  href: string;
  accent: string;
  ring: string;
  glow: string;
};

const assistants: Assistant[] = [
  {
    name: "Aria",
    role: "Customer Assistant",
    image: "/characters/replypilot.png",
    product: "ReplyPilot AI",
    href: "/replypilot",
    accent: "from-cyan-300 via-blue-300 to-indigo-300",
    ring: "ring-cyan-300/30",
    glow: "from-cyan-500/40 via-blue-500/30 to-indigo-500/30"
  },
  {
    name: "Mia",
    role: "Speaking Tutor",
    image: "/characters/talkentia.png",
    product: "Talkentia AI",
    href: "/talkentia",
    accent: "from-violet-300 via-fuchsia-300 to-cyan-300",
    ring: "ring-violet-300/30",
    glow: "from-violet-500/40 via-fuchsia-500/30 to-blue-500/30"
  },
  {
    name: "Eva",
    role: "Study Buddy",
    image: "/characters/askbuddy.png",
    product: "AskBuddy AI",
    href: "/askbuddy",
    accent: "from-emerald-300 via-cyan-300 to-blue-300",
    ring: "ring-emerald-300/30",
    glow: "from-emerald-400/40 via-cyan-400/30 to-blue-500/30"
  },
  {
    name: "Nova",
    role: "Creative Director",
    image: "/characters/movixa.png",
    product: "Movixa AI Studio",
    href: "/movixa",
    accent: "from-amber-300 via-rose-300 to-violet-300",
    ring: "ring-amber-300/30",
    glow: "from-amber-400/40 via-rose-500/30 to-violet-500/30"
  }
];

export default function AssistantLineup() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {assistants.map((a, i) => (
        <motion.div
          key={a.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={a.href}
            className={`group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 ring-1 ${a.ring} transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover`}
          >
            <div className={`pointer-events-none absolute -inset-12 -z-10 rounded-[40px] bg-gradient-to-br ${a.glow} opacity-0 blur-3xl transition duration-700 group-hover:opacity-80`} />

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={a.image}
                alt={`${a.name}, the ${a.product} assistant`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Online
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300">
                {a.product}
              </p>
              <p className={`mt-2 bg-gradient-to-r ${a.accent} bg-clip-text font-display text-2xl font-bold text-transparent`}>
                {a.name}
              </p>
              <p className="text-xs text-slate-300">{a.role}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                Talk to {a.name}
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
