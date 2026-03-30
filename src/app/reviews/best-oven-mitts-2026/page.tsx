import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Oven Mitts 2026 - Heat Resistant Buying Guide",
  description: "Protect your hands from high heat with the best oven mitts. We tested silicone, fabric, and hybrid mitts for maximum protection.",
  openGraph: {
    title: "Best Oven Mitts 2026 - Heat Resistant Buying Guide",
    description: "Protect your hands from high heat. We tested silicone, fabric, and hybrid oven mitts for maximum protection.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/oven-mitts-2026.jpg"],
  },
};

const products = [
  {
    name: "OXO Good Grips Silicone Oven Mitt",
    price: "$14.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=OXO+Good+Grips+Silicone+Oven+Mitt&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Heat resistant to 500°F", "Waterproof silicone", "Non-slip grip"],
    cons: ["Can be bulky"],
  },
  {
    name: "KitchenAid Premium Oven Mitts",
    price: "$19.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=KitchenAid+Premium+Oven+Mitts&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Cotton lining", "Long cuff for wrist protection", "Machine washable"],
    cons: ["Not fully silicone"],
  },
  {
    name: "Sulyn Premium Silicone Oven Mitts",
    price: "$15.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Sulyn+Premium+Silicone+Oven+Mitts&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Set of 2", "Textured surface", "Flexible and comfortable"],
    cons: ["Smaller fit"],
  },
  {
    name: "Homwe Professional Oven Mitts",
    price: "$24.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Homwe+Professional+Oven+Mitts&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Extra long 15-inch", "Heat resistant to 500°F", "Non-slip pattern"],
    cons: ["Thicker bulk"],
  },
  {
    name: "Amagabeli Oven Mitts Set",
    price: "$12.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Amagabeli+Oven+Mitts+Set&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable set", "Cotton and silicone combo", "Cute designs"],
    cons: ["Lower heat resistance"],
  },
];

export default function BestOvenMitts2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Kitchen Utensils</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 18, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/oven-mitts-2026.jpg" 
              alt="Best Oven Mitts 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Oven Mitts 2026: Complete Protection Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Keep your hands safe from high heat. We tested the top oven mitts to find the best protection for your kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Quality Oven Mitts Matter</h2>
            <p className="mb-4 text-stone-600">Oven mitts are your first line of defense against burns. Whether you're pulling a casserole from the oven or moving a hot pan on the stovetop, the right mitts can prevent painful injuries.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Oven Mitts</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Silicone</strong> - Waterproof, heat resistant to 500°F+, easy to clean</li>
              <li>• <strong>Fabric/Quilted</strong> - Comfortable, breathable, but can absorb moisture</li>
              <li>• <strong>Hybrid</strong> - Combines silicone grip with fabric backing for best of both</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: OXO Good Grips Silicone Oven Mitt</h2>
            <p className="mb-4 text-stone-600">The OXO silicone mitts offer exceptional heat protection up to 500°F while remaining waterproof and easy to clean. The non-slip grip ensures you can confidently handle hot cookware.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-stone-100">
                <div>
                  <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🧤</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800 font-medium">{product.name}</h3>
                      <span className="text-emerald-600 font-lato font-bold">{product.rating} ★</span>
                    </div>
                    <p className="text-stone-500 font-lato text-sm mb-3">{product.price}</p>
                    <div className="flex gap-4 text-sm">
                      <div className="text-stone-600">
                        <span className="font-bold text-emerald-600">Pros:</span> {product.pros.join(", ")}
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm mt-2">
                      <div className="text-stone-600">
                        <span className="font-bold text-red-500">Cons:</span> {product.cons.join(", ")}
                      </div>
                    </div>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg font-lato font-bold text-sm hover:bg-emerald-700 transition"
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <h3 className="font-playfair text-xl text-stone-800 mb-3">Final Verdict</h3>
          <p className="font-lato text-stone-600">
            The <strong>OXO Good Grips Silicone Oven Mitt</strong> is our top pick for 2026. It offers the best combination of heat protection, grip, and ease of cleaning at a reasonable price.
          </p>
        </div>
      </div>
    </div>
  );
}