#!/usr/bin/env python3
"""
Script to insert remaining blog posts into Supabase
"""

import requests

SUPABASE_URL = "https://dancjwbxcycncrkdiyug.supabase.co"
SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmNqd2J4Y3ljbmNya2RpeXVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTU1OTk4MCwiZXhwIjoyMDg3MTM1OTgwfQ.aJI1r5bhhgV4N3bzyYS0keBGoLmk0PAbfA3PqtHD-dU"

headers = {
    "apikey": SUPABASE_SERVICE_KEY,
    "Authorization": f"Bearer {SUPABASE_SERVICE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

def insert_blog_post(post_data):
    url = f"{SUPABASE_URL}/rest/v1/blog_posts"
    response = requests.post(url, headers=headers, json=post_data)
    return response

# Week 3: Appliances & Techniques (Mar 1-7)
blog_posts = [
    {
        "title": "Air Fryer vs. Convection Oven: What's Actually Different",
        "slug": "air-fryer-vs-convection-oven",
        "excerpt": "Everyone's confused about this. Air fryers are just convection ovens in a smaller package—or are they? Here's the real difference.",
        "content": """I've worked with both extensively. Here's what actually distinguishes them.

## The Short Answer

An air fryer IS a small convection oven. But that's an oversimplification.

## How They're Actually Different

### Air Fryer
- Small, compact
- Rapid air movement (faster cooking)
- Small batches
- Quick preheat
- Great for frozen foods, quick snacks

### Convection Oven
- Larger capacity
- Can function as regular oven
- More precise temperature control
- Better for big meals
- More versatile

## When to Use Each

### Air Fryer For:
- Frozen fries (crisper than oven)
- Chicken wings
- Quick weeknight meals
- Reheating leftovers (stays crispy)

### Convection Oven For:
- Holiday meals
- Baked goods
- Roasting large pieces of meat
- Everything else

## The Verdict

If you already have a convection oven, an air fryer is redundant. If you have limited counter space and need a secondary cooking method, it's useful.

For the best results, I recommend a large-capacity air fryer like the [Ninja Foodi 8-Quart](https://www.amazon.com/s?k=Ninja+Foodi+air+fryer+8+quart&tag=provenpantry3-20) or a [cosori air fryer](https://www.amazon.com/s?k=Cosori+air+fryer+5.8+quart&tag=provenpantry3-20).""",
        "category": "Appliances",
        "date": "2026-03-01",
        "read_time": "5 min read",
        "image_url": "",
        "published": True
    },
    {
        "title": "Mastering the Instant Pot: A Chef's Workflow for Weeknight Dinners",
        "slug": "mastering-instant-pot-weeknight-dinner",
        "excerpt": "The Instant Pot confused me for years. Now it's my secret weapon for fast, flavorful weeknight dinners. Here's my exact workflow.",
        "content": """I was skeptical of the Instant Pot. Then I started working with one daily. Now I use it 3-4 times a week. Here's how to make it work for you.

## My Weeknight Instant Pot Workflow

### 5:00 PM - Throw Ingredients In
- proteins + liquid + aromatics
- Set to pressure cook

### 5:30 PM - Dinner is Ready
- Natural release 5 min
- Quick release remaining

### 5:35 PM - Finish
- Add fresh herbs
- Adjust seasoning
- Serve

## What Actually Works Well

### 1. Tough Cuts
Chuck roast, pork shoulder, chicken thighs. These become tender in 60-90 minutes.

### 2. Dried Beans
No soaking needed. 30-40 minutes for cooked beans.

### 3. Stocks
In 2 hours, you get rich, gelatinous stock.

### 4. Rice
Perfect every time. One cup rice + one cup water = done in 20 minutes.

## What Doesn't Work

- Delicate proteins (fish, shrimp)
- Eggs (rubbery texture)
- Fresh vegetables (better on stovetop)
- Anything that needs browning (use sauté function first)

## Tips That Make It Work

1. **Use the sauté function first** - Searing meat before pressure cooking adds enormous flavor.

2. **Don't fill past 2/3** - Things expand, especially beans.

3. **Natural release = juicier** - For meat, let it sit 10 minutes before releasing.

4. **Get an instant pot accessories kit** - Things like [spring form pan](https://www.amazon.com/s?k=instant+pot+spring+form+pan&tag=provenpantry3-20) and [extra sealing rings](https://www.amazon.com/s?k=instant+pot+sealing+rings&tag=provenpantry3-20) make it much more versatile.

My pick: [Instant Pot Duo 7-in-1](https://www.amazon.com/s?k=Instant+Pot+Duo+6+quart&tag=provenpantry3-20) - The standard for a reason.""",
        "category": "Appliances",
        "date": "2026-03-02",
        "read_time": "6 min read",
        "image_url": "",
        "published": True
    },
    {
        "title": "Sous Vide at Home: How to Get Restaurant Results Every Time",
        "slug": "sous-vide-at-home-restaurant-results",
        "excerpt": "Restaurant kitchens use sous vide for perfect consistency. Now you can do it at home. Here's how to get started without breaking the bank.",
        "content": """I used to think sous vide was only for professional kitchens. Then I bought an immersion circulator. Now I cook this way 2-3 times a week.

## What Sous Vide Actually Is

You seal food in a bag, submerge it in temperature-controlled water, and cook for hours. The result? Perfect doneness, edge to edge.

## The Setup (On a Budget)

### The Circulator
You don't need a $500 sous vide machine. A $100 immersion circulator works great.

### Container
Any pot or container that holds water. I use a [Cambro food pan](https://www.amazon.com/s?k=cambro+food+pan+12+quart&tag=provenpantry3-20).

### Bags
Vacuum sealer is ideal, but [Ziploc freezer bags](https://www.amazon.com/s?k=ziploc+freezer+bags+quart&tag=provenpantry3-20) work if you use the water displacement method.

## What Works Best

### 1. Steak
Cook a ribeye at 130°F for 2 hours. Sear 30 seconds per side. It's perfect.

### 2. Chicken Breast
135°F for 1.5 hours. No more dry chicken.

### 3. Pork Tenderloin
140°F for 2 hours. Slice and sear.

### 4. Eggs
63°C for 45 minutes. The perfect jammy yolk.

## My Recommended Setup

- [Anova Culinary Sous Vide](https://www.amazon.com/s?k=Anova+Sous+Vide+Immersion+Circulator&tag=provenpantry3-20) - The best value
- [FoodSaver Vacuum Sealer](https://www.amazon.com/s?k=FoodSaver+Vacuum+Sealer&tag=provenpantry3-20) - Worth the investment

## The Bottom Line

Sous vide isn't about fancy cooking—it's about consistent results. No more overcooked edges, no more guessing. It's changed how I cook.""",
        "category": "Appliances",
        "date": "2026-03-03",
        "read_time": "6 min read",
        "image_url": "",
        "published": True
    },
    {
        "title": "Why Your Blender Never Gets Smooth (And How to Fix It)",
        "slug": "blender-never-gets-smooth-fix",
        "excerpt": "Lumpy smoothies, grainy purées, chunks in your soup. It's usually not the blender—it's how you're using it. Here's how to get silky results.",
        "content": """I've made thousands of smoothies, soups, and purées. The secret isn't the expensive blender—it's the technique.

## The Common Mistakes

### 1. Too Much at Once
Blenders need room to circulate. Fill it past the max line and you'll get chunks.

### 2. Cold Ingredients
Ice makes things crunchy, not smooth. Use frozen fruit that's been slightly thawed.

### 3. Wrong Order
Adding dry on bottom, liquid on top? That's backwards.

## The Correct Method

### Step 1: Add Liquid First
Water, milk, juice—whatever you're using. Put it in first.

### 2: Add Soft Items Next
Leafy greens, fresh fruit, anything soft.

### 3: Add Hard Items Last
Frozen fruit, ice, protein powder. Put these near the blade.

### 4: The Pulse Technique
Don't just blend continuously. Pulse 5-6 times, then run continuously for 30 seconds.

## When to Add What

### Smoothies:
1. Liquid (30-60 seconds)
2. Greens (blend)
3. Soft fruits
4. Frozen items (blend until smooth)

### Hot Soups:
Blend in batches. Leave the center hole open to release steam.

### Nut Butters:
This requires patience. Blend continuously for 3-5 minutes, scraping sides every minute.

## The Blender Recommendation

For most home cooks, the [Vitamix 5200](https://www.amazon.com/s?k=Vitamix+5200+Blender&tag=provenpantry3-20) is the gold standard. Yes, it's expensive. But it will last 20 years and makes silky smooth everything.

Budget option: [Ninja Professional 1000W](https://www.amazon.com/s?k=Ninja+Professional+Blender+1000W&tag=provenpantry3-20) - Good performance for the price.""",
        "category": "Appliances",
        "date": "2026-03-04",
        "read_time": "5 min read",
        "image_url": "",
        "published": True
    },
    {
        "title": "Food Processor vs. Immersion Blender: Which Do You Actually Need?",
        "slug": "food-processor-vs-immersion-blender",
        "excerpt": "Both do similar things, but one is likely better for your needs. Here's how to figure out which you actually need.",
        "content": """I own both. I use both for different things. Here's my honest assessment of each.

## Food Processor

### Best For:
- Large batches
- Dough (pie crust, biscuit)
- Shredding cheese
- Chopping many vegetables at once
- Making nut butters

### Not Great For:
- Smooth purées (leaves texture)
- Hot liquids (dangerous)
- Single servings

## Immersion Blender

### Best For:
- Smooth soups (right in the pot)
- Small batches
- Hot liquids (safe)
- Single smoothies
- Emulsifying sauces

### Not Great For:
- Dough
- Large quantities
- Shredding

## My Recommendation by Use Case

### If You Bake a Lot:
Get a food processor. Making pie crust and biscuit dough is so much easier.

### If You Make a Lot of Soup:
Get an immersion blender. You can blend right in the pot.

### If You Do Both:
Get both. They're not redundant—they serve different purposes.

## My Specific Picks

### Food Processor:
[Cuisinart 14-Cup Food Processor](https://www.amazon.com/s?k=Cuisinart+14+Cup+Food+Processor&tag=provenpantry3-20) - The standard for home kitchens.

### Immersion Blender:
[Braun MultiQuick Hand Blender](https://www.amazon.com/s?k=Braun+Immersion+Blender&tag=provenpantry3-20) - Powerful, comfortable to hold.

## The Bottom Line

If you can only have one and you cook mostly soups and smoothies, the immersion blender is more versatile. If you bake or cook for groups, the food processor is more useful.""",
        "category": "Appliances",
        "date": "2026-03-05",
        "read_time": "5 min read",
        "image_url": "",
        "published": True
    },
    {
        "title": "The Right Way to Use a Mandoline (Without Losing Fingers)",
        "slug": "right-way-to-use-mandoline",
        "excerpt": "A mandoline makes perfect slices. It also makes perfect hospital visits if used wrong. Here's how to use it safely and effectively.",
        "content": """I got my first mandoline ten years ago. A month later, I needed stitches. Now I use one weekly with zero incidents. Here's what I learned.

## The Safety Basics

### 1. Always Use the Hand Guard
The thing that holds the food. Yes, it feels awkward. Use it anyway.

### 2. Never Push with Your Fingers
Use the paddle that comes with it. Or a wooden spoon. Never your fingers.

### 3. Keep Your Other Hand Behind You
Don't hold the food with both hands. One holds, one pushes.

### 4. Clean Carefully
Never wipe the blade with a cloth. Use a brush.

## The Technique

### 1. Set Your Thickness
Adjust before you start. Not during.

### 2. Angle the Food
Hold at 45 degrees for more control.

### 3. Slow and Steady
Fast isn't better. Let the blade do the work.

### 4. Finish with the Root End
The last bit has the least hold. Be careful.

## What You Can Do With It

- **Perfect fries** (uniform cooking)
- **Chips** (paper-thin)
- **Salads** (consistency matters)
- **Rösti** (shredded, not chopped)
- **Lattice pies** (beautiful topping)

## My Mandoline Recommendation

For home use, the [OXO Good Grips Mandoline](https://www.amazon.com/s?k=OXO+Mandoline+Slicer&tag=provenpantry3-20) offers the best value. It's safe, adjustable, and reasonably priced.

Pro option: [Swissmar V- slicer](https://www.amazon.com/s?k=Swissmar+Mandoline&tag=provenpantry3-20) - The professional choice, but requires more skill.

## The Bottom Line

A mandoline is the fastest way to get restaurant-quality slices at home. Just respect the blade.""",
        "category": "Appliances",
        "date": "2026-03-06",
        "read_time": "5 min read",
        "image_url": "",
        "published": True
    },
    {
        "title": "Stand Mixer Tips From a Pro: What They Don't Tell You",
        "slug": "stand-mixer-tips-from-pro",
        "excerpt": "You've had your stand mixer for years but you're still doing it wrong. Here are the tips I wish someone told me when I started.",
        "content": """I use my stand mixer at least 5 times a week. Over 15 years, I've learned things that aren't in any manual.

## The Unwritten Rules

### 1. Room Temperature Matters
Cold butter won't cream properly. Take it out 30 minutes early.

### 2. Don't Overmix
Once your dough or batter is combined, STOP. Overmixing makes tough cookies and dense cakes.

### 3. Scrape the Bowl
A lot. Every few seconds during mixing. The sides, the bottom, the beater itself.

### 4. Use the Right Speed
- 1-2: Slow mixing, kneading
- 4-6: Creaming, beating
- 8-10: Whipping (with whisk attachment)

## Attachments Explained

### The Flat Beater
For everything that isn't fluffy. Cookie dough, cake batter, frosting.

### The Wire Whisk
For anything with air. Whipped cream, meringue, egg whites.

### The Dough Hook
For bread dough. It's okay but I still prefer kneading by hand.

## Tips They Don't Tell You

### Freeze Your Bowl
For whipped cream or meringue, a cold bowl helps. 15 minutes in the freezer.

### Tap, Don't Drop
When adding flour, tap the bowl on the counter 2-3 times to settle it. Then mix.

### Add Ingredients Slowly
For cookies, add mix-ins at the end on low speed. Don't blast them at full speed.

### Make Bread
The dough hook actually works well. Just don't expect it to replace hand kneading.

## My Stand Mixer Recommendation

[Kitchenaid Professional 5qt](https://www.amazon.com/s?k=Kitchenaid+Stand+Mixer+Professional+5+qt&tag=provenpantry3-20) - The professional standard, reliable as hell.

Budget: [Kitchenaid Classic Plus](https://www.amazon.com/s?k=Kitchenaid+Classic+Stand+Mixer&tag=provenpantry3-20) - Still excellent, smaller capacity.

## Bottom Line

A stand mixer is an investment that pays off in consistent baking. Learn these tips and you'll get the most out of yours.""",
        "category": "Appliances",
        "date": "2026-03-07",
        "read_time": "6 min read",
        "image_url": "",
        "published": True
    },
]

print(f"Inserting {len(blog_posts)} posts...")
success = 0
for post in blog_posts:
    r = insert_blog_post(post)
    if r.status_code in [200, 201]:
        success += 1
        print(f"✓ {post['title'][:50]}...")
    else:
        print(f"✗ {post.get('title', 'unknown')[:50]}: {r.status_code}")
print(f"\nTotal: {success}/{len(blog_posts)}")
