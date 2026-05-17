import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews | Five-Star Google Reviews | Extractors Junk Removal",
  description: "Read what Orange County and LA County neighbors are saying about Extractors Junk Removal — junk removal, cleanouts, demolition.",
  alternates: { canonical: "/reviews" },
};

const REVIEWS = [
  { name: "Darrell S.", area: "Cypress", body: "Very dependable, great personality, works fast, easy to communicate with. Made a huge task for us simple. When arriving he's ready to work. Big recommendation for this business and I'm picky. Good prices, no matter how difficult the job." },
  { name: "Polly D.", area: "Anaheim", body: "This company absolutely crushed it. After reaching out to many companies, this one had the quickest response time, made everything super easy, had fair prices and got the job done." },
  { name: "Roger M.", area: "Long Beach", body: "Jesse responded quickly to my inquiry this morning and by the afternoon he was able to swing by and pick up my old furniture. His price was fair and service was fast and professional." },
  { name: "Wouter J.", area: "Garden Grove", body: "Extractors Junk Removal is truly top-notch! They were quick, timely, and incredibly efficient from start to finish. The pricing was affordable without sacrificing quality, and their professional customer service made the entire process stress-free." },
  { name: "Brian C.", area: "Cypress", body: "The pickup and estimate was easy and reasonable to arrange. The event came off as planned. The person we worked with, Jesse, was quick and thorough and pleasant to deal with. Overall we are very satisfied." },
  { name: "Lori V.", area: "Cypress", body: "Jesse and his crew were quick to respond and show up — even came out on a rainy evening. Fair price, friendly, and handled a tough job with ease. Would happily hire them again." },
  { name: "Steven N.", area: "Anaheim", body: "I had them perform a job moving dirt and grass — they did a great job. They communicated well with me and their pricing is very fair. I would use them again and recommend them to people I know." },
  { name: "Loni P.", area: "Long Beach", body: "Called Jesse Saturday for Monday removal. He quoted me over the phone. He did an amazing job. Would have paid twice as much. Cheap. Professional. Fast. Easy transaction. I can't thank him enough." },
  { name: "Maria A.", area: "Cerritos", body: "Cleared out my mom's garage in a single afternoon. The crew was respectful, careful with things we wanted to keep, and Jesse was straight with us on price." },
  { name: "Kevin O.", area: "Buena Park", body: "Hot tub removal from the backyard. Cut it up in place, hauled every piece off the deck, swept up after. Worth every dollar." },
  { name: "Tina M.", area: "Westminster", body: "Apartment turnover for a property I manage — they did three units back-to-back in the same week. COI on file, net-30 invoicing, no fuss." },
  { name: "James R.", area: "Lakewood", body: "Old fence in the side yard, plus a bunch of yard waste from a tree trim. Same-day service, fair price, no upsell. Will use again." },
];

export default function ReviewsPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews"
        title="Real Reviews from Real OC & LA County Customers"
        subtitle="The only marketing budget we&apos;ve ever had. Real neighbors, real jobs, real reviews."
      />

      <Section>
        <div className="rounded-2xl border border-ink/10 bg-cream p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="text-5xl font-extrabold text-ink">{SITE.rating.value}</div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-sm text-ink/70">Based on {SITE.rating.count}+ Google reviews</div>
              </div>
            </div>
            <a
              href={SITE.socials.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 font-bold text-white hover:bg-brand-dark"
            >
              Read all reviews on Google →
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 text-ink/80">&ldquo;{r.body}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-ink">
                {r.name} <span className="font-normal text-ink/60">— {r.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
