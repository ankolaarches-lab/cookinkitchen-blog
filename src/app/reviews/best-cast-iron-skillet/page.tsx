import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cast Iron Skillets - 2026 Buying Guide",
  description: "From Lodge to Le Creuset, we tested the best cast iron skillets for searing, baking, and versatility.",
};

const products = [
  {
    name: "Lodge Cast Iron Skillet 12-Inch",
    price: "$34.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Lodge-Pre-Seasoned-Skillet-12-Inch/dp/B00006JSUA?tag=cookinkitchen-20",
    pros: ["Pre-seasoned", "Affordable", "Made in USA", "Versatile"],
    cons: ["Heavy", "Requires maintenance"],
  },
  {
    name: "Le Creuset Enameled Cast Iron 11-Inch",
    price: "$369.95",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Le-Creuset-Enameled-Cast-Iron-Signature/dp/B00KQP4LMA?tag=cookinkitchen-20",
    pros: ["No seasoning needed", "Enamel coating", "Lifetime warranty", "Beautiful colors"],
    cons: ["Very expensive", "Heavy"],
  },
  {
    name: "Field Company Cast Iron 10.5-Inch",
    price: "$85.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Field-Company-Cast-Iron-10-5-Inch/dp/B081JL1QQR?tag=cookinkitchen-20",
    pros: ["Smooth surface", "Lightweight for cast iron", "Pre-seasoned", "Modern design"],
    cons: ["Limited sizes available"],
  },
  {
    name: "Staub Cast Iron 11-Inch",
    price: "$219.95",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Staub-Cast-Iron-11-Inch-Fry-Pan/dp/B00KQP4LMB?tag=cookinkitchen-20",
    pros: ["Black matte enamel", "Excellent heat retention", "Staub signature", "Drip collector"],
    cons: ["Premium price", "Heavy"],
  },
];

export default function BestCastIronSkillet() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.8</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop" 
              alt="Best Cast Iron Skillets" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Cast Iron Skillets: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested cast iron skillets from budget to premium to find the best for searing, baking, and everyday cooking.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Cast Iron?</h2>
            <p className="mb-4 text-stone-600">Cast iron provides superior heat retention, is incredibly durable, and can be used on any cooking surface. A well-seasoned cast iron pan is naturally non-stick.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Lodge Cast Iron</h2>
            <p className="mb-4 text-stone-600">Lodge offers the best value with pre-seasoned, American-made cast iron that's ready to use right out of the box.</p>
          </div>
        </article>

        <section className="space-y-8 mt-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 relative flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="mb-4 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="text-stone-600 text-sm font-lato">✓ {pro}</li>
                    ))}
                  </ul>
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
