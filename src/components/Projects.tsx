"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const projects = [
  { image: "/images/svc-bathroom.jpg", title: "Master Bathroom Remodel", category: "Home Improvement" },
  { image: "/images/svc-kitchen.jpg", title: "Modern Kitchen Renovation", category: "Home Improvement" },
  { image: "/images/svc-flooring.jpg", title: "Custom Tile and Flooring", category: "Home Improvement" },
  { image: "/images/svc-waterheater.jpg", title: "Water Heater Replacement", category: "Plumbing" },
  { image: "/images/svc-plumbing-new.jpg", title: "Full Home Plumbing", category: "Plumbing" },
  { image: "/images/svc-emergency.jpg", title: "Emergency Pipe Repair", category: "Plumbing" },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <section id="projects" className="py-24 lg:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">
            Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Recent Projects
          </h2>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="relative aspect-[16/9] sm:aspect-[2/1]">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                style={{ backgroundImage: `url('${project.image}')` }}
                role="img"
                aria-label={project.title}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            ))}

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between">
              <div>
                <span className="inline-block rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 mb-2">
                  {projects[current].category}
                </span>
                <p className="text-white font-display text-lg sm:text-xl tracking-tight">
                  {projects[current].title}
                </p>
              </div>
              <span className="text-white/60 text-[13px] font-medium tabular-nums">
                {current + 1} / {projects.length}
              </span>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all hover:bg-black/50"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all hover:bg-black/50"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
