import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Rice Cookers - 2026 Buying Guide",
  description: "From basic to high-tech, we tested the best rice cookers for perfect rice every time. Find your perfect match.",
};

const products = [
  {
    name: "Zojirushi Neuro Fuzzy NS-LAC05",
    price: "$109.95",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Zojirushi-NS-LAC05-Uncooked-Premium-1-5-Liter/dp/B00005CF3U?tag=cookinkitchen-20",
    pros: ["Fuzzy logic technology", "Keep warm function", "Multiple settings", "Durable"],
    cons: ["Expensive", "Small capacity"],
  },
  {
    name: "Instant Pot Duo 7-in-1 Rice Cooker",
    price: "$59.95",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Instant-Pot-Duo-Rice-Cooker/dp/B08H8F2BZT?tag=cookinkitchen-20",
    pros: ["Multi-use", "Affordable", "Programmable", "Easy cleanup"],
    cons: ["Less specialized rice cooking"],
  },
  {
    name: "Tiger JKT-D10U 5.5-Cup",
    price: "$249.95",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Tiger-JKT-D10U-5-5-Cup-Keyboard-Cooker/dp/B00KQP4LMD?tag=cookinkitchen-20",
    pros: ["Induction heating", "Tigers fuzzy logic", "Multi-grain settings", "Premium quality"],
    cons: ["Very expensive"],
  },
  {
    name: "Aroma Housewares 8-Cup Rice Cooker",
    price: "$34.99",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Aroma-Housewares-ARC-914SBD-8-Cup-Cooker/dp/B000W5XHQY?tag=cookinkitchen-20",
    pros: ["Affordable", "Large capacity", "Simple to use", "Keep warm"],
    cons: ["Basic features", "No fuzzy logic"],
  },
];

export default function BestRiceCooker() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop" 
              alt="Best Rice Cookers" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Rice Cookers: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested rice cookers from budget to premium to find the best for perfect rice, from sushi to jasmine.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">How to Choose</h2>
            <p className="mb-4 text-stone-600">Consider capacity (1-10 cups), heating method (conventional vs induction), and special features like fuzzy logic for perfect results.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Zojirushi Neuro Fuzzy</h2>
            <p className="mb-4 text-stone-600">Zojirushi delivers consistently perfect rice with its fuzzy logic technology that adjusts cooking based on conditions.</p>
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
