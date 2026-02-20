import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitchen Organizers 2026 - Buying Guide",
  description: "Drawer organizers, cabinet systems, and more. We tested the best kitchen organizers.",
};

const products = [
  { name: "YouCopia StoraLazzy", price: "$29.99", rating: 4.7, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", link: "https://www.amazon.com/dp/B00M1PM396?tag=cookinkitchen-20", pros: ["Expands cabinet space", "Smooth turn"] },
];

export default function BestOrganizers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Kitchen Organizers 2026</h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex gap-6">
                <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-lg" />
                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  <a href={product.link} className="block bg-stone-900 text-white px-6 py-3 rounded-lg mt-4">Check Price</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="mt-12 text-center"><Link href="/reviews" className="text-emerald-600">← Back</Link></div>
      </main>
    </div>
  );
}
