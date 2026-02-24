"use client";

import { useRef } from "react";

const reviews = [
  {
    name: "Maureen C.",
    badge: "Local Guide",
    text: "Look no further for your plumbing and home improvement needs — Harris Plumbing and Home Improvements is the one-stop solution you've been searching for! Their prompt response and professional demeanor immediately put us at ease. The level of care and attention to detail they exhibited throughout the entire process was truly exceptional.",
    rating: 5,
  },
  {
    name: "Elizabeth B.",
    badge: null,
    text: "Can't recommend Harris Plumbing and Home Improvement enough! Fast response and fair. Takes the time to make sure you understand everything about the job. Even called the day after the repair to make sure everything was fine! He'll be my go to plumber!",
    rating: 5,
  },
  {
    name: "Eric B.",
    badge: "Local Guide",
    text: "WOW! Mr. Harris and his team were a God sent to my family. We needed a water line replaced and he came out the same day. He was professional and kind with a heart to exemplify customer service like no other business. He came in budget and wanted to make sure that we were satisfied with the job.",
    rating: 5,
  },
];

const googleReviewUrl = "https://www.google.com/search?q=harris+plumbing+and+home+improvements&rlz=1CAGXWE_enUS1166&oq=har&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIVCAEQLhhDGMcBGLEDGNEDGIAEGIoFMggIAhBFGCcYOzIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEHSAQc5ODdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x65d501dd31d5ddab:0x6565c87c62291709,1,,,,";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-28 bg-[#111111] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">What Our Clients Say</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              5-Star Reviews
            </h2>
            <div className="mt-4 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8964e] fill-[#c8964e]" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="text-[14px] text-white/50 ml-2 font-medium">5.0 on Google</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#c8964e]/40 px-5 py-2.5 text-[13px] font-semibold text-[#c8964e] transition-all hover:bg-[#c8964e]/10 hover:border-[#c8964e]"
            >
              Leave a Review
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c8964e] hover:text-[#c8964e] transition-colors"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#c8964e] hover:text-[#c8964e] transition-colors"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-6 sm:px-8 pb-4 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            className="shrink-0 w-[85vw] sm:w-[45vw] lg:w-[32vw] max-w-[480px] snap-start rounded-2xl bg-white/[0.04] border border-white/[0.06] p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.12]"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#c8964e] fill-[#c8964e]" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-[14px] text-white/70 leading-[1.7]">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <p className="text-[14px] font-semibold text-white">{review.name}</p>
                {review.badge && (
                  <p className="text-[11px] text-[#c8964e]/70 mt-0.5 tracking-wide">{review.badge}</p>
                )}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden mt-8 px-6 text-center">
        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#c8964e]/40 px-5 py-2.5 text-[13px] font-semibold text-[#c8964e] transition-all hover:bg-[#c8964e]/10 hover:border-[#c8964e]"
        >
          Leave a Review
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
