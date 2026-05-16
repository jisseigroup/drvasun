import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { TreatmentDetail } from "@/components/TreatmentDetail";
import {
  getTreatmentBySlug,
  mainTreatments,
  earSubTreatments,
} from "@/lib/treatments";
import { pageMetadata } from "@/lib/seo";

const allTreatments = [...mainTreatments, ...earSubTreatments];
const treatmentSlugs = new Set(allTreatments.map((t) => t.slug));

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allTreatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  const description =
    treatment.overview[0]?.slice(0, 155) ?? treatment.shortDescription;
  const keywords = [
    treatment.title,
    `${treatment.title} Noida`,
    "ENT specialist",
  ];
  return pageMetadata({
    title: treatment.title,
    description,
    path: `/${slug}`,
    keywords,
  });
}

export default async function TreatmentSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!treatmentSlugs.has(slug)) notFound();
  const treatment = getTreatmentBySlug(slug)!;
  const parent =
    treatment.parent === "ear"
      ? { label: "Ear Treatment", href: "/ear-treatment" }
      : null;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    ...(parent ? [parent] : []),
    { label: treatment.title },
  ];

  return (
    <>
      <PageHero
        title={treatment.title}
        subtitle={treatment.shortDescription}
        breadcrumbs={breadcrumbs}
      />
      <TreatmentDetail treatment={treatment} />
    </>
  );
}
