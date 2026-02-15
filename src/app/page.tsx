import Link from "next/link";

const featuredProducts = [
  {
    name: "Victorinox Chef's Knife",
    price: "$39.99",
    rating: 4.8,
    image: "🔪",
    slug: "best-chef-knives-home-cooks",
    badge: "Best Seller",
  },
  {
    name: "Le Creuset Dutch Oven",
    price: "$369.95",
    rating: 4.9,
    image: "🥄",
    slug: "best-dutch-oven",
    badge: "Premium",
  },
  {
    name: "KitchenAid Stand Mixer",
    price: "$449.99",
    rating: 4.8,
    image: "🥣",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
  },
];

const reviews = [
  {
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives. Here are our top picks for every budget.",
    slug: "best-chef-knives-home-cooks",
    category: "Knives",
    rating: 4.8,
  },
  {
    title: "Dutch Oven Comparison",
    excerpt: "Le Creuset vs Lodge vs AmazonBasics — which is worth your money?",
    slug: "best-dutch-oven",
    category: "Cookware",
    rating: 4.9,
  },
  {
    title: "Stand Mixer Showdown",
    excerpt: "KitchenAid vs Cuisinart — we baked 50 batches to find the winner.",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    category: "Appliances",
    rating: 4.7,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">🍳</div>
            <h1 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">
              CookinKitchen
            </h1>
            <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              We test kitchen tools so you don't have to. Real reviews, real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#products" 
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition shadow-lg"
              >
                Shop Top Rated
              </Link>
              <Link 
                href="#reviews" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Read Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Top Rated Kitchen Tools
          </h2>
          <p className="text-gray-500 mb-8">
            Hand-picked products we use and recommend
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.name} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-100 p-8 text-center text-5xl">{product.image}</div>
                <div className="p-5">
                  {product.badge && (
                    <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      {product.badge}
                    </span>
                  )}
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-500">⭐ {product.rating}</span>
                    <span className="text-gray-400">•</span>
                    <span className="font-bold text-orange-600">{product.price}</span>
                  </div>
                  <Link 
                    href={`/reviews/${product.slug}`}
                    className="block w-full bg-gray-900 text-white text-center py-2 rounded-lg font-medium hover:bg-gray-800 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/buying-guides" className="text-orange-600 font-medium hover:underline">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Latest Reviews
          </h2>
          <p className="text-gray-500 mb-8">
            In-depth testing by our kitchen experts
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Link
                key={review.slug}
                href={`/reviews/${review.slug}`}
                className="block bg-white rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                    {review.category}
                  </span>
                  <span className="text-amber-500 text-sm font-medium">⭐ {review.rating}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{review.excerpt}</p>
                <span className="inline-block mt-4 text-orange-600 text-sm font-medium">
                  Read full review →
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Want us to review a product?
          </h2>
          <p className="text-gray-400 mb-6">
            We're always testing new kitchen tools. Let us know what you'd like to see next.
          </p>
          <a 
            href="mailto:hello@cookinkitchen.online" 
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Request a Review
          </a>
        </div>
      </section>
    </div>
  );
}
