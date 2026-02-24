"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Renovations & Construction",
    desc: "Whole-home renovations, custom remodels, and new residential construction built with long-term durability in mind.",
    button: "Explore Renovations",
    image: "/images/svc-kitchen.jpg",
    href: "/contact",
  },
  {
    title: "Plumbing Services",
    desc: "Master-level plumbing for new builds, renovations, and standalone service calls across Birmingham.",
    button: "View Plumbing Services",
    image: "/images/svc-waterheater.jpg",
    href: "/plumbing",
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Services() {
  const header = useInView();

  return (
    <section id="services" className="relative py-24 lg:py-28 bg-[#f8f6f3] scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const card = useInView();
            return (
              <div
                key={s.title}
                ref={card.ref}
                className={`group rounded-2xl overflow-hidden bg-white border border-[#e8e3dc] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#c8964e]/30 ${card.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: card.visible ? `${i * 150}ms` : "0ms" }}
              >
                <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${s.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="p-6 sm:p-8 text-center">
                  <h3 className="font-display text-[22px] sm:text-[28px] text-[#1a1a1a] tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] text-[#6b6560] leading-relaxed">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c8964e] px-5 sm:px-7 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_2px_12px_rgba(200,150,78,0.25)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_4px_20px_rgba(200,150,78,0.4)] hover:scale-[1.02]"
                  >
                    {s.button}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
