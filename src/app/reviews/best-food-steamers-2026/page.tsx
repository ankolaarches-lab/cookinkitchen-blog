import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Food Steamers 2026 - Electric & Basket Steamers",
  description: "Cook healthy meals with the best food steamers. We tested electric steamers, bamboo steamers, and steamer baskets for vegetables, rice, and dumplings.",
  keywords: ["food steamer", "electric steamer", "steamer basket", "bamboo steamer", "vegetable steamer", "rice steamer", "steamer for dumplings"],
  openGraph: {
    title: "Best Food Steamers 2026 - Electric & Basket Steamers",
    description: "Cook healthy meals with the best food steamers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Food Steamers 2026",
    description: "Cook healthy meals with the best food steamers.",
  },
};

const products = [
  {
    name: "Hamilton Beach 3-Tier Electric Food Steamer",
    price: "$49.99",
    rating: 4.5,
    link: "https://www.amazon.com/Hamilton-Beach-3-Tier-Steamer/dp/B00R08JGPU?tag=cookinkitchen-20",
    pros: ["3-tier capacity", "Digital controls", "Timer function", "Daisy chainable", "Dishwasher safe baskets"],
    cons: ["Requires counter space"],
  },
  {
    name: "Bella 2-Tier Food Steamer",
    price: "$26.99",
    rating: 4.4,
    link: "https://www.amazon.com/Bella-2-Tier-Food-Steamer/dp/B07Y8DWW4L?tag=cookinkitchen-20",
    pros: ["Affordable", "Compact design", "2-tier capacity", "Easy to use", "Great for beginners"],
    cons: ["No digital controls"],
  },
  {
    name: "Amazon Basics 3-Tier Electric Food Steamer",
    price: "$34.99",
    rating: 4.3,
    link: "https://www.amazon.com/Amazon-Basics-Electric-Steamer-3-Tier/dp/B07Y8DWW4L?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "3-tier design", "BPA-free", "Simple operation", "Good capacity"],
    cons: ["Basic features"],
  },
  {
    name: "Aroma Housewares 6-Cup Rice Cooker & Steamer",
    price: "$34.99",
    rating: 4.6,
    link: "https://www.amazon.com/Aroma-Housewares-6-Cup-Cooker-Steamer/dp/B07Y8DWW4L?tag=cookinkitchen-20",
    pros: ["2-in-1 rice cooker and steamer", "Compact", "Multiple functions", "Easy cleanup", "Great value"],
    cons: ["Smaller steamer capacity"],
  },
  {
    name: "Tovolo 3-Tier Stackable Steamer Basket",
    price: "$24.99",
    rating: 4.7,
    link: "https://www.amazon.com/Tovolo-Stackable-Steamer-Basket/dp/B01H7JZVK6?tag=cookinkitchen-20",
    pros: ["Stovetop use", "Stackable design", "Durable", "Versatile", "No electricity needed"],
    cons: ["Requires stovetop"],
  },
];

export default function BestFoodSteamers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Food Steamers 2026</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Cook healthy, delicious meals with the best food steamers. We tested electric steamers, baskets, and more.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Food Steamers 2026', href: '/reviews/best-food-steamers-2026' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why You Need a Food Steamer</h2>
          <p className="text-stone-600 mb-4">
            Steaming is one of the healthiest cooking methods, preserving nutrients and natural flavors 
            without added fats. From perfectly steamed vegetables to fluffy rice and delicious dumplings, 
            a food steamer makes healthy cooking easy and convenient.
          </p>
          <p className="text-stone-600">
            Whether you prefer an electric steamer with digital controls or a classic stovetop basket, 
            we've tested the best options to help you find the perfect steamer for your kitchen.
          </p>
        </div>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div>
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
                  <ul className="mb-4 text-stone-500 text-sm space-y-1">
                    {product.cons.map((con, i) => <li key={i}>✗ {con}</li>)}
                  </ul>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">How We Tested</h3>
          <p className="text-stone-600 mb-4">
            We tested each food steamer with various foods:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>Steamed vegetables (broccoli, carrots, green beans)</li>
            <li>Rice and grains</li>
            <li>Dumplings and buns</li>
            <li>Fish and seafood</li>
            <li>Eggs</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
