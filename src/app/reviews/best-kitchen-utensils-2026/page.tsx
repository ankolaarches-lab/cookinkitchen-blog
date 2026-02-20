import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitchen Utensils 2026 - Complete Buying Guide",
  description: "From spatulas to ladles, we tested the best kitchen utensils for every cooking need. Find your perfect tools for 2026.",
};

const products = [
  {
    name: "Stainless Steel Cooking Utensil Set (6-Piece)",
    price: "$29.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Stainless-Steel-Cooking-Utensil-Set/dp/B0BY8X3G8K?tag=cookinkitchen-20",
    pros: ["Heat resistant", "Dishwasher safe", "Durable stainless steel", "Wooden handle option"],
    cons: ["Can scratch nonstick"],
  },
  {
    name: "OXO Good Grips 3-Piece Cooking Utensil Set",
    price: "$34.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/OXO-Good-Grips-3-Piece-Stainless/dp/B00XMDNV5O?tag=cookinkitchen-20",
    pros: ["Comfortable grip", "Stainless steel", "Dishwasher safe", "Spatula, whisk, tongs"],
    cons: ["Limited pieces"],
  },
  {
    name: "Chef'sStar Silicone Kitchen Utensil Set (10-Piece)",
    price: "$24.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Silicone-Kitchen-Utensil-Set-10-Piece/dp/B09V3KXJPB?tag=cookinkitchen-20",
    pros: ["Complete set", "Heat resistant to 600°F", "Non-slip handles", "Great value"],
    cons: ["Silicone can stain"],
  },
  {
    name: "Di Oro Stainless Steel Ladle (12 inch)",
    price: "$19.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Di-Oro-Stainless-Ladle-12-Inch/dp/B01N4P1WZG?tag=cookinkitchen-20",
    pros: ["Professional quality", "Deep bowl", "Ergonomic handle", "Lifetime warranty"],
    cons: ["Single utensil"],
  },
  {
    name: "StarPack Home Stainless Steel Kitchen Utensil Set",
    price: "$39.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/StarPack-Home-Stainless-Kitchen-Utensil/dp/B00KVPETL6?tag=cookinkitchen-20",
    pros: ["5-piece set", "Modern design", "Hanging holes", "Food safe"],
    cons: ["No storage container"],
  },
];

export default function BestKitchenUtensils2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Kitchen Utensils 2026
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            The essential tools every home cook needs. We tested the top-rated utensils for performance, durability, and value.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Having the right kitchen utensils makes cooking more enjoyable and efficient. 
            Whether you're flipping pancakes, stirring soups, or serving pasta, quality tools make a difference. 
            We tested dozens of options to find the best for every kitchen and budget.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="text-stone-600 text-sm mb-4 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i}>✓ {pro}</li>
                    ))}
                  </ul>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            The <strong>OXO Good Grips 3-Piece Cooking Utensil Set</strong> is our top pick for 2026. 
            The comfortable non-slip grips make extended cooking sessions easy, and the stainless steel 
            construction ensures these tools will last for years. Perfect balance of quality and value.
          </p>
          <a
            href="https://www.amazon.com/OXO-Good-Grips-3-Piece-Stainless/dp/B00XMDNV5O?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Buy on Amazon
          </a>
        </section>

        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">
            ← Back to All Reviews
          </Link>
        </div>
      </main>
    </div>
  );
}
