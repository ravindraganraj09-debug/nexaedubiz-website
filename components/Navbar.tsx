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
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" }
];

const productLinks: NavLink[] = [
  { label: "ReplyPilot AI", href: "/replypilot" },
  { label: "Talkentia AI", href: "/talkentia" },
  { label: "AskBuddy AI", href: "/askbuddy" },
  { label: "Movixa AI Studio", href: "/movixa" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-white"
          onClick={() => setIsOpen(false)}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 text-sm font-black text-white shadow-glass">
            N
          </span>
          NexaEduBiz
        </Link>

        <div className="hidden items-center gap-1 text-sm text-slate-200 md:flex">
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
                    className={`rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white ${
                      isActive(link.href) ? "text-white" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                  {productsOpen ? (
                    <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                      <div className="glass-card p-2">
                        {productLinks.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
                          >
                            {product.label}
                          </Link>
                        ))}
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
                className={`rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white ${
                  isActive(link.href) ? "text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className="btn-secondary">
            Login
          </Link>
          <Link href="/pricing" className="btn-primary">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white md:hidden"
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
                className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
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
                  className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {product.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <Link href="/login" className="btn-secondary w-full">
                Login
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
