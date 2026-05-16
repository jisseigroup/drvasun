import Image from "next/image";
import { cn } from "@/lib/utils";

type DoctorImageProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  variant?: "hero" | "about" | "profile";
};

const sizes = {
  hero: "(max-width: 1024px) 100vw, 351px",
  about: "(max-width: 1024px) 100vw, 480px",
  profile: "320px",
};

const variantStyles = {
  hero:
    "relative aspect-[3/4] w-[277px] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-white to-brand-50 shadow-2xl ring-1 ring-white/25 sm:w-[298px] md:w-[328px] lg:w-[351px]",
  about:
    "relative mx-auto aspect-[3/4] w-full max-w-[min(100%,28rem)] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100 shadow-lg sm:max-w-md",
  profile:
    "relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 to-brand-100 shadow-lg sm:w-64",
};

const imageStyles = {
  hero: "object-cover object-[center_90%] scale-[1.06]",
  about: "object-cover object-[center_90%] scale-[1.06]",
  profile: "object-cover object-[center_90%] scale-[1.06]",
};

export function DoctorImage({
  className,
  imageClassName,
  priority = false,
  variant = "hero",
}: DoctorImageProps) {
  return (
    <div className={cn(variantStyles[variant], className)}>
      <Image
        src="/images/dr-vasun-batra.png"
        alt="Dr. Vasun Batra — ENT Specialist in Noida"
        fill
        priority={priority}
        sizes={sizes[variant]}
        className={cn(imageStyles[variant], imageClassName)}
      />
    </div>
  );
}
