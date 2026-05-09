import Link from "next/link";
import type { ReactNode } from "react";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQItem from "@/components/FAQItem";
import PricingCard from "@/components/PricingCard";
import ProductCard, { ProductButton } from "@/components/ProductCard";
import SmartLink from "@/components/SmartLink";
import EmailLinks from "@/components/EmailLinks";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

const REPLYPILOT_APP_URL = "https://ai-auto-reply-tool.vercel.app";
const TALKENTIA_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rganraj.aispeakeasy&pcampaignid=web_share";

const products: {
  icon: string;
  name: string;
  description: string;
  benefits: string[];
  status: "Live" | "App Available" | "Coming Soon";
  buttons: ProductButton[];
}[] = [
  {
    icon: "🚀",
    name: "ReplyPilot AI",
    description:
      "AI auto-reply tool for businesses to answer customer messages, capture leads, and never miss a conversation.",
    benefits: [
      "Instant replies to customer chats",
      "Lead capture workflow",
      "Saves support team time"
    ],
    status: "Live",
    buttons: [
      { label: "Try ReplyPilot", href: REPLYPILOT_APP_URL },
      { label: "Buy Plan", href: "/pricing", variant: "secondary" },
      { label: "Learn More", href: "/replypilot", variant: "secondary" }
    ]
  },
  {
    icon: "🗣️",
    name: "Talkentia AI",
    description:
      "AI English speaking app with voice practice, grammar correction, topic conversations, and tutor support.",
    benefits: ["Voice-based speaking practice", "Grammar correction", "Topic tutor sessions"],
    status: "App Available",
    buttons: [
      { label: "Download App", href: TALKENTIA_PLAY_STORE_URL },
      { label: "View Plans", href: "/pricing", variant: "secondary" },
      { label: "Learn More", href: "/talkentia", variant: "secondary" }
    ]
  },
  {
    icon: "📘",
    name: "AskBuddy AI",
    description:
      "AI homework helper for students to solve doubts, understand answers, and learn faster with smart guidance.",
    benefits: ["Homework question solving", "Step-by-step understanding", "Faster learning support"],
    status: "App Available",
    buttons: [
      { label: "Download App", href: "/askbuddy" },
      { label: "View Plans", href: "/pricing", variant: "secondary" },
      { label: "Learn More", href: "/askbuddy", variant: "secondary" }
    ]
  },
  {
    icon: "🎬",
    name: "Movixa AI Studio",
    description:
      "AI creative studio for video, image, and content generation for creators and growth-focused teams.",
    benefits: ["AI image generation", "Video and content ideation", "Brand-ready media pipeline"],
    status: "Coming Soon",
    buttons: [
      { label: "Coming Soon", href: "/movixa" },
      { label: "Join Waitlist", href: "/contact", variant: "secondary" },
      { label: "Learn More", href: "/movixa", variant: "secondary" }
    ]
  }
];

const upcoming = [
  "AI Website Builder",
  "AI Voice Assistant",
  "AI Business Chatbot",
  "AI Marketing Assistant"
];

const pricing = [
  {
    plan: "Free Plan",
    price: "₹0/month",
    features: ["Basic access", "Limited AI usage", "Community support"],
    ctaLabel: "Start Free",
    ctaLink: "/pricing"
  },
  {
    plan: "Pro Plan",
    price: "₹299/month",
    features: ["More AI usage", "Premium features", "Priority support"],
    ctaLabel: "Choose Pro",
    ctaLink: "/pricing",
    highlight: true
  },
  {
    plan: "Business Plan",
    price: "₹999/month",
    features: ["Business tools", "Team access", "Advanced AI features"],
    ctaLabel: "Contact for Business",
    ctaLink: "/contact"
  }
];

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "What is NexaEduBiz?",
    answer:
      "NexaEduBiz is an AI SaaS company building products for business messaging automation, student learning, and creator productivity."
  },
  {
    question: "Can I use these AI tools for my business?",
    answer:
      "Yes. ReplyPilot AI and upcoming business tools are designed for customer communication, lead handling, and team workflows."
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes, we offer a free plan with basic access and limited AI usage so you can explore products before upgrading."
  },
  {
    question: "How do I buy a plan?",
    answer:
      "Use the pricing section and click the relevant plan button. Payment gateway integration can be connected directly to those CTA links."
  },
  {
    question: "Do you support mobile apps?",
    answer:
      "Yes. Talkentia AI and AskBuddy AI are available as mobile-first apps with ongoing web expansion."
  },
  {
    question: "Can I contact support?",
    answer: (
      <>
        Yes. Use the contact form on this page, email{" "}
        <a
          href={MAILTO_SUPPORT}
          className="font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-100"
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        for product and account help, or{" "}
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

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section id="home" className="section-wrapper pb-10 pt-20 md:pt-24">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
              Premium AI SaaS Platform
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              AI Products for Business, Learning, and Creativity
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              NexaEduBiz builds smart AI tools that help businesses reply faster, students learn
              better, and creators work smarter.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/pricing" className="btn-secondary">
                Start Free
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {products.map((product) => (
              <div key={`hero-${product.name}`} className="glass-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
                  {product.status}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{product.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section-wrapper pt-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Our AI Products</h2>
            <p className="mt-2 text-sm text-slate-300">
              Explore live products and upcoming solutions by NexaEduBiz.
            </p>
          </div>
          <Link href="/pricing" className="btn-secondary">
            View Pricing
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section id="about" className="section-wrapper pt-6">
        <div className="glass-card grid gap-8 p-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Featured Product
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Automate Customer Replies with ReplyPilot AI
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              ReplyPilot AI is built for modern businesses that want faster customer response times
              and smarter lead handling with minimal manual effort.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <SmartLink href={REPLYPILOT_APP_URL} className="btn-primary">
                Start Free
              </SmartLink>
              <Link href="/replypilot" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {[
              "AI auto replies",
              "Lead capture",
              "Smart reply suggestions",
              "Customer support automation",
              "Business dashboard",
              "Multi-platform ready"
            ].map((item) => (
              <li key={item} className="glass-card p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">How It Works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Choose an AI product",
            "Create your account",
            "Start using AI tools",
            "Upgrade when you need more power"
          ].map((step, index) => (
            <div key={step} className="glass-card p-5">
              <p className="text-sm font-semibold text-cyan-200">Step {index + 1}</p>
              <p className="mt-2 text-sm text-slate-200">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">Pricing Plans</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Flexible plans for startups, learners, and business teams. Integrate payment gateways
          later by replacing CTA links.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>
      </section>

      <section className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">App Download</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              name: "Talkentia AI",
              playHref: TALKENTIA_PLAY_STORE_URL,
              webHref: "/talkentia",
              description: "Practice speaking English with your AI tutor anywhere."
            },
            {
              name: "AskBuddy AI",
              playHref: "/askbuddy",
              webHref: "/askbuddy",
              description: "Get instant homework help and learning support on mobile."
            }
          ].map((app) => (
            <div key={app.name} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white">{app.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{app.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SmartLink href={app.playHref} className="btn-primary">
                  Download on Play Store
                </SmartLink>
                <Link href={app.webHref} className="btn-secondary">
                  Coming Soon on Web
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">Demo Video</h2>
        <div className="glass-card mt-6 flex min-h-64 items-center justify-center p-8 text-center">
          <p className="text-base text-slate-200">Watch how NexaEduBiz AI tools work</p>
        </div>
      </section>

      <section className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">What Customers Say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Rohit Sharma",
              role: "Small Business Owner",
              quote:
                "ReplyPilot AI reduced our response time by 80%. We now capture leads we used to miss."
            },
            {
              name: "Ayesha Khan",
              role: "Student",
              quote:
                "AskBuddy AI helps me understand homework concepts quickly. It feels like studying with a smart mentor."
            },
            {
              name: "Neeraj Verma",
              role: "Content Creator",
              quote:
                "Movixa AI Studio speeds up my content workflow and gives me fresh creative ideas every day."
            }
          ].map((item) => (
            <article key={item.name} className="glass-card p-6">
              <p className="text-sm text-slate-200">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
              <p className="text-xs text-cyan-200">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">Coming Soon Projects</h2>
        <p className="mt-2 text-sm text-slate-300">
          Future tools from NexaEduBiz for business growth and automation.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((item) => (
            <div key={item} className="glass-card p-5">
              <h3 className="text-lg font-semibold text-white">{item}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/contact" className="btn-secondary">
                  Notify Me
                </Link>
                <Link href="/contact" className="btn-primary">
                  Join Waitlist
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">FAQs</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <section id="contact" className="section-wrapper pt-6">
        <h2 className="text-3xl font-bold text-white">Contact Us</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Send a message with the form, or email us directly using the addresses below.
        </p>
        <div className="mt-3">
          <EmailLinks />
        </div>
        <div className="glass-card mt-6 p-6">
          <ContactForm className="grid gap-4 md:grid-cols-2" />
        </div>
      </section>

      <CTASection
        title="Ready to Scale with NexaEduBiz AI?"
        subtitle="Launch smarter workflows for your business, learning goals, and creative output with one AI ecosystem."
        primaryLabel="Start Free"
        primaryHref="/pricing"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />
    </main>
  );
}
