import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery | Before & After Junk Removal Jobs | Extractors",
  description: "Real before-and-after photos of junk removal, cleanouts, and light demolition jobs across Cypress, Anaheim, Long Beach, and OC.",
  alternates: { canonical: "/gallery" },
};

const SHOWCASE = [
  { title: "Garage Cleanout — Cypress", category: "Cleanouts", img: "/images/cleanout.png", alt: "Cypress garage cleared out and swept by Extractors Junk Removal", body: "From not-a-single-square-inch to able-to-park-a-car-again. One afternoon." },
  { title: "Hot Tub Removal — Anaheim Hills", category: "Demolition", img: "/images/demo-structure.png", alt: "Hot tub cut down and staged for haul-away in Anaheim Hills", body: "Cut the shell in place, hauled every piece off the deck. Final sweep included." },
  { title: "Furniture Haul — Long Beach", category: "Junk Removal", img: "/images/job-1.jpeg", alt: "Furniture and mattress loaded out of a Long Beach walk-up apartment", body: "Couch, mattress, and a broken treadmill out of a third-floor walk-up." },
  { title: "Estate Cleanout — Cerritos", category: "Cleanouts", img: "/images/job-3.jpeg", alt: "Estate cleanout in Cerritos — trailer loaded with household contents", body: "Two days of work, donation routing, and a broom-swept handoff to the family." },
  { title: "Construction Haul — Garden Grove", category: "Construction Debris", img: "/images/job-2.png", alt: "Full trailer of remodel debris hauled from a Garden Grove job site", body: "Full trailer of remodel debris in one trip. Cheaper than the dumpster quote." },
  { title: "Light Demo — Buena Park", category: "Demolitions", img: "/images/demolitions.png", alt: "Shed and fence demolition job site in Buena Park", body: "Old shed and fence, gone in a single visit." },
  { title: "Long Beach Apartment Turnover", category: "Cleanouts", img: "/images/long-beach.jpg", alt: "Post-tenant turnover pack-out in a Long Beach apartment", body: "Full pack-out for a post-tenant turnover. Net-30 invoiced for the property manager." },
  { title: "Truck on the job", category: "Crew", img: "/images/truck-1.png", alt: "Extractors Junk Removal truck and trailer on Lincoln Ave in Cypress", body: "Our trailer parked on Lincoln Ave in Cypress — ready for the next call." },
  { title: "Dumpster Trailer Drop", category: "Commercial", img: "/images/dumpsters.png", alt: "Extractors Junk Removal dumpster trailer dropped in a driveway", body: "Limited dumpster trailer rental for contractors and homeowners on multi-day jobs." },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="Real Jobs Across OC and LA County"
        subtitle="Every photo is a real job for a real Orange County or LA County customer. This is the kind of work we do every week."
        showRating={false}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-cream">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-brand">{s.category}</div>
                <h3 className="mt-1 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/60">
          More photos posted regularly — follow us on{" "}
          <a href="https://www.instagram.com/extractors_junkremoval/" className="font-bold text-brand">
            Instagram
          </a>{" "}
          for daily job pics.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
