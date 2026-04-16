import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Toaster Ovens 2026 - Buying Guide",
  description: "Breville vs Cuisinart vs Panasonic. We tested the best toaster ovens for baking, broiling, and more.",
};

const products = [
  {
    name: "Breville Smart Oven",
    price: "$199.95",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Breville+Smart+Oven+BOV850BSS&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    presets: ["Element IQ", "9 functions", "Large capacity", "Convection"],
    cons: ["Expensive", "Large counter footprint"],
  },
  {
    name: "Cuisinart TOA-60 Air Fryer Toaster Oven",
    price: "$149.95",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Cuisinart+TOA+60+Recipe+Book+Included&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    presets: ["Air fryer built-in", "7 functions", "Includes accessories", "Affordable"],
    cons: ["Louder than others", "Controls can be tricky"],
  },
  {
    name: "Panasonic FlashXpress",
    price: "$129.00",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Panasonic+FlashXpress+Toaster+Infrared&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    presets: ["Double infrared heating", "Compact", "Fast preheat", "Toast function"],
    cons: ["No convection", "Smaller capacity"],
  },
];

export default function BestToasterOvens2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Toaster Ovens 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">More than just toast. We tested the best toaster ovens for baking, air frying, and meals.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img 
            src="/images/reviews/toaster-oven.jpg" 
            alt="Best Toaster Ovens 2026" 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Toaster Ovens 2026', href: '/reviews/best-toaster-ovens' }
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
                    {product.presets?.map((pro, i) => <li key={i}>✓ {pro}</li>)}
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
