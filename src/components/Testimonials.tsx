const testimonials = [
  {
    name: "Sarah M.",
    location: "Hoover, AL",
    text: "Harris completely transformed our master bathroom. The tile work is stunning, and the crew was professional and respectful throughout the entire project. Highly recommend for any remodel.",
    project: "Bathroom Remodel",
  },
  {
    name: "James T.",
    location: "Vestavia Hills, AL",
    text: "We had a plumbing emergency on a Sunday and they responded quickly. Fixed the issue fast and at a fair price. Now they're our go-to for all plumbing and home improvement needs.",
    project: "Emergency Plumbing",
  },
  {
    name: "Michelle R.",
    location: "Mountain Brook, AL",
    text: "Our kitchen remodel exceeded expectations. Clear communication throughout, stayed on budget, and the finished result looks incredible. True craftsmen who care about their work.",
    project: "Kitchen Upgrade",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-section-alt scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-card-bg border border-border p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted mt-0.5">{testimonial.location} &middot; {testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
