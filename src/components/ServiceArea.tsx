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

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-full border border-[#e2ddd6] bg-white px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:border-[#c8964e]/40 hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-[#c8964e] shrink-0"
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
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="mt-8 text-center text-[13px] text-[#9e9690]">
            Don&apos;t see your city?{" "}
            <a href="tel:2058295282" className="text-[#c8964e] font-semibold hover:underline">
              Give us a call
            </a>{" "}
            — we may still be able to help.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
