"use client";

import { useEffect, useRef, useState } from "react";

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

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Licensed & Insured",
    desc: "Fully licensed and insured for your peace of mind. Every job is backed by professional accountability and done to code.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Reliable & On Time",
    desc: "We show up when we say we will and finish on schedule. Clear timelines, honest communication, no runaround.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Quality Craftsmanship",
    desc: "Built to last, not just to look good. We take pride in durable, detail-oriented work on every project we touch.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
      </svg>
    ),
    title: "Upfront Pricing",
    desc: "No hidden fees, no surprise charges. You'll know exactly what to expect before any work begins.",
  },
];

export default function WhyChooseUs() {
  const section = useInView();

  return (
    <section className="py-24 lg:py-28 bg-white scroll-mt-20">
      <div
        ref={section.ref}
        className={`mx-auto max-w-6xl px-6 sm:px-8 transition-all duration-700 ${section.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
              <div
                className="aspect-[4/5] sm:aspect-[3/4] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/svc-plumbing-new.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-[#1a1a1a] tracking-tight leading-[1.1]">
              Why Harris Plumbing<br className="hidden sm:block" /> & Home Improvements?
            </h2>
            <p className="mt-4 text-[15px] text-[#6b6560] leading-[1.8] max-w-lg">
              We treat every home like it's our own — with care, transparency, and work you can count on for years to come.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className="group"
                  style={{ transitionDelay: section.visible ? `${i * 100}ms` : "0ms" }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c8964e]/10 flex items-center justify-center text-[#c8964e] mb-4 transition-colors group-hover:bg-[#c8964e]/20">
                    {r.icon}
                  </div>
                  <h3 className="font-display text-[18px] text-[#1a1a1a] tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[13px] sm:text-[14px] text-[#6b6560] leading-[1.7]">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
