const homeImprovements = [
  {
    title: "Bathroom Remodels",
    description: "Complete bathroom transformations with premium fixtures, tile, and finishes.",
  },
  {
    title: "Kitchen Upgrades",
    description: "Modern kitchen renovations, cabinets, countertops, and layout improvements.",
  },
  {
    title: "Flooring & Tile",
    description: "Expert tile installation, hardwood, LVP, and custom floor designs.",
  },
  {
    title: "Drywall & Interior Finishing",
    description: "Seamless drywall repair, installation, and interior finishing work.",
  },
  {
    title: "Trim & Custom Work",
    description: "Finish carpentry, crown molding, baseboards, and custom built-ins.",
  },
];

const plumbing = [
  {
    title: "General Plumbing Repairs",
    description: "Reliable repairs for leaks, clogs, pipe issues, and general maintenance.",
  },
  {
    title: "Water Heater Installation",
    description: "Professional water heater installation, repair, and replacement services.",
  },
  {
    title: "Fixture Replacement",
    description: "Faucets, sinks, toilets, and shower fixture upgrades and replacements.",
  },
  {
    title: "Drain & Leak Repair",
    description: "Fast diagnosis and repair of drain blockages and water leaks.",
  },
  {
    title: "Emergency Service",
    description: "Urgent plumbing support when you need it most. Call us anytime.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 bg-background grain-overlay overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">What We Do</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1]">
            Craftsmanship You<br />Can Count On
          </h2>
          <p className="mt-5 text-[16px] text-muted leading-relaxed">
            From full-scale remodels to urgent plumbing repairs, we deliver quality results on every project.
          </p>
        </div>

        <div id="services" className="mt-16 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-warm-gray">
              Home Improvements
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homeImprovements.map((service, i) => (
              <div
                key={service.title}
                className="group relative rounded-xl border border-border bg-card-bg p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gold/30 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-300 group-hover:via-gold/40" />
                <span className="text-[11px] font-bold text-gold/40 tracking-wider">0{i + 1}</span>
                <h4 className="mt-3 text-[17px] font-semibold text-foreground tracking-tight">{service.title}</h4>
                <p className="mt-2 text-[14px] text-muted leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-gold opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-[12px] font-semibold tracking-wide">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="plumbing" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-warm-gray">
              Plumbing Services
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plumbing.map((service, i) => (
              <div
                key={service.title}
                className="group relative rounded-xl border border-border bg-card-bg p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gold/30 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-300 group-hover:via-gold/40" />
                <span className="text-[11px] font-bold text-gold/40 tracking-wider">0{i + 1}</span>
                <h4 className="mt-3 text-[17px] font-semibold text-foreground tracking-tight">{service.title}</h4>
                <p className="mt-2 text-[14px] text-muted leading-relaxed">{service.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-gold opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-[12px] font-semibold tracking-wide">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
