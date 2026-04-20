import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Measuring Spoons 2026 - Buying Guide",
  description: "Find the perfect measuring spoons for accurate baking and cooking. We tested stainless steel, magnetic, and adjustable measuring spoons.",
  keywords: ["measuring spoons", "best measuring spoons", "stainless steel measuring spoons", "magnetic measuring spoons", "adjustable measuring spoons"],
  openGraph: {
    title: "Best Measuring Spoons 2026 - Buying Guide",
    description: "Find the perfect measuring spoons for accurate baking and cooking.",
    type: "article",
    images: ["/images/reviews/hero-kitchen-utensils.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Measuring Spoons 2026",
    description: "Find the perfect measuring spoons.",
  },
};

const products = [
  {
    name: "U-Taste 18/8 Stainless Steel Measuring Spoons",
    price: "$19.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=U+Taste+Stainless+Measuring+Magnetic&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Premium 18/8 stainless steel", "Magnetic connection", "6-piece set", "Etched measurements", "Dishwasher safe"],
    cons: ["Higher price point"],
  },
  {
    name: "Joseph Joseph Measure-Up Adjustable Measuring Spoon",
    price: "$8.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Joseph+Joseph+Measure+Up+Adjustable&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Adjustable design", "Single tool replaces 6", "Space-saving", "Easy to read", "Dishwasher safe"],
    cons: ["Mechanical design may wear"],
  },
  {
    name: "OXO Good Grips Double-Sided Measuring Spoons",
    price: "$14.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=OXO+Good+Grips+Measuring+Spoons&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Non-slip grip", "Double-ended design", "6 measurements", "Dishwasher safe", "Durable"],
    cons: ["Larger storage size"],
  },
  {
    name: "Cuisipro Stainless Steel Measuring Spoons",
    price: "$14.27",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Cuisipro+746663+Measuring+Spoons+Stainless&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Professional quality", "Mirror finish", "Nested set", "Wide mouths", "Lifetime warranty"],
    cons: ["No magnetic feature"],
  },
  {
    name: "Yellrin Magnetic Measuring Spoons",
    price: "$13.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Yellrin+Measuring+Magnetic+Stainless&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Magnetic snapping", "Dual-ended", "Tapered for small jars", "12 measurements", "Modern design"],
    cons: ["Magnets may detach over time"],
  },
];

export default function BestMeasuringSpoons2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Measuring Spoons 2026</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Precise measurements for perfect recipes. We tested the best measuring spoons for every kitchen.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Measuring Spoons 2026', href: '/reviews/best-measuring-spoons-2026' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Quality Measuring Spoons Matter</h2>
          <p className="text-stone-600 mb-4">
            Baking and cooking require precision, and measuring spoons are essential tools for 
            accurate ingredient portions. Quality measuring spoons ensure consistent results 
            every time you cook.
          </p>
          <p className="text-stone-600">
            From traditional nested sets to innovative adjustable designs, we've tested the 
            top measuring spoons to help you find the perfect fit for your kitchen.
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

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">Types of Measuring Spoons</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li><strong>Traditional Nested Sets:</strong> Multiple spoons that nest together for easy storage</li>
            <li><strong>Magnetic Sets:</strong> Snap together for convenient storage</li>
            <li><strong>Adjustable:</strong> Single tool with adjustable measurements</li>
            <li><strong>Dual-Ended:</strong> Two measurements per handle for space efficiency</li>
            <li><strong>Digital:</strong> Electronic spoons for ultra-precise measurements</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
