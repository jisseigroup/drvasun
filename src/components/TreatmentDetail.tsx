import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  AlertCircle,
  ClipboardList,
} from "lucide-react";
import type { Treatment } from "@/lib/treatments";
import { getEarSubTreatments, getRelatedTreatments } from "@/lib/treatments";
import { CTA } from "./CTA";
import { siteConfig } from "@/lib/site";

type TreatmentDetailProps = {
  treatment: Treatment;
};

export function TreatmentDetail({ treatment }: TreatmentDetailProps) {
  const earSubs =
    treatment.slug === "ear-treatment" ? getEarSubTreatments() : [];
  const related = getRelatedTreatments(treatment.slug).filter(
    (t) => t.slug !== treatment.slug,
  );

  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50/80 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-teal-700">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-lg leading-relaxed text-slate-600">
              {treatment.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-slate-900">
              <Stethoscope className="h-6 w-6 text-teal-600" />
              Overview
            </h2>
            <div className="prose-medical mt-5 space-y-4">
              {treatment.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Conditions We Treat
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {treatment.conditions.map((condition) => (
                <div
                  key={condition.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">
                    {condition.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {condition.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-slate-900">
                <AlertCircle className="h-5 w-5 text-teal-600" />
                Common Symptoms
              </h2>
              <ul className="mt-5 space-y-3">
                {treatment.symptoms.map((symptom) => (
                  <li
                    key={symptom}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-slate-900">
                <ClipboardList className="h-5 w-5 text-teal-600" />
                Treatment Options
              </h2>
              <ul className="mt-5 space-y-3">
                {treatment.treatments.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-teal-100 bg-teal-50/60 p-8">
            <h2 className="font-serif text-xl font-semibold text-teal-900">
              When to See a Doctor
            </h2>
            <ul className="mt-4 space-y-2">
              {treatment.whenToVisit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-teal-900/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {earSubs.length > 0 && (
            <div className="mt-14">
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Specialized Ear Treatments
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {earSubs.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/${sub.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-sm"
                  >
                    <span className="font-medium text-slate-800">
                      {sub.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-teal-600 transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Related Treatments
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.slice(0, 3).map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/${rel.slug}`}
                      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-sm"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-slate-800 group-hover:text-teal-800">
                          {rel.title}
                        </span>
                        <span className="mt-1 block text-xs text-slate-500 line-clamp-2">
                          {rel.shortDescription}
                        </span>
                      </span>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                    </Link>
                ))}
              </div>
            </div>
          )}


        </div>
      </section>
      <CTA />
    </>
  );
}
