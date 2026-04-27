import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'o7fduvas',
  dataset: 'production',
  apiVersion: '2021-06-07',
  token: 'skdAvHPILJTRWV0TnqgX742fCaeTOTIS758QYF5faokIDEtVs8z3mkaj1Ipxq6tm4RH9ktnec3IdkbBbT',
  useCdn: false,
})

const docs = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    navCta: 'Book a design',
    footerCopyright: '© 2026 HBEE Designs',
    footerLocation: 'Lagos, NG',
    email: 'hbeedesings001@gmail.com',
    instagramHandle: 'beeb_designz',
    instagramUrl: 'https://instagram.com/beeb_designz',
    linkedinName: 'Habeeb Yusuf',
    linkedinUrl: 'https://linkedin.com/in/habeeb-yusuf',
    twitterHandle: '@Hb_innovations',
    twitterUrl: 'https://twitter.com/Hb_innovations',
  },
  {
    _id: 'heroSection',
    _type: 'heroSection',
    eyebrowLeft: 'Available for new commissions — Q2 booking open',
    eyebrowRight: 'Lagos, NG · Worldwide',
    headlineLine1: 'Bold',
    headlineLine2: 'graphic',
    headlineLine3: 'design',
    headlineLine4: 'that owns the wall.',
    blurb: 'HBEE Designs is the studio of Habeeb — print, party flyers, promotional materials and brand visuals for clients who want to stop the scroll and turn heads in real life.',
    ctaPrimary: 'View portfolio',
    ctaSecondary: 'Book a design',
    stat1Number: '180+',
    stat1Label: 'Designs delivered',
    stat2Number: '40+',
    stat2Label: 'Happy clients',
    stat3Number: '6 yrs',
    stat3Label: 'Studio practice',
  },
  {
    _id: 'aboutSection',
    _type: 'aboutSection',
    headlineLine1: 'MEET Habeeb',
    headlineLine2: 'DESIGNER &',
    headlineLine3: 'FLYER MAKER.',
    bio: 'Habeeb is a graphic designer creating bold, colorful, professional visuals for events, businesses and personal brands. From party flyers and posters to print materials and promotional designs, his work helps people communicate clearly, attract attention and leave a strong impression.',
    portraitTag: '★ THE DESIGNER ★',
  },
  {
    _id: 'servicesSection',
    _type: 'servicesSection',
    sectionTitle: 'WHAT I MAKE.',
    services: [
      { _key: 's1',  title: 'Party Flyer Design',    description: 'Single drops or weekly residency systems.',      colorTheme: 'srv-pink'   },
      { _key: 's2',  title: 'Print Design',           description: 'Posters, brochures, menus, large format.',       colorTheme: 'srv-blue'   },
      { _key: 's3',  title: 'Poster Design',          description: 'A3 to A1 — print-ready & social cuts.',          colorTheme: 'srv-yellow' },
      { _key: 's4',  title: 'Business Cards',         description: 'Stationery systems for studios & founders.',     colorTheme: 'srv-cream'  },
      { _key: 's5',  title: 'Banner Design',          description: 'Roll-ups, street banners, stage backdrops.',     colorTheme: 'srv-pink'   },
      { _key: 's6',  title: 'Brochure & Menu',        description: 'Multi-page editorial print pieces.',             colorTheme: 'srv-blue'   },
      { _key: 's7',  title: 'Brand Promo Graphics',   description: 'Launch suites, campaign visuals.',               colorTheme: 'srv-yellow' },
      { _key: 's8',  title: 'Social Media Design',    description: 'IG, X, LinkedIn — full feed systems.',           colorTheme: 'srv-cream'  },
      { _key: 's9',  title: 'Event Graphics',         description: 'Save-the-date to step-and-repeat.',              colorTheme: 'srv-pink'   },
      { _key: 's10', title: 'Custom Requests',        description: 'If it has a deadline, send the brief.',          colorTheme: 'srv-blue'   },
    ],
  },
  {
    _id: 'processSection',
    _type: 'processSection',
    sectionTitle: 'FROM BRIEF to PRINT.',
    steps: [
      { _key: 'p1', title: 'BRIEF',     description: 'Send the project, deadline & references.' },
      { _key: 'p2', title: 'DETAILS',   description: 'We sharpen scope, tone, deliverables & sizes.' },
      { _key: 'p3', title: 'CONCEPT',   description: 'First-round design — 1–2 directions.' },
      { _key: 'p4', title: 'REVISIONS', description: 'Up to 3 rounds of refinement.' },
      { _key: 'p5', title: 'DELIVERY',  description: 'Print-ready files + social cuts shipped.' },
    ],
  },
  {
    _id: 'contactSection',
    _type: 'contactSection',
    headlineLine1: 'NEED A flyer OR',
    headlineLine2: 'PRINT DESIGN THAT',
    headlineLine3: 'STANDS OUT?',
    subtext: "Send your brief and let's create something bold, clean and ready to use. Every project starts with a conversation.",
  },
]

async function run() {
  console.log('Seeding section content…')
  for (const doc of docs) {
    await client.createOrReplace(doc)
    console.log(`  ✓ ${doc._type}`)
  }
  console.log('\n✅ Done!')
}

run().catch(err => { console.error(err); process.exit(1) })
