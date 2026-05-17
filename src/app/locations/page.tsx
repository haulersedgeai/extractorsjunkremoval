import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { OC_LOCATIONS, LA_LOCATIONS } from "@/content/locations";

export const metadata: Metadata = {
  title: "Service Area | Orange County & LA County | Extractors Junk Removal",
  description: "Every city and neighborhood we serve across Orange County and Los Angeles County. Same-day junk removal, cleanouts, and light demolition.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <Hero
        eyebrow="Service Area"
        title="Where Extractors Works"
        subtitle="Headquartered in Cypress, working across Orange County and Los Angeles County every day."
        showRating={false}
      />

      <Section>
        <div className="text-sm font-bold uppercase tracking-wider text-brand">Orange County</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">Cities We Serve in OC</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OC_LOCATIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-brand/30"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <div>
                <div className="text-base font-bold text-ink group-hover:text-brand">{c.fullName}</div>
                <div className="text-xs text-ink/60">{c.county}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="cream">
        <div className="text-sm font-bold uppercase tracking-wider text-brand">Los Angeles County</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">Cities We Serve in LA County</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LA_LOCATIONS.map((n) => (
            <Link
              key={n.slug}
              href={`/locations/${n.slug}`}
              className="group flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-brand/30"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <div>
                <div className="text-base font-bold text-ink group-hover:text-brand">{n.fullName}</div>
                <div className="text-xs text-ink/60">{n.county}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
