import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Stockpots 2026 - Complete Buying Guide",
  description: "From soups to pasta, find the best stockpots of 2026. We tested stainless steel, aluminum, and enameled options from top brands.",
};

const products = [
  {
    name: "Cuisinart Chef's Classic 12-Quart Stockpot",
    price: "$89.99",
    rating: 4.7,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/Cuisinart-Chef-Classic-Stainless-Steel/dp/B001UC9E5G?tag=cookinkitchen-20",
    pros: ["Tri-ply construction", "Cool-touch handles", "Dishwasher safe", "Excellent heat distribution"],
    cons: ["Heavy when full", "No measuring marks"],
  },
  {
    name: "Rachael Ray Nonstick 12-Quart Stockpot",
    price: "$64.99",
    rating: 4.5,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/Rachael-Ray-Nonstick-12-Quart-Stockpot/dp/B001KB4KBQ?tag=cookinkitchen-20",
    pros: ["Nonstick easy release", "Vibrant color options", "Tempered glass lid", "Affordable"],
    cons: ["Not for metal utensils", "Hand wash recommended"],
  },
  {
    name: "T-fal Ultimate Hard Anodized 12.5-Quart Stockpot",
    price: "$99.99",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/T-fal-Ultimate-Hard-Anodized-Stockpot/dp/B00DQ1PLQQ?tag=cookinkitchen-20",
    pros: ["Hard anodized aluminum", "Thermo-Spot indicator", "Oven safe", "Durable construction"],
    cons: ["Weighty", "Nonstick coating can wear"],
  },
  {
    name: "Instant Pot Stainless Steel 6-Quart",
    price: "$89.95",
    rating: 4.7,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/Instant-Pot-Stainless-Steel-Multi-Cooker/dp/B01ARFV2K2?tag=cookinkitchen-20",
    pros: ["Multi-cooker function", "Pressure cooking", "Durable steel", "Programmable"],
    cons: ["Smaller capacity", "More complex to use"],
  },
  {
    name: "AmazonBasics Stainless Steel Stockpot - 12 Quart",
    price: "$49.99",
    rating: 4.4,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/AmazonBasics-Stainless-Stockpot-12-Quart/dp/B01KHS5C6G?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Tri-ply bottom", "Mirror finish", "Amazon bestseller"],
    cons: ["Basic design", "Mixed durability reports"],
  },
];

export default function BestStockpots2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/5.jpg" 
              alt="Best Stockpots 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Stockpots 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From hearty soups to perfectly cooked pasta, a quality stockpot is essential. We tested the top stockpots to find the best for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Good Stockpot</h2>
            <p className="mb-4 text-stone-600">A stockpot is one of the most versatile pieces of cookware in any kitchen. Whether you're making homemade stock, boiling pasta, preparing large batches of soup, or even canning, having the right stockpot makes all the difference.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Capacity</strong> - 8-12 quarts ideal for most households</li>
              <li>• <strong>Material</strong> - Stainless steel offers durability, nonstick for easy cleanup</li>
              <li>• <strong>Heat Distribution</strong> - Tri-ply or clad bottoms ensure even cooking</li>
              <li>• <strong>Handles</strong> - Look for sturdy, cool-touch handles</li>
              <li>• <strong>Lid</strong> - Tempered glass lets you monitor cooking without removing</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Cuisinart Chef's Classic</h2>
            <p className="mb-4 text-stone-600">The Cuisinart Chef's Classic 12-Quart Stockpot stands out with its tri-ply construction providing excellent heat distribution. The cool-touch handles make it safe and easy to handle, while the dishwasher-safe design simplifies cleanup.</p>
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
              <p className="text-stone-600">Cuisinart Chef's Classic - Premium construction and excellent performance</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Nonstick</h3>
              <p className="text-stone-600">Rachael Ray Nonstick - Easy release and vibrant colors</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Value</h3>
              <p className="text-stone-600">AmazonBasics - Great price for solid performance</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Most Versatile</h3>
              <p className="text-stone-600">Instant Pot - Multiple cooking functions in one</p>
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
