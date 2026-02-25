"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Home Improvements",
    desc: "New construction, full-home renovations, kitchen and bathroom remodeling, room additions, and custom interior upgrades built for long-term value.",
    button: "Get a Free Quote",
    href: "/#quote",
    image: "/images/svc-home.jpg",
  },
  {
    title: "Plumbing Services",
    desc: "High-value plumbing projects including whole-home repipes, sewer and water line replacement, water heater installs, and rough-in plumbing for remodels/new builds.",
    button: "View Plumbing Services",
    href: "/plumbing",
    image: "/images/svc-plumbing-new.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-28 bg-[#f8f6f3] scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Our Services
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-[15px] sm:text-[16px] text-[#5e5852] leading-[1.8]">
            Harris Plumbing & Home Improvements delivers full-scope residential construction, renovations, and precision plumbing — start to finish.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, index) => (
            <ScrollReveal key={s.title} delay={index * 120}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-[#e8e3dc] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#c8964e]/30 h-full">
                <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${s.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="p-6 sm:p-8 text-center">
                  <div className="mx-auto mb-4 h-px w-14 bg-gradient-to-r from-transparent via-[#c8964e] to-transparent" />
                  <h3 className="font-display text-[22px] sm:text-[28px] text-[#1a1a1a] tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] text-[#6b6560] leading-relaxed">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c8964e] px-5 sm:px-7 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_2px_12px_rgba(200,150,78,0.35)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_4px_20px_rgba(200,150,78,0.5)] hover:scale-[1.02]"
                  >
                    {s.button}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
