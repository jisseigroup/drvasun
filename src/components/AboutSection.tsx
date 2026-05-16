import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, aboutBio } from "@/lib/site";
import { DoctorImage } from "./DoctorImage";

export function AboutSection() {
  const paragraphs = aboutBio.split("\n\n");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-10">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              About Us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-brand-800">
              {siteConfig.credentials}
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <Link
              href="/dr-vasun-batra"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800"
            >
              Read full profile
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <DoctorImage variant="about" />
          </div>
        </div>
      </div>
    </section>
  );
}
