import ScrollReveal from "./ScrollReveal";

const pricingCards = [
  {
    name: "Original Site Build",
    price: "$250",
    accent: "border-white/12",
    items: [
      "Full website rebuild",
      "Clean, modern layout",
      "Mobile-friendly design",
    ],
  },
  {
    name: "Website Growth Upgrade",
    price: "$600",
    accent: "border-white/12",
    items: [
      "New logo design",
      "Chat widget so visitors can message instantly",
      "Lead capture contact form",
      "No monthly fee for the chat/contact system",
    ],
  },
  {
    name: "Business Growth Package",
    price: "$1,000",
    accent: "border-[#c8964e]/45 shadow-[0_24px_70px_rgba(200,150,78,0.16)]",
    items: [
      "Everything in the Website Growth Upgrade",
      "2 months of social media posts",
      "2 months focused on building the brand",
      "Free Google Ads setup in the future",
    ],
    note: "If continued after the first 2 months, ongoing services are $299/month.",
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
          <h2 className="font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
            Simple website pricing.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/68 sm:text-[16px]">
            Three clean options, laid out clearly.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingCards.map((card, index) => (
            <ScrollReveal key={card.name} className="h-full" delay={index * 90}>
              <article
                className={`relative h-full overflow-hidden rounded-[34px] border bg-white/[0.045] p-7 backdrop-blur-sm sm:p-8 ${card.accent}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8964e]/14 via-transparent to-transparent" />
                <div className="relative flex h-full flex-col">
                  <h3 className="font-display text-[2rem] tracking-tight text-white sm:text-[2.25rem]">
                    {card.name}
                  </h3>

                  <div className="mt-6 border-y border-white/10 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/42">
                      Price
                    </p>
                    <p className="mt-2 font-display text-5xl text-[#f0d09a]">{card.price}</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-white/78">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {card.note ? (
                    <p className="mt-6 rounded-[22px] border border-[#c8964e]/20 bg-[#c8964e]/8 p-4 text-[13px] leading-relaxed text-white/72">
                      {card.note}
                    </p>
                  ) : null}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
