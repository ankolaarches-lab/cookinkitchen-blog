import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Citrus Juicers 2026 - Lemon & Lime Squeezers Buying Guide",
  description: "Get fresh citrus juice with the best lemon squeezers and citrus juicers. We tested top-rated manual and electric models for maximum extraction.",
  keywords: ["citrus juicer", "lemon squeezer", "lime juicer", "orange squeezer", "manual juicer", "electric citrus juicer"],
  openGraph: {
    title: "Best Citrus Juicers 2026 - Lemon & Lime Squeezers Buying Guide",
    description: "Get fresh citrus juice with the best lemon squeezers and citrus juicers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Citrus Juicers 2026",
    description: "Get fresh citrus juice with the best lemon squeezers.",
  },
};

const products = [
  {
    name: "Zulay Kitchen Metal 2-in-1 Lemon Squeezer",
    price: "$14.99",
    rating: 4.7,
    link: "https://www.amazon.com/Rated-Zulay-Premium-Quality-Squeezer/dp/B00YBP918M?tag=cookinkitchen-20",
    pros: ["2-in-1 design", "Stainless steel", "Maximum extraction", "Easy to clean", "Durable construction"],
    cons: ["Requires some hand strength"],
  },
  {
    name: "Chef'n LemonDrop Handheld Citrus Juicer",
    price: "$19.99",
    rating: 4.6,
    link: "https://www.amazon.com/Chefn-2751001-LemonDrop-Citrus/dp/B00004OCK5?tag=cookinkitchen-20",
    pros: ["Innovative design", "Built-in filter", "Dishwasher safe", "Comfortable handle"],
    cons: ["Smaller capacity"],
  },
  {
    name: "Kitchenaid Citrus Squeezer",
    price: "$24.99",
    rating: 4.5,
    link: "https://www.amazon.com/KitchenAid-KT6090AQ-Citrus-Squeezer/dp/B00004OCMU?tag=cookinkitchen-20",
    pros: ["Ridged cup prevents slipping", "Stainless steel", "Professional quality", "Easy to use"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "Dreamfarm Fluicer Citrus Juicer",
    price: "$29.99",
    rating: 4.8,
    link: "https://www.amazon.com/Dreamfarm-Fluicer-Citrus-Squeezer-Green/dp/B01H7JZVK6?tag=cookinkitchen-20",
    pros: ["Innovative flipping design", "Maximum juice extraction", "Catches seeds", "Ergonomic"],
    cons: ["Premium price"],
  },
  {
    name: "OXO Good Grips Citrus Juicer",
    price: "$19.99",
    rating: 4.5,
    link: "https://www.amazon.com/OXO-Good-Grips-Citrus-Juicer/dp/B00004OCLR?tag=cookinkitchen-20",
    pros: ["Non-slip handle", "Built-in filter", "Drip-free spout", "Dishwasher safe"],
    cons: ["May need more pressure"],
  },
];

export default function BestCitrusJuicers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Citrus Juicers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Fresh citrus juice at your fingertips. We tested the best lemon squeezers and citrus juicers.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Citrus Juicers 2026', href: '/reviews/best-citrus-juicers-2026' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why You Need a Citrus Juicer</h2>
          <p className="text-stone-600 mb-4">
            Fresh citrus juice adds bright, vibrant flavor to recipes, cocktails, and morning routines. 
            A quality citrus juicer extracts more juice than hand-squeezing and catches seeds and pulp, 
            making your kitchen time more efficient and enjoyable.
          </p>
          <p className="text-stone-600">
            Whether you prefer a manual lemon squeezer for occasional use or an electric juicer for daily fresh juice, 
            we've tested the top models to find the best performers for every kitchen.
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

        <div className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">How We Tested</h3>
          <p className="text-stone-600 mb-4">
            We tested each citrus juicer with lemons, limes, and oranges to evaluate:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>Juice extraction efficiency</li>
            <li>Ease of use and comfort</li>
            <li>Seed and pulp filtration</li>
            <li>Cleaning difficulty</li>
            <li>Durability and build quality</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
