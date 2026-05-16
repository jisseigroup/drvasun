import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollOnNavigate } from "@/components/ScrollOnNavigate";
import { JsonLd } from "@/components/JsonLd";
import { physicianJsonLd, siteMetadata } from "@/lib/seo";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b42a03",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${sourceSans.variable} ${sourceSerif.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <JsonLd data={physicianJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollOnNavigate />
        <FloatingActions />
      </body>
    </html>
  );
}
