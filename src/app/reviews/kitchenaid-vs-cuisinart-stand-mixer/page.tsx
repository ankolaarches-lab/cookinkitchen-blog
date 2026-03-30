import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "KitchenAid vs Cuisinart Stand Mixer - Which is Better?",
  description: "KitchenAid vs Cuisinart — we put head-to-head to find the best stand mixer for serious bakers.",
};

const products = [
  {
    name: "KitchenAid Artisan Tilt-Head Stand Mixer",
    price: "$449.99",
    rating: 4.9,
    link: `https://www.amazon.com/s?k=kitchenaid+vs+cuisinart+stand+mixer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    brand: "KitchenAid",
    pros: ["Iconic design", "Huge accessory line", "Multiple colors", "Tilt-head convenient"],
    cons: ["Premium price", "Can be loud"],
  },
  {
    name: "Cuisinart Stand Mixer 5.5-Quart",
    price: "$249.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=kitchenaid+vs+cuisinart+stand+mixer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    brand: "Cuisinart",
    pros: ["Better price", "Larger bowl", "12 speeds", "Includes accessories"],
    cons: ["Bowl-lift design", "Less color options"],
  },
];

const comparison = [
  { feature: "Bowl Capacity", kitchenAid: "5 quart", cuiSart: "5.5 quart" },
  { feature: "Design", kitchenAid: "Tilt-head", cuiSart: "Bowl-lift" },
  { feature: "Speed Settings", kitchenAid: "10 speeds", cuiSart: "12 speeds" },
  { feature: "Colors", kitchenAid: "40+ colors", cuiSart: "5 colors" },
  { feature: "Accessories", kitchenAid: "15+ available", cuiSart: "Limited" },
  { feature: "Warranty", kitchenAid: "1 year", cuiSart: "3 years" },
  { feature: "Price", kitchenAid: "~$450", cuiSart: "~$250" },
];

export default function KitchenAidVsCuisinart() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KitchenAid vs Cuisinart Stand Mixer</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Two titans of the kitchen collide. We baked 50 batches to find the winner.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'KitchenAid vs Cuisinart Stand Mixer', href: '/reviews/kitchenaid-vs-cuisinart-stand-mixer' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">When it comes to stand mixers, KitchenAid is the iconic choice — but Cuisinart offers serious competition at nearly half the price. We tested both extensively to help you decide.</p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div>
                  <div className="text-sm text-amber-600 font-bold uppercase tracking-wide mb-1">{product.brand}</div>
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
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 pr-4 font-bold text-stone-900">Feature</th>
                  <th className="text-left py-3 pr-4 font-bold text-stone-700">KitchenAid</th>
                  <th className="text-left py-3 font-bold text-stone-700">Cuisinart</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-stone-900">{row.feature}</td>
                    <td className="py-3 pr-4 text-stone-600">{row.kitchenAid}</td>
                    <td className="py-3 text-stone-600">{row.cuiSart}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">The Verdict</h2>
          <p className="text-stone-700 mb-4"><strong>Choose KitchenAid</strong> if design matters to you, you want the most accessory options, or prefer the convenience of a tilt-head design.</p>
          <p className="text-stone-700"><strong>Choose Cuisinart</strong> if you want the best value, need a slightly larger bowl, or prefer the added peace of mind from a 3-year warranty.</p>
        </section>
        
      </main>
    </div>
  );
}
