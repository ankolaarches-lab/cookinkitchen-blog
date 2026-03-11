import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Non-Toxic Baking Sheets 2026 - PFAS-Free Guide",
  description: "Skip the toxic chemicals. We tested the best PFAS-free, ceramic, and silicone baking mats and sheets for safe, easy baking.",
};

const products = [
  {
    name: "GreenLife Healthy Ceramic Nonstick Cookie Sheet",
    price: "$19.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=GreenLife+Ceramic+Non+Stick+Cookie+Turquoise?tag=cookinkitchen-20",
    category: "Ceramic",
    pros: ["PFAS-free ceramic coating", "60% fewer CO2 emissions in production", "Reinforced rims prevent warping", "Oven safe to 450°F", "Easy cleanup"],
    cons: ["Hand wash recommended", "Not as durable as metal"],
  },
  {
    name: "Caraway Non-Stick Ceramic Baking Sheet",
    price: "$44.00",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Caraway+Non+Stick+Ceramic+Baking+Sheet?tag=cookinkitchen-20",
    category: "Ceramic",
    pros: ["Beautiful design", "PFTE & PFOA free", "Naturally slick ceramic coating", "Sturdy construction", "Eco-friendly packaging"],
    cons: ["Premium price", "Ceramic can chip if dropped"],
  },
  {
    name: "Silpat Premium Non-Stick Baking Mat",
    price: "$34.95",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Silpat+Classic+Non+Stick+Baking+Mat?tag=cookinkitchen-20",
    category: "Silicone Mat",
    pros: ["Lifetime guarantee", "French-made quality", "Even heat distribution", "PFAS-free silicone", "Lasts for years"],
    cons: ["Premium price", "Can retain odors if not washed properly"],
  },
  {
    name: "Nordic Ware Naturals Half Sheet Pan",
    price: "$14.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Nordic+Ware+Natural+Aluminum+Commercial?tag=cookinkitchen-20",
    category: "Natural Aluminum",
    pros: ["Natural aluminum - no coating", "Commercial quality", "Encapsulated rim prevents warping", "Made in USA", "Very affordable"],
    cons: ["Not non-stick (needs parchment)", "Can discolor over time"],
  },
  {
    name: "BRONYPRO Non-Stick Ceramic Baking Pan Set",
    price: "$39.99",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=BRONYPRO+Ceramic+Baking+Natural+Cookie?tag=cookinkitchen-20",
    category: "Ceramic",
    pros: ["PFOA/PTFE/PFAS free", "Set of 3 sizes", "Silicone handles", "Warp-resistant to 500°F", "Great value"],
    cons: ["Newer brand", "Mixed reviews on durability"],
  },
  {
    name: "Premium Non-Stick Ceramic Baking Sheet",
    price: "$24.99",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Premium+Non+Stick+Ceramic+Baking+Sheet?tag=cookinkitchen-20",
    category: "Ceramic",
    pros: ["PFAS and PFOA free", "Healthy ceramic coating", "Non-toxic and non-allergic", "Warp-resistant", "Medium size versatile"],
    cons: ["Smaller than standard half sheet", "Hand wash recommended"],
  },
  {
    name: "Our Place Griddle Pan / Baking Sheet",
    price: "$55.00",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Our+Place+Griddle+Pan+Toxin+Free?tag=cookinkitchen-20",
    category: "Ceramic",
    pros: ["Dual-function (stovetop & oven)", "Toxin-free ceramic coating", "No PFAS, PTFE, PFOA, lead, or cadmium", "Oven safe to 450°F", "Versatile design"],
    cons: ["Not a traditional baking sheet", "Premium price"],
  },
  {
    name: "Amazon Basics Ceramic Nonstick Baking Sheet",
    price: "$18.99",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=AmazonBasics+Ceramic+Nonstick+Baking+Sheet?tag=cookinkitchen-20",
    category: "Ceramic",
    pros: ["Affordable", "PFAS-free ceramic", "Includes cooling rack", "Half sheet size", "Easy release"],
    cons: ["Less durable long-term", "Can stain with tomato-based foods"],
  },
];

export default function BestNonToxicBakingSheets() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Non-Toxic Baking Sheets 2026</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">Skip the PFAS and PTFE. Here are the safest options for healthy baking.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">Traditional non-stick baking sheets often contain PFAS (per- and polyfluoroalkyl substances) or PTFE (polytetrafluoroethylene), which can release toxic chemicals when heated. If you're looking to reduce exposure to "forever chemicals" in your kitchen, these PFAS-free, ceramic, and silicone options deliver excellent results without the health concerns. We've tested them for heat distribution, release capability, durability, and overall baking performance.</p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-lg flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-bold text-stone-700 mb-2">Pros</p>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-700 mb-2">Cons</p>
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
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4"><strong>Silpat Premium</strong> remains the gold standard for non-toxic baking. Made in France with a lifetime guarantee, this silicone mat provides perfect release, even heat distribution, and will last for years with proper care. While the upfront cost is higher, the longevity makes it a worthwhile investment. Pair it with Nordic Ware's natural aluminum pans for the ultimate non-toxic baking setup.</p>
          <a href="https://www.amazon.com/s?k=Silpat+Classic+Non+Stick+Baking+Mat?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy Silpat on Amazon</a>
        </section>
        <section className="mt-8 bg-stone-100 rounded-2xl p-8 border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">What to Look For</h2>
          <ul className="text-stone-700 space-y-3">
            <li><strong>PFAS/PTFE/PFOA Free:</strong> Look for explicit "PFAS-free" or "PFOA-free" labeling</li>
            <li><strong>Ceramic Coating:</strong> Natural mineral-based coating that's non-toxic when heated</li>
            <li><strong>Silicone Mats:</strong> Food-grade silicone that can be used for years</li>
            <li><strong>Natural Aluminum:</strong> Uncoated aluminum is naturally non-toxic (just use parchment)</li>
            <li><strong>Heat Resistance:</strong> Ensure rated for oven temperatures you typically use</li>
          </ul>
        </section>
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
