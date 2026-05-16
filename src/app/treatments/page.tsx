import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { mainTreatments, earSubTreatments } from "@/lib/treatments";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "ENT Treatments — Ear, Nose & Throat",
  description: `Explore ENT treatments at ${siteConfig.name}: ear infections, sinusitis, tonsillitis, tinnitus, and more. Expert care in Greater Noida West, Delhi NCR.`,
  path: "/treatments",
  keywords: [
    "ENT treatments Noida",
    "ear treatment",
    "nose treatment",
    "throat treatment",
  ],
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Treatments"
        subtitle="Comprehensive ENT care for ear, nose, and throat conditions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments" },
        ]}
      />
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-slate-600 leading-relaxed">
            Dr. Vasun Batra offers evidence-based treatment for a wide range of
            ENT conditions. Select a category below to learn about symptoms,
            treatment options, and when to seek care.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {mainTreatments.map((treatment) => (
                <div
                  key={treatment.slug}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <h2 className="font-serif text-xl font-semibold text-slate-900">
                    {treatment.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {treatment.shortDescription}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 line-clamp-3">
                    {treatment.overview[0]}
                  </p>
                  <Link
                    href={`/${treatment.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                  {treatment.slug === "ear-treatment" && (
                    <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                      {earSubTreatments.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/${sub.slug}`}
                            className="text-sm text-slate-600 hover:text-teal-700"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
