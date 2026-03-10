"use client";

import Image from "next/image";
import { useState } from "react";

type ServiceLeadFormProps = {
  id: string;
  variant: "plumbing" | "home-improvement";
};

const plumbingTypes = [
  "General Plumbing",
  "Whole-Home Repipes",
  "Sewer & Drain Solutions",
  "New Construction Plumbing",
  "Commercial Plumbing",
  "Water Heater Installation & Replacement",
  "Emergency Plumbing",
];

const homeTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Room Addition",
  "Full Home Renovation",
  "New Construction",
  "Interior Upgrades & Finish Work",
];

const budgetRanges = ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"];
const timelines = ["ASAP", "2-4 Weeks", "1-3 Months", "Planning Stage"];
const contactMethods = ["Call", "Text", "Email"];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const inputClasses =
  "w-full rounded-xl border border-[#e2ddd6] bg-white px-4 py-3.5 text-[16px] text-[#1a1a1a] placeholder:text-[#b5afa8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c8964e]/20 focus:border-[#c8964e]";

const labelClasses = "mb-2 block text-[13px] font-semibold text-[#1a1a1a]";

const copy = {
  plumbing: {
    eyebrow: "Free Plumbing Estimate",
    heading: "Request an Estimate",
    intro:
      "Tell us what is going on and we will follow up with a clear next step for your plumbing project.",
    selectLabel: "Service Needed",
    selectPlaceholder: "Select a plumbing service",
    submitLabel: "Request Plumbing Estimate",
    textareaLabel: "Describe the Issue",
    textareaPlaceholder: "Leak, sewer issue, rough-in, water heater replacement, or anything else we should know...",
    backgroundImage: "/images/plumbing-hero-desktop.jpg",
    formTitle: "Plumbing Estimate Request",
    formIntro: "Harris Plumbing and Home Improvements",
  },
  "home-improvement": {
    eyebrow: "Free Project Estimate",
    heading: "Request an Estimate",
    intro:
      "Share the scope, timing, and budget range and we will follow up with a clear estimate conversation for your project.",
    selectLabel: "Project Type",
    selectPlaceholder: "Select a project type",
    submitLabel: "Request Home Improvement Estimate",
    textareaLabel: "Project Details",
    textareaPlaceholder: "Rooms involved, goals, finish level, materials, timing, or anything else that helps us understand the project...",
    backgroundImage: "/images/full-home-renovations-wave-1.jpg",
    formTitle: "Home Improvement Estimate Request",
    formIntro: "Harris Plumbing and Home Improvements",
  },
} as const;

export default function ServiceLeadForm({ id, variant }: ServiceLeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const content = copy[variant];

  return (
    <section id={id} className="relative overflow-hidden border-t border-[#ede8e1] bg-[#f8f6f3] py-24 lg:py-28 scroll-mt-20">
      <div className="absolute inset-0">
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.66)_0%,rgba(19,16,13,0.74)_50%,rgba(23,19,15,0.78)_100%)] lg:bg-[linear-gradient(90deg,rgba(18,16,13,0.82)_0%,rgba(18,16,13,0.74)_38%,rgba(18,16,13,0.66)_60%,rgba(18,16,13,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(200,150,78,0.22),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(0,0,0,0.18),transparent_30%)]" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-12 text-center lg:mb-14">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#f0cb91] sm:text-[14px]">
            {content.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            {content.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/86">{content.intro}</p>
        </div>

        {submitted ? (
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/18 bg-white p-12 text-center shadow-[0_22px_60px_rgba(0,0,0,0.24)] lg:bg-white/95 lg:backdrop-blur-md">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8964e] shadow-[0_4px_20px_rgba(200,150,78,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-3xl text-[#1a1a1a]">Request Received</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#6b6560]">
              Harris will follow up shortly. If this cannot wait, call{" "}
              <a href="tel:2058295282" className="font-semibold text-[#c8964e] hover:underline">
                205-829-5282
              </a>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setPhone("");
              }}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[#e2ddd6] px-6 py-2.5 text-[13px] font-semibold text-[#6b6560] transition-colors hover:border-[#c8964e] hover:text-[#1a1a1a]"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[28px] border border-white/16 bg-white shadow-[0_18px_54px_rgba(0,0,0,0.2)] lg:bg-white/95 lg:backdrop-blur-md">
              <div className="border-b border-[#f0ebe3] bg-[#fcfaf7] px-7 py-7 text-center">
                <p className="text-[15px] font-semibold tracking-[0.01em] text-[#c8964e] sm:text-[18px]">
                  {content.formIntro}
                </p>
                <a
                  href="tel:2058295282"
                  className="mt-2 inline-flex items-center justify-center text-[14px] font-semibold text-[#6b6560] transition-colors hover:text-[#1a1a1a]"
                >
                  205-829-5282
                </a>
                <h3 className="mt-3 font-display text-[24px] leading-tight tracking-tight text-[#1a1a1a] sm:text-[28px]">
                  {content.formTitle}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6b6560]">
                  {variant === "plumbing"
                    ? "Need sewer work, a repipe, a water heater, or general plumbing help? Start here."
                    : "Need renovation, new construction, or a major interior upgrade? Start here."}
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5 p-7 sm:p-9"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>Name</label>
                    <input type="text" required autoComplete="name" className={inputClasses} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelClasses}>Phone</label>
                    <input
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      className={inputClasses}
                      placeholder="(205) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Email</label>
                  <input type="email" required autoComplete="email" className={inputClasses} placeholder="you@example.com" />
                </div>

                <div>
                  <label className={labelClasses}>{content.selectLabel}</label>
                  <select required className={inputClasses}>
                    <option value="">{content.selectPlaceholder}</option>
                    {(variant === "plumbing" ? plumbingTypes : homeTypes).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {variant === "home-improvement" && (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClasses}>Budget Range</label>
                      <select required className={inputClasses}>
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Timeline</label>
                      <select required className={inputClasses}>
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className={labelClasses}>{content.textareaLabel}</label>
                  <textarea rows={4} className={`${inputClasses} resize-none`} placeholder={content.textareaPlaceholder} />
                </div>

                <div className="text-center">
                  <label className={labelClasses}>Preferred Contact</label>
                  <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-3">
                    {contactMethods.map((method) => (
                      <label key={method} className="flex cursor-pointer items-center gap-2">
                        <input type="radio" name={`${variant}-contact-method`} value={method} className="h-4 w-4 accent-[#c8964e]" />
                        <span className="text-[14px] text-[#6b6560] transition-colors hover:text-[#1a1a1a]">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#c8964e] px-6 py-4 text-[15px] font-semibold tracking-wide text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:scale-[1.01] hover:bg-[#b07d3a] hover:shadow-[0_6px_28px_rgba(200,150,78,0.45)]"
                >
                  {content.submitLabel}
                </button>
              </form>
          </div>
        )}
      </div>
    </section>
  );
}
