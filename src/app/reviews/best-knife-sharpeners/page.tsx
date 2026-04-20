import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Knife Sharpeners 2026 - Keep Your Blades Sharp",
  description: "Best Knife Sharpeners - Complete guide",
  openGraph: {
    title: "Best Knife Sharpeners",
    description: "Best Knife Sharpeners - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-knives.png"],
  },
};

const products = [
  {
    name: "WorkSharp Kitchen Knife Sharpener",
    price: "$79.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=best+knife+sharpeners&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Precision guidance", "Angle guides included", "Works on all knives"],
    cons: ["Takes practice"],
  },
  {
    name: "Chef'sChoice 15 Inch Knife Sharpener",
    price: "$99.95",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=best+knife+sharpeners&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["3-stage system", "Electric", "Professional results"],
    cons: ["Only for straight-edged knives"],
  },
  {
    name: "Lansky NMK-003 Dual Grit Sharpener",
    price: "$24.95",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=best+knife+sharpeners&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Portable", "Coarse and fine sides", "Affordable"],
    cons: ["Manual effort needed"],
  },
  {
    name: "Smith's 50402 Adjustable Knife Sharpener",
    price: "$19.97",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=best+knife+sharpeners&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Adjustable angle", "2-stage", "Budget-friendly"],
    cons: ["Not for serrated knives"],
  },
  {
    name: "Accusharp 001 Knife Sharpener",
    price: "$12.99",
    rating: 4.3,
    link: `https://www.amazon.com/s?k=best+knife+sharpeners&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Simple to use", "Very affordable", "Compact"],
    cons: ["Limited control"],
  },
];

export default function KnifeSharpeners() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Tools & Gadgets</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.5</span>
            <span className="font-lato text-stone-400 text-sm">Mar 9, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/hero-knives.png" 
              alt="Best Knife Sharpeners 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Knife Sharpeners 2026</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">A dull knife is dangerous. Keep your blades razor-sharp with our tested favorite sharpeners.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Knife Sharpener</h2>
            <p className="mb-4 text-stone-600">Sharp knives are safer than dull ones—you use less force and have more control. A good sharpener restores the edge to your favorite chef's knife, making prep work faster and more enjoyable.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Sharpeners</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Electric</strong> - Fast, easy, but can overheat blades</li>
              <li>• <strong>Manual sharpeners</strong> - More control, takes practice</li>
              <li>• <strong>Whetstones</strong> - Traditional, requires skill</li>
              <li>• <strong>Pull-through</strong> - Simple, good for beginners</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: WorkSharp Kitchen Sharpener</h2>
            <p className="mb-4 text-stone-600">The WorkSharp offers professional-level results with guided angles that take the guesswork out of sharpening. It's the best balance of performance and ease of use for home cooks.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800">{product.name}</h3>
                      <span className="font-lato text-emerald-600 font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-500">★ {product.rating}</span>
                    </div>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-lato text-xs text-stone-500 uppercase">Pros</span>
                    <ul className="mt-1">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="font-lato text-sm text-stone-600">✓ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-lato text-xs text-stone-500 uppercase">Cons</span>
                    <ul className="mt-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="font-lato text-sm text-stone-500">✗ {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Keep Your Knives Razor Sharp</h3>
          <p className="font-lato text-stone-600 mb-6">A quality sharpener pays for itself—your knives will last longer and cooking will be safer.</p>
          <Link 
            href="/reviews"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
          >
            Browse All Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
