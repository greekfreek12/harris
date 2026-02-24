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
                  Serving Birmingham, Alabama
                </p>
              </div>
            </div>

            <h1 className="animate-fade-in-up delay-100">
              <span className="block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white leading-[1.05] tracking-tight">
                Premium Home
              </span>
              <span className="block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight mt-1">
                <span className="text-gradient-gold">Improvements</span>
                <span className="text-white"> &</span>
              </span>
              <span className="block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white leading-[1.05] tracking-tight mt-1">
                Plumbing
              </span>
            </h1>

            <p className="animate-fade-in-up delay-300 mt-8 text-[17px] leading-[1.7] text-neutral-400 max-w-lg">
              Quality craftsmanship, clear communication, and clean work from start to finish. 
              Remodels, repairs, and everything in between.
            </p>

            <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full gold-gradient px-8 py-4 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_30px_rgba(200,150,78,0.45)] hover:scale-[1.02] tracking-wide"
              >
                Request a Remodel Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-4 text-[14px] font-semibold text-white transition-all hover:border-gold hover:text-gold tracking-wide"
              >
                Book Plumbing Service
              </Link>
            </div>

            <div className="animate-fade-in-up delay-500 mt-14 flex items-center gap-8">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[12px] text-neutral-500 uppercase tracking-wider font-medium">Licensed & Insured</span>
              </div>
              <div className="h-4 w-px bg-neutral-800" />
              <span className="text-[12px] text-neutral-500 uppercase tracking-wider font-medium">Birmingham, AL</span>
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
                  <p className="text-[13px] text-neutral-600 font-medium">Featured Project</p>
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
                    <p className="text-[13px] font-semibold text-white">20+ Years</p>
                    <p className="text-[11px] text-neutral-500">Trusted Experience</p>
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
