import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitchen Gadgets Under $25 - 2026 Buying Guide",
  description: "Smart kitchen tools under $25 that make cooking easier. We tested the best affordable gadgets from Oxo, Dreamfarm, and more.",
};

const products = [
  {
    name: "OXO Good Grips Chef's Squeeze Bottle Set",
    price: "$14.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/OXO-Grips-Chefs-Squeeze-Bottle/dp/B076PT3BD9?tag=cookinkitchen-20",
    pros: ["Two sizes included", "Precision pour", "Dishwasher safe", "Leak-proof design"],
    cons: ["Plastic construction"],
  },
  {
    name: "Dreamfarm Scizza Kitchen Shears",
    price: "$19.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Dreamfarm-Scizza-Kitchen-Shears/dp/B07X5T7Y8V?tag=cookinkitchen-20",
    pros: ["Spring-loaded", "Comfortable grip", "Built-in herb stripper", "Dishwasher safe"],
    cons: ["Not for heavy-duty cutting"],
  },
  {
    name: "Angry Mama Microwave Cleaner",
    price: "$9.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Angry-Mama-Microwave-Cleaner/dp/B00J1F9RLG?tag=cookinkitchen-20",
    pros: ["Quick cleaning", "Natural ingredients", "Reusable", "Under $10"],
    cons: ["Specific use case"],
  },
  {
    name: "OXO Good Grips Jar Opener",
    price: "$12.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/OXO-Good-Grips-Jar-Opener/dp/B0009YT3JQ?tag=cookinkitchen-20",
    pros: ["Ergonomic handle", "Works on various sizes", "Durable", "Easy to use"],
    cons: ["Takes getting used to"],
  },
  {
    name: "KitchenAid 5-Piece Kitchen Tool Set",
    price: "$24.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/KitchenAid-5-Piece-Kitchen-Tool-Set/dp/B07KPJHZ8F?tag=cookinkitchen-20",
    pros: ["Complete set", "Heat resistant", "Dishwasher safe", "Great value"],
    cons: ["Silicone tips can stain"],
  },
  {
    name: "Herb Scissors (5-Blade)",
    price: "$11.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/5-Blade-Herb-Scissors-Stainless/dp/B0BQR5KQ7Y?tag=cookinkitchen-20",
    pros: ["Cuts herbs quickly", "Easy to clean", "Multiple blades", "Affordable"],
    cons: ["Not for cutting meat"],
  },
];

export default function BestKitchenGadgets2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Kitchen Gadgets Under $25
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Smart tools that won't break the bank. We tested affordable gadgets that actually make cooking easier in 2026.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            You don't need expensive gadgets to make cooking easier. 
            We've tested dozens of affordable kitchen tools under $25 to find the ones that actually deliver. 
            From ergonomic jar openers to handy herb scissors, these budget-friendly picks prove great tools don't have to cost a fortune.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0 bg-stone-100 rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
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
          ))}
        </section>

        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            The <strong>Dreamfarm Scizza Kitchen Shears</strong> are our top pick for 2026. 
            The spring-loaded design makes cutting herbs, paper, and light tasks effortless. 
            Plus the built-in herb stripper is a game-changer for cooking. At under $20, it's an incredible value.
          </p>
          <a
            href="https://www.amazon.com/Dreamfarm-Scizza-Kitchen-Shears/dp/B07X5T7Y8V?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Buy on Amazon
          </a>
        </section>

        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">
            ← Back to All Reviews
          </Link>
        </div>
      </main>
    </div>
  );
}
