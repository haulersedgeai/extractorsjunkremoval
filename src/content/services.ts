export type ServiceCategory = "junk-removal" | "clean-outs" | "demolitions" | "commercial";

export type ServiceFAQ = { q: string; a: string };
export type ServiceItemGroup = { heading?: string; items: string[] };

export type Service = {
  slug: string;
  category: ServiceCategory;
  isHub?: boolean;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatsIncluded: string[];
  items?: ServiceItemGroup[];
  process?: { title: string; body: string }[];
  whyUs?: string[];
  relatedSlugs: string[];
  faq?: ServiceFAQ[];
  heroImage?: string;
};

const COMMON_PROCESS = [
  { title: "Tell us what you've got", body: "Call, text, or send a photo through our quote form. We answer fast — usually within the hour during business hours." },
  { title: "Get an upfront price", body: "We confirm the price before any lifting begins. No surprises, no hidden fees, no weighing the truck after." },
  { title: "We handle the heavy lifting", body: "Jesse and the crew pull up in the dump trailer, load everything from wherever it sits, and haul it off your property." },
  { title: "Clean space, happy customer", body: "We sweep up, take a final walk-through, and you pay when the job is done. Cash, card, or digital — your call." },
];

const COMMON_WHY = [
  "Local & family-owned — Jesse and crew live and work right here in Cypress",
  "Fully licensed and insured for junk removal AND light demolition",
  "Upfront pricing, every time — you see the number before we lift a thing",
  "Same-day and next-day pickup across Orange County and LA County",
  "We donate, recycle, and route items away from the landfill whenever possible",
];

export const SERVICES: Service[] = [
  // ─── JUNK REMOVAL HUB ────────────────────────────────────────────────
  {
    slug: "junk-removal",
    category: "junk-removal",
    isHub: true,
    title: "Junk Removal in Cypress, Anaheim & Long Beach",
    shortTitle: "Junk Removal",
    h1: "Full-Service Junk Removal — Orange County & LA County",
    metaTitle: "Junk Removal Cypress, Anaheim & Long Beach CA | Extractors",
    metaDescription: "Fast, affordable, family-owned junk removal across Orange County and LA County. Same-day pickup, upfront pricing, fully licensed & insured. Free quote.",
    intro:
      "Extractors Junk Removal has been hauling for Cypress, Anaheim, Long Beach, and the surrounding cities — clearing out garages, hauling old furniture, dragging out appliances, sweeping out estates. You point at it, we load it. We bring the truck, the trailer, the muscle, and the disposal plan. Most pickups happen same-day or next-day.",
    whatsIncluded: [
      "Two-person crew with truck and dump trailer",
      "All loading, lifting, and carry-out — you don't touch a thing",
      "Disposal, recycling, and donation routing built into the quote",
      "Broom-sweep of the area when we're done",
      "Same-day and next-day windows across OC & LA County",
    ],
    items: [
      {
        heading: "Inside the home",
        items: ["Couches, sectionals, recliners", "Mattresses & box springs", "Dressers, desks, bookshelves", "Refrigerators, stoves, washers, dryers", "TVs, computers, electronics", "Exercise & gym equipment", "Boxes & general household clutter", "Toys, clothing, miscellaneous junk"],
      },
      {
        heading: "Garage, yard, and beyond",
        items: ["Construction & renovation debris", "Hot tubs (case-by-case)", "Sheds, decks, fences (demo + haul)", "Yard waste & tree branches", "Storage unit cleanouts", "Office furniture & file cabinets", "Estate & hoarder cleanouts", "Patio furniture & BBQs"],
      },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["furniture-removal", "appliance-removal", "mattress-removal", "garage-cleanouts", "construction-debris-removal", "commercial-junk-removal"],
    faq: [
      { q: "How fast can you pick up?", a: "Most days we're able to be at your door the same afternoon or the next morning. Text us a photo for the quickest quote." },
      { q: "What does junk removal cost in Cypress?", a: "Pricing is by volume — what fits in the truck. Single items typically start around $99, a quarter-trailer around $199, a full trailer in the $549–$699 range. We always confirm before we load." },
      { q: "Do I have to drag it to the curb?", a: "Nope. We're full-service. Upstairs bedroom, backyard, garage, attic, behind the shed — we pull it from wherever it sits." },
      { q: "Where does the junk actually go?", a: "Anything usable gets donated to local Orange County charities. Metal and appliances go to recycling. The rest goes to permitted county transfer stations — never illegal dumps." },
    ],
  },
  {
    slug: "furniture-removal",
    category: "junk-removal",
    title: "Furniture Removal in Orange County & LA County",
    shortTitle: "Furniture Removal",
    h1: "Couch, Sectional & Furniture Removal Done Right",
    metaTitle: "Furniture Removal Cypress, Anaheim, Long Beach | Extractors Junk Removal",
    metaDescription: "Furniture removal across Orange County and LA County. Sofas, sectionals, mattresses, dressers, desks — we load and haul. Free upfront quote.",
    intro:
      "That sectional looked perfect in the showroom and impossible to get out the apartment door. We do furniture removal across Cypress, Anaheim, Long Beach, and the surrounding cities every single day. Sleeper sofas, oversized recliners, dining sets, bedroom suites — we disassemble what we have to and walk it out. Anything still usable we route to local donation; the rest gets disposed of legally.",
    whatsIncluded: [
      "Disassembly of beds, modular sectionals, and bulky furniture",
      "Floor and door-frame protection during the carry-out",
      "Stair, elevator, and tight-doorway navigation",
      "Donation drop-off when items are reusable",
      "Sweep-up of the area we worked in",
    ],
    items: [
      { items: ["Couches, sectionals & loveseats", "Recliners & lift chairs", "Dining tables & chairs", "Bedroom sets (frames, dressers, nightstands)", "Office desks & filing cabinets", "Entertainment centers & TV stands", "Bookshelves & china hutches", "Patio furniture & outdoor sets"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["junk-removal", "mattress-removal", "appliance-removal", "estate-cleanouts"],
    faq: [
      { q: "Will you take just one couch?", a: "Absolutely. Single-item pickups are one of our most common calls. Send a quick photo and we'll quote it on the spot." },
      { q: "What if it doesn't fit through the door?", a: "We bring tools. Couches get disassembled, legs come off, frames come apart — whatever it takes. Damage to your walls or floors is on us, not you." },
    ],
  },
  {
    slug: "appliance-removal",
    category: "junk-removal",
    title: "Appliance Removal & Disposal",
    shortTitle: "Appliance Removal",
    h1: "Refrigerator, Washer & Appliance Removal",
    metaTitle: "Appliance Removal Cypress, Anaheim & Long Beach | Extractors",
    metaDescription: "Refrigerator, freezer, washer, dryer, stove, dishwasher removal in OC and LA County. Same-day pickup, eco-friendly disposal. Free quote.",
    intro:
      "Old fridge in the garage humming away on a half-broken compressor. Washer that finally quit mid-cycle. We pull appliances out of homes, garages, and businesses every week. Refrigerant-bearing units (fridges, freezers, AC) get routed for proper Freon recovery — California law requires it and we follow it.",
    whatsIncluded: [
      "Disconnect of water lines and gas (when safely accessible)",
      "Dolly-out from any room in the home",
      "Proper Freon and refrigerant recovery routing",
      "Metal recycling for the appliance body",
      "Same or next-day pickup windows",
    ],
    items: [
      { items: ["Refrigerators & freezers", "Washers & dryers (front-load, top-load, stackable)", "Stoves, ovens & cooktops", "Dishwashers", "Microwaves & range hoods", "Water heaters", "Trash compactors", "Wine fridges & mini fridges"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["junk-removal", "furniture-removal", "garage-cleanouts"],
    faq: [
      { q: "Do you take refrigerators?", a: "Yes — including ones with refrigerant. We route them to facilities that handle Freon recovery legally. No, we cannot leave it on the curb instead." },
      { q: "Can you disconnect the washer hoses?", a: "We can disconnect standard water-supply and drain hoses. For gas dryers, the gas line should be capped by a plumber before we arrive." },
    ],
  },
  {
    slug: "mattress-removal",
    category: "junk-removal",
    title: "Mattress & Box Spring Removal",
    shortTitle: "Mattress Removal",
    h1: "Mattress, Box Spring & Bed Frame Pickup",
    metaTitle: "Mattress Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Mattress and box spring pickup across OC and LA County. Quick scheduling, eco-friendly disposal, upfront pricing. Free quote.",
    intro:
      "California's bulky-item rules make mattress disposal a pain — you can't just drop one at the curb without scheduling, and most haulers charge extra for them. We take mattresses every day across Cypress, Anaheim, Long Beach, and the surrounding cities, route them to certified recycling when we can, and bill it as part of a normal pickup.",
    whatsIncluded: [
      "Mattress, box spring, and frame removal in one stop",
      "Recycling through certified California programs when possible",
      "Pickup from any room, any floor",
      "Same-day and next-day windows",
      "Flat pricing — no surprise bulky-item fees",
    ],
    items: [
      { items: ["Standard mattresses (twin through California King)", "Box springs & foundations", "Pillow-top & memory-foam mattresses", "Metal & wood bed frames", "Headboards & footboards", "Air mattresses & camping mats", "Crib mattresses", "Adjustable bed bases"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["furniture-removal", "junk-removal", "estate-cleanouts"],
  },
  {
    slug: "hot-tub-removal",
    category: "junk-removal",
    title: "Hot Tub Removal & Disposal",
    shortTitle: "Hot Tub Removal",
    h1: "Hot Tub & Spa Removal in Orange County",
    metaTitle: "Hot Tub Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Hot tub and spa removal in OC and LA County. We cut it down, haul it out, and clean up. Free upfront quote, case-by-case pricing.",
    intro:
      "Most haulers won't touch a hot tub. Too heavy, too awkward, no easy way to dispose of it. We do them on a case-by-case basis — drain, cut down the shell, disconnect the wiring (capped by you or your electrician), and haul the pieces. A typical residential spa takes a couple of hours start to finish.",
    whatsIncluded: [
      "On-site assessment to confirm access and price",
      "Drain (if not already empty)",
      "Cut-down of the shell when needed for tight access",
      "Removal of the cabinet, cover, and motor",
      "Cleanup of the pad area when we're done",
    ],
    items: [
      { items: ["Acrylic & fiberglass spas", "Roll-up & hard hot tub covers", "Above-ground hot tubs", "In-deck spas (with access)", "Pumps, motors & control packs", "Hot tub steps & surrounds"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["junk-removal", "shed-demolition", "deck-demolition", "above-ground-pool-removal"],
    faq: [
      { q: "Do I need to drain it first?", a: "Helps — but if the drain is broken or you didn't get to it, we can handle it. Just mention it when you call." },
      { q: "What about the electrical?", a: "The breaker should be off and the line capped by your electrician before we cut anything. We're licensed for demo, not for live electrical work." },
    ],
  },
  {
    slug: "electronics-removal",
    category: "junk-removal",
    title: "Electronics & E-Waste Removal",
    shortTitle: "Electronics Removal",
    h1: "TV, Computer & E-Waste Removal",
    metaTitle: "Electronics & E-Waste Removal | Extractors Junk Removal",
    metaDescription: "TV, computer, monitor, printer, and e-waste removal in OC and LA County. Routed to certified California recyclers. Free quote.",
    intro:
      "California treats most electronics as universal waste — they can't legally go in a regular dumpster. We collect TVs, monitors, computers, printers, and small electronics every week and route them to certified e-waste recyclers in Orange and LA Counties.",
    whatsIncluded: [
      "Pickup from any room in the home or office",
      "Routing to certified California e-waste recyclers",
      "Hard-drive in-place when requested (we do not wipe drives)",
      "Bulk pickup for office cleanouts",
    ],
    items: [
      { items: ["Flat-screen & tube TVs", "Computers, laptops & monitors", "Printers, copiers & fax machines", "Office phones & switchboards", "Cables, routers & networking gear", "Stereos, speakers & audio gear", "Small kitchen electronics", "Servers & rack equipment"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["junk-removal", "commercial-junk-removal", "office-cleanouts"],
  },
  {
    slug: "yard-waste-removal",
    category: "junk-removal",
    title: "Yard Waste & Green Waste Removal",
    shortTitle: "Yard Waste",
    h1: "Branches, Brush & Yard Debris Hauling",
    metaTitle: "Yard Waste Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Yard waste, brush, branches, sod, and green waste hauling across OC and LA County. Same-day pickup, flat pricing. Free quote.",
    intro:
      "After a tree-trimming Saturday, a landscape overhaul, or a windstorm, your yard waste pile is bigger than you thought. We haul branches, brush, sod, hedges, palm fronds, and general green waste across Orange County and LA County. We route the green to permitted compost facilities.",
    whatsIncluded: [
      "Pickup from front yard, back yard, side yard, or driveway",
      "Loose haul or pre-bagged — both fine",
      "Routing to permitted green-waste facilities",
      "No weight limit — we price by volume",
    ],
    items: [
      { items: ["Tree limbs & branches", "Brush & hedge clippings", "Grass clippings & leaves", "Palm fronds & banana leaves", "Sod & dirt (small amounts)", "Old planters & ceramic pots", "Stumps (small / already cut)", "Landscape timbers & lumber"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["junk-removal", "construction-debris-removal", "shed-demolition"],
  },
  {
    slug: "construction-debris-removal",
    category: "junk-removal",
    title: "Construction Debris Removal",
    shortTitle: "Construction Debris",
    h1: "Renovation & Construction Debris Hauling",
    metaTitle: "Construction Debris Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Construction debris hauling for contractors and homeowners across OC and LA County. Drywall, tile, lumber, flooring — we haul it all.",
    intro:
      "Contractors call us mid-job, homeowners call us after a remodel — same problem, same fix. We haul construction and renovation debris by the trailer load. Drywall, tile, lumber, carpet, flooring, fixtures, packaging. Faster and cheaper than parking a roll-off in the driveway for most small-to-mid jobs.",
    whatsIncluded: [
      "Pickup from the jobsite or driveway pile",
      "Loading by our crew (no roll-off required)",
      "Routing to permitted Orange / LA County transfer stations",
      "Same-day and next-day availability for active job sites",
      "Recurring pickups for contractors on multi-week jobs",
    ],
    items: [
      { items: ["Drywall & plaster", "Lumber, framing & 2x4 scraps", "Carpet, padding & pad", "Tile, grout & thinset", "Hardwood & laminate flooring", "Roofing shingles (small loads)", "Old cabinets & countertops", "Toilets, sinks, tubs"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["interior-demolition", "junk-removal", "commercial-junk-removal", "dumpster-trailer-rental"],
    faq: [
      { q: "Cheaper than a dumpster?", a: "For most projects under a full roll-off, yes. You don't pay for delivery, rental time, or weight overage — just the haul." },
      { q: "Do you work with contractors directly?", a: "Yes. Many of our regulars are GCs, painters, flooring crews, and remodelers. We can be on call for recurring jobs." },
    ],
  },

  // ─── CLEAN-OUTS ───────────────────────────────────────────────────────
  {
    slug: "cleanouts",
    category: "clean-outs",
    isHub: true,
    title: "Home, Garage & Property Cleanouts",
    shortTitle: "Cleanouts",
    h1: "Full Cleanout Services Across Orange County & LA County",
    metaTitle: "Cleanouts Cypress, Anaheim, Long Beach | Extractors Junk Removal",
    metaDescription: "Garage, estate, hoarder, storage unit, and property cleanouts in OC and LA County. Discreet, fast, and full-service. Free quote.",
    intro:
      "A cleanout isn't just hauling — it's sorting, packing out, and emptying every room. We do garage cleanouts, estate cleanouts, hoarder homes, storage units, and full property turnovers across Cypress, Anaheim, Long Beach, and the surrounding cities. Discreet, careful, and finished in a day for most homes.",
    whatsIncluded: [
      "Full sort and pack-out from every room",
      "Discreet service — unmarked options available for sensitive jobs",
      "Donation routing for usable items",
      "Recycling for metal, electronics, and appliances",
      "Final broom-sweep so the property is move-in ready",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["garage-cleanouts", "estate-cleanouts", "hoarder-cleanouts", "storage-unit-cleanouts", "foreclosure-cleanouts"],
  },
  {
    slug: "garage-cleanouts",
    category: "clean-outs",
    title: "Garage Cleanouts",
    shortTitle: "Garage Cleanouts",
    h1: "Garage Cleanout Service — Park Your Car Again",
    metaTitle: "Garage Cleanouts Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Garage cleanout service across OC and LA County. We pull everything out, sort what stays, haul the rest. Same-day available.",
    intro:
      "If you can't fit a car in the garage, you're not alone — most of Orange County is the same. We come in, pull everything out onto the driveway, you keep what matters, and we haul the rest. A typical two-car garage takes us 2-4 hours start to finish.",
    whatsIncluded: [
      "Pull everything out for you to sort",
      "Haul of all items you don't want",
      "Donation drop-off when items are reusable",
      "Sweep-out of the garage floor at the end",
      "Same-day pickup available",
    ],
    items: [
      { items: ["Boxes & old storage bins", "Broken tools & yard equipment", "Holiday decorations", "Old paint, lumber & scraps", "Bikes, sports gear, exercise equipment", "Patio & yard furniture", "Old appliances & e-waste", "Camping & garage shelving"] },
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["cleanouts", "junk-removal", "storage-unit-cleanouts", "yard-waste-removal"],
  },
  {
    slug: "estate-cleanouts",
    category: "clean-outs",
    title: "Estate Cleanouts",
    shortTitle: "Estate Cleanouts",
    h1: "Compassionate Estate Cleanouts",
    metaTitle: "Estate Cleanouts Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Estate cleanout service across OC and LA County. Respectful, discreet, and thorough. We handle the heavy lifting so the family doesn't have to.",
    intro:
      "Cleaning out a loved one's home is hard enough without the haul. We've done estate cleanouts after losses, after moves to assisted living, after years of accumulated stuff that nobody wanted to face. We move at your pace, set aside anything the family wants to keep, and handle the rest with care. Local, family-owned, and discreet.",
    whatsIncluded: [
      "Full home cleanout — every room, attic, garage, shed",
      "Set-aside area for items the family wants to keep",
      "Donation routing for furniture, clothing, kitchenware",
      "Recycling for metals, electronics, paper",
      "Unmarked truck available on request",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["cleanouts", "hoarder-cleanouts", "foreclosure-cleanouts", "furniture-removal", "appliance-removal"],
  },
  {
    slug: "hoarder-cleanouts",
    category: "clean-outs",
    title: "Hoarder Cleanouts",
    shortTitle: "Hoarder Cleanouts",
    h1: "Discreet Hoarder Cleanout Service",
    metaTitle: "Hoarder Cleanouts Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Discreet, judgment-free hoarder cleanout service in OC and LA County. Family-owned crew. Free in-home assessment.",
    intro:
      "Hoarder homes need more than a hauler — they need patience, tact, and a crew that won't make anyone feel worse than they already do. We work with families, social workers, and property managers across Orange County and LA County. Free in-home assessment, no pressure, no judgment.",
    whatsIncluded: [
      "Free in-home walkthrough and assessment",
      "Day-by-day or all-at-once pacing — your call",
      "PPE and safe handling of biohazards (referrals when needed)",
      "Set-aside for documents, photos, and valuables",
      "Donation and recycling routing for usable items",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["cleanouts", "estate-cleanouts", "foreclosure-cleanouts"],
  },
  {
    slug: "storage-unit-cleanouts",
    category: "clean-outs",
    title: "Storage Unit Cleanouts",
    shortTitle: "Storage Unit Cleanouts",
    h1: "Storage Unit Cleanout Service",
    metaTitle: "Storage Unit Cleanouts Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Storage unit cleanouts across OC and LA County. We empty the unit, sweep it out, and you stop paying rent. Free quote.",
    intro:
      "You haven't opened that unit in three years and it's still costing you $200 a month. We meet you at the facility, empty the unit, sweep it out, and you walk away with the keys. Done in a couple of hours for most 10x10s.",
    whatsIncluded: [
      "Meet you at the facility",
      "Full unit pack-out and load-up",
      "Sweep of the empty unit",
      "Set-aside for anything you want to keep",
      "Same-day and next-day windows",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["cleanouts", "garage-cleanouts", "estate-cleanouts"],
  },
  {
    slug: "foreclosure-cleanouts",
    category: "clean-outs",
    title: "Foreclosure & Eviction Cleanouts",
    shortTitle: "Foreclosure Cleanouts",
    h1: "Foreclosure, Eviction & Tenant Cleanouts",
    metaTitle: "Foreclosure & Eviction Cleanouts | Extractors Junk Removal",
    metaDescription: "Foreclosure, eviction, and abandoned-property cleanout service across OC and LA County for property managers and asset firms.",
    intro:
      "Property managers, realtors, and asset managers — we turn over post-eviction and post-foreclosure properties fast. Full pack-out, sweep, photos when needed, and an invoice that's easy to submit. We've done condo turnovers, single-family homes, and small multifamily.",
    whatsIncluded: [
      "Full property pack-out — every room and outbuilding",
      "Before/after photos for documentation",
      "Donation and recycling routing",
      "Floor and stair sweep at the end",
      "Net-30 invoicing available for repeat property managers",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["cleanouts", "estate-cleanouts", "commercial-junk-removal"],
  },
  {
    slug: "office-cleanouts",
    category: "clean-outs",
    title: "Office & Commercial Cleanouts",
    shortTitle: "Office Cleanouts",
    h1: "Office, Retail & Commercial Cleanouts",
    metaTitle: "Office Cleanouts Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Office and commercial cleanout service across OC and LA County. Cubicles, desks, electronics, retail fixtures — we haul it all.",
    intro:
      "Lease ending, downsizing, or moving locations — we clear out offices, retail spaces, and small warehouses. Cubicles broken down, electronics routed to certified e-waste, furniture donated or recycled. Evening and weekend pickups available so we don't interrupt business hours.",
    whatsIncluded: [
      "Cubicle disassembly and removal",
      "Office furniture haul (desks, chairs, conference tables)",
      "Certified e-waste routing for electronics",
      "Evening and weekend windows",
      "Multi-day jobs for large spaces",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["commercial-junk-removal", "electronics-removal", "cleanouts"],
  },

  // ─── DEMOLITIONS ──────────────────────────────────────────────────────
  {
    slug: "demolitions",
    category: "demolitions",
    isHub: true,
    title: "Light Demolition Services",
    shortTitle: "Demolitions",
    h1: "Light Demolition in Cypress, Anaheim & Long Beach",
    metaTitle: "Light Demolition Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Licensed light demolition for sheds, decks, fences, hot tubs, interior tear-outs across OC and LA County. Same-day quotes.",
    intro:
      "Some jobs don't need a big demo crew with a backhoe — they need two careful hands, a sawzall, and a dump trailer in the driveway. That's our lane. Sheds, decks, fences, hot tubs, above-ground pools, interior tear-outs — we demolish, load, and haul, all in one stop. Licensed, insured, and clean. We leave the area broom-swept.",
    whatsIncluded: [
      "Demolition AND haul-away in one trip",
      "Hand demo to protect surrounding structures",
      "Disposal at permitted facilities",
      "Permit guidance when applicable",
      "Broom-sweep finish",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["shed-demolition", "deck-demolition", "fence-removal", "interior-demolition", "above-ground-pool-removal", "hot-tub-removal"],
  },
  {
    slug: "shed-demolition",
    category: "demolitions",
    title: "Shed Removal & Demolition",
    shortTitle: "Shed Demolition",
    h1: "Shed Demolition & Haul-Away",
    metaTitle: "Shed Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Shed demolition and removal across OC and LA County. Wood, metal, plastic — we tear it down and haul it off. Free quote.",
    intro:
      "That backyard shed that the last owner left? The one with the rotted roof and the door that doesn't shut? We tear it down by hand, load it into the trailer, and the only sign it was ever there is a flat patch of grass. Wood, vinyl, metal, plastic — we've taken down all of them.",
    whatsIncluded: [
      "Hand demolition (no heavy equipment needed)",
      "Removal of anchors, slab fragments, and base",
      "Haul of all debris in one trip",
      "Rake-out of the area when we're done",
      "Same-day quotes",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["demolitions", "deck-demolition", "fence-removal", "junk-removal"],
  },
  {
    slug: "deck-demolition",
    category: "demolitions",
    title: "Deck Removal & Demolition",
    shortTitle: "Deck Demolition",
    h1: "Deck Demolition & Removal",
    metaTitle: "Deck Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Deck demolition service in OC and LA County. We tear down old wood and composite decks, pull the footings, and haul it all.",
    intro:
      "Old back deck is past saving. The boards are soft, the joists are split, the rail wobbles. We demo wooden and composite decks across Orange County and LA County, including pulling the concrete footings when needed.",
    whatsIncluded: [
      "Deck board, joist, and rail removal",
      "Post and concrete footing extraction when feasible",
      "Haul of all wood, metal, and concrete",
      "Care taken with adjacent fences and patios",
      "Same-day quotes",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["demolitions", "shed-demolition", "fence-removal"],
  },
  {
    slug: "fence-removal",
    category: "demolitions",
    title: "Fence Removal & Demolition",
    shortTitle: "Fence Removal",
    h1: "Fence Removal & Haul-Away",
    metaTitle: "Fence Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Wood, vinyl, chain-link fence removal in OC and LA County. We tear it down, pull the posts, and haul it off. Free quote.",
    intro:
      "Replacing a fence? The hardest part is getting the old one out. We pull wood, vinyl, and chain-link fencing — including pulling posts and breaking up concrete footings — and haul everything in one trip. Coordinate with your fence installer or call us first.",
    whatsIncluded: [
      "Removal of panels, posts, and gates",
      "Concrete footing extraction when needed",
      "Haul of all debris",
      "Care for neighboring fences and landscaping",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["demolitions", "deck-demolition", "shed-demolition"],
  },
  {
    slug: "above-ground-pool-removal",
    category: "demolitions",
    title: "Above-Ground Pool Removal",
    shortTitle: "Pool Removal",
    h1: "Above-Ground Pool Demolition & Removal",
    metaTitle: "Above-Ground Pool Removal Cypress, Anaheim, Long Beach",
    metaDescription: "Above-ground pool demolition and removal in OC and LA County. We drain, dismantle, and haul. Free quote.",
    intro:
      "Above-ground pool was great for a few summers. Now it's a green hazard. We drain, dismantle, and haul off the walls, liner, deck, and ladder — all in one trip. We do not remove in-ground pools.",
    whatsIncluded: [
      "Drain (if not already empty)",
      "Dismantle of walls, posts, and liner",
      "Haul of pump, filter, and accessories",
      "Surrounding deck removal when applicable",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["demolitions", "hot-tub-removal", "deck-demolition"],
  },
  {
    slug: "interior-demolition",
    category: "demolitions",
    title: "Interior Demolition",
    shortTitle: "Interior Demo",
    h1: "Interior Demolition — Kitchen, Bath, Drywall, Flooring",
    metaTitle: "Interior Demolition Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Interior demolition for kitchens, baths, drywall, flooring, cabinets, and non-load-bearing walls. Licensed crew. Free quote.",
    intro:
      "Renovating? We do the demo half. Kitchen cabinets, bathroom fixtures, drywall, carpet, tile, hardwood, non-load-bearing walls. Clean, controlled, dust-managed work that leaves the space ready for your contractor to start the rebuild.",
    whatsIncluded: [
      "Kitchen and bath tear-outs",
      "Drywall, lath, and plaster removal",
      "Carpet, tile, and hardwood floor removal",
      "Cabinet and countertop removal",
      "Non-load-bearing wall removal",
      "Haul of all debris included",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["demolitions", "construction-debris-removal"],
  },

  // ─── COMMERCIAL ──────────────────────────────────────────────────────
  {
    slug: "commercial-junk-removal",
    category: "commercial",
    isHub: true,
    title: "Commercial Junk Removal",
    shortTitle: "Commercial",
    h1: "Commercial Junk Removal & Cleanouts",
    metaTitle: "Commercial Junk Removal Cypress, Anaheim, Long Beach | Extractors",
    metaDescription: "Commercial junk removal for offices, retail, restaurants, and property managers in OC and LA County. Net-30 invoicing available.",
    intro:
      "Property managers, realtors, contractors, retail owners, restaurant operators — we work commercial accounts across Orange County and LA County. One-time pickups, recurring service, evening and weekend windows. Net-30 invoicing available for established accounts.",
    whatsIncluded: [
      "Recurring or one-time pickup schedules",
      "Evening and weekend windows on request",
      "Net-30 invoicing for repeat accounts",
      "Bulk pickups for office moves and remodels",
      "Discreet, uniformed crew",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["office-cleanouts", "foreclosure-cleanouts", "construction-debris-removal", "dumpster-trailer-rental"],
  },
  {
    slug: "dumpster-trailer-rental",
    category: "commercial",
    title: "Dumpster Trailer Rental (Limited)",
    shortTitle: "Dumpster Trailer",
    h1: "Dumpster Trailer Rental — Cypress, CA",
    metaTitle: "Dumpster Trailer Rental Cypress, CA | Extractors Junk Removal",
    metaDescription: "Dumpster trailer rental in Cypress and nearby Orange / LA County. Limited availability — one trailer, contractor-friendly pricing.",
    intro:
      "We keep one dumpster trailer in rotation for jobs where you'd rather load yourself on your own schedule. Drop off in your driveway, you fill it, we pick it up. Limited availability — call early. Most commonly used by remodelers, roofers, and homeowners doing weekend cleanouts.",
    whatsIncluded: [
      "Drop-off and pickup at your address",
      "Hauling and disposal included in price",
      "Multi-day rentals available",
      "Driveway-friendly trailer (no roll-off scrapes)",
    ],
    process: COMMON_PROCESS,
    whyUs: COMMON_WHY,
    relatedSlugs: ["construction-debris-removal", "commercial-junk-removal", "junk-removal"],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

export const CATEGORY_LABEL: Record<ServiceCategory, string> = {
  "junk-removal": "Junk Removal",
  "clean-outs": "Cleanouts",
  "demolitions": "Demolitions",
  "commercial": "Commercial",
};

export const SERVICE_HUBS = SERVICES.filter((s) => s.isHub);

export const SERVICE_CATEGORIES: Record<ServiceCategory, { label: string; slug: string; description: string }> = {
  "junk-removal": { label: "Junk Removal", slug: "junk-removal", description: "Furniture, appliances, garages, full homes — we haul it all." },
  "clean-outs": { label: "Cleanouts", slug: "cleanouts", description: "Estate, hoarder, garage, storage, eviction — discreet and thorough." },
  "demolitions": { label: "Demolitions", slug: "demolitions", description: "Sheds, decks, fences, hot tubs, interior tear-outs." },
  "commercial": { label: "Commercial", slug: "commercial-junk-removal", description: "Offices, retail, property managers, contractors." },
};

export function getServicesByCategory(cat: ServiceCategory) {
  return SERVICES.filter((s) => s.category === cat);
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getHub(cat: ServiceCategory): Service | undefined {
  return SERVICES.find((s) => s.category === cat && s.isHub);
}
