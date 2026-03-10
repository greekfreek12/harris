"use client";

import Link from "next/link";

const serviceOptions = [
  {
    title: "Plumbing",
    description: "Repairs, installs, repipes, sewer work, and urgent plumbing issues.",
    href: "/plumbing#plumbing-form",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Home Improvement",
    description: "Renovations, remodels, additions, and larger interior projects.",
    href: "/home-improvements#home-improvements-form",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function QuoteSection() {
  return (
    <section id="quote" className="border-t border-[#ede8e1] bg-[#f8f6f3] py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e]">Free Estimate</p>
          <h2 className="font-display text-4xl tracking-tight leading-[1.08] text-[#1a1a1a] sm:text-5xl">
            Start With the Right Form
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-[#6b6560]">
            Choose the service you need and we&apos;ll take you straight to the correct estimate form.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {serviceOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group rounded-[28px] border border-[#e2ddd6] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#c8964e]/50 hover:shadow-[0_16px_38px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3ecdf] text-[#c8964e] transition-colors group-hover:bg-[#c8964e] group-hover:text-white">
                {option.icon}
              </div>
              <h3 className="font-display text-[28px] tracking-tight text-[#1a1a1a]">{option.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6b6560]">{option.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#c8964e]">
                Go to estimate form
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
