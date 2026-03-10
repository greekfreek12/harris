"use client";

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
    heading: "Talk to Harris Plumbing and Home Improvements",
    intro:
      "Tell us what is going on and we will reach out with a clear next step. For urgent issues, call 205-829-5282.",
    selectLabel: "Service Needed",
    selectPlaceholder: "Select a plumbing service",
    submitLabel: "Request Plumbing Estimate",
    textareaLabel: "Describe the Issue",
    textareaPlaceholder: "Leak, sewer issue, rough-in, water heater replacement, or anything else we should know...",
    backgroundImage: "/images/plumbing-hero-desktop.jpg",
    panelEyebrow: "Plumbing Services",
    panelText:
      "Fast response for plumbing repairs, sewer issues, water heaters, new construction, and bigger system work across Birmingham.",
  },
  "home-improvement": {
    eyebrow: "Free Project Estimate",
    heading: "Talk to Harris Plumbing and Home Improvements",
    intro:
      "Share the scope, timing, and budget range and we will follow up with a clear estimate conversation tailored to your project.",
    selectLabel: "Project Type",
    selectPlaceholder: "Select a project type",
    submitLabel: "Request Home Improvement Estimate",
    textareaLabel: "Project Details",
    textareaPlaceholder: "Rooms involved, goals, finish level, materials, timing, or anything else that helps us understand the project...",
    backgroundImage: "/images/full-home-renovations-wave-1.jpg",
    panelEyebrow: "Home Improvements",
    panelText:
      "Renovations, room additions, finish work, and larger home improvement projects handled with craftsmanship and clear communication.",
  },
} as const;

export default function ServiceLeadForm({ id, variant }: ServiceLeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const content = copy[variant];

  return (
    <section id={id} className="relative border-t border-[#ede8e1] bg-[#f8f6f3] py-24 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 hidden lg:block bg-[radial-gradient(circle_at_18%_20%,rgba(200,150,78,0.12),transparent_28%),radial-gradient(circle_at_82%_80%,rgba(0,0,0,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 max-w-3xl text-center lg:text-left">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.28em] text-[#c8964e] sm:text-[14px]">
            {content.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-[1.04] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[58px]">
            {content.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[#6b6560] lg:mx-0">{content.intro}</p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="relative hidden overflow-hidden rounded-[28px] border border-[#e2ddd6] shadow-[0_22px_56px_rgba(0,0,0,0.12)] lg:block">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${content.backgroundImage}')` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,12,10,0.18)_0%,rgba(15,12,10,0.55)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e8b474]">
                {content.panelEyebrow}
              </p>
              <p className="mt-3 max-w-sm text-[17px] leading-[1.8] text-white/94">
                {content.panelText}
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-[#e2ddd6] bg-white p-12 text-center shadow-[0_16px_42px_rgba(0,0,0,0.08)] lg:bg-white/96 lg:backdrop-blur-[2px]">
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
            <div className="overflow-hidden rounded-2xl border border-[#e2ddd6] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] lg:bg-white/95 lg:shadow-[0_20px_48px_rgba(0,0,0,0.12)] lg:backdrop-blur-[2px]">
            <div className="border-b border-[#f0ebe3] bg-[#fdfbf8] px-7 py-7 text-center">
              <h3 className="font-display text-[26px] leading-tight tracking-tight text-[#1a1a1a] sm:text-[30px]">
                {variant === "plumbing" ? "Plumbing Estimate Request" : "Home Improvement Estimate Request"}
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

              <div>
                <label className={labelClasses}>Preferred Contact</label>
                <div className="mt-1 flex flex-wrap gap-x-5 gap-y-3">
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
      </div>
    </section>
  );
}
