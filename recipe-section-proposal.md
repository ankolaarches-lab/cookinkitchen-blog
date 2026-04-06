# Proven Pantry Recipe Section - Proposal

## The Problem
Recipe sites are cluttered with:
- Too many ads (pop-ups, banners, interstitials)
- Long life stories before recipes
- Massive recipe cards with auto-play videos
- Affiliate links everywhere

## The Solution
A clean, ad-free recipe section on Proven Pantry using Firecrawl to:
1. Scrape recipes from quality sources
2. Extract structured data (ingredients, instructions, cook time)
3. Present in a clean, minimal format

## Firecrawl Capabilities

### For Recipe Scraping:
- **Scrape**: Extract clean markdown from recipe URLs
- **Structured Data**: Can extract JSON with fields like ingredients, instructions, timing
- **Map**: Discover recipe pages on target sites

### Example Recipe Sources to Scrape:
- Serious Eats
- Cook's Illustrated
- Food52
- Bon Appétit (archive)
- NYT Cooking (if accessible)
- Local food blogs with quality recipes

## Proposed Features

### Recipe Page Structure:
- Recipe name + description
- Prep time / Cook time / Total time
- Servings
- Ingredients list (checklist style)
- Step-by-step instructions
- Notes / Tips
- Equipment needed (link to product reviews!)
- Related product recommendations (affiliate)

### SEO Benefits:
- Recipe schema markup (Google loves this)
- Long-tail keywords ("best chocolate chip cookie recipe")
- Internal linking to product reviews

## Implementation Plan

### Phase 1: Setup Firecrawl
- Get API key
- Create recipe-scraper agent

### Phase 2: Source Selection
- Identify 50-100 quality recipe sources
- Test scraping a sample from each

### Phase 3: Data Extraction
- Create recipe schema template
- Extract: title, ingredients, instructions, times, servings, notes
- Normalize data format

### Phase 4: Database Integration
- Add recipes table to Supabase
- Fields: title, slug, description, ingredients (JSON), instructions (JSON), prep_time, cook_time, total_time, servings, source_url, image_url, category, published

### Phase 5: Frontend
- Recipe listing page (/recipes)
- Individual recipe page (/recipe/[slug])
- Search/filter by category, time, ingredient
- Print-friendly view

### Phase 6: Affiliate Integration
- Link ingredients to product reviews
- Amazon grocery affiliate links for ingredients

## Tech Stack Addition:
- Firecrawl API (~500 credits/month = $50-100)
- Supabase table for recipes
- Next.js recipe pages

## Content Template for Recipes (to use in cron):

```markdown
## [Recipe Name]

### TL;DR: [One sentence description]

### Overview
[Brief intro - 50 words]

### Details
| Prep Time | Cook Time | Total Time | Servings |
|-----------|-----------|------------|----------|
| X min | Y min | Z min | N |

### Ingredients
- [Ingredient 1]
- [Ingredient 2]
...

### Instructions
1. [Step 1]
2. [Step 2]
...

### Pro Tips
- [Tip 1]
- [Tip 2]

### Equipment Needed
- [Tool 1] - [Link to review]
- [Tool 2] - [Link to review]

### Source
[Original recipe link]
```

## Next Steps:
1. Get Firecrawl API key
2. Test scraping a few recipe sites
3. Build recipe schema in Supabase
4. Create cron job to add new recipes weekly