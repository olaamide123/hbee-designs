import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const client = createClient({
  projectId: 'o7fduvas',
  dataset: 'production',
  apiVersion: '2021-06-07',
  token: 'skdAvHPILJTRWV0TnqgX742fCaeTOTIS758QYF5faokIDEtVs8z3mkaj1Ipxq6tm4RH9ktnec3IdkbBbT',
  useCdn: false,
})

// Cache uploaded asset refs so we don't re-upload duplicates
const assetCache = {}

async function uploadImage(relPath, retries = 3) {
  if (assetCache[relPath]) return assetCache[relPath]
  const fullPath = path.join(ROOT, relPath)
  if (!fs.existsSync(fullPath)) {
    console.warn(`  ⚠ skipping missing file: ${relPath}`)
    return null
  }
  const filename = path.basename(fullPath)
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`  ↑ uploading ${filename}${attempt > 1 ? ` (attempt ${attempt})` : ''}`)
      const buffer = fs.readFileSync(fullPath)
      const asset = await client.assets.upload('image', buffer, { filename })
      assetCache[relPath] = asset._id
      return asset._id
    } catch (err) {
      if (attempt === retries) throw err
      console.warn(`  ↺ retrying after error: ${err.code || err.message}`)
      await new Promise(r => setTimeout(r, 2000 * attempt))
    }
  }
}

async function makeImageRef(assetId) {
  return { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
}

// ── PORTFOLIO ITEMS ────────────────────────────────────────────────────────

const portfolioItems = [
  // ── FLYERS ────────────────────────────────────────────────────
  { title: 'Bad Bunny Costume Party',         category: 'flyers', label: 'Halloween Flyer',    featured: true,  order: 1,  files: ['Party Flyers/BAD BUNNY COSTUME.png'] },
  { title: 'Ice Cream Sundays',               category: 'flyers', label: 'Day Party Flyer',    featured: true,  order: 2,  files: ['Party Flyers/Palm Beach (ICE CREAM SUNDAYS).png'] },
  { title: 'Social Saturdays',                category: 'flyers', label: 'Nightlife Flyer',    featured: true,  order: 3,  files: ['Party Flyers/SOCIAL SATURDAYS.png'] },
  { title: 'Social Saturdays — Nov',          category: 'flyers', label: 'Nightlife Flyer',    featured: true,  order: 4,  files: ['Party Flyers/SOCIAL SAT NOV.png'] },
  { title: 'NYE 2026 — Time Square ATL',      category: 'flyers', label: "New Year's Flyer",   featured: true,  order: 5,  files: ['Party Flyers/TIME SQUARE ATL NYE 2026.png'] },
  { title: 'Black Girls Rock Edition',        category: 'flyers', label: 'Day Party Flyer',    featured: true,  order: 6,  files: ['Party Flyers/BLACK GIRLS ROCK EDITION.png'] },
  { title: 'Meet & Greet — Fun Cruise 2026',  category: 'flyers', label: 'Event Flyer',        featured: true,  order: 7,  files: ['Party Flyers/MEET & GREET WITH MAC & JACK FLYER.png'] },
  { title: 'Super Bowl Watch Party',          category: 'flyers', label: 'Sports Event Flyer', featured: true,  order: 8,  files: ['Party Flyers/SUPER BOWL WATCH PARTY.png'] },
  { title: 'Sunday Funday Friendsgiving',     category: 'flyers', label: 'Holiday Flyer',      featured: false, order: 9,  files: ['Party Flyers/THANKSGIVING FLYER.png'] },
  { title: 'Big Smoke Mondays',               category: 'flyers', label: 'Weekly Event Flyer', featured: false, order: 10, files: ['Party Flyers/BIG SMOKE MONDAYSS.png'] },
  { title: 'Customer Appreciation Night',     category: 'flyers', label: 'Event Flyer',        featured: false, order: 11, files: ['Party Flyers/CUSTOMER APPRECIATION FLYER.png'] },
  { title: 'Bread & Butter',                  category: 'flyers', label: 'Live Music Flyer',   featured: false, order: 12, files: ["Party Flyers/J.BROWN THE VIBE O'LINIST.png"] },
  { title: 'Kashmere Homecoming After Party', category: 'flyers', label: 'Homecoming Flyer',   featured: false, order: 13, files: ['Party Flyers/KASHMERE HOMECOMING.png'] },
  { title: 'Kashmere High Rams Homecoming',   category: 'flyers', label: 'Homecoming Flyer',   featured: false, order: 14, files: ['Party Flyers/OFFICIAL HOMECOMING PARTY.png'] },
  { title: '3 Posters',                       category: 'flyers', label: 'Event Posters',      featured: false, order: 15, files: ['Party Flyers/3 POSTERS.png'] },
  { title: 'Billboard',                       category: 'flyers', label: 'Billboard',          featured: false, order: 16, files: ['Party Flyers/BILLBOARD.png'] },
  { title: 'Post Mockup',                     category: 'flyers', label: 'Social Media',       featured: false, order: 17, files: ['Party Flyers/POST MOCKUP.png'] },

  // ── PRINT ─────────────────────────────────────────────────────
  { title: 'ATrader Suite',           category: 'print', label: 'Brand Merchandise', featured: true,  order: 1, files: ['PRINT DESIGNS/ATRADER BAG WHITE.png','PRINT DESIGNS/ATRADER BOX.png','PRINT DESIGNS/ATRADER GREEN NOTEPAD.png','PRINT DESIGNS/ATRADER PEN WHITE.png'] },
  { title: 'Print Series',            category: 'print', label: 'Print',             featured: true,  order: 2, files: ['PRINT DESIGNS/B1.png','PRINT DESIGNS/B2.png','PRINT DESIGNS/B3.png'] },
  { title: 'Complimentary Card',      category: 'print', label: 'Cards',             featured: true,  order: 3, files: ['PRINT DESIGNS/COMPLIMENTARY CARD.png'] },
  { title: 'Eco Rx Business Card',    category: 'print', label: 'Business Cards',    featured: true,  order: 4, files: ['PRINT DESIGNS/ECO RX BUS CARD MOCKUP.png'] },
  { title: 'Eco Rx Letterhead',       category: 'print', label: 'Stationery',        featured: true,  order: 5, files: ['PRINT DESIGNS/ECO RX LETTER.png'] },
  { title: 'Frosh Clothing Bag',      category: 'print', label: 'Packaging',         featured: true,  order: 6, files: ['PRINT DESIGNS/FROSH CLOTHING BAG BLACK.png'] },
  { title: 'Frosh Hang Tag',          category: 'print', label: 'Hang Tags',         featured: true,  order: 7, files: ['PRINT DESIGNS/FROSH Tag Mockup.png'] },
  { title: 'Greeting Card',           category: 'print', label: 'Cards',             featured: true,  order: 8, files: ['PRINT DESIGNS/Greeting card grey.png'] },
  { title: 'KRA Business Card',       category: 'print', label: 'Business Cards',    featured: false, order: 9, files: ['PRINT DESIGNS/KRA BUSINESS CARDD.png'] },
  { title: 'Romeo Brown Acting Studio', category: 'print', label: 'Posters',         featured: false, order: 10, files: ['PRINT DESIGNS/ROMEO BROWN ACTING STUDIO.png'] },
  { title: 'Serenity Homes',          category: 'print', label: 'Brand Print',       featured: false, order: 11, files: ['PRINT DESIGNS/SERENITY HOMES (2).png'] },
  { title: 'SimpleFi Bag',            category: 'print', label: 'Merchandise',       featured: false, order: 12, files: ['PRINT DESIGNS/SimpleFi Bag Mockup PSD.png'] },

  // ── BRAND ─────────────────────────────────────────────────────
  { title: '9Mobile Keyholder',       category: 'brand', label: 'Merchandise',    featured: true,  order: 1,  files: ['BRAND DESIGNS/9MOBILE KEYHOLDER.png'] },
  { title: '9Mobile Laptop Sticker',  category: 'brand', label: 'Stickers',       featured: true,  order: 2,  files: ['BRAND DESIGNS/9MOBILE LAPTOP STICKER.png'] },
  { title: 'Aso-Ebi',                 category: 'brand', label: 'Event Graphics', featured: true,  order: 3,  files: ['BRAND DESIGNS/ASO-EBI 1.png'] },
  { title: 'Black Roundneck',         category: 'brand', label: 'Apparel',        featured: true,  order: 4,  files: ['BRAND DESIGNS/BLACK ROUNDNECK.png'] },
  { title: 'Brochure',                category: 'brand', label: 'Brochure',       featured: true,  order: 5,  files: ['BRAND DESIGNS/BROCHURE.png'] },
  { title: 'Button Shirt',            category: 'brand', label: 'Apparel',        featured: true,  order: 6,  files: ['BRAND DESIGNS/BUTTON SHIRT SHORT SLEEVE II.png'] },
  { title: 'Collar Shirt — Black',    category: 'brand', label: 'Apparel',        featured: true,  order: 7,  files: ['BRAND DESIGNS/COLLAR NECK SHIRT BLACK.png'] },
  { title: 'Collar Shirt — White',    category: 'brand', label: 'Apparel',        featured: true,  order: 8,  files: ['BRAND DESIGNS/COLLAR NECK SHIRT WHITE.png'] },
  { title: 'Community Outreach',      category: 'brand', label: 'Event Design',   featured: false, order: 9,  files: ['BRAND DESIGNS/COMMUNITY OUTREACH ARTWORK DESIGN.png'] },
  { title: 'Face Cap — Black',        category: 'brand', label: 'Merchandise',    featured: false, order: 10, files: ['BRAND DESIGNS/FACE CAP BLACK.png'] },
  { title: 'Face Cap — White',        category: 'brand', label: 'Merchandise',    featured: false, order: 11, files: ['BRAND DESIGNS/FACE CAP WHITE.png'] },
  { title: 'Gift Set',                category: 'brand', label: 'Packaging',      featured: false, order: 12, files: ['BRAND DESIGNS/GIFT SET.png'] },
  { title: 'Keychain',                category: 'brand', label: 'Merchandise',    featured: false, order: 13, files: ['BRAND DESIGNS/Keychain.png'] },
  { title: 'Lanyard',                 category: 'brand', label: 'Merchandise',    featured: false, order: 14, files: ['BRAND DESIGNS/LANYARD WHITE.png'] },
  { title: 'Outreach Notebook',       category: 'brand', label: 'Stationery',     featured: false, order: 15, files: ['BRAND DESIGNS/OUTREACH NOTEBOOK MOCKUP.png'] },
  { title: 'Outreach Apron',          category: 'brand', label: 'Merchandise',    featured: false, order: 16, files: ['BRAND DESIGNS/Outreach Apron.png'] },
  { title: 'Outreach Backpack',       category: 'brand', label: 'Merchandise',    featured: false, order: 17, files: ['BRAND DESIGNS/Outreach School BackPack.png'] },
  { title: 'Outreach Umbrella',       category: 'brand', label: 'Merchandise',    featured: false, order: 18, files: ['BRAND DESIGNS/Outreach Umbrella.png'] },
  { title: 'Regally',                 category: 'brand', label: 'Brand Identity', featured: false, order: 19, files: ['BRAND DESIGNS/REGALLY LOGO.png'] },
  { title: 'Regally Bag',             category: 'brand', label: 'Packaging',      featured: false, order: 20, files: ['BRAND DESIGNS/Regally Bag.png'] },
  { title: 'Branded Umbrella',        category: 'brand', label: 'Merchandise',    featured: false, order: 21, files: ['BRAND DESIGNS/UMBRELLA.png'] },
  { title: 'White Roundneck',         category: 'brand', label: 'Apparel',        featured: false, order: 22, files: ['BRAND DESIGNS/WHITE ROUNDNECK.png'] },
]

// ── TESTIMONIALS ──────────────────────────────────────────────────────────

const testimonials = [
  {
    clientName: 'Tunde A.',
    clientRole: 'Promoter',
    clientCompany: 'Social Saturdays',
    quote: 'HBEE understood the vibe immediately and delivered a flyer that looked clean, bold and unmistakably ours.',
    colorTheme: 'tst-pink',
    order: 1,
  },
  {
    clientName: 'Ifeoma E.',
    clientRole: 'Director',
    clientCompany: 'Romeo Brown Acting Studio',
    quote: 'The brochure system completely changed how the brand reads in print. Clients keep asking who designed it.',
    colorTheme: 'tst-blue',
    order: 2,
  },
  {
    clientName: 'Marcus O.',
    clientRole: 'Founder',
    clientCompany: 'Regally',
    quote: 'Fast turnaround, sharp typography, and not a single generic stock asset. Booked again the next week.',
    colorTheme: 'tst-yellow',
    order: 3,
  },
]

// ── RUN ───────────────────────────────────────────────────────────────────

async function run() {
  // Fetch already-created titles so we can skip them on retry runs
  const existingTitles = new Set(
    await client.fetch(`*[_type == "portfolioItem"].title`)
  )
  console.log(`\n↩ Already in Sanity: ${existingTitles.size} portfolio items`)

  // Seed portfolio items
  console.log('\n📁 Uploading portfolio items…')
  for (const item of portfolioItems) {
    if (existingTitles.has(item.title)) {
      console.log(`  ✓ skip (exists): ${item.title}`)
      continue
    }
    console.log(`\n→ ${item.title} [${item.category}]`)
    const imageRefs = []
    for (const file of item.files) {
      const assetId = await uploadImage(file)
      if (assetId) {
        imageRefs.push({
          _type: 'image',
          _key: assetId.replace('image-', '').slice(0, 12),
          asset: { _type: 'reference', _ref: assetId }
        })
      }
    }
    if (!imageRefs.length) { console.warn('  ⚠ no images — skipping'); continue }

    await client.create({
      _type: 'portfolioItem',
      title: item.title,
      category: item.category,
      label: item.label,
      order: item.order,
      featured: item.featured,
      images: imageRefs,
    })
    console.log(`  ✓ created`)
  }

  // Seed testimonials
  const existingTestimonials = new Set(
    await client.fetch(`*[_type == "testimonial"].clientName`)
  )
  console.log('\n💬 Creating testimonials…')
  for (const t of testimonials) {
    if (existingTestimonials.has(t.clientName)) {
      console.log(`  ✓ skip (exists): ${t.clientName}`)
      continue
    }
    await client.create({ _type: 'testimonial', ...t })
    console.log(`  ✓ ${t.clientName}`)
  }

  console.log('\n✅ Done! All content is live in Sanity.\n')
}

run().catch(err => { console.error(err); process.exit(1) })
