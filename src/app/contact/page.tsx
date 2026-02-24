"use client";

import { useState } from "react";

type FormType = "quick" | "consultation";

const projectTypes = [
  "Bathroom Remodel",
  "Kitchen Remodel",
  "General Home Improvement",
  "Plumbing Repair",
  "Water Heater",
  "Emergency",
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

const inputClasses = "w-full rounded-xl border border-[#e2ddd6] bg-white px-4 py-3.5 text-[14px] text-[#1a1a1a] placeholder:text-[#b5afa8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c8964e]/20 focus:border-[#c8964e]";
const labelClasses = "block text-[13px] font-semibold text-[#1a1a1a] mb-2 tracking-wide";

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType>("quick");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f3] px-5">
        <div className="max-w-md w-full text-center animate-scale-in">
          <div className="rounded-2xl bg-white border border-[#e2ddd6] p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="mx-auto w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-[0_4px_15px_rgba(200,150,78,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="mt-6 font-display text-3xl text-[#1a1a1a]">Thank You</h2>
            <p className="mt-4 text-[15px] text-[#6b6560] leading-relaxed">
              We&apos;ll respond within 1 business day. For urgent plumbing issues call{" "}
              <a href="tel:2058295282" className="font-semibold text-[#c8964e] hover:underline">
                205-829-5282
              </a>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full gold-gradient px-7 py-3 text-[14px] font-semibold text-white shadow-[0_2px_12px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_4px_20px_rgba(200,150,78,0.45)] hover:scale-[1.02]"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8964e]/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#c8964e]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#c8964e]">Get in Touch</p>
            <div className="h-px w-12 bg-[#c8964e]" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
            Request a Quote in<br />Birmingham, Alabama
          </h1>
          <p className="mt-5 text-[16px] text-white/60 leading-relaxed max-w-md mx-auto">
            Tell us about your project and we&apos;ll get back to you with a clear estimate.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8 -mt-8">
        <div className="rounded-2xl bg-white border border-[#e2ddd6] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="flex border-b border-[#e2ddd6]">
            <button
              onClick={() => setActiveForm("quick")}
              className={`flex-1 py-4 text-[13px] font-semibold tracking-wide transition-all relative ${
                activeForm === "quick" ? "text-[#1a1a1a]" : "text-[#8a817a] hover:text-[#1a1a1a]"
              }`}
            >
              Quick Contact
              {activeForm === "quick" && (
                <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] gold-gradient rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveForm("consultation")}
              className={`flex-1 py-4 text-[13px] font-semibold tracking-wide transition-all relative ${
                activeForm === "consultation" ? "text-[#1a1a1a]" : "text-[#8a817a] hover:text-[#1a1a1a]"
              }`}
            >
              Request a Consultation
              {activeForm === "consultation" && (
                <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] gold-gradient rounded-full" />
              )}
            </button>
          </div>

          <div className="p-8 sm:p-10">
            {activeForm === "quick" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Name</label>
                    <input type="text" required className={inputClasses} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelClasses}>Phone</label>
                    <input type="tel" required className={inputClasses} placeholder="(205) 555-0123" />
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Email</label>
                  <input type="email" required className={inputClasses} placeholder="you@example.com" />
                </div>
                <div>
                  <label className={labelClasses}>Project Type</label>
                  <select required className={inputClasses}>
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Message</label>
                  <textarea rows={4} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
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
                <button type="submit" className="w-full rounded-xl gold-gradient px-6 py-4 text-[15px] font-semibold text-white shadow-[0_4px_15px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_25px_rgba(200,150,78,0.45)] hover:scale-[1.01] tracking-wide">
                  Send Message
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClasses}>Project Type</label>
                  <select required className={inputClasses}>
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Zip Code</label>
                    <input type="text" required className={inputClasses} placeholder="35201" />
                  </div>
                  <div>
                    <label className={labelClasses}>Budget Range</label>
                    <select required className={inputClasses}>
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
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
                <div>
                  <label className={labelClasses}>Photo Upload <span className="text-[#8a817a] font-normal">(optional)</span></label>
                  <div className="rounded-xl border-2 border-dashed border-[#e2ddd6] bg-[#faf8f5] p-8 text-center transition-all duration-200 hover:border-[#c8964e]/40 cursor-pointer">
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#c8964e]/10 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8964e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <p className="text-[13px] text-[#8a817a]">Drag photos here or click to upload</p>
                    <input type="file" accept="image/*" multiple className="hidden" />
                  </div>
                </div>
                <div className="border-t border-[#e2ddd6] pt-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8a817a] mb-5">Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Name</label>
                      <input type="text" required className={inputClasses} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={labelClasses}>Phone</label>
                      <input type="tel" required className={inputClasses} placeholder="(205) 555-0123" />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className={labelClasses}>Email</label>
                    <input type="email" required className={inputClasses} placeholder="you@example.com" />
                  </div>
                </div>
                <button type="submit" className="w-full rounded-xl gold-gradient px-6 py-4 text-[15px] font-semibold text-white shadow-[0_4px_15px_rgba(200,150,78,0.3)] transition-all hover:shadow-[0_6px_25px_rgba(200,150,78,0.45)] hover:scale-[1.01] tracking-wide">
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-8 mb-20 rounded-xl bg-[#111111] border border-neutral-800 p-6 text-center">
          <p className="text-[14px] text-neutral-400">
            Need immediate help? Call us directly at{" "}
            <a href="tel:2058295282" className="font-semibold text-[#c8964e] hover:underline">205-829-5282</a>
          </p>
        </div>
      </div>
    </div>
  );
}
