import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - NexaEduBiz",
  description: "Sign in to your NexaEduBiz account to access your AI products and workspace."
};

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden">
      <section className="section-wrapper flex items-center justify-center py-16 md:py-20">
        <div className="glass-card mx-auto w-full max-w-md p-8 md:p-10">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
              Welcome back
            </p>
            <h1 className="mt-4 text-3xl font-bold text-white">Login to NexaEduBiz</h1>
            <p className="mt-2 text-sm text-slate-300">
              Access your AI products and workspace.
            </p>
          </div>

          <form className="mt-8 space-y-4">
            <label className="block text-sm text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
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
                placeholder="********"
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring"
              />
            </label>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/20 bg-white/5" />
                Remember me
              </label>
              <Link href="/contact" className="text-cyan-300 hover:text-cyan-200">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400">
            <span className="h-px flex-1 bg-white/10" />
            or
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-center text-sm text-slate-300">
            New to NexaEduBiz?{" "}
            <Link href="/signup" className="font-semibold text-cyan-300 hover:text-cyan-200">
              Create an account
            </Link>
          </p>
          <p className="mt-3 text-center text-xs text-slate-400">
            Authentication can be wired with NextAuth, Clerk, Firebase, or a custom backend.
          </p>
        </div>
      </section>
    </main>
  );
}
