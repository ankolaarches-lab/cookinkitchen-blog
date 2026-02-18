import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Carbon Steel Wok - Expert Tested 2026",
  description: "We tested the best carbon steel woks for stir-fry. Find the perfect wok for your kitchen - from traditional flat-bottom to classic round-bottom designs.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link 
          href="/reviews" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition"
        >
          ← Back to Reviews
        </Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">
              Cookware
            </span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-rose-50 rounded-2xl p-10 text-center mb-8 shadow-inner">
            <div className="text-6xl mb-4">🍳</div>
            <div className="text-sm text-stone-500 font-lato">Tested & Recommended</div>
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">
            Best Carbon Steel Wok: Traditional Craftsmanship for Perfect Stir-Fry
          </h1>
          
          <p className="font-lato text-xl text-stone-600 mb-8">
            From high-heat wok cooking to quick vegetable stir-fries, we tested the top carbon steel woks to find the best for home kitchens.
          </p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Carbon Steel?</h2>
            <p className="mb-4 text-stone-600">
              Carbon steel woks are the choice of professional chefs for one reason: heat responsiveness. Unlike cast iron, carbon steel heats up lightning-fast and responds instantly to temperature changes - essential for authentic wok cooking.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Yosukata 14-Inch Carbon Steel Wok</h2>
            <p className="mb-4 text-stone-600">
              The Yosukata delivers exceptional performance at a reasonable price. The flat bottom works on all cooktops (including induction!), and the 14-inch size provides plenty of cooking surface for family meals.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Pre-seasoned for immediate use</li>
              <li className="mb-2">Flat bottom - works on induction, gas, and electric</li>
              <li className="mb-2">Excellent heat distribution</li>
              <li className="mb-2">Comfortable wooden handle</li>
            </ul>
            <p className="mb-4">
              <a href="https://www.amazon.com/Yosukata-Carbon-Steel-Wok-14-Inch/dp/B00WJ6W9E4?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Premium: Matfer Bourgeat Black Steel Wok</h2>
            <p className="mb-4 text-stone-600">
              For serious home cooks, the Matfer Bourgeat is restaurant-quality. Made in France, this wok develops a perfect non-stick patina over time and maintains extremely high heat.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Value: Lodge Cast Iron Wok</h2>
            <p className="mb-4 text-stone-600">
              If you already love cast iron, Lodge's 14-inch wok offers incredible heat retention. It's heavier than carbon steel but nearly indestructible.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">How We Tested</h2>
            <ul className="ml-4 mb-4">
              <li className="mb-2">High-heat stir-fry tests (smoke point)</li>
              <li className="mb-2">Even heat distribution across the wok</li>
              <li className="mb-2">Ease of tossing and flipping</li>
              <li className="mb-2">Handle comfort during extended cooking</li>
              <li className="mb-2">Compatibility with different stovetops</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Verdict</h2>
            <p className="mb-4 text-stone-600">
              For most home cooks, the <strong>Yosukata 14-Inch</strong> offers the best balance of performance, price, and versatility. It's pre-seasoned, works on all cooktops, and delivers authentic wok results.
            </p>
          </div>
          
          {/* Affiliate CTA */}
          <div className="mt-12 bg-stone-100 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-lg text-stone-800 mb-3">
              Where to Buy
            </h3>
            <p className="text-stone-500 text-sm mb-4">
              We may earn a commission when you buy through our links.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a 
                href="https://www.amazon.com/Yosukata-Carbon-Steel-Wok-14-Inch/dp/B00WJ6W9E4?tag=cookinkitchen-20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium hover:underline"
              >
                Check Price on Amazon
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
