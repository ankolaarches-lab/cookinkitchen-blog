import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Pizza Stones 2026 - Perfect Pizza at Home",
  description: "Achieve crispy, restaurant-quality pizza at home with the best pizza stones. We tested cordierite, ceramic, and steel stones.",
  openGraph: {
    title: "Best Pizza Stones 2026 - Perfect Pizza at Home",
    description: "Achieve crispy, restaurant-quality pizza at home. We tested cordierite, ceramic, and steel pizza stones.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/pizza-stones-2026.jpg"],
  },
};

const products = [
  {
    name: "Baking Steel 14-Inch pizza Steel",
    price: "$79.00",
    rating: 4.8,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=Baking+Steel+14-Inch+pizza+Steel&tag=cookinkitchen-20",
    pros: ["Superior heat transfer", "Durable steel", "Makes crispy crust"],
    cons: ["Heavy", "Requires preheating"],
  },
  {
    name: "Old Stone Oven Pizza Stone",
    price: "$34.99",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Old+Stone+Oven+Pizza+Stone&tag=cookinkitchen-20",
    pros: ["14-inch size", "Includes pizza peel", "Even heat distribution"],
    cons: ["Can crack if not seasoned"],
  },
  {
    name: "FibraMent D-BO-1416 Pizza Stone",
    price: "$49.99",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=FibraMent+D-BO-1416+Pizza+Stone&tag=cookinkitchen-20",
    pros: ["Professional grade", "18x14 inch", "Works great in ovens"],
    cons: ["Very heavy"],
  },
  {
    name: "NerdChef Steel Pizza Stone",
    price: "$54.99",
    rating: 4.6,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=NerdChef+Steel+Pizza+Stone&tag=cookinkitchen-20",
    pros: ["Mirror finish", "14-inch", "Pre-seasoned"],
    cons: ["Higher price point"],
  },
  {
    name: "AmazonBasics Pizza Stone",
    price: "$19.99",
    rating: 4.4,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=AmazonBasics+Pizza+Stone&tag=cookinkitchen-20",
    pros: ["Budget-friendly", "12-inch size", "Cordierite material"],
    cons: ["Smaller than others"],
  },
];

export default function BestPizzaStones2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 18, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/pizza-stone.jpg" 
              alt="Best Pizza Stones 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Pizza Stones 2026: Perfect Crust Every Time</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Crispy, golden crust at home. We tested the top pizza stones and steels to help you make restaurant-quality pizza.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Use a Pizza Stone?</h2>
            <p className="mb-4 text-stone-600">Pizza stones absorb moisture from dough, creating a crispy bottom crust while maintaining the chewy interior. They replicate the effect of a wood-fired oven in your home kitchen.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Types of Pizza Stones</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Ceramic</strong> - Affordable, good heat retention, can crack with temperature changes</li>
              <li>• <strong>cordierite</strong> - More durable, handles temperature changes better</li>
              <li>• <strong>Steel</strong> - Best heat transfer, creates crispest crust, very durable</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Baking Steel 14-Inch</h2>
            <p className="mb-4 text-stone-600">The Baking Steel offers the best heat transfer of any pizza stone option, creating restaurant-quality crispy crusts. It's virtually indestructible and will last a lifetime with proper care.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-stone-100">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🍕</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800 font-medium">{product.name}</h3>
                      <span className="text-emerald-600 font-lato font-bold">{product.rating} ★</span>
                    </div>
                    <p className="text-stone-500 font-lato text-sm mb-3">{product.price}</p>
                    <div className="flex gap-4 text-sm">
                      <div className="text-stone-600">
                        <span className="font-bold text-emerald-600">Pros:</span> {product.pros.join(", ")}
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm mt-2">
                      <div className="text-stone-600">
                        <span className="font-bold text-red-500">Cons:</span> {product.cons.join(", ")}
                      </div>
                    </div>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg font-lato font-bold text-sm hover:bg-emerald-700 transition"
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <h3 className="font-playfair text-xl text-stone-800 mb-3">Final Verdict</h3>
          <p className="font-lato text-stone-600">
            For serious pizza lovers, the <strong>Baking Steel 14-Inch</strong> is worth the investment. It creates the crispest crusts and will last forever. For those on a budget, the <strong>Old Stone Oven</strong> offers excellent value.
          </p>
        </div>
      </div>
    </div>
  );
}