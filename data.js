// ============================================================
//  NIFTY THRIFTY — Site Content
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
  heroBody: "Benefiting the homeless community, two Wilmington locations packed with daily restocks, weekly deals, and finds you won't believe.",

  // ----------------------------------------------------------
  // ANNOUNCEMENT BAR FALLBACK
  // ----------------------------------------------------------
  // This shows on Tue/Wed/Fri (days without a day-specific message).
  // Day-specific messages (Mon/Thu/Sat/Sun) are defined in index.html
  // and will rotate automatically based on the current day of the week.
  announcement: "🛍️ <strong>Two Wilmington locations</strong> &nbsp;·&nbsp; Daily restocks &nbsp;·&nbsp; $1/lb every Sat &amp; Sun &nbsp;·&nbsp; Double stamps every Thursday",

  // ----------------------------------------------------------
  // RIBBON (set show: false to hide)
  // ----------------------------------------------------------
  ribbon: {
    show: true,
    headline: "Two Wilmington locations to serve you",
    detail: "Carolina Beach Rd & Market St · Open 7 days a week · Benefiting the homeless community",
    address: "Wilmington, NC"
  },

  // ----------------------------------------------------------
  // WEEKLY SCHEDULE
  // ----------------------------------------------------------
  weeklySchedule: [
    { day: "Mon", promo: "Mega Monday",    desc: "Full restock, all new items",           hot: true  },
    { day: "Tue", promo: "Regular hours",  desc: "10am – 5:30pm",                        hot: false },
    { day: "Wed", promo: "Regular hours",  desc: "10am – 5:30pm",                        hot: false },
    { day: "Thu", promo: "Double Stamps",  desc: "2 stamps per $10 spent",               hot: true  },
    { day: "Fri", promo: "Regular hours",  desc: "10am – 5:30pm",                        hot: false },
    { day: "Sat", promo: "Weekend deal",   desc: "$1/lb clothing & linens",              hot: true  },
    { day: "Sun", promo: "Fill-A-Bag",     desc: "3–5pm Market St, fill any bag $10",    hot: true  },
  ],

  // ----------------------------------------------------------
  // PRICING
  // ----------------------------------------------------------
  pricingCategories: [
    {
      icon: "tag",
      title: "Clothing / Ropa",
      rows: [
        { days: "Mon – Fri", price: "$2.00 / lb" },
        { days: "Sat & Sun", price: "$1.00 / lb" },
      ]
    },
    {
      icon: "home",
      title: "Linens / Linos",
      rows: [
        { days: "Mon – Fri", price: "$2.50 / item" },
        { days: "Sat & Sun", price: "$1.00 / item" },
      ]
    },
  ],

  bogoItems: [
    { label: "Boutique Clothing", icon: "shirt"      },
    { label: "Costume Jewelry",   icon: "gem"        },
    { label: "Shoes",             icon: "footprints" },
    { label: "DVDs",              icon: "disc"       },
  ],

  // ----------------------------------------------------------
  // EVENTS — recurring weekly anchors
  // ----------------------------------------------------------
  // These are the always-on reasons to visit. To add a one-time
  // dated event, just add another object here. (Future enhancement:
  // optional endDate field for auto-expiring dated events.)
  events: [
    {
      date: "Every Monday · 10am – 5:30pm",
      name: "Mega Monday Restock",
      location: "Both locations",
      pills: ["Brand new inventory", "First come, first pick", "Full floor restock", "Both locations"]
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
      location: "Both locations",
      pills: ["$1/lb clothing", "$1/item linens", "All weekend long", "Both locations"]
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
      image: "https://i.ibb.co/jZ306kpK/3e1f00232e970babcc1a327bf56867ca204af03f4bd2644f55ee724d7ea6b1a2.png",
      imageAlt: "Market St location",
      address: "1614 Market St",
      city: "Wilmington, NC 28401",
      phone: "910.617.5031",
      hours: ["Mon–Fri: 10am – 5:30pm", "Sat: 10am – 5pm", "Sun: 10am – 5pm"],
      mapsUrl: "https://maps.google.com/?q=1614+Market+St,+Wilmington,+NC+28401"
    },
    {
      image: "https://i.ibb.co/V0WtB9qm/a07a520df73334c65e8dd6bf5f970a517ed2c8b23856ecd27e654786a6ad8df9.png",
      imageAlt: "Carolina Beach Rd location",
      address: "3722 Carolina Beach Rd",
      city: "Wilmington, NC 28412",
      phone: "910.769.5082",
      hours: ["Mon–Fri: 10am – 5:30pm", "Sat: 10am – 5pm", "Sun: 10am – 5pm"],
      mapsUrl: "https://maps.google.com/?q=3722+Carolina+Beach+Rd,+Wilmington,+NC"
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
      "Every purchase at Nifty Thrifty helps support people in need right here in Wilmington. We're proud partners of the Good Shepherd Center, and a portion of all proceeds goes directly toward helping our homeless neighbors.",
      "When you shop with us, you're not just finding a great deal. You're giving back."
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
