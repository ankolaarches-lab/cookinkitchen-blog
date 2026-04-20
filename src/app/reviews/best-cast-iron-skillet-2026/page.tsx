import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Cast Iron Skillets 2026 - Complete Buying Guide",
  description: "Best Cast Iron Skillet 2026 - Complete guide",
  openGraph: {
    title: "Best Cast Iron Skillet 2026",
    description: "Best Cast Iron Skillet 2026 - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-cookware.png"],
  },
};

const products = [
  {
    name: "Lodge Cast Iron Skillet - 12-inch",
    price: "$44.99",
    rating: 4.9,
    link: `https://www.amazon.com/s?k=Lodge+Cast+Iron+Skillet+12+inch&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Pre-seasoned ready to use", "Made in USA", "Excellent heat retention", "Lifetime durability"],
    cons: ["Heavy (8+ lbs)", "Requires seasoning maintenance"],
  },
  {
    name: "Lodge Cast Iron Skillet - 10.5-inch",
    price: "$29.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Lodge+Cast+Iron+Skillet+10+inch&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Great starter size", "Pre-seasoned", "Lightweight for cast iron", "Affordable"],
    cons: ["Smaller cooking surface", "No helper handle"],
  },
  {
    name: "Stargazer Cast Iron Skillet - 10-inch",
    price: "$65.00",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Stargazer+Cast+Iron+Skillet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Ultra-smooth surface", "Hand-polished", "Helper handle", "Modern design"],
    cons: ["Higher price", "Not pre-seasoned"],
  },
  {
    name: "Victoria Cast Iron Skillet - 12-inch",
    price: "$49.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Victoria+Cast+Iron+Skillet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Smooth surface", "Angled helper handle", "Pre-seasoned", "Great value"],
    cons: ["Requires initial seasoning", "Heavier than some"],
  },
  {
    name: "Lodge Pro-Logic Cast Iron Skillet - 12-inch",
    price: "$59.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Lodge+Pro+Logic+Cast+Iron+Skillet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Ergonomic handle", "Professional grade", "Pre-seasoned", "Even heat distribution"],
    cons: ["Most expensive Lodge option", "Very heavy"],
  },
  {
    name: "Amazon Basics Pre-Seasoned Cast Iron Skillet",
    price: "$24.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Amazon+Basics+Cast+Iron+Skillet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Budget-friendly", "Pre-seasoned", "Lightweight", "Good for beginners"],
    cons: ["Less refined surface", "Inconsistent quality", "Shorter lifespan"],
  },
];

export default function BestCastIronSkillets2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 14, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/cast-iron-skillet.jpg" 
              alt="Best Cast Iron Skillets 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Cast Iron Skillets 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">A cast iron skillet is a kitchen essential that lasts a lifetime. We tested the top options to find the perfect pan for searing, baking, and everything in between.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Cast Iron Belongs in Your Kitchen</h2>
            <p className="mb-4 text-stone-600">Cast iron has been the backbone of home kitchens for centuries, and for good reason. These pans are virtually indestructible, provide exceptional heat retention for perfect searing, and can go from stovetop to oven with ease. With proper care, a cast iron skillet becomes a family heirloom.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For in a Cast Iron Skillet</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Pre-seasoning</strong> - Ready to use right out of the box</li>
              <li>• <strong>Surface smoothness</strong> - Smoother surfaces require less breaking in</li>
              <li>• <strong>Handle design</strong> - Look for helper handles and ergonomic grips</li>
              <li>• <strong>Weight</strong> - Heavier pans hold heat better but are harder to handle</li>
              <li>• <strong>Origin</strong> - American-made (Lodge) offers consistent quality</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">12-inch vs 10-inch: Which Size?</h2>
            <p className="mb-4 text-stone-600">The <strong>12-inch skillet</strong> is the workhorse - perfect for family meals, searing multiple steaks, or baking cornbread. It holds more heat and is ideal for oven-to-table presentations.</p>
            <p className="mb-4 text-stone-600">The <strong>10-inch</strong> is better for small households, everyday cooking, and those with limited storage. It's lighter and easier to handle.</p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Lodge Cast Iron Skillet (12-inch)</h2>
            <p className="mb-4 text-stone-600">The Lodge 12-inch Cast Iron Skillet earns our top pick for its unbeatable combination of quality, price, and availability. It's pre-seasoned and ready to use, made in the USA with consistent quality, and backed by Lodge's lifetime warranty. The pan develops a beautiful seasoning over time and can handle everything from searing steaks to baking pizzas.</p>
          </div>
        </article>

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

        {/* Comparison Table */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-playfair text-xl text-stone-800 mb-4">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-lato">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-2 text-stone-600">Skillet</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Lodge 12-inch</td>
                  <td className="py-3 px-2">$44.99</td>
                  <td className="py-3 px-2">4.9★</td>
                  <td className="py-3 px-2">Overall best</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Lodge 10.5-inch</td>
                  <td className="py-3 px-2">$29.99</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Budget starter</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Stargazer 10-inch</td>
                  <td className="py-3 px-2">$65.00</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Premium surface</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Victoria 12-inch</td>
                  <td className="py-3 px-2">$49.99</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Value premium</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Lodge Pro-Logic</td>
                  <td className="py-3 px-2">$59.99</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Professional</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">Amazon Basics</td>
                  <td className="py-3 px-2">$24.99</td>
                  <td className="py-3 px-2">4.4★</td>
                  <td className="py-3 px-2">Budget choice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Start Your Cast Iron Journey</h3>
          <p className="font-lato text-stone-600 mb-6">A quality cast iron skillet is an investment that pays dividends for decades. Choose one that fits your cooking style and enjoy the satisfaction of a perfectly seasoned pan.</p>
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
            <a href="/reviews/best-dutch-ovens" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Dutch Ovens</h4>
              <p className="text-xs text-stone-500 mt-1">Braise like a pro</p>
            </a>
            <a href="/reviews/best-nonstick-pan" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Nonstick Pans</h4>
              <p className="text-xs text-stone-500 mt-1">Easy release</p>
            </a>
            <a href="/reviews/cast-iron-vs-carbon-steel" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Comparison</span>
              <h4 className="font-bold text-stone-900 mt-1">Cast Iron vs Carbon Steel</h4>
              <p className="text-xs text-stone-500 mt-1">Which is better?</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}