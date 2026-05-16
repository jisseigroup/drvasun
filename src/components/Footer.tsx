import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, aboutBioShort } from "@/lib/site";
import { mainTreatments } from "@/lib/treatments";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/dr-vasun-batra", label: "Dr Vasun Batra" },
  { href: "/treatments", label: "All Treatments" },
  ...mainTreatments.map((t) => ({
    href: `/${t.slug}`,
    label: t.title,
  })),
  { href: "/contact-us", label: "Contact Us" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-surface="dark"
      className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 text-brand-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          <div>
            <h3 className="font-serif text-xl font-semibold text-white">
              {siteConfig.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-100/90">
              {aboutBioShort}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-50">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-100/90 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-50">
              Address
            </h4>
            <div className="mt-4 space-y-3 text-sm text-brand-100/90">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/90" />
                <span>
                  <strong className="text-brand-50">
                    {siteConfig.address.name}
                  </strong>
                  <br />
                  {siteConfig.address.full}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-white/90" />
                <a
                  href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.phones[0]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-white/90" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-100 transition hover:text-white hover:underline"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/25 py-6 text-center text-xs text-brand-100/80 sm:flex-row">
          <p>
            Copyright © {year}. {siteConfig.name} | Designed and developed by{" "}
            <a
              href={siteConfig.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 transition hover:text-white hover:underline"
            >
              {siteConfig.credit.name}
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/terms-condition"
              className="transition hover:text-white"
            >
              Terms &amp; Condition
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="transition hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
