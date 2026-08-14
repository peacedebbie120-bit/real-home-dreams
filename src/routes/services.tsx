import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CtaBand, CallButton, QuoteButton } from "@/components/site/Layout";
import bathroom from "@/assets/bathroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import roofing from "@/assets/roofing.jpg";
import patio from "@/assets/patio.jpg";
import floors from "@/assets/floor-stripout.jpg";
import hero from "@/assets/brickwork.jpg";


const title = "Renovation & Construction Services | Roodepoort";
const description =
  "Bathroom and kitchen renovations, roof repairs, patios, floor and damp repairs, extensions and general construction across Roodepoort and the West Rand.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    src: bathroom,
    title: "Bathroom renovations",
    text: "Full strip-outs and rebuilds: waterproofing, tiling, plumbing, new suites, vanities and shower enclosures. Finished neatly and on schedule.",
    points: ["Waterproofing & screeds", "Tiling and grouting", "Plumbing & fittings"],
  },
  {
    src: kitchen,
    title: "Kitchen & interior upgrades",
    text: "Cabinetry, countertops, splashbacks, lighting and layout changes that make an older home feel new without a full rebuild.",
    points: ["Cupboards & tops", "Ceilings & cornices", "Painting & finishes"],
  },
  {
    src: roofing,
    title: "Roof repairs & waterproofing",
    text: "Leak tracing, tile and sheeting replacement, ridge repointing, gutters and full waterproofing systems — including insurance work.",
    points: ["Leak detection", "Tile & sheet replacement", "Gutters & flashings"],
  },
  {
    src: floors,
    title: "Floor, damp & structural repairs",
    text: "Lifting floors, cracked screeds, rising damp and settlement cracks properly diagnosed and repaired, not just covered up.",
    points: ["Screeds & tiling", "Damp proofing", "Crack & plaster repair"],
  },
  {
    src: patio,
    title: "Patios, braais & outdoor living",
    text: "Covered patios, braai rooms, paving, boundary walls and patio removals — built to match your home's existing brick and roof lines.",
    points: ["Patio builds & removals", "Paving & walls", "Built-in braais"],
  },
  {
    src: hero,
    title: "Extensions & general construction",
    text: "Extra rooms, garages, granny flats and full renovations managed end to end, with plans and trades coordinated for you.",
    points: ["Room additions", "Garages & flatlets", "Project management"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow text-muted-foreground">What we do</p>
          <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">
            Home renovation and construction services
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            One team for the whole job — from a single leaking roof to a full home
            renovation. Everything is quoted in writing, itemised and guaranteed.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CallButton />
            <QuoteButton />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-xl bg-card shadow-card">
              <img
                src={s.src}
                alt={s.title}
                width={1600}
                height={1200}
                loading="lazy"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-muted-foreground">How it works</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Four simple steps</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Call or WhatsApp", "Tell us the problem and send photos if you have them."],
              ["02", "Free site visit", "We inspect, diagnose the real cause and measure up."],
              ["03", "Written quote", "Itemised pricing and timeline, with no hidden extras."],
              ["04", "Build & hand over", "Tidy site, snags closed, workmanship guaranteed."],
            ].map(([num, head, text]) => (
              <li key={num} className="rounded-xl bg-card p-6 shadow-card">
                <span className="font-display text-3xl font-bold text-primary">{num}</span>
                <h3 className="mt-2 text-base">{head}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="py-16">
        <CtaBand />
      </div>
    </SiteLayout>
  );
}
