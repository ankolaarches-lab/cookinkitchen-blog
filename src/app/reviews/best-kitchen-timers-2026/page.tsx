import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitchen Timers 2026 - Ultimate Buying Guide",
  description: "Never burn anything again. We tested the best kitchen timers for every need - from digital to mechanical, magnetic to mounted.",
};

const products = [
  {
    name: "Taylor Precision Products Digital Timer",
    price: "$14.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563865436914-44ee14a27ae3?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Taylor+Precision+Products+Digital+Kitchen+Timer?tag=cookinkitchen-20",
    pros: ["Large display", "Loud alarm", "Magnet on back"],
    cons: ["Requires batteries"],
  },
  {
    name: "Sage Kitchen Timer",
    price: "$24.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563865436914-44ee14a27ae3?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Sage+Kitchen+Timer?tag=cookinkitchen-20",
    pros: ["Unique design", "Easy to read", "Silent operation option"],
    cons: ["Higher price point"],
  },
  {
    name: "OXO Good Grips 3-IN-1 Timer",
    price: "$19.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1563865436914-44ee14a27ae3?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=OXO+Good+Grips+3+in+1+Kitchen+Timer?tag=cookinkitchen-20",
    pros: ["Three timers in one", "Stands or mounts", "Clear display"],
    cons: ["Takes getting used to"],
  },
  {
    name: "TIMEGO Digital Kitchen Timer",
    price: "$12.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1563865436914-44ee14a27ae3?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=TIMEGO+Digital+Kitchen+Timer?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Compact", "Memory function"],
    cons: ["Smaller display"],
  },
  {
    name: "KitchenAid 3-Minute Timer",
    price: "$16.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563865436914-44ee14a27ae3?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=KitchenAid+Mechanical+Kitchen+Timer?tag=cookinkitchen-20",
    pros: ["No batteries needed", "Classic design", "KitchenAid quality"],
    cons: ["Only 3 minutes max"],
  },
  {
    name: "JinYou Magnetic Kitchen Timer",
    price: "$15.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1563865436914-44ee14a27ae3?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=JinYou+Magnetic+Kitchen+Timer?tag=cookinkitchen-20",
    pros: ["Strong magnet", "Fun colors", "Easy twist dial"],
    cons: ["Mechanical only - less precise"],
  },
];

export default function BestKitchenTimers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Gadgets</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 11, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1563865436914-44ee14a27ae3?w=800&h=400&fit=crop" 
              alt="Best Kitchen Timers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Kitchen Timers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Never burn, overcook, or overbake again. We tested the top kitchen timers to find the perfect one for every cooking style.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Kitchen Timer</h2>
            <p className="mb-4 text-stone-600">Whether you're juggling multiple dishes or just need a reminder that the pasta is done, a reliable kitchen timer is essential. The best ones are loud enough to hear from another room, easy to read at a glance, and durable enough to last for years.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Sound volume</strong> - You need to hear it over stove fans and music</li>
              <li>• <strong>Display visibility</strong> - Big numbers you can read from across the kitchen</li>
              <li>• <strong>Power source</strong> - Digital (battery) vs mechanical (battery-free)</li>
              <li>• <strong>Mounting options</strong> - Magnet, stand, or wall-mount for your setup</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Digital vs Mechanical Timers</h2>
            <p className="mb-4 text-stone-600"><strong>Digital timers</strong> offer precision (down to the second), multiple timer memory, and often louder alarms. They're perfect for complex cooking.</p>
            <p className="mb-4 text-stone-600"><strong>Mechanical timers</strong> never need batteries and are simple to use - just twist and go. Great for basic timing needs.</p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Taylor Precision Products Digital Timer</h2>
            <p className="mb-4 text-stone-600">The Taylor Digital Timer wins our top pick with its combination of features, loud alarm, and versatile magnet mounting. The large display is easy to read, and it stands up to daily kitchen use.</p>
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
                  <th className="text-left py-3 px-2 text-stone-600">Timer</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Taylor Digital</td>
                  <td className="py-3 px-2">$14.99</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Overall best</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Sage Kitchen Timer</td>
                  <td className="py-3 px-2">$24.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Design lovers</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">OXO 3-IN-1</td>
                  <td className="py-3 px-2">$19.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Multiple dishes</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">KitchenAid Mechanical</td>
                  <td className="py-3 px-2">$16.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">No batteries</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">JinYou Magnetic</td>
                  <td className="py-3 px-2">$15.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Simple twist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Never Overcook Again</h3>
          <p className="font-lato text-stone-600 mb-6">A good kitchen timer is one of the most underrated tools. Pick one that fits your cooking style and never burn anything.</p>
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
            <a href="/reviews/best-stand-mixers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Stand Mixers</h4>
              <p className="text-xs text-stone-500 mt-1">Bake like a pro</p>
            </a>
            <a href="/reviews/best-kitchen-gadgets-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Gadgets</h4>
              <p className="text-xs text-stone-500 mt-1">Tools under $25</p>
            </a>
            <a href="/reviews/best-egg-cookers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Egg Cookers</h4>
              <p className="text-xs text-stone-500 mt-1">Perfect eggs every time</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
