"use client";

import { useRef, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Maureen C.",
    text: "Look no further for your plumbing and home improvement needs — Harris Plumbing and Home Improvements is the one-stop solution you've been searching for! Their prompt response and professional demeanor immediately put us at ease. The level of care and attention to detail they exhibited throughout the entire process was truly exceptional.",
    rating: 5,
  },
  {
    name: "Elizabeth B.",
    text: "Can't recommend Harris Plumbing and Home Improvement enough! Fast response and fair. Takes the time to make sure you understand everything about the job. Even called the day after the repair to make sure everything was fine! He'll be my go to plumber!",
    rating: 5,
  },
  {
    name: "Eric B.",
    text: "WOW! Mr. Harris and his team were a God sent to my family. We needed a water line replaced and he came out the same day. He was professional and kind with a heart to exemplify customer service like no other business. He came in budget and wanted to make sure that we were satisfied with the job.",
    rating: 5,
  },
];

const googleReviewUrl = "https://www.google.com/search?q=harris+plumbing+and+home+improvements&rlz=1CAGXWE_enUS1166&oq=har&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIVCAEQLhhDGMcBGLEDGNEDGIAEGIoFMggIAhBFGCcYOzIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGEHSAQc5ODdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x65d501dd31d5ddab:0x6565c87c62291709,1,,,,";
const REVIEW_PREVIEW_LIMIT = 220;

function getReviewPreview(text: string) {
  if (text.length <= REVIEW_PREVIEW_LIMIT) return text;
  return `${text.slice(0, REVIEW_PREVIEW_LIMIT).trimEnd()}...`;
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActive((prev) => (prev + 1) % reviews.length);
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const activeReview = reviews[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 lg:py-28 scroll-mt-20"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onTouchStart={() => { pausedRef.current = true; }}
      onTouchEnd={() => { pausedRef.current = false; }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576698483491-8c43f0862543?w=1200&auto=format&fit=crop&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(200,150,78,0.12),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(200,150,78,0.08),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal className="relative text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white mb-4 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">Hear What Birmingham Is Saying</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            5-Star Reviews
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8964e] fill-[#c8964e]" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-[14px] text-white ml-2 font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">5.0 on Google</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className="relative mx-auto max-w-2xl">
          <div className="relative rounded-[28px] border border-white/20 bg-black/40 backdrop-blur-md p-6 sm:p-10 shadow-[0_28px_80px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out">
            <span className="absolute left-5 top-4 font-display text-5xl leading-none text-[#c8964e]/60 sm:left-8 sm:top-6 sm:text-6xl">
              &ldquo;
            </span>
            <p className="relative mt-6 text-[17px] sm:text-[19px] font-normal text-white leading-[1.9] text-center tracking-[0.01em] min-h-[7rem] sm:min-h-[6.5rem]">
              {getReviewPreview(activeReview.text)}
            </p>
            <p className="mt-5 text-center">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-[14px] font-semibold text-white transition-all hover:border-white/70 hover:bg-white/20"
              >
                Read full review
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </p>
            <div className="mt-6 flex items-center justify-center">
              <p className="text-[15px] font-semibold text-white">— {activeReview.name}</p>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 sm:gap-6">
            <button
              onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-[#c8964e] hover:text-[#c8964e] transition-colors"
              aria-label="Previous review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-7 bg-[#c8964e]" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((active + 1) % reviews.length)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-[#c8964e] hover:text-[#c8964e] transition-colors"
              aria-label="Next review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="mt-8 text-center">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-full border border-white/70 bg-white/95 px-5 py-3 text-[13px] font-semibold text-[#222] shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition-all hover:bg-white hover:border-white"
            >
              Leave a Review
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
