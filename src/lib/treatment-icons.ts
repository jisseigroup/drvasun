import { Ear, Volume2, Droplets, Activity, Thermometer } from "lucide-react";
import { NoseIcon, ThroatIcon } from "@/components/icons/EntIcons";
import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type TreatmentIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export const treatmentIcons = {
  ear: Ear,
  nose: NoseIcon,
  throat: ThroatIcon,
  tinnitus: Volume2,
  serous: Droplets,
  chronic: Activity,
  acute: Thermometer,
} as const;

export function getTreatmentIcon(
  slug: string,
): TreatmentIcon {
  if (slug.includes("nose")) return treatmentIcons.nose;
  if (slug.includes("throat")) return treatmentIcons.throat;
  if (slug.includes("tinnitus")) return treatmentIcons.tinnitus;
  if (slug.includes("serous")) return treatmentIcons.serous;
  if (slug.includes("chronic-otitis")) return treatmentIcons.chronic;
  if (slug.includes("acute-otitis")) return treatmentIcons.acute;
  return treatmentIcons.ear;
}
