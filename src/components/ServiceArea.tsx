import ScrollReveal from "./ScrollReveal";

const areas = [
  "Birmingham",
  "Hoover",
  "Vestavia Hills",
  "Homewood",
  "Mountain Brook",
  "Trussville",
  "Bessemer",
  "Pelham",
  "Alabaster",
  "Helena",
  "Fultondale",
  "Gardendale",
  "Irondale",
  "Center Point",
  "Leeds",
  "Hueytown",
];

const mapsQuery = "Birmingham, AL";
const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=10&output=embed`;

export default function ServiceArea() {
  return (
    <section className="bg-[#f8f6f3] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">
            Where We Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Our Service Area
          </h2>
          <p className="mt-4 text-[16px] text-[#6b6560] max-w-md mx-auto leading-relaxed">
            Proudly serving Birmingham and the surrounding communities throughout the greater metro area.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal delay={100}>
            <div className="rounded-[28px] border border-[#e2ddd6] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c8964e] text-white shadow-[0_6px_20px_rgba(200,150,78,0.28)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.795 3.43-8.11C19.717 5.637 16.246 2 12 2S4.283 5.638 4.283 9.217c0 3.315 1.486 6.032 3.43 8.11a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 12.25a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c8964e]">
                    Birmingham Metro
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1a1a1a]">
                    Fast coverage across the greater service area
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-full border border-[#e2ddd6] bg-[#f8f6f3] px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all hover:border-[#c8964e]/40 hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 shrink-0 text-[#c8964e]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.795 3.43-8.11C19.717 5.637 16.246 2 12 2S4.283 5.638 4.283 9.217c0 3.315 1.486 6.032 3.43 8.11a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 12.25a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[13px] font-medium text-[#1a1a1a]">{area}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[13px] text-[#9e9690]">
                Don&apos;t see your city?{" "}
                <a href="tel:2058295282" className="font-semibold text-[#c8964e] hover:underline">
                  Give us a call
                </a>{" "}
                and we can confirm coverage for your project.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180} direction="right" scale={false}>
            <div className="overflow-hidden rounded-[28px] border border-[#e2ddd6] bg-white shadow-[0_18px_44px_rgba(0,0,0,0.08)]">
              <iframe
                title="Harris Plumbing and Home Improvements service area map"
                src={mapsSrc}
                className="h-[320px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div className="border-t border-[#ede8e1] bg-[#fcfaf7] px-6 py-5 sm:px-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#c8964e]">Primary Coverage</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5e5852]">
                  Based in the Birmingham area and serving nearby communities for plumbing, sewer work, remodels, and larger home improvement projects.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
