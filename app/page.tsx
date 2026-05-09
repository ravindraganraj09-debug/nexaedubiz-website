import Link from "next/link";
import type { ReactNode } from "react";
import AIAssistantHero from "@/components/AIAssistantHero";
import AssistantLineup from "@/components/AssistantLineup";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import DemoVideoCard from "@/components/DemoVideoCard";
import EmailLinks from "@/components/EmailLinks";
import FAQItem from "@/components/FAQItem";
import FeaturesGrid from "@/components/FeaturesGrid";
import GradientOrbs from "@/components/GradientOrbs";
import MotionSection, { MotionDiv, MotionItem } from "@/components/MotionSection";
import PricingCard from "@/components/PricingCard";
import ProductCard, { ProductButton } from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import SmartLink from "@/components/SmartLink";
import StatsRow from "@/components/StatsRow";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import TrustBar from "@/components/TrustBar";
import HeroDashboard from "@/components/mockups/HeroDashboard";
import ReplyPilotMockup from "@/components/mockups/ReplyPilotMockup";
import TalkentiaMockup from "@/components/mockups/TalkentiaMockup";
import AskBuddyMockup from "@/components/mockups/AskBuddyMockup";
import MovixaMockup from "@/components/mockups/MovixaMockup";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

const REPLYPILOT_APP_URL = "https://ai-auto-reply-tool.vercel.app";
const TALKENTIA_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rganraj.aispeakeasy&pcampaignid=web_share";

type ProductSpec = {
  icon: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  status: "Live" | "App Available" | "Coming Soon";
  buttons: ProductButton[];
  accent: "cyan" | "violet" | "emerald" | "amber";
};

const products: ProductSpec[] = [
  {
    icon: "💬",
    name: "ReplyPilot AI",
    tagline: "AI auto-reply for businesses",
    description:
      "Answer customer messages instantly, capture leads automatically, and never miss a conversation across chat, email, or DMs.",
    benefits: [
      "Instant smart replies trained on your brand voice",
      "Auto lead capture with CRM-ready exports",
      "Beautiful analytics & response time tracking"
    ],
    status: "Live",
    accent: "cyan",
    buttons: [
      { label: "Try ReplyPilot", href: REPLYPILOT_APP_URL },
      { label: "Pricing", href: "/pricing", variant: "secondary" },
      { label: "Learn More", href: "/replypilot", variant: "secondary" }
    ]
  },
  {
    icon: "🎙️",
    name: "Talkentia AI",
    tagline: "AI English speaking tutor",
    description:
      "Practice real conversations with a patient AI tutor — voice based, level aware, with instant grammar and pronunciation tips.",
    benefits: [
      "Voice-first speaking practice",
      "Live grammar & pronunciation correction",
      "Topic packs for interviews, travel, work"
    ],
    status: "App Available",
    accent: "violet",
    buttons: [
      { label: "Download App", href: TALKENTIA_PLAY_STORE_URL },
      { label: "View Plans", href: "/pricing", variant: "secondary" },
      { label: "Learn More", href: "/talkentia", variant: "secondary" }
    ]
  },
  {
    icon: "📘",
    name: "AskBuddy AI",
    tagline: "AI homework & study helper",
    description:
      "Solve doubts with step-by-step explanations, generate practice questions and track learning progress in a friendly student dashboard.",
    benefits: [
      "Step-by-step doubt solving",
      "Personalised study plans & streaks",
      "Math, science, language & more"
    ],
    status: "App Available",
    accent: "emerald",
    buttons: [
      { label: "Open AskBuddy", href: "/askbuddy" },
      { label: "View Plans", href: "/pricing", variant: "secondary" },
      { label: "Learn More", href: "/askbuddy", variant: "secondary" }
    ]
  },
  {
    icon: "🎬",
    name: "Movixa AI Studio",
    tagline: "AI video & creative studio",
    description:
      "Generate cinematic videos, branded images and short-form content with one prompt. Built for creators, agencies, and growth teams.",
    benefits: [
      "Prompt-to-video generation",
      "Branded image variations",
      "Creator-grade timeline & exports"
    ],
    status: "Coming Soon",
    accent: "amber",
    buttons: [
      { label: "Join Waitlist", href: "/contact" },
      { label: "Preview", href: "/movixa", variant: "secondary" }
    ]
  }
];

const upcoming = [
  { name: "AI Website Builder", emoji: "🌐", desc: "Generate brand-ready websites with one prompt." },
  { name: "AI Voice Assistant", emoji: "🔊", desc: "Always-on voice agent for support and sales." },
  { name: "AI Business Chatbot", emoji: "🤖", desc: "Trainable chatbot for your products & docs." },
  { name: "AI Marketing Assistant", emoji: "📈", desc: "Campaign ideas, copy, and analytics in one place." }
];

const pricing = [
  {
    plan: "Starter",
    price: "₹0",
    description: "Best for trying things out",
    features: ["Basic access to all products", "Limited AI usage", "Community support"],
    ctaLabel: "Start Free",
    ctaLink: "/pricing"
  },
  {
    plan: "Pro",
    price: "₹299",
    description: "For makers & power users",
    features: [
      "Everything in Starter",
      "Higher AI usage limits",
      "Premium templates & exports",
      "Priority email support"
    ],
    ctaLabel: "Choose Pro",
    ctaLink: "/pricing",
    highlight: true,
    badge: "Most Popular"
  },
  {
    plan: "Business",
    price: "₹999",
    description: "For teams & growing brands",
    features: [
      "Everything in Pro",
      "Team workspace & roles",
      "Advanced analytics",
      "Dedicated success manager"
    ],
    ctaLabel: "Talk to Sales",
    ctaLink: "/contact"
  }
];

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "What is NexaEduBiz?",
    answer:
      "NexaEduBiz is a premium AI SaaS company building modern AI products for business automation, student learning and creator productivity — under one trusted brand."
  },
  {
    question: "Can I use these AI tools for my business?",
    answer:
      "Yes. ReplyPilot AI is purpose-built for customer messaging and lead capture, and our upcoming business tools cover chatbots, voice agents, and marketing workflows."
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Starter plan is free forever with limited AI usage so you can explore every product before upgrading."
  },
  {
    question: "How do I buy a plan?",
    answer:
      "Open the pricing page, choose your plan and follow the CTA. We can plug your preferred payment gateway directly behind those buttons."
  },
  {
    question: "Do you support mobile apps?",
    answer:
      "Talkentia AI and AskBuddy AI are mobile-first today. Web versions, including Movixa AI Studio, are rolling out across 2026."
  },
  {
    question: "Can I contact support?",
    answer: (
      <>
        Use the contact form on this page, email{" "}
        <a
          href={MAILTO_SUPPORT}
          className="font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-100"
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        for product help, or{" "}
        <a
          href={MAILTO_HELLO}
          className="font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-100"
        >
          {HELLO_EMAIL}
        </a>{" "}
        for sales and partnerships.
      </>
    )
  }
];

const howItWorks = [
  { step: "01", title: "Pick your product", description: "Browse ReplyPilot, Talkentia, AskBuddy or Movixa." },
  { step: "02", title: "Open it instantly", description: "No setup. Live web app or mobile download." },
  { step: "03", title: "Plug in your data", description: "Connect channels, brand voice, or learning goals." },
  { step: "04", title: "Scale with AI", description: "Upgrade plans as your team and audience grow." }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section id="home" className="relative pb-12 pt-16 md:pb-20 md:pt-24">
        <GradientOrbs variant="hero" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[600px] grid-pattern opacity-50" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <MotionDiv>
              <div className="badge-gradient">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
                </span>
                Premium AI SaaS Platform · v2026
              </div>

              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
                AI Products for{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                    Business, Learning
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" aria-hidden="true">
                    <path d="M2 8 C 80 2, 160 2, 298 8" stroke="url(#hg)" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="hg" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#22D3EE" />
                        <stop offset="100%" stopColor="#A78BFA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                & Creativity
              </h1>

              <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
                NexaEduBiz builds smart AI tools that help teams reply faster, students learn
                better, and creators work smarter — all in one premium ecosystem.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <SmartLink href={REPLYPILOT_APP_URL} className="btn-primary">
                  Start Free with ReplyPilot
                  <span aria-hidden>→</span>
                </SmartLink>
                <Link href="#products" className="btn-secondary">
                  Explore Products
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Live in 60 seconds
                </span>
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Cancel anytime
                </span>
              </div>
            </MotionDiv>

            <MotionDiv delay={0.15} className="relative">
              <HeroDashboard />
            </MotionDiv>
          </div>

          <div className="mt-20">
            <TrustBar />
          </div>
        </div>
      </section>

      {/* STATS */}
      <MotionSection className="section-wrapper pt-6">
        <StatsRow />
      </MotionSection>

      {/* PRODUCTS */}
      <MotionSection id="products" className="relative section-wrapper pt-10">
        <GradientOrbs />
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Our AI Products"
            title="A premium AI ecosystem for every team"
            description="Live products you can use today, plus upcoming launches — all built with the same premium AI standard."
          />
          <Link href="/pricing" className="btn-secondary">
            View Pricing
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </MotionSection>

      {/* MEET THE AI ASSISTANTS */}
      <MotionSection className="relative section-wrapper pt-12">
        <GradientOrbs />
        <SectionHeader
          align="center"
          eyebrow="Meet your AI assistants"
          title="Four premium AI minds. One ecosystem."
          description="Aria, Mia, Eva and Nova — each crafted for a different superpower across business, learning and creativity."
          className="!mx-auto mb-12"
        />
        <AssistantLineup />
      </MotionSection>

      {/* REPLYPILOT FEATURE */}
      <MotionSection className="relative section-wrapper pt-6">
        <GradientOrbs />
        <div className="mb-10 max-w-3xl">
          <div className="badge-gradient">Featured · Live now</div>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Meet{" "}
            <span className="gradient-text">Aria</span>
            {" "}— your AI customer assistant
          </h2>
          <p className="mt-4 text-base text-slate-300">
            ReplyPilot AI handles incoming customer messages 24/7, captures leads automatically,
            and gives your team a beautiful dashboard for response analytics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <SmartLink href={REPLYPILOT_APP_URL} className="btn-primary">
              Start Free
              <span aria-hidden>→</span>
            </SmartLink>
            <Link href="#demo" className="btn-secondary">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                ▶
              </span>
              Watch Demo
            </Link>
            <Link href="/replypilot" className="btn-ghost">
              Learn More →
            </Link>
          </div>
        </div>
        <AIAssistantHero
          characterImage="/characters/replypilot.png"
          characterAlt="Aria, the ReplyPilot AI customer support assistant"
          characterName="Aria"
          characterRole="ReplyPilot AI · Customer Assistant"
          accent="cyan"
          characterSide="left"
          mockup={<ReplyPilotMockup />}
          floatingCards={[
            { text: "AI replied · 2.4s", icon: "💬", position: "top-right" },
            { text: "Lead captured", icon: "🎯", position: "bottom-left" }
          ]}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "AI auto replies",
            "Lead capture",
            "Smart suggestions",
            "Multi-channel ready",
            "Brand voice training",
            "Real-time analytics"
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 text-cyan-200">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </MotionSection>

      {/* TALKENTIA FEATURE */}
      <MotionSection className="relative section-wrapper pt-6">
        <div className="mb-10 max-w-3xl">
          <div className="badge-gradient">App Available · Mobile-first</div>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Mia
            </span>
            {" "}— your AI English tutor
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A patient AI tutor in your pocket. Practice real conversations, get instant grammar
            tips, and build interview-ready confidence with voice-first speaking sessions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <SmartLink href={TALKENTIA_PLAY_STORE_URL} className="btn-primary">
              Get on Google Play
              <span aria-hidden>→</span>
            </SmartLink>
            <Link href="/talkentia" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <AIAssistantHero
          characterImage="/characters/talkentia.png"
          characterAlt="Mia, the Talkentia AI English speaking tutor"
          characterName="Mia"
          characterRole="Talkentia AI · Speaking Tutor"
          accent="violet"
          characterSide="right"
          mockup={<TalkentiaMockup />}
          floatingCards={[
            { text: "B2 · Fluent", icon: "🎙️", position: "top-left" },
            { text: "+12 day streak", icon: "🔥", position: "bottom-right" }
          ]}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Real-time AI voice",
            "Grammar correction",
            "Interview & travel packs",
            "Streak & fluency tracker"
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20 text-violet-200">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </MotionSection>

      {/* ASKBUDDY FEATURE */}
      <MotionSection className="relative section-wrapper pt-6">
        <GradientOrbs />
        <div className="mb-10 max-w-3xl">
          <div className="badge-gradient">For Students · App Available</div>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Eva
            </span>
            {" "}— your AI study buddy
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Snap a question, get a step-by-step explanation, and unlock practice problems that
            build real understanding — not shortcuts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/askbuddy" className="btn-primary">
              Try AskBuddy
              <span aria-hidden>→</span>
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Plans
            </Link>
          </div>
        </div>
        <AIAssistantHero
          characterImage="/characters/askbuddy.png"
          characterAlt="Eva, the AskBuddy AI study assistant"
          characterName="Eva"
          characterRole="AskBuddy AI · Study Assistant"
          accent="emerald"
          characterSide="left"
          mockup={<AskBuddyMockup />}
          floatingCards={[
            { text: "Step-by-step", icon: "📘", position: "top-right" },
            { text: "12 doubts solved", icon: "✅", position: "bottom-left" }
          ]}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Step-by-step solving",
            "Personalised practice",
            "K-12 to college",
            "Streaks & progress"
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </MotionSection>

      {/* MOVIXA FEATURE */}
      <MotionSection className="relative section-wrapper pt-6">
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
            </span>
            Coming Soon
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-amber-200 via-rose-300 to-violet-300 bg-clip-text text-transparent">
              Nova
            </span>
            {" "}— your AI creative director
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Prompt-to-video generation, on-brand image variations, and a creator-grade timeline.
            Movixa AI Studio is the creative cockpit for the AI-first content era.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Join Waitlist
              <span aria-hidden>→</span>
            </Link>
            <Link href="/movixa" className="btn-secondary">
              Preview
            </Link>
          </div>
        </div>
        <AIAssistantHero
          characterImage="/characters/movixa.png"
          characterAlt="Nova, the Movixa AI Studio creative director"
          characterName="Nova"
          characterRole="Movixa AI · Creative Director"
          accent="amber"
          characterSide="right"
          mockup={<MovixaMockup />}
          floatingCards={[
            { text: "Generating · 4K", icon: "🎬", position: "top-left" },
            { text: "Brand-locked", icon: "🎨", position: "bottom-right" }
          ]}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Prompt to video",
            "Brand image variations",
            "AI voiceover & captions",
            "Creator-grade timeline"
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-200">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </MotionSection>

      {/* FEATURES */}
      <MotionSection id="features" className="relative section-wrapper pt-10">
        <GradientOrbs />
        <SectionHeader
          align="center"
          eyebrow="Why NexaEduBiz"
          title="Everything you need to ship AI-first experiences"
          description="Modern building blocks across automation, learning, voice, content, and analytics — designed to feel premium out of the box."
          className="!mx-auto mb-10"
        />
        <FeaturesGrid />
      </MotionSection>

      {/* DEMO VIDEO */}
      <MotionSection id="demo" className="section-wrapper pt-6">
        <SectionHeader
          eyebrow="Live Demo"
          title="Watch ReplyPilot AI handle real conversations"
          description="A 2-minute walkthrough of how AI replies, lead capture, and analytics come together."
          className="mb-8"
        />
        <DemoVideoCard href={REPLYPILOT_APP_URL} />
      </MotionSection>

      {/* HOW IT WORKS */}
      <MotionSection className="section-wrapper pt-6">
        <SectionHeader
          eyebrow="How it works"
          title="From signup to AI in 4 quick steps"
          className="mb-10"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s, i) => (
            <MotionItem key={s.step} delay={i * 0.05} className="glass-card glass-card-hover relative overflow-hidden p-6">
              <p className="font-display text-5xl font-bold text-white/10">{s.step}</p>
              <p className="mt-2 text-sm font-semibold text-cyan-200">Step {i + 1}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.description}</p>
            </MotionItem>
          ))}
        </div>
      </MotionSection>

      {/* TESTIMONIALS */}
      <MotionSection className="section-wrapper pt-10">
        <SectionHeader
          eyebrow="Loved by builders"
          title="What customers are saying"
          description="From founders to students, NexaEduBiz powers daily AI workflows for thousands of users."
          className="mb-10"
        />
        <TestimonialsGrid />
      </MotionSection>

      {/* PRICING */}
      <MotionSection id="pricing" className="section-wrapper pt-10">
        <SectionHeader
          align="center"
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start free. Upgrade when you outgrow it. Switch plans anytime."
          className="!mx-auto mb-10"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>
      </MotionSection>

      {/* COMING SOON */}
      <MotionSection className="section-wrapper pt-10">
        <SectionHeader
          eyebrow="Roadmap"
          title="Coming soon to NexaEduBiz"
          description="More premium AI products launching across business, learning and creativity."
          className="mb-10"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((item, i) => (
            <MotionItem key={item.name} delay={i * 0.05} className="glass-card glass-card-hover relative overflow-hidden p-6">
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/contact" className="btn-secondary !px-3 !py-2 !text-xs">
                  Notify me
                </Link>
                <Link href="/contact" className="btn-primary !px-3 !py-2 !text-xs">
                  Join waitlist
                </Link>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>

      {/* FAQ */}
      <MotionSection className="section-wrapper pt-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="FAQs"
            title="Everything you wanted to ask"
            description="Still have questions? Reach out — real humans respond."
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* CONTACT */}
      <MotionSection id="contact" className="section-wrapper pt-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something premium together"
              description="Sales, support or partnerships — we usually reply within a few hours."
            />
            <div className="mt-6">
              <EmailLinks layout="stack" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="glass-card p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  Sales
                </p>
                <a
                  href={MAILTO_HELLO}
                  className="mt-1 block break-all text-sm font-semibold text-white hover:text-cyan-200"
                >
                  {HELLO_EMAIL}
                </a>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  Support
                </p>
                <a
                  href={MAILTO_SUPPORT}
                  className="mt-1 block break-all text-sm font-semibold text-white hover:text-cyan-200"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 md:p-8">
            <ContactForm className="grid gap-4 md:grid-cols-2" />
          </div>
        </div>
      </MotionSection>

      <CTASection
        title="Ready to scale with NexaEduBiz AI?"
        subtitle="Launch smarter customer support, learning, and creative workflows with one premium AI ecosystem."
        primaryLabel="Start Free"
        primaryHref="/pricing"
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
    </main>
  );
}
