const projectPlaceholders = [
  { name: "Bathroom Remodel", tag: "Remodel" },
  { name: "Kitchen Upgrade", tag: "Kitchen" },
  { name: "Custom Tile Work", tag: "Tile" },
  { name: "Flooring Installation", tag: "Flooring" },
  { name: "Interior Finishing", tag: "Interior" },
  { name: "Plumbing Project", tag: "Plumbing" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-background grain-overlay scroll-mt-24">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">Portfolio</p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1]">
              Recent Projects
            </h2>
          </div>
          <p className="text-[16px] text-muted leading-relaxed max-w-md">
            Browse our latest home improvement and plumbing projects across Birmingham.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectPlaceholders.map((project, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-neutral-100 to-neutral-200 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto' : 'aspect-[4/3]'
              }`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-14 h-14 rounded-full border border-neutral-300/50 flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="text-[13px] font-medium text-neutral-400">{project.name}</p>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-2">{project.tag}</span>
                <p className="text-white font-semibold text-[15px]">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
