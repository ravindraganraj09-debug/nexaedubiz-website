import SmartLink from "@/components/SmartLink";

export type ProductButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type ProductCardProps = {
  icon: string;
  name: string;
  description: string;
  benefits: string[];
  status: "Live" | "App Available" | "Coming Soon";
  buttons: ProductButton[];
};

const statusStyles: Record<ProductCardProps["status"], string> = {
  Live: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
  "App Available": "bg-blue-500/20 text-blue-200 border-blue-400/40",
  "Coming Soon": "bg-amber-500/20 text-amber-200 border-amber-400/40"
};

export default function ProductCard({
  icon,
  name,
  description,
  benefits,
  status,
  buttons
}: ProductCardProps) {
  return (
    <article className="glass-card flex h-full flex-col p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-300">{description}</p>
      <ul className="mb-6 space-y-2 text-sm text-slate-200">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2">
        {buttons.map((button) => (
          <SmartLink
            key={`${name}-${button.label}`}
            href={button.href}
            className={button.variant === "secondary" ? "btn-secondary" : "btn-primary"}
          >
            {button.label}
          </SmartLink>
        ))}
      </div>
    </article>
  );
}
