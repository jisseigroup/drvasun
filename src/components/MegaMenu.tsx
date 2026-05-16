import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuSection, NavIconItem } from "@/lib/navigation";

function NavItemLink({
  item,
  onNavigate,
}: {
  item: NavIconItem;
  onNavigate?: () => void;
}) {
  const isExternal =
    item.href.startsWith("http") ||
    item.href.startsWith("tel:") ||
    item.href.startsWith("mailto:");

  const className =
    "group block rounded-lg px-2 py-2.5 transition hover:bg-brand-50";

  const inner = (
    <>
      <span className="block text-sm font-semibold text-slate-800 group-hover:text-brand-900">
        {item.label}
      </span>
      {item.description ? (
        <span className="mt-0.5 block text-xs leading-snug text-slate-500">
          {item.description}
        </span>
      ) : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={item.href}
        className={className}
        onClick={onNavigate}
        {...(item.href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {inner}
    </Link>
  );
}

export function MegaMenuPanel({
  sections,
  viewAllHref,
  viewAllLabel,
  onNavigate,
  variant = "desktop",
}: {
  sections: MegaMenuSection[];
  viewAllHref: string;
  viewAllLabel: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}) {
  if (variant === "mobile") {
    return (
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <Link
              href={section.href}
              className="mb-3 block text-sm font-semibold text-slate-900"
              onClick={onNavigate}
            >
              {section.title}
            </Link>
            <div>
              {section.items.map((item) => (
                <NavItemLink
                  key={item.href + item.label}
                  item={item}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const isWide = sections.length > 1;
  const panelClass = isWide
    ? "w-[min(920px,calc(100vw-2rem))]"
    : "w-[min(360px,calc(100vw-2rem))]";
  const gridClass = isWide ? "md:grid-cols-3" : "grid-cols-1";

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 ring-1 ring-slate-900/5 ${panelClass}`}
    >
      <div className={`grid gap-4 ${gridClass}`}>
        {sections.map((section) => (
          <div key={section.title} className="min-w-0">
            <Link
              href={section.href}
              className="mb-2 block border-b border-slate-100 pb-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
              onClick={onNavigate}
            >
              {section.title}
            </Link>
            <div>
              {section.items.map((item) => (
                <NavItemLink
                  key={item.href + item.label}
                  item={item}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-end border-t border-slate-100 pt-3">
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
          onClick={onNavigate}
        >
          {viewAllLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
