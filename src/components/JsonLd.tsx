import { physicianJsonLd } from "@/lib/seo";

export function JsonLd() {
  const data = physicianJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
