import { siteConfig } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-3xl font-bold text-teal-800 sm:text-4xl">
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
