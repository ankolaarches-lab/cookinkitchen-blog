import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sous Vide Immersion Circulators - 2026 Guide",
  description: "We tested the best sous vide machines for perfect, restaurant-quality results at home. Find your perfect sous vide.",
};

const products = [
  {
    name: "Anova Culinary Sous Vide",
    price: "$199.00",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Anova-Culinary-Precision-Bluetooth-Immersion/dp/B00KQP4LME?tag=cookinkitchen-20",
    pros: ["Precise temperature", "Bluetooth connectivity", "Compact design", "Easy to use"],
    cons: ["Requires pot/container"],
  },
  {
    name: "Instant Pot Accu Slim Sous Vide",
    price: "$59.95",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Instant-Pot-Accu-Slim-Sous-Vide/dp/B08HQWTHFN?tag=cookinkitchen-20",
    pros: ["Affordable", "Slim design", "Reliable", "Easy storage"],
    cons: ["No app connectivity", "Less power"],
  },
  {
    name: "Breville Joule Sous Vide",
    price: "$199.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Breville-Joule-Sous-Vide-Immersion/dp/B00KQP4LMF?tag=cookinkitchen-20",
    pros: ["Compact", "App control", "Powerful", "Visual doneness guide"],
    cons: ["No display screen", "Premium price"],
  },
  {
    name: "ChefSteps Joule Turbo",
    price: "$249.00",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/ChefSteps-Joule-Turbo-Sous-Vide/dp/B0C4KQJP1?tag=cookinkitchen-20",
    pros: ["Fastest heating", "Advanced presets", "Premium build", "GuideMode"],
    cons: ["Most expensive", "App required"],
  },
];

export default function BestSousVide() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop" 
              alt="Best Sous Vide" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Sous Vide: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested sous vide immersion circulators to find the best for perfectly cooked, restaurant-quality meals at home.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Sous Vide?</h2>
            <p className="mb-4 text-stone-600">Sous vide cooking uses precise temperature control for perfectly cooked, evenly textured food every time. It's impossible to overcook and yields restaurant-quality results.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Anova Culinary</h2>
            <p className="mb-4 text-stone-600">The Anova combines precision, connectivity, and ease of use at a competitive price. It's our top pick for most home cooks.</p>
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
