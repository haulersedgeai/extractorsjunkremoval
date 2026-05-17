import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Junk Removal Cypress, Anaheim, Long Beach & OC`,
    template: `%s | ${SITE.name}`,
  },
  description: `Family-owned junk removal, cleanouts, and light demolition across Orange County and LA County. Same-day pickup, upfront pricing, fully licensed & insured. Call ${SITE.phoneDisplay}.`,
  applicationName: SITE.name,
  authors: [{ name: SITE.legal }],
  keywords: [
    "junk removal Cypress CA",
    "junk removal Anaheim",
    "junk removal Long Beach",
    "Orange County junk hauling",
    "LA County junk removal",
    "estate cleanout Orange County",
    "demolition Cypress",
    "hot tub removal Anaheim",
    "furniture removal Long Beach",
    "appliance removal Cypress",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | Junk Removal Cypress, Anaheim, Long Beach`,
    description: `Family-owned junk removal and cleanouts across Orange County and LA County. Same-day pickup, upfront pricing.`,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: SITE.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
