import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Non-Stick Frying Pans - 2026 Buying Guide",
  description: "From ceramic to PTFE, we tested the best non-stick pans for easy cooking and cleanup. Find your perfect pan.",
};

const products = [
  {
    name: "T-fal E93808 Professional Nonstick Fry Pan",
    price: "$24.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/T-fal-E93808-Professional-Nonstick-8-Inch/dp/B00KQP4LMA?tag=cookinkitchen-20",
    pros: ["Affordable", "Heat indicator", "Dishwasher safe", "Lightweight"],
    cons: ["Not metal utensil safe"],
  },
  {
    name: "Calphalon Classic Nonstick 10-Inch",
    price: "$49.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Calphalon-CC-0011-10-Inch-Nonstick-Skilelt/dp/B000G0OB0I?tag=cookinkitchen-20",
    pros: ["Hard-anodized aluminum", "PFOA-free", "Even heating", "Durable"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "GreenLife Soft Grip 9-Inch",
    price: "$27.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/GreenLife-CC-0012-Soft-9-Inch/dp/B01N32NCPM?tag=cookinkitchen-20",
    pros: ["Ceramic coating", "Soft grip handle", "Eco-friendly", "Budget-friendly"],
    cons: ["Less durable than PTFE"],
  },
  {
    name: "All-Clad Hard Anodized 10-Inch",
    price: "$89.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/All-Clad-HA1-10010-Hard-Anodized-10-Inch/dp/B00KQP4LMA?tag=cookinkitchen-20",
    pros: ["Premium quality", "Metal utensil safe", "Lifetime warranty", "Perfect heat distribution"],
    cons: ["Expensive", "Heavy"],
  },
];

export default function BestNonStickPan() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-fullato font-medium"> text-sm font-lCookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop" 
              alt="Best Non-Stick Frying Pans" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Non-Stick Frying Pans: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested the top non-stick pans to find which ones truly deliver easy release and long-lasting performance.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <p className="mb-4 text-stone-600">A good non-stick pan should have: durable coating, comfortable handle, even heat distribution, and be PFOA-free for health safety.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: T-fal Professional</h2>
            <p className="mb-4 text-stone-600">The T-fal offers exceptional value with its heat indicator system and professional-grade non-stick surface at an affordable price point.</p>
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
