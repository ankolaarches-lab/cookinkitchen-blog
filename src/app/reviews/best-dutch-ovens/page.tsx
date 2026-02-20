import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dutch Ovens 2026 - Buying Guide",
  description: "From Le Creuset to Lodge, we tested the best Dutch ovens for braising, baking bread, and slow cooking.",
};

const products = [
  {
    name: "Le Creuset Enameled Cast Iron Dutch Oven",
    price: "$369.95",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612969497501-09ab6b20dbf4?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Creuset-Enameled-Cast-Iron-Dutch/dp/B00K5X14G6?tag=cookinkitchen-20",
    pros: ["Excellent heat retention", "Enameled interior", "Lifetime warranty", "Beautiful colors"],
    cons: ["Premium price", "Heavy"],
  },
  {
    name: "Lodge Cast Iron Dutch Oven",
    price: "$59.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612969497501-09ab6b20dbf4?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Lodge-Cast-Iron-Dutch-Oven-5-Quart/dp/B000N6ZTBW?tag=cookinkitchen-20",
    pros: ["Affordable", "Pre-seasoned", "Made in USA", "Versatile"],
    cons: ["Requires seasoning", "Plain design"],
  },
  {
    name: "Staub Enameled Cast Iron Dutch Oven",
    price: "$299.95",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612969497501-09ab6b20dbf4?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Staub-Classic-Enameled-Cast-Iron/dp/B007X1NQ5I?tag=cookinkitchen-20",
    pros: ["Black matte enamel", "Self-basting lid", "Oven safe to 500°F", "Great for bread"],
    cons: ["Expensive"],
  },
  {
    name: "AmazonBasics Enameled Cast Iron Dutch Oven",
    price: "$69.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1612969497501-09ab6b20dbf4?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/AmazonBasics-Enameled-Cast-Iron-Dutch/dp/B08J4CRY5P?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Multiple colors", "6 quart size", "Glass lid"],
    cons: ["Not as durable", "Lower heat retention"],
  },
];

export default function BestDutchOvens2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Dutch Ovens 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">We tested the top Dutch ovens for bread, braising, and slow cooking.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">A good Dutch oven is a kitchen workhorse. Perfect for braising meats, baking artisan bread, or slow cooking stews. We tested enameled and raw cast iron options to find the best.</p>
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
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4"><strong>Le Creuset Enameled Cast Iron Dutch Oven</strong> is the gold standard. Excellent heat retention, beautiful enamel that lasts decades, and comes with a lifetime warranty.</p>
          <a href="https://www.amazon.com/Creuset-Enameled-Cast-Iron-Dutch/dp/B00K5X14G6?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy on Amazon</a>
        </section>
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
