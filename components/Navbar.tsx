"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

const productLinks: { label: string; href: string; description: string; icon: string }[] = [
  {
    label: "ReplyPilot AI",
    href: "/replypilot",
    description: "AI auto-reply for customer chats",
    icon: "💬"
  },
  {
    label: "Talkentia AI",
    href: "/talkentia",
    description: "AI English speaking tutor app",
    icon: "🎙️"
  },
  {
    label: "AskBuddy AI",
    href: "/askbuddy",
    description: "AI study & homework helper",
    icon: "📘"
  },
  {
    label: "Movixa AI Studio",
    href: "/movixa",
    description: "AI video & creative studio",
    icon: "🎬"
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-bold text-white"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 text-sm font-black text-white shadow-glow-cyan">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 blur-md opacity-50 transition group-hover:opacity-80" />
            <span className="relative">N</span>
          </span>
          <span className="font-display tracking-tight">NexaEduBiz</span>
        </Link>

        <div className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => {
            if (link.label === "Products") {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 transition hover:bg-white/[0.06] hover:text-white ${
                      isActive(link.href) ? "text-white" : ""
                    }`}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`transition ${productsOpen ? "rotate-180" : ""}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>
                  {productsOpen ? (
                    <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                      <div className="glass-card gradient-border overflow-hidden p-2">
                        <div className="grid gap-1">
                          {productLinks.map((product) => (
                            <Link
                              key={product.href}
                              href={product.href}
                              className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/[0.06]"
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-cyan-400/20 text-lg">
                                {product.icon}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-white">{product.label}</p>
                                <p className="text-xs text-slate-400">{product.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 transition hover:bg-white/[0.06] hover:text-white ${
                  isActive(link.href) ? "text-white" : ""
                }`}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400" />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/contact" className="btn-secondary">
            Talk to us
          </Link>
          <Link href="/pricing" className="btn-primary">
            Get Started
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-white/10 pt-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                Products
              </p>
              {productLinks.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.06] hover:text-white"
                >
                  <span className="text-lg">{product.icon}</span>
                  <span>
                    <span className="block">{product.label}</span>
                    <span className="block text-xs text-slate-400">{product.description}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <Link href="/contact" className="btn-secondary w-full">
                Talk to us
              </Link>
              <Link href="/pricing" className="btn-primary w-full">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
