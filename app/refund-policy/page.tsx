import type { Metadata } from "next";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

export const metadata: Metadata = {
  title: "Refund Policy - NexaEduBiz",
  description: "Refund and cancellation information for NexaEduBiz plans."
};

const linkClass =
  "font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-100";

export default function RefundPolicyPage() {
  return (
    <main className="section-wrapper">
      <article className="glass-card p-8 md:p-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Refund Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page describes how refunds and cancellations may work for NexaEduBiz paid plans.
          Replace the placeholders below with your final policy, timelines, and jurisdiction
          specific rules.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">How to request a refund</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Email{" "}
          <a href={MAILTO_SUPPORT} className={linkClass}>
            {SUPPORT_EMAIL}
          </a>{" "}
          with your account email, plan name, and reason for the request. We will confirm receipt
          and next steps.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Eligibility &amp; timelines</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Describe here whether refunds are pro-rated, time-limited after purchase, or excluded for
          certain products. Enterprise customers may follow a separate agreement — route those
          questions to{" "}
          <a href={MAILTO_HELLO} className={linkClass}>
            {HELLO_EMAIL}
          </a>
          .
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Chargebacks</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          If you file a chargeback, we may suspend access until the dispute is resolved. Prefer
          contacting support first so we can help quickly.
        </p>

        <p className="mt-8 text-xs text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}.
        </p>
      </article>
    </main>
  );
}
