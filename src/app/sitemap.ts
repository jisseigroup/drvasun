import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { mainTreatments, earSubTreatments } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
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
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/treatments" ? 0.9 : 0.8,
  }));
}
