import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background grain-overlay overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(200,150,78,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">Get Started</p>
          <div className="h-px w-12 bg-gold" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1]">
          Get a Clear Quote and<br />a Clean Timeline
        </h2>
        
        <p className="mt-6 text-[17px] text-muted leading-relaxed max-w-lg mx-auto">
          No hidden fees, no surprises. Just honest pricing and quality work from a team you can trust.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full gold-gradient px-10 py-4.5 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_30px_rgba(200,150,78,0.45)] hover:scale-[1.02] tracking-wide"
          >
            Request Your Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <a
            href="tel:2058295282"
            className="inline-flex items-center justify-center rounded-full border-2 border-foreground px-10 py-4.5 text-[15px] font-semibold text-foreground transition-all hover:bg-foreground hover:text-white tracking-wide"
          >
            Call 205-829-5282
          </a>
        </div>
      </div>
    </section>
  );
}
