import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { mainTreatments, earSubTreatments } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages = [
    "",
    "/dr-vasun-batra",
    "/treatments",
    "/contact-us",
    "/terms-condition",
    "/privacy-policy",
  ];
  const treatmentPages = [...mainTreatments, ...earSubTreatments].map(
    (t) => `/${t.slug}`,
  );

  return [...staticPages, ...treatmentPages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
