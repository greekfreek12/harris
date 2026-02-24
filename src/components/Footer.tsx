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
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-display text-[18px] text-white">Harris</span>
            <span className="text-[13px] text-white/30 font-light ml-1">Plumbing</span>
            <p className="mt-4 text-[13px] text-white/30 leading-relaxed max-w-xs">
              Premium home improvements and plumbing services in Birmingham, Alabama.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s} className="text-[13px] text-white/25">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/25 hover:text-white/60 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:2058295282" className="block text-[13px] text-white/25 hover:text-[#c8964e] transition-colors">
                (205) 829-5282
              </a>
              <p className="text-[13px] text-white/25">Birmingham, Alabama</p>
              <p className="text-[13px] text-white/25">Licensed &amp; Insured</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Harris Plumbing & Home Improvements
          </p>
          <p className="text-[11px] text-white/15">Birmingham, AL</p>
        </div>
      </div>
    </footer>
  );
}
