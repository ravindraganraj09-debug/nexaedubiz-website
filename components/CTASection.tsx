import EmailLinks from "@/components/EmailLinks";
import SmartLink from "@/components/SmartLink";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="section-wrapper pt-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-12 text-center shadow-card-hover md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.3),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto max-w-3xl">
          <span className="badge-gradient">Ready when you are</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <SmartLink href={primaryHref} className="btn-primary">
              {primaryLabel}
              <span aria-hidden>→</span>
            </SmartLink>
            {secondaryLabel && secondaryHref ? (
              <SmartLink href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
              </SmartLink>
            ) : null}
          </div>
          <div className="mx-auto mt-8 max-w-xl border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Prefer email?
            </p>
            <div className="mt-3 flex justify-center">
              <EmailLinks className="text-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
