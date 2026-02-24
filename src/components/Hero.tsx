import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Serving Birmingham, Alabama &bull; Licensed & Insured
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
              Premium Home Improvements & Plumbing in Birmingham
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted max-w-xl">
              Quality craftsmanship, clear communication, and clean work from start to finish. 
              Remodels, repairs, and everything in between.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
              >
                Request a Remodel Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-foreground px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-foreground hover:text-white"
              >
                Book Plumbing Service
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center overflow-hidden shadow-lg">
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-stone-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="mt-4 text-sm text-stone-400 font-medium">Featured Project Image</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-stone-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
