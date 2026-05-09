type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignClass} max-w-3xl ${className ?? ""}`}>
      {eyebrow ? <span className="badge-gradient">{eyebrow}</span> : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
