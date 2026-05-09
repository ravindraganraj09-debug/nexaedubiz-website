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
      <div className="glass-card px-6 py-10 text-center md:px-10">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <SmartLink href={primaryHref} className="btn-primary">
            {primaryLabel}
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
    </section>
  );
}
