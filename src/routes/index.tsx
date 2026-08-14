import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Ruler, HardHat, Sparkles } from "lucide-react";
import { SiteLayout, CtaBand, CallButton, QuoteButton, Rating, BUSINESS } from "@/components/site/Layout";
import hero from "@/assets/hero-home.jpg";
import bathroom from "@/assets/bathroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import roofing from "@/assets/roofing.jpg";
import patio from "@/assets/patio.jpg";
import floors from "@/assets/floors.jpg";
import poolHouse from "@/assets/pool-house.jpg";
import vanity from "@/assets/vanity.jpg";
import brickwork from "@/assets/brickwork.jpg";
import trusses from "@/assets/trusses.jpg";
import interior from "@/assets/interior.jpg";


const title = "Home Renovations & Construction Roodepoort | Free Quotes";
const description =
  "Trusted Roodepoort renovation and construction team. Bathrooms, kitchens, roof repairs, patios and home repairs. 4.6★ from 41 Google reviews. Call 064 697 8856.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const gallery = [
  { src: bathroom, alt: "Newly renovated bathroom with walk-in glass shower", label: "Bathroom renovation" },
  { src: roofing, alt: "Roofers replacing damaged roof tiles", label: "Roof repairs" },
  { src: kitchen, alt: "Renovated open-plan kitchen with stone countertops", label: "Kitchen upgrade" },
  { src: patio, alt: "New covered patio with built-in braai", label: "Patio & braai build" },
  { src: floors, alt: "Newly screeded and tiled floor in a bright room", label: "Floor repairs" },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Fully renovated Roodepoort family home at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.2_0.014_60/0.72)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-ink-foreground md:py-36">
          <p className="eyebrow text-primary">Florida Park · Roodepoort · West Rand</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
            Renovations done properly — the first time.
          </h1>
          <p className="mt-6 max-w-xl text-base opacity-90 md:text-lg">
            From leaking roofs and lifting floors to full bathroom and kitchen
            makeovers. {BUSINESS.owner} and his teams show up on time, quote honestly
            and finish what they start.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton label={`Call ${BUSINESS.phone}`} />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 font-display text-sm font-bold uppercase tracking-widest transition-colors hover:bg-white/10"
            >
              Get a free quote
            </Link>
          </div>
          <Rating className="mt-8" />
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Insurance-ready", text: "Reports and repairs assessors accept." },
            { icon: Ruler, title: "Fixed written quotes", text: "Itemised, no hidden extras." },
            { icon: HardHat, title: "Own trusted teams", text: "No fly-by-night subcontractors." },
            { icon: Sparkles, title: "Clean handover", text: "Site cleared, snags closed out." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <item.icon className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-muted-foreground">Why homeowners call us back</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              The team engineers call when nobody else can find the problem
            </h2>
            <p className="mt-5 text-muted-foreground">
              We started with small home repairs in Florida Park and grew purely on
              word of mouth. Today we handle everything from stubborn damp and
              lifting floors to full construction and extensions — always with the
              same approach: diagnose properly, price fairly, fix it once.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Free on-site assessment and written quote",
                "Cost-effective solutions, not upsells",
                "Work completed on time and on budget",
                "Guaranteed workmanship on every job",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton />
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-ink-foreground transition-transform hover:-translate-y-0.5"
              >
                View services
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={bathroom}
              alt="Completed bathroom renovation in Roodepoort"
              width={1200}
              height={912}
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-xl object-cover shadow-card"
            />
            <img
              src={patio}
              alt="Covered patio extension with braai"
              width={1200}
              height={912}
              loading="lazy"
              className="h-40 w-full rounded-xl object-cover shadow-card"
            />
            <img
              src={kitchen}
              alt="Kitchen renovation with new cabinetry"
              width={1200}
              height={912}
              loading="lazy"
              className="h-40 w-full rounded-xl object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-muted-foreground">Recent work</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Real projects, real finishes</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.label} className="group overflow-hidden rounded-xl bg-card shadow-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide">
                  {item.label}
                </figcaption>
              </figure>
            ))}
            <div className="flex flex-col justify-center rounded-xl border border-dashed border-border p-6">
              <h3 className="text-lg">Your project next?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us a few photos and we'll tell you what it will really take.
              </p>
              <div className="mt-5">
                <QuoteButton label="Start here" full />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              quote:
                "Insurance engineers had no idea what was causing my floor to lift. George was professional, arrived exactly when he said he would, and would not leave until it was sorted.",
              name: "Anthony Bailey",
            },
            {
              quote:
                "5 stars — more if I could. Honest, reliable and very patient. The quality of workmanship and the friendliness stood out. I would highly recommend George.",
              name: "Yvette Lourens",
            },
            {
              quote:
                "Extremely reliable, cost-effective solutions, completed efficiently and on time. The quality of his work speaks for itself.",
              name: "Marisa Bornman",
            },
          ].map((r) => (
            <blockquote key={r.name} className="rounded-xl bg-card p-6 shadow-card">
              <Rating className="text-xs" />
              <p className="mt-4 text-sm leading-relaxed">"{r.quote}"</p>
              <footer className="mt-4 font-display text-sm font-bold uppercase tracking-wide">
                {r.name}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/reviews" className="font-display text-sm font-bold uppercase tracking-widest underline">
            Read all 41 reviews
          </Link>
        </div>
      </section>

      <CtaBand />
      <div className="h-8" />
    </SiteLayout>
  );
}
