import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  jsonLdGraph,
  localSeoTitle,
  pageMetadata,
} from "@/lib/seo";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact Us" },
];

export const metadata: Metadata = pageMetadata({
  title: localSeoTitle("Contact Us — Book ENT Appointment"),
  description: `Contact ${siteConfig.name} for ENT appointments in Greater Noida West, Noida & Delhi NCR. Call ${siteConfig.phones[0]} or visit ${siteConfig.address.name}.`,
  path: "/contact-us",
  keywords: ["ENT appointment Noida", "ENT clinic contact Greater Noida"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLdGraph(breadcrumbJsonLd(breadcrumbs))} />
      <PageHero
        title="Contact Us"
        subtitle="Book an appointment or send us your inquiry"
        breadcrumbs={breadcrumbs}
      />
      <ContactSection />
    </>
  );
}
