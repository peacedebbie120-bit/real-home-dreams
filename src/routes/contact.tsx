import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteLayout, CallButton, PageHero, BUSINESS } from "@/components/site/Layout";

const title = "Contact Mmatli Construction | Braamfontein, Johannesburg";
const description =
  "Contact Mmatli Construction in Braamfontein, Johannesburg. Call 065 888 5185, WhatsApp us, or send an enquiry for building, renovation and structural work.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://real-home-dreams.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://real-home-dreams.lovable.app/contact" }],
  }),
  component: Contact,
});

const field =
  "mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Talk to the site office"
        intro="Phone us, WhatsApp a photo of the job, or drop a short message below. We answer every enquiry within one working day."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="rounded-xl bg-card p-6 shadow-card md:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 text-2xl">Message received</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  We'll be in touch shortly. For anything urgent, please call {BUSINESS.phone}.
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
                <h2 className="text-2xl">Send an enquiry</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Your name
                    <input required name="name" className={field} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone number
                    <input required name="phone" type="tel" className={field} />
                  </label>
                </div>
                <label className="block text-sm font-semibold">
                  Email (optional)
                  <input name="email" type="email" className={field} />
                </label>
                <label className="block text-sm font-semibold">
                  How can we help?
                  <textarea required name="message" rows={5} className={field} />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-xl surface-steel p-6 shadow-lift">
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
                  <span>{BUSINESS.hours} · site calls anytime</span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl bg-card shadow-card">
              <iframe
                title="Mmatli Construction office in Braamfontein, Johannesburg"
                src="https://www.openstreetmap.org/export/embed.html?bbox=28.02%2C-26.21%2C28.05%2C-26.18&layer=mapnik"
                className="h-64 w-full border-0"
                loading="lazy"
              />
              <div className="p-4 text-sm text-muted-foreground">
                Working across Braamfontein, Sandton, Randburg, Midrand, Soweto and the
                greater Johannesburg area.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
