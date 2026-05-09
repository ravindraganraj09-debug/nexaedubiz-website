"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const inputClassName =
  "mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring";

export default function SignupForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");
    const terms = formData.get("terms");

    if (!terms) {
      setError("Please accept the Terms & Conditions and Privacy Policy.");
      setLoading(false);
      return;
    }

    try {
      const signupRes = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword })
      });
      const signupData = (await signupRes.json()) as { message?: string };

      if (!signupRes.ok) {
        setError(signupData.message ?? "Could not create account.");
        setLoading(false);
        return;
      }

      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!loginRes.ok) {
        setLoading(false);
        router.push("/login?registered=1");
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
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      <label className="block text-sm text-slate-200">
        Full name
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClassName}
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
          className={inputClassName}
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
          className={inputClassName}
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
          className={inputClassName}
        />
      </label>
      <label className="flex cursor-pointer items-start gap-2 text-xs text-slate-300">
        <input
          type="checkbox"
          name="terms"
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
      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
