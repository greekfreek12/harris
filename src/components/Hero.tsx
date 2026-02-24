import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/50" />

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

        <p className="animate-fade-in-up delay-200 mt-7 text-[15px] sm:text-[17px] text-white/90 font-normal leading-[1.8] max-w-lg mx-auto">
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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.08] backdrop-blur-sm px-7 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.15] hover:border-white/50"
          >
            Get a Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="animate-fade-in-up delay-400 mt-14 flex items-center justify-center gap-5 flex-wrap">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#c8964e] fill-[#c8964e]" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-[11px] text-white font-medium tracking-wide ml-1">5.0 Google</span>
          </div>
          <span className="w-px h-3 bg-white/30" />
          <span className="text-[10px] text-white uppercase tracking-[0.2em] font-medium">Licensed & Insured</span>
          <span className="w-px h-3 bg-white/30" />
          <span className="text-[10px] text-white uppercase tracking-[0.2em] font-medium">Master Plumber</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f6f3] to-transparent" />
    </section>
  );
}
