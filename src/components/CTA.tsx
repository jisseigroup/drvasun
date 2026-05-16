import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function CTA() {
  return (
    <section className="bg-teal-800 py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">
          {siteConfig.tagline}
        </h2>
        <Link
          href="/contact-us"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-teal-900 transition hover:bg-teal-50"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
