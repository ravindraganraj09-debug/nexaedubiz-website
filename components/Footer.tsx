import Link from "next/link";

const productLinks = [
  { label: "ReplyPilot AI", href: "/replypilot" },
  { label: "Talkentia AI", href: "/talkentia" },
  { label: "AskBuddy AI", href: "/askbuddy" },
  { label: "Movixa AI Studio", href: "/movixa" }
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Sign up", href: "/signup" },
  { label: "Login", href: "/login" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="section-wrapper py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 text-sm font-black text-white shadow-glass">
                N
              </span>
              NexaEduBiz
            </Link>
            <p className="mt-3 text-sm text-slate-300">
              AI tools for business, education, and creativity. Build smarter workflows with one
              unified platform.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-cyan-200">Products</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cyan-200">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {companyLinks.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cyan-200">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
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

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>Copyright {new Date().getFullYear()} NexaEduBiz. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
