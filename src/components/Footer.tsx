import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, aboutBioShort } from "@/lib/site";
import { mainTreatments } from "@/lib/treatments";
import { FooterSocialLinks } from "@/components/FooterSocialLinks";

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
      className="relative border-t border-brand-800/80 bg-brand-950 text-brand-100"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pt-14 pb-0 sm:grid-cols-2 sm:gap-12 lg:flex lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 sm:max-w-none lg:flex-1">
            <h3 className="font-serif text-xl font-semibold tracking-tight text-brand-50">
              {siteConfig.name}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200/90">
              {aboutBioShort}
            </p>
            <FooterSocialLinks />
          </div>
          <div className="min-w-0 lg:flex lg:flex-1 lg:flex-col lg:items-center lg:text-center">
            <h4 className="text-sm font-medium text-brand-50">Quick links</h4>
            <ul className="mt-5 space-y-2.5 lg:flex lg:flex-col lg:items-center">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-200/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 sm:col-span-2 lg:col-span-1 lg:flex-1">
            <h4 className="text-sm font-medium text-brand-50">Visit us</h4>
            <div className="mt-5 space-y-3.5 text-sm text-brand-200/90">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  <span className="block font-medium text-brand-100">
                    {siteConfig.address.name}
                  </span>
                  <span className="mt-1 block leading-relaxed">
                    {siteConfig.address.full}
                  </span>
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phones[0]}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="pl-7">
                <a
                  href={siteConfig.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-300 transition-colors hover:text-brand-50"
                >
                  Directions on Google Maps →
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr
          className="my-8 h-px w-full border-0 bg-neutral-500/40 sm:my-10"
          role="separator"
          aria-hidden
        />

        <div className="flex flex-col items-center justify-between gap-5 pb-10 text-center text-xs text-brand-400 sm:flex-row sm:text-left">
          <p className="max-w-xl leading-relaxed">
            © {year} {siteConfig.name}. Designed by{" "}
            <a
              href={siteConfig.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 transition-colors hover:text-brand-100"
            >
              {siteConfig.credit.name}
            </a>
          </p>
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label="Legal"
          >
            <Link
              href="/terms-condition"
              className="transition-colors hover:text-brand-100"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-brand-100"
            >
              Privacy
            </Link>
            <Link
              href="/sitemap.xml"
              className="transition-colors hover:text-brand-100"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
