"use client";

import { useRef } from "react";

const projects = [
  { image: "/images/svc-bathroom.jpg", alt: "Master Bathroom Remodel" },
  { image: "/images/svc-kitchen.jpg", alt: "Modern Kitchen Renovation" },
  { image: "/images/svc-flooring.jpg", alt: "Custom Tile & Flooring" },
  { image: "/images/svc-waterheater.jpg", alt: "Water Heater Replacement" },
  { image: "/images/svc-plumbing.jpg", alt: "Full Home Plumbing" },
  { image: "/images/svc-emergency.jpg", alt: "Emergency Pipe Repair" },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-24 lg:py-28 bg-[#f8f6f3] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">Our Work</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
              Featured Projects
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[#e2ddd6] bg-white flex items-center justify-center text-[#6b6560] hover:border-[#c8964e] hover:text-[#c8964e] transition-colors"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-[#e2ddd6] bg-white flex items-center justify-center text-[#6b6560] hover:border-[#c8964e] hover:text-[#c8964e] transition-colors"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-6 sm:px-8 pb-4 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="shrink-0 w-[calc((100vw-3rem)/1.15)] sm:w-[calc((100vw-4rem)/2.2)] lg:w-[calc((100vw-4rem)/3.5)] first:ml-0" />
        {projects.map((project) => (
          <div
            key={project.alt}
            className="shrink-0 w-[calc((100vw-3rem)/1.15)] sm:w-[calc((100vw-4rem)/2.2)] lg:w-[calc((100vw-4rem)/3.5)] snap-start"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <div
                className="aspect-[3/2] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
            </div>
          </div>
        ))}
        <div className="shrink-0 w-4" />
      </div>
    </section>
  );
}
