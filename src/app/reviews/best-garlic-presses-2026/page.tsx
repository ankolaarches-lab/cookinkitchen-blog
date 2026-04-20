import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Garlic Presses 2026 - Complete Buying Guide",
  description: "Effortlessly crush garlic cloves with the best garlic presses of 2026. We tested top-rated pressers for home cooks.",
  keywords: ["best garlic press 2026", "garlic press review", "kitchen garlic crusher", "garlic mincer"],
  openGraph: {
    title: "Best Garlic Presses 2026 - Complete Buying Guide",
    description: "Effortlessly crush garlic cloves with the best garlic presses of 2026.",
    type: "article",
    url: "https://cookinkitchen.online/reviews/best-garlic-presses-2026",,
    images: ["/images/reviews/hero-kitchen-utensils.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Garlic Presses 2026 - Complete Buying Guide",
    description: "Effortlessly crush garlic cloves with the best garlic presses of 2026.",
  },
  alternates: {
    canonical: "https://cookinkitchen.online/reviews/best-garlic-presses-2026",
  },
};

const products = [
  {
    name: "OXO Good Grips Garlic Press",
    price: "$19.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=OXO+Good+Grips+Garlic+Press&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Comfortable handle", "Easy to clean", "Built-in cleaner"],
    cons: ["Requires some force"],
  },
  {
    name: "Kuhn Rikon Garlic Press",
    price: "$34.95",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Kuhn+Rikon+Garlic+Press&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Heavy-duty", "Professional quality", "Double-press action"],
    cons: ["Hand wash only"],
  },
  {
    name: "Joseph Joseph Garlic Rocker",
    price: "$14.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Joseph+Joseph+Garlic+Rocker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Rocking motion", "Easy to use", "Dishwasher safe"],
    cons: ["Different technique needed"],
  },
  {
    name: "Cuisinart Garlic Press",
    price: "$14.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Cuisinart+Garlic+Press&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Easy to clean", "Sturdy construction"],
    cons: ["Smaller capacity"],
  },
  {
    name: "Norpro Garlic Press",
    price: "$9.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Norpro+Garlic+Press&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Budget-friendly", "Simple design", "Lightweight"],
    cons: ["Less durable"],
  },
];

export default function BestGarlicPresses2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Kitchen Utensils</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 23, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
</div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Garlic Presses 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Crush garlic cloves effortlessly with our tested picks for the best garlic presses in 2026.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Garlic Press?</h2>
            <p className="mb-4 text-stone-600">A garlic press lets you crush garlic cloves in seconds without the need for a knife. It releases the oils and juices that give garlic its flavor, making it perfect for sauces, marinades, and stir-fries.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Ease of cleaning</strong> - Look for models with built-in cleaners or removable parts</li>
              <li>• <strong>Handle comfort</strong> - Ergonomic handles make pressing easier</li>
              <li>• <strong>Durability</strong> - Stainless steel heads last longer than plastic</li>
              <li>• <strong>Capacity</strong> - Some press whole cloves, others need halved cloves</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: OXO Good Grips Garlic Press</h2>
            <p className="mb-4 text-stone-600">The OXO Good Grips Garlic Press earns our top spot for its comfortable handle, easy cleaning, and built-in cleaner that pushes out garlic residue. It's perfect for everyday home cooking.</p>
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
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-lato">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 text-sm font-bold text-stone-600">Product</th>
                  <th className="py-3 text-sm font-bold text-stone-600">Price</th>
                  <th className="py-3 text-sm font-bold text-stone-600">Rating</th>
                  <th className="py-3 text-sm font-bold text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="border-b border-stone-100">
                    <td className="py-3 text-stone-800 font-medium">{product.name}</td>
                    <td className="py-3 text-emerald-600 font-bold">{product.price}</td>
                    <td className="py-3 text-emerald-500">★ {product.rating}</td>
                    <td className="py-3 text-stone-600 text-sm">
                      {index === 0 ? "Overall best" : 
                       index === 1 ? "Professional use" : 
                       index === 2 ? "Easy cleanup" : 
                       index === 3 ? "Budget pick" : "Value option"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Crush Garlic the Easy Way</h3>
          <p className="font-lato text-stone-600 mb-6">A quality garlic press saves time and gives you perfectly crushed garlic every time.</p>
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
            <a href="/reviews/best-chef-knives-home-cooks" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Chef's Knives</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect companion to garlic press</p>
            </a>
            <a href="/reviews/best-kitchen-utensils-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Utensils</h4>
              <p className="text-xs text-stone-500 mt-1">Essential tools for your kitchen</p>
            </a>
            <a href="/reviews/best-kitchen-gadgets-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Gadgets</h4>
              <p className="text-xs text-stone-500 mt-1">Under $25 must-haves</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}