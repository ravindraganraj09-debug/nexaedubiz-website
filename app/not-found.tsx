import Link from "next/link";
import EmailLinks from "@/components/EmailLinks";
import GradientOrbs from "@/components/GradientOrbs";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <section className="relative section-wrapper flex min-h-[70vh] items-center justify-center py-16">
        <GradientOrbs variant="hero" />
        <div className="glass-card gradient-border mx-auto max-w-2xl p-10 text-center md:p-14">
          <p className="font-display text-7xl font-bold leading-none">
            <span className="bg-gradient-to-br from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              404
            </span>
          </p>
          <p className="mt-4 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-100">
            Page not found
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            The page you&apos;re looking for might have moved or never existed. Head back home or
            explore our AI products.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
              <span aria-hidden>→</span>
            </Link>
            <Link href="/#products" className="btn-secondary">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
          <div className="mx-auto mt-8 max-w-md border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Or email us
            </p>
            <div className="mt-3 flex justify-center">
              <EmailLinks className="text-center" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
