import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Condition",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Condition" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Condition" }]} />
      <section className="py-14">
        <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 leading-relaxed">
            By using {siteConfig.url}, you agree to these terms. The information on this website is for general awareness about ENT services offered by {siteConfig.name} and does not replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician with any questions regarding a medical condition.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Appointment requests submitted through the website are subject to confirmation. We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of the revised terms.
          </p>
        </div>
      </section>
    </>
  );
}
