import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - NexaEduBiz",
  description: "Sign in to NexaEduBiz — account login is temporarily unavailable."
};

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="section-wrapper flex items-center justify-center py-16 md:py-20">
        <div className="glass-card mx-auto w-full max-w-md p-8 text-center md:p-10">
          <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-100">
            Temporarily unavailable
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white">Sign-in is paused</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            We are running NexaEduBiz as a public marketing site only. Account login and databases
            are turned off for now — no <code className="text-cyan-200">AUTH_SECRET</code>,{" "}
            <code className="text-cyan-200">DATABASE_URL</code>, or Prisma setup is required to
            browse the site.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
