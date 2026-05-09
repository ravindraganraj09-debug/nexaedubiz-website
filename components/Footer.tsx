import Link from "next/link";
import EmailLinks from "@/components/EmailLinks";
import SmartLink from "@/components/SmartLink";
import { MAILTO_HELLO, MAILTO_SUPPORT } from "@/lib/site-emails";

const productLinks = [
  { label: "ReplyPilot AI", href: "/replypilot" },
  { label: "Talkentia AI", href: "/talkentia" },
  { label: "AskBuddy AI", href: "/askbuddy" },
  { label: "Movixa AI Studio", href: "/movixa" }
];

const companyLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Sales", href: MAILTO_HELLO },
  { label: "Support", href: MAILTO_SUPPORT }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" }
];

const socials = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M18.244 2H21l-6.522 7.46L22 22h-6.953l-4.467-5.86L5.4 22H2.643l6.97-7.97L2 2h7.058l4.04 5.34L18.244 2Zm-2.43 18h1.83L7.27 4H5.32l10.494 16Z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.5 18V10h-3v8h3ZM7 8.7a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM18.5 18v-4.6c0-2.5-1.3-3.6-3.1-3.6-1.4 0-2 .8-2.4 1.4V10h-3v8h3v-4.5c0-.3 0-.6.1-.8.2-.6.7-1.2 1.6-1.2 1.1 0 1.5.8 1.5 2V18h2.3Z" />
      </svg>
    )
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.7 3.6 12 3.6 12 3.6s-4.7 0-8 .3c-.4 0-1.3 0-2.1 1C1.2 5.6 1 7.2 1 7.2S.8 9 .8 10.9v1.8C.8 14.5 1 16.4 1 16.4s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.3 7.7.3s4.7 0 8-.3c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.7v-1.8c0-1.9-.2-3.7-.2-3.7ZM9.7 14.6V8.3l6.2 3.2-6.2 3.1Z" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path d="M12 .5C5.7.5.7 5.5.7 11.8c0 5 3.2 9.2 7.7 10.7.6.1.8-.2.8-.5v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.1.9-.2 1.9-.4 2.8-.4.9 0 1.9.1 2.8.4 2.1-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.6.8.5 4.5-1.5 7.7-5.7 7.7-10.7C23.3 5.5 18.3.5 12 .5Z" />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-slate-950/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="section-wrapper py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 text-sm font-black text-white shadow-glow-cyan">
                N
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display tracking-tight">NexaEduBiz</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                  Intelligent Tools · Real Results
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Premium AI products for business automation, learning, and creativity. One ecosystem
              that helps you reply faster, learn smarter, and build bolder.
            </p>
            <div className="mt-5">
              <EmailLinks layout="stack" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-cyan-200">Products</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-cyan-200">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {companyLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <SmartLink href={link.href} className="transition hover:text-white">
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-cyan-200">Stay in the loop</p>
            <p className="mt-2 text-xs text-slate-400">
              Get product launches, AI tips and early access perks. No spam.
            </p>
            <form className="mt-3 flex gap-2" action="/contact">
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email"
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
              />
              <button
                type="submit"
                className="btn-primary !px-3 !py-2 !text-xs"
                aria-label="Subscribe"
              >
                Notify
              </button>
            </form>
            <p className="mt-4 text-sm font-semibold text-cyan-200">Legal</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} NexaEduBiz. Crafted for AI-first teams.
          </p>
          <p>Built with Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
