"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Founder · D2C Brand",
    quote:
      "ReplyPilot AI cut our response time by 80%. We capture leads even at 2 AM — our team finally sleeps.",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5
  },
  {
    name: "Ayesha Khan",
    role: "Class 12 Student",
    quote:
      "AskBuddy AI explains every doubt step by step. It feels like having a private tutor in my pocket.",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5
  },
  {
    name: "Neeraj Verma",
    role: "Content Creator · 240K subs",
    quote:
      "Talkentia gave me confidence to interview in English. The AI tutor never judges and never gets tired.",
    avatar: "https://i.pravatar.cc/120?img=33",
    rating: 5
  },
  {
    name: "Priya Nair",
    role: "Operations Lead · SaaS",
    quote:
      "The unified analytics across NexaEduBiz products is a game changer. One dashboard, every insight.",
    avatar: "https://i.pravatar.cc/120?img=56",
    rating: 5
  },
  {
    name: "Aman Gupta",
    role: "Agency Owner",
    quote:
      "We onboarded 40+ clients on ReplyPilot AI in 3 weeks. The mockup and onboarding feel investor-grade.",
    avatar: "https://i.pravatar.cc/120?img=14",
    rating: 5
  },
  {
    name: "Sara Williams",
    role: "EdTech Director",
    quote:
      "AskBuddy + Talkentia is a stunning learning combo. Students actually look forward to studying.",
    avatar: "https://i.pravatar.cc/120?img=22",
    rating: 5
  }
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "#FACC15" : "rgba(255,255,255,0.15)"}
          aria-hidden="true"
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.article
          key={t.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.05 * i, duration: 0.5 }}
          className="glass-card glass-card-hover relative overflow-hidden p-6"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="flex items-center justify-between">
            <Stars count={t.rating} />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(34,211,238,0.4)" aria-hidden="true">
              <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" />
            </svg>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src={t.avatar}
              alt={t.name}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-white/15 object-cover"
              unoptimized
            />
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-slate-400">{t.role}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
