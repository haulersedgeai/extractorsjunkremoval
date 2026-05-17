import { Star } from "lucide-react";
import { Section } from "@/components/ui/Container";

const REVIEWS = [
  { name: "Darrell S.", area: "Cypress", body: "Very dependable, great personality, works fast and easy to communicate with. Made a huge task for us simple. When arriving he's ready to work. Big recommendation for this business and I'm picky. Good prices, no matter how difficult the job." },
  { name: "Polly D.", area: "Anaheim", body: "This company absolutely crushed it. After reaching out to many companies, this one had the quickest response time, made everything super easy, had fair prices and got the job done." },
  { name: "Roger M.", area: "Long Beach", body: "Jesse responded quickly to my inquiry this morning and by the afternoon he was able to swing by and pick up my old furniture. His price was fair and service was fast and professional." },
  { name: "Wouter J.", area: "Garden Grove", body: "Extractors Junk Removal is truly top-notch! They were quick, timely, and incredibly efficient from start to finish. Pricing was affordable without sacrificing quality, and their professional customer service made the entire process stress-free." },
  { name: "Lori V.", area: "Cypress", body: "Jesse and his crew were quick to respond and show up — even came out on a rainy evening. Fair price, friendly, and handled a tough job with ease. Would happily hire them again." },
  { name: "Loni P.", area: "Long Beach", body: "Called Jesse Saturday for Monday removal. He quoted me over the phone. He did an amazing job — would have paid twice as much. Cheap. Professional. Fast. Easy transaction. I can't thank him enough." },
];

export function ReviewsStrip({ heading = "What Our Customers Say" }: { heading?: string }) {
  return (
    <Section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-wider text-brand">Reviews</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-ink/70">Real Google reviews from real Orange County and LA County customers.</p>
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
  );
}
