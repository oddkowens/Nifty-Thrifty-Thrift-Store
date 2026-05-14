// ============================================================
//  NIFTY THRIFTY — Site Content v15
//  Edit this file to update text, prices, hours, events, etc.
//  No need to touch index.html for routine content changes.
// ============================================================

const SITE = {

  // ----------------------------------------------------------
  // STORE INFO
  // ----------------------------------------------------------
  name: "Nifty Thrifty Thrift Shop",
  tagline: "Benefiting the homeless community · Wilmington, NC",
  heroEyebrow: "Wilmington's favorite thrift bin store",
  heroHeadline: ["Thrift more.", "Spend less."],
  heroBody: "Helping our neighbors in need — two Wilmington locations packed with daily new arrivals, weekly deals, and finds you won't believe.",

  // ----------------------------------------------------------
  // ANNOUNCEMENT BAR FALLBACK
  // ----------------------------------------------------------
  // This shows on Tue/Wed/Fri (days without a day-specific message).
  // Day-specific messages (Mon/Thu/Sat/Sun) are defined in index.html
  // and will rotate automatically based on the current day of the week.
  announcement: "🛍️ <strong>Two Wilmington locations</strong> &nbsp;·&nbsp; New arrivals every day &nbsp;·&nbsp; $1/lb at Market St every Sat &amp; Sun &nbsp;·&nbsp; Double stamps every Thursday",

  // ----------------------------------------------------------
  // RIBBON (set show: false to hide)
  // ----------------------------------------------------------
  ribbon: {
    show: true,
    headline: "Two Wilmington locations to serve you",
    detail: "Carolina Beach Rd & Market St · Open 7 days a week · Helping our neighbors in need",
    address: "Wilmington, NC"
  },

  // ----------------------------------------------------------
  // WEEKLY SCHEDULE
  // ----------------------------------------------------------
  weeklySchedule: [
    { day: "Mon", promo: "Mega Monday",    desc: "Big restock at Market St — new items hit the floor",  hot: true  },
    { day: "Tue", promo: "New arrivals",   desc: "Fresh finds added all day at both locations",          hot: false },
    { day: "Wed", promo: "New arrivals",   desc: "Fresh finds added all day at both locations",          hot: false },
    { day: "Thu", promo: "Double Stamps",  desc: "2 stamps per $10 spent — both locations",             hot: true  },
    { day: "Fri", promo: "New arrivals",   desc: "Fresh finds added all day at both locations",          hot: false },
    { day: "Sat", promo: "Weekend deal",   desc: "$1/lb at Market St · BOGO free all day at CB",        hot: true  },
    { day: "Sun", promo: "Fill-A-Bag",     desc: "3–5pm Market St, fill any bag $10 · $1/lb all day",   hot: true  },
  ],

  // ----------------------------------------------------------
  // PRICING
  // Two stores, two formats — Market St is bin/lb, CB is hanging garment
  // ----------------------------------------------------------
  pricingCategories: [
    {
      icon: "tag",
      title: "Market St · Bin Pricing",
      rows: [
        { days: "Mon – Fri · Clothing", price: "$2.00 / lb"   },
        { days: "Mon – Fri · Linens",   price: "$2.50 / item" },
        { days: "Sat & Sun · Clothing", price: "$1.00 / lb"   },
        { days: "Sat & Sun · Linens",   price: "$1.00 / item" },
      ]
    },
    {
      icon: "shirt",
      title: "Carolina Beach Rd · Rack Pricing",
      rows: [
        { days: "All clothing",                 price: "From $1"   },
        { days: "All clothing — every day",     price: "BOGO free" },
        { days: "Women's $1 rack (Sat & Sun)",  price: "B1G3 free" },
      ]
    },
  ],

  // ----------------------------------------------------------
  // BOGO — Carolina Beach Rd
  // ----------------------------------------------------------
  bogoItems: [
    { label: "All Clothing",      icon: "shirt"      },
    { label: "Costume Jewelry",   icon: "gem"        },
    { label: "Shoes",             icon: "footprints" },
    { label: "DVDs",              icon: "disc"       },
  ],

  // ----------------------------------------------------------
  // EVENTS — recurring weekly anchors
  // ----------------------------------------------------------
  events: [
    {
      date: "Every Monday · 10am – 5:30pm",
      name: "Mega Monday Restock",
      location: "1614 Market St",
      pills: ["Brand new inventory", "First come, first pick", "Full floor restock", "Market St only"]
    },
    {
      date: "Every Thursday · All day",
      name: "Double Stamp Day",
      location: "Both locations",
      pills: ["2 stamps per $10 spent", "Both locations", "All purchases qualify", "Cards interchangeable"]
    },
    {
      date: "Every Saturday & Sunday",
      name: "Weekend $1/lb Sale",
      location: "1614 Market St",
      pills: ["$1/lb clothing", "$1/item linens", "All weekend long", "Market St only"]
    },
    {
      date: "Every Sunday · 3pm – 5pm",
      name: "Fill-A-Bag Sunday",
      location: "1614 Market St",
      pills: ["Fill any bag for $10", "Clothing & linens", "Market St only", "No limit"]
    },
  ],

  // ----------------------------------------------------------
  // LOCATIONS
  // ----------------------------------------------------------
  locations: [
    {
      tag: "Bin Store",
      image: "https://i.ibb.co/jZ306kpK/3e1f00232e970babcc1a327bf56867ca204af03f4bd2644f55ee724d7ea6b1a2.png",
      imageAlt: "Nifty Thrifty Market St — bin store, Wilmington NC",
      address: "1614 Market St",
      city: "Wilmington, NC 28401",
      phone: "910.617.5031",
      hours: ["Mon–Fri: 10am – 5:30pm", "Sat: 10am – 5pm", "Sun: 10am – 5pm"],
      mapsUrl: "https://maps.google.com/?q=1614+Market+St,+Wilmington,+NC+28401",
      storeType: "Pay-by-the-pound bin store · Mega Monday restocks",
    },
    {
      tag: "Rack Store",
      image: "https://i.ibb.co/V0WtB9qm/a07a520df73334c65e8dd6bf5f970a517ed2c8b23856ecd27e654786a6ad8df9.png",
      imageAlt: "Nifty Thrifty Carolina Beach Rd — rack store, Wilmington NC",
      address: "3722 Carolina Beach Rd",
      city: "Wilmington, NC 28412",
      phone: "910.769.5082",
      hours: ["Mon–Fri: 10am – 5:30pm", "Sat: 10am – 5pm", "Sun: 10am – 5pm"],
      mapsUrl: "https://maps.google.com/?q=3722+Carolina+Beach+Rd,+Wilmington,+NC",
      storeType: "Hanging garments from $1 · All clothing BOGO free every day",
    },
  ],

  // ----------------------------------------------------------
  // STAMPS / LOYALTY
  // ----------------------------------------------------------
  stamps: {
    body: "Get a stamp for every $10 you spend — at either location. Collect 10 stamps and earn $10 off your next purchase. On Thursdays, earn double stamps. Stamps are interchangeable between both locations.",
    rewardAmount: "$10 off",
    rewardDetail: "when you collect 10 stamps",
    cardImage: "https://i.ibb.co/VWXtq64s/Nifty-Stamps.png",
  },

  // ----------------------------------------------------------
  // COMMUNITY / MISSION
  // ----------------------------------------------------------
  community: {
    body: [
      "Our mission is to help our neighbors in need. Our heart lies with the Good Shepherd Center — guests receive vouchers so that as they begin a new chapter, they can come into either store for whatever they need to make their place feel like home.",
      "Beyond the Good Shepherd, we help anyone who comes through our doors — families who've lost everything in a fire, someone who just needs a fresh set of clothes. We do what we can, every single day.",
      "We also accept donations at both locations during store hours. Every item donated stays right here in Wilmington and goes toward helping someone who needs it most.",
    ],
    donationItems: [
      "Clothing (all sizes)",
      "Shoes",
      "Linens & towels",
      "Housewares & small appliances",
      "Books, DVDs & games",
      "Toys & children's items",
      "Jewelry & accessories",
    ],
    stats: [
      { num: "11", label: "years in\nWilmington" },
      { num: "2",  label: "store\nlocations"    },
    ]
  },

  // ----------------------------------------------------------
  // SOCIAL LINKS
  // ----------------------------------------------------------
  social: {
    facebook:  "https://www.facebook.com/Niftythriftyilm",
    instagram: "https://www.instagram.com/niftythriftyilm",
  },

  // ----------------------------------------------------------
  // FOOTER NAV LINKS
  // ----------------------------------------------------------
  footerLinks: [
    { label: "Weekly deals", anchor: "#deals"     },
    { label: "Events",       anchor: "#events"    },
    { label: "Locations",    anchor: "#locations" },
    { label: "Contact",      anchor: "#contact"   },
  ],

  // ----------------------------------------------------------
  // PHOTO STRIP (inside-the-store section)
  // ----------------------------------------------------------
  photoStrip: [
    { src: "https://i.ibb.co/3ydNpFQ4/nifty-shoes.jpg",         alt: "Shoes and accessories wall" },
    { src: "https://i.ibb.co/YTX5mZmc/Interior-with-bins.jpg",  alt: "Store interior with bins"   },
  ],

};
