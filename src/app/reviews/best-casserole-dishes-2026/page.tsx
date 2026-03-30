import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Casserole Dishes 2026 - Complete Buying Guide",
  description: "Find the perfect casserole dish for your kitchen. We tested ceramic, glass, cast iron, and enamel options for baking, serving, and meal prep.",
  openGraph: {
    title: "Best Casserole Dishes 2026 - Complete Buying Guide",
    description: "Find the perfect casserole dish. We tested ceramic, glass, cast iron, and enamel options for baking and serving.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/casserole-dishes-2026.jpg"],
  },
};

const products = [
  {
    name: "Le Creuset Signature Enameled Cast Iron Round Casserole",
    price: "$419.95",
    rating: 4.9,
    link: `https://www.amazon.com/s?k=Le+Creuset+Signature+Round+Casserole&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Exceptional heat retention", "Beautiful design", "Lifetime warranty", "Stovetop to oven"],
    cons: ["Premium price", "Heavy weight"],
  },
  {
    name: "Cuisinart 7-Piece Chef's Casserole Set",
    price: "$89.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Cuisinart+Chef+Casserole+Set&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Great value set", "Multiple sizes", "Ceramic non-stick", "Dishwasher safe"],
    cons: ["Not as durable as premium"],
  },
  {
    name: "Staub Enameled Cast Iron Cocotte",
    price: "$349.95",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Staub+Cocotte&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Excellent browning", "Self-basting lid", "Durable enamel", "Beautiful colors"],
    cons: ["No helper handles", "Pricey"],
  },
  {
    name: "Pyrex Glass 3-Quart Casserole with Lid",
    price: "$24.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Pyrex+3+Quart+Casserole&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Oversized handles", "See-through lid", "Microwave safe"],
    cons: ["Not for stovetop", "Can stain"],
  },
  {
    name: "Lodge Enameled Cast Iron Dutch Oven",
    price: "$149.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Lodge+Enamel+Dutch+Oven&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Great value", "Versatile", "Durable", "Made in USA"],
    cons: ["Less refined finish", "Heavier than competitors"],
  },
  {
    name: "Caraway Ceramic Casserole Dish Set",
    price: "$279.00",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Caraway+Casserole+Set&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Stunning design", "Non-toxic ceramic", "Stackable storage", "Oven safe to 550°F"],
    cons: ["Newer brand", "Limited track record"],
  },
];

export default function BestCasseroleDishes2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 19, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/casserole-dish.jpg" 
              alt="Best Casserole Dishes 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Casserole Dishes 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From comforting lasagna to bubbling braises, find the perfect casserole dish for every recipe.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why a Good Casserole Dish Matters</h2>
            <p className="mb-4 text-stone-600">A quality casserole dish is the workhorse of any kitchen. Whether you're baking a classic lasagna, braising short ribs, or preparing a hearty vegetable gratin, the right dish can make all the difference in how your food cooks and presents.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Material</strong> - Cast iron retains heat beautifully, ceramic is versatile, glass lets you see inside</li>
              <li>• <strong>Size</strong> - Consider your typical serving sizes (2-4 quart for small families, 5-7 quart for bigger)</li>
              <li>• <strong>Versatility</strong> - Can it go from stovetop to oven? Is it microwave safe?</li>
              <li>• <strong>Durability</strong> - Will it last years or need replacing soon?</li>
              <li>• <strong>Aesthetics</strong> - Does it look good enough to serve at the table?</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Le Creuset Signature Round Casserole</h2>
            <p className="mb-4 text-stone-600">The Le Creuset Signature earns our top spot for its exceptional heat distribution, beautiful design that goes from oven to table, and lifetime warranty. It's the gold standard that professionals reach for.</p>
          </div>
        </article>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Quick Comparison</h2>
          <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left p-4 font-playfair text-stone-700">Product</th>
                <th className="text-left p-4 font-playfair text-stone-700">Price</th>
                <th className="text-left p-4 font-playfair text-stone-700">Rating</th>
                <th className="text-left p-4 font-playfair text-stone-700">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Le Creuset Signature</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$419.95</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.9</td>
                <td className="p-4 font-lato text-stone-600">Premium performance</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Staub Cocotte</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$349.95</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.8</td>
                <td className="p-4 font-lato text-stone-600">Braising & browning</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Caraway Ceramic</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$279.00</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.8</td>
                <td className="p-4 font-lato text-stone-600">Design & modern kitchen</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Lodge Enamel</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$149.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.7</td>
                <td className="p-4 font-lato text-stone-600">Value & durability</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Cuisinart Set</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$89.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.7</td>
                <td className="p-4 font-lato text-stone-600">Variety & price</td>
              </tr>
              <tr>
                <td className="p-4 font-lato text-stone-800">Pyrex Glass</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$24.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.6</td>
                <td className="p-4 font-lato text-stone-600">Budget & versatility</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800">{product.name}</h3>
                      <span className="font-lato text-emerald-600 font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-500">★ {product.rating}</span>
                    </div>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-lato text-xs text-stone-500 uppercase">Pros</span>
                    <ul className="mt-1">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="font-lato text-sm text-stone-600">✓ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-lato text-xs text-stone-500 uppercase">Cons</span>
                    <ul className="mt-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="font-lato text-sm text-stone-500">✗ {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Cook Something Amazing?</h3>
          <p className="font-lato text-stone-600 mb-6">Invest in a quality casserole dish and elevate your home cooking to restaurant level.</p>
          <Link 
            href="/reviews"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
          >
            Browse All Reviews
          </Link>
        </div>

        {/* Related Reviews */}
        <div className="mt-12">
          <h3 className="font-playfair text-xl text-stone-800 mb-4">You Might Also Like</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/reviews/best-dutch-ovens-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Dutch Ovens 2026</h4>
              <p className="text-xs text-stone-500 mt-1">For braising & baking</p>
            </a>
            <a href="/reviews/best-casserole-dishes" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Casserole Dishes</h4>
              <p className="text-xs text-stone-500 mt-1">More options</p>
            </a>
            <a href="/blog/best-dutch-oven-recipes" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Dutch Oven Recipes</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect for your new dish</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}