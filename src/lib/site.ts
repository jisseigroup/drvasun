export const siteConfig = {
  name: "Dr. Vasun Batra",
  title: "Dr. Vasun Batra | Best ENT Specialist in Noida (Delhi NCR)",
  description:
    "Dr. Vasun Batra is a leading ENT surgeon in Delhi NCR — MBBS, MS (ENT), DNB (ENT). Expert care for ear, nose, and throat at Dr. Vasun Batra's ENT Centre, Greater Noida West.",
  url: "https://drvasunbatra.com",
  credentials: "MBBS | MS (ENT) | DNB (ENT)",
  tagline: "Meet the Best ENT Specialist in Noida (Delhi NCR)",
  email: "vasunbatradigital@gmail.com",
  phones: ["+91-8076898283", "+91-8447592052"],
  whatsapp: "918076898283",
  address: {
    name: "Dr Vasun Batra ENT Centre",
    line1:
      "Shop no. 141, First floor Mahagun Mywoods Mart, Sector 16C, Greater Noida West",
    city: "Gautam Buddha Nagar",
    full: "Shop no. 141, First floor Mahagun Mywoods Mart, Sector 16C, Greater Noida West, Gautam Buddha Nagar",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php",
    instagram: "https://www.instagram.com/drvasunbatra/",
    youtube:
      "https://www.youtube.com/@dr.vasunbatraentsurgeon3881",
    maps: "https://goo.gl/maps/dxJeHuXkoNv872Pf8",
  },
  credit: {
    name: "AUOTAM",
    url: "https://auotam.com",
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "100+", label: "Surgeries Done" },
    { value: "5K", label: "Happy Patients" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/dr-vasun-batra",
    label: "About",
    children: [
      { href: "/dr-vasun-batra", label: "Dr Vasun Batra" },
    ],
  },
  {
    href: "/treatments",
    label: "Treatments",
    children: [
      { href: "/ear-treatment", label: "Ear Treatment" },
      { href: "/nose-treatment", label: "Nose Treatment" },
      { href: "/throat-treatment", label: "Throat Treatment" },
    ],
  },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const aboutBio = `Dr Vasun Batra is a leading ENT surgeon in Delhi NCR. She did her MBBS at the prestigious Lady Hardinge Medical College. She did her MS in the field of ENT and Head and Neck Surgery from Maulana Azad Medical College, which is known to be one of the best medical colleges of the country. Subsequently she went on to acquire the degree of DNB ENT. She has completed her Senior Residency from Lok Nayak Hospital, the largest Delhi Government hospital. She has a keen interest in disorders of larynx and nose and paranasal sinuses and paediatric ENT.

Presently, she practices at Dr. Vasun Batra's ENT centre and works as Visiting Consultant at Jaypee Hospital, Noida and Sarvodaya Hospital, Greater Noida. Previously, she was a Senior Consultant at Apollo Cradle Hospital, Greater Noida.

Dr Vasun Batra has contributed various research articles in national and international scientific journals.`;

export const aboutBioShort = `Dr Vasun Batra is a leading ENT surgeon in Delhi NCR. She did her MBBS at the prestigious Lady Hardinge Medical College. She did her MS in the field of ENT and Head and Neck Surgery from Maulana Azad Medical College, which is known to be one of the best medical colleges of the country.`;
