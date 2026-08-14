import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteLayout, CallButton, BUSINESS } from "@/components/site/Layout";

const title = "Contact Us | Home Renovations Roodepoort · 064 697 8856";
const description =
  "Get a free renovation or construction quote in Roodepoort. Call 064 697 8856, WhatsApp us, or send your project details through the form.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

const services = [
  "Bathroom renovation",
  "Kitchen / interior upgrade",
  "Roof repairs & waterproofing",
  "Floor, damp or crack repairs",
  "Patio, braai or paving",
  "Extension / new build",
  "Something else",
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow text-muted-foreground">Get in touch</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Free quotes, straight answers</h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Speak to {BUSINESS.owner} directly. Tell us what's going on, send a photo,
            and we'll come out to look — at no cost.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="rounded-xl bg-card p-6 shadow-card md:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 text-2xl">Thanks — message received</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  We'll be in touch within 24 hours. If it's urgent, please call{" "}
                  {BUSINESS.phone}.
                </p>
                <div className="mt-6 flex justify-center">
                  <CallButton label={`Call ${BUSINESS.phone}`} />
                </div>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2 className="text-2xl">Request a quote</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Your name
                    <input
                      required
                      name="name"
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone number
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                </div>
                <label className="block text-sm font-semibold">
                  Email (optional)
                  <input
                    name="email"
                    type="email"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Suburb / area
                  <input
                    name="area"
                    placeholder="e.g. Florida Park, Roodepoort"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  What do you need done?
                  <select
                    name="service"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                  >
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-semibold">
                  Project details
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about the problem, the size of the job and when you'd like it done."
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Send my request
                </button>
                <p className="text-xs text-muted-foreground">
                  Prefer to talk? Call or WhatsApp {BUSINESS.phone} any time.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-xl surface-ink p-6 shadow-lift">
              <h2 className="text-xl">Contact details</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href={BUSINESS.phoneHref} className="hover:underline">
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                  <a href={BUSINESS.whatsapp} className="hover:underline">
                    WhatsApp us a photo
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {BUSINESS.address}
                    <br />
                    <span className="opacity-70">{BUSINESS.plusCode}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <span>Mon–Sat · early starts, after-hours calls welcome</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl bg-card shadow-card">
              <iframe
                title="Our service area in Roodepoort"
                src="https://www.openstreetmap.org/export/embed.html?bbox=27.88%2C-26.18%2C27.96%2C-26.12&layer=mapnik"
                className="h-64 w-full border-0"
                loading="lazy"
              />
              <div className="p-4 text-sm text-muted-foreground">
                Serving Roodepoort, Florida, Constantia Kloof, Weltevredenpark,
                Randburg and the greater West Rand.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
