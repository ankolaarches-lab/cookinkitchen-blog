import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Kitchen Shears 2026 - Multi-Purpose Scissors",
  description: "Cut, trim, and slice like a pro. We tested the best kitchen shears for every task from herbs to chicken.",
};

const products = [
  {
    name: "Dreamfarm Scizza Kitchen Shears",
    price: "$19.99",
    rating: 4.9,
    link: "https://www.amazon.com/s?k=Dreamfarm+Scizza+Kitchen+Shears&tag=cookinkitchen-20",
    pros: ["Spring-loaded", "Herb stripper", "Comfortable grip", "Dishwasher safe"],
    cons: ["Not for heavy-duty"],
  },
  {
    name: "OXO Good Grips Kitchen Shears",
    price: "$14.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=OXO+Good+Grips+Kitchen+Shears&tag=cookinkitchen-20",
    pros: ["Stainless steel", "Soft grips", "Parmesan blade", "Dishwasher safe"],
    cons: ["Not as sharp"],
  },
  {
    name: "KitchenAid Multi-Purpose Shears",
    price: "$12.99",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=KitchenAid+Stainless+Multi+Purpose+Shears&tag=cookinkitchen-20",
    pros: ["Built-in bottle opener", "Micro-serrated", "Budget-friendly"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "Wüsthof Kitchen Shears",
    price: "$34.95",
    rating: 4.8,
    link: "https://www.amazon.com/s?k=Wusthof+Kitchen+Shears+9+Inch&tag=cookinkitchen-20",
    pros: ["Professional quality", "Surgical sharpness", "Durable", "Lifetime warranty"],
    cons: ["Premium price"],
  },
];

export default function BestKitchenShears() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Kitchen Shears 2026</h1>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto">More than just scissors. The right kitchen shears can cut, strip, and slice like a pro.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Kitchen Shears 2026', href: '/reviews/best-kitchen-shears' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">Every kitchen needs a good pair of shears. From snipping fresh herbs to cutting through chicken bones, quality kitchen shears are an essential tool that outperforms regular scissors.</p>
        </section>
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
          <p className="text-stone-700 mb-4"><strong>Dreamfarm Scizza Kitchen Shears</strong> win for 2026. The spring-loaded design reduces hand fatigue, the built-in herb stripper is genius, and they're comfortable enough for extended use. Best feature-to-price ratio.</p>
          <a href="https://www.amazon.com/s?k=Dreamfarm+Scizza+Kitchen+Shears&tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy on Amazon</a>
        </section>
        
      </main>
    </div>
  );
}
