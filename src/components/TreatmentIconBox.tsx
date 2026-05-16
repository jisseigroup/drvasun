import type { TreatmentIcon } from "@/lib/treatment-icons";
import { cn } from "@/lib/utils";

type TreatmentIconBoxProps = {
  icon: TreatmentIcon;
  /** Icon glyph size in px */
  size?: number;
  className?: string;
};

export function TreatmentIconBox({
  icon: Icon,
  size = 20,
  className,
}: TreatmentIconBoxProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-teal-700",
        className,
      )}
    >
      <Icon size={size} strokeWidth={2} aria-hidden />
    </span>
  );
}
