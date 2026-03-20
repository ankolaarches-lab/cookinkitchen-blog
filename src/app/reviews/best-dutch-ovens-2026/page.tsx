import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dutch Ovens 2026 - Complete Buying Guide",
  description: "Find the perfect Dutch oven for your kitchen in 2026. We tested top-rated enameled cast iron, raw cast iron, and stainless steel options from Lodge, Le Creuset, and more.",
  openGraph: {
    title: "Best Dutch Ovens 2026 - Complete Buying Guide",
    description: "Find the perfect Dutch oven. We tested enameled cast iron, raw cast iron, and stainless steel from Lodge, Le Creuset.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/dutch-ovens-2026.jpg"],
  },
};

const products = [
  {
    name: "Le Creuset Enameled Cast Iron Dutch Oven, 5.5 Qt",
    price: "$379.95",
    rating: 4.9,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Le+Creuset+Enameled+5+5+Quart+Signature&tag=cookinkitchen-20",
    pros: ["Exceptional heat retention", "Beautiful colors available", "Enameled interior resists staining", "Lifetime warranty", "Oven-safe to 500°F"],
    cons: ["Premium price", "Heavy (10+ lbs)", "Requires careful handling to avoid chipping"],
  },
  {
    name: "Lodge Enameled Cast Iron Dutch Oven, 6 Qt",
    price: "$99.99",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Lodge+Enameled+Cast+6+Quart+EC6D33&tag=cookinkitchen-20",
    pros: ["Excellent value", "Great heat distribution", "Dishwasher safe", "Wide color selection", "Made in USA"],
    cons: ["Not as refined as premium brands", "Can stain with certain foods"],
  },
  {
    name: "Staub Enameled Cast Iron Dutch Oven, 5.5 Qt",
    price: "$329.00",
    rating: 4.8,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=Staub+Enameled+5+5+Quart+Cocotte&tag=cookinkitchen-20",
    pros: ["Self-basting lid", "Black matte enamel interior", "Excellent browning", "Beautiful craftsmanship", "Great for braising"],
    cons: ["Expensive", "Heavy", "Matte interior requires seasoning"],
  },
  {
    name: "Amazon Basics Enameled Cast Iron Dutch Oven, 5.5 Qt",
    price: "$54.99",
    rating: 4.4,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=Amazon+Basics+Enameled+Cast+Dutch&tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Good basic performance", "Lightweight for size", "Easy to clean"],
    cons: ["Lower heat retention", "Limited color options", "Not as durable long-term"],
  },
  {
    name: "Lodge Pre-Seasoned Cast Iron Dutch Oven, 6 Qt",
    price: "$69.99",
    rating: 4.6,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=Lodge+Pre+Seasoned+Cast+Iron+Dutch&tag=cookinkitchen-20",
    pros: ["Natural nonstick seasoning", "Most affordable option", "Incredibly durable", "Versatile for baking bread", "No enamel to chip"],
    cons: ["Requires seasoning maintenance", "Can rust if not properly cared for", "Not dishwasher safe"],
  },
  {
    name: "Cuisinart Enameled Cast Iron Dutch Oven, 5.5 Qt",
    price: "$89.99",
    rating: 4.5,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=Cuisinart+Enameled+Cast+5+5+Quart&tag=cookinkitchen-20",
    pros: ["Affordable", "Good heat distribution", "Oven-safe", "Comfortable handles"],
    cons: ["Smaller handles", "Less-known brand reputation", "Mixed reviews on durability"],
  },
];

export default function BestDutchOvens2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 18, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/3.jpg" 
              alt="Best Dutch Ovens 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Dutch Ovens 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From slow-cooked stews to artisan bread, find the perfect Dutch oven for your cooking style. We tested the top enameled and raw cast iron options for 2026.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Dutch Oven</h2>
            <p className="mb-4 text-stone-600">A Dutch oven is one of the most versatile pieces of cookware you can own. Its thick walls and tight-fitting lid create a perfect environment for slow cooking, braising, soups, and even baking bread. The heavy construction ensures excellent heat distribution and retention, making it ideal for dishes that need hours of gentle cooking.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For in 2026</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Material</strong> - Enameled cast iron is low-maintenance; raw cast iron offers superior seasoning</li>
              <li>• <strong>Size</strong> - 5-6 quarts is ideal for most families; 4 qt for smaller households</li>
              <li>• <strong>Weight</strong> - Consider your strength; Dutch ovens are heavy when full</li>
              <li>• <strong>Interior</strong> - Enamel resists staining; matte black enamel browns better</li>
              <li>• <strong>Handles</strong> - Wide, sturdy handles make it easier to grip when full</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Le Creuset Enameled Cast Iron</h2>
            <p className="mb-4 text-stone-600">The Le Creuset 5.5 Qt Dutch Oven earns our top pick for its exceptional craftsmanship, beautiful design, and superior cooking performance. The enameled interior is resistant to staining and odors, making it perfect for everything from tomato-based sauces to sourdough bread. While it's an investment, the lifetime warranty and decades of durability make it worth every penny.</p>
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
                      <span className="text-emerald-500 font-bold">★ {product.rating}</span>
                    </div>
                    <div className="flex gap-4 text-sm mb-3">
                      <div>
                        <span className="text-emerald-600 font-medium">Pros:</span>
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
                <td className="p-4 font-lato text-stone-800">Le Creuset 5.5 Qt</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$379.95</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.9</td>
                <td className="p-4 font-lato text-stone-600">Premium quality</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Staub 5.5 Qt</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$329.00</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.8</td>
                <td className="p-4 font-lato text-stone-600">Braising & self-basting</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Lodge Enameled 6 Qt</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$99.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.7</td>
                <td className="p-4 font-lato text-stone-600">Best value</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-4 font-lato text-stone-800">Lodge Pre-Seasoned 6 Qt</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$69.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.6</td>
                <td className="p-4 font-lato text-stone-600">Bread baking</td>
              </tr>
              <tr>
                <td className="p-4 font-lato text-stone-800">Amazon Basics 5.5 Qt</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$54.99</td>
                <td className="p-4 font-lato text-emerald-500">★ 4.4</td>
                <td className="p-4 font-lato text-stone-600">Budget option</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-8">
          <h2 className="font-playfair text-2xl text-stone-800 mb-4">Best for Different Needs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Overall</h3>
              <p className="text-stone-600">Le Creuset - Unmatched quality with lifetime warranty</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Value</h3>
              <p className="text-stone-600">Lodge Enameled - Great performance at under $100</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best for Bread Baking</h3>
              <p className="text-stone-600">Lodge Pre-Seasoned - Natural nonstick for perfect crust</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best for Braising</h3>
              <p className="text-stone-600">Staub - Self-basting lid keeps meat incredibly moist</p>
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
