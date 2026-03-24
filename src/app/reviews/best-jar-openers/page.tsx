import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Jar Openers 2026 - For Weak Hands & Easy Opening",
  description: "Struggling with stuck lids? We tested the best jar openers for seniors, weak hands, and everyone in between. Open jars with ease.",
};

const products = [
  {
    name: "KitchenAid Jar Opener",
    price: "$19.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=KitchenAid+KJ7220+Classic+Jar+Opener&tag=cookinkitchen-20",
    pros: ["Electric - no effort needed", "Fits most jar sizes", "Sturdy construction", "One-touch operation"],
    cons: ["Needs outlet", "Takes counter space"],
  },
  {
    name: "M搏 Jar Opener (Adjustable)",
    price: "$14.99",
    rating: 4.5,
    link: "https://www.amazon.com/s?k=Jar+Opener+Adjustable+Stainless+Kitchen&tag=cookinkitchen-20",
    pros: ["Portable", "Adjustable grip", "No tools needed", "Budget-friendly"],
    cons: ["Requires hand strength"],
  },
  {
    name: "OXO Good Grips Jar Opener",
    price: "$12.99",
    rating: 4.8,
    link: "https://www.amazon.com/s?k=OXO+Good+Grips+Jar+Opener&tag=cookinkitchen-20",
    pros: ["Lever design", "Non-slip grip", "Compact storage", "Lifetime warranty"],
    cons: ["May not work on all lids"],
  },
  {
    name: "Sunstive Jar Lid Gripper Set",
    price: "$9.99",
    rating: 4.4,
    link: "https://www.amazon.com/s?k=Sunstive+Opener+Gripper+Kitchen&tag=cookinkitchen-20",
    pros: ["Set of 3 sizes", "Silicone non-slip", "Dishwasher safe", "Very affordable"],
    cons: ["Manual effort required"],
  },
  {
    name: "Smooth Edge Can Opener & Jar Opener",
    price: "$16.99",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=Smooth+Can+Opener+Automatic+Jar&tag=cookinkitchen-20",
    pros: ["2-in-1 tool", "Automatic operation", "Battery powered", "Safe edge"],
    cons: ["Batteries not included"],
  },
];

export default function BestJarOpeners() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Jar Openers 2026
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Stuck lids? No problem. We tested the best jar openers for weak hands, seniors, and anyone who wants effortless opening.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Review', href: '/reviews/best-jar-openers' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Whether you have arthritis, weak grip, or just encounter stubborn lids, the right jar opener makes a huge difference. 
            We tested electric, lever-style, and gripper options to find the best for every need and budget.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div>
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
            The <strong>OXO Good Grips Jar Opener</strong> is our top pick for most people. 
            The lever design provides excellent leverage without requiring electricity, and the non-slip grip 
            stays secure on wet or greasy lids. It's compact, affordable, and backed by OXO's lifetime warranty.
          </p>
          <a
            href="https://www.amazon.com/s?k=OXO+Good+Grips+Jar+Opener&tag=cookinkitchen-20"
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
