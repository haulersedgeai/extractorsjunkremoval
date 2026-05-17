import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { SITE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Junk Removal Rates Cypress, Anaheim, Long Beach | Extractors",
  description: "Transparent, upfront pricing for junk removal across Orange County and LA County. By truck volume, not by item. Most jobs $99–$699.",
  alternates: { canonical: "/pricing" },
};

const TIERS = [
  { name: "Single Item", price: "from $99", desc: "One couch, mattress, fridge, or washer — whatever fits in the bed of a pickup.", popular: false },
  { name: "1/4 Trailer", price: "from $199", desc: "A garage corner, a small bedroom set, or a curbside pile.", popular: false },
  { name: "1/2 Trailer", price: "from $349", desc: "A full garage cleanout, a small bedroom, or a fence demo.", popular: true },
  { name: "3/4 Trailer", price: "from $499", desc: "Most apartment move-outs and mid-size estate cleanouts.", popular: false },
  { name: "Full Trailer", price: "from $649", desc: "Whole-house cleanouts, big demos, multi-room hauls.", popular: false },
];

const INCLUDED = [
  "Two-person uniformed crew",
  "All loading and lifting",
  "Disposal, recycling, and donation fees",
  "Travel within OC and LA County",
  "Broom-sweep of the area we worked",
];

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title="Upfront Pricing. No Surprises."
        subtitle="We price by truck volume, not by item. You see the price before we lift a finger — and that&apos;s the price you pay."
        showRating={false}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 shadow-sm transition-all ${t.popular ? "border-brand bg-cream relative shadow-md" : "border-ink/10 bg-white"}`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most popular
                </div>
              )}
              <div className="text-sm font-bold uppercase tracking-wider text-brand">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold text-ink">{t.price}</div>
              <p className="mt-2 text-sm text-ink/70">{t.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-ink/70">
          Pricing varies slightly with stairs, distance from the truck, and special items (hot tubs, pianos, refrigerants). We tell you up front — no surprises at the curb. For demolition jobs we quote flat-rate.
        </p>
      </Section>

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-brand">What&apos;s Included</div>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">Every price includes</h2>
            <ul className="mt-6 space-y-2">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-2 text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-wider text-brand">Want an exact quote?</div>
            <div className="mt-2 text-2xl font-extrabold text-ink">Text us a photo.</div>
            <p className="mt-3 text-ink/75">
              The fastest, most accurate way to price your job is to send us a picture or short video. We respond same-day, usually within an hour.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/get-a-quote" className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">
                Free Quote →
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center rounded-md border-2 border-brand px-6 py-3 font-bold text-brand hover:bg-brand hover:text-white">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
