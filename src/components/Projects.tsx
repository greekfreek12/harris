"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const projects = [
  { image: "/images/svc-bathroom.jpg", title: "Bathroom Remodel" },
  { image: "/images/svc-kitchen.jpg", title: "Kitchen Renovation" },
  { image: "/images/svc-flooring.jpg", title: "Tile & Flooring" },
  { image: "/images/svc-home.jpg", title: "Home Improvement" },
  { image: "/images/svc-plumbing-new.jpg", title: "Plumbing" },
];

function useInView(threshold = 0.15) {
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

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heading = useInView();
  const slider = useInView(0.1);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <section id="projects" className="py-28 lg:py-36 bg-[#f8f6f3] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div
          ref={heading.ref}
          className={`text-center mb-14 transition-all duration-700 ease-out ${heading.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">
            Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Recent Projects
          </h2>
        </div>

        <div
          ref={slider.ref}
          className={`transition-all duration-1000 ease-out ${slider.visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  style={{ backgroundImage: `url('${project.image}')` }}
                  role="img"
                  aria-label={project.title}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all hover:bg-white hover:scale-105"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all hover:bg-white hover:scale-105"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="font-display text-[20px] sm:text-[24px] text-[#1a1a1a] tracking-tight">
              {projects[current].title}
            </p>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#c8964e]" : "w-1.5 bg-[#d4cec4] hover:bg-[#b8b0a4]"}`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
