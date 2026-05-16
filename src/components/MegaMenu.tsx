import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuSection, NavIconItem, NavIcon } from "@/lib/navigation";
import { TreatmentIconBox } from "./TreatmentIconBox";

function NavItemLink({
  item,
  onNavigate,
}: {
  item: NavIconItem;
  onNavigate?: () => void;
}) {
  const Icon = item.icon as NavIcon;
  const isExternal =
    item.href.startsWith("http") ||
    item.href.startsWith("tel:") ||
    item.href.startsWith("mailto:");

  const className =
    "group flex gap-3 rounded-lg px-2 py-2.5 transition hover:bg-teal-50";

  const inner = (
    <>
      <TreatmentIconBox
        icon={Icon}
        size={18}
        className="h-9 w-9 rounded-lg bg-teal-50 transition group-hover:bg-teal-100"
      />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-slate-800 group-hover:text-teal-900">
          {item.label}
        </span>
        {item.description ? (
          <span className="mt-0.5 block text-xs leading-snug text-slate-500">
            {item.description}
          </span>
        ) : null}
      </span>
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
        {sections.map((section) => {
          return (
            <div key={section.title}>
              <Link
                href={section.href}
                className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900"
                onClick={onNavigate}
              >
                <TreatmentIconBox
                  icon={section.icon}
                  size={18}
                  className="h-8 w-8 rounded-lg bg-teal-50"
                />
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
          );
        })}
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
              className="mb-2 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm font-semibold text-teal-800 hover:text-teal-900"
              onClick={onNavigate}
            >
              <TreatmentIconBox
                icon={section.icon}
                size={18}
                className="h-8 w-8 shrink-0 rounded-lg bg-teal-50"
              />
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
          className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
          onClick={onNavigate}
        >
          {viewAllLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
