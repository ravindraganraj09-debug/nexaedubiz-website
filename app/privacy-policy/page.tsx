import type { Metadata } from "next";
import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

export const metadata: Metadata = {
  title: "Privacy Policy - NexaEduBiz",
  description: "How NexaEduBiz collects, uses, and protects your information."
};

const linkClass =
  "font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-100";

export default function PrivacyPolicyPage() {
  return (
    <main className="section-wrapper">
      <article className="glass-card p-8 md:p-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This policy describes how NexaEduBiz (&quot;we&quot;, &quot;us&quot;) handles information
          when you use our websites and AI products. Replace or extend this draft with counsel
          reviewed text before relying on it as legal advice.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Contact</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          For privacy questions or data requests, email{" "}
          <a href={MAILTO_HELLO} className={linkClass}>
            {HELLO_EMAIL}
          </a>{" "}
          (general and business) or{" "}
          <a href={MAILTO_SUPPORT} className={linkClass}>
            {SUPPORT_EMAIL}
          </a>{" "}
          (product and account support).
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Information we may collect</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Depending on the product, we may collect account details, usage data, and content you
          submit to our services. Our mobile apps follow the data practices described in their
          respective store listings and in-product notices.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">How we use information</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          We use information to provide and improve our services, respond to support requests,
          secure our systems, and communicate about your account or plans.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Retention &amp; security</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          We retain data only as long as needed for the purposes above and apply reasonable
          technical and organizational safeguards. Details should be finalized with your legal
          team.
        </p>

        <p className="mt-8 text-xs text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}.
        </p>
      </article>
    </main>
  );
}
