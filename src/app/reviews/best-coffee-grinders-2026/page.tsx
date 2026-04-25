import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Coffee Grinders 2026 - Expert Buying Guide",
  description: "Best Coffee Grinders 2026 - Complete guide",
  openGraph: {
    title: "Best Coffee Grinders 2026",
    description: "Best Coffee Grinders 2026 - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/coffee-grinder.jpg"],
  },
};

const products = [
  {
    name: "Baratza Encore ESP",
    price: "$169.00",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Baratza+Encore+ESP+Coffee+Grinder&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["40 grind settings", "Consistent burr grinding", "Easy to clean", "Great for espresso"],
    cons: ["Higher price point", "Loud operation"],
  },
  {
    name: "OXO Brew Conical Grinder",
    price: "$99.00",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=OXO+Brew+Conical+Grinder&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Stainless steel burrs", "One-touch timer", "Consistent grounds", "UV-blocking hopper"],
    cons: ["Limited espresso fine-tuning", "Static issues"],
  },
  {
    name: "Capresso Infinity Plus",
    price: "$89.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Capresso+Infinity+Plus&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["16 grind settings", "Timer function", "Compact design", "Slow-speed motor"],
    cons: ["Can be messy", "Not ideal for espresso"],
  },
  {
    name: "Krups EA8108",
    price: "$79.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Krups+EA8108+Coffee+Grinder&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Automatic dosing", "Compact", "Easy to use", "Good for drip"],
    cons: ["Fewer settings", "Plastic construction"],
  },
  {
    name: "Hamilton Beach Fresh Grind",
    price: "$29.99",
    rating: 4.3,
    link: `https://www.amazon.com/s?k=Hamilton+Beach+Fresh+Grind&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Budget-friendly", "Compact", "Easy to clean", "BPA-free"],
    cons: ["Blade grinder", "Inconsistent grounds", "Not for espresso"],
  },
  {
    name: "JavaPresse Manual Grinder",
    price: "$34.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=JavaPresse+Manual+Coffee+Grinder&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Portable", "No electricity needed", "Consistent conical burrs", "Lifetime warranty"],
    cons: ["Requires effort", "Takes time", "Not for large batches"],
  },
];

export default function BestCoffeeGrinders2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 13, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/coffee-grinder.jpg" 
              alt="Best Coffee Grinders 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Coffee Grinders 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Freshly ground coffee beans are the secret to exceptional coffee. We tested the top coffee grinders to find the perfect one for every brewing method and budget.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Freshly Ground Coffee Matters</h2>
            <p className="mb-4 text-stone-600">Pre-ground coffee starts losing flavor within minutes of grinding. The oils and aromatics that make your morning cup special dissipate quickly. A good coffee grinder lets you grind just before brewing, capturing maximum freshness and flavor.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Coffee Grinders</h2>
            <h3 className="font-playfair text-xl text-stone-800 mt-6 mb-3">Burr Grinders</h3>
            <p className="mb-4 text-stone-600">Burr grinders crush beans between two abrasive surfaces, producing consistent particle sizes. They're the gold standard for coffee enthusiasts and essential for good espresso.</p>
            
            <h3 className="font-playfair text-xl text-stone-800 mt-6 mb-3">Blade Grinders</h3>
            <p className="mb-4 text-stone-600">Blade grinders chop beans like a blender. They're affordable but produce uneven grounds. Fine for beginners, but限制了 your coffee potential.</p>
            
            <h3 className="font-playfair text-xl text-stone-800 mt-6 mb-3">Manual Grinders</h3>
            <p className="mb-4 text-stone-600">Hand-powered grinders use conical burrs and require no electricity. Great for travel, camping, or anyone wanting the freshest coffee without noise.</p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Grind consistency</strong> - Burr grinders beat blade grinders every time</li>
              <li>• <strong>Grind settings</strong> - More settings = more versatility for different brewing methods</li>
              <li>• <strong>Motor speed</strong> - Slower is better to avoid heating and damaging beans</li>
              <li>• <strong>Capacity</strong> - Consider how much coffee you brew at once</li>
              <li>• <strong>Noise level</strong> - Some grinders are noticeably louder</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Baratza Encore ESP</h2>
            <p className="mb-4 text-stone-600">The Baratza Encore ESP earns our top pick with its exceptional 40 grind settings, commercial-grade burrs, and consistent performance. It's the gold standard for home espresso grinding and handles everything from Turkish to French press beautifully.</p>
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
                  <th className="text-left py-3 px-2 text-stone-600">Grinder</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Baratza Encore ESP</td>
                  <td className="py-3 px-2">$169.00</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Espresso enthusiasts</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">OXO Brew Conical</td>
                  <td className="py-3 px-2">$99.00</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Drip coffee lovers</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Capresso Infinity Plus</td>
                  <td className="py-3 px-2">$89.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Value seekers</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Krups EA8108</td>
                  <td className="py-3 px-2">$79.99</td>
                  <td className="py-3 px-2">4.4★</td>
                  <td className="py-3 px-2">Beginners</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Hamilton Beach Fresh</td>
                  <td className="py-3 px-2">$29.99</td>
                  <td className="py-3 px-2">4.3★</td>
                  <td className="py-3 px-2">Budget buyers</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">JavaPresse Manual</td>
                  <td className="py-3 px-2">$34.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Travel & portability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Fresh Coffee Starts Here</h3>
          <p className="font-lato text-stone-600 mb-6">A good grinder transforms your coffee. Whether you need espresso precision or simple drip grounds, the right grinder brings out the best in every bean.</p>
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
            <a href="/reviews/best-drip-coffee-makers-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Drip Coffee Makers</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect your morning brew</p>
            </a>
            <a href="/reviews/best-electric-kettle-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Electric Kettles</h4>
              <p className="text-xs text-stone-500 mt-1">Hot water in minutes</p>
            </a>
            <a href="/reviews/best-french-press" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best French Press</h4>
              <p className="text-xs text-stone-500 mt-1">Classic coffee making</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
