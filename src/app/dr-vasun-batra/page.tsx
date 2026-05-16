import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { DoctorImage } from "@/components/DoctorImage";
import { siteConfig, aboutBio } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  jsonLdGraph,
  localSeoTitle,
  pageMetadata,
} from "@/lib/seo";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About" },
];

export const metadata: Metadata = pageMetadata({
  title: localSeoTitle(`About ${siteConfig.name} — ENT Surgeon`),
  description: `${aboutBio.slice(0, 140)}… Leading ENT surgeon in Greater Noida West & Noida.`,
  path: "/dr-vasun-batra",
  keywords: [
    "ENT surgeon biography",
    "Dr Vasun Batra qualifications",
    "ENT doctor experience Noida",
  ],
});

export default function AboutPage() {
  const paragraphs = aboutBio.split("\n\n");

  return (
    <>
      <JsonLd data={jsonLdGraph(breadcrumbJsonLd(breadcrumbs))} />
      <PageHero
        title={siteConfig.name}
        subtitle={siteConfig.credentials}
        breadcrumbs={breadcrumbs}
      />
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex justify-center">
            <DoctorImage variant="profile" />
          </div>
          <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-slate-600">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-8">
            <h2 className="font-serif text-xl font-semibold text-brand-900">
              Affiliations
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-brand-800">
              <li>Dr. Vasun Batra&apos;s ENT Centre — Greater Noida West</li>
              <li>Visiting Consultant — Jaypee Hospital, Noida</li>
              <li>Visiting Consultant — Sarvodaya Hospital, Greater Noida</li>
              <li>Former Senior Consultant — Apollo Cradle Hospital, Greater Noida</li>
            </ul>
          </div>
        </div>
      </section>
      <Stats />
      <CTA />
    </>
  );
}
