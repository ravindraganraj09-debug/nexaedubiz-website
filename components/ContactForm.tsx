"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  className?: string;
};

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

const inputClassName =
  "mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring";

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
      <label className="text-sm text-slate-200">
        Name
        <input type="text" name="name" required className={inputClassName} />
      </label>
      <label className="text-sm text-slate-200">
        Email
        <input type="email" name="email" required className={inputClassName} />
      </label>
      <label className="text-sm text-slate-200 md:col-span-2">
        Product Interest
        <select
          name="product"
          className="mt-2 w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 transition focus:ring"
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
        <textarea name="message" rows={5} required className={inputClassName} />
      </label>
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
      {submitState.type !== "idle" ? (
        <p
          className={`md:col-span-2 text-sm ${
            submitState.type === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
