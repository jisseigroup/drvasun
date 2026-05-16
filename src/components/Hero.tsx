import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { DoctorImage } from "./DoctorImage";

export function Hero() {
  return (
    <section
      data-surface="dark"
      className="relative flex min-h-[100dvh] flex-col overflow-x-clip bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 text-white pt-24 sm:pt-[4.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_50%)]" />
      <div className="relative flex flex-1 items-center justify-center px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-0 lg:px-8">
        <div className="mx-auto grid w-fit max-w-full grid-cols-1 items-center gap-[4.06rem] sm:gap-[5.22rem] md:grid-cols-[auto_auto] md:gap-[7.67rem] lg:gap-[8.94rem] xl:gap-[10.23rem]">
          <div className="max-w-[24rem] text-center text-[110%] sm:max-w-[26rem] md:max-w-[26.4rem] md:text-left md:text-[121%] lg:max-w-[28.6rem]">
            <p className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-brand-600 sm:mb-4 sm:px-4 sm:py-2 sm:text-base">
              <Stethoscope className="h-4 w-4 shrink-0 text-brand-600" />
              <span className="line-clamp-2 sm:line-clamp-none">
                {siteConfig.tagline}
              </span>
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-[3.3rem] lg:text-[4.125rem]">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-100 sm:mt-3 sm:text-xl md:text-[1.375rem] lg:text-2xl">
              {siteConfig.credentials}
            </p>
            <p className="mx-auto mt-3 max-w-[26rem] text-base leading-relaxed text-brand-50/90 sm:mt-4 sm:max-w-[28rem] sm:text-lg md:mx-0 md:max-w-[30.8rem] lg:text-xl">
              Expert ENT care for ear, nose, and throat — compassionate treatment
              for patients across Noida and Delhi NCR.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-4 md:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-brand-900 shadow-lg transition hover:bg-brand-50 sm:px-6 sm:py-3"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dr-vasun-batra"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3"
              >
                Know More
              </Link>
            </div>
          </div>
          <DoctorImage variant="hero" priority className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
