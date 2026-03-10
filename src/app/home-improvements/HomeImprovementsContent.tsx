"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";

const services = [
  {
    title: "Full Home Renovations",
    desc: "Complete interior overhauls from the studs out. We manage every phase — demo, framing, electrical coordination, drywall, finish work, and final detail — so you get a cohesive result with one accountable team. No piecemeal subcontracting, no dropped balls.",
    image: "/images/full-home-renovations-wave-1.jpg",
  },
  {
    title: "New Construction",
    desc: "Building from the ground up. We work alongside developers and homeowners to deliver quality framing, interior buildout, and finish work on new residential builds. Our crews are reliable, code-compliant, and built for the long haul of a new construction schedule.",
    image: "/images/new-construction-wave-2.jpg",
  },
  {
    title: "Kitchen Remodels",
    desc: "Kitchens are the most used — and most scrutinized — room in the house. We handle full kitchen transformations: custom cabinetry installation, countertop work, tile backsplashes, flooring, lighting, and all the finish details that separate a good remodel from a great one.",
    image: "/images/svc-kitchen.jpg",
  },
  {
    title: "Bathroom Remodels",
    desc: "From primary bath overhauls to hall bath refreshes, we do high-quality bathroom renovations built to last. Tile showers, custom vanities, soaking tubs, heated floors — we bring the vision and the craftsmanship to execute it without shortcuts.",
    image: "/images/bathroom-remodels-wave-1.png",
  },
  {
    title: "Room Additions & Custom Upgrades",
    desc: "Need more space? We design and build room additions that integrate seamlessly with your existing home — matching materials, rooflines, and finishes so the addition feels original. We also handle custom interior upgrades: built-ins, accent walls, flooring installations, and more.",
    image: "/images/svc-flooring.jpg",
  },
];

export default function HomeImprovementsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/full-home-renovations-wave-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#c8964e]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e]">
              Birmingham, Alabama
            </p>
            <span className="h-px w-8 bg-[#c8964e]" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
            Home Improvements
          </h1>
          <p className="mt-5 text-[16px] sm:text-[18px] text-white font-medium leading-[1.7] max-w-2xl mx-auto">
            High-end renovations, new construction, and custom remodels — delivered with real craftsmanship by a team that takes pride in the finished product.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:2058295282"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#c8964e] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_24px_rgba(200,150,78,0.35)] transition-all duration-200 hover:bg-[#b07d3a] hover:scale-[1.02]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (205) 829-5282
            </a>
            <Link
              href="#home-improvements-form"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.08] backdrop-blur-sm px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.15] hover:border-white/50"
            >
              Get a Free Estimate
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-28 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.title}
              delay={0}
              direction="up"
              scale={false}
            >
              <div
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-16 items-center ${i > 0 ? "mt-20 md:mt-28 pt-20 md:pt-28 border-t border-[#e8e3dc]" : ""}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                    <div
                      className="aspect-[4/3] bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="mb-4 h-px w-12 bg-gradient-to-r from-[#c8964e] to-transparent" />
                  <h2 className="font-display text-[28px] sm:text-[34px] text-[#1a1a1a] tracking-tight leading-[1.15]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[15px] sm:text-[16px] text-[#5e5852] leading-[1.85]">
                    {service.desc}
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="#home-improvements-form"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8964e] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_6px_28px_rgba(200,150,78,0.45)] hover:scale-[1.02]"
                    >
                      Free Estimate
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                    <a
                      href="tel:2058295282"
                      className="inline-flex items-center justify-center rounded-full border border-[#d7d1ca] bg-white px-6 py-3 text-[13px] font-semibold text-[#3a3530] transition-all duration-200 hover:border-[#c8964e] hover:text-[#1a1a1a]"
                    >
                      Call (205) 829-5282
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ServiceLeadForm id="home-improvements-form" variant="home-improvement" />
      <Testimonials />
      <ServiceArea />

      {/* CTA */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
            Ready to Start Your Project?
          </h2>
          <p className="mt-5 text-[16px] text-white font-medium leading-relaxed max-w-xl mx-auto">
            Tell us what you&rsquo;re working on. We&rsquo;ll come out, take a look, and give you a clear, honest estimate — no pressure, no runaround.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#home-improvements-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8964e] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_4px_24px_rgba(200,150,78,0.35)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_6px_32px_rgba(200,150,78,0.5)] hover:scale-[1.02]"
            >
              Request a Free Estimate
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:2058295282"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/40"
            >
              Call (205) 829-5282
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
