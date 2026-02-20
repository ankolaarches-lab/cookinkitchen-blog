import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Pizza Ovens 2026 - Buying Guide",
  description: "Ooni vs Ninja vs Breville. We tested the best pizza ovens for crispy, restaurant-quality pizza at home.",
};

const products = [
  {
    name: "Ooni Koda 12 Pizza Oven",
    price: "$399.00",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Ooni-Koda-Portable-Pizza-Oven/dp/B07VYCZZ5S?tag=cookinkitchen-20",
    pros: ["Heats in 15 minutes", "Gas powered", "Compact", "900°F max"],
    cons: ["Gas tank not included", "Needs outdoor space"],
  },
  {
    name: "Ninja Foodi Pizza Oven",
    price: "$229.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Ninja-Foodi-Pizza-Oven/dp/B09JQF7W5G?tag=cookinkitchen-20",
    pros: ["Countertop friendly", "Multiple functions", "Digital controls", "Affordable"],
    cons: ["Smaller pizza size", "Less heat than Ooni"],
  },
  {
    name: "Breville Smart Oven Pizzaiolo",
    price: "$599.95",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Breville-Smart-Oven-Pizzaiolo-BOV860BSS/dp/B01LZ7YQDG?tag=cookinkitchen-20",
    pros: ["Wood-fired style", "Dual heating elements", "Large capacity", "Precise controls"],
    cons: ["Expensive", "Requires 20 min preheat"],
  },
];

export default function BestPizzaOvens2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Pizza Ovens 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Restaurant-quality pizza at home. We tested gas, electric, and wood-fired options.</p>
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
