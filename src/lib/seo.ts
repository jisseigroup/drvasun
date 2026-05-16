import type { Metadata } from "next";
import { siteConfig } from "./site";
import type { Treatment } from "./treatments";

export const defaultKeywords = [
  "ENT specialist Noida",
  "ENT doctor Greater Noida West",
  "Dr Vasun Batra",
  "ear nose throat doctor Delhi NCR",
  "ENT surgeon Noida",
  "sinus treatment Noida",
  "tonsil treatment Noida",
  "best ENT specialist near me",
  "ENT clinic Greater Noida",
] as const;

export const defaultOgImage = {
  url: "/images/dr-vasun-batra.png",
  width: 800,
  height: 1000,
  alt: `${siteConfig.name} — ENT Specialist in Noida (Delhi NCR)`,
} as const;

const locationLabel = "Noida (Delhi NCR)";

/** Canonical path with trailing slash (matches next.config trailingSlash). */
export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function absoluteUrl(path: string): string {
  if (path.endsWith(".xml") || path.endsWith(".txt")) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${siteConfig.url}${normalized}`;
  }
  return `${siteConfig.url}${canonicalPath(path)}`;
}

/** Append local area to page titles when not already present. */
export function localSeoTitle(title: string): string {
  const lower = title.toLowerCase();
  if (
    lower.includes("noida") ||
    lower.includes("delhi ncr") ||
    lower.includes("greater noida")
  ) {
    return title;
  }
  return `${title} in ${locationLabel}`;
}

function ogImages() {
  return [
    {
      ...defaultOgImage,
      url: defaultOgImage.url,
    },
  ];
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...defaultKeywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: ogImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Greater Noida West",
  },
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = canonicalPath(path);
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      images: ogImages(),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function jsonLdGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: absoluteUrl(item.href) }
        : {}),
    })),
  };
}

export function treatmentPageJsonLd(
  treatment: Treatment,
  slug: string,
  breadcrumbs: BreadcrumbItem[],
) {
  const url = absoluteUrl(`/${slug}`);
  const graph: Record<string, unknown>[] = [
    breadcrumbJsonLd(breadcrumbs),
    {
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: localSeoTitle(treatment.title),
      description: treatment.shortDescription,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: {
        "@type": "MedicalTherapy",
        name: treatment.title,
      },
      author: { "@id": `${siteConfig.url}/#physician` },
      publisher: { "@id": `${siteConfig.url}/#physician` },
      provider: { "@id": `${siteConfig.url}/#clinic` },
    },
  ];

  if (treatment.whenToVisit.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: treatment.whenToVisit.map((item) => ({
        "@type": "Question",
        name: item.endsWith("?") ? item : `${item}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Consult ${siteConfig.name}, ENT specialist in Greater Noida West (Noida, Delhi NCR), for evaluation and appropriate treatment.`,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function physicianJsonLd() {
  const phone = siteConfig.phones[0].replace(/\s/g, "");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${siteConfig.url}/#physician`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}${defaultOgImage.url}`,
        medicalSpecialty: "Otolaryngologic",
        knowsAbout: [
          "Ear diseases",
          "Nose and sinus disorders",
          "Throat and larynx conditions",
          "Paediatric ENT",
        ],
        hasCredential: siteConfig.credentials.split(" | ").map((c) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: c.trim(),
        })),
        telephone: phone,
        email: siteConfig.email,
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.youtube,
          siteConfig.social.maps,
          siteConfig.social.facebook,
        ].filter(Boolean),
        worksFor: {
          "@id": `${siteConfig.url}/#clinic`,
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${siteConfig.url}/#clinic`,
        name: siteConfig.address.name,
        description:
          "ENT clinic offering ear, nose, and throat treatment in Greater Noida West, Delhi NCR.",
        url: siteConfig.url,
        image: `${siteConfig.url}${defaultOgImage.url}`,
        telephone: phone,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Shop no. 141, First floor Mahagun Mywoods Mart, Sector 16C, Greater Noida West",
          addressLocality: "Greater Noida West",
          addressRegion: "Uttar Pradesh",
          postalCode: "201309",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.4744,
          longitude: 77.504,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "19:00",
        },
        priceRange: "$$",
        medicalSpecialty: "Otolaryngologic",
        sameAs: [siteConfig.social.maps],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#physician` },
        inLanguage: "en-IN",
      },
    ],
  };
}
