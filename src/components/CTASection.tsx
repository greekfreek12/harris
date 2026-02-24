import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">Get Started</p>
          <div className="h-px w-12 bg-gold" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
          Get a Clear Quote and a Clean Timeline
        </h2>

        <p className="mt-6 text-[17px] text-white/60 leading-relaxed max-w-lg mx-auto">
          No hidden fees, no surprises. Just honest pricing and quality work from a team you can trust.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full gold-gradient px-9 py-4 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_30px_rgba(200,150,78,0.5)] hover:scale-[1.02] tracking-wide gap-2"
          >
            Request Your Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <a
            href="tel:2058295282"
            className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-9 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/20 tracking-wide"
          >
            Call (205) 829-5282
          </a>
        </div>
      </div>
    </section>
  );
}
