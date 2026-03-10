import ScrollReveal from "./ScrollReveal";

const originalAgreement = {
  title: "Website Rebuild",
  subtitle: "Original agreement",
  total: "$500",
  paid: "$250",
  remaining: "$250",
  items: [
    "Rebuild of the existing site",
    "Current deposit already applied",
  ],
};

const packageOptions = [
  {
    name: "Website Growth Upgrade",
    total: "$850",
    paid: "$250",
    remaining: "$600",
    accent: "from-[#e0b878]/30 via-[#c8964e]/14 to-transparent",
    ring: "border-white/12",
    badge: "Upgrade option",
    items: [
      "New logo design",
      "Instant chat widget for site visitors",
      "Lead capture contact form",
      "No monthly fee for the chat/contact system",
    ],
  },
  {
    name: "Business Growth Package",
    total: "$1,250",
    paid: "$250",
    remaining: "$1,000",
    accent: "from-[#f3d4a2]/45 via-[#c8964e]/18 to-transparent",
    ring: "border-[#c8964e]/45 shadow-[0_24px_70px_rgba(200,150,78,0.16)]",
    badge: "Best value",
    items: [
      "Everything in the Website Growth Upgrade",
      "2 months of Google Review Automation",
      "2 months of Local SEO optimization",
      "Free Google Ads setup in the future",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mt-0.5 h-4 w-4 flex-none text-[#c8964e]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingProposal() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#111111] py-24 text-white lg:py-28 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,150,78,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(200,150,78,0.12),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8964e]/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#c8964e]">
            Proposal PBD3-LJN0T
          </p>
          <h2 className="font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">
            Clean pricing, with the $250 already applied.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/68 sm:text-[16px]">
            This keeps the package totals simple and makes the remaining balance
            immediately clear for each option.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={80}>
          <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:grid-cols-3 sm:p-6">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Paid to date
              </p>
              <p className="mt-3 font-display text-4xl text-white">$250</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                Credited toward the original rebuild or either upgrade package.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Upgrade remaining
              </p>
              <p className="mt-3 font-display text-4xl text-white">$600</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                Remaining balance for the Website Growth Upgrade.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Business Growth remaining
              </p>
              <p className="mt-3 font-display text-4xl text-white">$1,000</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                Remaining balance for the top growth package.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <ScrollReveal className="h-full" delay={140}>
            <article className="relative h-full overflow-hidden rounded-[34px] border border-white/10 bg-[#161616] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c8964e] via-[#f0d09a] to-[#c8964e]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e]">
                {originalAgreement.subtitle}
              </p>
              <h3 className="mt-4 font-display text-[2rem] tracking-tight text-white sm:text-[2.35rem]">
                {originalAgreement.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/65">
                The starting scope stays intact. If he wants to keep the rebuild
                only, the current payment covers half and leaves a final balance
                of $250.
              </p>

              <ul className="mt-8 space-y-3">
                {originalAgreement.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-white/76">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                    Total
                  </p>
                  <p className="mt-2 font-display text-[2rem] text-white">{originalAgreement.total}</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                    Paid
                  </p>
                  <p className="mt-2 font-display text-[2rem] text-white">{originalAgreement.paid}</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                    Remaining
                  </p>
                  <p className="mt-2 font-display text-[2rem] text-[#f0d09a]">{originalAgreement.remaining}</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {packageOptions.map((option, index) => (
              <ScrollReveal key={option.name} className="h-full" delay={220 + index * 90}>
                <article
                  className={`relative h-full overflow-hidden rounded-[34px] border bg-white/[0.045] p-7 backdrop-blur-sm sm:p-8 ${option.ring}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.accent}`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e]">
                          {option.badge}
                        </p>
                        <h3 className="mt-4 font-display text-[2rem] tracking-tight text-white sm:text-[2.35rem]">
                          {option.name}
                        </h3>
                      </div>
                      <div className="rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                        Total {option.total}
                      </div>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {option.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-white/78">
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                          Total
                        </p>
                        <p className="mt-2 font-display text-[1.85rem] text-white">{option.total}</p>
                      </div>
                      <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                          Paid
                        </p>
                        <p className="mt-2 font-display text-[1.85rem] text-white">{option.paid}</p>
                      </div>
                      <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                          Remaining
                        </p>
                        <p className="mt-2 font-display text-[1.85rem] text-[#f0d09a]">{option.remaining}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
