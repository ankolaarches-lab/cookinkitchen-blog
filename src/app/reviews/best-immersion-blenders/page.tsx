import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Immersion Blenders 2026 - Hand Blender Guide",
  description: "Smooth soups and sauces in seconds. We tested the best immersion blenders for blending, whipping, and mixing. Find your perfect hand blender.",
};

const products = [
  {
    name: "Braun MQ5000 MultiQuick 5 Hand Blender",
    price: "$49.99",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=best+immersion+blenders&tag=cookinkitchen-20",
    pros: ["Powerful motor", "Easy to clean", "Multiple attachments"],
    cons: ["Can be loud"],
  },
  {
    name: "KitchenAid Variable Speed Hand Blender",
    price: "$79.99",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=best+immersion+blenders&tag=cookinkitchen-20",
    pros: ["Sleek design", "Variable speed", "Durable"],
    cons: ["Premium price"],
  },
  {
    name: "Immersion Hand Blender with Whisk",
    price: "$29.99",
    rating: 4.5,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=best+immersion+blenders&tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Includes whisk", "Easy storage"],
    cons: ["Less powerful"],
  },
  {
    name: "Cuisinart SmartStick Hand Blender",
    price: "$39.95",
    rating: 4.6,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=best+immersion+blenders&tag=cookinkitchen-20",
    pros: ["Comfortable grip", "BPA-free", "Stainless steel"],
    cons: ["Short cord"],
  },
  {
    name: "Oster 2-Speed Hand Blender",
    price: "$24.99",
    rating: 4.4,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=best+immersion+blenders&tag=cookinkitchen-20",
    pros: ["Very affordable", "Simple to use", "2 speeds"],
    cons: ["Basic features"],
  },
];

export default function ImmersionBlender() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 9, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/immersion-blender.jpg" 
              alt="Best Immersion Blenders 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Immersion Blenders 2026</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Blend, mix, and whip directly in your pot. We tested the best immersion blenders for silky smooth results.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get an Immersion Blender?</h2>
            <p className="mb-4 text-stone-600">Immersion blenders let you blend soups, sauces, and smoothies right in the pot or container—no transferring hot liquids needed. They're also perfect for making mayo, whipped cream, and baby food.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Power</strong> - 200+ watts for smooth blending</li>
              <li>• <strong>Speed settings</strong> - Variable speed gives more control</li>
              <li>• <strong>Attachments</strong> - Whisk, chopper bowl add versatility</li>
              <li>• <strong>Easy cleaning</strong> - Detachable blade arm is a must</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Braun MQ5000 MultiQuick 5</h2>
            <p className="mb-4 text-stone-600">The Braun MQ5000 delivers professional results at a reasonable price. Powerful, easy to clean, and comes with multiple attachments for blending, chopping, and more.</p>
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
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Blend Directly in Your Pot</h3>
          <p className="font-lato text-stone-600 mb-6">An immersion blender is one of the most versatile tools in any kitchen.</p>
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
