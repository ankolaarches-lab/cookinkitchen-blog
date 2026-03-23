import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Pizza Ovens 2026 - Complete Buying Guide",
  description: "Make restaurant-quality pizza at home with the best pizza ovens. We tested gas, electric, and wood-fired pizza ovens for every budget.",
};

const products = [
  {
    name: "Ooni Koda 12 Pizza Oven",
    price: "$349.00",
    rating: 4.8,
    image: "/images/kitchen/7.jpg",
    link: "https://www.amazon.com/s?k=Ooni+Koda+12+Pizza+Oven&tag=cookinkitchen-20",
    pros: ["Heats to 932°F in 15 minutes", "Compact and portable", "Gas-powered convenience"],
    cons: ["Requires gas tank", "Small cooking area"],
  },
  {
    name: "Breville Pizza Oven",
    price: "$599.95",
    rating: 4.7,
    image: "/images/kitchen/8.jpg",
    link: "https://www.amazon.com/s?k=Breville+Smart+Oven+Pizza&tag=cookinkitchen-20",
    pros: ["Cordial technology", "Large capacity", "Multiple cooking functions"],
    cons: ["Expensive", "Takes up counter space"],
  },
  {
    name: "Ooni Frya 12",
    price: "$449.00",
    rating: 4.6,
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/s?k=Ooni+Frya+12&tag=cookinkitchen-20",
    pros: ["Wood-fired flavor", "Runs on wood pellets", "Excellent heat retention"],
    cons: ["Needs pellet supply", "More smoke"],
  },
  {
    name: "Ninja Woodfire Electric Oven",
    price: "$299.99",
    rating: 4.5,
    image: "/images/kitchen/10.jpg",
    link: "https://www.amazon.com/s?k=Ninja+Woodfire+Electric+Oven&tag=cookinkitchen-20",
    pros: ["Electric - no gas needed", "Woodfire technology", "Versatile cooking"],
    cons: ["Requires electricity", "Smaller pizza size"],
  },
  {
    name: "BakerStone Pizza Oven Box",
    price: "$149.99",
    rating: 4.4,
    image: "/images/kitchen/11.jpg",
    link: "https://www.amazon.com/s?k=BakerStone+Pizza+Oven+Box&tag=cookinkitchen-20",
    pros: ["Fits on grill or stove", "Affordable", "Creates crispy crust"],
    cons: ["Needs grill or stove", "Not as hot as dedicated ovens"],
  },
  {
    name: "Pizzacraft PizzaQue Pizza Oven",
    price: "$129.99",
    rating: 4.3,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Pizzacraft+PizzaQue&tag=cookinkitchen-20",
    pros: ["Fits on grill", " Affordable option", "Good for beginners"],
    cons: ["Limited temperature", "Requires grill"],
  },
];

export default function BestPizzaOvens2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 21, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/pizza-stone.jpg" 
              alt="Best Pizza Ovens 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Pizza Ovens 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Bring the pizzeria to your backyard. We tested the top pizza ovens to help you make perfect pizza at home.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Dedicated Pizza Oven</h2>
            <p className="mb-4 text-stone-600">Regular home ovens max out around 500°F, but real Neapolitan pizza needs 800-900°F to get that perfect crispy crust with leopard-spotted char. A dedicated pizza oven reaches these temperatures in minutes, giving you authentic results.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Pizza Ovens</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Gas-powered</strong> - Convenient, easy to control, like the Ooni Koda</li>
              <li>• <strong>Wood-fired</strong> - Authentic smoky flavor, like the Ooni Frya</li>
              <li>• <strong>Electric</strong> - Great for indoor use, like the Breville</li>
              <li>• <strong>Grill attachments</strong> - Budget-friendly, uses your existing grill</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Temperature</strong> - Higher is better for authentic Neapolitan</li>
              <li>• <strong>Heat-up time</strong> - Less wait means more pizza</li>
              <li>• <strong>Fuel type</strong> - Gas, wood pellets, or electric</li>
              <li>• <strong>Cooking surface</strong> - Stone, steel, or cordierite</li>
              <li>• <strong>Portability</strong> - Fixed vs. portable for outdoor use</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Ooni Koda 12 Pizza Oven</h2>
            <p className="mb-4 text-stone-600">The Ooni Koda 12 wins our top pick with its unbeatable combination of speed, temperature, and convenience. It reaches 932°F in just 15 minutes, cooks a 12-inch pizza in 60 seconds, and runs on readily available propane. The folding door helps retain heat while the cordierite stone gives you that perfect crispy crust.</p>
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
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-playfair text-xl text-stone-800 mb-4">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-lato">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-2 text-stone-600">Oven</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Ooni Koda 12</td>
                  <td className="py-3 px-2">$349.00</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Overall best</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Breville Pizza Oven</td>
                  <td className="py-3 px-2">$599.95</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Indoor use</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Ooni Frya 12</td>
                  <td className="py-3 px-2">$449.00</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Wood-fired flavor</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Ninja Woodfire</td>
                  <td className="py-3 px-2">$299.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Electric convenience</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">BakerStone Box</td>
                  <td className="py-3 px-2">$149.99</td>
                  <td className="py-3 px-2">4.4★</td>
                  <td className="py-3 px-2">Budget grill option</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">Pizzacraft PizzaQue</td>
                  <td className="py-3 px-2">$129.99</td>
                  <td className="py-3 px-2">4.3★</td>
                  <td className="py-3 px-2">Beginners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Pizza Night, Elevated</h3>
          <p className="font-lato text-stone-600 mb-6">A dedicated pizza oven transforms your backyard into a pizzeria. Pick one that fits your space and fuel preference, and enjoy restaurant-quality pizza at home.</p>
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
            <a href="/reviews/best-pizza-stones-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Pizza Stones</h4>
              <p className="text-xs text-stone-500 mt-1">Crispier crusts</p>
            </a>
            <a href="/reviews/best-air-fryers-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Air Fryers</h4>
              <p className="text-xs text-stone-500 mt-1">Crispy without the oil</p>
            </a>
            <a href="/reviews/best-cookware-sets-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Cookware Sets</h4>
              <p className="text-xs text-stone-500 mt-1">Complete your kitchen</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
