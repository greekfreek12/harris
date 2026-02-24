const reasons = [
  {
    title: "Master Plumber-Led",
    description: "Every project is overseen by a licensed master plumber, ensuring the highest standards of workmanship and code compliance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured in the state of Alabama. Your home is protected from start to finish.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Attention to Detail",
    description: "We treat every home like our own. Clean work sites, precise cuts, and finishes that stand the test of time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
  },
  {
    title: "Local Birmingham Focus",
    description: "We live and work in Birmingham. Our reputation in this community is everything — and we protect it with every job.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    description: "No jargon, no runaround. You get honest timelines, transparent pricing, and direct access to your project lead.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Quality Materials",
    description: "We source premium materials and stand behind every product we install. No shortcuts, ever.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-background grain-overlay overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">Why Harris</p>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1]">
                Why Choose Harris
              </h2>
              <p className="mt-5 text-[16px] text-muted leading-relaxed">
                We don&apos;t just do the job — we do it right. Here&apos;s what sets us apart from every other contractor in Birmingham.
              </p>

              <div className="mt-8 flex items-center gap-4 bg-card-bg border border-border rounded-xl p-5">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-[0_4px_12px_rgba(200,150,78,0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">Ready to get started?</p>
                  <a href="tel:2058295282" className="text-[14px] font-bold text-gold hover:underline">
                    (205) 829-5282
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className="group relative rounded-xl border border-border bg-card-bg p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gold/30 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-300 group-hover:via-gold/40" />
                  <div className="w-11 h-11 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4 transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:border-gold group-hover:shadow-[0_4px_12px_rgba(200,150,78,0.3)]">
                    {reason.icon}
                  </div>
                  <h3 className="text-[17px] font-semibold text-foreground tracking-tight">{reason.title}</h3>
                  <p className="mt-2 text-[14px] text-muted leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
