"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const DARK_SURFACE_SELECTOR = '[data-surface="dark"]';

function rectsIntersect(a: DOMRect, b: DOMRect): boolean {
  return (
    a.width > 0 &&
    a.height > 0 &&
    b.width > 0 &&
    b.height > 0 &&
    a.left < b.right &&
    a.right > b.left &&
    a.top < b.bottom &&
    a.bottom > b.top
  );
}

function isOverDarkSurface(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  const darkSections = document.querySelectorAll(DARK_SURFACE_SELECTOR);

  return Array.from(darkSections).some((section) =>
    rectsIntersect(rect, section.getBoundingClientRect()),
  );
}

export function FloatingActions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [onDark, setOnDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      setOnDark(isOverDarkSurface(el));
    };

    update();

    let raf = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-40 flex flex-row items-center gap-3 sm:right-6"
    >
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-colors duration-300 hover:scale-105",
          onDark
            ? "bg-white text-brand-600 shadow-black/15 hover:bg-brand-50"
            : "bg-brand-600 text-white shadow-brand-600/30 hover:bg-brand-700",
        )}
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-colors duration-300 hover:scale-105",
          onDark
            ? "bg-white text-brand-700 shadow-black/15 hover:bg-brand-50"
            : "bg-brand-700 text-white shadow-brand-700/30 hover:bg-brand-800",
        )}
        aria-label="Call doctor now"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
