import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, Phone, MapPin, Clock, Star, X, MessageCircle, FileText } from "lucide-react";

export const BUSINESS = {
  name: "Mmatli Construction",
  tagline: "Construction company · Johannesburg",
  phone: "065 888 5185",
  phoneHref: "tel:+27658885185",
  whatsapp: "https://wa.me/27658885185",
  address: "Office 506, 38 Melle St, Braamfontein, Johannesburg, 2000",
  plusCode: "R25P+48 Johannesburg",
  hours: "Mon–Fri 08:00–15:00",
  rating: "4.8",
  reviewCount: 5,
} as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function CallButton({ label = "Call now", full }: { label?: string; full?: boolean }) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-display text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-accent ${full ? "w-full" : ""}`}
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}

export function QuoteButton({ label = "Get a free quote", full }: { label?: string; full?: boolean }) {
  return (
    <Link
      to="/quote"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 ${full ? "w-full" : ""}`}
    >
      <FileText className="h-4 w-4" />
      {label}
    </Link>
  );
}

export function Rating({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-sm ${className}`}>
      <span className="flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </span>
      <strong>{BUSINESS.rating}</strong>
      <span className="opacity-70">({BUSINESS.reviewCount} Google reviews)</span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-md surface-steel font-display text-xl font-bold">
            MC
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold uppercase tracking-wide">
              Mmatli Construction
            </span>
            <span className="block text-xs text-muted-foreground">
              Braamfontein · Johannesburg
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="font-display text-sm font-semibold uppercase tracking-wide transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneHref}
            className="font-display text-sm font-semibold uppercase tracking-wide hover:text-primary"
          >
            {BUSINESS.phone}
          </a>
          <QuoteButton label="Get a quote" />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className="hazard-rule" />

      {open && (
        <div className="border-t border-border bg-card px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-base font-semibold uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <QuoteButton full />
            <CallButton label={`Call ${BUSINESS.phone}`} full />
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 surface-steel">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl">{BUSINESS.name}</h3>
          <p className="mt-3 text-sm opacity-80">
            Johannesburg-based building contractor. New builds, extensions, renovations,
            structural work and maintenance across Braamfontein, Sandton, Soweto,
            Randburg, Midrand and the wider Gauteng area.
          </p>
          <Rating className="mt-4 opacity-90" />
        </div>
        <div className="text-sm">
          <h4 className="eyebrow opacity-70">Contact</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href={BUSINESS.phoneHref} className="hover:underline">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
              <a href={BUSINESS.whatsapp} className="hover:underline">
                WhatsApp us a photo
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>
                {BUSINESS.address}
                <br />
                <span className="opacity-70">{BUSINESS.plusCode}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              <span>{BUSINESS.hours} · site calls anytime</span>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="eyebrow opacity-70">Pages</h4>
          <ul className="mt-4 space-y-3">
            {[...nav, { to: "/quote", label: "Get a quote" } as const].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-card lg:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex flex-col items-center gap-1 py-3 font-display text-xs font-semibold uppercase tracking-wider"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href={BUSINESS.whatsapp}
        className="flex flex-col items-center gap-1 border-x border-border py-3 font-display text-xs font-semibold uppercase tracking-wider"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        to="/quote"
        className="flex flex-col items-center gap-1 bg-primary py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground"
      >
        <FileText className="h-4 w-4" />
        Get quote
      </Link>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="h-16 lg:hidden" />
      <MobileBar />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-3 text-4xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  heading = "Get a free, itemised quote",
  body = "Tell us about your project — new build, renovation, structural work or maintenance. We'll come out, measure up and quote within 48 hours.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl surface-steel px-6 py-12 text-center shadow-lift md:px-14">
        <p className="eyebrow text-primary">No obligation · free site visit</p>
        <h2 className="mt-3 text-3xl md:text-5xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm opacity-80">{body}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <QuoteButton label="Request my quote" />
          <a
            href={BUSINESS.whatsapp}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 font-display text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
