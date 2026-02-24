"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Home Improvements" },
  { href: "/#plumbing", label: "Plumbing" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-lg shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="shrink-0 group">
            <span className="font-display text-[19px] text-white tracking-tight">
              Harris
            </span>
            <span className="text-[13px] text-white/40 font-light ml-1.5 hidden sm:inline">
              Plumbing & Home Improvements
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] text-white/60 font-medium transition-colors duration-200 hover:text-white rounded-md hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2058295282"
              className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
            >
              (205) 829-5282
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-[#c8964e] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#b07d3a] shadow-[0_2px_8px_rgba(200,150,78,0.25)]"
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className={`absolute h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d0d0d]/98 backdrop-blur-xl border-t border-white/[0.06] px-6 pt-3 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[15px] text-white/60 hover:text-white transition-colors border-b border-white/[0.04] last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-5 space-y-3">
            <a
              href="tel:2058295282"
              className="block text-center py-3 text-[14px] font-semibold text-white/70 border border-white/10 rounded-xl"
            >
              (205) 829-5282
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-3 text-[14px] font-semibold text-white bg-[#c8964e] rounded-xl"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
