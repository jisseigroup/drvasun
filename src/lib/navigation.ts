import type { LucideIcon } from "lucide-react";
import {
  Home,
  User,
  Building2,
  Stethoscope,
  Ear,
  Volume2,
  Droplets,
  Activity,
  Thermometer,
  Phone,
  Mail,
  MapPin,
  FileText,
  Shield,
  Sparkles,
  Waves,
} from "lucide-react";
import { NoseIcon, ThroatIcon } from "@/components/icons/EntIcons";
import type { ComponentType, SVGProps } from "react";

export type NavIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export type NavIconItem = {
  href: string;
  label: string;
  description?: string;
  icon: NavIcon;
};

export type MegaMenuSection = {
  title: string;
  href: string;
  icon: NavIcon;
  items: NavIconItem[];
};

export type NavEntry =
  | { type: "link"; href: string; label: string; icon: LucideIcon }
  | {
      type: "mega";
      href: string;
      label: string;
      icon: LucideIcon;
      sections: MegaMenuSection[];
    };

export const navigation: NavEntry[] = [
  { type: "link", href: "/", label: "Home", icon: Home },
  {
    type: "mega",
    href: "/dr-vasun-batra",
    label: "About",
    icon: User,
    sections: [
      {
        title: "About",
        href: "/dr-vasun-batra",
        icon: User,
        items: [
          {
            href: "/dr-vasun-batra",
            label: "Dr Vasun Batra",
            description: "Qualifications, experience & research",
            icon: User,
          },
          {
            href: "/contact-us",
            label: "ENT Centre Noida",
            description: "Clinic location & directions",
            icon: Building2,
          },
        ],
      },
    ],
  },
  {
    type: "mega",
    href: "/treatments",
    label: "Treatments",
    icon: Stethoscope,
    sections: [
      {
        title: "Ear Treatment",
        href: "/ear-treatment",
        icon: Ear,
        items: [
          {
            href: "/ear-treatment",
            label: "Ear Treatment",
            description: "Overview of ear care",
            icon: Ear,
          },
          {
            href: "/chronic-otitis-media-treatment",
            label: "Chronic Otitis Media",
            description: "Persistent middle ear infection",
            icon: Activity,
          },
          {
            href: "/tinnitus-treatment",
            label: "Tinnitus",
            description: "Ringing in the ears",
            icon: Volume2,
          },
          {
            href: "/serous-otitis-media-treatment",
            label: "Serous Otitis Media",
            description: "Fluid behind the eardrum",
            icon: Droplets,
          },
          {
            href: "/acute-otitis-media-treatment",
            label: "Acute Otitis Media",
            description: "Sudden ear infection",
            icon: Thermometer,
          },
        ],
      },
      {
        title: "Nose Treatment",
        href: "/nose-treatment",
        icon: NoseIcon,
        items: [
          {
            href: "/nose-treatment",
            label: "Nose Treatment",
            description: "Sinus, allergy & nasal care",
            icon: NoseIcon,
          },
          {
            href: "/nose-treatment",
            label: "Allergic Rhinitis",
            description: "Sneezing, itching & congestion",
            icon: Sparkles,
          },
          {
            href: "/nose-treatment",
            label: "Chronic Sinusitis",
            description: "Facial pressure & sinus infection",
            icon: Waves,
          },
        ],
      },
      {
        title: "Throat Treatment",
        href: "/throat-treatment",
        icon: ThroatIcon,
        items: [
          {
            href: "/throat-treatment",
            label: "Throat Treatment",
            description: "Voice, tonsils & swallowing",
            icon: ThroatIcon,
          },
          {
            href: "/throat-treatment",
            label: "Tonsil & Adenoid Care",
            description: "Recurrent infections & snoring",
            icon: ThroatIcon,
          },
          {
            href: "/throat-treatment",
            label: "Voice & Hoarseness",
            description: "Larynx and vocal cord disorders",
            icon: ThroatIcon,
          },
        ],
      },
    ],
  },
  { type: "link", href: "/contact-us", label: "Contact Us", icon: Phone },
];

export const mobileExtras: NavIconItem[] = [
  {
    href: `tel:+918076898283`,
    label: "Call Now",
    description: "+91-8076898283",
    icon: Phone,
  },
  {
    href: "mailto:vasunbatradigital@gmail.com",
    label: "Email Us",
    icon: Mail,
  },
  {
    href: "https://goo.gl/maps/dxJeHuXkoNv872Pf8",
    label: "Directions",
    icon: MapPin,
  },
];

export const footerLegal: NavIconItem[] = [
  { href: "/terms-condition", label: "Terms & Condition", icon: FileText },
  { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
];
