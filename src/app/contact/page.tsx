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

const timelines = [
  "ASAP",
  "2–4 Weeks",
  "1–3 Months",
  "Planning Stage",
];

const contactMethods = ["Call", "Text", "Email"];

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType>("quick");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-card-bg border border-border p-12 shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-foreground">Thank You!</h2>
            <p className="mt-3 text-muted leading-relaxed">
              We&apos;ll respond within 1 business day. For urgent plumbing issues call{" "}
              <a href="tel:2058295282" className="font-semibold text-accent hover:underline">
                205-829-5282
              </a>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get in Touch</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Request a Quote in Birmingham, Alabama
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you with a clear estimate.
          </p>
        </div>

        <div className="mt-10 flex rounded-lg border border-border bg-section-alt p-1">
          <button
            onClick={() => setActiveForm("quick")}
            className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-all ${
              activeForm === "quick"
                ? "bg-card-bg text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            Quick Contact
          </button>
          <button
            onClick={() => setActiveForm("consultation")}
            className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-all ${
              activeForm === "consultation"
                ? "bg-card-bg text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            Request a Consultation
          </button>
        </div>

        {activeForm === "quick" ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  placeholder="(205) 555-0123"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Project Type</label>
              <select
                required
                className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Preferred Contact Method</label>
              <div className="flex gap-4">
                {contactMethods.map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contactMethod" value={method} className="accent-accent" />
                    <span className="text-sm text-muted">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-hover shadow-sm hover:shadow-md"
            >
              Send Message
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Project Type</label>
              <select
                required
                className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Zip Code</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  placeholder="35201"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Budget Range</label>
                <select
                  required
                  className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Timeline</label>
              <select
                required
                className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              >
                <option value="">Select timeline</option>
                {timelines.map((tl) => (
                  <option key={tl} value={tl}>{tl}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Photo Upload <span className="text-muted font-normal">(optional)</span>
              </label>
              <div className="rounded-lg border-2 border-dashed border-border bg-section-alt p-8 text-center transition-colors hover:border-stone-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p className="mt-2 text-sm text-muted">Drag photos here or click to upload</p>
                <input type="file" accept="image/*" multiple className="hidden" />
              </div>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-sm font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    placeholder="(205) 555-0123"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-sm text-foreground placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-hover shadow-sm hover:shadow-md"
            >
              Request Consultation
            </button>
          </form>
        )}

        <div className="mt-12 rounded-xl bg-section-alt border border-border p-6 text-center">
          <p className="text-sm text-muted">
            Need immediate help? Call us directly at{" "}
            <a href="tel:2058295282" className="font-semibold text-accent hover:underline">
              205-829-5282
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
