const projects = [
  { title: "Master Bathroom Remodel", location: "Mountain Brook, AL", tag: "Bathroom", image: "/images/svc-bathroom.jpg" },
  { title: "Modern Kitchen Renovation", location: "Vestavia Hills, AL", tag: "Kitchen", image: "/images/svc-kitchen.jpg" },
  { title: "Custom Tile Shower", location: "Hoover, AL", tag: "Tile", image: "/images/svc-flooring.jpg" },
  { title: "Water Heater Replacement", location: "Birmingham, AL", tag: "Plumbing", image: "/images/svc-waterheater.jpg" },
  { title: "Full Home Plumbing", location: "Homewood, AL", tag: "Plumbing", image: "/images/svc-plumbing.jpg" },
  { title: "Emergency Pipe Repair", location: "Trussville, AL", tag: "Emergency", image: "/images/svc-emergency.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-28 bg-[#f8f6f3] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">Our Work</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Featured Projects
          </h2>
          <p className="mt-4 text-[15px] text-[#8a817a] max-w-md mx-auto leading-relaxed">
            Real results from real Birmingham homes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#e8e3dc] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-[#c8964e]/90 backdrop-blur-sm rounded-full px-3 py-1">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-[#1a1a1a] tracking-tight">{project.title}</h3>
                <p className="text-[12px] text-[#8a817a] mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
