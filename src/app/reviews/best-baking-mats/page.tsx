import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Baking Mats 2026 - Silicone & Non-Stick Mats",
  description: "Replace parchment paper forever. We tested the best baking mats for easy release, even baking, and simple cleanup.",
};

const products = [
  {
    name: "Silpat Premium Non-Stick Baking Mat",
    price: "$34.95",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "amazon.com/s?k=Silpat+Classic+Non+Stick+Baking+Mat?tag=cookinkitchen-20",
    pros: ["Premium quality", "Lifetime guarantee", "Even heat distribution", "French-made"],
    cons: ["Premium price"],
  },
  {
    name: "Nordic Ware Natural Aluminum Commercial Baker's Half Sheet",
    price: "$14.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "amazon.com/s?k=Nordic+Ware+Natural+Commercial+Baker?tag=cookinkitchen-20",
    pros: ["Heavy-duty aluminum", "Even baking", "Commercial quality", " Affordable"],
    cons: ["Not non-stick"],
  },
  {
    name: "KitchenAid Premium Silicone Baking Mat",
    price: "$19.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "amazon.com/s?k=KitchenAid+Premium+Silicone+Baking+Mat?tag=cookinkitchen-20",
    pros: ["Flexible", "Dishwasher safe", "Reusable", "Great value"],
    cons: ["Can curl at edges"],
  },
  {
    name: "Amazon Basics Non-Stick Baking Mat",
    price: "$12.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "amazon.com/s?k=AmazonBasics+Silicone+Baking+Mat?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "2-pack", "Easy cleanup", "FDA approved"],
    cons: ["Less durable"],
  },
];

export default function BestBakingMats() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Baking Mats 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Ditch the parchment paper. These reusable mats deliver perfect results every time.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">A good baking mat is an investment that pays for itself. Whether you're baking cookies, roasting vegetables, or making candy, silicone mats provide even heat distribution and easy release. No more stuck pastries or wasted parchment paper.</p>
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
          <p className="text-stone-700 mb-4"><strong>Silpat Premium</strong> is worth the investment. Made in France with a lifetime guarantee, it delivers flawless results batch after batch. Yes, it's pricey — but it'll last forever.</p>
          <a href="amazon.com/s?k=Silpat+Classic+Non+Stick+Baking+Mat?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy on Amazon</a>
        </section>
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
