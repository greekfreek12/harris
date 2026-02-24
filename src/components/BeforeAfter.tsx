const projects = [
  {
    title: "Master Bathroom Remodel",
    location: "Mountain Brook, AL",
    tag: "Bathroom",
    beforeImg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Modern Kitchen Renovation",
    location: "Vestavia Hills, AL",
    tag: "Kitchen",
    beforeImg: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Custom Tile Shower",
    location: "Hoover, AL",
    tag: "Tile",
    beforeImg: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Full Home Plumbing",
    location: "Birmingham, AL",
    tag: "Plumbing",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BeforeAfter() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#111111] scroll-mt-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8964e]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">Featured Work</p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
              Project Gallery
            </h2>
          </div>
          <p className="text-[15px] text-neutral-400 leading-relaxed max-w-sm">
            Real results from real Birmingham homes. Browse our latest transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-neutral-800 transition-all duration-500 hover:border-gold/30"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.beforeImg}')` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-2.5 py-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-200">Before</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.afterImg}')` }}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-3 left-3 bg-gold/90 backdrop-blur-sm rounded-md px-2.5 py-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">After</span>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-[#1a1a1a]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">{project.title}</h3>
                    <p className="text-[12px] text-neutral-500 mt-0.5">{project.location}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-1">
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
