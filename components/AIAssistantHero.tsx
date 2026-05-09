"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AccentKey = "cyan" | "violet" | "emerald" | "amber";

type FloatingCard = {
  text: string;
  icon?: ReactNode;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "middle-left" | "middle-right";
};

type AccentTokens = {
  glow: string;
  ring: string;
  pingDot: string;
  badgeBg: string;
};

const accentMap: Record<AccentKey, AccentTokens> = {
  cyan: {
    glow: "from-cyan-500/40 via-blue-500/30 to-indigo-500/30",
    ring: "ring-cyan-300/30",
    pingDot: "bg-cyan-400",
    badgeBg: "bg-cyan-400"
  },
  violet: {
    glow: "from-violet-500/40 via-fuchsia-500/30 to-blue-500/30",
    ring: "ring-violet-300/30",
    pingDot: "bg-violet-400",
    badgeBg: "bg-violet-400"
  },
  emerald: {
    glow: "from-emerald-400/40 via-cyan-400/30 to-blue-500/30",
    ring: "ring-emerald-300/30",
    pingDot: "bg-emerald-400",
    badgeBg: "bg-emerald-400"
  },
  amber: {
    glow: "from-amber-400/40 via-rose-500/30 to-violet-500/30",
    ring: "ring-amber-300/30",
    pingDot: "bg-amber-400",
    badgeBg: "bg-amber-400"
  }
};

const positionMap: Record<FloatingCard["position"], string> = {
  "top-left": "top-3 left-3 sm:-top-3 sm:-left-4",
  "top-right": "top-3 right-3 sm:-top-3 sm:-right-4",
  "bottom-left": "bottom-3 left-3 sm:-bottom-3 sm:-left-4",
  "bottom-right": "bottom-3 right-3 sm:-bottom-3 sm:-right-4",
  "middle-left": "top-1/2 left-3 -translate-y-1/2 sm:-left-5",
  "middle-right": "top-1/2 right-3 -translate-y-1/2 sm:-right-5"
};

type CharacterCardProps = {
  characterImage: string;
  characterAlt: string;
  characterName: string;
  characterRole: string;
  accent?: AccentKey;
  floatingCards?: FloatingCard[];
  className?: string;
  priority?: boolean;
};

export function AssistantPortrait({
  characterImage,
  characterAlt,
  characterName,
  characterRole,
  accent = "cyan",
  floatingCards = [],
  className,
  priority = false
}: CharacterCardProps) {
  const a = accentMap[accent];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mx-auto w-full max-w-md ${className ?? ""}`}
    >
      <div className={`pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br ${a.glow} blur-3xl opacity-70`} />

      <div className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 shadow-card-hover backdrop-blur-xl ring-1 ${a.ring}`}>
        <Image
          src={characterImage}
          alt={characterAlt}
          width={780}
          height={780}
          priority={priority}
          sizes="(max-width: 768px) 90vw, 480px"
          className="relative z-10 aspect-[4/5] w-full select-none object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent p-5">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${a.pingDot} opacity-70`} />
              <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${a.badgeBg}`} />
            </span>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300">
              AI Assistant · Online
            </p>
          </div>
          <p className="mt-2 font-display text-xl font-bold text-white">{characterName}</p>
          <p className="text-xs text-slate-300">{characterRole}</p>
        </div>
      </div>

      {floatingCards.map((card, i) => (
        <motion.div
          key={`${card.text}-${i}`}
          animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute z-30 hidden rounded-2xl border border-white/15 bg-slate-900/85 px-3 py-2 text-xs font-semibold text-white shadow-glow-cyan backdrop-blur-xl sm:flex sm:items-center sm:gap-2 ${positionMap[card.position]}`}
        >
          {card.icon ? <span className="text-base">{card.icon}</span> : null}
          <span>{card.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

type AIAssistantHeroProps = CharacterCardProps & {
  mockup: ReactNode;
  /** Render character on the left vs right of the mockup. */
  characterSide?: "left" | "right";
};

export default function AIAssistantHero({
  mockup,
  characterSide = "right",
  ...portraitProps
}: AIAssistantHeroProps) {
  const portrait = <AssistantPortrait {...portraitProps} />;
  const mockupPanel = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {mockup}
    </motion.div>
  );

  return (
    <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      {characterSide === "left" ? (
        <>
          {portrait}
          {mockupPanel}
        </>
      ) : (
        <>
          {mockupPanel}
          {portrait}
        </>
      )}
    </div>
  );
}
