import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Air Fryers Under $100 - 2026 Buying Guide",
  description: "Get crispy results without breaking the bank. We tested the best budget air fryers under $100 for every kitchen.",
  openGraph: {
    title: "Best Air Fryers Under $100 - 2026 Buying Guide",
    description: "Get crispy results without breaking the bank. We tested the best budget air fryers under $100.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/air-fryers-under-100.jpg"],
  },
};

const products = [
  {
    name: "COSORI Air Fryer 5.8 Quart",
    price: "$89.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=COSORI+Air+Fryer+5.8+Quart&tag=cookinkitchen-20",
    pros: ["Great capacity", "Easy touch controls", "Dishwasher safe basket"],
    cons: ["No preheat notification"],
  },
  {
    name: "Instant Pot Vortex Plus 7-in-1",
    price: "$99.95",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=Instant+Pot+Vortex+Plus+7-in-1&tag=cookinkitchen-20",
    pros: ["7 functions in one", "Perfect size", "Easy to use"],
    cons: ["Slightly louder than competitors"],
  },
  {
    name: "Ninja Air Fryer 4-Quart",
    price: "$89.99",
    rating: 4.5,
    link: "https://www.amazon.com/s?k=Ninja+Air+Fryer+4-Quart&tag=cookinkitchen-20",
    pros: ["Compact for small kitchens", "Non-slip feet", "Great for singles"],
    cons: ["Smaller capacity"],
  },
  {
    name: "GoWISE USA 5.8-Quart Air Fryer",
    price: "$79.99",
    rating: 4.4,
    link: "https://www.amazon.com/s?k=GoWISE+USA+5.8-Quart+Air+Fryer&tag=cookinkitchen-20",
    pros: ["Affordable", "Large digital display", "Recipe book included"],
    cons: ["Basic design"],
  },
  {
    name: "Dash Tasti-Crisp 4-Quart",
    price: "$59.99",
    rating: 4.3,
    link: "https://www.amazon.com/s?k=Dash+Tasti-Crisp+4-Quart&tag=cookinkitchen-20",
    pros: ["Very affordable", "Compact", "Simple dial controls"],
    cons: ["Limited features"],
  },
];

export default function BestAirFryersUnder100() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.5</span>
            <span className="font-lato text-stone-400 text-sm">Mar 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/air-fryer.jpg" 
              alt="Best Air Fryers Under $100" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Air Fryers Under $100: Budget-Friendly Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Crispy, delicious food without the premium price tag. We tested the best budget air fryers to find your perfect match.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Choose a Budget Air Fryer?</h2>
            <p className="mb-4 text-stone-600">Air fryers under $100 offer excellent value, giving you crispy results without the premium price. Many budget models now include features that were once only on expensive units.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Capacity</strong> - 4-6 quarts works for most families</li>
              <li>• <strong>Temperature range</strong> - Look for at least 400°F</li>
              <li>• <strong>Timer</strong> - 30+ minutes is ideal</li>
              <li>• <strong>Ease of cleaning</strong> - Dishwasher-safe parts save time</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: COSORI Air Fryer 5.8 Quart</h2>
            <p className="mb-4 text-stone-600">The COSORI offers the best balance of price, capacity, and features. Its sleek design and intuitive controls make it perfect for beginners, while the 5.8-quart capacity handles family meals with ease.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-stone-100">
                <div>
                  <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🍳</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800 font-medium">{product.name}</h3>
                      <span className="text-emerald-600 font-lato font-bold">{product.rating} ★</span>
                    </div>
                    <p className="text-stone-500 font-lato text-sm mb-3">{product.price}</p>
                    <div className="flex gap-4 text-sm">
                      <div className="text-stone-600">
                        <span className="font-bold text-emerald-600">Pros:</span> {product.pros.join(", ")}
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm mt-2">
                      <div className="text-stone-600">
                        <span className="font-bold text-red-500">Cons:</span> {product.cons.join(", ")}
                      </div>
                    </div>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg font-lato font-bold text-sm hover:bg-emerald-700 transition"
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <h3 className="font-playfair text-xl text-stone-800 mb-3">Final Verdict</h3>
          <p className="font-lato text-stone-600">
            For those on a budget, the <strong>COSORI Air Fryer 5.8 Quart</strong> delivers excellent performance at under $90. It's our top pick for anyone wanting quality results without spending more.
          </p>
        </div>
      </div>
    </div>
  );
}