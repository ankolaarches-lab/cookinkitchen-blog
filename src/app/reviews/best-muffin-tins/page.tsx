import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Muffin Tins 2026 - Buying Guide",
  description: "Best Muffin Tins - Complete guide",
  openGraph: {
    title: "Best Muffin Tins",
    description: "Best Muffin Tins - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-baking.png"],
  },
};

const products = [
  {
    name: "USA Pan Muffin Pan",
    price: "$24.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=USA+Pan+Bakeware+Muffin+2+Piece&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Nonstick coating", "12 cup each", "Heavy gauge", "Made in USA"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "Nordic Ware Muffin Pan",
    price: "$29.95",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Nordic+Ware+Original+Baked+Aluminum&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Natural aluminum", "No nonstick", "Great browning", "USA made"],
    cons: ["Needs greasing"],
  },
];

export default function BestMuffinTins2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Muffin Tins 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Perfect muffins and cupcakes. We tested the best muffin tins.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Muffin Tins 2026', href: '/reviews/best-muffin-tins' }
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
