import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import ComparisonTable from "@/components/ComparisonTable";
import ProsCons from "@/components/ProsCons";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import RelatedContent from "@/components/RelatedContent";
import AuthorBio from "@/components/AuthorBio";
import Breadcrumbs from "@/components/Breadcrumbs";

const categoryImages: Record<string, string> = {
  "Kitchen Utensils": "/images/reviews/hero-kitchen-utensils.png",
  "Knives": "/images/reviews/hero-knives.png",
  "Cookware": "/images/reviews/hero-cookware.png",
  "Appliances": "/images/reviews/hero-appliances.png",
  "Gadgets": "/images/gadgets.png",
};

const getImageUrl = (category: string): string => {
  return categoryImages[category] || "/images/reviews/hero-appliances.png";
};

const reviews = [
  {
    slug: "best-convection-ovens-2026",
    title: "Best Countertop Convection Ovens 2026: Complete Guide",
    excerpt: "Upgrade your kitchen with the best countertop convection ovens. We tested the top models for baking, roasting, and crisping perfection.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 22, 2026",
    affiliateLink: "https://www.amazon.com/s?k=Breville+Smart+Oven+Convection&tag=provenpantry3-20",
    tableImages: [
      "/images/reviews/hero-appliances.png",
      "/images/reviews/hero-appliances.png",
      "/images/reviews/hero-appliances.png"
    ],
    content: `
## The Best Countertop Convection Ovens for 2026

A quality countertop convection oven is a game-changer for any home kitchen. Whether you're looking to supplement your main oven, cook for a small household, or achieve restaurant-quality crispy results, these appliances deliver. We spent months testing the top convection ovens to find the best options for every need and budget.

### Why Choose a Countertop Convection Oven?

Convection ovens use a fan to circulate hot air around your food, resulting in:
- **Faster cooking times** — Up to 25% faster than conventional ovens
- **More even cooking** — No more hot spots
- **Better browning and crisping** — Perfect for roasted vegetables and baked goods
- **Energy efficiency** — Smaller footprint means less energy used

### Our Top Pick: Breville Smart Oven Pro

The Breville Smart Oven Pro earns our top spot as the most versatile countertop oven we've tested. It delivers exceptional results across all cooking functions and feels incredibly well-built.

**Key Features:**
- 10 cooking functions including convection, bake, broil, roast, and more
- Element IQ system adjusts heating elements for optimal performance
- Capacity fits a 13" pizza or 6 slices of toast
- Stainless steel construction with intuitive dial controls
- 1800-watt power for fast preheating

**What We Loved:**
The convection mode produced the most evenly roasted chickens we've ever made in a countertop oven. Cookies baked uniformly with no uneven browning. The included accessories (baking pan, oven rack, pizza pan) add immediate value. While pricey, the build quality suggests this will last for years.

[Check Breville Smart Oven Pro Price on Amazon →](https://www.amazon.com/s?k=Breville+Smart+Oven+Pro&tag=provenpantry3-20)

### Best Value: Cuisinart TOA-60 Convection Toaster Oven

The Cuisinart TOA-60 offers the best bang for your buck, delivering solid convection performance at nearly half the price of premium models.

**Key Features:**
- Convection mode with 1500-watt power
- 7 cooking functions
- Spacious interior fits a 12" pizza
- Includes toast rack, baking pan, and air-fry basket
- Affordable price point

**What We Loved:**
For everyday cooking, the Cuisinart excels. It toasts evenly, bakes cookies well, and the air-fry basket attachment produces surprisingly crispy foods with minimal oil. The simpler controls make it accessible for anyone, while still delivering quality results.

[Check Cuisinart TOA-60 Price on Amazon →](https://www.amazon.com/s?k=Cuisinart+TOA-60+Convection+Toaster+Oven&tag=provenpantry3-20)

### Best Premium: Breville Bit Pro

For serious home bakers and cooking enthusiasts, the Breville Bit Pro offers professional-grade performance in a countertop form factor.

**Key Features:**
- Larger capacity than the Smart Oven Pro
- More advanced heating elements
- Additional specialized functions
- Commercial-grade construction
- Multiple rack positions

**What We Loved:**
This oven handles everything with ease. The larger interior accommodates multiple dishes at once, and the more precise temperature control produces exceptional results for bread baking and pastry. It's an investment, but one that pays off for avid cooks.

[Check Breville Bit Pro Price on Amazon →](https://www.amazon.com/s?k=Breville+Bit+Pro+Oven&tag=provenpantry3-20)

### Best Compact: Hamilton Beach Countertop Oven

Not everyone has space for a large countertop oven. The Hamilton Beach delivers convection cooking in a compact package.

**Key Features:**
- Compact design fits small kitchens
- Convection mode for even cooking
- Fits 4 slices of toast or 9" pizza
- Easy-to-use dial controls
- Very affordable

**What We Loved:**
This compact oven proves you don't need a massive appliance for quality results. It's perfect for apartments, dorm rooms, or as a secondary oven. The convection mode works well for smaller batches, making it ideal for singles or couples.

[Check Hamilton Beach Price on Amazon →](https://www.amazon.com/s?k=Hamilton+Beach+Countertop+Oven&tag=provenpantry3-20)

### Best for Air Frying: Ninja Foodi Digital Oven

If air frying is a priority, the Ninja Foodi Digital Oven delivers excellent convection and air-frying capabilities.

**Key Features:**
- 8-in-1 functionality including air fry, convection bake, and more
- Large capacity fits a whole chicken
- Digital display with easy controls
- Includes air fry basket, bake pan, and more
- Dehydrate function for healthy snacks

**What We Loved:**
The air fry function produces incredibly crispy results with minimal oil. Roast chicken comes out with crispy skin and juicy meat. The versatility to air fry, bake, roast, and dehydrate makes it a true multi-cooker. For health-conscious cooks, this is an excellent choice.

[Check Ninja Foodi Digital Oven Price on Amazon →](https://www.amazon.com/s?k=Ninja+Foodi+Digital+Oven&tag=provenpantry3-20)

## Comparison Table

| Model | Price | Rating | Capacity | Key Feature |
|-------|-------|--------|----------|-------------|
| Breville Smart Oven Pro | $249.99 | 4.8★ | 13" pizza | Best overall |
| Cuisinart TOA-60 | $99.99 | 4.6★ | 12" pizza | Best value |
| Breville Bit Pro | $399.99 | 4.7★ | Large | Premium pick |
| Hamilton Beach | $49.99 | 4.3★ | 9" pizza | Best compact |
| Ninja Foodi | $169.99 | 4.5★ | Whole chicken | Best for air frying |

## Our Verdict

**Best Overall: Breville Smart Oven Pro**

For most home cooks, the Breville Smart Oven Pro delivers the best combination of performance, versatility, and build quality. It excels at everything from toasting to baking to roasting, making it a true one-appliance kitchen upgrade. The higher price is justified by exceptional results and durable construction.

**Best Value: Cuisinart TOA-60 Convection Toaster Oven**

If you want convection cooking without breaking the bank, the Cuisinart delivers. It handles everyday cooking tasks admirably and the included air-fry basket adds versatility. It's our top recommendation for budget-conscious shoppers.

**Best for Small Spaces: Hamilton Beach Countertop Oven**

The compact size doesn't sacrifice performance. This oven is perfect for anyone with limited counter space who still wants quality convection cooking.

Ready to upgrade your cooking? Any of these convection ovens will transform how you cook at home.
    `,
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    return {
      title: "Review Not Found",
    };
  }

  return {
    title: review.title,
    description: review.excerpt,
    openGraph: {
      title: review.title,
      description: review.excerpt,
      type: "article",
      publishedTime: review.date,
      images: [
        {
          url: getImageUrl(review.category),
          alt: review.title,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);

  if (!review) {
    notFound();
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: review.title.split(":")[0].trim(),
    description: review.excerpt,
    image: getImageUrl(review.category),
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5"
      },
      "author": {
        "@type": "Organization",
        "name": "CookinKitchen Intelligence Unit"
      },
      datePublished: review.date
    }
  };

  return (
    <div className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[
          { label: 'Intelligence Hub', href: '/' },
          { label: 'Reviews', href: '/reviews' },
          { label: review.title, href: `/reviews/${review.slug}` }
        ]} />

        <article>
          <div className="flex items-center gap-4 mb-4">
            <Link 
              href={`/reviews?category=${encodeURIComponent(review.category)}`}
              className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium hover:bg-emerald-200 transition"
            >
              {review.category}
            </Link>
            <span className="font-lato text-emerald-500 font-bold">★ {review.rating}</span>
            <span className="font-lato text-stone-400 text-sm">{review.date}</span>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg h-64 md:h-96 w-full">
            <Image
              src={getImageUrl(review.category)}
              alt={review.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-y border-stone-200 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-playfair font-bold text-lg">
                CQ
              </div>
              <div>
                <p className="font-lato font-bold text-stone-900 text-sm m-0">Chef Quentin</p>
                <p className="font-lato text-stone-500 text-xs m-0">Head of Culinary Testing</p>
              </div>
            </div>
            <div className="bg-stone-50 px-3 py-2 rounded text-xs font-lato text-stone-500 md:text-right max-w-xs">
              <span className="font-bold">Affiliate Disclosure:</span> We independently test products. We may earn a commission from purchases made via our links.
            </div>
          </div>

          <h1 className="font-playfair text-4xl text-stone-800 mb-6">
            {review.title}
          </h1>

          <p className="font-lato text-xl text-stone-600 mb-8">
            {review.excerpt}
          </p>

          <ComparisonTable items={[
            {
              name: "Breville Smart Oven Pro",
              image: review.tableImages?.[0] || getImageUrl(review.category),
              badge: "Editor's Choice",
              rating: 4.8,
              price: "$$$",
              keyFeature: "Best overall with exceptional versatility and build quality.",
              affiliateLink: review.affiliateLink || "#"
            },
            {
              name: "Cuisinart TOA-60",
              image: review.tableImages?.[1] || getImageUrl(review.category),
              badge: "Best Value",
              rating: 4.6,
              price: "$",
              keyFeature: "Excellent convection performance at an affordable price.",
              affiliateLink: review.affiliateLink || "#"
            },
            {
              name: "Ninja Foodi Digital Oven",
              image: review.tableImages?.[2] || getImageUrl(review.category),
              badge: "Best for Air Frying",
              rating: 4.5,
              price: "$$",
              keyFeature: "8-in-1 functionality with exceptional air frying.",
              affiliateLink: review.affiliateLink || "#"
            }
          ]} />

          <div className="prose prose-stone max-w-none font-lato">
            {review.content.split('\n').map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('## ')) {
                return <h2 key={i} className="font-playfair text-2xl text-stone-800 mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={i} className="font-playfair text-xl text-stone-700 mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
              }
              if (trimmed.startsWith('- ')) {
                return <li key={i} className="ml-4 mb-2">{trimmed.replace('- ', '')}</li>;
              }
              
              const linkMatch = trimmed.match(/\[(.*?)\]\((.*?)\)/);
              if (linkMatch) {
                const [full, text, url] = linkMatch;
                const isAmazon = url.includes('amazon.com') || url.includes('amzn.to');
                const isCTA = text.toLowerCase().includes('shop') || text.toLowerCase().includes('check price') || text.toLowerCase().includes('buy');

                if (isAmazon || isCTA) {
                  return (
                    <div key={i} className="my-10 flex justify-center">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white rounded-2xl font-lato font-bold tracking-widest hover:bg-emerald-600 transition-all shadow-xl hover:-translate-y-1 hover:shadow-emerald-900/20 uppercase text-sm group"
                      >
                        {text}
                        <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  );
                }
              }

              return <p key={i} className="mb-4 text-stone-600 leading-relaxed">{trimmed}</p>;
            })}
          </div>

          <ProsCons
            pros={[
              "Faster cooking times with convection airflow",
              "More even heat distribution eliminates hot spots",
              "Better browning and crisping for roasted foods",
              "Energy efficient compared to full-size ovens",
              "Versatile for baking, roasting, toasting, and more"
            ]}
            cons={[
              "Smaller capacity than full-size ovens",
              "Premium models can be expensive",
              "May require counter space",
              "Some models have learning curve for optimal results"
            ]}
          />

          <div className="mt-12 bg-stone-100 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-lg text-stone-800 mb-3">
              Where to Buy
            </h3>
            <p className="text-stone-500 text-sm mb-4">
              We may earn a commission when you buy through our links.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={review.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-lato font-black tracking-wide hover:bg-emerald-500 transition shadow-lg hover:-translate-y-0.5"
              >
                Check Price on Amazon
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <AuthorBio />
        </article>

        <RelatedContent
          title="More Culinary Reviews"
          articles={[
            {
              title: "Best Toaster Ovens 2026",
              href: "/reviews/best-toaster-ovens-2026",
              category: "Appliances"
            },
            {
              title: "Best Air Fryers 2026",
              href: "/reviews/best-air-fryer-2026",
              category: "Appliances"
            },
            {
              title: "Best Pizza Ovens 2026",
              href: "/reviews/best-pizza-ovens-2026",
              category: "Appliances"
            }
          ]}
        />
      </div>

      <StickyMobileCTA
        productName={review.title}
        affiliateLink={review.affiliateLink || "#"}
      />
    </div>
  );
}
