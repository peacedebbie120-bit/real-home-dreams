import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, CtaBand, PageHero, QuoteButton } from "@/components/site/Layout";
import { services } from "@/components/site/data";

const title = "Construction & Renovation Services | Mmatli Construction Johannesburg";
const description =
  "New builds, extensions, renovations, concrete and structural work, roofing, waterproofing, aluminium, steelwork, plastering and painting across Johannesburg.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://real-home-dreams.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://real-home-dreams.lovable.app/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Everything from foundations to final coat"
        intro="One contractor for the whole job — residential and commercial work across greater Johannesburg, quoted in writing before we start."
      />

      <section className="mx-auto max-w-6xl space-y-14 px-4 py-14">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className="grid gap-8 lg:grid-cols-2 lg:items-center"
            id={s.slug}
          >
            <img
              src={s.photo}
              alt={s.alt}
              width={1600}
              height={1200}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded-xl object-cover shadow-card ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            />
            <div>
              <h2 className="text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-sm text-muted-foreground">{s.blurb}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <QuoteButton label="Quote this work" />
              </div>
            </div>
          </article>
        ))}
      </section>

      <CtaBand />
      <div className="h-8" />
    </SiteLayout>
  );
}
