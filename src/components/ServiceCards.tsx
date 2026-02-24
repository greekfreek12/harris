import Link from "next/link";

const cards = [
  {
    title: "Plumbing Services",
    description: "Expert repairs, installations, water heaters, and emergency service — led by a master plumber.",
    href: "/#plumbing",
    features: ["General Repairs", "Water Heaters", "Fixture Replacement", "Emergency Service"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Home Improvements",
    description: "Full-scale remodels, renovations, finish carpentry, tile, and new construction — built to last.",
    href: "/#services",
    features: ["Kitchen Remodels", "Bathroom Renovations", "Flooring & Tile", "Custom Carpentry"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ServiceCards() {
  return (
    <section className="relative py-20 lg:py-24 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative rounded-2xl overflow-hidden min-h-[420px] flex flex-col justify-end transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />

              <div className="relative z-10 p-8 sm:p-9">
                <h3 className="font-display text-3xl sm:text-[2rem] text-white tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] text-white/60 leading-relaxed max-w-sm">
                  {card.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {card.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[11px] font-medium text-white/70 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-gold text-[13px] font-semibold tracking-wide opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
