import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaEduBiz - AI Tools for Business, Learning and Creativity",
  description:
    "Explore NexaEduBiz AI products including ReplyPilot AI, Talkentia AI, AskBuddy AI, Movixa AI Studio and upcoming AI tools for business, education and creators.",
  metadataBase: new URL("https://nexaedubiz.com"),
  openGraph: {
    title: "NexaEduBiz - AI Tools for Business, Learning and Creativity",
    description:
      "Premium AI SaaS platform with products for business automation, student learning, and creator productivity.",
    url: "https://nexaedubiz.com",
    siteName: "NexaEduBiz",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
