import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TreatmentCards } from "@/components/TreatmentCards";
import { AboutSection } from "@/components/AboutSection";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { ContactSection } from "@/components/ContactSection";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata;

export default function HomePage() {
  return (
    <>
      <Hero />
      <TreatmentCards />
      <AboutSection />
      <Stats />
      <CTA />
      <Testimonials />
      <ContactSection />
    </>
  );
}
