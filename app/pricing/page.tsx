import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQItem from "@/components/FAQItem";
import PricingCard from "@/components/PricingCard";
import EmailLinks from "@/components/EmailLinks";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

export const metadata: Metadata = {
  title: "Pricing - NexaEduBiz AI Plans",
  description:
    "Simple, transparent pricing for NexaEduBiz AI products. Choose Free, Pro, or Business plans for ReplyPilot, Talkentia, AskBuddy, and Movixa AI Studio."
};

const pricing = [
  {
    plan: "Free Plan",
    price: "₹0/month",
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
    plan: "Pro Plan",
    price: "₹299/month",
    features: [
      "Higher AI usage limits",
      "Premium product features",
      "Priority email support",
      "Cancel anytime"
    ],
    ctaLabel: "Choose Pro",
    ctaLink: "/contact",
    highlight: true
  },
  {
    plan: "Business Plan",
    price: "₹999/month",
    features: [
      "Business-grade AI tools",
      "Team access & seats",
      "Advanced analytics",
      "Dedicated success manager"
    ],
    ctaLabel: "Contact Sales",
    ctaLink: "/contact"
  }
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
      "Our Free Plan lets you try the products with limited usage. Reach out to discuss extended trials for Pro and Business."
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
        Yes, we offer custom plans for teams and businesses with higher usage or integration needs.
        Use the contact form or email{" "}
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
      "Payment gateway integration can be wired into the CTA buttons (Razorpay, Stripe, Cashfree, or others) based on your preference."
  }
];

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="section-wrapper pb-10 pt-16 md:pt-20">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Simple Pricing for Every Stage
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Pick the plan that fits your goals. Start free, upgrade as you grow, and switch anytime.
            All plans include access to current and upcoming NexaEduBiz AI products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to Sales
            </Link>
            <Link href="/#products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
          <div className="mt-5">
            <EmailLinks />
          </div>
        </div>
      </section>

      <section className="section-wrapper pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          Prices shown in INR. Taxes may apply based on your region.
        </p>
      </section>

      <section className="section-wrapper pt-6">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Pricing FAQs</h2>
          <p className="mt-2 text-sm text-slate-300">
            Quick answers about plans, billing, and upgrades.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Plan Fits?"
        subtitle="Tell us about your use case and our team will help you pick the right plan in minutes."
        primaryLabel="Contact Sales"
        primaryHref="/contact"
        secondaryLabel="Back to Home"
        secondaryHref="/"
      />
    </main>
  );
}
