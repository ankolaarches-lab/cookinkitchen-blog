import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Stand Mixers 2026 - Buying Guide",
  description: "KitchenAid vs Cuisinart vs Bosch. We tested the best stand mixers for baking, pasta, and more.",
};

const products = [
  {
    name: "KitchenAid Artisan Stand Mixer",
    price: "$449.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Tilt-Head-5-Quart/dp/B00005UP77?tag=cookinkitchen-20",
    pros: ["10 speeds", "5 quart bowl", "Multiple colors", "Huge accessory line"],
    cons: ["Pricey", "Can be loud"],
  },
  {
    name: "Cuisinart Stand Mixer",
    price: "$249.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Cuisinart-SM-50BC-5-5-Quart-Stand/dp/B001D2HRD4?tag=cookinkitchen-20",
    pros: ["12 speeds", "5.5 quart bowl", "Includes accessories", "Better price"],
    cons: ["Larger footprint", "Less color options"],
  },
  {
    name: "KitchenAid Professional 5qt",
    price: "$449.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/KitchenAid-Professional-5-Quart-Mixer/dp/B00029JMY0?tag=cookinkitchen-20",
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
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
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
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
