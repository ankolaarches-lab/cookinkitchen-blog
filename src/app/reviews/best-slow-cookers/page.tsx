import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Slow Cookers 2026 - Buying Guide",
  description: "Crock-Pot vs Instant Pot vs Ninja. We tested the best slow cookers for hands-off meals.",
};

const products = [
  {
    name: "Crock-Pot 7-Quart Slow Cooker",
    price: "$44.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Crock+Pot+SSC7+6+Quart+Manual&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Simple controls", "Large capacity", "Affordable", "Keep warm function"],
    cons: ["Manual only", "No programmable options"],
  },
  {
    name: "Instant Pot Duo Crisp",
    price: "$119.95",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Instant+Pot+Duo+Crisp&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Pressure & slow cook", "Air fry lid", "11 functions", "Programmable"],
    cons: ["More expensive", "Learning curve"],
  },
  {
    name: "Hamilton Beach Slow Cooker",
    price: "$34.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Hamilton+Beach+33865+Slow+Cooker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
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
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Slow Cookers 2026', href: '/reviews/best-slow-cookers' }
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
        
      
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Guides & Reviews</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <a href="/reviews/best-pressure-cookers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Best Pressure Cookers</h3>
              <p className="text-sm text-stone-600 mt-1">Compare slow vs pressure</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
