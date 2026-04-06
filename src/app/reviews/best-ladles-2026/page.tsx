import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Ladles 2026 - Complete Buying Guide",
  description: "Find the perfect ladle for serving soups, stews, and sauces. We tested top-rated ladles in stainless steel, silicone, and wood for every kitchen need.",
};

const products = [
  {
    name: "OXO Good Grips Stainless Steel Ladle",
    price: "$16.95",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=OXO+Good+Grips+Stainless+Ladle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Comfortable non-slip handle", "Dishwasher safe", "Mirror finish stainless steel", "Perfect capacity for soups"],
    cons: ["Handle can get hot near stovetop"],
  },
  {
    name: "Tovolo Flex Core Silicone Ladle",
    price: "$14.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Tovolo+Flex+Core+Silicone+Ladle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Heat resistant up to 500°F", "Non-scratch for nonstick", "Precision pour lip", "BPA free"],
    cons: ["Not for heavy-duty use"],
  },
  {
    name: "Fissler Essential Soup Ladle",
    price: "$24.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Fissler+Essential+Stainless+Ladle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["18/10 stainless steel", "Ergonomic handle", "Professional quality", "Dishwasher safe"],
    cons: ["Premium price"],
  },
  {
    name: "Stainless Steel Ladle with Wooden Handle",
    price: "$12.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Stainless+Steel+Ladle+Wooden+Handle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Heat-resistant wooden handle", "Durable stainless bowl", "Great for wok cooking"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "KitchenAid Classic Basting Spoon",
    price: "$8.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=KitchenAid+Classic+Basting+Spoon&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Deep bowl for sauces", "Stainless steel", "Dishwasher safe"],
    cons: ["Not a traditional ladle shape"],
  },
];

export default function BestLadles2026() {
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
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Ladles 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">A good ladle is essential for serving soups, stews, sauces, and gravies with precision. We tested the top ladles for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why a Good Ladle Matters</h2>
            <p className="mb-4 text-stone-600">The right ladle makes serving soups and sauces effortless. A well-designed ladle has the perfect bowl size, comfortable handle, andpouring lip for mess-free serving. Whether you're dishing up a hearty stew or plating a delicate sauce, quality matters.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Ladles</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Stainless Steel Ladle</strong> - Durable, dishwasher-safe, professional choice</li>
              <li>• <strong>Silicone Ladle</strong> - Non-scratch, heat-resistant, perfect for nonstick</li>
              <li>• <strong>Wooden Handle Ladle</strong> - Heat-resistant, classic look, gentle on cookware</li>
              <li>• <strong>Basting Spoon</strong> - Smaller version for sauces and gravies</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Consider</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Capacity</strong> - Choose based on typical serving sizes</li>
              <li>• <strong>Handle Length</strong> - Longer for deep pots, shorter for everyday use</li>
              <li>• <strong>Material Compatibility</strong> - Ensure safe for your cookware</li>
              <li>• <strong>Pour Spout</strong> - Look for integrated pouring lip</li>
            </ul>
          </div>
          
          <div className="mt-12 space-y-6">
            <h2 className="font-playfair text-2xl text-stone-800 mb-6">Top Rated Ladles</h2>
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div>
                  <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🥄</span>
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
              The <strong>OXO Good Grips Stainless Steel Ladle</strong> earns our top spot for its comfortable non-slip handle, perfect capacity, and durable construction. It's the kitchen workhorse that makes serving soups a breeze.
            </p>
            <a 
              href={`https://www.amazon.com/s?k=OXO+Good+Grips+Stainless+Ladle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-bold hover:bg-emerald-700 transition"
            >
              Buy on Amazon - $16.95
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