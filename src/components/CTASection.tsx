import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1758448755927-e5c5ae14790c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRyZWFtJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <ScrollReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-5">Get Started</p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
            Ready to Transform Your Home?
          </h2>

          <p className="mt-5 text-[16px] text-white font-medium leading-relaxed max-w-lg mx-auto">
            No hidden fees, no surprises. Just honest pricing and quality work from a team you can trust.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8964e] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_6px_28px_rgba(200,150,78,0.5)] hover:scale-[1.02]"
            >
              Request Your Free Estimate
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="tel:2058295282"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.08] backdrop-blur-sm px-8 py-4 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.15]"
            >
              Call (205) 829-5282
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
