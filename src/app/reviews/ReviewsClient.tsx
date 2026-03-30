"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RefinedCard from "@/components/RefinedCard";
import { Review, formatDate } from "@/lib/supabase";

const categoryImages: Record<string, string> = {
  "Kitchen Utensils": "/images/reviews/hero-kitchen-utensils.png",
  "Wooden Utensils": "/images/reviews/hero-kitchen-utensils.png",
  "Knives": "/images/reviews/hero-knives.png",
  "Cookware": "/images/reviews/hero-cookware.png",
  "Appliances": "/images/reviews/hero-appliances.png",
  "Air Fryer Toaster Ovens": "/images/reviews/hero-appliances.png",
  "Gadgets": "/images/gadgets.png",
  "Cutting Boards": "/images/reviews/hero-cutting-boards.png",
  "Baking Sheets": "/images/reviews/hero-baking.png",
  "Food Storage": "/images/reviews/hero-food-storage.png",
  "Baking Supplies": "/images/reviews/hero-baking.png",
};

function getImageUrl(review: Review): string {
  if (review.image_url) return review.image_url;
  return categoryImages[review.category] || "/images/reviews/hero-kitchen-utensils.png";
}

interface ReviewsClientProps {
  reviews: Review[];
}

export default function ReviewsClient({ reviews }: ReviewsClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") || "All";

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const categories = ["All", ...Array.from(new Set(reviews.map(r => r.category))).sort()];

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`/reviews?${params.toString()}`, { scroll: false });
  };

  const filteredReviews = activeCategory === "All"
    ? reviews
    : reviews.filter(r => r.category === activeCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-4 block">Intelligence Reports</span>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Laboratory Analysis
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Every instrument we review undergoes rigorous field testing and data analysis.
            Access our latest intelligence reports below.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${activeCategory === cat
                ? "bg-gray-900 border-gray-900 text-white shadow-xl shadow-gray-900/10"
                : "bg-white border-gray-100 text-gray-400 hover:border-emerald-200 hover:text-emerald-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredReviews.map((review) => (
            <RefinedCard
              key={review.id}
              title={review.title}
              excerpt={review.excerpt}
              image={getImageUrl(review)}
              category={review.category}
              rating={review.rating}
              slug={review.slug}
              date={formatDate(review.date)}
            />
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-40 glass-premium rounded-3xl">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
              [ NO INTEL FOUND IN THIS SECTOR ]
            </p>
          </div>
        )}

        <section className="py-20 bg-stone-100 mt-20 rounded-3xl">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl font-black text-stone-800 mb-8">Popular Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="/blog/air-fryer-recipes-tips" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🍟</span>
                <h3 className="font-bold text-stone-800 mt-3">Air Fryer Recipes</h3>
                <p className="text-sm text-stone-500 mt-2">Master your air fryer</p>
              </a>
              <a href="/blog/essential-knife-skills-guide" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🔪</span>
                <h3 className="font-bold text-stone-800 mt-3">Knife Skills 101</h3>
                <p className="text-sm text-stone-500 mt-2">Essential cutting techniques</p>
              </a>
              <a href="/blog/cast-iron-care-seasoning-guide" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🍳</span>
                <h3 className="font-bold text-stone-800 mt-3">Cast Iron Care</h3>
                <p className="text-sm text-stone-500 mt-2">Season and maintain</p>
              </a>
              <a href="/blog/instant-pot-recipes-beginners" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🥘</span>
                <h3 className="font-bold text-stone-800 mt-3">Instant Pot Guide</h3>
                <p className="text-sm text-stone-500 mt-2">Get started with pressure cooking</p>
              </a>
            </div>
          </div>
        </section>

        <div className="mt-40 glass-premium bg-emerald-600 text-white rounded-[3rem] p-16 text-center shadow-2xl shadow-emerald-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <span className="text-9xl font-black">@</span>
          </div>

          {subscribed ? (
            <div className="py-8">
              <h3 className="text-4xl font-black mb-4">PERSONNEL AUTHENTICATED</h3>
              <p className="text-emerald-100 font-light text-xl">
                Intelligence link established. Your first briefing is in transit.
              </p>
            </div>
          ) : (
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-200 mb-6 block">
                Stay Ahead of the Protocol
              </span>
              <h3 className="font-serif text-4xl md:text-6xl font-black mb-6">
                Establish Connection.
              </h3>
              <p className="text-emerald-100 mb-12 max-w-lg mx-auto text-lg font-light">
                Join our elite list for automated gear updates and culinary intelligence alerts.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENCRYPTED_EMAIL@SECURE.COM"
                  required
                  disabled={loading}
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-bold tracking-widest outline-none focus:bg-white/20 transition disabled:opacity-50"
                />
                <button type="submit" disabled={loading} className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all duration-300 disabled:opacity-50 hover:scale-[1.02]">
                  {loading ? 'SYNCING...' : 'INITIATE SYNC'}
                </button>
              </form>
              {error && <p className="text-red-200 mt-4 text-sm">{error}</p>}
              <p className="text-[10px] text-emerald-200/60 mt-8 font-bold uppercase tracking-widest">
                Protocol: Privacy Guaranteed // Unsubscribe any time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
