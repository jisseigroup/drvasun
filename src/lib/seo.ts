import type { Metadata } from "next";
import { siteConfig } from "./site";

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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
  const url = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
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
        image: `${siteConfig.url}/images/dr-vasun-batra.png`,
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
