"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-black/90 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
        : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[70px] items-center justify-between">
          <Link href="/" className="shrink-0">
            <span className="text-[17px] font-bold tracking-tight text-white">
              Harris<span className="font-light text-white/60 ml-1">Plumbing & Home Improvements</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/70 transition-colors hover:text-white tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:2058295282"
              className="text-[13px] font-semibold text-white/80 tracking-wide transition-colors hover:text-white"
            >
              (205) 829-5282
            </a>
            <span className="w-px h-4 bg-white/20" />
            <Link
              href="/contact"
              className="rounded-full gold-gradient px-5 py-2 text-[13px] font-semibold text-white tracking-wide shadow-[0_2px_10px_rgba(200,150,78,0.25)] transition-all hover:shadow-[0_4px_16px_rgba(200,150,78,0.4)] hover:scale-[1.02]"
            >
              Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-3.5 flex flex-col justify-between">
              <span className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-[15px] text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10 space-y-2">
            <a
              href="tel:2058295282"
              className="block text-center py-2.5 text-[14px] font-semibold text-white/80"
            >
              (205) 829-5282
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-full gold-gradient px-6 py-2.5 text-[14px] font-semibold text-white"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
