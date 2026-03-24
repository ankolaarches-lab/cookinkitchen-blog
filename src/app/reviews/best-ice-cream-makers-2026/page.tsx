import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Ice Cream Makers 2026 - Complete Buying Guide",
  description: "Make delicious homemade ice cream, gelato, and sorbet with the best ice cream makers. We tested top-rated countertop and portable models.",
  keywords: ["ice cream maker", "gelato maker", "homemade ice cream", "sorbet maker", "frozen dessert maker", "Ninja Creami", "Cuisinart ice cream maker"],
  openGraph: {
    title: "Best Ice Cream Makers 2026 - Complete Buying Guide",
    description: "Make delicious homemade ice cream, gelato, and sorbet with the best ice cream makers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Ice Cream Makers 2026",
    description: "Make delicious homemade ice cream with the best ice cream makers.",
  },
};

const products = [
  {
    name: "Ninja Creami Deluxe Ice Cream Maker",
    price: "$199.99",
    rating: 4.7,
    link: "https://www.amazon.com/Ninja-Creami-Deluxe-Ice-Cream/dp/B0BSHFPRHW?tag=cookinkitchen-20",
    pros: ["7-in-1 functionality", "Multiple texture options", "Large capacity", "Easy to use", "Makes protein ice cream"],
    cons: ["Premium price"],
  },
  {
    name: "Cuisinart ICE-30BCP1 Pure Indulgence",
    price: "$114.99",
    rating: 4.6,
    link: "https://www.amazon.com/Cuisinart-ICE-30BCP1-Indulgence-1-Quart/dp/B003KYSLMW?tag=cookinkitchen-20",
    pros: ["1.5 quart capacity", "Double-insulated freezer bowl", "Easy cleanup", "Great price", "Makes ice cream, sorbet, frozen yogurt"],
    cons: ["Requires pre-freezing bowl"],
  },
  {
    name: "Cuisinart ICE-21 1.5 Quart Ice Cream Maker",
    price: "$79.99",
    rating: 4.5,
    link: "https://www.amazon.com/Cuisinart-ICE-21-1-Quart-Ice-Cream/dp/B003KYSLMW?tag=cookinkitchen-20",
    pros: ["Affordable", "Simple operation", "1.5 quart capacity", "Compact design", "Good for beginners"],
    cons: ["Noisy motor"],
  },
  {
    name: "Ninja SLUSHi Max Frozen Drink Maker",
    price: "$149.99",
    rating: 4.6,
    link: "https://www.amazon.com/Ninja-SLUSHi-Max-Frozen-Drink/dp/B0CVJLBQ1Y?tag=cookinkitchen-20",
    pros: ["Makes slushies and frozen drinks", "Dual pods", "Countertop design", "Fast freezing", "Fun for parties"],
    cons: ["Limited to frozen beverages only"],
  },
  {
    name: "Lello 4080 Musso Lussino Ice Cream Maker",
    price: "$799.99",
    rating: 4.8,
    link: "https://www.amazon.com/Lello-4080-Musso-Lussino-Ice-Cream/dp/B00NMF3B5W?tag=cookinkitchen-20",
    pros: ["Professional quality", "Built-in compressor", "Makes gelato and ice cream", "Stainless steel design", "No pre-freezing needed"],
    cons: ["Very expensive", "Large footprint"],
  },
];

export default function BestIceCreamMakers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Ice Cream Makers 2026</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">Create delicious homemade ice cream, gelato, and frozen treats with the best ice cream makers for every budget.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Ice Cream Makers 2026', href: '/reviews/best-ice-cream-makers-2026' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why You Need an Ice Cream Maker</h2>
          <p className="text-stone-600 mb-4">
            Homemade ice cream allows you to control ingredients, experiment with unique flavors, 
            and enjoy fresher treats than store-bought options. Whether you want classic vanilla, 
            rich chocolate gelato, or creative flavors like lavender honey, an ice cream maker opens up 
            endless possibilities.
          </p>
          <p className="text-stone-600">
            From simple countertop models to professional compressor machines, we've tested the best 
            ice cream makers to help you find the perfect fit for your kitchen and budget.
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

        <div className="mt-12 bg-pink-50 rounded-2xl p-8 border border-pink-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">How We Tested</h3>
          <p className="text-stone-600 mb-4">
            We tested each ice cream maker with various recipes including:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>Classic vanilla ice cream</li>
            <li>Chocolate gelato</li>
            <li>Fruit sorbet</li>
            <li>Frozen yogurt</li>
            <li>Protein ice cream (where applicable)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
