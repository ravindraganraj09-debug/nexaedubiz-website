const logos = [
  "OpenAI",
  "Anthropic",
  "Vercel",
  "Stripe",
  "Notion",
  "Linear",
  "Framer",
  "Supabase",
  "Cloudflare"
];

export default function TrustBar() {
  return (
    <div className="relative">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Built with the modern AI stack
      </p>
      <div className="mt-6 mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="font-display text-lg font-semibold tracking-tight text-slate-500/80 transition hover:text-slate-200"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
