"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown, Home } from "lucide-react";
import { navigation, mobileExtras } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { MegaMenuPanel } from "./MegaMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const closeMega = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setOpenMega(null);
  };

  const openMegaMenu = (label: string) => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setOpenMega(label);
  };

  const scheduleCloseMega = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => setOpenMega(null), 200);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        closeMega();
        setMobileExpanded(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="/"
            className="min-w-0 shrink-0"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          >
            <span className="block truncate font-serif text-base font-semibold tracking-tight text-teal-900 sm:text-lg lg:text-xl">
              {siteConfig.name}
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-teal-600 sm:text-xs">
              ENT Specialist · Noida
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((entry) => {
              if (entry.type === "link") {
                const Icon = entry.icon;
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-800"
                  >
                    <Icon className="h-4 w-4 opacity-70" />
                    {entry.label}
                  </Link>
                );
              }

              const Icon = entry.icon;
              return (
                <div
                  key={entry.label}
                  className="relative"
                  onMouseEnter={() => openMegaMenu(entry.label)}
                  onMouseLeave={scheduleCloseMega}
                >
                  <Link
                    href={entry.href}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-800"
                    onClick={closeMega}
                  >
                    <Icon className="h-4 w-4 opacity-70" />
                    {entry.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 opacity-60 transition ${openMega === entry.label ? "rotate-180" : ""}`}
                    />
                  </Link>
                  {openMega === entry.label && (
                    <div
                      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2"
                      onMouseEnter={() => openMegaMenu(entry.label)}
                      onMouseLeave={scheduleCloseMega}
                    >
                      <MegaMenuPanel
                        sections={entry.sections}
                        viewAllHref={entry.href}
                        viewAllLabel={
                          entry.label === "Treatments"
                            ? "View all treatments"
                            : "View profile"
                        }
                        onNavigate={closeMega}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-teal-700"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="hidden xl:inline">{siteConfig.phones[0]}</span>
            </a>
            <Link
              href="/contact-us"
              className="rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition hover:bg-teal-800 xl:px-5"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={closeMobile}
            aria-label="Close menu overlay"
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl sm:max-w-md">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
              <span className="font-serif text-lg font-semibold text-teal-900">
                Menu
              </span>
              <button
                type="button"
                onClick={closeMobile}
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <Link
                href="/"
                className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 font-medium text-slate-800 hover:bg-teal-50"
                onClick={closeMobile}
              >
                <Home className="h-5 w-5 text-teal-600" />
                Home
              </Link>

              {navigation.map((entry) => {
                if (entry.type === "link") {
                  const Icon = entry.icon;
                  return (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 font-medium text-slate-800 hover:bg-teal-50"
                      onClick={closeMobile}
                    >
                      <Icon className="h-5 w-5 text-teal-600" />
                      {entry.label}
                    </Link>
                  );
                }

                const Icon = entry.icon;
                const expanded = mobileExpanded === entry.label;

                return (
                  <div key={entry.label} className="mb-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-medium text-slate-800 hover:bg-teal-50"
                      onClick={() =>
                        setMobileExpanded(expanded ? null : entry.label)
                      }
                      aria-expanded={expanded}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-teal-600" />
                        {entry.label}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expanded && (
                      <div className="mt-1 border-l-2 border-teal-100 pl-3">
                        <MegaMenuPanel
                          sections={entry.sections}
                          viewAllHref={entry.href}
                          viewAllLabel={
                            entry.label === "Treatments"
                              ? "All treatments"
                              : "About page"
                          }
                          onNavigate={closeMobile}
                          variant="mobile"
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Quick contact
                </p>
                {mobileExtras.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 hover:bg-teal-50"
                      onClick={closeMobile}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <Icon className="h-4 w-4 text-teal-600" />
                      <span>
                        {item.label}
                        {item.description && (
                          <span className="block text-xs text-slate-500">
                            {item.description}
                          </span>
                        )}
                      </span>
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-slate-100 p-4">
              <Link
                href="/contact-us"
                className="block rounded-full bg-teal-700 py-3.5 text-center text-sm font-semibold text-white hover:bg-teal-800"
                onClick={closeMobile}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
