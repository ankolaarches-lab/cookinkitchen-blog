import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Avocado Slicers 2026 - Buying Guide",
  description: "Slice, pit, and scoop avocados safely with the best avocado tools. We tested top-rated slicers for perfect avocado preparation every time.",
  keywords: ["avocado slicer", "avocado tool", "avocado pitter", "avocado cutter", "guacamole maker"],
  openGraph: {
    title: "Best Avocado Slicers 2026 - Buying Guide",
    description: "Slice, pit, and scoop avocados safely with the best avocado tools.",
    type: "article",
    images: ["/images/reviews/hero-kitchen-utensils.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Avocado Slicers 2026",
    description: "Slice, pit, and scoop avocados safely.",
  },
};

const products = [
  {
    name: "OXO Good Grips 3-in-1 Avocado Slicer",
    price: "$9.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=OXO+Good+Grips+Avocado+Slicer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["3-in-1 functionality", "Non-slip grip", "Safe blade design", "Dishwasher safe", "Budget-friendly"],
    cons: ["Plastic construction"],
  },
  {
    name: "Jokari Avocado Tool 5-in-1",
    price: "$19.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Avocado+Tool+5+Dishwasher+Guacamole&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["5-in-1 versatility", "Ergonomic design", "Cuts, pits, scoops, peels, and mashes", "BPA free"],
    cons: ["More parts to clean"],
  },
  {
    name: "Stainless Steel Avocado Slicer 3-in-1",
    price: "$12.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=All+One+Avocado+Slicer+Tool&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Stainless steel blade", "Strong pit remover", "6 even slices", "Non-slip handle"],
    cons: ["Sharp blades require care"],
  },
  {
    name: "Joseph Joseph Avocado Slicer",
    price: "$14.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Joseph+Joseph+20067+Avocado+Slicer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Unique design", "Built-in storage", "Color-coded", "Easy to use"],
    cons: ["Limited availability"],
  },
  {
    name: "Mueller Avocado Slicer 4-in-1",
    price: "$15.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Mueller+Avocado+Slicer+Remover+Stainless&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["4-in-1 functionality", "Premium stainless steel", "Easy to store", "Giftable"],
    cons: ["May be complex for simple needs"],
  },
];

export default function BestAvocadoSlicers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Avocado Slicers 2026</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Perfect avocado slices every time. We tested the best tools for slicing, pitting, and scooping.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Avocado Slicers 2026', href: '/reviews/best-avocado-slicers-2026' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <div className="rounded-xl overflow-hidden mb-6">
            <img 
              src="/images/reviews/hero-kitchen-utensils.png" 
              alt="Best Avocado Slicers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why You Need an Avocado Slicer</h2>
          <p className="text-stone-600 mb-4">
            Avocados are a kitchen staple, but cutting them safely can be tricky. An avocado slicer 
            eliminates the risk of knife slips while making quick work of preparing perfect slices, 
            cubes, or guacamole.
          </p>
          <p className="text-stone-600">
            From simple plastic slicers to premium multi-function tools, we've tested the best 
            avocado tools to find the perfect solution for every kitchen.
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
          <h3 className="text-xl font-bold text-stone-900 mb-4">How to Choose the Right Avocado Slicer</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li><strong>Functionality:</strong> Consider whether you need just slicing or want pitting, scooping, and mashing too</li>
            <li><strong>Material:</strong> Plastic options are budget-friendly; stainless steel offers durability</li>
            <li><strong>Safety:</strong> Look for non-sharp blades that are safe to touch</li>
            <li><strong>Ease of cleaning:</strong> Dishwasher-safe tools save time</li>
            <li><strong>Storage:</strong> Consider countertop vs. drawer storage needs</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
