import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Whisks 2026 - Ultimate Buying Guide",
  description: "Best Whisks 2026 - Complete guide",
  openGraph: {
    title: "Best Whisks 2026",
    description: "Best Whisks 2026 - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-kitchen-utensils.png"],
  },
};

const products = [
  {
    name: "OXO Good Grips Balloon Whisk",
    price: "$12.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=OXO+Good+Grips+Balloon+Whisk&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Comfortable grip", "Stainless steel wires", "Dishwasher safe"],
    cons: ["Some users report wire bending"],
  },
  {
    name: "KitchenAid Classic Whisk",
    price: "$9.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=KitchenAid+Classic+Whisk&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Durable", "Classic design"],
    cons: ["No ergonomic grip"],
  },
  {
    name: "Stainless Steel French Whisk",
    price: "$14.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=French+Whisk+Stainless+Steel&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Perfect for sauces", "Slim profile", "Professional grade"],
    cons: ["Not for large batches"],
  },
  {
    name: "Spring Chef Balloon Whisk",
    price: "$11.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Spring+Chef+Balloon+Whisk&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Great value", "Loops don't come loose", "Comfortable handle"],
    cons: ["May stain with strong foods"],
  },
  {
    name: "Balineseo Silicone Whisk Set",
    price: "$15.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Silicone+Whisk+Set&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Heat resistant", "Non-scratch", "Set of 3 sizes"],
    cons: ["Not as airy as balloon"],
  },
  {
    name: "Rachael Ray Nonstick Whisk Set",
    price: "$12.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Rachael+Ray+Whisk+Set&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Nylon heads safe for nonstick", "Colorful handles", "Set of 2"],
    cons: ["Not stainless steel"],
  },
];

export default function BestWhisks2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Kitchen Utensils</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 20, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/hero-kitchen-utensils.png" 
              alt="Best Whisks 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Whisks 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From fluffy meringues to smooth sauces, the right whisk makes all the difference. We tested the top whisks for every kitchen need.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why a Good Whisk Matters</h2>
            <p className="mb-4 text-stone-600">A quality whisk incorporates air into mixtures, creates smooth emulsions, and blends ingredients evenly. Whether you're whipping egg whites for a soufflé or stirring a gravy, the right whisk saves time and effort.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Whisks</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Balloon Whisk</strong> - Large, fluffy bowl perfect for whipping cream and egg whites</li>
              <li>• <strong>French Whisk</strong> - Tighter wires, ideal for sauces, gravies, and stirring</li>
              <li>• <strong>Flat Whisk</strong> - Great for nonstick cookware and scraping bowls clean</li>
              <li>• <strong>Silicone Whisk</strong> - Heat-safe, non-scratch, perfect for nonstick surfaces</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Wire quality</strong> - Stainless steel wires resist rust and maintain shape</li>
              <li>• <strong>Handle comfort</strong> - Ergonomic grips reduce hand fatigue</li>
              <li>• <strong>Durability</strong> - Check that wires are securely attached to the handle</li>
              <li>• <strong>Maintenance</strong> - Dishwasher-safe options make cleanup easy</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: OXO Good Grips Balloon Whisk</h2>
            <p className="mb-4 text-stone-600">The OXO Good Grips Balloon Whisk earns our top spot with its comfortable non-slip handle, durable stainless steel wires, and excellent beating action. It's the perfect all-around whisk for most kitchen tasks.</p>
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
                  <th className="text-left py-3 px-2 text-stone-600">Whisk</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">OXO Good Grips</td>
                  <td className="py-3 px-2">$12.99</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Overall best</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">KitchenAid Classic</td>
                  <td className="py-3 px-2">$9.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Budget pick</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">French Whisk</td>
                  <td className="py-3 px-2">$14.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Sauces & gravies</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Spring Chef</td>
                  <td className="py-3 px-2">$11.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Value</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Balineseo Silicone</td>
                  <td className="py-3 px-2">$15.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Nonstick cookware</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">Rachael Ray Set</td>
                  <td className="py-3 px-2">$12.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Variety</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Whisk Your Way to Perfection</h3>
          <p className="font-lato text-stone-600 mb-6">A good whisk is a kitchen essential. Pick one that fits your cooking style and get whisking!</p>
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
            <a href="/reviews/best-kitchen-utensils-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Utensils</h4>
              <p className="text-xs text-stone-500 mt-1">Essential tools</p>
            </a>
            <a href="/reviews/best-mixing-bowls" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Mixing Bowls</h4>
              <p className="text-xs text-stone-500 mt-1">For every kitchen</p>
            </a>
            <a href="/reviews/best-stand-mixers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Stand Mixers</h4>
              <p className="text-xs text-stone-500 mt-1">Heavy-duty mixing</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
