import Link from "next/link";
import EmailLinks from "@/components/EmailLinks";

export default function NotFound() {
  return (
    <main className="relative overflow-hidden">
      <section className="section-wrapper flex min-h-[60vh] items-center justify-center py-16">
        <div className="glass-card mx-auto max-w-2xl p-8 text-center md:p-12">
          <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-100">
            404 - Page not found
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            The page you&apos;re looking for might have moved or never existed. Try heading back
            home or explore our AI products.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/#products" className="btn-secondary">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
          <div className="mx-auto mt-8 max-w-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Email us
            </p>
            <div className="mt-2 flex justify-center">
              <EmailLinks className="text-center" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
