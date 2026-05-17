import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Items We Take | Junk Removal Cypress, Anaheim, Long Beach | Extractors",
  description: "From couches to construction debris, hot tubs to whole-home cleanouts — here&apos;s everything Extractors Junk Removal hauls across OC and LA County.",
  alternates: { canonical: "/items-we-take" },
};

const GROUPS = [
  {
    heading: "Furniture",
    items: ["Couches & sectionals", "Recliners & lift chairs", "Mattresses & box springs", "Bed frames & headboards", "Dressers & nightstands", "Dining tables & chairs", "Office desks & cubicles", "Bookshelves & china hutches", "Entertainment centers", "Outdoor patio furniture"],
  },
  {
    heading: "Appliances",
    items: ["Refrigerators & freezers", "Washers & dryers", "Ovens & ranges", "Dishwashers", "Microwaves & range hoods", "Water heaters", "Wine fridges & mini fridges", "Trash compactors", "Window AC units"],
  },
  {
    heading: "Electronics & E-Waste",
    items: ["Flat-screen TVs", "Tube and projection TVs", "Computers & monitors", "Printers & copiers", "Stereo equipment", "Gaming consoles", "Servers & networking gear", "Cables & batteries"],
  },
  {
    heading: "Yard & Outdoor",
    items: ["Tree branches & brush", "Leaves & green waste", "Palm fronds & banana leaves", "Sod & dirt (small loads)", "Old mulch & landscape rock", "Sheds (with demo)", "Hot tubs (case-by-case)", "Playsets & swingsets", "Above-ground pools"],
  },
  {
    heading: "Construction Debris",
    items: ["Drywall & plaster", "Lumber & framing scrap", "Tile & flooring", "Carpet & padding", "Cabinets & countertops", "Toilets, sinks & tubs", "Roofing shingles (small loads)", "Brick & stone"],
  },
  {
    heading: "Whole-Home & Estate",
    items: ["Whole-house cleanouts", "Estate cleanouts", "Hoarder cleanouts", "Foreclosure & eviction trash-outs", "Garage cleanouts", "Attic & basement cleanouts", "Storage unit cleanouts", "Office & commercial cleanouts"],
  },
  {
    heading: "Special / Heavy",
    items: ["Pool tables", "Gun safes", "Exercise equipment", "Riding lawnmowers", "Hot tubs & spas", "Pianos (upright, case-by-case)", "Above-ground pools", "Small trailers (case-by-case)"],
  },
];

const CANT = [
  "Hazardous waste, chemicals, solvents, paints, gasoline, oil",
  "Asbestos (requires a licensed California abatement contractor)",
  "Live ammunition or explosives",
  "Medical waste or biohazards (we&apos;ll refer you to a specialist)",
  "Large industrial equipment beyond our trailer&apos;s capacity",
];

export default function ItemsWeTakePage() {
  return (
    <>
      <Hero
        eyebrow="Items"
        title="What Extractors Takes"
        subtitle="Short answer: almost everything. Here&apos;s the long list."
        showRating={false}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.heading} className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="text-sm font-bold uppercase tracking-wider text-brand">{g.heading}</div>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-ink/80">• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section bg="cream">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-wider text-brand">What We Can&apos;t Take</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">A few things we don&apos;t haul</h2>
          <p className="mt-3 text-ink/75">
            For safety and legal reasons, the items below require specialized disposal. We can usually point you to the right facility or contractor.
          </p>
          <ul className="mt-6 space-y-2">
            {CANT.map((c) => (
              <li key={c} className="rounded-xl border border-ink/10 bg-white p-3 text-sm text-ink/80">• {c}</li>
            ))}
          </ul>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
