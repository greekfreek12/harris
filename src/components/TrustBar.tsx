"use client";

const badges = [
  { label: "Licensed & Insured" },
  { label: "Master Plumber" },
  { label: "Free Estimates" },
  { label: "Birmingham, AL" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#111111] py-6">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((badge, i) => (
            <div key={badge.label} className="flex items-center gap-x-8">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#c8964e]" />
                <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-wide">
                  {badge.label}
                </span>
              </div>
              {i < badges.length - 1 && (
                <span className="hidden sm:block w-px h-4 bg-white/15" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
