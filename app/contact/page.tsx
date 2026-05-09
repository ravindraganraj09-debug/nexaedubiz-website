import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

export const metadata: Metadata = {
  title: "Contact NexaEduBiz - AI SaaS Sales & Support",
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
    title: "Email Us",
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
      <section className="section-wrapper pb-10 pt-16 md:pt-20">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Let&apos;s Talk About Your AI Workflow
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Tell us which product you&apos;re interested in and our team will get back to you
            within one business day. You can also email{" "}
            <a href={MAILTO_HELLO} className="text-cyan-200 underline hover:text-cyan-100">
              {HELLO_EMAIL}
            </a>{" "}
            (business) or{" "}
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
            <div key={card.title} className="glass-card p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-cyan-400/30 text-2xl">
                {card.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
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

      <section className="section-wrapper pt-6">
        <div className="glass-card p-6 md:p-10">
          <div className="mb-6 max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Send a Message</h2>
            <p className="mt-2 text-sm text-slate-300">
              Fill out the form and we&apos;ll route your message to the right team.
            </p>
          </div>
          <ContactForm className="grid gap-4 md:grid-cols-2" />
        </div>
      </section>
    </main>
  );
}
