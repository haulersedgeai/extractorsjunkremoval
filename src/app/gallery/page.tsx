import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery | Before & After Junk Removal Jobs | Extractors",
  description: "Real before-and-after photos of junk removal, cleanouts, and light demolition jobs across Cypress, Anaheim, Long Beach, and OC.",
  alternates: { canonical: "/gallery" },
};

const SHOWCASE = [
  { title: "Garage Cleanout — Cypress", category: "Cleanouts", img: "/images/cleanout.png", body: "From not-a-single-square-inch to able-to-park-a-car-again. One afternoon." },
  { title: "Hot Tub Removal — Anaheim Hills", category: "Demolition", img: "/images/demo-structure.png", body: "Cut the shell in place, hauled every piece off the deck. Final sweep included." },
  { title: "Furniture Haul — Long Beach", category: "Junk Removal", img: "/images/job-1.jpeg", body: "Couch, mattress, and a broken treadmill out of a third-floor walk-up." },
  { title: "Estate Cleanout — Cerritos", category: "Cleanouts", img: "/images/job-3.jpeg", body: "Two days of work, donation routing, and a broom-swept handoff to the family." },
  { title: "Construction Haul — Garden Grove", category: "Construction Debris", img: "/images/job-2.png", body: "Full trailer of remodel debris in one trip. Cheaper than the dumpster quote." },
  { title: "Light Demo — Buena Park", category: "Demolitions", img: "/images/demolitions.png", body: "Old shed and fence, gone in a single visit." },
  { title: "Long Beach Apartment Turnover", category: "Cleanouts", img: "/images/long-beach.jpg", body: "Full pack-out for a post-tenant turnover. Net-30 invoiced for the property manager." },
  { title: "Truck on the job", category: "Crew", img: "/images/truck-1.png", body: "Our trailer parked on Lincoln Ave in Cypress — ready for the next call." },
  { title: "Dumpster Trailer Drop", category: "Commercial", img: "/images/dumpsters.png", body: "Limited dumpster trailer rental for contractors and homeowners on multi-day jobs." },
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
              <div
                className="aspect-[4/3] bg-cream bg-cover bg-center"
                style={{ backgroundImage: `url('${s.img}')` }}
              />
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
