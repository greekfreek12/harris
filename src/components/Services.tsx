import Link from "next/link";

const homeImprovements = [
  {
    title: "Kitchen Remodels",
    desc: "Complete kitchen transformations — cabinets, countertops, islands, and custom finishes.",
    image: "/images/svc-kitchen.jpg",
  },
  {
    title: "Bathroom Renovations",
    desc: "Tile showers, vanities, fixtures, and full bathroom remodels designed to last.",
    image: "/images/svc-bathroom.jpg",
  },
  {
    title: "Flooring & Tile",
    desc: "Hardwood, tile, LVP, and custom flooring installation with precision craftsmanship.",
    image: "/images/svc-flooring.jpg",
  },
];

const plumbingServices = [
  {
    title: "General Plumbing",
    desc: "Expert diagnostics and repair for leaks, drains, fixtures, and pipe work.",
    image: "/images/svc-plumbing.jpg",
  },
  {
    title: "Water Heaters",
    desc: "Installation, replacement, and repair of tankless and traditional water heaters.",
    image: "/images/svc-waterheater.jpg",
  },
  {
    title: "Emergency Service",
    desc: "Fast response for burst pipes, flooding, and urgent plumbing situations.",
    image: "/images/svc-emergency.jpg",
  },
];

function ServiceCard({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-[#e8e3dc] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#c8964e]/30">
      <div className="relative h-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-[20px] text-[#1a1a1a] tracking-tight">{title}</h3>
        <p className="mt-2 text-[13px] text-[#8a817a] leading-relaxed">{desc}</p>
        <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#c8964e] group-hover:gap-2.5 transition-all duration-200">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28 bg-[#f8f6f3] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Home Improvements
          </h2>
          <p className="mt-4 text-[15px] text-[#8a817a] max-w-md mx-auto leading-relaxed">
            Full-scale renovations, finish carpentry, and custom builds — designed for your space, built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeImprovements.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div id="plumbing" className="scroll-mt-24 text-center mt-24 mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">Expert Care</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Plumbing Services
          </h2>
          <p className="mt-4 text-[15px] text-[#8a817a] max-w-md mx-auto leading-relaxed">
            Master plumber-led repairs, installations, and emergency service across Birmingham.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plumbingServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#c8964e] px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_2px_12px_rgba(200,150,78,0.25)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_4px_20px_rgba(200,150,78,0.4)] hover:scale-[1.02]"
          >
            Request a Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
