type GradientOrbsProps = {
  variant?: "hero" | "section";
};

export default function GradientOrbs({ variant = "section" }: GradientOrbsProps) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-15%] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[140px] animate-float-slow" />
        <div className="absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/30 blur-[130px] animate-float" />
        <div className="absolute right-[-10%] top-1/4 h-[460px] w-[460px] rounded-full bg-cyan-500/25 blur-[130px] animate-float-slow" />
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10%] top-1/3 h-[360px] w-[360px] rounded-full bg-blue-500/15 blur-[120px]" />
      <div className="absolute right-[-10%] bottom-0 h-[380px] w-[380px] rounded-full bg-violet-500/15 blur-[120px]" />
    </div>
  );
}
