import Link from "next/link";

const serviceList = [
  "Bathroom Remodels",
  "Kitchen Renovations",
  "Flooring & Tile",
  "Custom Carpentry",
  "General Plumbing",
  "Water Heaters",
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-full bg-[#c8964e] flex items-center justify-center text-[11px] font-bold text-white">
                HP
              </div>
              <div>
                <p className="font-display text-[16px] text-white leading-tight">Harris Plumbing</p>
                <p className="text-[11px] text-white/35">&amp; Home Improvements</p>
              </div>
            </div>
            <p className="text-[13px] text-white/45 leading-relaxed max-w-xs">
              Premium home improvements and plumbing services in Birmingham, Alabama.
            </p>
            <a
              href="tel:2058295282"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8964e]/40 px-4 py-2 text-[13px] font-semibold text-[#c8964e] hover:bg-[#c8964e]/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (205) 829-5282
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceList.map((s) => (
                <li key={s} className="text-[13px] text-white/50">{s}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35 mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:2058295282" className="block text-[13px] text-white/50 hover:text-[#c8964e] transition-colors">
                (205) 829-5282
              </a>
              <p className="text-[13px] text-white/50">Birmingham, Alabama</p>
              <p className="text-[13px] text-white/50">Licensed &amp; Insured</p>
              <Link
                href="/contact"
                className="mt-2 inline-block text-[13px] font-semibold text-[#c8964e] hover:underline transition-colors"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/25">
            &copy; {new Date().getFullYear()} Harris Plumbing &amp; Home Improvements. All rights reserved.
          </p>
          <p className="text-[11px] text-white/25">Birmingham, AL</p>
        </div>
      </div>
    </footer>
  );
}
