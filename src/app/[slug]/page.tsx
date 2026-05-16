import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { TreatmentDetail } from "@/components/TreatmentDetail";
import { JsonLd } from "@/components/JsonLd";
import {
  getTreatmentBySlug,
  mainTreatments,
  earSubTreatments,
} from "@/lib/treatments";
import { siteConfig } from "@/lib/site";
import {
  localSeoTitle,
  pageMetadata,
  treatmentPageJsonLd,
  type BreadcrumbItem,
} from "@/lib/seo";

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

  const description = `${treatment.shortDescription} Consult ${siteConfig.name}, ENT specialist in Greater Noida West, Noida & Delhi NCR.`.slice(
    0,
    160,
  );

  const keywords = [
    treatment.title,
    `${treatment.title} Noida`,
    `${treatment.title} Greater Noida West`,
    "ENT specialist",
  ];

  return pageMetadata({
    title: localSeoTitle(treatment.title),
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

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    ...(parent ? [parent] : []),
    { label: treatment.title },
  ];

  return (
    <>
      <JsonLd data={treatmentPageJsonLd(treatment, slug, breadcrumbs)} />
      <PageHero
        title={localSeoTitle(treatment.title)}
        subtitle={treatment.shortDescription}
        breadcrumbs={breadcrumbs}
      />
      <TreatmentDetail treatment={treatment} />
    </>
  );
}
