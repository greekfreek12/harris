"use client";

import { useComingSoon } from "./ComingSoonAlert";

export default function Hero() {
  const comingSoon = useComingSoon();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: "url('https://www.homeresolutionllc.com/wp-content/uploads/2023/05/iStock-1208210894-1536x1024.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/35" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center py-32">
        <div className="animate-fade-in-up">
          <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-8">
            Birmingham, Alabama
          </p>
        </div>

        <h1 className="animate-fade-in-up delay-100 font-display text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px] text-white leading-[1.05] tracking-[-0.02em]">
          Premier Home<br />
          Transformations
        </h1>

        <p className="animate-fade-in-up delay-200 mt-7 text-[16px] sm:text-[18px] text-white/95 font-medium leading-[1.8] tracking-[0.01em] max-w-lg mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          Residential construction, renovation, and master-level plumbing delivered with craftsmanship and attention to detail.
        </p>

        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:2058295282"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#c8964e] px-7 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_4px_24px_rgba(200,150,78,0.35)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_6px_32px_rgba(200,150,78,0.5)] hover:scale-[1.02]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call (205) 829-5282
          </a>
          <button
            onClick={comingSoon}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.08] backdrop-blur-sm px-7 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.15] hover:border-white/50"
          >
            Get a Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f6f3] to-transparent" />
    </section>
  );
}
