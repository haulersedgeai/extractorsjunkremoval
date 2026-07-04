import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { SERVICES, getService, SERVICE_CATEGORIES, getServicesByCategory } from "@/content/services";
import { SITE } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Container";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { FaqList } from "@/components/sections/FaqList";
import { ServiceArea } from "@/components/sections/ServiceArea";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: { title: svc.metaTitle, description: svc.metaDescription },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const category = SERVICE_CATEGORIES[svc.category];
  const siblings = svc.isHub ? getServicesByCategory(svc.category) : [];

  return (
    <>
      <Hero eyebrow={`OC & LA · ${category.label}`} title={svc.h1} subtitle={svc.intro.split(". ").slice(0, 1).join(". ") + "."} />

      <Section>
        <nav className="mb-4 flex items-center gap-1 text-sm text-ink/60">
          <Link href="/" className="hover:text-brand">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/services" className="hover:text-brand">Services</Link>
          <ChevronRight className="h-4 w-4" />
          {!svc.isHub && (
            <>
              <Link href={`/services/${category.slug}`} className="hover:text-brand">{category.label}</Link>
              <ChevronRight className="h-4 w-4" />
            </>
          )}
          <span className="font-semibold text-ink">{svc.shortTitle}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{svc.title}</h2>
            <p className="mt-4 whitespace-pre-line text-lg text-ink/80">{svc.intro}</p>

            <h3 className="mt-10 font-display text-xl font-extrabold text-ink">What&apos;s Included</h3>
            <ul className="mt-4 space-y-2">
              {svc.whatsIncluded.map((it) => (
                <li key={it} className="flex items-start gap-2 text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {it}
                </li>
              ))}
            </ul>

            {svc.items && svc.items.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-xl font-extrabold text-ink">
                  {svc.category === "demolitions" ? "What We Demolish" : svc.category === "clean-outs" ? "What We Clean Out" : svc.category === "commercial" ? "Commercial Services" : "What We Take"}
                </h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  {svc.items.map((g, i) => (
                    <div key={i} className="rounded-2xl border border-ink/10 bg-cream p-5">
                      {g.heading && <div className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">{g.heading}</div>}
                      <ul className="space-y-1.5">
                        {g.items.map((it) => (
                          <li key={it} className="text-sm text-ink/80">• {it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {svc.isHub && siblings.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-xl font-extrabold text-ink">{category.label} Services</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {siblings.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-2xl border border-ink/10 bg-white p-5 transition-all hover:border-brand/30 hover:shadow-md"
                    >
                      <div className="font-bold text-ink">{s.shortTitle}</div>
                      <p className="mt-1 line-clamp-2 text-sm text-ink/70">{s.intro}</p>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {svc.faq && svc.faq.length > 0 && (
              <>
                <h3 className="mt-12 font-display text-xl font-extrabold text-ink">Frequently Asked</h3>
                <div className="mt-4">
                  <FaqList items={svc.faq} />
                </div>
              </>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="text-sm font-bold uppercase tracking-wider text-brand">Get a Quote</div>
              <div className="mt-2 text-lg font-bold text-ink">Same-day pickup across OC & LA</div>
              <p className="mt-2 text-sm text-ink/70">
                Text us a photo. We&apos;ll quote you in minutes and book you for today or tomorrow.
              </p>
              <Link href="/get-a-quote" className="mt-4 block rounded-md bg-brand py-3 text-center font-bold text-white hover:bg-brand-dark">
                Free Quote →
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="mt-2 block rounded-md border-2 border-brand py-3 text-center font-bold text-brand hover:bg-brand hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <div className="text-sm font-bold uppercase tracking-wider text-brand">Other Services</div>
              <ul className="mt-3 space-y-1.5">
                {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map((k) => (
                  <li key={k}>
                    <Link href={`/services/${SERVICE_CATEGORIES[k].slug}`} className="text-sm text-ink hover:text-brand">
                      {SERVICE_CATEGORIES[k].label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Process steps={svc.process ?? [
        { title: "Text us a photo", body: "Snap a pic and send it over. Same-day quote." },
        { title: "Pick a window", body: "Same-day and next-day windows across OC and LA." },
        { title: "We do the work", body: "Two-person uniformed crew. We lift, load, sweep, and haul." },
        { title: "Pay when done", body: "Upfront price, payment when you're happy." },
      ]} />

      <WhyUs heading="Why OC & LA Hire Us for This Job" />
      <RelatedServices slugs={svc.relatedSlugs} />
      <ServiceArea />
      <CTASection
        heading={`Need ${svc.shortTitle.toLowerCase()} today?`}
        body="Text a photo for a same-day quote. We'll book you in for today or tomorrow."
      />
    </>
  );
}
