import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Toasters 2026 - Ultimate Buying Guide",
  description: "Perfect toast every morning. We tested the best toasters from budget to premium for consistent browning and features.",
};

const products = [
  {
    name: "Breville Die-Cast 2-Slice Smart Toaster",
    price: "$199.95",
    rating: 4.8,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Breville+Die+Cast+2+Slice+Smart+Toaster?tag=cookinkitchen-20",
    pros: ["Smart heating technology", "Multiple functions", "Premium build"],
    cons: ["Premium price", "Heavy"],
  },
  {
    name: "Breville Die-Cast 4-Slice Smart Toaster",
    price: "$299.95",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Breville+Die+Cast+4+Slice+Smart+Toaster?tag=cookinkitchen-20",
    pros: ["Larger capacity", "Smart technology", "Even toasting"],
    cons: ["Very expensive"],
  },
  {
    name: "Cuisinart CPT-T40 4-Slice Touchscreen",
    price: "$89.99",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=Cuisinart+4+Slice+Touchscreen+Toaster?tag=cookinkitchen-20",
    pros: ["Touchscreen controls", "6 shade settings", "Great value"],
    cons: ["Some users report issues"],
  },
  {
    name: "Hamilton Beach 2-Slice Toaster",
    price: "$24.99",
    rating: 4.5,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=Hamilton+Beach+2+Slice+Toaster?tag=cookinkitchen-20",
    pros: ["Extra-wide slots", "Affordable", "Bagel setting"],
    cons: ["Basic features"],
  },
  {
    name: "OXO Good Grips 2-Slice Toaster",
    price: "$79.99",
    rating: 4.5,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=OXO+Good+Grips+2+Slice+Toaster?tag=cookinkitchen-20",
    pros: ["Consistent results", "Sleek design", "Toast boost feature"],
    cons: ["Mid-range price"],
  },
];

export default function BestToasters2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 12, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/6.jpg" 
              alt="Best Toasters 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Toasters 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From budget-friendly to premium, we tested the best toasters for perfectly golden toast every morning.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Upgrade Your Toaster?</h2>
            <p className="mb-4 text-stone-600">A quality toaster does more than just brown bread. Modern toasters offer features like consistent heating across all slots, bagel settings, defrost functions, and even smart technology that adjusts heating automatically.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Slots</strong> - 2-slice for individuals, 4-slice for families</li>
              <li>• <strong>Slot width</strong> - Extra-wide slots for bagels and thick bread</li>
              <li>• <strong>Shade settings</strong> - More settings = more control</li>
              <li>• <strong>Consistency</strong> - Look for even browning across all slots</li>
              <li>• <strong>Features</strong> - Bagel, defrost, reheat functions</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Breville Die-Cast Smart Toaster</h2>
            <p className="mb-4 text-stone-600">The Breville sets the standard for toaster performance. Its "Smart" technology uses sensors to continuously monitor toasting and automatically adjusts for perfect results every time. The build quality is exceptional, and features like "A Bit More" and bagel settings make it the most versatile premium toaster.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
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
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Upgrade Your Breakfast</h3>
          <p className="font-lato text-stone-600 mb-6">A great toaster makes every morning better with perfectly toasted bread.</p>
          <Link 
            href="/reviews"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
          >
            Browse All Reviews
          </Link>
        </div>

        {/* Related Reviews */}
        <div className="mt-12">
          <h3 className="font-playfair text-xl text-stone-800 mb-4">You Might Also Like</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/reviews/best-toaster-ovens" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Toaster Ovens</h4>
              <p className="text-xs text-stone-500 mt-1">Bake, toast & more</p>
            </a>
            <a href="/reviews/best-coffee-grinder" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Coffee Grinders</h4>
              <p className="text-xs text-stone-500 mt-1">Complete your breakfast</p>
            </a>
            <a href="/reviews/best-electric-kettle-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Electric Kettles</h4>
              <p className="text-xs text-stone-500 mt-1">Hot water fast</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
