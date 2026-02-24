"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Sarah Mitchell",
    date: "2 months ago",
    text: "Harris completely transformed our master bathroom. The tile work is stunning, and the crew was professional and respectful throughout the entire project. Highly recommend for any remodel work in the Birmingham area.",
    initials: "SM",
  },
  {
    name: "James Thompson",
    date: "3 months ago",
    text: "We had a plumbing emergency on a Sunday and they responded within the hour. Fixed the issue fast and at a very fair price. Now they're our go-to for everything — plumbing and home improvement. True professionals.",
    initials: "JT",
  },
  {
    name: "Michelle Rivera",
    date: "4 months ago",
    text: "Our kitchen remodel exceeded every expectation. Clear communication throughout, stayed right on budget, and the finished result is absolutely incredible. True craftsmen who genuinely care about their work.",
    initials: "MR",
  },
  {
    name: "David Chen",
    date: "5 months ago",
    text: "Had them install a new water heater and redo the plumbing in our guest bathroom. Everything was done right the first time. Clean work, fair pricing, and they left the place spotless. Will definitely use again.",
    initials: "DC",
  },
  {
    name: "Lisa Harmon",
    date: "6 months ago",
    text: "We hired Harris for a complete flooring job — hardwood in the living areas and tile in the bathrooms. The attention to detail was remarkable. You can tell they take real pride in their craft.",
    initials: "LH",
  },
  {
    name: "Robert Williams",
    date: "7 months ago",
    text: "Best contractor experience I've ever had in Birmingham. On time, on budget, great communication. They handled our trim work and interior finishing and it looks like a custom home. Five stars all day.",
    initials: "RW",
  },
];

export default function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = reviews.length - visibleCount;

  const next = () => setActiveIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setActiveIndex((i) => Math.max(i - 1, 0));

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-background grain-overlay scroll-mt-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">Reviews</p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1]">
              What Birmingham Says
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-card-bg border border-border rounded-xl px-5 py-3">
              <div className="flex items-center gap-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-[18px] font-bold text-foreground">5.0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold fill-gold" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-muted">6 Google Reviews</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted transition-all hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={activeIndex >= maxIndex}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted transition-all hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCount + 1.67)}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="group flex-shrink-0 w-full md:w-[calc(33.333%-14px)] rounded-xl bg-card-bg border border-border p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gold/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-sm">
                    <span className="text-[11px] font-bold text-white tracking-wider">{review.initials}</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-foreground">{review.name}</p>
                    <p className="text-[11px] text-muted">{review.date}</p>
                  </div>
                  <div className="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold fill-gold" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <p className="text-[14px] text-muted leading-[1.75]">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted transition-all hover:border-gold hover:text-gold disabled:opacity-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIndex ? 'bg-gold w-4' : 'bg-border'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={activeIndex >= maxIndex}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted transition-all hover:border-gold hover:text-gold disabled:opacity-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
