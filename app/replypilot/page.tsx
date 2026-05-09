import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";

const REPLYPILOT_APP_URL = "https://ai-auto-reply-tool.vercel.app";

export const metadata: Metadata = {
  title: "ReplyPilot AI - Automated Customer Replies | NexaEduBiz",
  description:
    "ReplyPilot AI is an AI auto-reply tool that helps businesses respond to customer messages instantly, capture leads, and never miss a conversation."
};

export default function ReplyPilotPage() {
  return (
    <ProductPageLayout
      badge="ReplyPilot AI"
      status="Live"
      title="Automate Customer Replies. Capture Every Lead."
      description="ReplyPilot AI helps businesses respond to customer messages instantly across channels, capture leads automatically, and free your support team for what matters most."
      liveAppUrl={REPLYPILOT_APP_URL}
      primaryCta={{ label: "Start Free", href: REPLYPILOT_APP_URL }}
      secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      heroHighlights={[
        "Instant AI auto-replies",
        "Lead capture workflow",
        "Smart response suggestions",
        "Business analytics dashboard"
      ]}
      stats={[
        { value: "80%", label: "Faster response times" },
        { value: "24/7", label: "Always-on AI replies" },
        { value: "10x", label: "Lead capture boost" },
        { value: "5min", label: "Setup time" }
      ]}
      features={[
        {
          icon: "⚡",
          title: "Instant Auto-Replies",
          description:
            "Reply to customer messages in seconds with AI-generated responses tuned to your brand voice."
        },
        {
          icon: "🎯",
          title: "Smart Lead Capture",
          description:
            "Automatically detect buying intent and capture lead info into your pipeline without manual work."
        },
        {
          icon: "💬",
          title: "Multi-Platform Ready",
          description:
            "Works with WhatsApp Business, Instagram DMs, website chat, and email in one place."
        },
        {
          icon: "📊",
          title: "Analytics Dashboard",
          description:
            "Track response times, lead quality, and conversation outcomes with clean business reports."
        },
        {
          icon: "🛡️",
          title: "Brand-Safe Responses",
          description:
            "Train ReplyPilot on your tone, FAQs, and product info to keep replies on-brand and accurate."
        },
        {
          icon: "🔌",
          title: "Easy Integrations",
          description:
            "Connect with your CRM, helpdesk, and existing tools in minutes — no engineering needed."
        }
      ]}
      useCases={[
        {
          title: "Small Business Owners",
          description:
            "Never miss a customer message again. Capture sales leads even when you're offline."
        },
        {
          title: "E-commerce Brands",
          description:
            "Handle order queries, shipping questions, and product info on autopilot, 24/7."
        },
        {
          title: "Service Agencies",
          description:
            "Qualify leads from inbound chats and route hot prospects to your sales team instantly."
        }
      ]}
      ctaTitle="Stop Losing Leads to Slow Replies"
      ctaSubtitle="ReplyPilot AI is live and ready to scale your customer conversations from day one."
      ctaPrimary={{ label: "Try the Live App", href: REPLYPILOT_APP_URL }}
      ctaSecondary={{ label: "Contact Sales", href: "/contact" }}
    />
  );
}
