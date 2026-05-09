import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import EmailLinks from "@/components/EmailLinks";
import FAQItem from "@/components/FAQItem";
import GradientOrbs from "@/components/GradientOrbs";
import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

export const metadata: Metadata = {
  title: "Pricing — Premium AI Plans",
  description:
    "Simple, transparent pricing for NexaEduBiz AI products. Choose Starter, Pro, or Business plans for ReplyPilot, Talkentia, AskBuddy, and Movixa AI Studio."
};

const pricing = [
  {
    plan: "Starter",
    price: "₹0",
    description: "Best for trying things out",
    features: [
      "Basic access to all products",
      "Limited AI usage",
      "Community support",
      "Try before you upgrade"
    ],
    ctaLabel: "Start Free",
    ctaLink: "/contact"
  },
  {
    plan: "Pro",
    price: "₹299",
    description: "For makers & power users",
    features: [
      "Everything in Starter",
      "Higher AI usage limits",
      "Premium product features",
      "Priority email support",
      "Cancel anytime"
    ],
    ctaLabel: "Choose Pro",
    ctaLink: "/contact",
    highlight: true,
    badge: "Most Popular"
  },
  {
    plan: "Business",
    price: "₹999",
    description: "For teams & growing brands",
    features: [
      "Everything in Pro",
      "Business-grade AI tools",
      "Team access & seats",
      "Advanced analytics",
      "Dedicated success manager"
    ],
    ctaLabel: "Contact Sales",
    ctaLink: "/contact"
  }
];

const compareRows = [
  { feature: "AI products access", starter: "Basic", pro: "All", business: "All + early access" },
  { feature: "AI usage limits", starter: "Low", pro: "High", business: "Custom" },
  { feature: "Team workspace", starter: "—", pro: "—", business: "✓" },
  { feature: "Advanced analytics", starter: "—", pro: "Basic", business: "✓" },
  { feature: "Priority support", starter: "Community", pro: "Email", business: "Dedicated" }
];

const faqLink =
  "font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-100";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Can I switch plans later?",
    answer: (
      <>
        Yes. Upgrade or downgrade your plan anytime from your account or email{" "}
        <a href={MAILTO_SUPPORT} className={faqLink}>
          {SUPPORT_EMAIL}
        </a>{" "}
        for help.
      </>
    )
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Our Starter plan is free forever with limited usage. Reach out for extended trials on Pro and Business."
  },
  {
    question: "Which products are included in each plan?",
    answer:
      "Plans cover access across NexaEduBiz products including ReplyPilot AI, Talkentia AI, AskBuddy AI, and upcoming tools like Movixa AI Studio."
  },
  {
    question: "Do you offer custom enterprise pricing?",
    answer: (
      <>
        Yes — custom plans for teams with higher usage or integration needs. Email{" "}
        <a href={MAILTO_HELLO} className={faqLink}>
          {HELLO_EMAIL}
        </a>{" "}
        to talk to sales.
      </>
    )
  },
  {
    question: "How do I pay?",
    answer:
      "We support Razorpay, Stripe, and Cashfree integrations behind the CTA buttons depending on your region."
  }
];

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative section-wrapper pb-10 pt-16 md:pt-20">
        <GradientOrbs variant="hero" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[400px] grid-pattern opacity-40" />
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-gradient">Pricing</span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl">
            Simple pricing for{" "}
            <span className="gradient-text">every stage</span>
          </h1>
          <p className="mt-5 text-base text-slate-300 sm:text-lg">
            Pick the plan that fits your goals. Start free, upgrade as you grow, switch anytime.
            All plans include access to current and upcoming NexaEduBiz AI products.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to Sales
              <span aria-hidden>→</span>
            </Link>
            <Link href="/#products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
          <div className="mt-6 flex justify-center">
            <EmailLinks />
          </div>
        </div>
      </section>

      <section className="section-wrapper pt-4">
        <div className="grid gap-5 md:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          Prices shown in INR. Taxes may apply based on your region.
        </p>
      </section>

      <section className="section-wrapper pt-10">
        <SectionHeader
          eyebrow="Compare"
          title="What you get on each plan"
          className="mb-8"
        />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="hidden grid-cols-4 gap-2 border-b border-white/10 bg-white/[0.04] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-cyan-200 md:grid">
            <span>Feature</span>
            <span>Starter</span>
            <span>Pro</span>
            <span>Business</span>
          </div>
          <div className="divide-y divide-white/5">
            {compareRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 gap-2 px-6 py-4 text-sm text-slate-200 md:grid-cols-4"
              >
                <span className="font-medium text-white">{row.feature}</span>
                <span className="text-slate-300">{row.starter}</span>
                <span className="text-slate-300">{row.pro}</span>
                <span className="text-slate-300">{row.business}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper pt-10">
        <SectionHeader
          eyebrow="Pricing FAQs"
          title="Quick answers about plans, billing & upgrades"
          className="mb-8"
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which plan fits?"
        subtitle="Tell us about your use case and our team will help you pick the right plan in minutes."
        primaryLabel="Contact Sales"
        primaryHref="/contact"
        secondaryLabel="Back to Home"
        secondaryHref="/"
      />
    </main>
  );
}
