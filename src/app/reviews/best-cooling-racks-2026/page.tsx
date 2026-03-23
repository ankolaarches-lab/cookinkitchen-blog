import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Cooling Racks 2026 - Complete Buying Guide",
  description: "Find the best cooling racks for your baked goods. We tested wire racks, chrome, and non-stick options for cookies, cakes, and breads.",
};

const products = [
  {
    name: "Nordic Ware Natural Aluminum Commercial Baker's Half Sheet",
    price: "$24.99",
    rating: 4.9,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Nordic+Ware+Natural+Aluminum+Commercial+Bakers+Half+Sheet&tag=cookinkitchen-20",
    pros: ["Excellent heat distribution", "Heavy-duty construction", "Fits standard half sheet pans"],
    cons: ["No crossbar support"],
  },
  {
    name: "Wilton Premium Cool Set",
    price: "$18.97",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Wilton+Premium+Cool+Set+3+Piece&tag=cookinkitchen-20",
    pros: ["3 sizes included", "Non-stick coating", "Great value"],
    cons: ["Smaller sizing"],
  },
  {
    name: "USA Pan Bakeware Half Sheet Non-Stick Cooling Rack",
    price: "$29.99",
    rating: 4.8,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=USA+Pan+Bakeware+Half+Sheet+Non+Stick+Cooling+Rack&tag=cookinkitchen-20",
    pros: ["Non-stick coating", "FDA approved", "Industrial strength"],
    cons: ["Pricey"],
  },
  {
    name: "Cooling Rack by Great Premium - Heavy Duty Square Wire Rack",
    price: "$15.99",
    rating: 4.6,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=Cooling+Rack+Great+Premium+Heavy+Duty+Square+Wire+Rack&tag=cookinkitchen-20",
    pros: ["12x12 inch size", "Chrome plated", "Affordable"],
    cons: ["May discolor over time"],
  },
  {
    name: "Amazon Basics Non-Stick Wire Cooling Rack",
    price: "$12.99",
    rating: 4.5,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=Amazon+Basics+Non+Stick+Wire+Cooling+Rack&tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Non-stick coating", "Dishwasher safe"],
    cons: ["Smaller than standard"],
  },
];

export default function BestCoolingRacks2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Baking Supplies</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 22, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/cooling-rack-hero.jpg" 
              alt="Best Cooling Racks 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Cooling Racks 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Every baker knows the difference between a perfectly cooled cookie and a soggy one. We tested the top cooling racks to find the best for your kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Good Cooling Rack</h2>
            <p className="mb-4 text-stone-600">Cooling racks allow air to circulate around your baked goods, preventing condensation from making cookies soft and allowing cakes to cool evenly. Without proper airflow, you'll end up with soggy bottoms and uneven cooling.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Material</strong> - Chrome, stainless steel, or non-stick coated</li>
              <li>• <strong>Size</strong> - Should fit your standard baking sheets</li>
              <li>• <strong>Grid pattern</strong> - Tighter grids support delicate items better</li>
              <li>• <strong>Height</strong> - Higher legs = better airflow</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Nordic Ware Natural Aluminum</h2>
            <p className="mb-4 text-stone-600">The Nordic Ware Natural Aluminum Commercial Baker's Half Sheet is our top pick for serious bakers. Its heavy-duty construction provides excellent support, and the natural aluminum distributes heat evenly. It's the professional choice that fits perfectly with standard half sheet pans.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
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
        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-stone-100">
              <thead>
                <tr className="border-b border-stone-100">
                  <th className="text-left p-4 font-lato text-stone-500 text-sm">Product</th>
                  <th className="text-left p-4 font-lato text-stone-500 text-sm">Price</th>
                  <th className="text-left p-4 font-lato text-stone-500 text-sm">Rating</th>
                  <th className="text-left p-4 font-lato text-stone-500 text-sm">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-50">
                  <td className="p-4 font-lato text-stone-800">Nordic Ware Natural Aluminum</td>
                  <td className="p-4 font-lato text-stone-600">$24.99</td>
                  <td className="p-4 text-emerald-500">4.9</td>
                  <td className="p-4 font-lato text-stone-600">Professional baking</td>
                </tr>
                <tr className="border-b border-stone-50">
                  <td className="p-4 font-lato text-stone-800">Wilton Premium Cool Set</td>
                  <td className="p-4 font-lato text-stone-600">$18.97</td>
                  <td className="p-4 text-emerald-500">4.7</td>
                  <td className="p-4 font-lato text-stone-600">Value & versatility</td>
                </tr>
                <tr className="border-b border-stone-50">
                  <td className="p-4 font-lato text-stone-800">USA Pan Non-Stick</td>
                  <td className="p-4 font-lato text-stone-600">$29.99</td>
                  <td className="p-4 text-emerald-500">4.8</td>
                  <td className="p-4 font-lato text-stone-600">Easy release</td>
                </tr>
                <tr className="border-b border-stone-50">
                  <td className="p-4 font-lato text-stone-800">Great Premium Square Rack</td>
                  <td className="p-4 font-lato text-stone-600">$15.99</td>
                  <td className="p-4 text-emerald-500">4.6</td>
                  <td className="p-4 font-lato text-stone-600">Square pan support</td>
                </tr>
                <tr>
                  <td className="p-4 font-lato text-stone-800">Amazon Basics Non-Stick</td>
                  <td className="p-4 font-lato text-stone-600">$12.99</td>
                  <td className="p-4 text-emerald-500">4.5</td>
                  <td className="p-4 font-lato text-stone-600">Budget option</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Cool Your Baked Goods Properly</h3>
          <p className="font-lato text-stone-600 mb-6">A quality cooling rack is an essential tool for any baker. Invest in one and never serve soggy cookies again.</p>
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
            <a href="/reviews/best-baking-sheets-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Baking Sheets</h4>
              <p className="text-xs text-stone-500 mt-1">Complete your baking setup</p>
            </a>
            <a href="/reviews/best-cookie-sheets" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Cookie Sheets</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect for cookies</p>
            </a>
            <a href="/reviews/best-rolling-pins" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Rolling Pins</h4>
              <p className="text-xs text-stone-500 mt-1">For perfect dough</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}