"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState, Suspense } from "react";
import SmartLink from "@/components/SmartLink";
import { MAILTO_SUPPORT } from "@/lib/site-emails";

function LoginFormFields() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered") === "1";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = (await res.json()) as { message?: string };

      if (!res.ok) {
        setError(data.message ?? "Sign in failed.");
        setLoading(false);
        return;
      }

      router.refresh();
      router.push("/");
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      {registered ? (
        <p className="mb-2 mt-4 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-center text-sm text-emerald-200">
          Account created. Sign in with your email and password.
        </p>
      ) : null}

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
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
            autoComplete="current-password"
            placeholder="********"
            className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring"
          />
        </label>
        <div className="flex items-center justify-between text-xs text-slate-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="remember" className="h-3.5 w-3.5 rounded border-white/20 bg-white/5" />
            Remember me
          </label>
          <SmartLink href={MAILTO_SUPPORT} className="text-cyan-300 hover:text-cyan-200">
            Forgot password?
          </SmartLink>
        </div>
        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </>
  );
}

export default function LoginForm() {
  return (
    <Suspense fallback={<div className="mt-8 h-48 animate-pulse rounded-lg bg-white/5" />}>
      <LoginFormFields />
    </Suspense>
  );
}
