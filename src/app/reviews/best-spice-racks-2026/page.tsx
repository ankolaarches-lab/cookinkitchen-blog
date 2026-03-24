import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Spice Racks 2026 - Complete Buying Guide",
  description: "Organize your kitchen with the best spice racks of 2026. We tested wall-mounted, drawer, and countertop organizers to find the perfect solution for your spices.",
};

const products = [
  {
    name: "Simple Houseware 2-Tier Spice Rack",
    price: "$24.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=Simple+Houseware+2-Tier+Spice+Rack&tag=cookinkitchen-20",
    pros: ["Compact 2-tier design", "Fits most cabinets", " Affordable", "Durable metal construction"],
    cons: ["Limited capacity", "No rotation"],
  },
  {
    name: "Orii 20 Jar Revolving Spice Rack",
    price: "$49.99",
    rating: 4.5,
    link: "https://www.amazon.com/s?k=Orii+20+Jar+Revolving+Spice+Rack&tag=cookinkitchen-20",
    pros: ["20 jars included", "Rotating base", "Stainless steel", "Space-saving"],
    cons: ["Takes counter space", "Glass jars can break"],
  },
  {
    name: "Oizeir Clear Spice Rack",
    price: "$19.99",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=Oizeir+Clear+Spice+Rack&tag=cookinkitchen-20",
    pros: ["3-tier acrylic", "Clear visibility", "Stackable design", "Modern look"],
    cons: ["Acrylic can scratch", "Assembly required"],
  },
  {
    name: "Mystozer Wall-Mounted Spice Rack",
    price: "$29.99",
    rating: 4.4,
    link: "https://www.amazon.com/s?k=Mystozer+Wall-Mounted+Spice+Rack&tag=cookinkitchen-20",
    pros: ["Saves counter space", "Easy wall mount", "Modern black finish", "3 size options"],
    cons: ["Requires installation", "Limited to wall space"],
  },
  {
    name: "YouCopia StoreMore Spice Organizer",
    price: "$18.99",
    rating: 4.5,
    link: "https://www.amazon.com/s?k=YouCopia+StoreMore+Spice+Organizer&tag=cookinkitchen-20",
    pros: ["Expandable", "Fits in drawers", "No tools needed", "Adjustable compartments"],
    cons: ["Drawer space required", "May not fit all containers"],
  },
];

export default function BestSpiceRacks2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Kitchen Utensils</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 14, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/salad-spinner.jpg" 
              alt="Best Spice Racks 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Spice Racks 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">A well-organized spice collection makes cooking easier and more enjoyable. We tested the top spice racks to find the perfect organizer for every kitchen layout and budget.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Spice Rack</h2>
            <p className="mb-4 text-stone-600">Hidden spices mean forgotten flavors. A good spice rack keeps your seasonings visible, accessible, and organized—so you actually use them instead of letting them fade in the back of a cabinet.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Spice Racks</h2>
            <h3 className="font-playfair text-xl text-stone-800 mt-6 mb-3">Countertop Spice Racks</h3>
            <p className="mb-4 text-stone-600">Perfect for those who want spices always within reach. These range from simple tiered designs to elegant rotating towers. Great for larger spice collections.</p>
            
            <h3 className="font-playfair text-xl text-stone-800 mt-6 mb-3">Wall-Mounted Racks</h3>
            <p className="mb-4 text-stone-600">Ideal for saving counter and cabinet space. These mount directly to your wall, keeping spices visible while freeing up valuable workspace.</p>
            
            <h3 className="font-playfair text-xl text-stone-800 mt-6 mb-3">Drawer Organizers</h3>
            <p className="mb-4 text-stone-600">Best for keeping spices hidden but organized. These slide-in organizers maximize cabinet space and keep everything neatly arranged.</p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Capacity</strong> - Consider how many spices you need to store</li>
              <li>• <strong>Size</strong> - Make sure it fits your available space</li>
              <li>• <strong>Visibility</strong> - Clear jars or open designs help find spices quickly</li>
              <li>• <strong>Durability</strong> - Metal and glass last longer than plastic</li>
              <li>• <strong>Ease of access</strong> - Rotating or tiered designs improve accessibility</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Simple Houseware 2-Tier Spice Rack</h2>
            <p className="mb-4 text-stone-600">The Simple Houseware 2-Tier Spice Rack earns our top pick with its perfect balance of affordability, durability, and functionality. The two-tier design maximizes vertical space while keeping spices visible and accessible. Its compact size fits most cabinets while holding a generous number of spice jars.</p>
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
                  <th className="text-left py-3 px-2 text-stone-600">Spice Rack</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Simple Houseware 2-Tier</td>
                  <td className="py-3 px-2">$24.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Countertop</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Orii 20 Jar Revolving</td>
                  <td className="py-3 px-2">$49.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Rotating Tower</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Oizeir Clear 3-Tier</td>
                  <td className="py-3 px-2">$19.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Countertop</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Mystozer Wall-Mounted</td>
                  <td className="py-3 px-2">$29.99</td>
                  <td className="py-3 px-2">4.4★</td>
                  <td className="py-3 px-2">Wall-Mount</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">YouCopia Drawer Organizer</td>
                  <td className="py-3 px-2">$18.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Drawer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Organize Your Spices Today</h3>
          <p className="font-lato text-stone-600 mb-6">A good spice rack transforms your cooking. Whether you prefer countertop convenience or space-saving wall storage, the right organizer brings your spices front and center.</p>
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
            <a href="/reviews/best-kitchen-organizers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Organizers</h4>
              <p className="text-xs text-stone-500 mt-1">Declutter your kitchen</p>
            </a>
            <a href="/reviews/best-salt-pepper-grinders" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Salt & Pepper Grinders</h4>
              <p className="text-xs text-stone-500 mt-1">Season like a pro</p>
            </a>
            <a href="/reviews/best-kitchen-utensils-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Utensils</h4>
              <p className="text-xs text-stone-500 mt-1">Essential tools for cooking</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
