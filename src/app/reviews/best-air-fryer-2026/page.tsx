import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewSchema from "@/components/ReviewSchema";

export const metadata: Metadata = {
  title: "Best Air Fryers 2026 - Ultimate Buying Guide",
  description: "Best Air Fryers 2026 - Ultimate Buying Guide - Complete guide",
  openGraph: {
    title: "Best Air Fryers 2026 - Ultimate Buying Guide",
    description: "Best Air Fryers 2026 - Ultimate Buying Guide - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-appliances.png"],
  },
};

const products = [
  {
    name: "Ninja Foodi XL Pro Air Fry Oven",
    price: "$229.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Ninja+Foodi+Proof+15+Quart+Professional&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Large capacity", "Multiple functions", "Great for families"],
    cons: ["Takes up counter space"],
  },
  {
    name: "Ninja Crispi",
    price: "$99.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Ninja+Crispi+Portable+Countertop+Crisper&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Glass container", "Easy cleanup", "Compact size"],
    cons: ["Smaller capacity"],
  },
  {
    name: "Instant Pot Vortex Plus",
    price: "$99.95",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Instant+Vortex+Plus+7+1+Quart&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["7-in-1 functionality", "Easy to use", "Good size"],
    cons: ["Learning curve"],
  },
  {
    name: "COSORI Air Fryer",
    price: "$89.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=COSORI+5+8+Quart+Air+Fryer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Sleek design", "Dishwasher safe", "Affordable"],
    cons: ["Smaller basket"],
  },
  {
    name: "Philips Premium Airfryer XXL",
    price: "$349.95",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Philips+Premium+XXL+Fryer&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Premium build", "Twin TurboStar", "Large family size"],
    cons: ["Expensive"],
  },
];

export default function BestAirFryer2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <ReviewSchema
        title="Best Air Fryers 2026: Complete Guide"
        description="Crispy results with less oil. We tested the best air fryers from Ninja, Instant Pot, and more."
        slug="best-air-fryer-2026"
        datePublished="2026-02-18"
        image="/images/reviews/air-fryer.jpg"
        products={products}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Feb 18, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/air-fryer.jpg" 
              alt="Best Air Fryers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Air Fryers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Crispy, golden results with less oil. We tested the top air fryers to find the best for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get an Air Fryer?</h2>
            <p className="mb-4 text-stone-600">Air fryers use hot air circulation to cook food that's crispy on the outside and tender on the inside - with up to 75% less fat than traditional frying.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Capacity</strong> - Consider family size (2-5 quart for small, 5+ for families)</li>
              <li>• <strong>Functions</strong> - Some do more than just air fry (bake, roast, dehydrate)</li>
              <li>• <strong>Ease of cleaning</strong> - Dishwasher-safe parts are a must</li>
              <li>• <strong>Size</strong> - Make sure it fits your counter space</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Ninja Foodi XL Pro</h2>
            <p className="mb-4 text-stone-600">The Ninja Foodi XL Pro offers the best combination of capacity, versatility, and performance. Great for families who want to air fry, bake, and roast.</p>
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
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Go Crispy?</h3>
          <p className="font-lato text-stone-600 mb-6">Invest in a quality air fryer and enjoy healthier versions of your favorite foods.</p>
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
            <a href="/reviews/best-air-fryer-accessories" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Air Fryer Accessories</h4>
              <p className="text-xs text-stone-500 mt-1">Get more from your air fryer</p>
            </a>
            <a href="/reviews/instant-pot-vs-ninja-foodi" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Comparison</span>
              <h4 className="font-bold text-stone-900 mt-1">Instant Pot vs Ninja Foodi</h4>
              <p className="text-xs text-stone-500 mt-1">Which is better?</p>
            </a>
            <a href="/blog/air-fryer-recipes-tips" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Air Fryer Recipes & Tips</h4>
              <p className="text-xs text-stone-500 mt-1">Master your air fryer</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
