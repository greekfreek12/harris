"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";

const services = [
  {
    title: "General Plumbing",
    desc: "For everyday plumbing problems and larger repair work alike, Harris handles fixture replacements, leak repairs, line work, troubleshooting, and code-conscious solutions that keep your home running the way it should.",
    image: "/images/general-plumbing.jpg",
  },
  {
    title: "Whole-Home Repipes",
    desc: "When old supply lines start failing, patch jobs stop making sense. We handle full repipes with clean planning, minimal disruption, and long-term reliability for older homes and major renovation projects.",
    image: "/images/svc-plumbing-new.jpg",
  },
  {
    title: "Sewer & Drain Solutions",
    desc: "Sewer cleaning, sewer line diagnostics, camera inspections, backups, and deeper drain issues all fall here. If the problem is underground or hard to pinpoint, this is the level of work where experience matters.",
    image: "/images/sewer-services.jpg",
  },
  {
    title: "New Construction Plumbing",
    desc: "From rough-ins to final fixtures, we support residential new builds with clean execution, dependable scheduling, and plumbing systems designed correctly from the start.",
    image: "/images/hero-bg-new.jpg",
  },
  {
    title: "Commercial Plumbing",
    desc: "For tenant build-outs, commercial repairs, and ongoing plumbing needs, Harris provides capable service for businesses that need work done professionally and without wasted time.",
    image: "/images/svc-home.jpg",
  },
  {
    title: "Water Heater Installation & Replacement",
    desc: "Tank and tankless installs, replacements, and upgrades done with the sizing, venting, and finish quality you want in a system your household depends on every day.",
    image: "/images/water-heater-new.jpg",
  },
  {
    title: "Emergency Plumbing",
    desc: "Burst pipes, urgent leaks, sewer backups, and other cannot-wait calls get a fast response. The goal is to stabilize the problem quickly and solve it the right way.",
    image: "/images/emergency-plumbing.jpg",
  },
];

export default function PlumbingContent() {
  return (
    <>
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center hidden sm:block"
          style={{ backgroundImage: "url('/images/plumbing-hero-desktop.jpg')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: "url('/images/plumbing-hero-mobile.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#c8964e]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e]">
              Master Plumber-Led
            </p>
            <span className="h-px w-8 bg-[#c8964e]" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
            Plumbing Services
          </h1>
          <p className="mt-5 text-[16px] sm:text-[18px] text-white font-medium leading-[1.7] max-w-2xl mx-auto">
            Licensed, insured, and built on decades of hands-on experience. We deliver reliable plumbing for homes across Birmingham and the surrounding area.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#plumbing-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8964e] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_24px_rgba(200,150,78,0.35)] transition-all duration-200 hover:bg-[#b07d3a] hover:scale-[1.02]"
            >
              Free Estimate
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:2058295282"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-sm px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/40"
            >
              Call (205) 829-5282
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <ScrollReveal
                key={service.title}
                delay={0}
                direction="up"
                scale={false}
              >
                <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center ${i > 0 ? "mt-20 md:mt-28" : ""}`}>
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                      <div
                        className="aspect-[4/3] bg-cover bg-center"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="font-display text-[28px] sm:text-[34px] text-[#1a1a1a] tracking-tight leading-[1.15]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-[15px] text-[#6b6560] leading-[1.8]">
                      {service.desc}
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="#plumbing-form"
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
            );
          })}
        </div>
      </section>

      <ServiceLeadForm id="plumbing-form" variant="plumbing" />
      <Testimonials />
      <ServiceArea />

      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
            Need a Plumber in Birmingham?
          </h2>
          <p className="mt-5 text-[16px] text-white font-medium leading-relaxed max-w-xl mx-auto">
            Get a clear estimate and a clean timeline. No surprises, no upsells — just honest work from a licensed team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#plumbing-form"
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
