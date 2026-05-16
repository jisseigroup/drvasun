import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — Book ENT Appointment",
  description: `Contact ${siteConfig.name} for ENT appointments in Greater Noida West. Call ${siteConfig.phones[0]} or visit ${siteConfig.address.name}.`,
  path: "/contact-us",
  keywords: ["ENT appointment Noida", "ENT clinic contact Greater Noida"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Book an appointment or send us your inquiry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />
      <ContactSection />
    </>
  );
}
