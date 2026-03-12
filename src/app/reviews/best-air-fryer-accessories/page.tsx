import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Air Fryer Accessories 2026 - Must-Have Add-Ons",
  description: "Get more from your air fryer with these essential accessories. From racks to molds, we tested the best add-ons for 2026.",
};

const products = [
  {
    name: "Air Fryer Rack (3-Tier)",
    price: "$16.99",
    rating: 4.7,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=Multi+Layer+Air+Fryer+Rack+Expandable?tag=cookinkitchen-20",
    pros: ["3-tier cooking", "Expandable", "Dishwasher safe", "More capacity"],
    cons: ["May not fit all models"],
  },
  {
    name: "Silicone Air Fryer Liners",
    price: "$12.99",
    rating: 4.8,
    image: "/images/kitchen/7.jpg",
    link: "https://www.amazon.com/s?k=Silicone+Air+Fryer+Liners+Reusable?tag=cookinkitchen-20",
    pros: ["Reusable", "Non-stick", "Easy cleanup", "Food safe silicone"],
    cons: ["Need to size correctly"],
  },
  {
    name: "Air Fryer Baking Pan Set",
    price: "$19.99",
    rating: 4.6,
    image: "/images/kitchen/8.jpg",
    link: "https://www.amazon.com/s?k=Air+Fryer+Accessories+Baking+Cake?tag=cookinkitchen-20",
    pros: ["Multiple pieces", "Bake cakes", "Make muffins", "Parchment included"],
    cons: ["Small portions only"],
  },
  {
    name: "Rotisserie Kit",
    price: "$24.99",
    rating: 4.5,
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/s?k=Air+Fryer+Rotisserie+Kit+Universal?tag=cookinkitchen-20",
    pros: ["Whole roasted chicken", "Rotisserie effect", "Juicy results"],
    cons: ["Model specific"],
  },
];

export default function BestAirFryerAccessories() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Air Fryer Accessories 2026</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">Get more from your air fryer. Must-have add-ons for better cooking.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">Your air fryer can do so much more than fries. With the right accessories, you can bake, roast whole chickens, and cook more at once. We tested the best add-ons to maximize your air fryer's potential.</p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-lg flex-shrink-0">
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
                  <ul className="text-stone-600 text-sm mb-4 space-y-1">
                    {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                  </ul>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4"><strong>Silicone Air Fryer Liners</strong> are the must-have accessory. Reusable, non-stick, and easy to clean — they transform your air fryer into a breeze to maintain while cooking everything from veggies to baked goods.</p>
          <a href="https://www.amazon.com/s?k=Silicone+Air+Fryer+Liners+Reusable?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy on Amazon</a>
        </section>
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/reviews/best-air-fryer-accessories" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Best Air Fryer Accessories</h3>
              <p className="text-sm text-stone-600 mt-1">Get more from your air fryer</p>
            </a>
            <a href="/reviews/instant-pot-vs-ninja-foodi" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Instant Pot vs Ninja Foodi</h3>
              <p className="text-sm text-stone-600 mt-1">Compare these appliances</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
