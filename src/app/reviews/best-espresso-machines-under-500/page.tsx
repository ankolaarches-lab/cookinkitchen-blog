import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Espresso Machines Under $500 - 2026 Buying Guide",
  description: "Barista-quality espresso at home without breaking the bank. We tested the best espresso machines under $500 for beginners and enthusiasts.",
};

const products = [
  {
    name: "Breville Barista Express",
    price: "$479.95",
    rating: 4.8,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Breville+Barista+Express+BES870XL&tag=cookinkitchen-20",
    pros: ["Built-in grinder", "Digital temperature control", "Steam wand for milk", "Quick heat-up"],
    cons: ["Requires regular maintenance", "Learning curve"],
  },
  {
    name: "De'Longhi Dinamica Plus",
    price: "$449.99",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=DeLonghi+Dinamica+Plus+Automatic&tag=cookinkitchen-20",
    pros: ["One-touch drinks", "Customizable beverages", "Automatic milk frother", "Silent grinder"],
    cons: ["Limited espresso customization", "Bulkier design"],
  },
  {
    name: "Nespresso VertuoPlus",
    price: "$229.00",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=Nespresso+VertuoPlus++Deluxe&tag=cookinkitchen-20",
    pros: ["Easy to use", "Quick heat-up", "Compact", "Great espresso variety"],
    cons: ["Pods required", "Not true espresso"],
  },
  {
    name: "Breville Barista Impress",
    price: "$449.95",
    rating: 4.7,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=Breville+Barista+Impress+BES885BSS&tag=cookinkitchen-20",
    pros: ["Assisted tamping", "PID temperature", "Auto-milk frothing", "Barista guidance"],
    cons: ["Complex for beginners", "Higher price point"],
  },
  {
    name: "Philips 5400 LatteGo",
    price: "$499.99",
    rating: 4.6,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=Philips+5400+LatteGo+EP5447&tag=cookinkitchen-20",
    pros: ["Automatic LatteGo system", "12 coffee options", "Silent operation", "Easy cleaning"],
    cons: ["No built-in grinder", "Plastic components"],
  },
  {
    name: "Casabrews Espresso Machine",
    price: "$159.99",
    rating: 4.4,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=Casabrews+Espresso+Machine+20+Bar&tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Compact size", "Steam wand included", "Quick start"],
    cons: ["No built-in grinder", "Inconsistent temperature", "Limited durability"],
  },
];

export default function BestEspressoMachinesUnder500() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 15, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/espresso-machine.jpg" 
              alt="Best Espresso Machines Under $500" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Espresso Machines Under $500: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Barista-quality espresso at home without breaking the bank. We tested the top machines for every skill level.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Buy an Espresso Machine?</h2>
            <p className="mb-4 text-stone-600">Nothing beats the convenience of freshly brewed espresso in your own kitchen. Whether you're a coffee enthusiast looking to master latte art or just want great coffee without the café price tag, a quality espresso machine transforms your morning routine.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Built-in Grinder</strong> - Freshly ground beans make a huge difference in taste</li>
              <li>• <strong>PID Temperature Control</strong> - Consistent water temperature for optimal extraction</li>
              <li>• <strong>Steam Wand</strong> - Essential for milk-based drinks like lattes and cappuccinos</li>
              <li>• <strong>Ease of Cleaning</strong> - Look for removable, dishwasher-safe components</li>
              <li>• <strong>Learning Curve</strong> - Some machines are more beginner-friendly than others</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Breville Barista Express</h2>
            <p className="mb-4 text-stone-600">The Breville Barista Express remains our top pick for its perfect balance of features, quality, and price. The built-in conical burr grinder delivers consistent grounds, while the digital temperature control ensures optimal extraction every time. It's the best overall choice for home baristas.</p>
          </div>
        </article>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Quick Comparison</h2>
          <table className="w-full bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
            <thead className="bg-stone-50">
              <tr>
                <th className="text-left p-4 font-lato text-stone-600 font-medium">Machine</th>
                <th className="text-left p-4 font-lato text-stone-600 font-medium">Price</th>
                <th className="text-left p-4 font-lato text-stone-600 font-medium">Rating</th>
                <th className="text-left p-4 font-lato text-stone-600 font-medium">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-stone-100">
                <td className="p-4 font-lato text-stone-800">Breville Barista Express</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$479.95</td>
                <td className="p-4 font-lato text-emerald-500">4.8 ★</td>
                <td className="p-4 font-lato text-stone-600">Best Overall</td>
              </tr>
              <tr className="border-t border-stone-100 bg-stone-50">
                <td className="p-4 font-lato text-stone-800">De'Longhi Dinamica Plus</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$449.99</td>
                <td className="p-4 font-lato text-emerald-500">4.7 ★</td>
                <td className="p-4 font-lato text-stone-600">Convenience</td>
              </tr>
              <tr className="border-t border-stone-100">
                <td className="p-4 font-lato text-stone-800">Nespresso VertuoPlus</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$229.00</td>
                <td className="p-4 font-lato text-emerald-500">4.6 ★</td>
                <td className="p-4 font-lato text-stone-600">Beginners</td>
              </tr>
              <tr className="border-t border-stone-100 bg-stone-50">
                <td className="p-4 font-lato text-stone-800">Breville Barista Impress</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$449.95</td>
                <td className="p-4 font-lato text-emerald-500">4.7 ★</td>
                <td className="p-4 font-lato text-stone-600">Assisted Brewing</td>
              </tr>
              <tr className="border-t border-stone-100">
                <td className="p-4 font-lato text-stone-800">Philips 5400 LatteGo</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$499.99</td>
                <td className="p-4 font-lato text-emerald-500">4.6 ★</td>
                <td className="p-4 font-lato text-stone-600">Latte Lovers</td>
              </tr>
              <tr className="border-t border-stone-100 bg-stone-50">
                <td className="p-4 font-lato text-stone-800">Casabrews Espresso Machine</td>
                <td className="p-4 font-lato text-emerald-600 font-bold">$159.99</td>
                <td className="p-4 font-lato text-emerald-500">4.4 ★</td>
                <td className="p-4 font-lato text-stone-600">Budget</td>
              </tr>
            </tbody>
          </table>
        </div>

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
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Brew?</h3>
          <p className="font-lato text-stone-600 mb-6">Invest in a quality espresso machine and enjoy café-quality drinks from the comfort of home.</p>
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
            <a href="/reviews/best-coffee-grinders-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Coffee Grinders</h4>
              <p className="text-xs text-stone-500 mt-1">Freshly ground coffee</p>
            </a>
            <a href="/reviews/best-drip-coffee-makers-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Drip Coffee Makers</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect morning brew</p>
            </a>
            <a href="/reviews/best-toasters-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Toasters</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect toast every time</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
