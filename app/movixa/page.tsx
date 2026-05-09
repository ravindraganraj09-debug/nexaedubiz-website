import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import MovixaMockup from "@/components/mockups/MovixaMockup";

export const metadata: Metadata = {
  title: "Movixa AI Studio - AI Video, Image & Content Generation | NexaEduBiz",
  description:
    "Movixa AI Studio is an upcoming AI creative suite for generating videos, images, and brand-ready content for creators and growth teams. Join the waitlist for early access."
};

export default function MovixaPage() {
  return (
    <ProductPageLayout
      badge="Movixa AI Studio"
      status="Coming Soon"
      title="The AI Creative Studio for Modern Creators"
      description="Movixa AI Studio is our upcoming creative suite for generating videos, images, and AI-powered content. Built for creators, marketers, and growth teams. Join the waitlist for early access."
      primaryCta={{ label: "Join Waitlist", href: "/contact" }}
      secondaryCta={{ label: "Explore Pricing", href: "/pricing" }}
      heroHighlights={[
        "AI video and image generation",
        "Content ideation workflows",
        "Brand-ready media pipeline",
        "Coming soon — early access opening"
      ]}
      stats={[
        { value: "Soon", label: "Public launch" },
        { value: "Early", label: "Access program" },
        { value: "AI+", label: "Multi-modal output" },
        { value: "Free", label: "Trial planned" }
      ]}
      features={[
        {
          icon: "🎬",
          title: "AI Video Generation",
          description:
            "Turn ideas, scripts, or rough concepts into ready-to-post short videos with AI."
        },
        {
          icon: "🖼️",
          title: "AI Image Generation",
          description:
            "Create on-brand images, ad creatives, and social posts in seconds, not hours."
        },
        {
          icon: "✍️",
          title: "Content Ideation",
          description:
            "Brainstorm hooks, captions, and content calendars tailored to your niche and audience."
        },
        {
          icon: "🎨",
          title: "Brand Kit Support",
          description:
            "Lock in your fonts, colors, and tone so every output stays consistently on-brand."
        },
        {
          icon: "⚙️",
          title: "Workflow Automations",
          description:
            "Chain prompts, templates, and assets into reusable creative pipelines."
        },
        {
          icon: "🚀",
          title: "Multi-Platform Export",
          description:
            "One-click export sized for Instagram, YouTube Shorts, LinkedIn, and more."
        }
      ]}
      useCases={[
        {
          title: "Content Creators",
          description:
            "Ship more reels, shorts, and posts without burning out on production work."
        },
        {
          title: "Marketing Teams",
          description:
            "Generate campaign creatives at scale while keeping your brand voice intact."
        },
        {
          title: "Small Brands",
          description:
            "Look like a top-tier brand without hiring a full design and video team."
        }
      ]}
      ctaTitle="Be First in Line for Movixa AI Studio"
      ctaSubtitle="We're rolling out early access soon. Join the waitlist and we'll notify you when it goes live."
      ctaPrimary={{ label: "Join Waitlist", href: "/contact" }}
      ctaSecondary={{ label: "View Other Products", href: "/#products" }}
      mockup={<MovixaMockup />}
    />
  );
}
