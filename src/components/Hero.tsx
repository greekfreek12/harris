"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "https://www.homeresolutionllc.com/wp-content/uploads/2023/05/iStock-1208210894-1536x1024.webp",
    headline: ["Premier Home", "Transformations"],
    sub: "From full renovations and kitchen remodels to room additions and new construction — built right, built to last.",
    cta: { label: "Explore Home Improvements", href: "/home-improvements" },
  },
  {
    image: "/images/svc-plumbing-new.jpg",
    headline: ["Master-Level", "Plumbing"],
    sub: "New construction rough-in, whole-home repipes, sewer line work, and emergency response — done right the first time.",
    cta: { label: "Explore Plumbing", href: "/plumbing" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const currentRef = useRef(0);

  function goTo(index: number) {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent(index);
      currentRef.current = index;
      setTextVisible(true);
    }, 450);
  }

  useEffect(() => {
    const id = setInterval(() => {
      const next = (currentRef.current + 1) % slides.length;
      goTo(next);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100 animate-ken-burns" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${s.image}')` }}
        />
      ))}
      <div className="animate-hero-overlay absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/40" />

      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center py-32 transition-opacity duration-[400ms] ${
          textVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.3em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mb-8">
          Birmingham, Alabama
        </p>

        <h1 className="font-display text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px] text-white leading-[1.05] tracking-[-0.02em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          {slide.headline[0]}<br />
          {slide.headline[1]}
        </h1>

        <p className="mt-7 text-[16px] sm:text-[18px] text-white font-medium leading-[1.8] tracking-[0.01em] max-w-lg mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          <span className="text-[#e8b474] font-semibold">Harris Plumbing and Home Improvements</span> — {slide.sub}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:2058295282"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#c8964e] px-7 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-[14px] font-semibold text-white shadow-[0_4px_24px_rgba(200,150,78,0.35)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_6px_32px_rgba(200,150,78,0.5)] hover:scale-[1.02]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call (205) 829-5282
          </a>
          <Link
            href={slide.cta.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.08] backdrop-blur-sm px-7 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.15] hover:border-white/50"
          >
            {slide.cta.label}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[5px] rounded-full transition-all duration-400 ${
                i === current ? "w-8 bg-white" : "w-[5px] bg-white/45 hover:bg-white/65"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f6f3] to-transparent" />
    </section>
  );
}
