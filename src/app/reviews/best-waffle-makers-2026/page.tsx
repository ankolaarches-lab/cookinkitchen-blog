import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Waffle Makers 2026 - Ultimate Buying Guide",
  description: "From Belgian to classic, we tested the best waffle makers. Find the perfect waffle iron for crispy, golden results every time.",
};

const products = [
  {
    name: "Breville The Smart Waffle Pro",
    price: "$304.00",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Breville+Smart+Waffle+Pro&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["6 browning settings", "Rotating design", "Professional results"],
    cons: ["Premium price", "Large footprint"],
  },
  {
    name: "Cuisinart Double Flip Waffle Maker",
    price: "$139.95",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Cuisinart+Double+Flip+Waffle+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Unique flip design", "Even cooking", "Non-stick plates"],
    cons: ["Only makes 2 waffles"],
  },
  {
    name: "Cuisinart 4-Slice Belgian Waffle Maker",
    price: "$74.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Cuisinart+4+Slice+Belgian+Waffle+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Makes 4 at once", "Deep pockets", "Indicator lights"],
    cons: ["Takes up counter space"],
  },
  {
    name: "Hamilton Beach Belgian Waffle Maker",
    price: "$49.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Hamilton+Beach+Belgian+Waffle+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["PFAS-free ceramic", "Browning control", "Affordable"],
    cons: ["Basic features"],
  },
  {
    name: "Presto FlipSide Belgian Waffle Maker",
    price: "$39.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Presto+FlipSide+Belgian+Waffle+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Compact design", "Flips horizontally", "Great value"],
    cons: ["Uneven cooking sometimes"],
  },
];

export default function BestWaffleMakers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 12, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/hero-appliances.png" 
              alt="Best Waffle Makers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Waffle Makers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Golden, crispy waffles at home. We tested the top waffle makers to find the perfect breakfast machine for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Waffle Maker?</h2>
            <p className="mb-4 text-stone-600">Skip the bakery lines and make restaurant-quality waffles at home. Modern waffle makers offer features like adjustable browning, flip designs for even cooking, and non-stick surfaces for easy cleanup.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Type</strong> - Belgian (deeper pockets) vs Classic (thinner)</li>
              <li>• <strong>Capacity</strong> - 2-slice vs 4-slice for families</li>
              <li>• <strong>Browning control</strong> - Adjustable settings for preference</li>
              <li>• <strong>Non-stick coating</strong> - Easy cleanup is essential</li>
              <li>• <strong>Storage</strong> - Consider vertical storage if counter space is limited</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Breville The Smart Waffle Pro</h2>
            <p className="mb-4 text-stone-600">The Breville Smart Waffle Pro offers 6 browning settings and a unique rotating design that ensures perfectly even cooking every time. It's the closest thing to professional waffles you can get at home.</p>
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
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready for Breakfast?</h3>
          <p className="font-lato text-stone-600 mb-6">A great waffle maker means perfect waffles every weekend.</p>
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
            <a href="/reviews/best-toaster-ovens" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Toaster Ovens</h4>
              <p className="text-xs text-stone-500 mt-1">More than just toast</p>
            </a>
            <a href="/reviews/best-blenders-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Blenders</h4>
              <p className="text-xs text-stone-500 mt-1">Smoothies & more</p>
            </a>
            <a href="/reviews/best-coffee-grinder" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Coffee Grinders</h4>
              <p className="text-xs text-stone-500 mt-1">Freshly ground coffee</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
