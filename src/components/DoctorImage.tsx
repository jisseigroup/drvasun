import Image from "next/image";
import { cn } from "@/lib/utils";

type DoctorImageProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  variant?: "hero" | "about" | "profile";
};

const sizes = {
  hero: "(max-width: 768px) 220px, 280px",
  about: "(max-width: 1024px) 100vw, 480px",
  profile: "320px",
};

const variantStyles = {
  hero:
    "relative mx-auto aspect-[3/4] w-[200px] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-white to-teal-50 shadow-2xl ring-1 ring-white/25 sm:w-[240px] lg:w-[280px] md:mx-0",
  about:
    "relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg",
  profile:
    "relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg sm:w-64",
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
        className={cn("object-contain object-bottom", imageClassName)}
      />
    </div>
  );
}
