import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mainTreatments } from "@/lib/treatments";

export function TreatmentCards() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Treatments
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Specialized care for ear, nose, and throat conditions
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainTreatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/${treatment.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-teal-200 hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-slate-900">
                {treatment.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {treatment.shortDescription}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                Know More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
