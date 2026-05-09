import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import AskBuddyMockup from "@/components/mockups/AskBuddyMockup";

export const metadata: Metadata = {
  title: "AskBuddy AI - AI Homework Helper for Students | NexaEduBiz",
  description:
    "AskBuddy AI helps students solve doubts, understand answers step-by-step, and learn faster with a friendly AI study companion."
};

export default function AskBuddyPage() {
  return (
    <ProductPageLayout
      badge="AskBuddy AI"
      status="App Available"
      title="Your AI Study Buddy. Anytime, Anywhere."
      description="AskBuddy AI helps students solve doubts, understand answers clearly, and learn faster with step-by-step AI guidance designed for school and college learners."
      primaryCta={{ label: "Download App", href: "/contact" }}
      secondaryCta={{ label: "View Plans", href: "/pricing" }}
      heroHighlights={[
        "Homework doubt solving",
        "Step-by-step explanations",
        "Subject-wise support",
        "Student-friendly AI experience"
      ]}
      stats={[
        { value: "10+", label: "Subjects covered" },
        { value: "24/7", label: "Doubt solving" },
        { value: "Step", label: "By step explanations" },
        { value: "Free", label: "Plan available" }
      ]}
      features={[
        {
          icon: "📚",
          title: "Multi-Subject Help",
          description:
            "Math, science, English, social studies, and more — one AI tutor for all your homework."
        },
        {
          icon: "🪜",
          title: "Step-by-Step Solutions",
          description:
            "Don't just get the answer — understand each step so you can solve similar problems on your own."
        },
        {
          icon: "📷",
          title: "Snap to Solve",
          description:
            "Click a photo of your question and let AskBuddy AI break it down for you instantly."
        },
        {
          icon: "🧠",
          title: "Concept Explanations",
          description:
            "Stuck on a concept? Get clear, beginner-friendly explanations in simple language."
        },
        {
          icon: "📝",
          title: "Practice & Quizzes",
          description:
            "Test your understanding with auto-generated practice questions on any chapter."
        },
        {
          icon: "🎓",
          title: "Exam Prep Mode",
          description:
            "Revise smarter with summaries, formula sheets, and key points before exams."
        }
      ]}
      useCases={[
        {
          title: "School Students",
          description:
            "Get instant homework help and understand classroom concepts at your own pace."
        },
        {
          title: "College Students",
          description:
            "Tackle complex problems and revise difficult topics with a 24/7 study companion."
        },
        {
          title: "Parents",
          description:
            "Help your child learn independently with a safe, AI-powered learning assistant."
        }
      ]}
      ctaTitle="Learn Smarter with AskBuddy AI"
      ctaSubtitle="Available now as a mobile app. Start free and upgrade when you need more."
      ctaPrimary={{ label: "View Plans", href: "/pricing" }}
      ctaSecondary={{ label: "Get the App", href: "/contact" }}
      mockup={<AskBuddyMockup />}
    />
  );
}
