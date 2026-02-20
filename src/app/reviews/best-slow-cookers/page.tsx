import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Slow Cookers 2026 - Buying Guide",
  description: "Crock-Pot vs Instant Pot vs Ninja. We tested the best slow cookers for hands-off meals.",
};

const products = [
  {
    name: "Crock-Pot 7-Quart Slow Cooker",
    price: "$44.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Crock-Pot-SSC7-6-Quart-Manual/dp/B001I4D2OW?tag=cookinkitchen-20",
    pros: ["Simple controls", "Large capacity", "Affordable", "Keep warm function"],
    cons: ["Manual only", "No programmable options"],
  },
  {
    name: "Instant Pot Duo Crisp",
    price: "$119.95",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Instant-Pot-Duo-Crisp/dp/B08F5P8ITD?tag=cookinkitchen-20",
    pros: ["Pressure & slow cook", "Air fry lid", "11 functions", "Programmable"],
    cons: ["More expensive", "Learning curve"],
  },
  {
    name: "Hamilton Beach Slow Cooker",
    price: "$34.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Hamilton-Beach-33865-Slow-Cooker/dp/B001I4RM5C?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Clip-tight lid", "3 settings", "Compact"],
    cons: ["Smaller capacity", "Basic features"],
  },
];

export default function BestSlowCookers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Slow Cookers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Set it and forget it. We tested the best slow cookers for tender, flavorful meals.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="mb-4 text-stone-600 text-sm space-y-1">
                    {product.pros.map((pro, i) => <li key={i}>✓ {pro}</li>)}
                  </ul>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
