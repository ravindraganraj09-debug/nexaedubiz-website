import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create account - NexaEduBiz",
  description: "Create a NexaEduBiz account — sign up is temporarily unavailable."
};

export default function SignupPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="section-wrapper flex items-center justify-center py-16 md:py-20">
        <div className="glass-card mx-auto w-full max-w-md p-8 text-center md:p-10">
          <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-100">
            Temporarily unavailable
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white">Sign-up is paused</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            New accounts are not being created while we ship the public site only. Explore products,
            pricing, and contact us — no database or auth configuration needed.
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
