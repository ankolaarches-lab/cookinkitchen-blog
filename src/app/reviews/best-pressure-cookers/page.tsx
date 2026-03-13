import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Pressure Cookers 2026 - Buying Guide",
  description: "Instant Pot vs Ninja Foodi vs stovetop. We tested the best pressure cookers for fast, delicious meals.",
};

const products = [
  {
    name: "Instant Pot Duo 7-in-1",
    price: "$89.95",
    rating: 4.8,
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/s?k=Instant+Pot+Duo+7+in+1?tag=cookinkitchen-20",
    pros: ["7 functions", "Easy to use", "Recipe book included", "Affordable"],
    cons: ["6 quart may be small for families"],
  },
  {
    name: "Ninja Foodi 9-in-1",
    price: "$149.99",
    rating: 4.7,
    image: "/images/kitchen/10.jpg",
    link: "https://www.amazon.com/s?k=Ninja+Foodi+Pressure+Cooker?tag=cookinkitchen-20",
    pros: ["Pressure cook & air fry", "9 functions", "Large capacity", "Crisp lid"],
    cons: ["Takes counter space", "More complex"],
  },
  {
    name: "Instant Pot Ultra 10-in-1",
    price: "$129.95",
    rating: 4.8,
    image: "/images/kitchen/11.jpg",
    link: "https://www.amazon.com/s?k=Instant+Pot+Ultra+10+in+1?tag=cookinkitchen-20",
    pros: ["10 functions", "Altitude adjustment", "Advanced controls", "Ssous vide capable"],
    cons: ["Higher price", "Learning curve"],
  },
];

export default function BestPressureCookers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Pressure Cookers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Fast, tender meals in a fraction of the time. We tested Instant Pot, Ninja, and more.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Pressure Cookers 2026', href: '/reviews/best-pressure-cookers' }
          ]} />
        </div>
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
        
      
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Guides & Reviews</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <a href="/blog/instant-pot-recipes-beginners" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Instant Pot Recipes for Beginners</h3>
              <p className="text-sm text-stone-600 mt-1">Start pressure cooking</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
