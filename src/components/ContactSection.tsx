import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { MapLocationSection } from "./MapLocationSection";

export function ContactSection() {
  return (
    <>
      <section id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Get In Touch
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Do Contact Us for further Inquiries!
            </h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <ContactForm />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
                <h3 className="flex items-center gap-2 font-semibold text-slate-900">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  {siteConfig.address.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {siteConfig.address.full}
                </p>
                <a
                  href={siteConfig.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-brand-700 hover:underline"
                >
                  Get directions →
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <h3 className="flex items-center gap-2 font-semibold text-slate-900">
                  <Mail className="h-5 w-5 text-brand-600" />
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block text-sm text-slate-600 hover:text-brand-700"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <h3 className="flex items-center gap-2 font-semibold text-slate-900">
                  <Phone className="h-5 w-5 text-brand-600" />
                  Mobile
                </h3>
                <div className="mt-3 space-y-1">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-sm text-slate-600 hover:text-brand-700"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapLocationSection />
    </>
  );
}
