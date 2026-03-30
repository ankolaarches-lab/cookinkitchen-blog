import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Kitchen Faucets 2026 - Complete Buying Guide",
  description: "Upgrade your kitchen with the best faucets of 2026. We tested pull-down, pull-out, and touchless faucets from Moen, Delta, Kohler, and more.",
  openGraph: {
    title: "Best Kitchen Faucets 2026 - Complete Buying Guide",
    description: "Upgrade your kitchen with the best faucets. We tested pull-down, pull-out, and touchless faucets from Moen, Delta, Kohler.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/kitchen-faucets-2026.jpg"],
  },
};

const products = [
  {
    name: "Moen Arbor Pull-Down Kitchen Faucet",
    price: "$249.00",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Moen+Arbor+Pull+Down+Kitchen+Faucet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Power Clean spray technology", "Reflex dock system", "Spot Resist finish resists fingerprints", "Lifetime warranty"],
    cons: ["Higher price point", "Requires professional installation for some"],
  },
  {
    name: "Delta Faucet Leland Pull-Down Kitchen Faucet",
    price: "$229.00",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Delta+Faucet+Leland+Pull+Down+Kitchen&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Touch technology activation", "MagnaTite docking keeps spray head in place", "Shield Water technology", "Available in multiple finishes"],
    cons: ["Touch can be sensitive to water splashes"],
  },
  {
    name: "Kohler Simplice Pull-Down Kitchen Faucet",
    price: "$279.00",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Kohler+Simplice+Pull+Down+Kitchen+Faucet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["ProMotion technology for quiet operation", "MasterClean spray face", "Premium ceramic disc valves", "Sleek modern design"],
    cons: ["Premium pricing", "Limited color options"],
  },
  {
    name: "American Standard Pull-Down Kitchen Faucet",
    price: "$159.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=American+Standard+Pull+Down+Kitchen+Faucet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable premium option", "Two-function spray head", "Lead-free construction", "Easy deck mounting"],
    cons: ["Fewer features than competitors"],
  },
  {
    name: "WEWE Single Handle Pull-Down Kitchen Faucet",
    price: "$79.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=WEWE+Single+Handle+Pull+Down+Kitchen&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Budget-friendly", "Three spray modes", "Easy DIY installation", "Brushed nickel finish"],
    cons: ["Shorter warranty", "Less durable materials"],
  },
  {
    name: "Kohler Karbon Pull-Down Kitchen Faucet",
    price: "$549.00",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Kohler+Karbon+Pull+Down+Kitchen+Faucet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Articulating arm for ultimate reach", "Unique contemporary design", "Variable positioning", "Premium materials"],
    cons: ["Very high price", "Complex installation"],
  },
];

export default function BestKitchenFaucets2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Kitchen</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 16, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/kitchen-faucets-2026.jpg" 
              alt="Best Kitchen Faucets 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Kitchen Faucets 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Upgrade your kitchen with the best faucets. We tested pull-down, pull-out, and touchless models to find the perfect upgrade.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Upgrade Your Kitchen Faucet?</h2>
            <p className="mb-4 text-stone-600">A modern kitchen faucet does more than just dispense water. Today's faucets offer pull-down spray heads, touchless activation, water-saving features, and finishes that resist fingerprints and water spots.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Spray Function</strong> - Pull-down vs pull-out vs side spray</li>
              <li>• <strong>Activation</strong> - Traditional handle, touch, or motion sensor</li>
              <li>• <strong>Finish</strong> - Chrome, stainless, brushed nickel, matte black</li>
              <li>• <strong>Height</strong> - Consider your sink depth and window clearance</li>
              <li>• <strong>Installation</strong> - Single-hole vs three-hole mount</li>
              <li>• <strong>Water Efficiency</strong> - Look for EPA WaterSense certification</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Moen Arbor Pull-Down</h2>
            <p className="mb-4 text-stone-600">The Moen Arbor stands out with its Power Clean spray technology that delivers 50% more spray power than standard faucets. The Reflex dock system provides smooth retraction of the spray head, and the Spot Resist finish keeps fingerprints at bay.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800">{product.name}</h3>
                      <span className="font-lato text-emerald-600 font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-500 font-bold">★ {product.rating}</span>
                    </div>
                    <div className="flex gap-4 text-sm mb-3">
                      <div>
                        <span className="text-stone-500 font-medium">Pros:</span>
                        <ul className="text-stone-600">
                          {product.pros.slice(2).map((pro, i) => (
                            <li key={i}>✓ {pro}</li>
                          ))}
                        </ul>
                      </div>
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-8">
          <h2 className="font-playfair text-2xl text-stone-800 mb-4">Best for Different Needs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Overall</h3>
              <p className="text-stone-600">Moen Arbor Pull-Down - Best spray technology and finish</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Value</h3>
              <p className="text-stone-600">American Standard Pull-Down - Premium features at mid-range price</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Touch</h3>
              <p className="text-stone-600">Delta Faucet Leland - Reliable touch technology</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Budget</h3>
              <p className="text-stone-600">WEWE Single Handle - Great features for under $80</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/reviews" className="text-emerald-600 hover:text-emerald-700 font-lato font-medium">
            ← Browse All Kitchen Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
