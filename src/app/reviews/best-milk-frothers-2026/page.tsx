import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Milk Frothers 2026 - Handheld & Electric Reviews",
  description: "Create cafe-quality foam at home with the best milk frothers of 2026. We tested handheld wands, electric frothers, and more.",
};

const products = [
  {
    name: "Instant Pot 4-in-1 Electric Frother",
    price: "$28.99",
    rating: 4.7,
    link: "https://www.amazon.com/Instant-Pot-Frother-Milk-Steamer/dp/B09V2L7K6F?tag=cookinkitchen-20",
    pros: ["4-in-1 functionality", "Hot and cold foam", "Affordable", "Easy to clean"],
    cons: ["Larger footprint"],
  },
  {
    name: "Bodum Bistro Electric Milk Frother",
    price: "$89.99",
    rating: 4.6,
    link: "https://www.amazon.com/Bodum-11942-250-Bistro-Milk/dp/B004VJ2L4W?tag=cookinkitchen-20",
    pros: ["Premium design", "Consistent froth", "Hot and cold options", "Dishwasher safe"],
    cons: ["Higher price"],
  },
  {
    name: "Zulay Kitchen Powerful Milk Frother Wand",
    price: "$14.99",
    rating: 4.8,
    link: "https://www.amazon.com/Zulay-Kitchen-Milk-Frother/dp/B07Y3K3T9Q?tag=cookinkitchen-20",
    pros: ["Very affordable", "Portable", "Works with any container", "Includes batteries"],
    cons: ["Requires hand holding"],
  },
  {
    name: "Aerolatte Original Handheld Milk Frother",
    price: "$19.99",
    rating: 4.5,
    link: "https://www.amazon.com/Aerolatte-Original-Handheld-Milk-Frother/dp/B0018MCK8W?tag=cookinkitchen-20",
    pros: ["Compact", "Battery operated", "Works in any cup", "Great for travel"],
    cons: ["Battery replacement needed"],
  },
  {
    name: "MatchaBar Electric Matcha Whisk",
    price: "$35.00",
    rating: 4.6,
    link: "https://www.amazon.com/MatchaBar-Electric-Matcha-Whisk/dp/B08G9W4QKQ?tag=cookinkitchen-20",
    pros: ["Perfect for matcha", "Portable", "USB rechargeable", " Whisks smoothly"],
    cons: ["Specialized use"],
  },
];

export default function BestMilkFrothers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-stone-600 to-stone-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Milk Frothers 2026</h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto">Create barista-quality foam at home. We tested the best milk frothers for lattes, cappuccinos, and matcha.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Milk Frothers 2026', href: '/reviews/best-milk-frothers-2026' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            A good milk frother can transform your morning routine. Whether you&apos;re making a classic latte, experimenting with oat milk latte art, or whisking up the perfect matcha, the right frother makes all the difference. We tested everything from handheld wands to electric countertop models to find the best options for every need and budget.
          </p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🥛</span>
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
                  <div className="mb-4">
                    <h3 className="font-semibold text-stone-900 mb-2">Pros</h3>
                    <ul className="text-stone-600 text-sm space-y-1">
                      {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                    </ul>
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-12 bg-stone-100 rounded-2xl p-8 border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4"><strong>Instant Pot 4-in-1 Electric Frother</strong> offers incredible versatility at an affordable price. It can make hot or cold foam, warm milk, and even hot chocolate. The easy cleanup and reliable performance make it our top choice for most home baristas.</p>
          <a href="https://www.amazon.com/Instant-Pot-Frother-Milk-Steamer/dp/B09V2L7K6F?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Buy on Amazon</a>
        </section>
        
      </main>
    </div>
  );
}