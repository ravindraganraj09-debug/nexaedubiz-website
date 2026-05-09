import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GradientOrbs from "@/components/GradientOrbs";
import SectionHeader from "@/components/SectionHeader";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

export const metadata: Metadata = {
  title: "Contact — AI SaaS Sales & Support",
  description:
    "Get in touch with NexaEduBiz for product demos, sales, support, or partnership opportunities across our AI products."
};

const linkClass =
  "mt-3 inline-block text-sm font-semibold text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 transition hover:text-cyan-100";

const infoCards: {
  icon: string;
  title: string;
  description: string;
  value: string;
  mailto?: string;
}[] = [
  {
    icon: "📧",
    title: "Sales & Partnerships",
    description: "General queries, sales, and partnerships",
    mailto: MAILTO_HELLO,
    value: HELLO_EMAIL
  },
  {
    icon: "🛠️",
    title: "Product Support",
    description: "Help with ReplyPilot, Talkentia, AskBuddy",
    mailto: MAILTO_SUPPORT,
    value: SUPPORT_EMAIL
  },
  {
    icon: "🚀",
    title: "Early Access",
    description: "Join the Movixa AI Studio waitlist",
    value: "Use the form below"
  }
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative section-wrapper pb-10 pt-16 md:pt-20">
        <GradientOrbs variant="hero" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[400px] grid-pattern opacity-40" />
        <div className="max-w-3xl">
          <span className="badge-gradient">Contact</span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">premium</span> together
          </h1>
          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            Tell us which product you&apos;re interested in and our team will get back to you
            within one business day. Or email{" "}
            <a href={MAILTO_HELLO} className="text-cyan-200 underline hover:text-cyan-100">
              {HELLO_EMAIL}
            </a>{" "}
            (sales) ·{" "}
            <a href={MAILTO_SUPPORT} className="text-cyan-200 underline hover:text-cyan-100">
              {SUPPORT_EMAIL}
            </a>{" "}
            (support).
          </p>
        </div>
      </section>

      <section className="section-wrapper pt-2">
        <div className="grid gap-4 md:grid-cols-3">
          {infoCards.map((card) => (
            <div key={card.title} className="glass-card glass-card-hover gradient-border p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-cyan-400/30 text-2xl">
                {card.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{card.description}</p>
              {card.mailto ? (
                <a href={card.mailto} className={linkClass}>
                  {card.value}
                </a>
              ) : (
                <p className="mt-3 text-sm font-semibold text-cyan-200">{card.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrapper pt-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Send a message"
            title="We usually reply within a few hours"
            description="Fill out the form and we'll route your message to the right team automatically."
          />
          <div className="glass-card p-6 md:p-8">
            <ContactForm className="grid gap-4 md:grid-cols-2" />
          </div>
        </div>
      </section>
    </main>
  );
}
