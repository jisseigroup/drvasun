import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Condition",
  description: `Terms and conditions for using the ${siteConfig.name} website and online appointment inquiries.`,
  path: "/terms-condition",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Condition"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Condition" },
        ]}
      />
      <section className="py-14">
        <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 leading-relaxed">
            By using this website you agree that content is for general
            information only and does not constitute medical advice. Always seek
            in-person consultation with {siteConfig.name} or an emergency
            service for urgent conditions.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We reserve the right to update these terms. Continued use of the site
            constitutes acceptance of changes.
          </p>
        </div>
      </section>
    </>
  );
}
