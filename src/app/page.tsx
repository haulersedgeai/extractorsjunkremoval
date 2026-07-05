import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const PROCESS = [
  { title: "Send a photo or list", body: "Text or upload pictures of what you need gone. Quote back the same day." },
  { title: "Pick a time", body: "Same-day and next-day windows. We text when we're on the way." },
  { title: "We do the work", body: "Two-person uniformed crew. We lift, load, sweep, and haul." },
  { title: "Pay when done", body: "Upfront price, no surprises. Cash, card, or digital." },
];

const HIGHLIGHTS = [
  "Family-owned and operated by Jesse and crew",
  "Based in Cypress — Orange County's geographic sweet spot",
  "Fully licensed and insured — COI on request",
  "Dump trailer + truck combo, capacity for big jobs",
  "Donation and recycling routing built in",
  "Five-star Google reviews from real OC and LA County customers",
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Cypress, CA · Family-Owned"
        title="Junk Removal, Cleanouts & Light Demolition Across OC and LA County"
        subtitle="Same-day pickup, upfront pricing, real five-star Google reviews. We haul anything, anywhere from Cypress to Anaheim, Long Beach, and the cities in between."
        backgroundImage="/images/truck-2.png"
        backgroundAlt="Extractors Junk Removal dump trailer loaded with a haul in Cypress, California"
        backgroundPosition="top"
      />

      <ServicesGrid />

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-brand">About Us</div>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Local, family-owned, and serious about doing it right.
            </h2>
            <p className="mt-4 text-ink/75">
              Extractors Junk Removal is owned and run by Jesse and a small crew of Cypress locals. We started by helping neighbors clean out garages and haul away old furniture, and that grew into a full junk removal and light demolition outfit trusted across Orange County and LA County. We show up on time, quote honestly, and treat every job like we&apos;re working for a friend.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-1 text-sm font-bold text-brand">
                More about us →
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-ink to-brand/70 p-8 text-white shadow-xl overflow-hidden">
            <Image
              src="/images/truck-1.png"
              alt="Extractors Junk Removal truck and crew on a Cypress job"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover opacity-30"
            />
            <div className="relative flex h-full flex-col justify-end">
              <div className="text-5xl font-extrabold">5.0</div>
              <div className="text-lg font-bold">Average Google rating</div>
              <div className="mt-1 text-sm text-white/80">From real Orange County and LA County neighbors.</div>
              <Link href="/reviews" className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand">
                Read the reviews →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Process steps={PROCESS} />
      <WhyUs />
      <ReviewsStrip />
      <ServiceArea />
      <CTASection />
    </>
  );
}
