import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  nameClassName?: string;
  taglineClassName?: string;
  variant?: "dark" | "light";
};

export function SiteLogo({
  className,
  nameClassName,
  taglineClassName,
  variant = "dark",
}: SiteLogoProps) {
  const light = variant === "light";

  return (
    <span className={cn("min-w-0", className)}>
      <span
        className={cn(
          "block truncate font-serif font-semibold tracking-tight",
          light ? "text-white" : "text-brand-900",
          nameClassName,
        )}
      >
        {siteConfig.name}
      </span>
      <span
        className={cn(
          "block truncate font-medium uppercase tracking-widest",
          light ? "text-white/75" : "text-brand-600",
          taglineClassName,
        )}
      >
        ENT Specialist · Noida
      </span>
    </span>
  );
}
