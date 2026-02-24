const testimonials = [
  {
    name: "Sarah M.",
    location: "Hoover, AL",
    text: "Harris completely transformed our master bathroom. The tile work is stunning, and the crew was professional and respectful throughout the entire project. Highly recommend for any remodel.",
    project: "Bathroom Remodel",
    initials: "SM",
  },
  {
    name: "James T.",
    location: "Vestavia Hills, AL",
    text: "We had a plumbing emergency on a Sunday and they responded quickly. Fixed the issue fast and at a fair price. Now they're our go-to for all plumbing and home improvement needs.",
    project: "Emergency Plumbing",
    initials: "JT",
  },
  {
    name: "Michelle R.",
    location: "Mountain Brook, AL",
    text: "Our kitchen remodel exceeded expectations. Clear communication throughout, stayed on budget, and the finished result looks incredible. True craftsmen who care about their work.",
    project: "Kitchen Upgrade",
    initials: "MR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#111111] grain-overlay scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(200,150,78,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gold">Testimonials</p>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-xl bg-[#1a1a1a] border border-neutral-800 p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(200,150,78,0.08)]"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-300 group-hover:via-gold/30" />
              
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold fill-gold" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-[15px] text-neutral-300 leading-[1.75] italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-7 pt-5 border-t border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="text-[11px] font-bold text-gold tracking-wider">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[12px] text-neutral-500">{testimonial.location} &middot; {testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
