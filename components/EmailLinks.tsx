import { HELLO_EMAIL, MAILTO_HELLO, MAILTO_SUPPORT, SUPPORT_EMAIL } from "@/lib/site-emails";

const linkClass =
  "font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-2 transition hover:text-cyan-100";

type EmailLinksProps = {
  className?: string;
  layout?: "inline" | "stack";
};

export default function EmailLinks({ className = "", layout = "inline" }: EmailLinksProps) {
  if (layout === "stack") {
    return (
      <div className={`space-y-1 text-sm ${className}`}>
        <div>
          <span className="text-slate-500">Business &amp; general: </span>
          <a href={MAILTO_HELLO} className={linkClass}>
            {HELLO_EMAIL}
          </a>
        </div>
        <div>
          <span className="text-slate-500">Customer support: </span>
          <a href={MAILTO_SUPPORT} className={linkClass}>
            {SUPPORT_EMAIL}
          </a>
        </div>
      </div>
    );
  }

  return (
    <p className={`text-sm text-slate-400 ${className}`}>
      <span className="text-slate-500">Business: </span>
      <a href={MAILTO_HELLO} className={linkClass}>
        {HELLO_EMAIL}
      </a>
      <span className="mx-2 text-slate-600" aria-hidden>
        ·
      </span>
      <span className="text-slate-500">Support: </span>
      <a href={MAILTO_SUPPORT} className={linkClass}>
        {SUPPORT_EMAIL}
      </a>
    </p>
  );
}
