import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="py-14">
        <div className="mx-auto max-w-3xl space-y-4 px-4 text-slate-600 leading-relaxed sm:px-6 lg:px-8">
          <p>
            {siteConfig.name} respects your privacy. Information you provide through our contact form (name, mobile, email, and health concern) is used solely to respond to your inquiry and schedule appointments.
          </p>
          <p>
            We do not sell or share your personal information with third parties except as required by law or to facilitate your care. We implement reasonable measures to protect data submitted through this website.
          </p>
          <p>
            For questions about this policy, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-teal-700 hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
