import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Instant Pot - 2026 Multi-Cooker Review",
  description: "We tested the best Instant Pot models for pressure cooking, slow cooking, and more. Find your perfect multi-cooker.",
};

const products = [
  {
    name: "Instant Pot Duo 7-in-1",
    price: "$89.95",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Instant-Pot-Duo-Multi-Use-Pressure-Cooker/dp/B074WC5LGV?tag=cookinkitchen-20",
    pros: ["7-in-1 functionality", "Easy to use", "Great recipes", "Durable"],
    cons: ["6-quart may be small for families"],
  },
  {
    name: "Instant Pot Ultra 10-in-1",
    price: "$129.95",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Instant-Pot-Ultra-Multi-Use-Programmable/dp/B01NBKNRQ1?tag=cookinkitchen-20",
    pros: ["10-in-1 functions", "Altitude adjustment", "More program options", "Sleek design"],
    cons: ["More expensive", "Learning curve"],
  },
  {
    name: "Instant Pot Duo Crisp 11-in-1",
    price: "$149.95",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Instant-Pot-Duo-Crisp-11-in-1/dp/B08HQWTHFL?tag=cookinkitchen-20",
    pros: ["Air fryer lid included", "11 functions", "Crispy results", "Two lids"],
    cons: ["Expensive", "Takes more storage space"],
  },
  {
    name: "Instant Pot Duo Mini 7-in-1",
    price: "$69.95",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Instant-Pot-Duo-Mini-3-Quart/dp/B01NBKNRQ3?tag=cookinkitchen-20",
    pros: ["Compact size", "Great for couples", "Affordable", "Perfect for small kitchens"],
    cons: ["Smaller capacity", "Limited batch cooking"],
  },
];

export default function BestInstantPot() {
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
              alt="Best Instant Pot" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Instant Pot: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From the popular Duo to the feature-rich Ultra, we tested Instant Pot models to find the best for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Instant Pot?</h2>
            <p className="mb-4 text-stone-600">Instant Pots combine 7-11 kitchen appliances in one, saving counter space and simplifying meal prep. They're perfect for meal prep, busy families, and anyone who wants hands-off cooking.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Instant Pot Duo</h2>
            <p className="mb-4 text-stone-600">The Duo remains our top pick for its perfect balance of features, reliability, and price. It's the best-selling Instant Pot for good reason.</p>
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
