export const SITE = {
  name: "Extractors Junk Removal",
  legal: "Extractors Junk Removal",
  tagline: "Cypress, Anaheim & Long Beach's family-owned junk removal and light demolition crew.",
  phoneDisplay: "(562) 584-6535",
  phoneRaw: "+15625846535",
  smsRaw: "+15625846535",
  email: "extractors10@gmail.com",
  fromEmail: process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev",
  toEmail: process.env.QUOTE_TO_EMAIL || "extractors10@gmail.com",
  city: "Cypress",
  state: "CA",
  region: "Orange County & Greater Los Angeles",
  address: {
    street: "4114 Lincoln Ave",
    locality: "Cypress",
    region: "CA",
    postal: "90630",
    country: "US",
  },
  geo: { lat: 33.8169, lng: -118.0376 },
  hours: "Mon-Sat 7:00am-7:00pm",
  rating: { value: "5.0", count: "40" },
  url: process.env.SITE_URL || "https://www.extractorsjunkremoval.com",
  socials: {
    facebook: "https://www.facebook.com/people/Extractors-Junk-Removal/100071595890118",
    instagram: "https://www.instagram.com/extractors_junkremoval/",
    google: "https://www.google.com/search?q=extractors+junk+removal",
  },
} as const;

export type NavItem = { href: string; label: string; hasMenu?: boolean };

export const NAV_MAIN: NavItem[] = [
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/locations", label: "Service Area" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const NAV_MOBILE: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Service Area" },
  { href: "/items-we-take", label: "Items We Take" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
