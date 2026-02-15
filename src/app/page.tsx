import Link from "next/link";

const recentReviews = [
  {
    title: "Best Chef's Knives for Home Cooks",
    category: "Knives",
    slug: "best-chef-knives-home-cooks",
    image: "🔪",
  },
  {
    title: "Dutch Oven Comparison",
    category: "Cookware",
    slug: "best-dutch-oven",
    image: "🥄",
  },
  {
    title: "Stand Mixer Showdown",
    category: "Appliances",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    image: "🥣",
  },
  {
    title: "Non-Stick Pan Guide",
    category: "Cookware",
    slug: "best-nonstick-pan-2026",
    image: "🥘",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Simple Hero */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            CookinKitchen 🍳
          </h1>
          <p className="font-lato text-lg text-orange-100 mb-6">
            Honest reviews of kitchen tools that actually work.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/reviews" 
              className="bg-white text-orange-700 px-6 py-2 rounded-full font-lato font-bold hover:bg-orange-50 transition"
            >
              Read Reviews
            </Link>
            <Link 
              href="/buying-guides" 
              className="border-2 border-white text-white px-6 py-2 rounded-full font-lato font-bold hover:bg-white/10 transition"
            >
              Buying Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <h2 className="font-playfair text-2xl text-stone-800 mb-6">
          Recent Reviews
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentReviews.map((review) => (
            <Link
              key={review.slug}
              href={`/reviews/${review.slug}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4"
            >
              <div className="text-3xl mb-2">{review.image}</div>
              <h3 className="font-playfair text-base text-stone-800 mb-1">
                {review.title}
              </h3>
              <span className="text-xs text-stone-500 font-lato">{review.category}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/reviews" className="bg-white px-4 py-2 rounded-full text-sm font-lato text-stone-600 hover:shadow-md transition">
              🔪 Knives
            </Link>
            <Link href="/reviews" className="bg-white px-4 py-2 rounded-full text-sm font-lato text-stone-600 hover:shadow-md transition">
              🍳 Cookware
            </Link>
            <Link href="/reviews" className="bg-white px-4 py-2 rounded-full text-sm font-lato text-stone-600 hover:shadow-md transition">
              🧰 Appliances
            </Link>
            <Link href="/reviews" className="bg-white px-4 py-2 rounded-full text-sm font-lato text-stone-600 hover:shadow-md transition">
              ⚡ Gadgets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
