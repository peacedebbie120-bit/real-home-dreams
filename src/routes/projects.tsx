import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CtaBand, PageHero } from "@/components/site/Layout";
import { gallery, processSteps } from "@/components/site/data";

const title = "Our Projects | Mmatli Construction Johannesburg";
const description =
  "Photos from Mmatli Construction sites in Johannesburg: foundations and rebar, face brickwork, roof trusses, aluminium windows, tiling and custom steelwork.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://real-home-dreams.lovable.app/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://real-home-dreams.lovable.app/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our work"
        title="Real sites, real finishes"
        intro="Every photo below is our own work in and around Johannesburg — from the first line of lime on the ground to the last window fitted."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.title} className="overflow-hidden rounded-xl bg-card shadow-card">
              <img
                src={g.src}
                alt={g.alt}
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-5 text-sm">
                <h2 className="text-lg">{g.title}</h2>
                <p className="mt-2 text-muted-foreground">{g.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-concrete">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow text-muted-foreground">Our process</p>
          <h2 className="mt-3 text-3xl md:text-5xl">How a job runs with us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.step} className="rounded-xl bg-card p-6 shadow-card">
                <span className="font-display text-4xl font-bold text-primary">{p.step}</span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-14">
        <CtaBand heading="Want work like this on your property?" />
      </div>
    </SiteLayout>
  );
}
