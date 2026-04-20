import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Fish Turners 2026 - Complete Buying Guide",
  description: "Best Fish Turners 2026 - Complete guide",
  openGraph: {
    title: "Best Fish Turners 2026",
    description: "Best Fish Turners 2026 - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-kitchen-utensils.png"],
  },
};

const products = [
  {
    name: "OXO Good Grips Stainless Steel Fish Turner",
    price: "$14.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=OXO+1130900+Turner+Stainless+Comfortable&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Slim flexible blade", "Comfortable grip", "Dishwasher safe", "Perfect for delicate foods"],
    cons: ["Not ideal for heavy foods"],
  },
  {
    name: "Staruby Kitchen Fish Spatula",
    price: "$15.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=STARUBY+Kitchen+Stainless+Silicone+Resistant&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Stainless steel core", "Silicone tips", "Heat resistant", "Locking mechanism"],
    cons: ["Slightly bulky"],
  },
  {
    name: "Newness Metal Fish Turner Spatula",
    price: "$11.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Newness+Metal+Fish+Turner+Stainless&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Ultra thin blade", "Professional grade", "Ergonomic wooden handle", "Great for fish and eggs"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "Stainless Steel Fish Spatula Set",
    price: "$18.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Stainless+Fish+Spatula+Set+Professional&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Set of 2 sizes", "Mirror polished", "Durable construction", "Versatile use"],
    cons: ["No silicone tips"],
  },
  {
    name: "GIR Fish Turner",
    price: "$16.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=GIR+Ultra+Flexible+Fish+Turner&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Extremely flexible", "Stainless steel reinforced", "Non-scratch", "Perfect for delicate flip"],
    cons: ["Premium price"],
  },
];

export default function BestFishTurners2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Kitchen Utensils</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 23, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
</div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Fish Turners 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">A quality fish turner is essential for delicate flipping of fish, pancakes, eggs, and more. We tested the top-rated fish spatulas for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why a Good Fish Turner Matters</h2>
            <p className="mb-4 text-stone-600">Fish turners are designed with thin, flexible blades that slide under delicate foods without breaking them. Unlike regular spatulas, fish turners have a narrower profile and more flexibility, making them perfect for fragile items like fish fillets, eggs, and pancakes.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Fish Turners</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Stainless Steel Fish Turner</strong> - Professional grade, ultra-thin blade, great heat distribution</li>
              <li>• <strong>Silicone Fish Turner</strong> - Non-scratch, heat-resistant, safe for nonstick</li>
              <li>• <strong>Hybrid (Steel Core + Silicone Tip)</strong> - Best of both worlds, flexibility and durability</li>
              <li>• <strong>Fish Slice</strong> - Larger version for portioning and serving fish</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Consider</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Blade Flexibility</strong> - Should flex easily but hold shape</li>
              <li>• <strong>Blade Thinness</strong> - Thinner blades slide under food better</li>
              <li>• <strong>Handle Comfort</strong> - Look for ergonomic designs</li>
              <li>• <strong>Cookware Compatibility</strong> - Ensure safe for your pans</li>
            </ul>
          </div>
          
          <div className="mt-12 space-y-6">
            <h2 className="font-playfair text-2xl text-stone-800 mb-6">Top Rated Fish Turners</h2>
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div>
                  <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🐟</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800">{product.name}</h3>
                      <span className="font-lato text-emerald-600 font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-amber-500">★</span>
                      <span className="font-lato text-sm text-stone-600">{product.rating}</span>
                    </div>
                    <p className="font-lato text-sm text-stone-500 mb-3">
                      <span className="text-emerald-600 font-medium">Pros:</span> {product.pros.join(", ")}
                    </p>
                    <p className="font-lato text-sm text-stone-500">
                      <span className="text-red-500 font-medium">Cons:</span> {product.cons.join(", ")}
                    </p>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 bg-emerald-600 text-white px-4 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                    >
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-emerald-50 rounded-xl p-6">
            <h3 className="font-playfair text-xl text-stone-800 mb-3">Our Top Pick</h3>
            <p className="font-lato text-stone-600 mb-4">
              The <strong>OXO Good Grips Stainless Steel Fish Turner</strong> earns our top spot for its slim flexible blade that effortlessly slides under delicate foods. The comfortable grip and dishwasher-safe construction make it a kitchen essential.
            </p>
            <a 
              href={`https://www.amazon.com/s?k=OXO+1130900+Turner+Stainless+Comfortable&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-bold hover:bg-emerald-700 transition"
            >
              Buy on Amazon - $14.99
            </a>
          </div>
          
          <div className="mt-12">
            <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-lato font-medium transition">← Back to All Reviews</Link>
          </div>
        </article>
      </div>
    </div>
  );
}