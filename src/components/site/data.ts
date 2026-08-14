import trusses from "@/assets/new-build-trusses.jpg";
import foundations from "@/assets/foundations.jpg";
import setout from "@/assets/site-setout.jpg";
import brickwork from "@/assets/brickwork-window.jpg";
import windows from "@/assets/aluminium-windows.jpg";
import tiling from "@/assets/tiling.jpg";
import gate from "@/assets/gate-steelwork.jpg";

export const PHOTOS = { trusses, foundations, setout, brickwork, windows, tiling, gate };

export const gallery = [
  {
    src: trusses,
    alt: "New build in Johannesburg with face brickwork complete and roof trusses erected",
    title: "New build — walls & trusses",
    caption: "Face brick shell and engineered timber trusses up on a residential new build.",
  },
  {
    src: setout,
    alt: "Building site set out with lime markings for foundation trenches",
    title: "Setting out",
    caption: "Levels checked and the full footprint set out before a spade goes in.",
  },
  {
    src: foundations,
    alt: "Excavated foundation trenches with steel reinforcement in place",
    title: "Foundations & rebar",
    caption: "Trenches excavated to depth with reinforcement tied and ready for concrete.",
  },
  {
    src: brickwork,
    alt: "Face brick wall with new aluminium window and burglar bars installed",
    title: "Brickwork & glazing",
    caption: "Clean face brick coursing with window frames fitted square and sealed.",
  },
  {
    src: windows,
    alt: "Top-hung aluminium window fitted into a face brick wall",
    title: "Aluminium windows",
    caption: "Top-hung units installed, plumbed and finished off neatly.",
  },
  {
    src: tiling,
    alt: "Newly laid large-format wood-look floor tiles",
    title: "Tiling & finishes",
    caption: "Large-format tiling laid dead straight with consistent joints.",
  },
  {
    src: gate,
    alt: "Custom steel driveway gate installed at a property entrance",
    title: "Steelwork & gates",
    caption: "Custom driveway gate fabricated, hung and finished on site.",
  },
] as const;

export const services = [
  {
    slug: "new-builds",
    title: "New builds & extensions",
    photo: trusses,
    alt: "New build with completed brickwork and roof trusses",
    blurb:
      "From setting out to handover — foundations, brickwork, slabs, roof structure and finishes on houses, cottages and extensions.",
    items: ["Site set-out & foundations", "Brick & block work", "Slabs and lintels", "Roof structure & cover"],
  },
  {
    slug: "renovations",
    title: "Renovations & fit-outs",
    photo: tiling,
    alt: "New floor tiling in a renovated room",
    blurb:
      "Kitchens, bathrooms, offices and shopfronts reworked with tidy sites, clear timelines and finishes that hold up.",
    items: ["Kitchen & bathroom upgrades", "Tiling & screeding", "Ceilings & partitions", "Office & retail fit-outs"],
  },
  {
    slug: "concrete-structural",
    title: "Concrete, brickwork & structural",
    photo: foundations,
    alt: "Foundation trenches with steel reinforcement",
    blurb:
      "Excavation, reinforcement, concrete work, retaining and boundary walls built to engineer's detail.",
    items: ["Excavation & earthworks", "Reinforced footings", "Retaining & boundary walls", "Crack & structural repairs"],
  },
  {
    slug: "roofing-waterproofing",
    title: "Roofing & waterproofing",
    photo: setout,
    alt: "Construction site prepared for building work",
    blurb:
      "Trusses, sheeting, tiles, gutters and torch-on waterproofing — plus leak tracing on existing roofs.",
    items: ["Truss supply & erection", "Sheet & tile roofing", "Torch-on waterproofing", "Leak repairs & gutters"],
  },
  {
    slug: "windows-steelwork",
    title: "Aluminium, glazing & steelwork",
    photo: windows,
    alt: "Aluminium window fitted into face brickwork",
    blurb:
      "Aluminium windows and doors, shopfronts, burglar bars, gates and balustrades — fabricated and installed.",
    items: ["Aluminium windows & doors", "Shopfronts & glazing", "Gates & palisade", "Burglar bars & balustrades"],
  },
  {
    slug: "plastering-painting",
    title: "Plastering, painting & maintenance",
    photo: brickwork,
    alt: "Face brick wall with new window installed",
    blurb:
      "Plaster, skimming, paintwork, damp treatment and ongoing maintenance contracts for landlords and body corporates.",
    items: ["Plaster & skimming", "Interior & exterior painting", "Damp proofing", "Maintenance contracts"],
  },
] as const;

export const reviews = [
  {
    name: "Rhulani Hlungwani",
    meta: "Local Guide · 14 reviews · 80 photos",
    stars: 5,
    body: "Good services.",
    reply: "Thank you very much for your feedback. We highly appreciate it.",
  },
  {
    name: "Tumelo Madisa",
    meta: "Google review",
    stars: 5,
    body: "Positive — value for money.",
    reply: "Thank you for the rating. We highly appreciate it.",
  },
  {
    name: "Nicho Boss",
    meta: "2 reviews · 2 photos",
    stars: 5,
    body: "Rated us 5 stars on Google.",
    reply: "",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Site visit",
    body: "We come out, measure up and listen to what you actually need — free of charge, anywhere in greater Johannesburg.",
  },
  {
    step: "02",
    title: "Written quote",
    body: "An itemised quote within 24–48 hours: materials, labour, timeline and payment stages. No hidden extras.",
  },
  {
    step: "03",
    title: "Build",
    body: "One team leader on your job, daily progress updates, and a site that gets swept at the end of every day.",
  },
  {
    step: "04",
    title: "Handover",
    body: "We walk the job with you, snag anything you're not happy with, and only close out once you sign off.",
  },
] as const;
