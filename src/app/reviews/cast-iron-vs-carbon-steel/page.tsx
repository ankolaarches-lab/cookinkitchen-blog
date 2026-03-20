import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cast Iron vs Carbon Steel - Which is Right for You?",
  description: "A deep dive into cast iron and carbon steel cookware. We compare heat retention, maintenance, and cooking results.",
};

const cookware = [
  {
    name: "Lodge Cast Iron Skillet",
    price: "$44.99",
    rating: 4.8,
    image: "/images/kitchen/10.jpg",
    link: "https://www.amazon.com/s?k=cast+iron+vs+carbon+steel&tag=cookinkitchen-20",
    type: "Cast Iron",
    pros: ["Pre-seasoned", "Affordable", "Great heat retention", "Made in USA"],
    cons: ["Heavy", "Requires seasoning"],
  },
  {
    name: "Stargazer Carbon Steel Skillet",
    price: "$89.00",
    rating: 4.9,
    image: "/images/kitchen/11.jpg",
    link: "https://www.amazon.com/s?k=cast+iron+vs+carbon+steel&tag=cookinkitchen-20",
    type: "Carbon Steel",
    pros: ["Lighter than cast iron", "Slicker surface", "Heats faster", "Professional grade"],
    cons: ["Expensive", "Needs seasoning"],
  },
];

const comparison = [
  { feature: "Weight", castIron: "Heavy (8-10 lbs for 12\")", carbonSteel: "Lighter (3-4 lbs for 12\")" },
  { feature: "Heat Distribution", castIron: "Excellent, slow to heat", carbonSteel: "Excellent, fast to heat" },
  { feature: "Maintenance", castIron: "Season regularly", carbonSteel: "Season regularly" },
  { feature: "Durability", castIron: "Generations", carbonSteel: "Generations" },
  { feature: "Price", castIron: "$30-60", carbonSteel: "$70-150" },
];

export default function CastIronVsCarbonSteel() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cast Iron vs Carbon Steel</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">Two kitchen essentials face off. Which deserves a spot in your kitchen?</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Cast Iron vs Carbon Steel', href: '/reviews/cast-iron-vs-carbon-steel' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">Both cast iron and carbon steel are beloved by professional chefs and home cooks alike. They share similar properties but have distinct differences that may make one better suited for your cooking style.</p>
        </section>
        <section className="space-y-8">
          {cookware.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-emerald-600 font-bold uppercase tracking-wide mb-1">{item.type}</div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{item.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(item.rating))}{"☆".repeat(5 - Math.floor(item.rating))}</span>
                    <span className="text-stone-600">{item.rating}/5</span>
                  </div>
                  <ul className="mb-4 text-stone-600 text-sm space-y-1">
                    {item.pros.map((pro, i) => <li key={i}>✓ {pro}</li>)}
                  </ul>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
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
                  <th className="text-left py-3 pr-4 font-bold text-stone-700">Cast Iron</th>
                  <th className="text-left py-3 font-bold text-stone-700">Carbon Steel</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-stone-900">{row.feature}</td>
                    <td className="py-3 pr-4 text-stone-600">{row.castIron}</td>
                    <td className="py-3 text-stone-600">{row.carbonSteel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Recommendation</h2>
          <p className="text-stone-700 mb-4"><strong>Choose Cast Iron</strong> if you want maximum heat retention at a budget-friendly price. It's nearly indestructible and perfect for slow-cooking dishes.</p>
          <p className="text-stone-700"><strong>Choose Carbon Steel</strong> if you want a lighter pan that heats faster and offers more precise temperature control. Ideal for sautéing and stir-frying.</p>
        </section>
        
      </main>
    </div>
  );
}
