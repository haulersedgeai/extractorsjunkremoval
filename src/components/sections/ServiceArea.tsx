import Link from "next/link";
import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { OC_LOCATIONS, LA_LOCATIONS } from "@/content/locations";

export function ServiceArea({ heading = "Where We Work" }: { heading?: string }) {
  return (
    <Section bg="ink">
      <div className="max-w-2xl">
        <div className="text-sm font-bold uppercase tracking-wider text-accent">Service Area</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">{heading}</h2>
        <p className="mt-3 text-white/75">
          Headquartered in Cypress, working across the entire OC + LA County corridor. If you're within 30 minutes of our shop on Lincoln Ave, we're already on the route.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-accent/80">Orange County</div>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {OC_LOCATIONS.map((c) => (
              <li key={c.slug}>
                <Link href={`/locations/${c.slug}`} className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-accent">
                  <MapPin className="h-3.5 w-3.5" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-accent/80">Los Angeles County</div>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {LA_LOCATIONS.map((n) => (
              <li key={n.slug}>
                <Link href={`/locations/${n.slug}`} className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-accent">
                  <MapPin className="h-3.5 w-3.5" />
                  {n.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
