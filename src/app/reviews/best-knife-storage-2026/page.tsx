import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Knife Storage Solutions 2026 - Buyer Guide",
  description: "Keep your knives safe and sharp with the best knife storage. We tested blocks, magnetic strips, and drawer organizers.",
};

const products = [
  {
    name: "Wüsthof 7-Slot Knife Block",
    price: "$39.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "amazon.com/s?k=W%C3%BCsthof+7+Slot+Knife+Block?tag=cookinkitchen-20",
    pros: ["Solid beech wood construction", "Fits most knife sizes", "Keeps blades sharp", "Lifetime warranty"],
    cons: ["Takes counter space"],
  },
  {
    name: "Chef'sPath Magnetic Knife Strip (20 inch)",
    price: "$24.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "amazon.com/s?k=Ch%C2%B4fsPath+Magnetic+Knife+Strip?tag=cookinkitchen-20",
    pros: ["Saves valuable counter space", "Strong magnet", "Easy wall installation", "Fits any knife size"],
    cons: ["Requires wall mounting"],
  },
  {
    name: "Joseph Joseph Expandable Knife Drawer Organizer",
    price: "$29.99",
    rating: 4.6,
    image: "🗄️",
    link: "amazon.com/s?k=Joseph+Jos+Select+Drawer+Organizer?tag=cookinkitchen-20",
    pros: ["Fits inside drawer", "Expandable design", "Non-slip base", "Maximum space-saving"],
    cons: ["Requires drawer space"],
  },
  {
    name: "Knife Safe Magnetic Knife Block",
    price: "$34.99",
    rating: 4.5,
    image: "🛡️",
    link: "amazon.com/s?k=Magnetic+Knife+Block+Organizer+Set?tag=cookinkitchen-20",
    pros: ["Compact design", "Dual magnetic sides", "Includes sharpening rod", "Modern look"],
    cons: ["Limited knife capacity"],
  },
  {
    name: "Prociension Knife Bar Magnetic Strip (24 inch)",
    price: "$39.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "amazon.com/s?k=Prociension+Knife+Bar+Magnetic+Strip?tag=cookinkitchen-20",
    pros: ["Extra long 24 inch", "Heavy-duty magnet", "Screw or adhesive mount", "Professional grade"],
    cons: ["Premium price"],
  },
];

export default function BestKnifeStorage2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Knife Storage Solutions 2026
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Protect your blades and keep them sharp. From counter blocks to magnetic strips — find your perfect match.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Proper knife storage is essential for maintaining sharp edges and extending the life of your knives. 
            We tested the top knife storage solutions in 2026 — from classic wood blocks to modern magnetic strips 
            and drawer organizers. Here's what we found.
          </p>
        </section>

        {/* Products */}
        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="text-6xl flex items-center">{product.image}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="text-stone-600 text-sm mb-4 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i}>✓ {pro}</li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
                    >
                      Check Price on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Recommendation */}
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            The <strong>Wüsthof 7-Slot Knife Block</strong> remains our top pick for most kitchens. 
            The quality beech wood construction protects blades, the slots fit most knife sizes, and 
            it's backed by Wüsthof's lifetime warranty. It's a classic that works.
          </p>
          <p className="text-stone-700 mb-4">
            For those short on counter space, the <strong>Chef'sPath Magnetic Knife Strip</strong> offers 
            excellent value at under $25 while keeping knives easily accessible and sharp.
          </p>
          <a
            href="amazon.com/s?k=W%C3%BCsthof+7+Slot+Knife+Block?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Buy Wüsthof on Amazon
          </a>
        </section>

        {/* Back to Reviews */}
        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="text-emerald-600 font-medium hover:underline"
          >
            ← Back to All Reviews
          </Link>
        </div>
      
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/reviews/best-knife-sharpener" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Best Knife Sharpeners</h3>
              <p className="text-sm text-stone-600 mt-1">Keep knives sharp</p>
            </a>
            <a href="/reviews/best-knife-storage-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Best Knife Storage</h3>
              <p className="text-sm text-stone-600 mt-1">Protect your knives</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
