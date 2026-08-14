import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import {
  SiteLayout,
  CtaBand,
  CallButton,
  QuoteButton,
  Rating,
  BUSINESS,
} from "@/components/site/Layout";
import { gallery, services, reviews, processSteps } from "@/components/site/data";

const title = "Mmatli Construction | Building Contractor in Johannesburg";
const description =
  "Mmatli Construction is a Johannesburg building contractor: new builds, extensions, renovations, concrete and structural work. Rated 4.8 on Google. Free quotes — call 065 888 5185.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://real-home-dreams.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://real-home-dreams.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: BUSINESS.name,
          telephone: "+27658885185",
          url: "https://real-home-dreams.lovable.app/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office 506, 38 Melle St, Braamfontein",
            addressLocality: "Johannesburg",
            postalCode: "2000",
            addressCountry: "ZA",
          },
          openingHours: "Mo-Fr 08:00-15:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BUSINESS.rating,
            reviewCount: BUSINESS.reviewCount,
          },
        }),
      },
    ],
  }),
  component: Home,
});

const trust = [
  { icon: Star, title: "4.8 / 5 on Google", body: "Rated by clients across Johannesburg." },
  { icon: MapPin, title: "Joburg based", body: "Braamfontein office, teams across Gauteng." },
  { icon: ShieldCheck, title: "Quoted properly", body: "Itemised pricing, no surprise extras." },
  { icon: Clock, title: "Free site visit", body: "We come out and measure at no cost." },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden surface-steel">
        <img
          src={gallery[0].src}
          alt={gallery[0].alt}
          width={1440}
          height={810}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="eyebrow text-primary">Building contractor · Braamfontein, Johannesburg</p>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
            Built straight, priced honestly, finished on time
          </h1>
          <p className="mt-6 max-w-xl text-base opacity-90">
            Mmatli Construction handles new builds, extensions, renovations and structural
            work across Johannesburg — from setting out the foundations to the final coat
            of paint.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteButton label="Get my free quote" />
            <CallButton label={`Call ${BUSINESS.phone}`} />
          </div>
          <Rating className="mt-8 opacity-90" />
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex gap-3">
              <t.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="text-lg">{t.title}</h2>
                <p className="text-sm text-muted-foreground">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-muted-foreground">What we do</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Services</h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="overflow-hidden rounded-xl bg-card shadow-card">
              <img
                src={s.photo}
                alt={s.alt}
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-concrete">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center">
          <img
            src={gallery[2].src}
            alt={gallery[2].alt}
            width={1600}
            height={1200}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
          />
          <div>
            <p className="eyebrow text-muted-foreground">Why clients stay with us</p>
            <h2 className="mt-3 text-3xl md:text-5xl">No shortcuts under the surface</h2>
            <ul className="mt-6 space-y-4 text-sm">
              {[
                "Foundations, reinforcement and concrete done to spec — not to the cheapest shortcut.",
                "One team leader responsible for your site, reachable on the phone every day.",
                "Materials quoted openly so you know exactly what you are paying for.",
                "Sites left swept and safe at the end of every working day.",
                "Snag list walked with you before we call the job finished.",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <QuoteButton />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow text-muted-foreground">How it works</p>
        <h2 className="mt-3 text-3xl md:text-5xl">Four steps to a finished job</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p) => (
            <div key={p.step} className="rounded-xl bg-card p-6 shadow-card">
              <span className="font-display text-4xl font-bold text-primary">{p.step}</span>
              <h3 className="mt-3 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-muted-foreground">Recent work</p>
            <h2 className="mt-3 text-3xl md:text-5xl">On site in Johannesburg</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest hover:text-primary"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((g) => (
            <figure key={g.title} className="overflow-hidden rounded-xl bg-card shadow-card">
              <img
                src={g.src}
                alt={g.alt}
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4 text-sm">
                <span className="font-display font-semibold uppercase tracking-wide">
                  {g.title}
                </span>
                <span className="mt-1 block text-muted-foreground">{g.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <p className="eyebrow text-muted-foreground">Reviews</p>
        <h2 className="mt-3 text-3xl md:text-5xl">Rated {BUSINESS.rating} on Google</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-xl bg-card p-6 shadow-card">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 text-sm">{r.body}</p>
              <footer className="mt-4 text-xs text-muted-foreground">
                {r.name} · {r.meta}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest hover:text-primary"
          >
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
      <div className="h-8" />
    </SiteLayout>
  );
}
