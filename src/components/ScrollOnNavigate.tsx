"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Scrolls to top on route change (no floating button). */
export function ScrollOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
