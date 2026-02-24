import Link from "next/link";

const services = [
  "Bathroom Remodels",
  "Kitchen Upgrades",
  "Flooring & Tile",
  "General Plumbing",
  "Water Heater Installation",
  "Emergency Service",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-neutral-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(200,150,78,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-md gold-gradient flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <div>
                <span className="text-[15px] font-semibold text-white">Harris Plumbing</span>
                <span className="text-[15px] text-neutral-500 font-light ml-1">& Home Improvements</span>
              </div>
            </div>
            <p className="text-[14px] text-neutral-500 leading-[1.7] max-w-sm">
              Premium home improvements and plumbing services in Birmingham, Alabama. 
              Quality craftsmanship from start to finish.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-400">Birmingham, Alabama</span>
              </div>
              <a href="tel:2058295282" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover:bg-gold/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-[13px] text-neutral-400 group-hover:text-white transition-colors">205-829-5282</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[13px] text-neutral-500 hover:text-white transition-colors cursor-default">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#projects" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-neutral-600">
            &copy; {new Date().getFullYear()} Harris Plumbing & Home Improvements. All rights reserved.
          </p>
          <p className="text-[12px] text-neutral-700">
            Birmingham, Alabama
          </p>
        </div>
      </div>
    </footer>
  );
}
