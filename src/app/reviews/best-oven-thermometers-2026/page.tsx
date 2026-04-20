import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Oven Thermometers 2026 - Accurate Temperature Guide",
  description: "Stop guessing if your oven is at the right temperature. We tested the best oven thermometers to ensure precise baking and roasting results.",
  keywords: ["best oven thermometer 2026", "oven thermometer", "kitchen thermometer", "baking thermometer", "oven temperature gauge"],
  openGraph: {
    title: "Best Oven Thermometers 2026 - Accurate Temperature Guide",
    description: "Stop guessing if your oven is at the right temperature. We tested the best oven thermometers to ensure precise baking and roasting results.",
    type: "article"
    images: ["/images/reviews/hero-kitchen-utensils.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Oven Thermometers 2026",
    description: "Stop guessing if your oven is at the right temperature.",
  },
};

const products = [
  {
    name: "ThermoWorks CPO霸王",
    price: "$59.95",
    rating: 4.9,
    link: `https://www.amazon.com/s?k=ThermoWorks+CPO+Oven+Thermometer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Professional grade accuracy", "NIST traceable calibration", "High-temperature rated"],
    cons: ["Premium price", "Requires magnetic mount"],
  },
  {
    name: "Taylor Old Faithful Oven Thermometer",
    price: "$12.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Taylor+Old+Faithful+Oven+Thermometer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Easy to read dial", "Wide temperature range"],
    cons: ["Not as precise as digital"],
  },
  {
    name: "Rest-O-Matic Oven Thermometer",
    price: "$14.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Rest-O-Matic+Oven+Thermometer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Durable stainless steel", "Oven-safe to 600°F", "Large display"],
    cons: ["Some accuracy issues reported"],
  },
  {
    name: "KitchenAid Oven Thermometer",
    price: "$16.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=KitchenAid+Oven+Thermometer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Trusted brand", "Clear dial", "Heat-resistant"],
    cons: ["Dial can be hard to read through oven window"],
  },
  {
    name: "CDN Pro-Style Oven Thermometer",
    price: "$24.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=CDN+Oven+Thermometer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["High accuracy", "Professional quality", "Wide temp range"],
    cons: ["Higher price point"],
  },
  {
    name: "Probe Digital Oven Thermometer",
    price: "$19.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Digital+Oven+Thermometer+Probe&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Digital readout", "Probe style for precise reading", "Alarm function"],
    cons: ["Requires battery", "Wire can be in the way"],
  },
];

export default function BestOvenThermometers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Gadgets</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 23, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
</div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Oven Thermometers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Don't trust your oven's dial. We tested the best oven thermometers to ensure your baked goods come out perfectly every time.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need an Oven Thermometer</h2>
            <p className="mb-4 text-stone-600">Most home ovens can be off by 25°F to 50°F from their set temperature. This means your 350°F cake might actually be baking at 400°F or as low as 300°F. An oven thermometer gives you the truth.</p>
            <p className="mb-4 text-stone-600">Whether you're a casual baker or a serious home chef, knowing your oven's true temperature is the difference between perfect results and ruined recipes.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Accuracy</strong> - Look for ±1-2°F accuracy for best results</li>
              <li>• <strong>Temperature range</strong> - Should cover at least 200°F to 500°F</li>
              <li>• <strong>Readability</strong> - Big, clear numbers you can read through oven door</li>
              <li>• <strong>Durability</strong> - Stainless steel construction lasts for years</li>
              <li>• <strong>Placement</strong> - Oven-safe or magnetic options</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Analog vs Digital Oven Thermometers</h2>
            <p className="mb-4 text-stone-600"><strong>Analog (dial) thermometers</strong> are simple, don't need batteries, and are affordable. They're great for basic checking but may be harder to read precisely.</p>
            <p className="mb-4 text-stone-600"><strong>Digital thermometers</strong> offer more precision and features like alarms, but require batteries and cost more.</p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: ThermoWorks CPO</h2>
            <p className="mb-4 text-stone-600">The ThermoWorks CPO is our top pick for serious bakers. It offers professional-grade accuracy, NIST traceable calibration, and can handle the extreme temperatures of both home and commercial ovens. If you're constantly baking and need precision, this is worth the investment.</p>
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
                      Buy on Amazon →
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
                  <th className="text-left py-3 px-2 text-stone-600">Thermometer</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">ThermoWorks CPO</td>
                  <td className="py-3 px-2">$59.95</td>
                  <td className="py-3 px-2">4.9★</td>
                  <td className="py-3 px-2">Professional bakers</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Taylor Old Faithful</td>
                  <td className="py-3 px-2">$12.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Budget-friendly</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">CDN Pro-Style</td>
                  <td className="py-3 px-2">$24.99</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Accuracy focus</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">KitchenAid</td>
                  <td className="py-3 px-2">$16.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Brand loyalty</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">Digital Probe</td>
                  <td className="py-3 px-2">$19.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Features</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Know Your Oven's True Temperature</h3>
          <p className="font-lato text-stone-600 mb-6">An oven thermometer is one of the most important tools for consistent baking. Pick one that fits your needs and bake with confidence.</p>
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
            <a href="/reviews/best-instant-read-thermometers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Instant Read Thermometers</h4>
              <p className="text-xs text-stone-500 mt-1">Check meat temps</p>
            </a>
            <a href="/reviews/best-baking-sheets-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Baking Sheets</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect for baking</p>
            </a>
            <a href="/reviews/best-kitchen-timers-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Timers</h4>
              <p className="text-xs text-stone-500 mt-1">Never overcook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}