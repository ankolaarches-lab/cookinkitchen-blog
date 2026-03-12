import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Food Dehydrators 2026 - Ultimate Buying Guide",
  description: "Make dried fruits, jerky, and more at home. We tested the best food dehydrators for preserving and snack-making.",
};

const products = [
  {
    name: "Cosori Stainless Steel Dehydrator",
    price: "$116.99",
    rating: 4.7,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Cosori+Stainless+Steel+Dehydrator?tag=cookinkitchen-20",
    pros: ["6 trays", "Digital controls", " Stainless steel"],
    cons: ["Higher price point"],
  },
  {
    name: "Magic Mill Food Dehydrator",
    price: "$89.99",
    rating: 4.6,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Magic+Mill+Food+Dehydrator?tag=cookinkitchen-20",
    pros: ["5 stackable trays", "Timer & temp control", "Quiet operation"],
    cons: ["Basic display"],
  },
  {
    name: "Nesco FD-75A Snackmaster Pro",
    price: "$69.99",
    rating: 4.5,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=Nesco+FD-75A+Snackmaster+Pro?tag=cookinkitchen-20",
    pros: ["Expandable to 12 trays", "Budget-friendly", "Flexible drying"],
    cons: ["No automatic shutoff"],
  },
  {
    name: "LEM Products MightyBite 6-Tray",
    price: "$136.00",
    rating: 4.7,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=LEM+Products+MightyBite+Dehydrator?tag=cookinkitchen-20",
    pros: ["Clear top for monitoring", "Strong build", "Even air flow"],
    cons: ["Premium price"],
  },
  {
    name: "Elite Gourmet Food Dehydrator",
    price: "$29.99",
    rating: 4.4,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=Elite+Gourmet+Food+Dehydrator?tag=cookinkitchen-20",
    pros: ["Very affordable", "Compact", "5 trays included"],
    cons: ["Basic temperature control"],
  },
];

export default function BestFoodDehydrators2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 12, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/6.jpg" 
              alt="Best Food Dehydrators 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Food Dehydrators 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Preserve fruits, make jerky, and create healthy snacks at home. We tested the top dehydrators for every budget.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Food Dehydrator?</h2>
            <p className="mb-4 text-stone-600">Food dehydrators let you preserve seasonal produce, make healthy snacks like dried fruits and jerky, and reduce food waste. They're energy-efficient and produce no added preservatives.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Capacity</strong> - Number of trays (4-12) determines batch size</li>
              <li>• <strong>Temperature range</strong> - Different foods need different temps (95-165°F)</li>
              <li>• <strong>Airflow</strong> - Horizontal vs vertical airflow affects drying uniformity</li>
              <li>• <strong>Controls</strong> - Digital vs dial; timer functions</li>
              <li>• <strong>Noise level</strong> - Some are quieter than others</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Cosori Stainless Steel Dehydrator</h2>
            <p className="mb-4 text-stone-600">The Cosori offers the best combination of features, build quality, and value. With 6 stainless steel trays, digital temperature and timer controls, and even drying performance, it's perfect for serious dehydrating enthusiasts.</p>
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
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Start Preserving Today</h3>
          <p className="font-lato text-stone-600 mb-6">A food dehydrator opens up a world of healthy, homemade snacks and preserved foods.</p>
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
            <a href="/reviews/best-slow-cookers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Slow Cookers</h4>
              <p className="text-xs text-stone-500 mt-1">Set & forget meals</p>
            </a>
            <a href="/reviews/best-air-fryer-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Air Fryers</h4>
              <p className="text-xs text-stone-500 mt-1">Crispy & healthy cooking</p>
            </a>
            <a href="/reviews/best-instant-pot" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Instant Pots</h4>
              <p className="text-xs text-stone-500 mt-1">Multi-cooker magic</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
