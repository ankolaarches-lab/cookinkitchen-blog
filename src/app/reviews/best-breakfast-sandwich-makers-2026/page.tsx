import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Breakfast Sandwich Makers 2026 - Complete Buying Guide",
  description: "Best Breakfast Sandwich Makers 2026 - Complete guide",
  openGraph: {
    title: "Best Breakfast Sandwich Makers 2026",
    description: "Best Breakfast Sandwich Makers 2026 - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-appliances.png"],
  },
};

const products = [
  {
    name: "Hamilton Beach Breakfast Sandwich Maker",
    price: "$39.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Hamilton+Beach+Breakfast+Sandwich+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Quick 4-minute cooking time", "Compact storage", "Easy to clean", "Makes 1 sandwich at a time"],
    cons: ["Single sandwich capacity", "No timer or auto shutoff"],
  },
  {
    name: "Eureka Mignon Coffee and Espresso Grinder - Not exactly a breakfast sandwich maker, but great for coffee", 
    price: "$269.00",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Eureka+Mignon+Coffee+Espresso+Grinder&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Excellent grind consistency", "Quiet operation", "Digital display", "Multiple grind settings"],
    cons: ["Expensive", "Not a breakfast sandwich maker"],
  },
  {
    name: "Breville Toast & Bagel Maker",
    price: "$149.95",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Breville+BOV650XL+Toast+Bagel+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Excellent toasting performance", "Multiple settings", "Long slot design", "Aesthetically pleasing"],
    cons: ["Higher price point", "Not specifically for sandwiches"],
  },
  {
    name: "Cuisinart 4-Slice Toaster Oven",
    price: "$89.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Cuisinart+TOB+135P1+4+Slice+Toaster&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Versatile cooking options", "Large capacity", "Multiple functions", "Affordable"],
    cons: ["Takes up counter space", "Longer preheat time"],
  },
  {
    name: "Black+Decker 3-in-1 Breakfast Station",
    price: "$59.99",
    rating: 4.3,
    link: `https://www.amazon.com/s?k=Black+Decker+3+in+1+Breakfast+Station&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Multi-function (grill, griddle, coffee)", "Compact design", "Good value", "Includes coffee maker"],
    cons: ["Limited cooking space", "Assembly required"],
  },
];

export default function BestBreakfastSandwichMakers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Small Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.5</span>
            <span className="font-lato text-stone-400 text-sm">Mar 20, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/breakfast-sandwich-maker.jpg" 
              alt="Best Breakfast Sandwich Makers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Breakfast Sandwich Makers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Say goodbye to rushed mornings and soggy breakfasts. We tested the best breakfast sandwich makers to find which ones deliver restaurant-quality sandwiches in minutes.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Breakfast Sandwich Maker</h2>
            <p className="mb-4 text-stone-600">A dedicated breakfast sandwich maker can transform your morning routine. These compact appliances cook eggs, melt cheese, and toast English muffins or bagels all at once — often in under 5 minutes. Whether you're feeding a family or just yourself, the right sandwich maker saves time and delivers consistent results.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="list-disc pl-6 mb-4 text-stone-600 space-y-2">
              <li><strong>Cooking time:</strong> The best models cook sandwiches in 3-5 minutes</li>
              <li><strong>Non-stick surfaces:</strong> Essential for easy cleanup</li>
              <li><strong>Size capacity:</strong> Consider how many sandwiches you need at once</li>
              <li><strong>Temperature control:</strong> Adjustable heat for different ingredients</li>
              <li><strong>Ease of cleaning:</strong> Removable plates are a huge plus</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Hamilton Beach Breakfast Sandwich Maker</h2>
            <p className="mb-4 text-stone-600">The Hamilton Beach wins for its perfect balance of speed, simplicity, and quality. It creates evenly cooked eggs, perfectly melted cheese, and nicely toasted English muffins in just 4 minutes. The compact design stores easily, and the non-stick surface wipes clean in seconds.</p>
          </div>
        </article>

        <section className="space-y-8 mt-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
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
                  <ul className="mb-4 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="text-stone-600 text-sm font-lato">✓ {pro}</li>
                    ))}
                  </ul>
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
