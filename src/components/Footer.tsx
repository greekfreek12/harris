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
    <footer className="bg-nav-bg text-stone-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Harris Plumbing & Home Improvements
            </h3>
            <p className="mt-3 text-stone-400 leading-relaxed max-w-md">
              Premium home improvements and plumbing services in Birmingham, Alabama. 
              Quality craftsmanship, clear communication, and clean work from start to finish.
            </p>
            <div className="mt-6 space-y-2">
              <p className="flex items-center gap-2 text-stone-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Birmingham, Alabama
              </p>
              <a href="tel:2058295282" className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                205-829-5282
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-stone-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-stone-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-stone-400 hover:text-white transition-colors">Home Improvements</Link>
              </li>
              <li>
                <Link href="/#plumbing" className="text-sm text-stone-400 hover:text-white transition-colors">Plumbing</Link>
              </li>
              <li>
                <Link href="/#projects" className="text-sm text-stone-400 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-stone-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800">
          <p className="text-sm text-stone-500 text-center">
            &copy; {new Date().getFullYear()} Harris Plumbing & Home Improvements. All rights reserved. Birmingham, Alabama.
          </p>
        </div>
      </div>
    </footer>
  );
}
