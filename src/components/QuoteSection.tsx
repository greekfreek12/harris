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

const budgetRanges = ["Under $5,000", "$5,000 – $10,000", "$10,000 – $25,000", "$25,000 – $50,000", "$50,000+"];
const timelines = ["ASAP", "2–4 Weeks", "1–3 Months", "Planning Stage"];
const contactMethods = ["Call", "Text", "Email"];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const inputClasses =
  "w-full rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3.5 text-[16px] text-white placeholder:text-white/40 transition-all duration-200 focus:outline-none focus:border-[#c8964e] focus:bg-white/[0.11]";

const labelClasses = "block text-[13px] font-semibold text-white/75 mb-2";

export default function QuoteSection() {
  const [service, setService] = useState<ServiceType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-[#0d0d0d] py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-2xl px-6 sm:px-8">

        {/* Section label + heading */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">Free Estimate</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight leading-[1.08]">
            Get a Free Quote
          </h2>
          <p className="mt-4 text-[16px] text-white/65 max-w-sm mx-auto leading-relaxed">
            What can we help you with today?
          </p>
        </div>

        {submitted ? (
          /* Success state */
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-12 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8964e] shadow-[0_4px_20px_rgba(200,150,78,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-3xl text-white">We Got It</h3>
            <p className="mt-3 text-[15px] text-white/45 leading-relaxed">
              Someone will reach out shortly. For urgent issues call{" "}
              <a href="tel:2058295282" className="text-[#c8964e] font-semibold hover:underline">205-829-5282</a>.
            </p>
            <button
              onClick={() => { setSubmitted(false); setService(null); setPhone(""); }}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-[13px] font-semibold text-white/60 hover:text-white hover:border-white/30 transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <>
            {/* Service type selector */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {/* Plumbing */}
              <button
                type="button"
                onClick={() => setService("plumbing")}
                className={`group relative rounded-2xl border p-6 text-left transition-all duration-200 ${
                  service === "plumbing"
                    ? "border-[#c8964e] bg-[#c8964e]/10 shadow-[0_0_30px_rgba(200,150,78,0.15)]"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {service === "plumbing" && (
                  <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#c8964e]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${service === "plumbing" ? "bg-[#c8964e]" : "bg-white/[0.07]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${service === "plumbing" ? "text-white" : "text-white/50"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <p className={`font-semibold text-[15px] transition-colors ${service === "plumbing" ? "text-white" : "text-white/85"}`}>Plumbing</p>
                <p className="mt-1 text-[13px] text-white/55 leading-snug">Repairs, installs &amp; emergencies</p>
              </button>

              {/* Home Improvement */}
              <button
                type="button"
                onClick={() => setService("home-improvement")}
                className={`group relative rounded-2xl border p-6 text-left transition-all duration-200 ${
                  service === "home-improvement"
                    ? "border-[#c8964e] bg-[#c8964e]/10 shadow-[0_0_30px_rgba(200,150,78,0.15)]"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {service === "home-improvement" && (
                  <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#c8964e]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${service === "home-improvement" ? "bg-[#c8964e]" : "bg-white/[0.07]"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${service === "home-improvement" ? "text-white" : "text-white/50"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <p className={`font-semibold text-[15px] transition-colors ${service === "home-improvement" ? "text-white" : "text-white/85"}`}>Home Improvement</p>
                <p className="mt-1 text-[13px] text-white/55 leading-snug">Remodels, renovations &amp; more</p>
              </button>
            </div>

            {/* Form — revealed after selection */}
            {service && (
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
                <div className="border-b border-white/[0.06] px-7 py-4 flex items-center gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#c8964e]" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/50">
                    {service === "plumbing" ? "Plumbing Quote" : "Home Improvement Quote"}
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
                            type="tel" inputMode="tel" required autoComplete="tel"
                            value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))}
                            className={inputClasses} placeholder="(205) 555-0123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelClasses}>Service Needed</label>
                        <select required className={inputClasses}>
                          <option value="" className="bg-[#1a1a1a]">Select a service</option>
                          {plumbingTypes.map((t) => <option key={t} value={t} className="bg-[#1a1a1a]">{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>Describe the Issue</label>
                        <textarea rows={3} className={`${inputClasses} resize-none`} placeholder="Any details help us give a better estimate..." />
                      </div>
                      <div>
                        <label className={labelClasses}>Preferred Contact</label>
                        <div className="flex gap-5 mt-1">
                          {contactMethods.map((m) => (
                            <label key={m} className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="contact" value={m} className="w-4 h-4 accent-[#c8964e]" />
                              <span className="text-[14px] text-white/50 hover:text-white/80 transition-colors">{m}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <button type="submit" className="w-full rounded-xl bg-[#c8964e] hover:bg-[#b07d3a] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_28px_rgba(200,150,78,0.45)] hover:scale-[1.01] tracking-wide">
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
                            type="tel" inputMode="tel" required autoComplete="tel"
                            value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))}
                            className={inputClasses} placeholder="(205) 555-0123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelClasses}>Project Type</label>
                        <select required className={inputClasses}>
                          <option value="" className="bg-[#1a1a1a]">Select a project type</option>
                          {homeTypes.map((t) => <option key={t} value={t} className="bg-[#1a1a1a]">{t}</option>)}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClasses}>Budget</label>
                          <select required className={inputClasses}>
                            <option value="" className="bg-[#1a1a1a]">Select budget</option>
                            {budgetRanges.map((r) => <option key={r} value={r} className="bg-[#1a1a1a]">{r}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className={labelClasses}>Timeline</label>
                          <select required className={inputClasses}>
                            <option value="" className="bg-[#1a1a1a]">Select timeline</option>
                            {timelines.map((t) => <option key={t} value={t} className="bg-[#1a1a1a]">{t}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className={labelClasses}>Project Details</label>
                        <textarea rows={3} className={`${inputClasses} resize-none`} placeholder="Tell us about your vision — rooms, materials, goals..." />
                      </div>
                      <div>
                        <label className={labelClasses}>Preferred Contact</label>
                        <div className="flex gap-5 mt-1">
                          {contactMethods.map((m) => (
                            <label key={m} className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="contact" value={m} className="w-4 h-4 accent-[#c8964e]" />
                              <span className="text-[14px] text-white/50 hover:text-white/80 transition-colors">{m}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <button type="submit" className="w-full rounded-xl bg-[#c8964e] hover:bg-[#b07d3a] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_28px_rgba(200,150,78,0.45)] hover:scale-[1.01] tracking-wide">
                        Request Home Improvement Quote
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
