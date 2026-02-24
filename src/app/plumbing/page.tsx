import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing Services | Harris Plumbing & Home Improvements",
  description:
    "Master-level plumbing services in Birmingham, Alabama. General plumbing, water heater installation, emergency repairs, and more. Licensed & insured. Call 205-829-5282.",
};

const services = [
  {
    title: "General Plumbing",
    desc: "From fixture installations and faucet replacements to full re-pipes and drain line repairs — we handle every aspect of residential plumbing with precision. Our master plumber leads every job, ensuring code-compliant work that lasts.",
    image: "/images/svc-plumbing.jpg",
  },
  {
    title: "Water Heaters",
    desc: "We install, replace, and service both traditional tank and tankless water heaters. Whether you need a same-day swap or a new high-efficiency unit sized for your home, we get it done right — with clean, permitted work every time.",
    image: "/images/svc-waterheater.jpg",
  },
  {
    title: "Emergency Service",
    desc: "Burst pipes, slab leaks, backed-up sewer lines — when it can't wait, neither do we. We offer rapid-response emergency plumbing across Birmingham and surrounding communities, with honest pricing even on nights and weekends.",
    image: "/images/svc-emergency.jpg",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/svc-plumbing.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#c8964e]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e]">
              Master Plumber-Led
            </p>
            <span className="h-px w-8 bg-[#c8964e]" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
            Plumbing Services
          </h1>
          <p className="mt-5 text-[16px] sm:text-[18px] text-white font-medium leading-[1.7] max-w-2xl mx-auto">
            Licensed, insured, and built on decades of hands-on experience. We deliver reliable plumbing for homes across Birmingham and the surrounding area.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.title}
                className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center ${i > 0 ? "mt-20 md:mt-28" : ""}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <div
                      className="aspect-[4/3] bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-[28px] sm:text-[34px] text-[#1a1a1a] tracking-tight leading-[1.15]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[15px] text-[#6b6560] leading-[1.8]">
                    {service.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#c8964e] transition-colors hover:text-[#b07d3a]"
                  >
                    Request This Service
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
            Need a Plumber in Birmingham?
          </h2>
          <p className="mt-5 text-[16px] text-white font-medium leading-relaxed max-w-xl mx-auto">
            Get a clear estimate and a clean timeline. No surprises, no upsells — just honest work from a licensed team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8964e] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_4px_24px_rgba(200,150,78,0.35)] transition-all duration-200 hover:bg-[#b07d3a] hover:shadow-[0_6px_32px_rgba(200,150,78,0.5)] hover:scale-[1.02]"
            >
              Request a Free Estimate
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:2058295282"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-sm px-8 py-4 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-white/[0.12] hover:border-white/40"
            >
              Call (205) 829-5282
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
