import Image from "next/image";

const projects = [
  { image: "/images/svc-bathroom.jpg", title: "Master Bathroom Remodel", service: "Bathroom Renovation" },
  { image: "/images/svc-kitchen.jpg", title: "Modern Kitchen Renovation", service: "Kitchen Remodeling" },
  { image: "/images/svc-flooring.jpg", title: "Custom Tile and Flooring", service: "Flooring and Tile" },
  { image: "/images/svc-waterheater.jpg", title: "Water Heater Replacement", service: "Water Heater Service" },
  { image: "/images/svc-plumbing-new.jpg", title: "Full Home Plumbing", service: "Residential Plumbing" },
  { image: "/images/svc-emergency.jpg", title: "Emergency Pipe Repair", service: "Emergency Plumbing" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-28 bg-[#fcfaf7] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">Our Work</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight leading-[1.1]">
            Recent Projects
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] sm:text-[16px] leading-[1.8] text-[#5d554d]">
            Real projects completed by Harris Plumbing and Home Improvements across Birmingham, from bathroom and kitchen remodels to full-service residential plumbing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-9 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="overflow-hidden rounded-[26px] border border-[#ddd4c8] bg-white shadow-[0_16px_40px_rgba(17,17,17,0.12)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1600}
                  height={1200}
                  className="w-full aspect-[5/4] sm:aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <p className="font-display text-[24px] sm:text-[28px] leading-[1.15] text-[#1f1a16]">{project.title}</p>
                <p className="shrink-0 rounded-full border border-[#d8d0c4] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7f7468]">
                  {project.service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
