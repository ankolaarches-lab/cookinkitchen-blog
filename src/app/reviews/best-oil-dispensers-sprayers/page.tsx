import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Oil Dispensers & Sprayers 2026 - Kitchen Oil Bottles Guide",
  description: "Control your oil usage with precision. We tested the best oil dispensers and sprayers for healthy cooking. Find your perfect kitchen companion.",
};

const products = [
  {
    name: "Misto Brushed Aluminum Oil Sprayer",
    price: "$14.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=best oil dispensers sprayers?tag=cookinkitchen-20",
    pros: ["No propellants", "Adjustable spray", "Economical"],
    cons: ["Manual pumping required"],
  },
  {
    name: "Oil Sprayer Bottle for Cooking",
    price: "$12.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=best oil dispensers sprayers?tag=cookinkitchen-20",
    pros: ["Fine mist", "Multiple sizes", "Leak-proof"],
    cons: ["Plastic construction"],
  },
  {
    name: "Pourable Glass Oil Dispenser",
    price: "$19.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1514986888952-c8f3ef7e8f64?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=best oil dispensers sprayers?tag=cookinkitchen-20",
    pros: ["Beautiful design", "Drip-free spout", "Glass is safe"],
    cons: ["Not a sprayer"],
  },
  {
    name: "Prepara EVO Oil Cruet",
    price: "$29.95",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=best oil dispensers sprayers?tag=cookinkitchen-20",
    pros: ["Self-venting", "Ergonomic grip", "Precision pour"],
    cons: ["Hand wash only"],
  },
  {
    name: "Evo Hand Pump Oil Sprayer",
    price: "$24.95",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=best oil dispensers sprayers?tag=cookinkitchen-20",
    pros: ["Continuous spray", "Stainless steel", "Chef-approved"],
    cons: ["More expensive"],
  },
];

export default function OilDispensers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Kitchen Organization</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 9, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=400&fit=crop" 
              alt="Best Oil Dispensers & Sprayers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Oil Dispensers & Sprayers 2026</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Control your oil usage and cook healthier. We tested the best dispensers and sprayers for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Use an Oil Dispenser or Sprayer</h2>
            <p className="mb-4 text-stone-600">Using too much oil adds unnecessary calories and fat. A sprayer gives you a light, even coating - perfect for salads, grilling, and roasting. Dispensers provide precise pouring for sautéing and baking.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Sprayer vs Dispenser</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Sprayers</strong> - Ideal for light coating, grilling, salads. Uses less oil.</li>
              <li>• <strong>Dispensers</strong> - Better for precise pouring, sautéing, baking.</li>
              <li>• <strong>Combination</strong> - Many cooks keep both for different uses.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Misto Brushed Aluminum Sprayer</h2>
            <p className="mb-4 text-stone-600">The Misto is a kitchen classic for good reason. No propellants, just pump and spray. It's economical, produces a fine mist, and the brushed aluminum looks great on any counter.</p>
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
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Cook Healthier with Less Oil</h3>
          <p className="font-lato text-stone-600 mb-6">A good oil dispenser or sprayer helps you use just the right amount every time.</p>
          <Link 
            href="/reviews"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
          >
            Browse All Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
