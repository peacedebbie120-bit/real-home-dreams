# Mmatli Construction — Johannesburg Website

Replace the current Roodepoort renovation site in this project with a professional, lead-focused site for Mmatli Construction (Braamfontein, Johannesburg). Their 7 Google photos become the real imagery across the site.

## Business details used

- Name: Mmatli Construction — construction company
- Address: Office 506, 38 Melle St, Braamfontein, Johannesburg, 2000
- Phone: 065 888 5185 (click-to-call + WhatsApp)
- Rating: 4.8 from 5 Google reviews
- Hours: Mon–Fri, closes 3pm (shown as "office hours, site calls anytime")

## Pages

1. **Home** — hero with their strongest site photo, headline + quote CTA, trust strip (4.8 rating, Joburg-based, registered contractor, free site visit), services overview, "why choose us", project photo gallery, review highlights, quote form CTA band.
2. **Services** — commercial and residential building, renovations and fit-outs, concrete/brickwork/structural, roofing and waterproofing, painting and finishes, maintenance contracts. Each with a photo, what's included, and a quote CTA.
3. **Projects** — gallery of all 7 real photos with captions (interior work, construction, yard), plus process steps (site visit → quote → build → handover).
4. **Get a Quote** (main conversion page) — multi-field quote form: name, phone, email, project type, location, budget range, timeline, details. Confirmation state after submit, plus call/WhatsApp fallbacks.
5. **Reviews** — 4.8 rating breakdown, the real reviews with owner responses, and a "leave a review" prompt.
6. **Contact** — phone, WhatsApp, address with map, hours, short enquiry form.

## Conversion elements

- Sticky header with phone number and "Get a Quote" button
- Mobile sticky bottom bar: Call · WhatsApp · Quote
- Quote CTA band repeated at the end of every page
- Trust signals: rating, review count, local address, free quote promise, response-within-24-hours promise

## Design direction

Professional construction identity distinct from the previous site: deep slate/navy base, safety-yellow accent, strong condensed headings, wide photo blocks, structured grid. All colors as semantic tokens in `src/styles.css`; no hardcoded color classes.

## Technical notes

- Resolve the 7 Google Maps photo links, download full-resolution originals, and save them into `src/assets/` with descriptive names, imported as ES modules.
- Route files: `index.tsx`, `services.tsx`, `projects.tsx`, `quote.tsx`, `reviews.tsx`, `contact.tsx`; shared header/footer/CTA in `src/components/site/Layout.tsx` with a new `BUSINESS` constant.
- Each route gets its own `head()` with unique title, description, og/twitter tags. LocalBusiness JSON-LD with address, phone, hours and aggregate rating on the home route.
- Forms are front-end only with a success state (no database). If you want quote submissions stored and emailed to you, say so and I'll add Lovable Cloud for that.
- The old Roodepoort pages and unused assets are removed.
