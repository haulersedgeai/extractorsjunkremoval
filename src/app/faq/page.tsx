import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Junk Removal Questions | Extractors Junk Removal",
  description: "Frequently asked questions about junk removal, cleanouts, demolition, pricing, scheduling, and service area in Orange County and LA County.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    section: "Booking & Scheduling",
    items: [
      { q: "How fast can you pick up?", a: "Most days we&apos;re at your door same-day or next-day. Call or text us early for the best chance at a same-day window." },
      { q: "Do I need to be home?", a: "In most cases, no. If the junk is accessible and we&apos;ve confirmed the quote, the job can be completed with remote approval. We&apos;ll send photos once we&apos;re done." },
      { q: "How do you confirm appointments?", a: "By text. We confirm the day before and again when our crew is on the way." },
      { q: "Do you work weekends?", a: "Yes — Monday through Saturday, 7am to 7pm. Sunday by request for time-sensitive jobs." },
    ],
  },
  {
    section: "Pricing & Payment",
    items: [
      { q: "How much does junk removal cost?", a: "Pricing depends on volume, type of items, and labor required. Single items typically start around $99, a quarter-trailer around $199, a full trailer in the $549–$699 range. We provide free upfront quotes before any work begins so there are no surprises." },
      { q: "Are there hidden fees?", a: "No. Disposal, recycling, fuel, and labor are all included in your quote. The number we say is the number you pay." },
      { q: "What payment methods do you accept?", a: "Cash, credit/debit cards, and digital payments. Payment is due once the job is complete." },
      { q: "Do you charge for quotes?", a: "Never. All quotes are free and no-obligation." },
    ],
  },
  {
    section: "Service Area & Logistics",
    items: [
      { q: "What areas do you serve?", a: "Cypress, Anaheim, Long Beach, and the surrounding cities — Buena Park, Stanton, Garden Grove, La Palma, Los Alamitos, Seal Beach, Westminster, Fountain Valley, Huntington Beach, Fullerton, Orange, Cerritos, Lakewood, Hawaiian Gardens, Artesia, Norwalk, La Mirada, Bellflower, Downey, Whittier, and more across Orange County and LA County." },
      { q: "Do I have to drag everything to the curb?", a: "No. We&apos;re full-service. Upstairs bedroom, backyard, garage, attic, behind the shed — we pull it from wherever it sits." },
      { q: "Can you handle tight access?", a: "Yes. Old Town Orange, Belmont Shore, Little Saigon, Old Towne Plaza — we work tight-access neighborhoods every day. Stair carries and narrow doorways come with the job." },
    ],
  },
  {
    section: "What We Take & Where It Goes",
    items: [
      { q: "What can you take?", a: "Almost anything: furniture, appliances, electronics, mattresses, yard waste, construction debris, household junk, hot tubs (case-by-case), light demolition debris. If you&apos;re not sure about an item, send a photo." },
      { q: "What can&apos;t you take?", a: "Hazardous waste, chemicals, paints/solvents, asbestos, gasoline or oil, large industrial equipment. These require specialized disposal — we can point you to the right facility." },
      { q: "Do you recycle or donate?", a: "Yes. Metal, electronics, cardboard, and appliances get recycled whenever possible. Usable items get donated to local Orange County and LA County charities. Keeps waste out of landfills and helps our community." },
    ],
  },
  {
    section: "About Us",
    items: [
      { q: "Are you licensed and insured?", a: "Yes — fully licensed and insured for junk removal AND light demolition. COI available on request." },
      { q: "Who&apos;s actually doing the work?", a: "Jesse and a small crew of Cypress locals. Uniformed and trained. No day labor, no subcontractors." },
      { q: "Do you offer commercial junk removal?", a: "Absolutely. We work with property managers, realtors, contractors, offices, and retail spaces. One-time hauling or recurring pickups — net-30 invoicing available for repeat accounts." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Hero
        eyebrow="FAQ"
        title="Common Questions About Extractors"
        subtitle="If your question isn't here, text us and we'll answer it directly."
        showRating={false}
      />
      <Section>
        <div className="space-y-12">
          {FAQS.map((section) => (
            <div key={section.section}>
              <h2 className="font-display text-2xl font-extrabold text-ink">{section.section}</h2>
              <div className="mt-4 rounded-2xl border border-ink/10 bg-white px-6">
                <FaqAccordion items={section.items} />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
