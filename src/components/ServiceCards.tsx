import Link from "next/link";

const cards = [
  {
    title: "Plumbing Services",
    description: "Expert plumbing repairs, installations, water heaters, and emergency service — led by a master plumber.",
    href: "/#plumbing",
    features: ["General Repairs", "Water Heaters", "Fixture Replacement", "Emergency Service"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Home Improvements",
    description: "Full-scale remodels, renovations, finish carpentry, tile, and new construction — built to last.",
    href: "/#services",
    features: ["Kitchen Remodels", "Bathroom Renovations", "Flooring & Tile", "Custom Carpentry"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function ServiceCards() {
  return (
    <section className="relative py-20 lg:py-24 bg-background grain-overlay overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative rounded-2xl border border-border bg-card-bg overflow-hidden transition-all duration-500 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] hover:border-gold/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] gold-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:border-gold group-hover:shadow-[0_4px_15px_rgba(200,150,78,0.3)]">
                    {card.icon}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted transition-all duration-300 group-hover:text-gold group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-foreground tracking-tight">{card.title}</h3>
                <p className="mt-3 text-[15px] text-muted leading-relaxed">{card.description}</p>

                <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-3">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      <span className="text-[13px] text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
