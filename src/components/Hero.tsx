import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#111111] grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,150,78,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(200,150,78,0.05)_0%,transparent_50%)]" />

      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full border border-neutral-800/30 opacity-20" />
      <div className="absolute top-1/3 right-[15%] w-[300px] h-[300px] rounded-full border border-neutral-800/20 opacity-15" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-32 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gold" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">
                  Birmingham, Alabama
                </p>
              </div>
            </div>

            <h1 className="animate-fade-in-up delay-100">
              <span className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] text-white leading-[1.08] tracking-tight">
                Premier Plumbing &
              </span>
              <span className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.08] tracking-tight mt-1">
                <span className="text-gradient-gold">Home Transformations</span>
              </span>
              <span className="block font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] text-white leading-[1.08] tracking-tight mt-1">
                in Birmingham
              </span>
            </h1>

            <div className="animate-fade-in-up delay-200 mt-6 font-display text-xl sm:text-2xl italic text-neutral-400">
              Crafted with Excellence
            </div>

            <div className="animate-fade-in-up delay-300 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="flex items-center gap-2 text-[13px] text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Excellent Craftsmanship
              </span>
              <span className="flex items-center gap-2 text-[13px] text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Affordable & Reliable
              </span>
              <span className="flex items-center gap-2 text-[13px] text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                New Construction, Renovations & Plumbing
              </span>
            </div>

            <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2058295282"
                className="inline-flex items-center justify-center rounded-full gold-gradient px-8 py-4 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_30px_rgba(200,150,78,0.45)] hover:scale-[1.02] tracking-wide gap-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now (205) 829-5282
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-4 text-[14px] font-semibold text-white transition-all hover:border-gold hover:text-gold tracking-wide gap-2"
              >
                Get a Free Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="animate-fade-in-up delay-500 mt-14 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold fill-gold" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] text-neutral-400 font-medium">5.0 on Google</span>
              </div>
              <div className="h-4 w-px bg-neutral-800" />
              <span className="text-[12px] text-neutral-500 uppercase tracking-wider font-medium">Licensed & Insured</span>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in delay-300">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden shadow-2xl border border-neutral-800/50">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,150,78,0.06)_0%,transparent_70%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                  <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <p className="text-[13px] text-neutral-600 font-medium">Luxury Kitchen or Bathroom Image</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-gold/5 border border-gold/10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-gold/5 border border-gold/10" />

              <div className="absolute bottom-8 -left-4 bg-[#1a1a1a] border border-neutral-800 rounded-xl px-5 py-4 shadow-2xl animate-fade-in-up delay-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">Master Plumber Led</p>
                    <p className="text-[11px] text-neutral-500">Expert Craftsmanship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
