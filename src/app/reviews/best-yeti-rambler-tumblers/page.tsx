import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best YETI Rambler Tumblers 2026 - Buying Guide",
  description: "The best YETI Rambler tumblers and bottles for keeping drinks cold or hot. We reviewed the top options.",
};

const products = [
  {
    name: "YETI Rambler 20 oz with MagSlider Lid",
    price: "$28.00",
    rating: 4.8,
    reviews: "144,772",
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/YETI-Rambler-Stainless-Insulated-MagSlider/dp/B0F9ZXFN2J?tag=cookinkitchen-20",
    pros: ["Excellent insulation", "MagSlider lid prevents spills", "Dishwasher safe", "Durable stainless steel"],
    cons: [" Lid not fully leakproof"],
  },
  {
    name: "YETI Rambler 30 oz Tumbler",
    price: "$35.00",
    rating: 4.7,
    reviews: "87,956",
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/STANLEY-Flowstate-3-Position-Compatible-Insulated/dp/B0CP9YB3Q4?tag=cookinkitchen-20",
    pros: ["Great capacity", "Handle for easy carrying", "Keeps ice for hours", "Fits most cup holders"],
    cons: ["Heavy when full"],
  },
  {
    name: "YETI Rambler 14 oz Mug",
    price: "$22.00",
    rating: 4.6,
    reviews: "12,448",
    image: "/images/kitchen/7.jpg",
    link: "https://www.amazon.com/YETI-Rambler-14oz-Stainless-Insulated/dp/B07QH4P8JW?tag=cookinkitchen-20",
    pros: ["Perfect for coffee", "Durable handle", "No-sweat design", "Great for desk"],
    cons: ["Smaller capacity"],
  },
  {
    name: "YETI Rambler 36 oz Bottle",
    price: "$45.00",
    rating: 4.8,
    reviews: "45,321",
    image: "/images/kitchen/8.jpg",
    link: "https://www.amazon.com/YETI-Rambler-36oz-Bottle-Stainless/dp/B07Y5W6CC6?tag=cookinkitchen-20",
    pros: ["All-day hydration", "Ultimate insulation", "Great for hiking", "Wide mouth"],
    cons: ["Doesn't fit all cup holders"],
  },
  {
    name: "YETI Rambler 24 oz Hot/ Cold Jug",
    price: "$38.00",
    rating: 4.7,
    reviews: "28,954",
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/YETI-Rambler-Jug-Stainless-Insulated/dp/B09X7J5ZKC?tag=cookinkitchen-20",
    pros: ["Hot for 7 hours", "Cold for 11 hours", "Built-in cup", "Excellent build quality"],
    cons: ["No handle"],
  },
];

export default function BestYETIRamblerTumblers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best YETI Rambler Tumblers 2026</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Keep your drinks ice-cold or piping hot with the best YETI Rambler tumblers and bottles.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Choose a YETI Rambler?</h2>
          <p className="text-stone-600 mb-4">YETI Rambler tumblers are built with double-wall vacuum insulation, keeping your drinks cold for hours or hot for as long as you need. They're designed to withstand whatever you can throw at them, from morning coffee to outdoor adventures.</p>
        </section>
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                    <span className="text-stone-400 text-sm">({product.reviews} reviews)</span>
                  </div>
                  <ul className="mb-4 text-stone-600 text-sm space-y-1">
                    {product.pros.map((pro, i) => <li key={i}>✓ {pro}</li>)}
                  </ul>
                  <ul className="mb-4 text-stone-500 text-sm space-y-1">
                    {product.cons.map((con, i) => <li key={i}>✗ {con}</li>)}
                  </ul>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition">Check Price on Amazon</a>
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
