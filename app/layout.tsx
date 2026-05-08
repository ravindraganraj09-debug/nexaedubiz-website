import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaEduBiz - AI Tools for Business, Learning and Creativity",
  description:
    "Explore NexaEduBiz AI products including ReplyPilot AI, Talkentia AI, AskBuddy AI, Movixa AI Studio and upcoming AI tools for business, education and creators."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
