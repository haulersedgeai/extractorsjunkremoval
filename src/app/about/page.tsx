import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { WhyUs } from "@/components/sections/WhyUs";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Extractors Junk Removal | Family-Owned in Cypress, CA",
  description: "Owned by Jesse and a Cypress local crew. Family-owned, fully insured, and trusted by Orange County and LA County families. Meet the team.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  "Show up when we say we will — every single time.",
  "Quote honestly. The number we say is the number you pay.",
  "Treat every house like a friend or family member lives there.",
  "Donate and recycle anything we can keep out of the landfill.",
  "Hire locally — every crew member is from Orange County or LA County.",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="Family-Owned in Cypress, Built on Word of Mouth"
        subtitle="Jesse started Extractors Junk Removal helping neighbors clear garages and haul old furniture. That grew into a full junk removal and light demolition crew trusted across OC and LA County."
        showRating={false}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2 space-y-6 text-lg text-ink/80">
            <p>
              Extractors Junk Removal is a small, family-owned crew based on Lincoln Avenue in Cypress, CA. We started out doing one job at a time for neighbors and friends, and that grew into a full junk removal and light demolition operation working across Orange County and Los Angeles County.
            </p>
            <p>
              We&apos;ve done garage cleanouts in Anaheim, hot tub removals in Long Beach, estate cleanouts in Cerritos, shed demos in Garden Grove, and just about every kind of pickup you can picture. The thread through all of it: show up on time, quote honestly, and leave the property cleaner than we found it.
            </p>
            <p>
              We&apos;re fully licensed and insured for both junk removal and light demolition. We carry COIs and W-9s for property managers, realtors, and HOAs. And we sweep up before we leave — every job, every time.
            </p>
            <p>
              If you&apos;re in Cypress, Anaheim, Long Beach, or any of the surrounding cities and you&apos;ve got something to get rid of, give us a call. Worst case, you get a free quote.
            </p>
          </div>

          <aside className="rounded-2xl border border-ink/10 bg-cream p-6">
            <div className="text-sm font-bold uppercase tracking-wider text-brand">Our Values</div>
            <ul className="mt-3 space-y-2">
              {VALUES.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {v}
                </li>
              ))}
            </ul>
            <Link href="/get-a-quote" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-brand py-3 font-bold text-white hover:bg-brand-dark">
              Get a Free Quote →
            </Link>
          </aside>
        </div>
      </Section>

      <WhyUs />
      <CTASection />
    </>
  );
}
