import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, aboutBioShort } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/dr-vasun-batra", label: "Dr Vasun Batra" },
  { href: "/ear-treatment", label: "Ear Treatment" },
  { href: "/throat-treatment", label: "Throat Treatment" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-serif text-xl font-semibold text-white">
            {siteConfig.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {aboutBioShort}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-teal-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Address
          </h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
              <span>
                <strong className="text-slate-300">
                  {siteConfig.address.name}
                </strong>
                <br />
                {siteConfig.address.full}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-teal-500" />
              <a
                href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                className="hover:text-teal-400"
              >
                {siteConfig.phones[0]}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-teal-500" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-teal-400"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            Copyright © {year}. {siteConfig.name} | Designed and developed by{" "}
            <a
              href={siteConfig.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              {siteConfig.credit.name}
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms-condition" className="hover:text-teal-400">
              Terms &amp; Condition
            </Link>
            <Link href="/privacy-policy" className="hover:text-teal-400">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-teal-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
