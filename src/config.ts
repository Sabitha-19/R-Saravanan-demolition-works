/**
 * MASTER BUSINESS CONFIGURATION
 * 
 * Edit this single file to update business details, contact information,
 * service areas, services, image paths, and gallery items.
 * 
 * STRICT RULES:
 * - NO pricing, rates, or cost calculators.
 * - Standard pricing statement:
 *   "Every site is different. Mr. Saravanan visits the site and gives you a clear written quote."
 * - No invented stats, awards, fake reviews, or license numbers.
 * - Client-side only (WhatsApp & mailto links).
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  equipment: string;
  image: string;
}

export interface CityItem {
  id: string;
  name: string;
  nativeName: string;
  shortName: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
}

export interface FAQItem {
  id: string;
  number: string;
  category: 'safety' | 'permits' | 'debris';
  categoryLabel: string;
  question: string;
  answer: string;
  keyTakeaway: string;
  bullets: string[];
}

export interface SiteConfig {
  business: {
    name: string;
    proprietor: string;
    tagline: string;
    footerStatement: string;
    pricingStatement: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    telLink: string;
    whatsAppRaw: string;
    whatsAppLink: string;
    email: string;
    serviceRegion: string;
    hours: string;
  };
  images: {
    hero: string;
  };
  placeholders: {
    experienceProof: string;
    licenseProof: string;
    safetyEquipmentProof: string;
  };
  cities: CityItem[];
  services: ServiceItem[];
  processSteps: StepItem[];
  // Gallery array: if empty, the gallery section will automatically hide
  gallery: GalleryItem[];
  faq: FAQItem[];
}

export const CONFIG: SiteConfig = {
  business: {
    name: "R. Saravanan Demolition Works",
    proprietor: "R. Saravanan",
    tagline: "Controlled Structural Down-Taking & Site Reclaiming",
    footerStatement: "WE TAKE IT DOWN. WE CLEAR IT. WE HAND IT BACK.",
    pricingStatement: "Every site is different. Mr. Saravanan visits the site and gives you a clear written quote.",
  },

  contact: {
    phoneDisplay: "+91 98423 45077",
    phoneRaw: "+919842345077",
    telLink: "tel:+919842345077",
    whatsAppRaw: "919842345077",
    whatsAppLink: "https://wa.me/919842345077",
    email: "saravanan24121978@gmail.com",
    serviceRegion: "Chennai · Puducherry · Vellore · Arni",
    hours: "Direct phone line available 7 days a week: 7:00 AM – 9:00 PM",
  },

  images: {
    hero: "/images/hero.jpg",
  },

  placeholders: {
    experienceProof: "[Operating across Northern Tamil Nadu & UT of Puducherry]",
    licenseProof: "[Machinery Operator & Transport Clearance Details: Available on site audit]",
    safetyEquipmentProof: "[Dust suppression screens, steel propping & safety nets on every project]",
  },

  cities: [
    {
      id: "chennai",
      name: "CHENNAI",
      nativeName: "சென்னை",
      shortName: "Chennai",
      description: "Dense urban plots, multi-floor residential down-taking, commercial retail strip-outs, and party-wall preservation across metro corridors.",
      image: "/images/city-chennai.jpg",
      highlights: ["Party-wall decoupling", "Commercial interior strip-out", "Tight street excavator access"],
    },
    {
      id: "puducherry",
      name: "PUDUCHERRY",
      nativeName: "புதுச்சேரி",
      shortName: "Pondy",
      description: "Coastal residential plots, heritage conservation borders, French Quarter renovations, selective strip-outs, and compound wall clearing.",
      image: "/images/city-puducherry.jpg",
      highlights: ["Old residence down-taking", "Heritage zone boundary care", "Coastal shed removal"],
    },
    {
      id: "vellore",
      name: "VELLORE",
      nativeName: "வேலூர்",
      shortName: "Vellore",
      description: "Residential plots, industrial warehouse steel dismantles, hospital/institution expansions, and heavy RCC foundation rock breaking.",
      image: "/images/city-vellore.jpg",
      highlights: ["Heavy RCC foundation breaking", "Industrial shed dismantling", "Multi-floor building demolition"],
    },
    {
      id: "arni",
      name: "ARNI",
      nativeName: "ஆரணி",
      shortName: "Arni",
      description: "Town residential plots, old family home clearings, silk mill/warehouse sheds, and clean plot handovers for new architectural piling.",
      image: "/images/city-arni.jpg",
      highlights: ["Old house down-taking", "Boundary wall clearing", "Debris carting & flat soil handover"],
    },
  ],

  services: [
    {
      id: "house-building-demolition",
      number: "01",
      title: "HOUSE & BUILDING DEMOLITION",
      tagline: "Total or selective down-taking of residential and commercial structures",
      description:
        "Controlled dismantling of independent houses, multi-storey RCC frames, and commercial buildings. Adjoining party walls are decoupled with surgical precision to ensure neighboring homes remain untouched.",
      scope: [
        "Single & multi-storey RCC structures",
        "Traditional brick-and-mortar homes",
        "Party-wall decoupling with hand-held cutters",
        "Top-to-bottom orderly collapse sequence",
      ],
      equipment: "14T–20T Hydraulic Breakers, Crushers, Shoring Jacks",
      image: "/images/card-house.jpg",
    },
    {
      id: "interior-strip-out",
      number: "02",
      title: "INTERIOR STRIP-OUT",
      tagline: "Clean architectural deconstruction without touching structural frames",
      description:
        "Surgical removal of internal brick partitions, false ceilings, vitrified tiles, plaster screed, and mechanical services for architects and interior remodeling teams.",
      scope: [
        "Non-load-bearing masonry partition removal",
        "Floor tile, marble, and screed chipping",
        "Ceiling framing, ductwork, and MEP stripping",
        "Elevator and common area dust containment",
      ],
      equipment: "Electric Chipping Hammers, Dust Screens, Material Chutes",
      image: "/images/card-interior.jpg",
    },
    {
      id: "slab-rcc-cutting",
      number: "03",
      title: "SLAB & RCC CUTTING",
      tagline: "Diamond saw and hydraulic wire cutting with zero micro-cracking",
      description:
        "Vibration-free aperture cuts for new stairwells, internal lift shafts, skylights, sunken slabs, and heavy beams without transmitting structural shock waves through surrounding masonry.",
      scope: [
        "RCC slab cutting for lift shafts & staircases",
        "Heavy beam and column modifications",
        "Diamond core drilling for plumbing penetrations",
        "Engineered temporary steel propping during cuts",
      ],
      equipment: "Diamond Floor Saws, Hydraulic Wire Cutters, Core Drills",
      image: "/images/card-slab.jpg",
    },
    {
      id: "compound-wall-shed-removal",
      number: "04",
      title: "COMPOUND WALL & SHED REMOVAL",
      tagline: "Boundary clearing, structural steel frame dismantle, and roof sheets",
      description:
        "Safe takedown of stone masonry compound walls, industrial warehouse sheds, MS steel trusses, and sheet roofing with orderly scrap recovery sorting on site.",
      scope: [
        "Masonry, stone, and precast boundary walls",
        "Industrial steel sheds, trusses, and purlins",
        "GI sheet and roofing panel dismantling",
        "Footing trenches and sub-grade stone extraction",
      ],
      equipment: "Gas Cutters, Mobile Cranes, Mini Excavators",
      image: "/images/card-wall-shed.jpg",
    },
    {
      id: "debris-clearing-plot-cleaning",
      number: "05",
      title: "DEBRIS CLEARING & PLOT CLEANING",
      tagline: "Rubble haulage, root clearing, and clean handover to natural ground level",
      description:
        "Complete removal of broken concrete, brick rubble, and old septic tanks. Tippers haul all waste to designated disposal sites, and the plot is graded flat for immediate foundation work.",
      scope: [
        "Bobcat and excavator rubble loading fleet",
        "Licensed dumper truck transit to recycling yards",
        "Old foundation footings & tree root excavation",
        "Surface leveling ready for soil testing or piling",
      ],
      equipment: "JCB Excavators, Bobcat Skid Steers, 10-Wheel Tippers",
      image: "/images/card-debris.jpg",
    },
  ],

  processSteps: [
    {
      number: "01",
      title: "SITE VISIT",
      description: "Mr. Saravanan visits the property personally to examine structural load paths, road access width for machinery, overhead utility cables, shared party walls, and salvage value.",
      deliverable: "Personal on-site risk audit & machinery access check",
    },
    {
      number: "02",
      title: "WRITTEN QUOTE",
      description: "A transparent written estimate detailing machinery deployment hours, labor scope, salvage credits, and a clear completion schedule with zero hidden surcharges.",
      deliverable: "Itemized written document & salvage offset",
    },
    {
      number: "03",
      title: "SAFETY SETUP",
      description: "Before a single hammer strikes: water and power isolation are verified, heavy dust suppression nets are erected, and neighboring properties are securely barricaded.",
      deliverable: "Dust mesh, steel shoring & neighbor protection barrier",
    },
    {
      number: "04",
      title: "DEMOLITION",
      description: "Controlled top-to-bottom orderly deconstruction. Breaker machines and skilled manual crews work in synchronization with continuous water misting to suppress dust.",
      deliverable: "Top-down sequence with zero adjoining vibration",
    },
    {
      number: "05",
      title: "CLEAN PLOT HANDED OVER",
      description: "All concrete rubble, bricks, and sub-grade debris are hauled away in heavy tippers. The plot is graded flat, clean, and ready for your architect.",
      deliverable: "100% rubble carted & smooth compacted ground handover",
    },
  ],

  // Gallery array: read dynamically by Section 05 / OUR WORK
  // If this array is empty, Section 05 automatically hides.
  gallery: [
    {
      id: "g1",
      title: "G+2 RESIDENTIAL DOWN-TAKING",
      location: "CHENNAI METRO",
      category: "BUILDING DEMOLITION",
      image: "/images/card-house.jpg",
    },
    {
      id: "g2",
      title: "RETAIL INTERIOR CHIPPING",
      location: "PUDUCHERRY",
      category: "SELECTIVE STRIP-OUT",
      image: "/images/card-interior.jpg",
    },
    {
      id: "g3",
      title: "DIAMOND RCC SLAB CUTTING",
      location: "VELLORE",
      category: "CORE CUTTING",
      image: "/images/card-slab.jpg",
    },
    {
      id: "g4",
      title: "WAREHOUSE SHED DISMANTLING",
      location: "ARNI BELT",
      category: "STEEL CLEARANCE",
      image: "/images/card-wall-shed.jpg",
    },
    {
      id: "g5",
      title: "COMPACTED HANDOVER PLOT",
      location: "TAMIL NADU",
      category: "SITE RECLAIMING",
      image: "/images/card-debris.jpg",
    },
  ],

  faq: [
    {
      id: "faq-party-wall",
      number: "01",
      category: "safety",
      categoryLabel: "SAFETY STANDARDS",
      question: "How do you protect shared party walls and neighboring houses from cracking?",
      answer:
        "In dense urban streets across Chennai, Vellore, and Arni, homes frequently share boundary walls or stand within inches of adjoining structures. We never deploy heavy excavator breakers against shared junctions. Instead, our crew performs surgical decoupling: diamond groove saws and electric handheld chipping tools cut a clean vertical isolation slit down the joint to eliminate vibration transfer. Heavy adjustable steel shoring jacks are then erected to brace neighboring walls, ballistic debris nets are hung to arrest falling mortar, and dismantling progresses inward, drawing mass safely away from the adjoining property.",
      keyTakeaway: "Physical boundary decoupling with zero hydraulic breaker contact against adjoining walls.",
      bullets: [
        "Pre-work ultrasonic wall crack inspection and photo documentation of neighbor walls",
        "Handheld electric chisel decoupling prior to any heavy hydraulic breaker contact",
        "Telescopic steel screw props supporting adjoining floor and ceiling edges",
      ],
    },
    {
      id: "faq-ppe-protocols",
      number: "02",
      category: "safety",
      categoryLabel: "SAFETY STANDARDS",
      question: "What worker PPE, drop-zone cordons, and safety gear are enforced on site?",
      answer:
        "Safety is governed strictly by structural discipline. Every crew member wears ISI-certified personal protective equipment: high-impact Class E safety helmets, puncture-resistant steel-toed demolition boots, heavy leather abrasion gloves, impact goggles, and particulate dust respirators. High-reach operators wear fall-arrest full body harnesses hooked to rated anchors. On the ground, perimeter barricading prevents unauthorized pedestrian entry, dedicated ground spotters direct excavator swing angles, and two-way radio channels coordinate operator moves with cutting crews.",
      keyTakeaway: "100% PPE compliance, zero unauthorized personnel inside machine slewing radii.",
      bullets: [
        "Daily dawn safety briefing and hazard assessment for the day's specific drop zones",
        "Mechanical exclusion perimeter cordoned off with high-visibility safety barriers",
        "Dedicated spotters guiding excavator swing and dump truck maneuvering",
      ],
    },
    {
      id: "faq-dust-suppression",
      number: "03",
      category: "safety",
      categoryLabel: "SAFETY STANDARDS",
      question: "How do you suppress dust, flying chips, and airborne pollution for neighbors?",
      answer:
        "Uncontrolled masonry dust creates severe neighborhood friction. We hang multi-storey fine-mesh debris netting (shade factor 90%) around the building envelope to retain flying chips. During active breaking and loading, dedicated crew members operate pressurized atomized water misting hoses directly at the breaker chisel tip and material impact points. This encapsulates airborne silica and dust particles at source before they drift into neighboring verandas or street traffic.",
      keyTakeaway: "Continuous pressurized misting at breaker tip plus high-density perimeter mesh containment.",
      bullets: [
        "90% density vertical containment screening around all exposed facades",
        "Direct point-of-impact pressurized water nozzle misting throughout breaking",
        "End-of-day access lane washdown and street sweeping",
      ],
    },
    {
      id: "faq-narrow-access",
      number: "04",
      category: "safety",
      categoryLabel: "SAFETY STANDARDS",
      question: "Can demolition work proceed safely in narrow residential streets or tight alleys?",
      answer:
        "Yes. In narrow residential streets where 20-ton tracked excavators cannot physically navigate or risk snagging overhead cables, we deploy compact equipment: 3-ton to 5-ton mini-excavators with silent breaker attachments, skid-steer Bobcats, and hydraulic concrete splitters. Where access is restricted to foot traffic or two-wheelers, our experienced manual down-taking crew systematically dismantles the structure section-by-section using electric rotary hammers, hauling material via wheelbarrows to intermediate transfer staging points.",
      keyTakeaway: "Calibrated equipment sizing matched exactly to lane width and overhead cable clearances.",
      bullets: [
        "Compact 3T mini-excavator and Bobcat skid-steer units for tight alleys",
        "Manual dismantling with electric breakers where machine entry is impossible",
        "Overhead electric and telecommunication cable clearance verified prior to deployment",
      ],
    },
    {
      id: "faq-permits-process",
      number: "05",
      category: "permits",
      categoryLabel: "DEMOLITION PERMITS",
      question: "What municipal permits or approvals are required before demolishing a building?",
      answer:
        "Demolition permissions depend on the local governing body—such as the Greater Chennai Corporation (GCC), Directorate of Town and Country Planning (DTCP), or Puducherry Planning Authority (PPA). For full structural down-taking, clients typically submit an application for Demolition Permission (often bundled with or preceding a new Building Plan Sanction). Key required documentation includes registered ownership proof (Patta / Sale Deed), current property tax receipts, existing building drawings, and a structural engineer's stability certificate if adjoining structures are sensitive. We review your site condition and guide you through the municipal filing sequence.",
      keyTakeaway: "Municipal compliance verified against GCC / DTCP / PPA zoning codes before machinery strikes.",
      bullets: [
        "Assistance with site layout drawings and structural stability declarations",
        "Alignment with Greater Chennai Corporation (GCC) & Puducherry Planning Authority (PPA) norms",
        "Clear demarcations of setbacks and road-widening reservations",
      ],
    },
    {
      id: "faq-utility-isolation",
      number: "06",
      category: "permits",
      categoryLabel: "DEMOLITION PERMITS",
      question: "Who coordinates utility disconnections like TANGEDCO power and water lines?",
      answer:
        "Statutory disconnection of utility meters must formally be requested by the registered property owner through the appropriate government authorities—TANGEDCO (Tamil Nadu Generation and Distribution Corporation) or the Puducherry Electricity Department for power, and CMWSSB / local municipality for metro water and underground drainage connections. Once disconnected, our electrical crew verifies zero-voltage isolation across all conduits with calibrated detectors. We then arrange temporary, insulated construction power distribution boards strictly for our saws and misting pumps.",
      keyTakeaway: "Owner initiates meter clearance; our site engineers conduct live-line zero-voltage verification.",
      bullets: [
        "Physical inspection and verification of removed EB energy meters",
        "Plumbing caps installed on municipal water lines to avoid street supply backflow",
        "Dedicated generator or verified temporary line powering cutting machinery",
      ],
    },
    {
      id: "faq-interior-stripout-permits",
      number: "07",
      category: "permits",
      categoryLabel: "DEMOLITION PERMITS",
      question: "Do interior strip-outs, bathroom chipping, or slab cutting require corporation permits?",
      answer:
        "Non-structural internal remodeling—such as chipping floor tiles, dismantling non-load-bearing brick partitions, removing false ceilings, or stripping MEP conduits—does not require a municipal building demolition permit. However, in residential apartment complexes or commercial complexes, permission from the Resident Welfare Association (RWA) or building facility management is mandatory. For RCC slab cutting (such as creating openings for new stairwells or lift shafts), a structural engineer's validation is mandatory to ensure load-bearing integrity; we provide engineered steel staging propping before initiating diamond cuts.",
      keyTakeaway: "Internal non-structural work requires RWA/facility approval; RCC cuts require structural sign-off.",
      bullets: [
        "Strict adherence to designated society work timings (e.g., 9:00 AM – 5:30 PM, no weekend hammering)",
        "Protection wrapping for common lobbies, stairs, and elevator cabins",
        "Engineered propping certified for structural slab aperture cuts",
      ],
    },
    {
      id: "faq-debris-disposal",
      number: "08",
      category: "debris",
      categoryLabel: "DEBRIS REMOVAL",
      question: "Where is demolition debris transported, and how is C&D waste handled responsibly?",
      answer:
        "We adhere strictly to the Construction & Demolition (C&D) Waste Management Rules. Concrete rubble, brickbats, mortar screed, and structural steel are separated on site. Recyclable metal rebar is sorted and bundled for salvage credits. Concrete and brick debris is loaded into heavy tipper trucks and carted directly to designated C&D waste processing centers (such as the processing plants in Perungudi and Kodungaiyur for Chennai) or authorized low-lying reclamation yards. We maintain zero illegal dumping on open roadsides, lakebeds, or unauthorized plots.",
      keyTakeaway: "100% compliant haulage to designated C&D recycling plants and approved landfill reclamation yards.",
      bullets: [
        "On-site segregation of recyclable structural steel and salvageable timber",
        "Authorized multi-axle tippers and dumper trucks with verified weighbridge slips",
        "Zero fly-tipping or dumping into natural water reservoirs",
      ],
    },
    {
      id: "faq-plot-handover-condition",
      number: "09",
      category: "debris",
      categoryLabel: "DEBRIS REMOVAL",
      question: "In what condition is the ground handed over once clearing is finished?",
      answer:
        "We deliver a 'ready-to-build' clean site. Debris removal is not just skimming surface rubble—we excavate old foundation footings, break buried grade beams, unearth decommissioned septic tanks, and extract deep tree roots upon request. Once all buried masonry is excavated, the plot is backfilled with clean soil or natural subgrade, mechanically leveled with an excavator blade, and compacted flat to the natural street grade. The site is handed back pristine and immediately accessible for your architect, soil bore testing rigs, or piling machinery.",
      keyTakeaway: "100% rubble carted away; foundation footings dug out and land leveled flat to street grade.",
      bullets: [
        "Extraction of below-ground brick footings, stone foundations, and old soak pits",
        "Surface grading and excavator back-blade leveling",
        "Clean handover certificate signed with property owner",
      ],
    },
    {
      id: "faq-road-transport-spillage",
      number: "10",
      category: "debris",
      categoryLabel: "DEBRIS REMOVAL",
      question: "How do you prevent spillage and road contamination during tipper transport?",
      answer:
        "Transporting hundreds of tons of rubble through busy metropolitan roads requires strict logistics. Every dumper truck bed is loaded below side-wall capacity and secured with heavy waterproof tarpaulin sheets tied down tightly to prevent stones or fine dust from flying off in transit. Before exiting the plot gates, truck tires and chassis are water-washed to prevent muddy track-out onto municipal asphalt. In the event of minor gravel spillage at the site exit, our ground team immediately sweeps the roadway clean.",
      keyTakeaway: "Mandatory tarpaulin truck covers, tire washdown, and clean street exit protocols.",
      bullets: [
        "Heavy-duty tarpaulin tied-down covers over all open truck beds",
        "Site exit tire wash to prevent municipal street track-out",
        "Compliance with city traffic police night-transit hours for heavy vehicles",
      ],
    },
  ],
};
