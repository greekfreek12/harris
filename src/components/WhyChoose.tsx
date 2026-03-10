import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const proofPoints = [
  {
    title: "Master Plumber-Led Work",
    text: "Every project is led with real field experience, code-aware decisions, and workmanship built to hold up long after the job is done.",
  },
  {
    title: "Clear Communication",
    text: "You get honest estimates, straightforward timelines, and a team that actually keeps you informed instead of leaving you guessing.",
  },
  {
    title: "High-Value Projects Done Right",
    text: "From repipes and sewer work to remodels and major renovations, Harris takes on the kind of jobs where details and accountability matter.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <ScrollReveal direction="left" scale={false}>
          <div className="relative overflow-hidden rounded-[28px] border border-[#e8e3dc] bg-[#efe9df] shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/why-choose-us.jpg"
              alt="Interior renovation and finish work by Harris Plumbing and Home Improvements"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e8b474]">
                Birmingham, Alabama
              </p>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/92">
                Built for homeowners who care about quality, responsiveness, and getting the job finished the right way.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" scale={false}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e]">
              Why Choose Harris
            </p>
            <h2 className="mt-5 font-display text-3xl tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
              Trusted for Plumbing, Remodels, and the Jobs That Cannot Be Half-Done
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-[#5e5852] sm:text-[16px]">
              Harris Plumbing & Home Improvements is built around the kind of work that carries real risk if it is rushed:
              water lines, sewer lines, remodels, additions, and whole-home improvements. That is why homeowners call when they
              want clear communication, strong craftsmanship, and a team that treats the finished result like it matters.
            </p>

            <div className="mt-8 space-y-4">
              {proofPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-[#e8e3dc] bg-[#f8f6f3] px-5 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c8964e] text-[13px] font-semibold text-white">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-[#1a1a1a]">{point.title}</h3>
                      <p className="mt-2 text-[14px] leading-[1.75] text-[#5e5852] sm:text-[15px]">{point.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
