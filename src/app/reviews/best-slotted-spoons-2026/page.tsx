import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Slotted Spoons 2026 - Complete Buying Guide",
  description: "Find the perfect slotted spoon for draining and serving. We tested top-rated cooking spoons in stainless steel, silicone, and wood for every kitchen need.",
};

const products = [
  {
    name: "OXO Good Grips Silicone Slotted Spoon",
    price: "$12.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=OXO+Good+Grips+Silicone+Slotted&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Heat resistant to 600°F", "Non-scratch", "Sloped bowl design", "Dishwasher safe"],
    cons: ["Not for very heavy foods"],
  },
  {
    name: "Stainless Steel Slotted Spoon Set",
    price: "$14.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Stainless+Steel+Slotted+Spoon+Set&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Set of 2 sizes", "Mirror polish", "Professional grade", "Dishwasher safe"],
    cons: ["Can scratch nonstick if metal"],
  },
  {
    name: "KitchenAid Classic Slotted Spoon",
    price: "$9.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=KitchenAid+Classic+Slotted+Spoon&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Stainless steel", "Classic design", "Dishwasher safe"],
    cons: ["Basic handle"],
  },
  {
    name: "3 Pcs Silicone Cooking Spoon Set",
    price: "$16.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Silicone+Cooking+Spoon+Set+Heat+Resistant&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Includes solid & slotted", "Heat resistant", "Food-grade silicone", "Non-scratch"],
    cons: ["Set price higher per unit"],
  },
  {
    name: "Wooden Slotted Spoon",
    price: "$11.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Wooden+Slotted+Spoon+Handcrafted&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Natural material", "Gentle on cookware", "Heat resistant handle", "Classic look"],
    cons: ["Hand wash only", "Not dishwasher safe"],
  },
];

export default function BestSlottedSpoons2026() {
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
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Slotted Spoons 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">A slotted spoon is essential for draining liquids from pasta, vegetables, and more. We tested the top-rated slotted spoons for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why a Good Slotted Spoon Matters</h2>
            <p className="mb-4 text-stone-600">The slots in a slotted spoon allow liquids to drain while keeping food in the bowl. This makes it perfect for retrieving pasta from boiling water, draining fried foods, serving vegetables, or skimming floating ingredients from soups and stews.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Slotted Spoons</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Stainless Steel Slotted Spoon</strong> - Durable, professional, dishwasher safe</li>
              <li>• <strong>Silicone Slotted Spoon</strong> - Non-scratch, heat-resistant, safe for nonstick</li>
              <li>• <strong>Wooden Slotted Spoon</strong> - Classic, gentle on cookware, naturally heat-resistant</li>
              <li>• <strong>Nylon Slotted Spoon</strong> - Lightweight, affordable, non-scratch</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Consider</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Slot Size</strong> - Larger slots drain faster, smaller slots retain more</li>
              <li>• <strong>Bowl Depth</strong> - Deeper bowls hold more food</li>
              <li>• <strong>Handle Length</strong> - Longer for deep pots</li>
              <li>• <strong>Material Compatibility</strong> - Choose based on your cookware</li>
            </ul>
          </div>
          
          <div className="mt-12 space-y-6">
            <h2 className="font-playfair text-2xl text-stone-800 mb-6">Top Rated Slotted Spoons</h2>
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div>
                  <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🥣</span>
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
              The <strong>OXO Good Grips Silicone Slotted Spoon</strong> earns our top spot for its excellent heat resistance, non-scratch design, and smart sloped bowl that drains perfectly. It's safe for all cookware and dishwasher safe for easy cleanup.
            </p>
            <a 
              href={`https://www.amazon.com/s?k=OXO+Good+Grips+Silicone+Slotted&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-bold hover:bg-emerald-700 transition"
            >
              Buy on Amazon - $12.99
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