import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} ENT clinic website. How we collect, use, and protect your personal and health inquiry information.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="py-14 sm:py-16">
        <div className="prose-medical mx-auto max-w-3xl space-y-4 px-4 sm:px-6 lg:px-8">
          <p>
            {siteConfig.name} respects your privacy. Information you provide
            through our contact form (name, mobile, email, and health concern)
            is used solely to respond to your inquiry and schedule
            appointments.
          </p>
          <p>
            We do not sell or share your personal information with third parties
            except as required by law or to facilitate your care. We implement
            reasonable measures to protect data submitted through this website.
          </p>
          <p>
            For questions about this policy, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand-700 hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
