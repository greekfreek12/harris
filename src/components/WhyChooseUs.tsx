"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Licensed & Insured",
    desc: "Every job is backed by full licensing, insurance, and code-compliant work.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Reliable & On Time",
    desc: "We show up when we say we will. Clear timelines, honest communication.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Upfront Pricing",
    desc: "No hidden fees. You know exactly what to expect before work begins.",
  },
];

export default function WhyChooseUs() {
  const heading = useInView();
  const image = useInView(0.15);
  const item0 = useInView(0.3);
  const item1 = useInView(0.3);
  const item2 = useInView(0.3);
  const items = [item0, item1, item2];

  return (
    <section className="relative py-28 lg:py-36 bg-[#111111] overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "256px" }} />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          <div
            ref={image.ref}
            className={`w-full lg:w-[45%] transition-all duration-1000 ease-out ${image.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <div
                  className="aspect-[3/4] bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/why-choose-us.jpg')" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-xl bg-[#c8964e] flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(200,150,78,0.3)]">
                <span className="font-display text-[32px] text-white leading-none">15+</span>
                <span className="text-[10px] text-white/80 uppercase tracking-[0.15em] mt-1">Years</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%]">
            <div
              ref={heading.ref}
              className={`transition-all duration-700 ease-out ${heading.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-5">
                Why Choose Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.1]">
                Built on Trust &<br />Quality Work
              </h2>
            </div>

            <div className="mt-12 space-y-10">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  ref={items[i].ref}
                  className={`flex gap-5 items-start transition-all duration-700 ease-out ${items[i].visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: items[i].visible ? `${i * 150}ms` : "0ms" }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#c8964e]/15 flex items-center justify-center text-[#c8964e]">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-[18px] sm:text-[20px] text-white tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] text-white/50 leading-[1.6]">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
