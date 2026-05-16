import { siteConfig } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white py-12 sm:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:gap-6 sm:px-6 lg:px-8">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-2xl font-bold text-brand-800 sm:text-3xl lg:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
