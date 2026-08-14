import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SiteLayout, CtaBand, Rating, BUSINESS } from "@/components/site/Layout";

const title = "Customer Reviews | Home Renovations Roodepoort";
const description =
  "Rated 4.6 from 41 Google reviews. Read what Roodepoort homeowners say about our bathroom renovations, roof repairs, patios and home repairs.";

export const Route = createFileRoute("/reviews")({
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
  component: Reviews,
});

const breakdown = [
  { stars: 5, pct: 88 },
  { stars: 4, pct: 7 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 2 },
];

const topics = [
  "bathroom renovation (3)",
  "patio removal (2)",
  "roof repairs (2)",
  "home repairs (2)",
  "floor repairs",
  "waterproofing",
];

const reviews = [
  {
    name: "Anthony Bailey",
    meta: "5 reviews · 4 photos · 2 years ago",
    body: "I had a problem with my floor lifting and had insurance assessors (engineers) inspect the problem — they had no idea what was causing it. I contacted George and he was very professional. He arrived at the appointed time and would not leave until he had found the cause and sorted it out properly.",
    reply: "Thanks Tony. I'm glad we could assist. Thanks for the review.",
  },
  {
    name: "Yvette Lourens",
    meta: "Local Guide · 13 reviews · 10 months ago",
    body: "5 stars (more if I could). A great big thank you to George and his teams. Honest, reliable and very patient. And not forgetting the quality of workmanship and the friendliness. I would highly recommend George and would most definitely make use of them again.",
    reply: "Thanks Yvette. It's only a pleasure.",
  },
  {
    name: "Marisa Bornman",
    meta: "1 review · a year ago",
    body: "I had the pleasure of working with George on fixing up a room, and I couldn't be more satisfied with the results. He was extremely reliable, offering cost-effective solutions while completing the work efficiently and on time. The quality of his work speaks for itself, and I highly recommend him for any home improvement needs!",
    reply: "Thank you.",
  },
];

function Reviews() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow text-muted-foreground">Reputation</p>
          <h1 className="mt-3 text-4xl md:text-5xl">What our customers say</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Almost all of our work comes from referrals and repeat customers around
            Roodepoort. Here's the honest record.
          </p>
        </div>
      </section>

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
            <h2 className="mt-8 eyebrow text-muted-foreground">Mentioned most</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {topics.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-6">
            {reviews.map((r) => (
              <article key={r.name} className="rounded-xl bg-card p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full surface-ink font-display font-bold">
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
                <div className="mt-4 rounded-lg bg-sand p-4 text-sm">
                  <p className="eyebrow text-muted-foreground">Response from the owner</p>
                  <p className="mt-2">{r.reply}</p>
                </div>
              </article>
            ))}
            <p className="text-sm text-muted-foreground">
              Plus 38 more reviews on our Google Business profile.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
      <div className="h-8" />
    </SiteLayout>
  );
}
