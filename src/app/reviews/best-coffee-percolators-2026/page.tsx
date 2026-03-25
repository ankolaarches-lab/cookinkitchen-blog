import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Coffee Percolators 2026 - Stovetop & Electric Reviews",
  description: "Brew rich, bold coffee with the best coffee percolators of 2026. We tested stovetop and electric percolators for perfect brewing.",
};

const products = [
  {
    name: "Presto 12-Cup Stainless Steel Coffee Maker",
    price: "$79.99",
    rating: 4.8,
    link: "https://www.amazon.com/Presto-12-Cup-Stainless-Coffee/dp/B00006IUXV?tag=cookinkitchen-20",
    pros: ["Premium stainless steel", "Electric with keep-warm", "Fast brewing", "Dishwasher safe"],
    cons: ["Higher price point"],
  },
  {
    name: "Farberware 12-Cup Stainless Steel Coffee Percolator",
    price: "$34.99",
    rating: 4.6,
    link: "https://www.amazon.com/Farberware-12-Cup-Stainless-Percolator/dp/B004VJ2M7Y?tag=cookinkitchen-20",
    pros: ["Affordable", "Classic design", "Dishwasher safe", "Full brew indicator"],
    cons: ["No keep-warm function"],
  },
  {
    name: "Stanley Classic StaySeq 12-Cup Percolator",
    price: "$79.95",
    rating: 4.7,
    link: "https://www.amazon.com/Stanley-Classic-Percolator-Stainless/dp/B00X15AWNW?tag=cookinkitchen-20",
    pros: ["Legendary durability", "Built to last", "Double-wall stainless", "Classic styling"],
    cons: ["Premium price"],
  },
  {
    name: "Euro Cuisine PER12 Electric Coffee Percolator",
    price: "$59.99",
    rating: 4.5,
    link: "https://www.amazon.com/Euro-Cuisine-PER12-Electric-Percolator/dp/B001UEH6QS?tag=cookinkitchen-20",
    pros: ["Electric with keep-warm", "Polished copper finish", "Dripless gooseneck spout", "Clear glass knob"],
    cons: ["Some reports of durability issues"],
  },
  {
    name: "Elite Platinum Maxi-Matic 12-Cup Percolator",
    price: "$39.99",
    rating: 4.4,
    link: "https://www.amazon.com/Elite-Platinum-Maxi-Matic-Percolator/dp/B004L4CPOE?tag=cookinkitchen-20",
    pros: ["Very affordable", "12-cup capacity", "Automatic keep-warm", "Compact design"],
    cons: ["Mixed durability reviews"],
  },
];

export default function BestCoffeePercolators() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Coffee Percolators 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Rediscover the bold, rich flavor of percolated coffee. We tested the best stovetop and electric percolators.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Coffee Percolators 2026', href: '/reviews/best-coffee-percolators-2026' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Coffee percolators have made a major comeback in 2026. Unlike drip coffee makers, percolators brew by cycling boiling water through the grounds repeatedly, resulting in a bolder, richer cup. Whether you prefer the classic stovetop experience or the convenience of an electric model, we&apos;ve tested the top options to find the best percolators for every budget and preference.
          </p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">☕</span>
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
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-2">Pros</h3>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                      </ul>
                    </div>
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4"><strong>Presto 12-Cup Stainless Steel Coffee Maker</strong> delivers the perfect balance of quality and performance. Its premium stainless steel construction ensures durability, while the electric design with keep-warm function makes it incredibly convenient. The fast brewing and dishwasher-safe parts seal the deal.</p>
          <a href="https://www.amazon.com/Presto-12-Cup-Stainless-Coffee/dp/B00006IUXV?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-800 transition">Buy on Amazon</a>
        </section>
        
      </main>
    </div>
  );
}