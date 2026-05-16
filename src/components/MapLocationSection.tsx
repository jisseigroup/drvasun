import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { GoogleMapEmbed } from "./GoogleMapEmbed";

export function MapLocationSection() {
  return (
    <section
      className="border-t border-slate-200 bg-slate-50 pb-16 sm:pb-20"
      aria-label="Clinic location"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-10 sm:pt-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Location
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
            Find {siteConfig.address.name}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {siteConfig.address.full}
          </p>
          <a
            href={siteConfig.social.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800 hover:underline"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>

        <GoogleMapEmbed className="mt-8 h-[min(420px,50vh)] min-h-[280px] sm:mt-10" />
      </div>
    </section>
  );
}
