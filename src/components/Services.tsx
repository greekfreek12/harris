const homeImprovements = [
  {
    title: "Bathroom Remodels",
    description: "Complete bathroom transformations with premium fixtures, tile, and finishes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
        <line x1="10" y1="5" x2="8" y2="7" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="7" y1="19" x2="7" y2="21" />
        <line x1="17" y1="19" x2="17" y2="21" />
      </svg>
    ),
  },
  {
    title: "Kitchen Upgrades",
    description: "Modern kitchen renovations, cabinets, countertops, and layout improvements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
  },
  {
    title: "Flooring & Tile",
    description: "Expert tile installation, hardwood, LVP, and custom floor designs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M2 12h20" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    title: "Drywall & Interior Finishing",
    description: "Seamless drywall repair, installation, and interior finishing work.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 6v12" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Trim & Custom Work",
    description: "Finish carpentry, crown molding, baseboards, and custom built-ins.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const plumbing = [
  {
    title: "General Plumbing Repairs",
    description: "Reliable repairs for leaks, clogs, pipe issues, and general maintenance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Water Heater Installation",
    description: "Professional water heater installation, repair, and replacement services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4-4-4-5.5a4 4 0 1 1 8 0c0 1.5-2 2.83-4 5.5z" />
        <path d="M12 22v-6" />
        <path d="M8 22h8" />
      </svg>
    ),
  },
  {
    title: "Fixture Replacement",
    description: "Faucets, sinks, toilets, and shower fixture upgrades and replacements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M5 8h14" />
        <path d="M5 8v4a7 7 0 0 0 14 0V8" />
        <path d="M9 18v4" />
        <path d="M15 18v4" />
      </svg>
    ),
  },
  {
    title: "Drain & Leak Repair",
    description: "Fast diagnosis and repair of drain blockages and water leaks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "Emergency Service",
    description: "Urgent plumbing support when you need it most. Call us anytime.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            From full-scale remodels to urgent plumbing repairs, we deliver quality results on every project.
          </p>
        </div>

        <div id="services" className="mt-16 scroll-mt-24">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">
            Home Improvements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeImprovements.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card-bg p-6 transition-all hover:shadow-lg hover:border-stone-300 hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="plumbing" className="mt-16 scroll-mt-24">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">
            Plumbing Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {plumbing.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card-bg p-6 transition-all hover:shadow-lg hover:border-stone-300 hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
