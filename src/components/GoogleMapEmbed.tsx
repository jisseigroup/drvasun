import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type GoogleMapEmbedProps = {
  className?: string;
  title?: string;
};

export function GoogleMapEmbed({
  className,
  title = `${siteConfig.address.name} on Google Maps`,
}: GoogleMapEmbedProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm",
        className,
      )}
    >
      <iframe
        src={siteConfig.mapsEmbed}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        title={title}
      />
    </div>
  );
}
