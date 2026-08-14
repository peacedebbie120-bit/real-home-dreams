import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SiteLayout, CtaBand, PageHero, Rating, BUSINESS } from "@/components/site/Layout";
import { reviews } from "@/components/site/data";

const title = "Reviews | Mmatli Construction Johannesburg";
const description =
  "Mmatli Construction is rated 4.8 from 5 Google reviews. Read what Johannesburg clients say about our building, renovation and structural work.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://real-home-dreams.lovable.app/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://real-home-dreams.lovable.app/reviews" }],
  }),
  component: Reviews,
});

const breakdown = [
  { stars: 5, pct: 80 },
  { stars: 4, pct: 20 },
  { stars: 3, pct: 0 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

function Reviews() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Reputation"
        title="What our clients say"
        intro="Most of our work comes through referrals from clients and site contacts around Johannesburg. Here is the public record."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
          <aside className="rounded-xl bg-card p-6 shadow-card">
            <div className="font-display text-5xl font-bold">{BUSINESS.rating}</div>
            <Rating className="mt-2 text-xs" />
            <ul className="mt-6 space-y-2">
              {breakdown.map((row) => (
                <li key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="flex w-10 items-center gap-1">
                    {row.stars}
                    <Star className="h-3 w-3 fill-primary text-primary" />
                  </span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                    <span
                      className="block h-full rounded-full bg-primary"
                      style={{ width: `${row.pct}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Reviews shown are from our Google Business profile.
            </p>
          </aside>

          <div className="space-y-6">
            {reviews.map((r) => (
              <article key={r.name} className="rounded-xl bg-card p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full surface-steel font-display font-bold">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <h2 className="text-base">{r.name}</h2>
                    <p className="text-xs text-muted-foreground">{r.meta}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{r.body}</p>
                {r.reply ? (
                  <div className="mt-4 rounded-lg bg-concrete p-4 text-sm">
                    <p className="eyebrow text-muted-foreground">Response from the owner</p>
                    <p className="mt-2">{r.reply}</p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Join our next satisfied client" />
      <div className="h-8" />
    </SiteLayout>
  );
}
