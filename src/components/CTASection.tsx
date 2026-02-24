import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-nav-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get a Clear Quote and a Clean Timeline
        </h2>
        <p className="mt-4 text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
          No hidden fees, no surprises. Just honest pricing and quality work from a team you can trust.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-hover shadow-sm hover:shadow-md"
          >
            Request Your Free Estimate
          </Link>
          <a
            href="tel:2058295282"
            className="inline-flex items-center justify-center rounded-lg border-2 border-stone-600 px-8 py-4 text-base font-semibold text-white transition-all hover:border-stone-400 hover:bg-white/5"
          >
            Call 205-829-5282
          </a>
        </div>
      </div>
    </section>
  );
}
