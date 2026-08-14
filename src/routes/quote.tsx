import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Phone, MessageCircle, ShieldCheck, Clock, Wallet } from "lucide-react";
import { SiteLayout, CallButton, BUSINESS } from "@/components/site/Layout";
import { services } from "@/components/site/data";

const title = "Get a Free Building Quote | Mmatli Construction Johannesburg";
const description =
  "Request a free, itemised building quote from Mmatli Construction in Johannesburg. Send your project details and we respond within 24–48 hours. Call 065 888 5185.";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://real-home-dreams.lovable.app/quote" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://real-home-dreams.lovable.app/quote" }],
  }),
  component: Quote,
});

const budgets = [
  "Under R50 000",
  "R50 000 – R150 000",
  "R150 000 – R500 000",
  "R500 000 – R1 million",
  "Over R1 million",
  "Not sure yet",
];

const timelines = ["As soon as possible", "Within a month", "1–3 months", "Just planning ahead"];

const field =
  "mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal outline-none focus:ring-2 focus:ring-ring";

function Quote() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="surface-steel">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow text-primary">Free quote · no obligation</p>
          <h1 className="mt-3 text-4xl md:text-6xl">Tell us about your project</h1>
          <p className="mt-5 max-w-2xl text-sm opacity-85">
            Fill in the form and we'll come out to site, measure up and send you a written,
            itemised quote — usually within 48 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="rounded-xl bg-card p-6 shadow-card md:p-8">
            {sent ? (
              <div className="py-14 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 text-3xl">Request received</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  Thank you — we'll call you back to arrange a site visit. If it's urgent,
                  phone {BUSINESS.phone} and ask for the site office.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <CallButton label={`Call ${BUSINESS.phone}`} />
                  <a
                    href={BUSINESS.whatsapp}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send photos on WhatsApp
                  </a>
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
                <h2 className="text-2xl">Quote request</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Your name
                    <input required name="name" className={field} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone number
                    <input required name="phone" type="tel" className={field} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Email (optional)
                    <input name="email" type="email" className={field} />
                  </label>
                  <label className="block text-sm font-semibold">
                    Suburb / area
                    <input
                      required
                      name="area"
                      placeholder="e.g. Braamfontein, Randburg, Soweto"
                      className={field}
                    />
                  </label>
                </div>
                <label className="block text-sm font-semibold">
                  Type of work
                  <select name="service" className={field}>
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                    <option>Something else</option>
                  </select>
                </label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Budget range
                    <select name="budget" className={field}>
                      {budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm font-semibold">
                    When do you want to start?
                    <select name="timeline" className={field}>
                      {timelines.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block text-sm font-semibold">
                  Project details
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Size of the job, what needs doing, whether plans exist, access to site."
                    className={field}
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Send my quote request
                </button>
                <p className="text-xs text-muted-foreground">
                  Rather talk it through? Call or WhatsApp {BUSINESS.phone}.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-xl surface-steel p-6 shadow-lift">
              <h2 className="text-xl">What you get</h2>
              <ul className="mt-5 space-y-4 text-sm">
                {[
                  { icon: Clock, text: "A site visit at a time that suits you — free of charge." },
                  { icon: Wallet, text: "Itemised pricing for materials and labour, in writing." },
                  { icon: ShieldCheck, text: "A fixed programme with payment stages agreed up front." },
                ].map((row) => (
                  <li key={row.text} className="flex gap-3">
                    <row.icon className="h-5 w-5 shrink-0 text-primary" />
                    <span>{row.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-card p-6 shadow-card">
              <h2 className="text-xl">Prefer to phone?</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href={BUSINESS.phoneHref} className="hover:underline">
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                  <a href={BUSINESS.whatsapp} className="hover:underline">
                    WhatsApp us photos of the job
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <span>{BUSINESS.hours} · site calls anytime</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
