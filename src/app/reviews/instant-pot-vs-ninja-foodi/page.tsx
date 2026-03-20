import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Instant Pot Duo vs Ninja Foodi - Which is Better?",
  description: "Two popular multicookers face off. We compare features, cooking performance, and value to find the winner.",
};

const products = [
  {
    name: "Instant Pot Duo 7-in-1",
    price: "$89.95",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=instant+pot+vs+ninja+foodi&tag=cookinkitchen-20",
    pros: ["More affordable", "Larger community", "Proven reliability", "7 functions"],
    cons: ["No air fryer", "Manual pressure release"],
  },
  {
    name: "Ninja Foodi 8-Quart 9-in-1",
    price: "$179.95",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=instant+pot+vs+ninja+foodi&tag=cookinkitchen-20",
    pros: ["Built-in air fryer", "TenderCrisp technology", "Deluxe size", "Better accessories"],
    cons: ["More expensive", "Larger footprint"],
  },
];

const comparison = [
  { feature: "Functions", instantPot: "7-in-1", ninjaFoodi: "9-in-1" },
  { feature: "Air Frying", instantPot: "Requires attachment", ninjaFoodi: "Built-in" },
  { feature: "Pressure Cooking", instantPot: "Yes", ninjaFoodi: "Yes" },
  { feature: "Slow Cooking", instantPot: "Yes", ninjaFoodi: "Yes" },
  { feature: "Sauté", instantPot: "Yes", ninjaFoodi: "Yes" },
  { feature: "Capacity", instantPot: "6 quart", ninjaFoodi: "8 quart" },
  { feature: "Price", instantPot: "~$90", ninjaFoodi: "~$180" },
];

export default function InstantPotVsNinjaFoodi() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Instant Pot Duo vs Ninja Foodi</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">Two popular multicookers face off. Which one deserves a spot on your countertop?</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Instant Pot Duo vs Ninja Foodi', href: '/reviews/instant-pot-vs-ninja-foodi' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">Instant Pot and Ninja Foodi are the two biggest names in multicookers. Both can pressure cook, slow cook, sauté, and more — but they have key differences that might sway your decision.</p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
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
        <section className="mt-12 bg-white rounded-2xl p-8 border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 pr-4 font-bold text-stone-900">Feature</th>
                  <th className="text-left py-3 pr-4 font-bold text-stone-700">Instant Pot Duo</th>
                  <th className="text-left py-3 font-bold text-stone-700">Ninja Foodi</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-stone-900">{row.feature}</td>
                    <td className="py-3 pr-4 text-stone-600">{row.instantPot}</td>
                    <td className="py-3 text-stone-600">{row.ninjaFoodi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">The Verdict</h2>
          <p className="text-stone-700 mb-4"><strong>Choose Instant Pot Duo</strong> if you're new to multicookers, want something more affordable, or primarily use pressure cooking and slow cooking functions.</p>
          <p className="text-stone-700"><strong>Choose Ninja Foodi</strong> if you want the convenience of air frying without buying a separate appliance, or need the larger 8-quart capacity for big families.</p>
        </section>
        
      </main>
    </div>
  );
}
