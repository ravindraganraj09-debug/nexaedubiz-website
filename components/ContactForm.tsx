"use client";

import { FormEvent, useState } from "react";
import EmailLinks from "@/components/EmailLinks";

type ContactFormProps = {
  className?: string;
};

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

const inputClassName =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-300/20";

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: ""
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      product: String(formData.get("product") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Failed to submit your request.");
      }

      form.reset();
      setSubmitState({
        type: "success",
        message: result.message ?? "Your message has been sent successfully."
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setSubmitState({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="md:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Reach us directly
        </p>
        <div className="mt-2">
          <EmailLinks layout="stack" />
        </div>
      </div>
      <label className="text-sm text-slate-200">
        Name
        <input
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className={inputClassName}
        />
      </label>
      <label className="text-sm text-slate-200">
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className={inputClassName}
        />
      </label>
      <label className="text-sm text-slate-200 md:col-span-2">
        Product Interest
        <select
          name="product"
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
        >
          <option>ReplyPilot AI</option>
          <option>Talkentia AI</option>
          <option>AskBuddy AI</option>
          <option>Movixa AI Studio</option>
          <option>Other / Future Products</option>
        </select>
      </label>
      <label className="text-sm text-slate-200 md:col-span-2">
        Message
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us what you're building or what you need…"
          className={inputClassName}
        />
      </label>
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send Message"}
          <span aria-hidden>→</span>
        </button>
      </div>
      {submitState.type !== "idle" ? (
        <p
          className={`md:col-span-2 rounded-xl border px-4 py-2.5 text-sm ${
            submitState.type === "success"
              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
              : "border-rose-400/30 bg-rose-500/10 text-rose-200"
          }`}
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
