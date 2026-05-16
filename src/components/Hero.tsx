import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { DoctorImage } from "./DoctorImage";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10 lg:gap-12">
          <div className="min-w-0">
            <p className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
              <Stethoscope className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              <span className="line-clamp-2 sm:line-clamp-none">
                {siteConfig.tagline}
              </span>
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-base font-medium text-teal-100 sm:mt-4 sm:text-lg">
              {siteConfig.credentials}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-teal-50/90 sm:mt-6 sm:text-base">
              Expert ENT care for ear, nose, and throat — compassionate treatment
              for patients across Noida and Delhi NCR.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-teal-900 shadow-lg transition hover:bg-teal-50 sm:px-6 sm:py-3"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dr-vasun-batra"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3"
              >
                Know More
              </Link>
            </div>
          </div>
          <DoctorImage variant="hero" priority />
        </div>
      </div>
    </section>
  );
}
