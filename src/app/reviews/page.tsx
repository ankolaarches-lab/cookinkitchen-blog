"use client";

import Link from "next/link";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    slug: "best-chef-knives-home-cooks",
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
    category: "Knives",
    rating: 4.8,
    date: "Feb 10, 2026",
    image: "🔪",
  },
  {
    id: 2,
    slug: "cast-iron-vs-carbon-steel",
    title: "Cast Iron vs. Carbon Steel: Which is Right?",
    excerpt: "A deep dive into two kitchen essentials. We compare heat retention, maintenance, and cooking results.",
    category: "Cookware",
    rating: 4.5,
    date: "Feb 8, 2026",
    image: "🍳",
  },
  {
    id: 3,
    slug: "instant-pot-vs-ninja-foodi",
    title: "Instant Pot Duo vs. Ninja Foodi",
    excerpt: "Two popular multicookers face off. Which one deserves a spot on your countertop?",
    category: "Appliances",
    rating: 4.3,
    date: "Feb 5, 2026",
    image: "🫕",
  },
  {
    id: 4,
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    title: "Stand Mixer Showdown: KitchenAid vs. Cuisinart",
    excerpt: "From dough to buttercream, we put these iconic mixers to the test.",
    category: "Appliances",
    rating: 4.7,
    date: "Feb 2, 2026",
    image: "🥣",
  },
  {
    id: 5,
    slug: "best-nonstick-pan-2026",
    title: "Best Non-Stick Pan for Every Budget",
    excerpt: "We cooked 200+ eggs to find the best non-stick pans. From budget-friendly to premium.",
    category: "Cookware",
    rating: 4.6,
    date: "Jan 28, 2026",
    image: "🥘",
  },
  {
    id: 6,
    slug: "best-dutch-oven",
    title: "Best Dutch Oven: Le Creuset vs. Lodge vs. Amazon",
    excerpt: "Braising, bread baking, and soup — we tested the top Dutch ovens to find the best value.",
    category: "Cookware",
    rating: 4.9,
    date: "Jan 25, 2026",
    image: "🥄",
  },
  {
    id: 7,
    slug: "best-kitchen-scale",
    title: "Best Kitchen Scales for Baking & Meal Prep",
    excerpt: "Precise measurements matter. We tested 12 kitchen scales for accuracy, design, and durability.",
    category: "Gadgets",
    rating: 4.4,
    date: "Jan 20, 2026",
    image: "⚖️",
  },
  {
    id: 8,
    slug: "best-cutting-board",
    title: "Best Cutting Boards: Wood vs. Plastic vs. Glass",
    excerpt: "Your knives deserve the right board. We tested the most popular cutting boards.",
    category: "Gadgets",
    rating: 4.5,
    date: "Jan 15, 2026",
    image: "🪵",
  },
  {
    id: 9,
    slug: "best-santoku-knife",
    title: "Best Santoku Knife: Japanese Precision",
    excerpt: "The santoku is a versatile Japanese knife. We tested the top options for home cooks.",
    category: "Knives",
    rating: 4.7,
    date: "Jan 12, 2026",
    image: "🔪",
  },
  {
    id: 10,
    slug: "best-blender-2026",
    title: "Best Blender: Vitamix vs. Ninja vs. Oster",
    excerpt: "Smoothies, soups, and frozen drinks — we tested the best blenders for every budget.",
    category: "Appliances",
    rating: 4.5,
    date: "Jan 10, 2026",
    image: "🫗",
  },
  {
    id: 11,
    slug: "best-coffee-maker",
    title: "Best Coffee Maker: Drip vs. Pour Over vs. French Press",
    excerpt: "Morning coffee matters. We tested 15 coffee makers to find the perfect brew.",
    category: "Appliances",
    rating: 4.6,
    date: "Jan 8, 2026",
    image: "☕",
  },
  {
    id: 12,
    slug: "best-air-fryer",
    title: "Best Air Fryer: Ninja vs. Philips vs. Cosori",
    excerpt: "Crispy food with less oil. We tested the top air fryers for performance and ease of use.",
    category: "Appliances",
    rating: 4.4,
    date: "Jan 5, 2026",
    image: "🍟",
  },
  {
    id: 13,
    slug: "best-knife-sharpener",
    title: "Best Knife Sharpener: Chef'sChoice vs. Work Sharp",
    excerpt: "A dull knife is dangerous. We tested sharpeners to keep your blades razor-sharp.",
    category: "Gadgets",
    rating: 4.3,
    date: "Jan 3, 2026",
    image: "⚡",
  },
  {
    id: 14,
    slug: "best-mesh-strainer",
    title: "Best Kitchen Strainer & Colander",
    excerpt: "From pasta to flour, we tested the best strainers for everyday kitchen use.",
    category: "Gadgets",
    rating: 4.2,
    date: "Jan 1, 2026",
    image: "🥣",
  },
  {
    id: 15,
    slug: "best-measuring-cups",
    title: "Best Measuring Cups: Liquid vs. Dry",
    excerpt: "Precise measurements lead to better cooking. We tested the top measuring cup sets.",
    category: "Gadgets",
    rating: 4.4,
    date: "Dec 28, 2025",
    image: "🧪",
  },
  {
    id: 16,
    slug: "best-spatula-set",
    title: "Best Spatula Set: Silicone vs. Wood",
    excerpt: "Every kitchen needs reliable spatulas. We tested the best options for cooking and baking.",
    category: "Gadgets",
    rating: 4.5,
    date: "Dec 25, 2025",
    image: "🥄",
  },
  {
    id: 17,
    slug: "best-frying-pan",
    title: "Best Frying Pan: Stainless Steel Showdown",
    excerpt: "From searing steak to scrambled eggs, we tested the best stainless steel pans.",
    category: "Cookware",
    rating: 4.7,
    date: "Dec 22, 2025",
    image: "🍳",
  },
  {
    id: 18,
    slug: "best-electric-kettle",
    title: "Best Electric Kettle: Bonavita vs. Fellow vs. Hamilton Beach",
    excerpt: "Boil water faster and smarter. We tested the best electric kettles for tea and coffee.",
    category: "Appliances",
    rating: 4.5,
    date: "Dec 20, 2025",
    image: "🫖",
  },
];

const categories = ["All", "Knives", "Cookware", "Appliances", "Gadgets"];

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredReviews = activeCategory === "All" 
    ? reviews 
    : reviews.filter(r => r.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl text-stone-800 mb-4">
            Kitchen Tool Reviews
          </h1>
          <p className="font-lato text-stone-600 max-w-2xl mx-auto">
            Honest, in-depth reviews to help you make the best choices for your kitchen. 
            We test every product ourselves so you can cook with confidence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-lato text-sm transition ${
                activeCategory === cat
                  ? "bg-orange-600 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredReviews.map((review) => (
            <article 
              key={review.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-lato">
                    {review.category}
                  </span>
                  <span className="font-lato text-amber-600 font-bold">
                    ⭐ {review.rating}
                  </span>
                </div>
                <div className="text-4xl mb-4">{review.image}</div>
                <h2 className="font-playfair text-xl text-stone-800 mb-2">
                  {review.title}
                </h2>
                <p className="font-lato text-stone-600 mb-4">
                  {review.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-lato text-sm text-stone-500">
                    {review.date}
                  </span>
                  <Link href={`/reviews/${review.slug}`} className="text-orange-600 font-lato font-bold hover:text-orange-700 transition">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <p className="text-center text-stone-500 font-lato py-8">
            No reviews in this category yet.
          </p>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-orange-50 rounded-2xl p-8 text-center">
          {subscribed ? (
            <div className="py-4">
              <h3 className="font-playfair text-2xl text-green-700 mb-2">
                🎉 You're in!
              </h3>
              <p className="font-lato text-stone-600">
                Thanks for subscribing. Check your inbox for updates.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-playfair text-2xl text-stone-800 mb-4">
                Want New Reviews First?
              </h3>
              <p className="font-lato text-stone-600 mb-6">
                Subscribe to get the latest kitchen gear reviews delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 justify-center">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  required
                  className="px-4 py-2 rounded-lg border border-stone-300 font-lato w-64"
                />
                <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-lg font-lato font-bold hover:bg-orange-700 transition">
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
