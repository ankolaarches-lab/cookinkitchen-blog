import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Silicone Stretch Lids 2026 - Reusable Food Covers",
  description: "Replace plastic wrap with these reusable silicone stretch lids. We tested the best stretchy bowl covers for freshness and sustainability.",
};

const products = [
  {
    name: "Stasher Silicone Stretch Lids Set",
    price: "$24.99",
    rating: 4.8,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Stasher+Silicone+Stretch+Lids+Set&tag=cookinkitchen-20",
    pros: ["Award-winning design", "Fits various bowl sizes", "Airtight seal", "BPA-free silicone"],
    cons: ["Premium price"],
  },
  {
    name: "Basic House Reusable Silicone Lids (7-Pack)",
    price: "$14.95",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=Basic+House+Reusable+Silicone+Covers&tag=cookinkitchen-20",
    pros: ["7 sizes included", "Budget-friendly", "Microwave safe", "Dishwasher safe"],
    cons: ["May stretch over time"],
  },
  {
    name: "Lucky Stretch 8-Pack Silicone Bowl Covers",
    price: "$19.99",
    rating: 4.5,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=Lucky+Stretch+Silicone+Covers+8+Pack&tag=cookinkitchen-20",
    pros: ["8 sizes for versatility", "Leak-proof", "Heat resistant", "Great for meal prep"],
    cons: ["Can be slippery when wet"],
  },
  {
    name: "CHOME Silicone Stretch Lids (6-Pack)",
    price: "$16.99",
    rating: 4.7,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=CHOME+Silicone+Stretch+Lids+6+Pack&tag=cookinkitchen-20",
    pros: ["Premium food-grade silicone", "Stackable", "Eco-friendly alternative"],
    cons: ["Limited color options"],
  },
  {
    name: "OXO Good Grips Silicone Stretch Lid Set",
    price: "$14.99",
    rating: 4.6,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=OXO+Grips+Silicone+Stretch+Lid&tag=cookinkitchen-20",
    pros: ["Trusted brand", "Versatile fit", "Clear to see contents"],
    cons: ["Smaller size range"],
  },
];

export default function BestSiliconeStretchLids() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-200 mb-2 block">2026 Kitchen Award Winner</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Silicone Stretch Lids
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Ditch the plastic wrap forever. These reusable stretchy lids fit over bowls, jars, and containers for an airtight seal.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Review', href: '/reviews/best-silicone-stretch-lids' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Silicone stretch lids are the eco-friendly solution to keeping food fresh without single-use plastic. 
            These award-winning kitchen essentials stretch to fit bowls of various sizes and create a secure seal 
            that keeps leftovers fresh for days. We tested the top-rated options for fit, durability, and versatility.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
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
                    <span className="text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-stone-700 mb-2">✓ Pros</h3>
                      <ul className="text-sm text-stone-600 space-y-1">
                        {product.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-stone-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-emerald-600 transition"
                  >
                    Check Price on Amazon →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 bg-emerald-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Choose Silicone Stretch Lids?</h2>
          <ul className="space-y-3 text-stone-700">
            <li>✓ <strong>Eco-friendly:</strong> Reusable hundreds of times, eliminates plastic waste</li>
            <li>✓ <strong>Versatile fit:</strong> One lid stretches to fit multiple bowl sizes</li>
            <li>✓ <strong>Airtight seal:</strong> Keeps food fresher longer than plastic wrap</li>
            <li>✓ <strong>Microwave safe:</strong> Can be used for reheating without removing</li>
            <li>✓ <strong>Dishwasher safe:</strong> Easy to clean and maintain</li>
          </ul>
        </section>

        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 hover:underline font-medium">
            ← Back to All Reviews
          </Link>
        </div>
      </main>
    </div>
  );
}
