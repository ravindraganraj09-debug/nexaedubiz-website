import Link from "next/link";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
  highlight?: boolean;
};

export default function PricingCard({
  plan,
  price,
  features,
  ctaLabel,
  ctaLink,
  highlight = false
}: PricingCardProps) {
  return (
    <article
      className={`glass-card flex h-full flex-col p-6 ${
        highlight ? "border-cyan-300/60 bg-cyan-500/10" : ""
      }`}
    >
      <h3 className="text-lg font-semibold text-white">{plan}</h3>
      <p className="mt-3 text-3xl font-bold text-cyan-200">{price}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={ctaLink} className="btn-primary mt-6 w-full">
        {ctaLabel}
      </Link>
    </article>
  );
}
