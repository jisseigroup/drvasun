import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function IconBase({
  className,
  size = 24,
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Nose — clear front profile */
export function NoseIcon({ className, size, ...props }: IconProps) {
  return (
    <IconBase className={className} size={size} {...props}>
      <path d="M12 2C9 2 7 4.5 7 8c0 2.2.6 4 2 5.5L12 22l3-8.5c1.4-1.5 2-3.3 2-5.5 0-3.5-2-6-5-6z" />
      <path d="M9.5 13h5" />
      <path d="M10 15.5c.7.7 1.8.7 2.5 0" />
    </IconBase>
  );
}

/** Throat / voice */
export function ThroatIcon({ className, size, ...props }: IconProps) {
  return (
    <IconBase className={className} size={size} {...props}>
      <path d="M8 7h8" />
      <path d="M9 7v2a3 3 0 0 0 6 0V7" />
      <ellipse cx="12" cy="15" rx="5" ry="4" />
      <path d="M12 19v2" />
    </IconBase>
  );
}
