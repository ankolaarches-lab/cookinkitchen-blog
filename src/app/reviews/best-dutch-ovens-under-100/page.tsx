import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dutch Ovens Under $100 - 2026 Buying Guide",
  description: "Find the best Dutch oven under $100. We tested affordable enameled cast iron pots from Lodge, Amazon Basics, and more for braising, bread, and soups.",
};

const products = [
  {
    name: "Lodge Enameled Cast Iron Dutch Oven",
    price: "$69.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Lodge+Enameled+Cast+Iron+Dutch+Oven?tag=cookinkitchen-20",
    pros: ["Excellent heat retention", "Durable enamel coating", "Oven-safe to 500°F", "Great value"],
    cons: ["Heavy (7 lbs)", "Some reports of uneven enamel"],
  },
  {
    name: "Amazon Basics Enameled Cast Iron Dutch Oven",
    price: "$54.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Amazon+Basics+Enameled+Cast+Iron+Dutch+Oven?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "6 quart capacity", "Dishwasher safe", "Nice color options"],
    cons: ["Lighter construction", "May chip over time"],
  },
  {
    name: "Cuisinart Enameled Cast Iron Dutch Oven",
    price: "$79.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Cuisinart+Enameled+Cast+Iron+Dutch+Oven?tag=cookinkitchen-20",
    pros: ["Self-basting lid", "Smooth interior", "Great for bread baking", "Sturdy handles"],
    cons: ["Limited color selection"],
  },
  {
    name: "Caraway Dutch Oven",
    price: "$89.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Caraway+Dutch+Oven?tag=cookinkitchen-20",
    pros: ["Beautiful design", "Non-toxic enamel", "Excellent heat distribution", "Stackable"],
    cons: ["Not induction compatible", "Hand wash recommended"],
  },
  {
    name: "Tramontina Enameled Cast Iron Dutch Oven",
    price: "$59.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Tramontina+Enameled+Cast+Iron+Dutch+Oven?tag=cookinkitchen-20",
    pros: ["Very affordable", "6.5 quart capacity", "Traditional design", "Made in Brazil"],
    cons: ["Heavier than competitors", "Interior shows staining"],
  },
];

export default function BestDutchOvensUnder100() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 11, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=400&fit=crop" 
              alt="Best Dutch Ovens Under $100" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Dutch Ovens Under $100: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">You don't need to spend a fortune for restaurant-quality braising. We tested the best affordable Dutch ovens.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Dutch Oven?</h2>
            <p className="mb-4 text-stone-600">A Dutch oven is a kitchen workhorse that excels at slow-cooking, braising, soups, and even artisan bread. The heavy cast iron construction retains heat evenly, making it perfect for dishes that need hours of gentle cooking.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For Under $100</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Capacity</strong> - 5-6 quarts is ideal for most families</li>
              <li>• <strong>Enamel coating</strong> - Look for durable, food-safe enamel interior</li>
              <li>• <strong>Weight</strong> - Cast iron is heavy; consider what you can handle</li>
              <li>• <strong>Oven-safe temperature</strong> - Most go to 400-500°F</li>
              <li>• <strong>Lid fit</strong> - A tight-fitting lid is essential for braising</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Lodge Enameled Cast Iron Dutch Oven</h2>
            <p className="mb-4 text-stone-600">The Lodge offers the best value under $70 with excellent heat retention, a durable enamel coating, and versatility for braising, soups, and even no-knead bread. It's a workhorse that competes with options twice its price.</p>
          </div>
        </article>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Quick Comparison</h2>
          <table className="w-full bg-white rounded-xl shadow-sm border border-stone-100">
            <thead className="bg-stone-50">
              <tr>
                <th className="text-left p-4 font-lato text-stone-600 text-sm">Product</th>
                <th className="text-left p-4 font-lato text-stone-600 text-sm">Price</th>
                <th className="text-left p-4 font-lato text-stone-600 text-sm">Capacity</th>
                <th className="text-left p-4 font-lato text-stone-600 text-sm">Rating</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-t border-stone-100">
                  <td className="p-4 font-lato text-stone-800">{product.name}</td>
                  <td className="p-4 font-lato text-emerald-600 font-bold">{product.price}</td>
                  <td className="p-4 font-lato text-stone-600">5-6.5 qt</td>
                  <td className="p-4 font-lato text-emerald-500">★ {product.rating}</td>
                </tr>
              ))}
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
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Start Braising?</h3>
          <p className="font-lato text-stone-600 mb-6">A quality Dutch oven under $100 will last for decades with proper care.</p>
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
            <a href="/reviews/best-dutch-ovens" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Dutch Ovens</h4>
              <p className="text-xs text-stone-500 mt-1">All price ranges</p>
            </a>
            <a href="/reviews/cast-iron-vs-carbon-steel" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Comparison</span>
              <h4 className="font-bold text-stone-900 mt-1">Cast Iron vs Carbon Steel</h4>
              <p className="text-xs text-stone-500 mt-1">Which is better?</p>
            </a>
            <a href="/reviews/best-bread-makers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Bread Makers</h4>
              <p className="text-xs text-stone-500 mt-1">Fresh bread at home</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
