import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 sm:right-6">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition hover:scale-105 hover:bg-green-600"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white shadow-lg shadow-teal-700/30 transition hover:scale-105 hover:bg-teal-800"
        aria-label="Call doctor now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
