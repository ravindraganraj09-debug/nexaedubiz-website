import CTASection from "@/components/CTASection";
import SmartLink from "@/components/SmartLink";

export type ProductStatus = "Live" | "App Available" | "Coming Soon";

type CTA = { label: string; href: string };

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type UseCase = {
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

type ProductPageLayoutProps = {
  badge: string;
  status: ProductStatus;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  liveAppUrl?: string;
  heroHighlights?: string[];
  stats?: Stat[];
  features: Feature[];
  useCases?: UseCase[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
};

const statusStyles: Record<ProductStatus, string> = {
  Live: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
  "App Available": "bg-blue-500/20 text-blue-200 border-blue-400/40",
  "Coming Soon": "bg-amber-500/20 text-amber-200 border-amber-400/40"
};

export default function ProductPageLayout({
  badge,
  status,
  title,
  description,
  primaryCta,
  secondaryCta,
  liveAppUrl,
  heroHighlights = [],
  stats = [],
  features,
  useCases = [],
  ctaTitle,
  ctaSubtitle,
  ctaPrimary,
  ctaSecondary
}: ProductPageLayoutProps) {
  return (
    <main className="relative overflow-hidden">
      {liveAppUrl ? (
        <div className="border-b border-emerald-400/20 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <p className="text-sm text-slate-200">
                <span className="font-semibold text-white">{badge}</span> live app is ready —
                open it now in a new tab.
              </p>
            </div>
            <SmartLink
              href={liveAppUrl}
              className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20"
            >
              Open Live App
              <span aria-hidden>↗</span>
            </SmartLink>
          </div>
        </div>
      ) : null}

      <section className="section-wrapper pb-10 pt-16 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
                {badge}
              </p>
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
              >
                {status}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">{description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <SmartLink href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </SmartLink>
              {secondaryCta ? (
                <SmartLink href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </SmartLink>
              ) : null}
            </div>
            {heroHighlights.length > 0 ? (
              <ul className="mt-7 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="relative">
            <div className="glass-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  Product Highlights
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">{badge}</h3>
                <div className="mt-5 grid gap-3">
                  {features.slice(0, 3).map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{feature.title}</p>
                        <p className="mt-1 text-xs text-slate-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {stats.length > 0 ? (
        <section className="section-wrapper pt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center">
                <p className="text-3xl font-bold text-cyan-200">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-wrapper pt-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>
          <p className="mt-2 text-sm text-slate-300">
            Built for real-world workflows with a premium AI experience.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 via-indigo-500/30 to-cyan-400/30 text-2xl">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {useCases.length > 0 ? (
        <section className="section-wrapper pt-6">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Who It&apos;s For</h2>
            <p className="mt-2 text-sm text-slate-300">
              Designed for the people who need to move faster with AI.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <CTASection
        title={ctaTitle ?? `Ready to get started with ${badge}?`}
        subtitle={
          ctaSubtitle ??
          "Choose a plan that fits your needs or talk to our team to find the right setup."
        }
        primaryLabel={ctaPrimary?.label ?? "View Pricing"}
        primaryHref={ctaPrimary?.href ?? "/pricing"}
        secondaryLabel={ctaSecondary?.label ?? "Contact Sales"}
        secondaryHref={ctaSecondary?.href ?? "/contact"}
      />
    </main>
  );
}
