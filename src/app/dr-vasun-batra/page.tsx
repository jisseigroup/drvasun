import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { DoctorImage } from "@/components/DoctorImage";
import { siteConfig, aboutBio } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `About ${siteConfig.name} — ENT Surgeon`,
  description: aboutBio.slice(0, 155),
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
      <PageHero
        title={siteConfig.name}
        subtitle={siteConfig.credentials}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
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
          <div className="mt-12 rounded-2xl border border-teal-100 bg-teal-50 p-8">
            <h2 className="font-serif text-xl font-semibold text-teal-900">
              Affiliations
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-teal-800">
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
