import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, Phone, MapPin, Clock, Star, X } from "lucide-react";

export const BUSINESS = {
  name: "Home Renovations & Construction Services",
  phone: "064 697 8856",
  phoneHref: "tel:+27646978856",
  whatsapp: "https://wa.me/27646978856",
  address: "Florida Park, Roodepoort, 1709",
  plusCode: "RWR6+2R Roodepoort",
  rating: "4.6",
  reviewCount: 41,
  owner: "George",
};

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function CallButton({ label = "Call now", full }: { label?: string; full?: boolean }) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 ${full ? "w-full" : ""}`}
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}

export function QuoteButton({ label = "Get a free quote", full }: { label?: string; full?: boolean }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-accent ${full ? "w-full" : ""}`}
    >
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md surface-ink font-display text-lg font-bold">
            H
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold uppercase tracking-wider">
              Home Renovations
            </span>
            <span className="block text-xs text-muted-foreground">
              &amp; Construction · Roodepoort
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
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

        <div className="hidden md:block">
          <CallButton label={BUSINESS.phone} />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 py-4 md:hidden">
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
            <CallButton label={`Call ${BUSINESS.phone}`} full />
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 surface-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-lg">{BUSINESS.name}</h3>
          <p className="mt-3 text-sm opacity-80">
            Family-run renovation and construction team serving Roodepoort, Florida Park,
            Randburg and the greater West Rand. Honest pricing, clean sites, workmanship
            that lasts.
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
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>
                {BUSINESS.address}
                <br />
                <span className="opacity-70">{BUSINESS.plusCode}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              <span>Mon–Sat, early starts. After-hours calls welcome.</span>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="eyebrow opacity-70">Pages</h4>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
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

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl surface-ink px-6 py-12 text-center shadow-lift md:px-14">
        <p className="eyebrow text-primary">Free, no-obligation quotes</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Tell us what needs fixing</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm opacity-80">
          Send a photo on WhatsApp or call {BUSINESS.owner} directly. Most quotes are
          back with you within 24 hours, with a clear breakdown and no surprises.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <CallButton label={`Call ${BUSINESS.phone}`} />
          <a
            href={BUSINESS.whatsapp}
            className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 font-display text-sm font-bold uppercase tracking-widest transition-colors hover:bg-white/10"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
