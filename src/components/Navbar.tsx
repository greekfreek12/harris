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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-[#111111]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)]" 
        : "bg-[#111111]"
    }`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="h-9 w-9 rounded-md gold-gradient flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm tracking-tight">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Harris Plumbing
              </span>
              <span className="text-[15px] text-neutral-400 font-light ml-1.5">
                & Home Improvements
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium text-neutral-400 transition-colors hover:text-white tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:2058295282"
              className="flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-[13px] font-semibold text-white tracking-wide transition-all hover:border-gold hover:text-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              205-829-5282
            </a>
            <Link
              href="/contact"
              className="rounded-full gold-gradient px-6 py-2.5 text-[13px] font-semibold text-white tracking-wide shadow-[0_2px_12px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_4px_20px_rgba(200,150,78,0.45)] hover:scale-[1.02]"
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-neutral-800 bg-[#111111] px-5 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-[14px] font-medium text-neutral-400 transition-colors hover:text-white rounded-lg hover:bg-white/5 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3 border-t border-neutral-800 mt-3">
            <a
              href="tel:2058295282"
              className="flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-5 py-3 text-[14px] font-semibold text-white transition-all hover:border-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              205-829-5282
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center rounded-full gold-gradient px-6 py-3 text-[14px] font-semibold text-white"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
