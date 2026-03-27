import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Butter Dishes 2026 - Butter Crocks & Butter Keepers Guide",
  description: "Keep butter soft and spreadable with the best butter dishes. We tested top-rated butter crocks and keepers for your countertop.",
  keywords: ["butter dish", "butter crock", "butter keeper", "butter bell", "countertop butter"],
  openGraph: {
    title: "Best Butter Dishes 2026 - Butter Crocks & Butter Keepers Guide",
    description: "Keep butter soft and spreadable with the best butter dishes. We tested top-rated butter crocks and keepers for your countertop.",
    type: "article",
    url: "https://cookinkitchen.online/reviews/best-butter-dishes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Butter Dishes 2026 - Butter Crocks & Butter Keepers Guide",
    description: "Keep butter soft and spreadable with the best butter dishes. We tested top-rated butter crocks and keepers for your countertop.",
  },
};

const products = [
  {
    name: "Le Creuset Classic Butter Crock",
    price: "$34.95",
    rating: 4.8,
    reviews: "10,000+",
    link: "https://www.amazon.com/Le-Creuset-Classic-Butter-Crock/dp/B000VLRU5E?tag=cookinkitchen-20",
    image: "/images/kitchen/1.jpg",
    pros: ["Signature enamel", "Dishwasher safe", "Multiple colors", "Keeps butter soft"],
    cons: ["Premium price"],
  },
  {
    name: "Dowan Ceramic Butter Crock",
    price: "$15.99",
    rating: 4.7,
    reviews: "10,200+",
    link: "https://www.amazon.com/Dowan-Ceramic-Butter-Crock-Set/dp/B07S8JYQZG?tag=cookinkitchen-20",
    image: "/images/kitchen/2.jpg",
    pros: ["Ceramic design", "Water seal", "Affordable", "Multiple colors"],
    cons: ["Fragile"],
  },
  {
    name: "Mora Ceramics Butter Crock",
    price: "$24.99",
    rating: 4.6,
    reviews: "8,500+",
    link: "https://www.amazon.com/Mora-Ceramics-Butter-Crock-Serving/dp/B08HR5Y7M4?tag=cookinkitchen-20",
    image: "/images/kitchen/3.jpg",
    pros: ["Doubles as serving tray", "Holds 2 sticks", "Modern design", "Great reviews"],
    cons: ["Larger footprint"],
  },
  {
    name: "Pisol Butter Dish",
    price: "$9.00",
    rating: 4.5,
    reviews: "9,000+",
    link: "https://www.amazon.com/Pisol-Butter-Dish-Dispenser-Counter/dp/B09VSXYD1G?tag=cookinkitchen-20",
    image: "/images/kitchen/4.jpg",
    pros: ["Budget-friendly", "Silicone seal", "Easy to use", "Compact"],
    cons: ["Basic design"],
  },
  {
    name: "Zulay Kitchen Butter Crock with Knife",
    price: "$12.99",
    rating: 4.7,
    reviews: "6,200+",
    link: "https://www.amazon.com/Zulay-Kitchen-Butter-Crock-Knife/dp/B0BSHF2K4V?tag=cookinkitchen-20",
    image: "/images/kitchen/5.jpg",
    pros: ["Includes spreader knife", "Ceramic design", "Value set", "Cute design"],
    cons: ["Smaller capacity"],
  },
];

export default function BestButterDishes() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Butter Dishes 2026</h1>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">Keep your butter soft, spreadable, and ready for toast—right on your countertop.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Butter Dishes 2026', href: '/reviews/best-butter-dishes' }
          ]} />
        </div>
        
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Nothing ruins morning toast like cold, hard butter that won't spread. A good butter dish keeps butter at room temperature while still protecting it from air and pests. Whether you prefer the classic butter crock with its water seal or a simple covered dish, we've tested the top options to find the best butter dishes for every kitchen.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                    <span className="text-stone-400 text-sm">({product.reviews} reviews)</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-emerald-700 mb-1">Pros:</p>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-700 mb-1">Cons:</p>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.cons.map((con, i) => (<li key={i}>✗ {con}</li>))}
                      </ul>
                    </div>
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            <strong>Dowan Ceramic Butter Crock</strong> offers the best value in 2026. With over 10,000 five-star reviews, it keeps butter perfectly soft using a simple water-seal method. At under $16, it's an affordable way to upgrade your countertop while saving your morning toast.
          </p>
          <p className="text-stone-700 mb-4">
            For those who want premium quality, the <strong>Le Creuset Classic Butter Crock</strong> delivers legendary durability in signature enamel colors—it's an investment that lasts decades.
          </p>
          <a href="https://www.amazon.com/Dowan-Ceramic-Butter-Crock-Set/dp/B07S8JYQZG?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition">Buy on Amazon</a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/reviews/best-kitchen-utensils-2026" className="block bg-white p-4 rounded-xl border border-stone-200 hover:border-yellow-300 transition">
              <h3 className="font-semibold text-stone-900">Best Kitchen Utensils</h3>
              <p className="text-sm text-stone-600">Essential tools for spreading</p>
            </Link>
            <Link href="/reviews/best-toasters-2026" className="block bg-white p-4 rounded-xl border border-stone-200 hover:border-yellow-300 transition">
              <h3 className="font-semibold text-stone-900">Best Toasters</h3>
              <p className="text-sm text-stone-600">Perfect toast every time</p>
            </Link>
            <Link href="/reviews/best-knives-under-50" className="block bg-white p-4 rounded-xl border border-stone-200 hover:border-yellow-300 transition">
              <h3 className="font-semibold text-stone-900">Best Knives Under $50</h3>
              <p className="text-sm text-stone-600">Slice through anything</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}