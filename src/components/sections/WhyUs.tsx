import { ShieldCheck, Clock, DollarSign, Heart, Truck, Star } from "lucide-react";
import { Section } from "@/components/ui/Container";

const REASONS = [
  { icon: Star, title: "Five-Star Reviews", body: "Real Google reviews from real OC and LA County neighbors. Read them — Jesse and the crew show up the same way every job." },
  { icon: Heart, title: "Family-Owned & Local", body: "Based on Lincoln Ave in Cypress. We live here. Your job goes to the owner's crew, not a national call center." },
  { icon: DollarSign, title: "Upfront Pricing", body: "You see the price before we lift a finger. No fuel surcharges, no weighing the truck, no surprise add-ons at the curb." },
  { icon: Clock, title: "Same-Day & Next-Day", body: "We hold open spots every day for last-minute calls. Text a photo and we'll often be there before sunset." },
  { icon: ShieldCheck, title: "Licensed & Insured", body: "Full liability coverage for junk removal and light demolition. COI available for property managers and HOAs." },
  { icon: Truck, title: "Donate, Recycle, Repeat", body: "We route reusable items to local OC and LA County charities and recycle metals and electronics before the landfill ever gets a vote." },
];

export function WhyUs({ heading = "Why Orange County & LA Pick Extractors" }: { heading?: string }) {
  return (
    <Section bg="cream">
      <div className="max-w-2xl">
        <div className="text-sm font-bold uppercase tracking-wider text-brand">Why Us</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r) => (
          <div key={r.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <r.icon className="h-8 w-8 text-brand" />
            <div className="mt-3 text-lg font-bold text-ink">{r.title}</div>
            <p className="mt-1.5 text-ink/70">{r.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
