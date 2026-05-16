import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function CTA() {
  return (
    <section data-surface="dark" className="bg-brand-800 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
          {siteConfig.tagline}
        </h2>
        <Link
          href="/contact-us"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
