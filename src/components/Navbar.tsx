"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/home-improvements", label: "Home Improvements" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const useLightChrome = !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useLightChrome
          ? "bg-[#fcfaf7]/96 backdrop-blur-lg border-b border-[#e6dfd6] shadow-[0_2px_24px_rgba(20,20,20,0.08)]"
          : scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-lg shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <div className="lg:hidden w-8" />

          <Link href="/" className="shrink-0 group absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <span className="flex flex-col items-center lg:items-start leading-none">
              <span className={`font-display text-[19px] tracking-tight ${useLightChrome ? "text-[#1a1a1a]" : "text-white"}`}>
                Harris Plumbing
              </span>
              <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${useLightChrome ? "text-[#8f8477]" : "text-white/70"}`}>
                &amp; Home Improvements
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200 rounded-md ${
                  useLightChrome
                    ? "text-[#5b524a] hover:text-[#1a1a1a] hover:bg-[#efe9df]"
                    : "text-white/80 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2058295282"
              className={`text-[13px] font-semibold transition-colors ${useLightChrome ? "text-[#5b524a] hover:text-[#1a1a1a]" : "text-white/70 hover:text-white"}`}
            >
              (205) 829-5282
            </a>
            <Link
              href="/#quote"
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
            <span className={`absolute h-[1.5px] w-5 transition-all duration-300 ${useLightChrome ? "bg-[#1a1a1a]" : "bg-white"} ${mobileOpen ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-[1.5px] w-5 transition-all duration-300 ${useLightChrome ? "bg-[#1a1a1a]" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`absolute h-[1.5px] w-5 transition-all duration-300 ${useLightChrome ? "bg-[#1a1a1a]" : "bg-white"} ${mobileOpen ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`${useLightChrome ? "bg-[#fcfaf7]/98 border-t border-[#e6dfd6]" : "bg-[#0d0d0d]/98 border-t border-white/[0.06]"} backdrop-blur-xl px-6 pt-3 pb-6`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-[15px] transition-colors last:border-0 ${
                useLightChrome
                  ? "text-[#6a5f54] hover:text-[#1a1a1a] border-b border-[#ebe3da]"
                  : "text-white/60 hover:text-white border-b border-white/[0.04]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-5 space-y-3">
            <a
              href="tel:2058295282"
              className={`block text-center py-3 text-[14px] font-semibold rounded-xl ${
                useLightChrome
                  ? "text-[#5b524a] border border-[#ddd2c6] bg-white"
                  : "text-white/70 border border-white/10"
              }`}
            >
              (205) 829-5282
            </a>
            <Link
              href="/#quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 text-[14px] font-semibold text-white bg-[#c8964e] rounded-xl"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
