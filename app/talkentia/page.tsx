import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Talkentia AI - Speak English with an AI Tutor | NexaEduBiz",
  description:
    "Talkentia AI is a voice-first English speaking app with AI tutor conversations, grammar correction, and topic-based practice for confident English fluency."
};

export default function TalkentiaPage() {
  return (
    <ProductPageLayout
      badge="Talkentia AI"
      status="App Available"
      title="Speak English Confidently with Your AI Tutor"
      description="Talkentia AI is a voice-first learning app for daily speaking practice, real-time grammar correction, and topic-based conversations with a patient AI tutor that fits in your pocket."
      primaryCta={{ label: "Download App", href: "/contact" }}
      secondaryCta={{ label: "View Plans", href: "/pricing" }}
      heroHighlights={[
        "Voice conversation practice",
        "Real-time grammar correction",
        "Topic-based speaking sessions",
        "Personalized AI tutor feedback"
      ]}
      stats={[
        { value: "1M+", label: "Practice minutes targeted" },
        { value: "50+", label: "Conversation topics" },
        { value: "24/7", label: "AI tutor availability" },
        { value: "Hindi+", label: "Bilingual learner support" }
      ]}
      features={[
        {
          icon: "🎙️",
          title: "Voice-First Practice",
          description:
            "Tap to talk and get instant AI replies. Practice real conversations without judgment."
        },
        {
          icon: "✏️",
          title: "Grammar Correction",
          description:
            "Spot mistakes in real time with clear, simple explanations of better alternatives."
        },
        {
          icon: "🎯",
          title: "Topic-Based Sessions",
          description:
            "Job interviews, travel, meetings, daily life — pick a topic and start speaking."
        },
        {
          icon: "📈",
          title: "Progress Tracking",
          description:
            "See your fluency, vocabulary, and confidence grow over time with weekly reports."
        },
        {
          icon: "🌐",
          title: "Bilingual Support",
          description:
            "Switch between English and your native language whenever you need extra clarity."
        },
        {
          icon: "🏆",
          title: "Daily Challenges",
          description:
            "Build a habit with bite-sized speaking challenges and streaks that keep you going."
        }
      ]}
      useCases={[
        {
          title: "Students",
          description:
            "Prepare for IELTS, school presentations, and college interviews with daily practice."
        },
        {
          title: "Working Professionals",
          description:
            "Sharpen your business English for meetings, calls, and client conversations."
        },
        {
          title: "Job Seekers",
          description:
            "Practice common interview questions and rehearse your answers until you sound confident."
        }
      ]}
      ctaTitle="Start Speaking English with Confidence"
      ctaSubtitle="Talkentia AI is available as a mobile-first app. Pick a plan or download today."
      ctaPrimary={{ label: "View Plans", href: "/pricing" }}
      ctaSecondary={{ label: "Get the App", href: "/contact" }}
    />
  );
}
