import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space"
});

export const viewport: Viewport = {
  themeColor: "#05060F",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: {
    default: "NexaEduBiz — AI Tools for Business, Learning & Creativity",
    template: "%s · NexaEduBiz"
  },
  description:
    "NexaEduBiz is a premium AI SaaS platform building ReplyPilot AI, Talkentia AI, AskBuddy AI and Movixa AI Studio — modern AI products for business automation, student learning and creator productivity.",
  keywords: [
    "AI SaaS",
    "ReplyPilot AI",
    "Talkentia AI",
    "AskBuddy AI",
    "Movixa AI Studio",
    "AI auto reply",
    "AI English speaking",
    "AI homework helper",
    "AI video studio",
    "NexaEduBiz"
  ],
  metadataBase: new URL("https://nexaedubiz.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "NexaEduBiz — AI Tools for Business, Learning & Creativity",
    description:
      "Premium AI SaaS platform with products for business automation, student learning and creator productivity.",
    url: "https://nexaedubiz.com",
    siteName: "NexaEduBiz",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaEduBiz — AI Tools for Business, Learning & Creativity",
    description:
      "Premium AI SaaS platform with products for business automation, student learning and creator productivity."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-32 top-[-10%] h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute right-[-10%] top-[20%] h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[30%] h-[440px] w-[440px] rounded-full bg-cyan-500/15 blur-[140px]" />
        </div>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
