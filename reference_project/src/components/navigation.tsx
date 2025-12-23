"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-paper/90 border-b border-line/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-ink group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[32px] font-black transform group-hover:-rotate-12 transition-transform duration-300">
            bolt
          </span>
          <span
            className="text-xl tracking-wider text-ink uppercase"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            108 Performance
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/for-athletes"
            className="text-xs font-semibold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
          >
            For Athletes
          </Link>
          <Link
            href="/for-coaches"
            className="text-xs font-semibold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
          >
            For Coaches
          </Link>
          <Link
            href="/the-method"
            className="text-xs font-semibold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
          >
            The Method
          </Link>
          <Link
            href="/shop"
            className="text-xs font-semibold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
          >
            Shop
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/apply"
            className="hidden sm:block bg-navy hover:bg-ink text-offwhite text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-[10px] transition-all duration-300 shadow-soft"
          >
            Apply
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper border-t border-line/20">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link
              href="/for-athletes"
              className="text-sm font-semibold uppercase tracking-widest text-ink/80 hover:text-ink transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Athletes
            </Link>
            <Link
              href="/for-coaches"
              className="text-sm font-semibold uppercase tracking-widest text-ink/80 hover:text-ink transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Coaches
            </Link>
            <Link
              href="/the-method"
              className="text-sm font-semibold uppercase tracking-widest text-ink/80 hover:text-ink transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Method
            </Link>
            <Link
              href="/shop"
              className="text-sm font-semibold uppercase tracking-widest text-ink/80 hover:text-ink transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/apply"
              className="bg-navy hover:bg-ink text-offwhite text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-[10px] transition-all duration-300 text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
