import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

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
              Sign up once to use our AI products and manage your subscription. After sign up you
              will be signed in and taken to the homepage.
            </p>
          </div>

          <SignupForm />

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
            Set <code className="text-slate-300">AUTH_SECRET</code> (32+ random characters) on your
            server for production. User data is stored locally in <code className="text-slate-300">data/users.json</code>{" "}
            (self-hosted) or <code className="text-slate-300">/tmp</code> on Vercel — use a database
            for production scale.
          </p>
        </div>
      </section>
    </main>
  );
}
