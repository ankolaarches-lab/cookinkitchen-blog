import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Stand Mixers 2026 - Buying Guide",
  description: "KitchenAid vs Cuisinart vs Bosch. We tested the best stand mixers for baking, pasta, and more.",
};

const products = [
  {
    name: "KitchenAid Artisan Stand Mixer",
    price: "$449.99",
    rating: 4.9,
    link: `https://www.amazon.com/s?k=KitchenAid+KSM150PSER+Artisan+Tilt+Head+5+Quart&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["10 speeds", "5 quart bowl", "Multiple colors", "Huge accessory line"],
    cons: ["Pricey", "Can be loud"],
  },
  {
    name: "Cuisinart Stand Mixer",
    price: "$249.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Cuisinart+SM+50BC+5+5+Quart+Stand&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["12 speeds", "5.5 quart bowl", "Includes accessories", "Better price"],
    cons: ["Larger footprint", "Less color options"],
  },
  {
    name: "KitchenAid Professional 5qt",
    price: "$449.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=KitchenAid+Professional+5+Quart+Mixer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Bowl-lift design", "More powerful", "Professional grade", "6 quart bowl"],
    cons: ["Heavier", "No tilt head"],
  },
];

export default function BestStandMixers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Stand Mixers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">From cookies to bread, we tested the best stand mixers for serious bakers.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Stand Mixers 2026', href: '/reviews/best-stand-mixers' }
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
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/reviews/best-stand-mixers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Best Stand Mixers</h3>
              <p className="text-sm text-stone-600 mt-1">Mixing solutions</p>
            </a>
            <a href="/reviews/kitchenaid-vs-cuisinart-stand-mixer" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">KitchenAid vs Cuisinart</h3>
              <p className="text-sm text-stone-600 mt-1">Compare mixers</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
