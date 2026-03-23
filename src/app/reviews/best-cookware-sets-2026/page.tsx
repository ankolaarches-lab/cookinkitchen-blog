import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Cookware Sets 2026 - Complete Buying Guide",
  description: "We tested the best cookware sets for every budget. From ceramic to stainless steel, find your perfect cookware set.",
  openGraph: {
    title: "Best Cookware Sets 2026 - Complete Buying Guide",
    description: "We tested the best cookware sets for every budget. From ceramic nonstick to stainless steel and cast iron.",
    type: "article",
    publishedTime: "2026-03-18",
    authors: ["CookinKitchen"],
    images: ["/images/kitchen/3.jpg"],
  },
};

const products = [
  {
    name: "GreenPan Valencia Pro Ceramic Nonstick 11-Piece Set",
    price: "$199.99",
    rating: 4.7,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=GreenPan+Valencia+Pro+Ceramic+Nonstick+11+Piece+Set&tag=cookinkitchen-20",
    pros: ["Healthy ceramic coating", "Durable hard-anodized aluminum", "Safe for metal utensils", "Excellent nonstick performance"],
    cons: ["Ceramic coating wears over time", "Hand wash recommended"],
  },
  {
    name: "All-Clad HA1 Hard-Anodized Nonstick 10-Piece Set",
    price: "$349.99",
    rating: 4.8,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=All-Clad+HA1+Hard-Anodized+Nonstick+10+Piece+Set&tag=cookinkitchen-20",
    pros: ["Premium hard-anodized aluminum", "Safe for metal utensils", "Lifetime warranty", "Even heat distribution"],
    cons: ["Premium price", "Heavier than average"],
  },
  {
    name: "Calphalon Premier Hard-Anodized 10-Piece Set",
    price: "$279.99",
    rating: 4.6,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Calphalon+Premier+Hard-Anodized+10+Piece+Set&tag=cookinkitchen-20",
    pros: ["Triple-layer nonstick coating", "Durable hard-anodized construction", "Modern design", "Excellent cooking performance"],
    cons: ["Mid-range price", "Nonstick can wear with heavy use"],
  },
  {
    name: "Tramontina Tri-Ply Clad 10-Piece Stainless Steel Set",
    price: "$199.99",
    rating: 4.5,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=Tramontina+Tri-Ply+Clad+10+Piece+Stainless+Steel&tag=cookinkitchen-20",
    pros: ["Premium tri-ply construction", "Compatible with all stovetop types", "Dishwasher safe", "Excellent value"],
    cons: ["Requires learning curve for stainless steel", "Can be heavy"],
  },
  {
    name: "Lodge Pre-Seasoned Cast Iron 3-Piece Skillet Set",
    price: "$59.99",
    rating: 4.7,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=Lodge+Pre-Seasoned+Cast+Iron+3+Piece+Skillet+Set&tag=cookinkitchen-20",
    pros: ["Ultra-durable cast iron", "Naturally nonstick surface", "Compatible with all stovetops and ovens", "Exceptional value"],
    cons: ["Heavy", "Requires seasoning maintenance", "Not dishwasher safe"],
  },
];

export default function BestCookwareSets2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="mb-6">
            <Breadcrumbs items={[
              { label: 'Intelligence Hub', href: '/' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Best Cookware Sets 2026', href: '/reviews/best-cookware-sets-2026' }
            ]} />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 18, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/cookware-set.jpg" 
              alt="Best Cookware Sets 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Cookware Sets 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested and reviewed the top cookware sets to help you find the perfect balance of performance, durability, and value for your kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <p className="mb-4 text-stone-600">A great cookware set should include: even heat distribution, comfortable handles, compatibility with your stovetop, and durability that lasts for years.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Key Considerations</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Material</strong> — Stainless steel for versatility, cast iron for heat retention, ceramic for healthy nonstick cooking</li>
              <li>• <strong>Stovetop Compatibility</strong> — Make sure the set works with your cooktop (gas, electric, induction)</li>
              <li>• <strong>Piece Count</strong> — 10-12 pieces covers most cooking needs; avoid sets padded with lids and accessories</li>
              <li>• <strong>Oven Safety</strong> — Look for sets rated to at least 400°F for oven-to-table versatility</li>
              <li>• <strong>Warranty</strong> — A lifetime warranty signals manufacturer confidence in durability</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: GreenPan Valencia Pro</h2>
            <p className="mb-4 text-stone-600">The GreenPan Valencia Pro offers the best overall value with its healthy ceramic coating, excellent nonstick performance, and durable hard-anodized construction at a reasonable price point.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex gap-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800">{product.name}</h3>
                      <span className="font-lato text-emerald-600 font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-500 font-bold">★ {product.rating}/5</span>
                    </div>
                    <div className="text-sm mb-3">
                      <ul className="text-stone-600">
                        {product.pros.map((pro, i) => (
                          <li key={i}>✓ {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                    >
                      Check Price on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Comparison Table</h2>
          <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left p-4 font-lato text-stone-700">Product</th>
                <th className="text-left p-4 font-lato text-stone-700">Price</th>
                <th className="text-left p-4 font-lato text-stone-700">Rating</th>
                <th className="text-left p-4 font-lato text-stone-700">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">GreenPan Valencia Pro 11-Pc</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$199.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.7</td>
                <td className="p-4 font-lato text-stone-600">Best overall value</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">All-Clad HA1 10-Pc</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$349.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.8</td>
                <td className="p-4 font-lato text-stone-600">Premium quality</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Calphalon Premier 10-Pc</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$279.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.6</td>
                <td className="p-4 font-lato text-stone-600">Modern nonstick</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Tramontina Tri-Ply 10-Pc</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$199.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.5</td>
                <td className="p-4 font-lato text-stone-600">Best stainless steel value</td>
              </tr>
              <tr>
                <td className="p-4 font-lato text-stone-800">Lodge Cast Iron 3-Pc</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$59.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.7</td>
                <td className="p-4 font-lato text-stone-600">Budget durability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-8">
          <h2 className="font-playfair text-2xl text-stone-800 mb-4">Best for Different Needs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Overall</h3>
              <p className="text-stone-600">GreenPan Valencia Pro — Healthy ceramic nonstick at great value</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Premium</h3>
              <p className="text-stone-600">All-Clad HA1 — Professional-grade with lifetime warranty</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Value</h3>
              <p className="text-stone-600">Tramontina Tri-Ply — Restaurant quality at home-cook prices</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Most Durable</h3>
              <p className="text-stone-600">Lodge Cast Iron — Virtually indestructible, lasts generations</p>
            </div>
          </div>
        </div>

        {/* Related Reviews */}
        <div className="mt-12">
          <h3 className="font-playfair text-xl text-stone-800 mb-4">You Might Also Like</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/reviews/best-dutch-ovens-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Dutch Ovens 2026</h4>
              <p className="text-xs text-stone-500 mt-1">For braising & baking</p>
            </a>
            <a href="/reviews/best-nonstick-pan" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Non-Stick Pans</h4>
              <p className="text-xs text-stone-500 mt-1">Easy-release cooking</p>
            </a>
            <a href="/reviews/best-cast-iron-skillet-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Cast Iron Skillets</h4>
              <p className="text-xs text-stone-500 mt-1">Built to last forever</p>
            </a>
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
