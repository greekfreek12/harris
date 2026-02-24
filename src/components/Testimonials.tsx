const reviews = [
  {
    name: "Sarah M.",
    location: "Mountain Brook",
    text: "Harris completely transformed our master bathroom. The tile work is flawless and they finished on schedule. Couldn\u2019t be happier with the results.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Vestavia Hills",
    text: "Called for an emergency leak on a Saturday morning and they were here within the hour. Professional, fair pricing, and fixed it right the first time.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Hoover",
    text: "We hired Harris for our kitchen remodel and the quality exceeded our expectations. The crew was respectful, clean, and the craftsmanship speaks for itself.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-28 bg-[#111111] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#c8964e] mb-4">What Our Clients Say</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
            5-Star Reviews
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8964e] fill-[#c8964e]" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-[14px] text-white/50 ml-2 font-medium">5.0 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-7 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.1]"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#c8964e] fill-[#c8964e]" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-white/60 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <p className="text-[14px] font-semibold text-white">{review.name}</p>
                <p className="text-[12px] text-white/30 mt-0.5">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
