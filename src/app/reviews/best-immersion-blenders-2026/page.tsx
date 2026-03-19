import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Immersion Blenders 2026 - Complete Buying Guide",
  description: "Find the perfect immersion blender for smoothies, soups, and sauces. We tested the best hand blenders for every kitchen in 2026.",
};

const products = [
  {
    name: "Braun MultiQuick 9 Immersion Blender",
    price: "$99.99",
    rating: 4.8,
    image: "/images/kitchen/7.jpg",
    link: "https://www.amazon.com/s?k=Braun+MultiQuick+9+Immersion+Blender?tag=cookinkitchen-20",
    pros: ["Powerful 400W motor", "Variable speed control", "Includes chopper and whisk attachments", "Comfortable grip"],
    cons: ["Higher price point", "Somewhat heavy"],
  },
  {
    name: "KitchenAid Variable Speed Immersion Blender",
    price: "$49.99",
    rating: 4.7,
    image: "/images/kitchen/8.jpg",
    link: "https://www.amazon.com/s?k=KitchenAid+Variable+Speed+Immersion+Blender?tag=cookinkitchen-20",
    pros: ["Affordable", "Durable construction", "Easy to clean", "Variable speed trigger"],
    cons: ["No additional attachments", "Can be loud"],
  },
  {
    name: "Cuisinart SmartPower 7-Speed Immersion Blender",
    price: "$39.99",
    rating: 4.6,
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/s?k=Cuisinart+SmartPower+7+Speed+Immersion+Blender?tag=cookinkitchen-20",
    pros: ["7 speed settings", "Budget-friendly", "Includes detachable shaft", "BPA-free jar included"],
    cons: ["Less powerful motor", "Plastic shaft can stain"],
  },
  {
    name: "Vitamix 15810 Immersion Blender",
    price: "$149.95",
    rating: 4.9,
    image: "/images/kitchen/10.jpg",
    link: "https://www.amazon.com/s?k=Vitamix+15810+Immersion+Blender?tag=cookinkitchen-20",
    pros: ["Commercial-grade power", "Stainless steel shaft", "Excellent durability", "Great for heavy-duty tasks"],
    cons: ["Expensive", "Heavy", "No speed control on handle"],
  },
  {
    name: "Bamix Mono Immersion Blender",
    price: "$129.95",
    rating: 4.7,
    image: "/images/kitchen/11.jpg",
    link: "https://www.amazon.com/s?k=Bamix+Mono+Immersion+Blender?tag=cookinkitchen-20",
    pros: ["Swiss-made quality", "Powerful 200W motor", "Two speeds", "Dishwasher safe"],
    cons: ["Pricey", "Limited attachments"],
  },
  {
    name: "Mueller Austria Premium Immersion Blender",
    price: "$29.99",
    rating: 4.5,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Mueller+Austria+Premium+Immersion+Blender?tag=cookinkitchen-20",
    pros: ["Very affordable", "Lightweight", "4 attachments included", "Easy to store"],
    cons: ["Not as powerful", "Durability concerns over time"],
  },
];

export default function BestImmersionBlenders2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 19, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/2.jpg" 
              alt="Best Immersion Blenders 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Immersion Blenders 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From silky soups to creamy smoothies, find the best immersion blender for your kitchen. We tested top models to bring you the ultimate 2026 buying guide.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need an Immersion Blender</h2>
            <p className="mb-4 text-stone-600">An immersion blender (also called a hand blender) is one of the most versatile tools in any kitchen. Unlike traditional blenders, you can blend directly in the pot, pitcher, or container—no transferring hot liquids or messy cleanup.</p>
            <p className="mb-4 text-stone-600">Perfect for:</p>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Smooth soups</strong> - Blend directly in your soup pot</li>
              <li>• <strong>Homemade sauces</strong> - Create velvety gravies and marinades</li>
              <li>• <strong> smoothies and shakes</strong> - Quick single-serving blending</li>
              <li>• <strong>Baby food</strong> - Make fresh purees at home</li>
              <li>• <strong>Whipped cream and mousses</strong> - Light and fluffy results</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Motor power</strong> - 200W minimum for basic tasks, 400W+ for heavy-duty</li>
              <li>• <strong>Speed settings</strong> - Variable speed gives you more control</li>
              <li>• <strong>Shaft material</strong> - Stainless steel is more durable than plastic</li>
              <li>• <strong>Attachments</strong> - Choppers, whisks, and jars expand versatility</li>
              <li>• <strong>Ergonomics</strong> - Comfortable grip for extended use</li>
              <li>• <strong>Ease of cleaning</strong> - Look for dishwasher-safe components</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Braun MultiQuick 9 Immersion Blender</h2>
            <p className="mb-4 text-stone-600">The Braun MultiQuick 9 earns our top pick with its powerful 400W motor, intuitive variable speed control, and included attachments (chopper and whisk). It's built to last and handles everything from delicate purees to tough frozen fruit with ease.</p>
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

        {/* Comparison Table */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-playfair text-xl text-stone-800 mb-4">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-lato">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 px-2 text-stone-600">Blender</th>
                  <th className="text-left py-3 px-2 text-stone-600">Price</th>
                  <th className="text-left py-3 px-2 text-stone-600">Rating</th>
                  <th className="text-left py-3 px-2 text-stone-600">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Braun MultiQuick 9</td>
                  <td className="py-3 px-2">$99.99</td>
                  <td className="py-3 px-2">4.8★</td>
                  <td className="py-3 px-2">Overall best</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">KitchenAid Variable Speed</td>
                  <td className="py-3 px-2">$49.99</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Best value</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Cuisinart 7-Speed</td>
                  <td className="py-3 px-2">$39.99</td>
                  <td className="py-3 px-2">4.6★</td>
                  <td className="py-3 px-2">Beginners</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Vitamix 15810</td>
                  <td className="py-3 px-2">$149.95</td>
                  <td className="py-3 px-2">4.9★</td>
                  <td className="py-3 px-2">Premium pick</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Bamix Mono</td>
                  <td className="py-3 px-2">$129.95</td>
                  <td className="py-3 px-2">4.7★</td>
                  <td className="py-3 px-2">Swiss quality</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-3 px-2 font-medium">Mueller Premium</td>
                  <td className="py-3 px-2">$29.99</td>
                  <td className="py-3 px-2">4.5★</td>
                  <td className="py-3 px-2">Budget pick</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 bg-emerald-600 rounded-xl p-8 text-white">
          <h3 className="font-playfair text-2xl mb-4">Ready to Blend?</h3>
          <p className="font-lato mb-6 text-emerald-100">Whether you're a home cook or a kitchen enthusiast, the right immersion blender makes meal prep easier. Our top pick, the Braun MultiQuick 9, offers the best balance of power, versatility, and value.</p>
          <a 
            href="https://www.amazon.com/s?k=Braun+MultiQuick+9+Immersion+Blender?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-lg font-lato font-medium hover:bg-emerald-50 transition"
          >
            Shop Braun MultiQuick 9 →
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-lato font-medium transition">← Back to All Reviews</Link>
        </div>
      </div>
    </div>
  );
}
