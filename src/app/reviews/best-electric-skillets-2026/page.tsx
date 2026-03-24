import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Electric Skillets 2026 - Complete Buying Guide",
  description: "Versatile cooking solutions for every kitchen. We tested the best electric skillets from Zojirushi, Cuisinart, and more. Find your perfect skillet.",
};

const products = [
  {
    name: "Zojirushi Gourmet d'Expert Electric Skillet",
    price: "$205.00",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=Zojirushi+Gourmet+dExpert+Electric+Skillet&tag=cookinkitchen-20",
    pros: ["Comes with two pan inserts", "Steamer included", "Excellent heat distribution", "Durable stainless steel"],
    cons: ["Higher price point", "Takes up counter space"],
  },
  {
    name: "Cuisinart Nonstick Oval Electric Skillet",
    price: "$112.00",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=Cuisinart+Nonstick+Oval+Electric+Skillet&tag=cookinkitchen-20",
    pros: ["Oval shape great for fish", "Glass lid", "Dishwasher safe", "Affordable premium option"],
    cons: ["Oval may not fit all stovetops"],
  },
  {
    name: "Presto 16-Inch Electric Skillet",
    price: "$61.99",
    rating: 4.5,
    link: "https://www.amazon.com/s?k=Presto+16+Inch+Electric+Skillet+22+Quart&tag=cookinkitchen-20",
    pros: ["Extra large capacity", "High sides prevent splatters", "Affordable", "Removable temperature control"],
    cons: ["Basic nonstick coating"],
  },
  {
    name: "Black & Decker Electric Skillet",
    price: "$59.99",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=Black+Decker+Electric+Skillet+Family+Size&tag=cookinkitchen-20",
    pros: ["Family sized", "Tempered glass lid", "Great value", "4.6+ star rating"],
    cons: ["Not dishwasher safe"],
  },
  {
    name: "Elite Gourmet Extra Deep Electric Skillet",
    price: "$44.99",
    rating: 4.4,
    link: "https://www.amazon.com/s?k=Elite+Gourmet+Extra+Deep+Electric+Skillet&tag=cookinkitchen-20",
    pros: ["Extra deep for soups", "Pour spout", "Dishwasher safe", "Best seller on Amazon"],
    cons: ["Lower rating than competitors"],
  },
];

export default function BestElectricSkillets2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 16, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/electric-skillet.jpg" 
              alt="Best Electric Skillets 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Electric Skillets 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Versatile cooking solutions for every kitchen. We tested the top electric skillets to find the best for every need.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get an Electric Skillet?</h2>
            <p className="mb-4 text-stone-600">Electric skillets offer versatile, portable cooking that goes beyond your stovetop. Perfect for entertaining, meal prep, and everyday cooking with consistent heat control.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Cooking Surface</strong> - Consider size and shape (rectangular vs oval)</li>
              <li>• <strong>Temperature Control</strong> - Look for adjustable, precise controls</li>
              <li>• <strong>Material</strong> - Stainless steel durability vs nonstick convenience</li>
              <li>• <strong>Cleaning</strong> - Dishwasher-safe parts make cleanup easy</li>
              <li>• <strong>Accessories</strong> - Some include steamer inserts or additional pans</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Zojirushi Gourmet d'Expert</h2>
            <p className="mb-4 text-stone-600">The Zojirushi stands out with its two pan inserts and steamer attachment, making it incredibly versatile. Excellent heat distribution and durable construction justify the premium price.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800">{product.name}</h3>
                      <span className="font-lato text-emerald-600 font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-500 font-bold">★ {product.rating}</span>
                    </div>
                    <div className="flex gap-4 text-sm mb-3">
                      <div>
                        <span className="text-stone-500 font-medium">Pros:</span>
                        <ul className="text-stone-600">
                          {product.pros.slice(2).map((pro, i) => (
                            <li key={i}>✓ {pro}</li>
                          ))}
                        </ul>
                      </div>
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-8">
          <h2 className="font-playfair text-2xl text-stone-800 mb-4">Best for Different Needs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Premium</h3>
              <p className="text-stone-600">Zojirushi Gourmet d'Expert - Versatile with steamer and multiple pans</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Value</h3>
              <p className="text-stone-600">Presto 16-Inch - Large capacity at an affordable price</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best for Families</h3>
              <p className="text-stone-600">Black & Decker Electric Skillet - Great size for family meals</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Overall</h3>
              <p className="text-stone-600">Cuisinart Nonstick Oval - Excellent performance and versatility</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/reviews" className="text-emerald-600 hover:text-emerald-700 font-lato font-medium">
            ← Browse All Kitchen Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}