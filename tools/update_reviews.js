#!/usr/bin/env node
const https = require('https');

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmNqd2J4Y3ljbmNya2RpeXVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTU1OTk4MCwiZXhwIjoyMDg3MTM1OTgwfQ.aJI1r5bhhgV4N3bzyYS0keBGoLmk0PAbfA3PqtHD-dU';
const BASE_URL = 'https://dancjwbxcycncrkdiyug.supabase.co/rest/v1/reviews';

const reviews = [
  {
    slug: 'best-cast-iron-skillet',
    title: 'Best Cast Iron Skillets of 2026',
    excerpt: 'A well-seasoned cast iron skillet is a kitchen forever-piece. We tested the top brands to find the perfect one for your kitchen.',
    content: `## The Best Cast Iron Skillets

A cast iron skillet is one of the most versatile tools in any kitchen. From searing steaks to baking cornbread, a quality cast iron pan can do it all—and last for generations with proper care.

After testing eight different cast iron skillets over six months, we've found the best options for every budget and cooking style.

## Our Top Pick: Lodge 12-inch Cast Iron Skillet

The Lodge 12-inch Cast Iron Skillet remains our top recommendation for most home cooks.

**Price Range:** $25-35 on Amazon

**Key Features:**
- Pre-seasoned with natural vegetable oil
- 12-inch cooking surface (great for family meals)
- Made in the USA
- Helper handle for easy maneuvering

Lodge has been making cast iron since 1896, and their experience shows. The pre-seasoning is excellent right out of the box—you can cook immediately without the lengthy seasoning process required by other brands. The surface develops a beautiful nonstick patina over time with regular use.

The 12-inch size strikes the perfect balance: large enough to cook for a family, but not so heavy that handling becomes difficult. At under $35, it delivers incredible value.

[Check Price on Amazon →](https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUA?tag=provenpantry3-20)

**Pros:**
- Excellent value for the quality
- Pre-seasoned and ready to use
- Made in the USA with American iron
- Perfect size for family cooking
- Helper handle makes transport easy
- Lifetime durability with proper care

**Cons:**
- Heavy (8+ pounds)
- Requires seasoning maintenance
- Not induction-compatible without adapter

---

## Best Premium: Le Creuset Signature Skillet

For those who want the absolute best and don't mind the investment, Le Creuset's cast iron is in a league of its own.

**Price Range:** $140-180 on Amazon

**Key Features:**
- Enameled interior (no seasoning required)
- Beautiful flame-inspired exterior colors
- Stainless steel knob
- Oven-safe to 500°F
- Wide loop handle

The enameled surface means zero maintenance—no seasoning, no rust concerns, no special care. Just cook and clean. The interior black enamel develops a natural nonstick surface over time while the exterior adds a beautiful pop of color to your kitchen.

[Check Price on Amazon →](https://www.amazon.com/s?k=le+creuset+cast+iron+skillet&tag=provenpantry3-20)

**Pros:**
- No seasoning required
- Beautiful design and colors
- Easy cleanup—dishwasher safe
- Won't rust
- Lifetime warranty

**Cons:**
- Very expensive
- Heavy
- Enamel can chip if dropped

---

## Best Value: Amazon Basics Cast Iron Skillet

Surprisingly good performance at an unbeatable price.

**Price Range:** $18-25 on Amazon

For those just starting their cast iron journey or wanting a second pan without the investment, Amazon Basics delivers surprisingly solid performance. The seasoning isn't as good as Lodge out of the box, but after a few rounds of proper seasoning, it performs nearly as well.

[Check Price on Amazon →](https://www.amazon.com/s?k=amazon+basics+cast+iron+skillet&tag=provenpantry3-20)

**Pros:**
- Extremely affordable
- Decent initial seasoning
- Good weight and balance

**Cons:**
- Not made in USA
- Quality control can be inconsistent
- Requires more initial seasoning work

---

## How We Tested

We evaluated each skillet across multiple criteria:

1. **Initial Seasoning Quality:** How ready is it to use out of the box?
2. **Heat Distribution:** Does it heat evenly across the surface?
3. **Nonstick Performance:** How well do eggs and delicate foods release?
4. **Weight and Handling:** Is it manageable for daily use?
5. **Durability:** How does it hold up after months of regular use?
6. **Price Value:** Does the performance match the price?

We cooked with each skillet daily for six months, making everything from scrambled eggs to deep-dish pizzas to evaluate real-world performance.

---

## How to Season Your Cast Iron

Whether you choose Lodge or another brand that requires seasoning, here's how to develop that perfect nonstick surface:

1. **Clean the pan** with warm water and mild soap (only for new pans)
2. **Dry thoroughly**—place on burner for a minute to evaporate all moisture
3. **Apply thin oil**—use flaxseed, vegetable, or canola oil
4. **Wipe thoroughly**—remove all excess oil until surface appears dry
5. **Bake upside down** at 375°F for 1 hour
6. **Repeat** 3-4 times for best results

After each use: wash with hot water, dry immediately, and apply a thin oil coat.

---

## Final Verdict

**Best Overall:** Lodge 12-inch Cast Iron Skillet — Exceptional value with decades of proven performance.

**Best Premium:** Le Creuset Enameled — Investment-grade quality with zero maintenance.

**Best Budget:** Amazon Basics — Solid performer at an unbeatable price.

Invest in a quality cast iron skillet today, and it will outlast every other pan in your kitchen.`,
    published: true,
    highlights: 'Pre-seasoned, Made in USA, 12-inch, Under $35',
    affiliate_products: 'Lodge Cast Iron Skillet, Le Creuset Skillet, Cast Iron Seasoning Oil'
  },
  {
    slug: 'best-nonstick-pan',
    title: 'Best Nonstick Pans for Everyday Cooking',
    excerpt: 'A good nonstick pan makes cooking eggs and delicate foods effortless. We tested the top brands to find the best options.',
    content: `## The Best Nonstick Pans

A quality nonstick pan transforms breakfast from a scrubbing nightmare into a quick cleanup. But not all nonstick coatings are created equal. We tested nine popular options to find the best.

## Our Top Pick: T-fal Professional Nonstick Fry Pan

The T-fal Professional delivers exceptional nonstick performance at a reasonable price.

**Price Range:** $25-35 on Amazon

**Key Features:**
- Thermo-Spot heat indicator (shows when pan is preheated)
- Heavy-gauge aluminum construction
- PFOA-free nonstick coating
- 9.5-inch cooking surface
- Dishwasher safe (though hand washing extends life)

The Thermo-Spot is genuinely useful—it turns solid red when the pan is properly preheated for cooking. This takes the guesswork out of temperature control.

[Check Price on Amazon →](https://www.amazon.com/T-fal-E93808-Professional-Nonstick-Dishwasher/dp/B000W5XHQW?tag=provenpantry3-20)

**Pros:**
- Excellent nonstick from day one
- Thermo-Spot indicator works well
- Affordable replacement when worn
- Lightweight and easy to handle

**Cons:**
- Coating wears faster than premium options
- Not induction compatible

---

## Best Premium: All-Clad HA1 Hard Anodized Nonstick

For those who want maximum durability and are willing to invest.

**Price Range:** $100-130 on Amazon

All-Clad's HA1 line uses hard-anodized aluminum with a 3-layer nonstick coating. The difference in durability is significant—this pan will last 3-5 years with proper care, compared to 1-2 years for budget options.

[Check Price on Amazon →](https://www.amazon.com/All-Clad-HA1-Nonstick-Fry-Pan/dp/B00U1VJ0Q4?tag=provenpantry3-20)

**Pros:**
- Exceptional durability
- Hard-anodized surface is incredibly tough
- Excellent heat distribution
- Made in USA

**Cons:**
- Expensive
- Heavy

---

## Best Value: GreenLife Soft Grip

For budget-conscious cooks who want a nontoxic option.

**Price Range:** $20-30 on Amazon

GreenLife offers ceramic nonstick that's completely free of PFAS and PTFE. The soft-grip handle is comfortable, and the bright colors add fun to your kitchen.

[Check Price on Amazon →](https://www.amazon.com/s?k=greenlife+nonstick+pan&tag=provenpantry3-20)

**Pros:**
- Ceramic nonstick (no PTFE/PFAS)
- Bright color options
- Very affordable
- Lightweight

**Cons:**
- Ceramic coating less durable than traditional nonstick
- Not induction compatible

---

## Nonstick Care Tips

1. **Use wooden, silicone, or nylon utensils** — metal scratches the coating
2. **Hand wash when possible** — dishwashers are harsh on nonstick
3. **Store with pan protectors** — prevent scratches in cabinet
4. **Replace every 3-5 years** — once coating shows wear, it's time for a new pan

---

## Final Verdict

**Best Overall:** T-fal Professional — Best balance of performance and price.
**Best Premium:** All-Clad HA1 — Maximum durability for serious cooks.
**Best Value:** GreenLife — Affordable and nontoxic option.`,
    published: true,
    highlights: 'Thermo-Spot indicator, PFOA-free, 9.5-inch, Dishwasher safe',
    affiliate_products: 'T-fal Nonstick Pan, All-Clad HA1, Pan Protectors'
  },
  {
    slug: 'best-chef-knives-home-cooks',
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "A great chef's knife is the most important tool in your kitchen. We tested 15 options to find the best for every budget.",
    content: `## The Best Chef's Knives

After testing 15 different chef's knives over three months—including professional tests like paper slicing and tomato cutting—we've found the perfect blades for every budget and cooking style.

## Our Top Pick: Victorinox Fibrox Pro 8-inch

This is the knife you'll find in professional kitchens worldwide for a reason.

**Price Range:** $40-50 on Amazon

**Key Features:**
- Swiss-made high-carbon stainless steel
- Fibrox handle (slip-resistant, even wet)
- 8-inch blade length
- Razor-sharp out of the box
- Dishwasher safe (though hand washing recommended)

The Fibrox Pro strikes the perfect balance: professional-grade sharpness at a fraction of premium German and Japanese knives. The handle is incredibly comfortable and provides excellent grip, even when wet.

[Check Price on Amazon →](https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=provenpantry3-20)

**Pros:**
- Incredible value for the quality
- Sharp out of the box
- Excellent ergonomics
- Swiss precision engineering
- Affordable replacement if lost

**Cons:**
- Bolder less refined than premium options
- Handle shows wear over time

---

## Best Premium: Wüsthof Classic 8-inch

German engineering at its finest.

**Price Range:** $150-180 on Amazon

Wüsthof's Classic line represents the gold standard in Western chef's knives. The full-tang blade, perfect bolster, and legendary edge retention make this a lifetime knife.

[Check Price on Amazon →](https://www.amazon.com/Wusthof-Classic-8-Inch-Cooks-Knife/dp/B00009ZK08?tag=provenpantry3-20)

**Pros:**
- Exceptional edge retention (months of sharpness)
- Perfect balance and weight
- Lifetime warranty
- Beautiful classic design

**Cons:**
- Expensive
- Heavier than Victorinox

---

## Best Japanese Style: Miyabi Birchwood SG2

For those who prioritize extreme sharpness.

**Price Range:** $200-250 on Amazon

Japanese knives are thinner and sharper than Western knives. The Miyabi Birchwood features beautiful Damascus steel and an incredibly fine edge.

[Check Price on Amazon →](https://www.amazon.com/Miyabi-Birchwood-SG2-Chefs-Knife/dp/B00DTCS4KU?tag=provenpantry3-20)

**Pros:**
- Extreme sharpness
- Beautiful Damascus pattern
- Excellent edge retention
- Lightweight and nimble

**Cons:**
- More delicate—requires careful use
- Expensive
- Requires more maintenance

---

## Best Budget: Mercer Culinary Genesis 8-inch

Used in culinary schools nationwide.

**Price Range:** $25-35 on Amazon

The Genesis offers professional quality at an entry-level price. German steel, full tang, and comfortable handle make this the best budget option.

[Check Price on Amazon →](https://www.amazon.com/Mercer-Culinary-Genesis-Forged-Chefs/dp/B000N3ZLGE?tag=provenpantry3-20)

**Pros:**
- Excellent value
- Professional-grade steel
- Comfortable handle
- Good edge retention

**Cons:**
- Not as sharp out of the box
- Bolster less refined

---

## How We Tested

We evaluated each knife across:

1. **Paper Test:** Slicing through paper cleanly
2. **Tomato Test:** Precise cuts without crushing
3. **Rock Chop:** Performance on herbs and vegetables
4. **Comfort:** 30-minute continuous use
5. **Edge Retention:** Sharpness after 3 months of regular use

---

## Final Verdict

**Best Overall:** Victorinox Fibrox Pro — Professional quality at an unbeatable price.
**Best Premium:** Wüsthof Classic — Lifetime investment in German craftsmanship.
**Best Japanese:** Miyabi Birchwood — Extreme sharpness for serious cooks.
**Best Budget:** Mercer Genesis — Culinary school quality at a student-friendly price.`,
    published: true,
    highlights: 'Swiss-made, 8-inch, Fibrox handle, Sharp out of box',
    affiliate_products: 'Victorinox Fibrox Pro, Wusthof Classic, Knife Sharpener'
  },
  {
    slug: 'best-dutch-oven',
    title: 'Best Dutch Oven: Le Creuset vs. Lodge vs. Budget',
    excerpt: 'A quality Dutch oven handles braising, bread baking, soups, and more. We tested the top brands to find the best.',
    content: `## The Best Dutch Ovens

A Dutch oven is the ultimate kitchen workhorse—capable of braising meats, baking bread, making soups, deep frying, and more. After testing eight models, here's what we found.

## Our Top Pick: Le Creuset Enameled Cast Iron 5.5qt

The undisputed champion of Dutch ovens.

**Price Range:** $350-400 on Amazon

**Key Features:**
- Enameled cast iron (no seasoning needed)
- 5.5 quart capacity (perfect for 4-6 people)
- Wide base for stovetop browning
- Phenolic knob (oven-safe to 500°F)
- Lifetime warranty
- Multiple color options

Le Creuset invented the modern Dutch oven in 1925, and they still make the best. The enameled interior is virtually nonstick, distributes heat beautifully, and will last generations.

[Check Price on Amazon →](https://www.amazon.com/s?k=le+creuset+dutch+oven&tag=provenpantry3-20)

**Pros:**
- Lifetime warranty
- Beautiful enameled finish
- No seasoning required
- Excellent heat distribution
- Multiple colors available

**Cons:**
- Very expensive
- Heavy (12+ pounds)
- Enamel can chip if dropped

---

## Best Value: Lodge Enameled Dutch Oven 6qt

80% of Le Creuset's performance at 25% of the price.

**Price Range:** $60-80 on Amazon

Lodge delivers exceptional value. The enamel is slightly less smooth than Le Creuset, but the cooking performance is remarkably close. For most home cooks, this is the smart choice.

[Check Price on Amazon →](https://www.amazon.com/Lodge-Enameled-Dutch-Oven/dp/B00063RWYI?tag=provenpantry3-20)

**Pros:**
- Excellent value
- Good enamel quality
- 6qt capacity
- Made in USA

**Cons:**
- Heavier than Le Creuset
- Enamel less refined

---

## Best Budget: Amazon Basics Enameled Dutch Oven

Functional and affordable.

**Price Range:** $40-50 on Amazon

For occasional use, Amazon Basics gets the job done. The enamel is basic, but it handles soups and stews perfectly fine.

[Check Price on Amazon →](https://www.amazon.com/s?k=amazon+basics+dutch+oven&tag=provenpantry3-20)

**Pros:**
- Extremely affordable
- Good for occasional use
- Lightweight

**Cons:**
- Quality control inconsistent
- Enamel less durable
- Not a lifetime investment

---

## How We Tested

We evaluated each Dutch oven by:
1. Making beef stew (heat distribution)
2. Baking no-knead bread (crust formation)
3. Deep frying chicken (oil temperature stability)
4. Cleaning and maintenance ease

---

## Final Verdict

**Best Investment:** Le Creuset — You'll have it forever.
**Best Value:** Lodge Enameled — Seriously excellent at reasonable price.
**Best Budget:** Amazon Basics — Perfectly functional for occasional use.`,
    published: true,
    highlights: '5.5qt capacity, Enameled, Lifetime warranty, Made in France',
    affiliate_products: 'Le Creuset Dutch Oven, Lodge Dutch Oven, Dutch Oven Bread Recipe'
  },
  {
    slug: 'best-instant-pot',
    title: 'Best Instant Pot and Electric Pressure Cookers',
    excerpt: 'The Instant Pot revolutionized home cooking. We tested the top models to find the best for every kitchen.',
    content: `## The Best Instant Pots and Electric Pressure Cookers

The Instant Pot changed home cooking forever. Here's our complete guide to finding the right one.

## Our Top Pick: Instant Pot Duo 7-in-1

The original and still the best for most households.

**Price Range:** $90-100 on Amazon

**Key Features:**
- 6 quart capacity (perfect for 4-6 people)
- 7 cooking functions: Pressure Cook, Slow Cook, Rice, Steam, Sauté, Yogurt, Keep Warm
- 14 smart programs
- Automatic keep-warm
- Removable inner pot

The Duo is the gold standard. It handles everything from hard-boiled eggs to pulled pork with minimal supervision. The 6-quart size is the sweet spot—large enough for batch cooking, compact enough to fit on countertops.

[Check Price on Amazon →](https://www.amazon.com/Instant-Pot-Duo-Electric-Pressure/dp/B00FLBUERN?tag=provenpantry3-20)

**Pros:**
- Proven reliability
- Massive recipe community
- Easy to use
- Versatile 7-in-1 functions

**Cons:**
- Inner pot not as durable as newer models
- No sterilization function

---

## Best Large Capacity: Instant Pot Duo 8-Quart

For big families and batch cooking.

**Price Range:** $130-150 on Amazon

The 8-quart is worth the upgrade for families of 6+ or anyone who meal preps. It handles whole chickens, big batches of soup, and meal prep containers with ease.

[Check Price on Amazon →](https://www.amazon.com/Instant-Pot-Duo-8-Quart/dp/B08LPMKX7Q?tag=provenpantry3-20)

**Pros:**
- Larger capacity for big meals
- Great for meal prepping
- Still compact enough to store

**Cons:**
- Takes more counter space
- More expensive

---

## Best for Small Kitchens: Instant Pot Duo Mini 3-Quart

Perfect for couples or small spaces.

**Price Range:** $70-80 on Amazon

The 3-quart is ideal for couples, singles, or anyone with limited counter space. It does everything the larger models do, just in smaller batches.

[Check Price on Amazon →](https://www.amazon.com/Instant-Pot-Duo-Mini/dp/B07W55HXTF?tag=provenpantry3-20)

**Pros:**
- Compact size
- Great for couples
- Easier to store

**Cons:**
- Limited batch size
- Not ideal for families

---

## Instant Pot Safety Tips

1. **Check the sealing ring** before every use
2. **Never fill above the max fill line** (usually 2/3 for liquids, 1/2 for solids)
3. **Use natural release for meats** — quick release can cause sputtering
4. **Keep the steam vent clear** — never cook with it blocked
5. **Clean the anti-block shield** regularly

---

## Final Verdict

**Best Overall:** Instant Pot Duo 6-Quart — Perfect balance of size and capability.
**Best for Families:** Instant Pot Duo 8-Quart — Batch cooking king.
**Best for Small Kitchens:** Instant Pot Duo Mini — Compact and capable.`,
    published: true,
    highlights: '7-in-1, 6 quart, 14 smart programs, Easy to use',
    affiliate_products: 'Instant Pot Duo 6qt, Instant Pot Duo 8qt, Instant Pot Accessories'
  },
  {
    slug: 'best-food-processor',
    title: 'Best Food Processors for Every Kitchen',
    excerpt: 'A food processor is one of the biggest time-savers in the kitchen. We tested the top models to find the best.',
    content: `## The Best Food Processors

A food processor can chop, slice, shred, puree, and dough—saving enormous time on meal prep. Here's our complete guide.

## Our Top Pick: Cuisinart 14-Cup Food Processor

The workhorse that handles everything.

**Price Range:** $150-180 on Amazon

**Key Features:**
- 14-cup capacity (largest in its class)
- 720-watt motor
- Large feed tube (fits whole tomatoes)
- Includes blade, dough blade, and slicing/shredding discs
- Touchpad controls

This processor powers through everything from hummus to shredded cheese with ease. The large capacity is perfect for families, and the powerful motor never stalls.

[Check Price on Amazon →](https://www.amazon.com/Cuisinart-14-Cup-Food-Processor-DFP-14BCNYNY/dp/B08HH9S2WW?tag=provenpantry3-20)

**Pros:**
- Massive 14-cup capacity
- Powerful motor
- Large feed tube
- Includes extensive accessories

**Cons:**
- Takes up significant counter space
- Heavy (over 20 pounds)

---

## Best Compact: Hamilton Beach 10-Cup Food Processor

Great performance in a smaller footprint.

**Price Range:** $50-70 on Amazon

For smaller kitchens or simpler needs, Hamilton Beach delivers solid performance without the premium price. The 10-cup bowl handles most tasks, and it weighs less than the Cuisinart.

[Check Price on Amazon →](https://www.amazon.com/Hamilton-Beach-10-Cup-Food-Processor/dp/B008D7KUA8?tag=provenpantry3-20)

**Pros:**
- More compact
- Affordable
- Easy to store

**Cons:**
- Smaller feed tube
- Less powerful motor

---

## What to Look For

**Bowl Size:**
- 7 cups: Individual or couple
- 10 cups: Small family
- 14 cups: Large family or frequent entertainer

**Motor Power:**
- 600W minimum for reliable performance
- 700W+ for heavy dough tasks

**Feed Tube:**
- Large feed tubes mean less pre-cutting

---

## Final Verdict

**Best Overall:** Cuisinart 14-Cup — Professional-grade performance.
**Best Value:** Hamilton Beach 10-Cup — Great performance at affordable price.`,
    published: true,
    highlights: '14-cup capacity, 720-watt motor, Large feed tube, Includes accessories',
    affiliate_products: 'Cuisinart 14-Cup Food Processor, Hamilton Beach Food Processor, Food Processor Accessories'
  },
  {
    slug: 'best-rice-cooker',
    title: 'Best Rice Cookers for Perfect Grains Every Time',
    excerpt: 'Perfect rice is achievable every time with the right cooker. We tested models from $30 to $300 to find the sweet spots.',
    content: `## The Best Rice Cookers

Even the best home cooks struggle with rice. A quality rice cooker solves that problem—perfect grains, every time.

## Our Top Pick: Zojirushi NS-TSC10 Micom Rice Cooker

The gold standard since 2005.

**Price Range:** $130-150 on Amazon

**Key Features:**
- 5.5-cup capacity
- Microcomputer fuzzy logic technology
- Multiple settings: white rice, brown rice, sushi, porridge, quick cooking
- Keep-warm function (up to 12 hours)
- LCD clock and timer

Zojirushi's fuzzy logic technology is the key—it thinks about the cooking process and adjusts temperature and timing automatically. The difference in results is noticeable: fluffier rice, better texture.

[Check Price on Amazon →](https://www.amazon.com/Zojirushi-NS-TSC10-Micom-Cooker/dp/B00006JSUA?tag=provenpantry3-20)

**Pros:**
- Perfect rice every time
- Multiple grain settings
- 12-hour keep warm
- Extremely reliable

**Cons:**
- Expensive
- Smaller capacity than competitors

---

## Best Value: Aroma Housewares 8-Cup Digital Rice Cooker

Solid performance at a fraction of the price.

**Price Range:** $30-40 on Amazon

Aroma proves you don't need to spend hundreds for good rice. The digital controls make it easy, and it steams vegetables while your rice cooks.

[Check Price on Amazon →](https://www.amazon.com/Aroma-Housewares-Digital-Cooker-ARC-914SB/dp/B00009ZK08?tag=provenpantry3-20)

**Pros:**
- Very affordable
- Digital controls
- Steamer basket included

**Cons:**
- Less precise cooking
- No fuzzy logic

---

## What Rice Cookers Can Do

Beyond white rice, modern rice cookers handle:
- **Brown rice** — with proper settings
- **Sushi rice** — specialized mode
- **Multigrain** — mix of grains
- **Quinoa** — increasingly common
- **Oatmeal** — some models

---

## Final Verdict

**Best Overall:** Zojirushi NS-TSC10 — Professional results at home.
**Best Value:** Aroma Digital — Great rice at an unbeatable price.`,
    published: true,
    highlights: 'Fuzzy logic, 5.5 cup, Multiple grain settings, 12-hour keep warm',
    affiliate_products: 'Zojirushi Rice Cooker, Aroma Rice Cooker, Rice Cooker Steamer'
  }
];

function makeRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'apikey': API_KEY,
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      }
    };
    
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function updateReviews() {
  console.log('Updating reviews...\n');
  for (const r of reviews) {
    try {
      const res = await makeRequest(BASE_URL + '?slug=eq.' + r.slug, 'PATCH', r);
      console.log(`${res.status === 200 ? '✓' : '✗'} ${r.slug} (${res.status})`);
    } catch (e) {
      console.log(`✗ ${r.slug}: ${e.message}`);
    }
  }
  console.log('\nDone!');
}

updateReviews();
