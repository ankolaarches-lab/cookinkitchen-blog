import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Egg Cookers 2026 - Buying Guide",
  description: "The best egg cookers for perfectly cooked eggs every time. We tested the top-rated options.",
};

const products = [
  {
    name: "Dash Rapid Egg Cooker",
    price: "$16.99",
    rating: 4.6,
    reviews: "134,452",
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/DASH-Rapid-Egg-Cooker-Scrambled/dp/B0D3W6XGLR?tag=cookinkitchen-20",
    pros: ["Holds up to 7 eggs", "Multiple cooking modes", "Auto shutoff", "Easy to clean"],
    cons: ["Steamer basket not included"],
  },
  {
    name: "Chefman Electric Egg Cooker",
    price: "$24.99",
    rating: 4.4,
    reviews: "45,678",
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/Chefman-Electric-Egg-Countertop-Removable/dp/B01N7Z9U12?tag=cookinkitchen-20",
    pros: ["Includes poaching tray", "Timer included", "Clear lid", "Dishwasher safe"],
    cons: ["Plastic smell at first"],
  },
  {
    name: "Cuisinart CEC-7 Egg Cooker",
    price: "$29.95",
    rating: 4.5,
    reviews: "28,934",
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/Cuisinart-CEC-7-Egg-Cooker/dp/B0000A1ZN9?tag=cookinkitchen-20",
    pros: ["7-egg capacity", "Auto shutoff", "Measuring cup included", "Long cord"],
    cons: ["No timer sound"],
  },
  {
    name: "Nordic Ware 7-Egg Breakfast Cooker",
    price: "$24.95",
    rating: 4.3,
    reviews: "8,456",
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/Nordic-Ware-7-Egg-Breaky-Cooker/dp/B00005MJHJ?tag=cookinkitchen-20",
    pros: ["Stovetop compatible", "Makes 7 eggs at once", "Durable aluminum", "Affordable"],
    cons: ["Requires stovetop"],
  },
  {
    name: "Mueller Egg Cooker",
    price: "$19.99",
    rating: 4.4,
    reviews: "32,156",
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/Mueller-Egg-Cooker-Steamer-Poacher/dp/B08FC5L3RG?tag=cookinkitchen-20",
    pros: ["6-egg capacity", "Poaching tray", "Steamer basket", "Easy cleanup"],
    cons: ["Small measuring cup"],
  },
];

export default function BestEggCookers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Egg Cookers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Perfectly cooked eggs every time with the best egg cookers for any kitchen.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Egg Cookers 2026', href: '/reviews/best-egg-cookers' }
          ]} />
        </div>
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Get an Egg Cooker?</h2>
          <p className="text-stone-600 mb-4">Egg cookers take the guesswork out of cooking eggs. Whether you want hard-boiled, soft-boiled, poached, or scrambled eggs, these appliances deliver consistent results with minimal effort. Perfect for meal prep or busy mornings!</p>
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
        
      </main>
    </div>
  );
}
