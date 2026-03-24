import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Rice Cookers 2026 - Ultimate Buying Guide",
  description: "Perfect rice every time. We tested the best rice cookers from Zojirushi, Instant Pot, Tiger, and more for fluffy grains.",
};

const products = [
  {
    name: "Zojirushi NS-LAC05XT Neuro Fuzzy Rice Cooker",
    price: "$99.95",
    rating: 4.9,
    link: "https://www.amazon.com/s?k=Zojirushi+NS-LAC05XT&tag=cookinkitchen-20",
    pros: ["Fuzzy logic technology", "Compact size", "Multiple settings", "Keep warm function"],
    cons: ["Higher price", "No quick cook mode"],
  },
  {
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: "$89.95",
    rating: 4.8,
    link: "https://www.amazon.com/s?k=Instant+Pot+Duo&tag=cookinkitchen-20",
    pros: ["Multi-functional", "Rice cooking mode", "Programmable", "Safety features"],
    cons: ["Learning curve", "More buttons to navigate"],
  },
  {
    name: "Tiger JKT-S10U 5.5-Cup Rice Cooker",
    price: "$149.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=Tiger+JKT-S10U&tag=cookinkitchen-20",
    pros: ["Induction heating", "T，操作面板", "Multiple rice types", "Timer function"],
    cons: ["Premium price", "Larger footprint"],
  },
  {
    name: "Hamilton Beach 30865A Digital Rice Cooker",
    price: "$34.99",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=Hamilton+Beach+30865A&tag=cookinkitchen-20",
    pros: ["Affordable", "Digital controls", "Keep warm", "Steam function"],
    cons: ["Basic features", "Smaller capacity"],
  },
  {
    name: "Aroma Housewares ARC-914SBD 8-Cup Rice Cooker",
    price: "$39.99",
    rating: 4.5,
    link: "https://www.amazon.com/s?k=Aroma+ARC-914SBD&tag=cookinkitchen-20",
    pros: ["Large capacity", "Steam function", "Affordable", "Easy to clean"],
    cons: ["Noisy operation", "Basic design"],
  },
  {
    name: "Panasonic SR-DF101 5-Cup Rice Cooker",
    price: "$59.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=Panasonic+SR-DF101&tag=cookinkitchen-20",
    pros: ["Fuzzy logic", "Compact", "Multiple cooking options", "Durable"],
    cons: ["Limited capacity", "Basic display"],
  },
];

export default function BestRiceCookers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 12, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/rice-cooker.jpg" 
              alt="Best Rice Cookers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Rice Cookers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Perfect rice, every single time. We tested the top rice cookers to find the best options for every kitchen and budget.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Rice Cooker</h2>
            <p className="mb-4 text-stone-600">A good rice cooker does far more than just cook rice. It takes the guesswork out of perfect fluffy grains, keeps food warm until you're ready to eat, and many models can handle everything from quinoa to oatmeal to steamed vegetables.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Cooking technology</strong> - Basic, fuzzy logic, or induction heating</li>
              <li>• <strong>Capacity</strong> - Consider your household size (1-10 cups raw rice)</li>
              <li>• <strong>Special features</strong> - Keep warm, timer, steam function</li>
              <li>• <strong>Rice types</strong> - Some handle multiple grain types better</li>
              <li>• <strong>Size</strong> - Countertop space matters</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Rice Cookers</h2>
            <p className="mb-4 text-stone-600"><strong>Basic rice cookers</strong> use simple on/off technology. They're affordable and work well for standard white rice.</p>
            <p className="mb-4 text-stone-600"><strong>Fuzzy logic cookers</strong> (like Zojirushi) adjust cooking time and temperature automatically for better results with different rice types.</p>
            <p className="mb-4 text-stone-600"><strong>Induction heating</strong> provides the most even heat distribution for restaurant-quality results but come at a premium price.</p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Zojirushi NS-LAC05XT Neuro Fuzzy</h2>
            <p className="mb-4 text-stone-600">The Zojirushi Neuro Fuzzy earns our top pick with its intelligent "fuzzy logic" technology that makes micro-adjustments during cooking. It's compact, durable, and consistently produces perfect rice. While the price is higher, the results justify the investment for anyone who eats rice regularly.</p>
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
                  <th className="text-left py-3 px-2 text-stone-600">Rice Cooker</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Zojirushi Neuro Fuzzy</td>
                  <td className="py-3 px-2">$99.95</td>
                  <td className="py-3 px-2">4.9★</td>
                  <td className="py-3 px-2">Overall best</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Instant Pot Duo</td>
                  <td className="py-3 px-2">$89.95</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Multi-use</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Tiger JKT-S10U</td>
                  <td className="py-3 px-2">$149.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Premium cooking</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Hamilton Beach</td>
                  <td className="py-3 px-2">$34.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Budget-friendly</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Aroma Housewares</td>
                  <td className="py-3 px-2">$39.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Large families</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">Panasonic SR-DF101</td>
                  <td className="py-3 px-2">$59.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Compact quality</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Perfect Rice, Every Time</h3>
          <p className="font-lato text-stone-600 mb-6">Whether you're cooking for one or a family, the right rice cooker takes the hassle out of perfect grains. Pick one that fits your needs and enjoy fluffy rice without the guesswork.</p>
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
            <a href="/reviews/best-pressure-cookers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Pressure Cookers</h4>
              <p className="text-xs text-stone-500 mt-1">Speed up cooking</p>
            </a>
            <a href="/reviews/best-slow-cookers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Slow Cookers</h4>
              <p className="text-xs text-stone-500 mt-1">Set & forget</p>
            </a>
            <a href="/reviews/best-electric-kettle-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Electric Kettles</h4>
              <p className="text-xs text-stone-500 mt-1">Hot water fast</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
