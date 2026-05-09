import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create account - NexaEduBiz",
  description:
    "Create your NexaEduBiz account to access ReplyPilot AI, Talkentia AI, AskBuddy AI, and the full AI product suite."
};

export default function SignupPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="section-wrapper flex items-center justify-center py-16 md:py-20">
        <div className="glass-card mx-auto w-full max-w-md p-8 md:p-10">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
              Get started
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white">Create your NexaEduBiz account</h1>
            <p className="mt-2 text-sm text-slate-300">
              Sign up once to use our AI products and manage your subscription.
            </p>
          </div>

          <form className="mt-8 space-y-4">
            <label className="block text-sm text-slate-200">
              Full name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring"
              />
            </label>
            <label className="block text-sm text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring"
              />
            </label>
            <label className="block text-sm text-slate-200">
              Password
              <input
                type="password"
                name="password"
                required
                autoComplete="new-password"
                minLength={8}
                placeholder="At least 8 characters"
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring"
              />
            </label>
            <label className="block text-sm text-slate-200">
              Confirm password
              <input
                type="password"
                name="confirmPassword"
                required
                autoComplete="new-password"
                minLength={8}
                placeholder="Repeat password"
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring"
              />
            </label>
            <label className="flex cursor-pointer items-start gap-2 text-xs text-slate-300">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-white/20 bg-white/5"
              />
              <span>
                I agree to the{" "}
                <Link href="/terms-and-conditions" className="text-cyan-300 hover:text-cyan-200">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-cyan-300 hover:text-cyan-200">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            <button type="submit" className="btn-primary w-full">
              Create account
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400">
            <span className="h-px flex-1 bg-white/10" />
            or
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-slate-300">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-cyan-300 hover:text-cyan-200">
              Sign in
            </Link>
          </p>
          <p className="mt-3 text-center text-xs text-slate-400">
            Connect this form to NextAuth, Clerk, Firebase Auth, or your API when you are ready.
          </p>
        </div>
      </section>
    </main>
  );
}
