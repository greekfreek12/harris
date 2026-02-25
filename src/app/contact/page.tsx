"use client";

import { useState } from "react";

type ServiceType = "plumbing" | "home-improvement" | null;

const plumbingTypes = [
  "General Plumbing",
  "Water Heater Install / Repair",
  "Emergency / Urgent Repair",
  "Fixture Installation",
  "Drain & Sewer",
  "Re-pipe",
];

const homeTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Flooring & Tile",
  "Custom Carpentry",
  "Full Home Renovation",
  "New Construction",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

const timelines = ["ASAP", "2–4 Weeks", "1–3 Months", "Planning Stage"];
const contactMethods = ["Call", "Text", "Email"];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const inputClasses =
  "w-full rounded-xl border border-[#e2ddd6] bg-white px-4 py-3.5 text-[16px] text-[#1a1a1a] placeholder:text-[#b5afa8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c8964e]/20 focus:border-[#c8964e]";
const labelClasses = "block text-[13px] font-semibold text-[#1a1a1a] mb-2 tracking-wide";

export default function ContactPage() {
  const [service, setService] = useState<ServiceType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f3] px-5">
        <div className="max-w-md w-full text-center">
          <div className="rounded-2xl bg-white border border-[#e2ddd6] p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="mx-auto w-16 h-16 rounded-full bg-[linear-gradient(145deg,#c8964e,#b07d3a)] flex items-center justify-center shadow-[0_4px_15px_rgba(200,150,78,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="mt-6 font-display text-3xl text-[#1a1a1a]">Thank You</h2>
            <p className="mt-4 text-[15px] text-[#6b6560] leading-relaxed">
              We&apos;ll reach out shortly. For urgent plumbing issues call{" "}
              <a href="tel:2058295282" className="font-semibold text-[#c8964e] hover:underline">
                205-829-5282
              </a>.
            </p>
            <button
              onClick={() => { setSubmitted(false); setService(null); setPhone(""); }}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[linear-gradient(145deg,#c8964e,#b07d3a)] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_2px_12px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_4px_20px_rgba(200,150,78,0.45)]"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6f3] pt-24 pb-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">

        {/* Logo + header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-full bg-[linear-gradient(145deg,#c8964e,#b07d3a)] flex items-center justify-center text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(200,150,78,0.35)]">
              HP
            </div>
            <div className="text-left">
              <p className="font-display text-[17px] text-[#1a1a1a] leading-tight">Harris Plumbing</p>
              <p className="text-[12px] text-[#9e9690]">&amp; Home Improvements</p>
            </div>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Get a Free Quote
          </h1>
          <p className="mt-3 text-[16px] text-[#6b6560]">
            What would you like a quote for?
          </p>
        </div>

        {/* Service selector cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            type="button"
            onClick={() => setService("plumbing")}
            className={`rounded-2xl border-2 p-6 text-left transition-all duration-200 ${
              service === "plumbing"
                ? "border-[#c8964e] bg-white shadow-[0_4px_20px_rgba(200,150,78,0.18)]"
                : "border-[#e2ddd6] bg-white hover:border-[#c8964e]/50 hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
            }`}
          >
            <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${service === "plumbing" ? "bg-[#c8964e]" : "bg-[#f0ebe3]"} transition-colors`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${service === "plumbing" ? "text-white" : "text-[#c8964e]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <p className="font-semibold text-[15px] text-[#1a1a1a]">Plumbing</p>
            <p className="mt-1 text-[12px] text-[#9e9690] leading-snug">Repairs, installs &amp; emergencies</p>
          </button>

          <button
            type="button"
            onClick={() => setService("home-improvement")}
            className={`rounded-2xl border-2 p-6 text-left transition-all duration-200 ${
              service === "home-improvement"
                ? "border-[#c8964e] bg-white shadow-[0_4px_20px_rgba(200,150,78,0.18)]"
                : "border-[#e2ddd6] bg-white hover:border-[#c8964e]/50 hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
            }`}
          >
            <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${service === "home-improvement" ? "bg-[#c8964e]" : "bg-[#f0ebe3]"} transition-colors`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${service === "home-improvement" ? "text-white" : "text-[#c8964e]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <p className="font-semibold text-[15px] text-[#1a1a1a]">Home Improvement</p>
            <p className="mt-1 text-[12px] text-[#9e9690] leading-snug">Remodels, renovations &amp; more</p>
          </button>
        </div>

        {/* Form — shown after service selection */}
        {service && (
          <div className="rounded-2xl bg-white border border-[#e2ddd6] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="border-b border-[#f0ebe3] bg-[#fdfbf8] px-8 py-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#c8964e]" />
              <p className="text-[13px] font-semibold text-[#1a1a1a] tracking-wide">
                {service === "plumbing" ? "Plumbing Quote Request" : "Home Improvement Quote Request"}
              </p>
            </div>

            <div className="p-7 sm:p-9">
              {service === "plumbing" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label className={labelClasses}>Service Needed</label>
                    <select required className={inputClasses}>
                      <option value="">Select a plumbing service</option>
                      {plumbingTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Describe the Issue</label>
                    <textarea rows={4} className={`${inputClasses} resize-none`} placeholder="What's going on? Any details help us give a better estimate..." />
                  </div>
                  <div>
                    <label className={labelClasses}>Preferred Contact Method</label>
                    <div className="flex gap-5 mt-1">
                      {contactMethods.map((method) => (
                        <label key={method} className="flex items-center gap-2.5 cursor-pointer group">
                          <input type="radio" name="contactMethod" value={method} className="w-4 h-4 accent-[#c8964e]" />
                          <span className="text-[14px] text-[#6b6560] group-hover:text-[#1a1a1a] transition-colors">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-[linear-gradient(145deg,#c8964e,#b07d3a)] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_4px_15px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_25px_rgba(200,150,78,0.45)] hover:scale-[1.01] tracking-wide">
                    Request Plumbing Quote
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label className={labelClasses}>Project Type</label>
                    <select required className={inputClasses}>
                      <option value="">Select a project type</option>
                      {homeTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Budget Range</label>
                      <select required className={inputClasses}>
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Timeline</label>
                      <select required className={inputClasses}>
                        <option value="">Select timeline</option>
                        {timelines.map((tl) => (
                          <option key={tl} value={tl}>{tl}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClasses}>Project Details</label>
                    <textarea rows={4} className={`${inputClasses} resize-none`} placeholder="Tell us about your vision — rooms, materials, goals..." />
                  </div>
                  <div>
                    <label className={labelClasses}>Preferred Contact Method</label>
                    <div className="flex gap-5 mt-1">
                      {contactMethods.map((method) => (
                        <label key={method} className="flex items-center gap-2.5 cursor-pointer group">
                          <input type="radio" name="contactMethod" value={method} className="w-4 h-4 accent-[#c8964e]" />
                          <span className="text-[14px] text-[#6b6560] group-hover:text-[#1a1a1a] transition-colors">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-[linear-gradient(145deg,#c8964e,#b07d3a)] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_4px_15px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_25px_rgba(200,150,78,0.45)] hover:scale-[1.01] tracking-wide">
                    Request Home Improvement Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 rounded-xl bg-[#111111] border border-neutral-800 p-6 text-center">
          <p className="text-[14px] text-neutral-400">
            Need immediate help? Call us directly at{" "}
            <a href="tel:2058295282" className="font-semibold text-[#c8964e] hover:underline">205-829-5282</a>
          </p>
        </div>
      </div>
    </div>
  );
}
