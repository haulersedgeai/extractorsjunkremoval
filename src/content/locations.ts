export type LocationType = "city" | "neighborhood";

export type Location = {
  slug: string;
  name: string;
  fullName: string;
  type: LocationType;
  county: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
};

export const LOCATIONS: Location[] = [
  // ─── HOME BASE ───────────────────────────────────────────────────────
  {
    slug: "cypress-ca",
    name: "Cypress",
    fullName: "Cypress, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Cypress CA | Same-Day Pickup | Extractors",
    metaDescription: "Cypress, CA junk removal, cleanouts, and light demolition. Family-owned right here on Lincoln Ave. Same-day pickup, upfront pricing.",
    intro:
      "Cypress is home base. Our trailer is parked on Lincoln Ave, our crew lives in the neighborhood, and we know every alley between Valley View and Bloomfield. From Sorrento and Forest Lawn to the Cypress Village shopping center, if you've got junk to clear or a shed to tear down, we're already nearby.",
    neighborhoods: ["Sorrento", "Forest Lawn", "Cypress Village", "Mackay Park", "Maple Grove", "Lexington", "Cypress Park", "South Cypress", "Lincoln Park"],
    landmarks: ["Cypress Community Center", "Oak Knoll Park", "Cypress College", "Los Alamitos Race Course (adjacent)", "Lexington Park", "Cypress Civic Center", "Veterans Park", "Forest Lawn Memorial Park", "Valley View Street corridor", "Lincoln Avenue retail strip"],
  },

  // ─── CORE EXISTING CITIES ───────────────────────────────────────────
  {
    slug: "anaheim-ca",
    name: "Anaheim",
    fullName: "Anaheim, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Anaheim CA | Same-Day Pickup | Extractors",
    metaDescription: "Anaheim, CA junk removal and light demolition. West Anaheim to Anaheim Hills, family-owned, same-day windows. Free quote.",
    intro:
      "We're in Anaheim almost every day — pickups in West Anaheim before lunch, garages out in Anaheim Hills in the afternoon, the occasional Resort District call. Whether it's an apartment turnover near State College, a hot tub in The Colony, or construction debris off Lincoln, we've got a trailer rolling that way.",
    neighborhoods: ["Anaheim Hills", "West Anaheim", "The Colony", "Anaheim Resort District", "Northwest Anaheim", "Platinum Triangle", "Southeast Anaheim", "Southwest Anaheim", "Canyon District", "Brookhurst"],
    landmarks: ["Disneyland Resort", "Angel Stadium", "Honda Center", "Anaheim GardenWalk", "Anaheim Convention Center", "Yorba Regional Park (adjacent)", "Pearson Park", "Anaheim Packing District", "Anaheim Hills Golf Course", "Brookhurst Junior High area"],
  },
  {
    slug: "long-beach-ca",
    name: "Long Beach",
    fullName: "Long Beach, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Long Beach CA | Same-Day Pickup | Extractors",
    metaDescription: "Long Beach, CA junk removal and cleanouts. Belmont Shore, Bixby Knolls, Downtown, North Long Beach. Family-owned, same-day service.",
    intro:
      "From Belmont Shore bungalows to Bixby Knolls Spanish revivals to North Long Beach apartments, we haul across the whole city. Long Beach has a lot of older homes with tight access, narrow alleys, and walk-up apartments — that's where a small full-service crew beats a big national chain every time.",
    neighborhoods: ["Belmont Shore", "Belmont Heights", "Naples", "Bixby Knolls", "Los Cerritos", "California Heights", "Downtown Long Beach", "East Village", "North Long Beach", "Signal Hill border", "Wrigley", "Rose Park", "Alamitos Beach"],
    landmarks: ["Queen Mary", "Aquarium of the Pacific", "Belmont Pier", "Shoreline Village", "El Dorado Park", "Recreation Park", "Long Beach Convention Center", "California State University Long Beach", "Long Beach Airport", "Bixby Park"],
  },
  {
    slug: "buena-park-ca",
    name: "Buena Park",
    fullName: "Buena Park, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Buena Park CA | Extractors Junk Removal",
    metaDescription: "Buena Park junk removal, cleanouts, and demolition. Family-owned, same-day pickup, upfront pricing. Free quote.",
    intro:
      "Buena Park is one of our closest neighbors — five minutes up Beach or Valley View and we're at your door. We do everything from Knott's-area apartment turnovers to single-family garage cleanouts off Crescent and La Palma. Hot tub on the patio? Old fence in the side yard? We're already on the route.",
    neighborhoods: ["Los Coyotes", "West Buena Park", "Central Buena Park", "East Buena Park", "Beach Boulevard corridor", "Lincoln Avenue corridor"],
    landmarks: ["Knott's Berry Farm", "Medieval Times", "Pirates Dinner Adventure", "Buena Park Mall", "Ralph B. Clark Regional Park", "Los Coyotes Country Club", "Boysen Park", "Beach Blvd / 5 freeway interchange"],
  },
  {
    slug: "stanton-ca",
    name: "Stanton",
    fullName: "Stanton, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Stanton CA | Extractors Junk Removal",
    metaDescription: "Stanton, CA junk removal and cleanouts. Family-owned crew, same-day service, upfront pricing. Free quote.",
    intro:
      "Stanton sits right between Cypress and Anaheim — five minutes either direction. We work apartments, single-family homes, and the small commercial strip along Beach Blvd. Family-owned, fast response, no minimum pickup.",
    neighborhoods: ["Beach Blvd corridor", "Western Avenue area", "Katella Avenue area", "South Stanton", "North Stanton"],
    landmarks: ["Stanton Park", "Stanton Library", "Stanton City Hall", "Hollenbeck Park", "Adventure City"],
  },
  {
    slug: "garden-grove-ca",
    name: "Garden Grove",
    fullName: "Garden Grove, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Garden Grove CA | Extractors Junk Removal",
    metaDescription: "Garden Grove junk removal and light demolition. Same-day pickup, family-owned, upfront pricing. Free quote.",
    intro:
      "Garden Grove is one of OC's older cities — lots of mid-century single-family homes, big backyards, the occasional shed that's been there since the Reagan administration. We work the whole city, from Historic Main Street out to Strawberry Festival side and over to Brookhurst.",
    neighborhoods: ["West Garden Grove", "East Garden Grove", "Historic Main Street", "Magnolia Square", "Mile Square area", "Buena-Clinton", "Strawberry Festival district"],
    landmarks: ["Crystal Cathedral / Christ Cathedral", "Garden Grove Festival Amphitheater", "Atlantis Play Center", "Magnolia Park", "Garden Grove Park", "Historic Main Street", "Mile Square Regional Park (adjacent)"],
  },
  {
    slug: "la-palma-ca",
    name: "La Palma",
    fullName: "La Palma, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal La Palma CA | Extractors Junk Removal",
    metaDescription: "La Palma, CA junk removal and cleanouts. Right next door to Cypress — fastest response in OC. Free quote.",
    intro:
      "La Palma is so close to our shop you can almost see it from our driveway. We're in La Palma constantly — small city, big yards, lots of original-owner homes with garages that have collected forty years of stuff. Five-minute response on most pickups.",
    neighborhoods: ["Central Park area", "Walker Junior High area", "La Palma Park area", "Moody Street corridor"],
    landmarks: ["Central Park", "La Palma Community Center", "La Palma Park", "Walker Junior High", "Crescent Avenue corridor"],
  },
  {
    slug: "los-alamitos-ca",
    name: "Los Alamitos",
    fullName: "Los Alamitos, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Los Alamitos CA | Extractors Junk Removal",
    metaDescription: "Los Alamitos junk removal, cleanouts, and demolition. Family-owned, fast response. Free upfront quote.",
    intro:
      "Los Al sits right on the OC / LA County line and is one of our regular routes. Race Course neighborhood, the homes around the JFTB, downtown Los Al on Katella — we know the access points, the alleys, and the HOAs.",
    neighborhoods: ["Race Course area", "Old Town Los Alamitos", "Casa Bonita", "Rossmoor border", "Cottonwood"],
    landmarks: ["Los Alamitos Race Course", "Joint Forces Training Base", "Laurel Park", "Little Cottonwood Park", "Los Alamitos Medical Center", "Katella Avenue corridor"],
  },
  {
    slug: "seal-beach-ca",
    name: "Seal Beach",
    fullName: "Seal Beach, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Seal Beach CA | Extractors Junk Removal",
    metaDescription: "Seal Beach junk removal and cleanouts. Old Town Seal Beach to Leisure World — family-owned, same-day windows. Free quote.",
    intro:
      "Seal Beach is two completely different jobs depending on the neighborhood — Old Town's tight beach cottages with no driveway, or Leisure World's row after row of single-story condos. We work both, plus everything around Bay City and the Hill. Tight-access pros.",
    neighborhoods: ["Old Town Seal Beach", "The Hill", "Bay City", "Leisure World", "Rossmoor border", "College Park East", "College Park West"],
    landmarks: ["Seal Beach Pier", "Eisenhower Park", "Main Street Seal Beach", "Naval Weapons Station", "Leisure World", "Old Ranch Country Club", "Seal Beach Wildlife Refuge"],
  },
  {
    slug: "westminster-ca",
    name: "Westminster",
    fullName: "Westminster, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Westminster CA | Extractors Junk Removal",
    metaDescription: "Westminster junk removal and cleanouts. Little Saigon to Bolsa, family-owned, same-day. Free quote.",
    intro:
      "Westminster runs from Little Saigon over to Bolsa Chica and down to the Westminster Mall area. We do a lot of apartment turnovers here, plus single-family garage cleanouts off Edinger and Westminster Blvd.",
    neighborhoods: ["Little Saigon", "Westminster Center", "North Westminster", "South Westminster", "Bolsa Avenue corridor"],
    landmarks: ["Asian Garden Mall", "Westminster Mall", "Sigler Park", "Westminster Memorial Park", "Bolsa Grande High School", "Liberty Park", "Vietnam War Memorial"],
  },
  {
    slug: "fountain-valley-ca",
    name: "Fountain Valley",
    fullName: "Fountain Valley, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Fountain Valley CA | Extractors Junk Removal",
    metaDescription: "Fountain Valley junk removal, cleanouts, and demolition. Family-owned, same-day pickup, upfront pricing.",
    intro:
      "Fountain Valley is solid OC suburbia — single-family homes, big garages, well-kept yards, and the occasional renovation that needs the dumpster trailer in the driveway. We work Mile Square down to the 405 and out toward Brookhurst.",
    neighborhoods: ["Mile Square area", "North Fountain Valley", "South Fountain Valley", "Talbert area", "Magnolia corridor"],
    landmarks: ["Mile Square Regional Park", "Fountain Valley Regional Hospital", "Mile Square Golf Course", "Fountain Valley Sports Park", "Talbert Park", "Fountain Valley Civic Center"],
  },
  {
    slug: "huntington-beach-ca",
    name: "Huntington Beach",
    fullName: "Huntington Beach, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Huntington Beach CA | Extractors Junk Removal",
    metaDescription: "Huntington Beach junk removal and cleanouts. Downtown HB to Huntington Harbour, family-owned, same-day. Free quote.",
    intro:
      "Huntington Beach is bigger than people realize — Downtown HB beach houses, Huntington Harbour waterfront, Edwards Hill, and the big single-family stretches inland. We do garage cleanouts, hot tubs, sheds, and full estate turnovers across all of HB.",
    neighborhoods: ["Downtown Huntington Beach", "Huntington Harbour", "Edwards Hill", "Sunset Beach", "Bolsa Chica", "Adams area", "Edinger area", "Yorktown corridor"],
    landmarks: ["Huntington Beach Pier", "Pacific City", "Bolsa Chica Ecological Reserve", "Central Park", "Edison Park", "Sunset Aquatic Park", "Surf City USA shops", "Huntington State Beach"],
  },
  {
    slug: "fullerton-ca",
    name: "Fullerton",
    fullName: "Fullerton, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Fullerton CA | Extractors Junk Removal",
    metaDescription: "Fullerton junk removal and cleanouts. Downtown Fullerton, Cal State, Sunny Hills. Family-owned, free quote.",
    intro:
      "Fullerton mixes Cal State student rentals, downtown Spanish revivals, and the bigger Sunny Hills and Raymond Hills homes north of the 91. We work all of it — apartment moves, garage cleanouts, fence demos, and the occasional whole-house cleanout.",
    neighborhoods: ["Downtown Fullerton", "Sunny Hills", "Raymond Hills", "Amerige Heights", "Coyote Hills", "West Fullerton", "South Fullerton"],
    landmarks: ["California State University Fullerton", "Downtown Fullerton", "Hillcrest Park", "Fullerton Arboretum", "Muckenthaler Cultural Center", "Coyote Hills Golf Course", "Fullerton Train Station"],
  },
  {
    slug: "orange-ca",
    name: "Orange",
    fullName: "Orange, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Orange CA | Extractors Junk Removal",
    metaDescription: "Orange, CA junk removal and cleanouts. Old Towne Orange to the hills. Family-owned, same-day. Free quote.",
    intro:
      "Old Towne Orange Plaza is one of the prettiest parts of OC — and one of the trickiest to haul out of. Narrow alleys, historic homes, careful neighbors. We've done it for years. We also work Mabury Ranch, the Orange Park Acres, and the newer hill developments.",
    neighborhoods: ["Old Towne Orange", "Mabury Ranch", "Orange Park Acres", "El Modena", "West Orange", "Orange Hills", "Santiago Hills"],
    landmarks: ["Orange Circle / Old Towne Plaza", "Chapman University", "The Outlets at Orange", "Hart Park", "Irvine Regional Park", "Peters Canyon Regional Park", "Orange Train Depot"],
  },

  // ─── LA COUNTY CITIES ────────────────────────────────────────────────
  {
    slug: "cerritos-ca",
    name: "Cerritos",
    fullName: "Cerritos, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Cerritos CA | Extractors Junk Removal",
    metaDescription: "Cerritos junk removal and cleanouts. Family-owned, same-day pickup. Free upfront quote.",
    intro:
      "Cerritos is right across the 605 from Cypress — we're there in five minutes. Big planned-community single-family homes, lots of garages with three decades of stuff in them, plus the commercial strip along South Street and 183rd. Regular route for us.",
    neighborhoods: ["West Cerritos", "East Cerritos", "Heritage Park area", "Sunshine Walk Park area", "Liberty Park area", "South Cerritos"],
    landmarks: ["Cerritos Auto Square", "Los Cerritos Center", "Cerritos Civic Center", "Cerritos Library", "Heritage Park", "Liberty Park", "Cerritos Performing Arts Center", "Cerritos Sculpture Garden"],
  },
  {
    slug: "lakewood-ca",
    name: "Lakewood",
    fullName: "Lakewood, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Lakewood CA | Extractors Junk Removal",
    metaDescription: "Lakewood, CA junk removal and cleanouts. Lakewood Village to Carson Park. Family-owned, same-day. Free quote.",
    intro:
      "Lakewood is one of the original SoCal post-war suburbs — endless single-family blocks, original-owner homes, and the kind of garages that have been collecting projects since 1955. We do estate cleanouts here weekly.",
    neighborhoods: ["Lakewood Village", "Lakewood Mutuals", "Mayfair", "Carson Park", "Lakewood Country Club area", "Bouton Lake area"],
    landmarks: ["Lakewood Center mall", "Mayfair Park", "Lakewood Country Club", "Bolivar Park", "Long Beach Airport border", "Rynerson Park"],
  },
  {
    slug: "hawaiian-gardens-ca",
    name: "Hawaiian Gardens",
    fullName: "Hawaiian Gardens, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Hawaiian Gardens CA | Extractors",
    metaDescription: "Hawaiian Gardens junk removal and cleanouts. Family-owned, fast response. Free quote.",
    intro:
      "Hawaiian Gardens sits right next to Cypress on the LA County side. Small city, tight community, fast response from us. We do single-family homes, apartments, and small commercial regularly.",
    neighborhoods: ["Central Hawaiian Gardens", "Carson Street corridor", "226th Street area", "Casino district"],
    landmarks: ["The Gardens Casino", "Lee Ware Park", "Furgeson Elementary", "Carson Street corridor"],
  },
  {
    slug: "artesia-ca",
    name: "Artesia",
    fullName: "Artesia, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Artesia CA | Extractors Junk Removal",
    metaDescription: "Artesia junk removal and cleanouts. Little India to Pioneer Blvd, family-owned, same-day. Free quote.",
    intro:
      "Artesia is small but busy — Little India and Pioneer Boulevard pull traffic from all over Southern California. We handle residential cleanouts and commercial pickups for the shops along Pioneer. Right next door to Cerritos and ten minutes from our shop.",
    neighborhoods: ["Little India / Pioneer Boulevard", "North Artesia", "South Artesia", "186th Street area"],
    landmarks: ["Little India shopping district", "Artesia Park", "Pioneer Boulevard corridor", "Artesia Library", "AJ Padelford Park"],
  },
  {
    slug: "norwalk-ca",
    name: "Norwalk",
    fullName: "Norwalk, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Norwalk CA | Extractors Junk Removal",
    metaDescription: "Norwalk junk removal and cleanouts. Family-owned, same-day pickup. Free quote.",
    intro:
      "Norwalk runs along the 5 between Cerritos and Downey. Single-family neighborhoods, older homes, and the Cerritos College area. We're there weekly for garage cleanouts and apartment turnovers.",
    neighborhoods: ["Cerritos College area", "North Norwalk", "South Norwalk", "Sproul Reservation", "Civic Center area"],
    landmarks: ["Cerritos College", "Norwalk Civic Center", "Norwalk Town Square", "Hermosillo Park", "Norwalk/Santa Fe Springs Metrolink Station"],
  },
  {
    slug: "la-mirada-ca",
    name: "La Mirada",
    fullName: "La Mirada, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal La Mirada CA | Extractors Junk Removal",
    metaDescription: "La Mirada junk removal and cleanouts. Family-owned, same-day windows. Free quote.",
    intro:
      "La Mirada is mostly single-family suburb tucked between Cerritos, Whittier, and Buena Park. Quiet streets, big garages, lots of original-owner homes. We're there several times a week.",
    neighborhoods: ["Biola University area", "North La Mirada", "South La Mirada", "Creek Park area"],
    landmarks: ["Biola University", "La Mirada Theatre", "Splash La Mirada Regional Aquatics Center", "La Mirada Regional Park", "Behringer Park", "Creek Park"],
  },

  // ─── EXPANSION CITIES ────────────────────────────────────────────────
  {
    slug: "bellflower-ca",
    name: "Bellflower",
    fullName: "Bellflower, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Bellflower CA | Extractors Junk Removal",
    metaDescription: "Bellflower junk removal and cleanouts. Family-owned, fast response, upfront pricing. Free quote.",
    intro:
      "Bellflower sits just west of Lakewood and Cerritos — close enough that our trailer is there constantly. Older single-family homes, busy apartment stock, and the commercial strip along Bellflower Blvd.",
    neighborhoods: ["Bellflower Blvd corridor", "Hollypark", "Mayflower Park", "South Bellflower", "Somerset"],
    landmarks: ["Bellflower Civic Center", "Simms Park", "Thompson Park", "Mayflower Park", "Bellflower Bicycle Trail"],
  },
  {
    slug: "downey-ca",
    name: "Downey",
    fullName: "Downey, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Downey CA | Extractors Junk Removal",
    metaDescription: "Downey junk removal and cleanouts. Family-owned, upfront pricing, same-day. Free quote.",
    intro:
      "Downey is a real city with a long history — Apollo program, the original McDonald's, generations of single-family homes. We work Downey regularly, especially in North Downey, the Rancho area, and along Florence Avenue.",
    neighborhoods: ["North Downey", "South Downey", "East Downey", "West Downey", "Rancho Los Amigos area", "Downtown Downey"],
    landmarks: ["Stonewood Center", "Columbia Memorial Space Center", "Furman Park", "Rio Hondo Golf Club", "Downey Civic Theatre", "Apollo Park", "PIH Health Downey"],
  },
  {
    slug: "whittier-ca",
    name: "Whittier",
    fullName: "Whittier, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Whittier CA | Extractors Junk Removal",
    metaDescription: "Whittier junk removal and cleanouts. Uptown Whittier to East Whittier. Family-owned, free quote.",
    intro:
      "Whittier has Uptown's historic homes, the East Whittier suburbs, and a lot of hillside property out toward Hacienda Heights. We do estate cleanouts, hot tubs, and full garage cleanouts across all of it.",
    neighborhoods: ["Uptown Whittier", "East Whittier", "West Whittier", "Whittier Hills", "Friendly Hills", "South Whittier"],
    landmarks: ["Whittier College", "Uptown Whittier district", "Whittier Narrows", "Penn Park", "Greenleaf Avenue", "Friendly Hills Country Club"],
  },
  {
    slug: "santa-ana-ca",
    name: "Santa Ana",
    fullName: "Santa Ana, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Santa Ana CA | Extractors Junk Removal",
    metaDescription: "Santa Ana junk removal and cleanouts. Family-owned, same-day windows. Free quote.",
    intro:
      "Santa Ana is the county seat and packs a lot of different neighborhoods into a small footprint — French Park's historic Victorians, Floral Park's craftsmans, downtown Spanish revivals, and big apartment stock around First Street. We work all of it.",
    neighborhoods: ["French Park", "Floral Park", "Downtown Santa Ana", "Park Santiago", "Heninger Park", "Logan", "South Coast Metro", "Riverview"],
    landmarks: ["Discovery Cube", "Santa Ana Zoo", "Bowers Museum", "MainPlace Mall", "Historic Old Courthouse", "South Coast Plaza (border)", "Civic Center Plaza"],
  },
  {
    slug: "tustin-ca",
    name: "Tustin",
    fullName: "Tustin, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Tustin CA | Extractors Junk Removal",
    metaDescription: "Tustin junk removal and cleanouts. Tustin Ranch to Old Town. Family-owned, free quote.",
    intro:
      "Tustin runs from Old Town's historic downtown out to the master-planned Tustin Ranch and the new Legacy development on the old MCAS site. We cover all of it — older single-family homes and brand new builds alike.",
    neighborhoods: ["Old Town Tustin", "Tustin Ranch", "Tustin Legacy", "North Tustin (unincorporated)", "Columbus Square"],
    landmarks: ["The District at Tustin Legacy", "MCAS Tustin hangars", "Tustin Ranch Golf Club", "Cedar Grove Park", "Peters Canyon Regional Park", "Old Town Tustin"],
  },
  {
    slug: "yorba-linda-ca",
    name: "Yorba Linda",
    fullName: "Yorba Linda, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Yorba Linda CA | Extractors Junk Removal",
    metaDescription: "Yorba Linda junk removal and cleanouts. Family-owned, fast response, free quote.",
    intro:
      "Yorba Linda is the hilly, horse-friendly east side of OC — bigger lots, longer driveways, more sheds and outbuildings. We do a lot of hot tubs, sheds, and full garage cleanouts in YL.",
    neighborhoods: ["East Lake Village", "Vista del Verde", "Kerrigan Ranch", "Old Town Yorba Linda", "Hidden Hills"],
    landmarks: ["Richard Nixon Presidential Library", "Yorba Regional Park", "Black Gold Golf Club", "Hurless Barton Park", "Old Town Yorba Linda"],
  },
  {
    slug: "placentia-ca",
    name: "Placentia",
    fullName: "Placentia, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Placentia CA | Extractors Junk Removal",
    metaDescription: "Placentia junk removal and cleanouts. Family-owned, same-day. Free quote.",
    intro:
      "Placentia is tucked between Fullerton and Yorba Linda — old citrus-grove neighborhoods, the Atwood area, and newer Tri-City Park developments. We're there regularly.",
    neighborhoods: ["Old Town Placentia", "Atwood", "Tri-City Park area", "North Placentia", "South Placentia"],
    landmarks: ["Tri-City Park", "Alta Vista Country Club", "Bradford House Museum", "Placentia Library", "Old Town Placentia"],
  },
  {
    slug: "brea-ca",
    name: "Brea",
    fullName: "Brea, CA",
    type: "city",
    county: "Orange County",
    metaTitle: "Junk Removal Brea CA | Extractors Junk Removal",
    metaDescription: "Brea junk removal and cleanouts. Family-owned, free quote, upfront pricing.",
    intro:
      "Brea sits at the top of OC right against the LA County line. Olinda Village, the Tracts, and the newer developments around Brea Canyon all see us regularly. Larger lots make for bigger garage cleanouts here.",
    neighborhoods: ["Olinda Village", "Country Hills", "Brea Canyon", "Downtown Brea", "Tonner Hills"],
    landmarks: ["Brea Mall", "Brea Improv", "Carbon Canyon Regional Park", "Brea Civic & Cultural Center", "Birch Hills Golf Course"],
  },
  {
    slug: "signal-hill-ca",
    name: "Signal Hill",
    fullName: "Signal Hill, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Signal Hill CA | Extractors Junk Removal",
    metaDescription: "Signal Hill junk removal and cleanouts. Family-owned, same-day. Free quote.",
    intro:
      "Signal Hill is the small city surrounded by Long Beach with the iconic hilltop view. Hillside homes, the apartments at the base, and the Auto Center along Cherry. Quick run from our shop.",
    neighborhoods: ["Hilltop", "South Signal Hill", "Cherry Avenue corridor", "Crescent Heights"],
    landmarks: ["Signal Hill Park", "Hilltop Park", "Signal Hill Auto Center", "Discovery Well Park", "Reservoir Park"],
  },
  {
    slug: "paramount-ca",
    name: "Paramount",
    fullName: "Paramount, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Paramount CA | Extractors Junk Removal",
    metaDescription: "Paramount junk removal and cleanouts. Family-owned, fast response. Free quote.",
    intro:
      "Paramount runs along the 710 between Bellflower and Long Beach. Mix of single-family homes, apartment stock, and industrial properties. We do residential and commercial cleanouts here.",
    neighborhoods: ["North Paramount", "South Paramount", "All American Park area", "Garfield Avenue corridor"],
    landmarks: ["Paramount Iceland", "All American Park", "Progress Park", "Paramount High School", "Garfield Avenue corridor"],
  },
  {
    slug: "carson-ca",
    name: "Carson",
    fullName: "Carson, CA",
    type: "city",
    county: "Los Angeles County",
    metaTitle: "Junk Removal Carson CA | Extractors Junk Removal",
    metaDescription: "Carson junk removal and cleanouts. Family-owned, free quote.",
    intro:
      "Carson is industrial + residential — Cal State Dominguez Hills, the Dignity Health complex, and big single-family neighborhoods. We do commercial pickups and residential cleanouts here.",
    neighborhoods: ["North Carson", "Carriage Crest", "Dominguez Hills area", "South Carson", "West Carson"],
    landmarks: ["California State University Dominguez Hills", "Dignity Health Sports Park", "SouthBay Pavilion", "Carson Park", "Veterans Park"],
  },
  {
    slug: "rossmoor-ca",
    name: "Rossmoor",
    fullName: "Rossmoor, CA",
    type: "neighborhood",
    county: "Orange County",
    metaTitle: "Junk Removal Rossmoor CA | Extractors Junk Removal",
    metaDescription: "Rossmoor, CA junk removal and cleanouts. Family-owned, right next door to our Cypress shop. Free quote.",
    intro:
      "Rossmoor is the unincorporated community right between Los Alamitos and Seal Beach — beautiful tree-lined streets, well-kept single-family homes, and big back yards. We're there in five minutes from the shop.",
    neighborhoods: ["Rossmoor proper", "Country Club Estates", "Russell Tract"],
    landmarks: ["Rossmoor Park", "Old Ranch Country Club", "Rush Park", "Rossmoor Center"],
  },
];

export const LOCATION_BY_SLUG = Object.fromEntries(LOCATIONS.map((l) => [l.slug, l]));

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export const CITIES = LOCATIONS.filter((l) => l.type === "city");
export const NEIGHBORHOODS = LOCATIONS.filter((l) => l.type === "neighborhood");
export const OC_LOCATIONS = LOCATIONS.filter((l) => l.county === "Orange County");
export const LA_LOCATIONS = LOCATIONS.filter((l) => l.county === "Los Angeles County");
