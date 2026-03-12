import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Stanley Tumblers 2026 - Buying Guide",
  description: "The best Stanley tumblers and bottles for keeping drinks cold or hot. We reviewed the top options.",
};

const products = [
  {
    name: "STANLEY Quencher H2.0 Tumbler 30 oz",
    price: "$35.00",
    rating: 4.7,
    reviews: "87,956",
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/STANLEY-Flowstate-3-Position-Compatible-Insulated/dp/B0CP9YB3Q4?tag=cookinkitchen-20",
    pros: ["30 oz capacity", "Handle for easy carrying", "Flowstate lid", "Fits most cup holders"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "STANLEY Quencher ProTour Flip Straw 30 oz",
    price: "$33.75",
    rating: 4.7,
    reviews: "14,494",
    image: "/images/kitchen/10.jpg",
    link: "https://www.amazon.com/STANLEY-Quencher-ProTour-Tumbler-Sunrise/dp/B0GFQ1JQVZ?tag=cookinkitchen-20",
    pros: ["Flip straw design", "Built-in straw", "Leakproof", "Great colors"],
    cons: ["Straw can be hard to clean"],
  },
  {
    name: "STANLEY Classic Easy Fill Wide Mouth 40 oz",
    price: "$38.00",
    rating: 4.8,
    reviews: "34,567",
    image: "/images/kitchen/11.jpg",
    link: "https://www.amazon.com/STANLEY-Classic-Insulated-Bottle-Wide/dp/B008FYCNNC?tag=cookinkitchen-20",
    pros: ["40 oz capacity", "Wide mouth", "Great for hiking", "Lifetime warranty"],
    cons: ["No handle"],
  },
  {
    name: "STANLEY Adventure Quencher 14 oz",
    price: "$18.00",
    rating: 4.5,
    reviews: "8,234",
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/STANLEY-Adventure-Quencher-Tumbler-14oz/dp/B09HR1THGD?tag=cookinkitchen-20",
    pros: ["Compact size", "Perfect for coffee", "Durable", "Affordable"],
    cons: ["Smaller capacity"],
  },
  {
    name: "STANLEY GoSeries Water Bottle 18 oz",
    price: "$24.00",
    rating: 4.6,
    reviews: "12,876",
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/STANLEY-GoSeries-Water-Bottle-18oz/dp/B07XJ8C8F5?tag=cookinkitchen-20",
    pros: ["Compact and portable", "Leakproof", "Carabiner compatible", "Great for travel"],
    cons: ["Smaller than others"],
  },
];

export default function BestStanleyTumblers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Stanley Tumblers 2026</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">The iconic Stanley Quencher and more - keep your drinks cold for hours with these viral tumblers.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Stanley Tumblers 2026', href: '/reviews/best-stanley-tumblers' }
          ]} />
        </div>
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Stanley is Everywhere</h2>
          <p className="text-stone-600 mb-4">Stanley tumblers went viral on TikTok and for good reason - they keep drinks cold for up to 11 hours and hot for up to 7 hours. The 30 oz Quencher became a must-have accessory, with hundreds of color options and accessories.</p>
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
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        
      </main>
    </div>
  );
}
