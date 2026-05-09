import type { Metadata } from "next";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

export const metadata: Metadata = {
  title: "Terms & Conditions - NexaEduBiz",
  description: "Terms governing use of NexaEduBiz websites and AI products."
};

const linkClass =
  "font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-100";

export default function TermsAndConditionsPage() {
  return (
    <main className="section-wrapper">
      <article className="glass-card p-8 md:p-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          These terms outline the rules for using NexaEduBiz services. This is a starter template —
          have it reviewed by qualified counsel before publishing as binding legal terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Accounts &amp; eligibility</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          You are responsible for accurate registration information and for safeguarding your
          credentials. You must comply with applicable laws when using our AI tools.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Plans, billing, and changes</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Pricing and features may change with notice as described in your order flow or
          enterprise agreement. Contact{" "}
          <a href={MAILTO_HELLO} className={linkClass}>
            {HELLO_EMAIL}
          </a>{" "}
          for commercial questions.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Support</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          For help with products or your account, email{" "}
          <a href={MAILTO_SUPPORT} className={linkClass}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Limitation of liability</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          To the maximum extent permitted by law, NexaEduBiz is not liable for indirect or
          consequential damages arising from use of the services. Your counsel should tailor this
          section for your jurisdiction.
        </p>

        <p className="mt-8 text-xs text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}.
        </p>
      </article>
    </main>
  );
}
