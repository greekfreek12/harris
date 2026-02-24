const projectPlaceholders = [
  "Bathroom Remodel",
  "Kitchen Upgrade",
  "Custom Tile Work",
  "Flooring Installation",
  "Interior Finishing",
  "Plumbing Project",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Browse our latest home improvement and plumbing projects across Birmingham.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectPlaceholders.map((project, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-xl bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-stone-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="mt-3 text-sm font-medium text-stone-400">{project}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 translate-y-full transition-transform group-hover:translate-y-0">
                <p className="text-white font-semibold text-sm">{project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
