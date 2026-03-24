import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Rolling Pins 2026 - Buying Guide",
  description: "French, American, and wooden rolling pins. We tested the best for pie dough and pasta.",
};

const products = [
  {
    name: "USA Rolling Pin Classic",
    price: "$24.99",
    rating: 4.8,
    link: "https://www.amazon.com/s?k=USA+Pan+Baking+Rolling+American&tag=cookinkitchen-20",
    pros: ["American made", "Comfortable handles", "Solid wood", "5 sizes"],
    cons: ["No storage bag"],
  },
  {
    name: "French Rolling Pin",
    price: "$19.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=French+Tapered+Rolling+Pin&tag=cookinkitchen-20",
    pros: ["Tapered design", "Even pressure", "Classic look", "Great for pastry"],
    cons: ["Learning curve"],
  },
];

export default function BestRollingPins2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Rolling Pins 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Perfectly rolled dough every time. We tested the best rolling pins.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Rolling Pins 2026', href: '/reviews/best-rolling-pins' }
          ]} />
        </div>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div>
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
        
      </main>
    </div>
  );
}
