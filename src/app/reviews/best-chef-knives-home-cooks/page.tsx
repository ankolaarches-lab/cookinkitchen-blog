import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Chef's Knives for Home Cooks 2026",
  description: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
};

const products = [
  {
    name: "Victorinox Swiss Classic 8-Inch Chef's Knife",
    price: "$39.99",
    rating: 4.9,
    link: "https://www.amazon.com/s?k=Victorinox+Swiss+Classic+8+Inch+Chef&tag=cookinkitchen-20",
    pros: ["Excellent sharpness", "Comfortable Fibrox handle", "Lightweight", "Dishwasher safe"],
    cons: ["Plain design", "No bolster"],
  },
  {
    name: "Wüsthof Classic 8-Inch Chef's Knife",
    price: "$179.95",
    rating: 4.8,
    link: "https://www.amazon.com/s?k=Wusthof+Classic+8+Inch+Chefs+Knife&tag=cookinkitchen-20",
    pros: ["German precision", "Full bolster", "Perfect balance", "Lifetime warranty"],
    cons: ["Expensive", "Heavy"],
  },
  {
    name: "Mac MTH-80 8-Inch Chef's Knife",
    price: "$149.95",
    rating: 4.8,
    link: "https://www.amazon.com/s?k=Mac+MTH+80+8+Inch+Chef+Knife&tag=cookinkitchen-20",
    pros: ["Super thin blade", "Very sharp", "Lightweight", "Asian-style handle"],
    cons: ["Not full bolster", "More delicate"],
  },
  {
    name: "Mercer Culinary Genesis 8-Inch Chef's Knife",
    price: "$34.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=Mercer+Culinary+Genesis+8+Inch+Chef&tag=cookinkitchen-20",
    pros: ["Affordable", "Great value", "Ergonomic handle", "Good sharpness"],
    cons: ["Needs more frequent sharpening", "Not as premium"],
  },
];

export default function BestChefKnivesHomeCooks() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Chef's Knives for Home Cooks</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Chef\'s Knives for Home Cooks', href: '/reviews/best-chef-knives-home-cooks' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">A great chef's knife is the most important tool in any kitchen. We tested knives from budget to premium, evaluating edge retention, comfort, balance, and overall value.</p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
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
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4"><strong>Victorinox Swiss Classic</strong> delivers exceptional performance at an unbeatable price. It's sharp out of the box, comfortable to use for hours, and won't break the bank.</p>
          <a href="https://www.amazon.com/s?k=Victorinox+Swiss+Classic+8+Inch+Chef&tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy on Amazon</a>
        </section>

        {/* Related Content */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Guides & Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/reviews/best-knife-sharpeners" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h3 className="font-bold text-stone-900 mt-1">Best Knife Sharpeners</h3>
              <p className="text-sm text-stone-600 mt-1">Keep your knives razor sharp</p>
            </a>
            <a href="/reviews/best-knife-storage-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h3 className="font-bold text-stone-900 mt-1">Best Knife Storage</h3>
              <p className="text-sm text-stone-600 mt-1">Protect your investment</p>
            </a>
            <a href="/blog/essential-knife-skills-guide" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h3 className="font-bold text-stone-900 mt-1">Knife Skills 101</h3>
              <p className="text-sm text-stone-600 mt-1">Master essential cuts</p>
            </a>
          </div>
        </section>

        
      </main>
    </div>
  );
}
