import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-32 w-full">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-10 bg-gold" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/90">
                Birmingham, Alabama
              </p>
            </div>
          </div>

          <h1 className="animate-fade-in-up delay-100 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-white leading-[1.1] tracking-tight">
            Premier Plumbing &{" "}
            <span className="text-gradient-gold">Home Transformations</span>{" "}
            in Birmingham
          </h1>

          <p className="animate-fade-in-up delay-200 mt-5 font-display text-xl sm:text-2xl italic text-white/50">
            Crafted with Excellence
          </p>

          <div className="animate-fade-in-up delay-300 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {["Excellent Craftsmanship", "Affordable & Reliable", "New Construction, Renovations & Plumbing"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[13px] text-white/60">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {item}
              </span>
            ))}
          </div>

          <div className="animate-fade-in-up delay-400 mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:2058295282"
              className="inline-flex items-center justify-center rounded-full gold-gradient px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_28px_rgba(200,150,78,0.5)] hover:scale-[1.02] tracking-wide gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now (205) 829-5282
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-white/20 tracking-wide gap-2"
            >
              Get a Free Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className="animate-fade-in-up delay-500 mt-12 flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold fill-gold" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-[12px] text-white/50 font-medium">5.0 on Google</span>
            </div>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-[11px] text-white/40 uppercase tracking-widest font-medium">Licensed & Insured</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-[11px] text-white/40 uppercase tracking-widest font-medium">Master Plumber</span>
          </div>
        </div>
      </div>
    </section>
  );
}
