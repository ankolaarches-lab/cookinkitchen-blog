import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cast Iron Care Products - 2026 Buying Guide",
  description: "Keep your cast iron in perfect condition with the best care products. From chain mail scrubbers to seasoning oils, we tested the top cast iron care essentials.",
};

const products = [
  {
    name: "Lodge Cast Iron Care Kit",
    price: "$24.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Lodge-Seasoned-Cast-Iron-Care/dp/B01N20M549?tag=cookinkitchen-20",
    pros: ["5 pieces included", "Seasoning spray", "Pan scraper", "Scrub brush", "Pre-seasoned ready"],
    cons: ["Brush not for delicate surfaces"],
  },
  {
    name: "CLARK'S Cast Iron Cleaning Kit",
    price: "$32.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Cast-Iron-Care-Kit-Coconut/dp/B081Y34GB7?tag=cookinkitchen-20",
    pros: ["Coconut oil based", "Made in USA", "Soap + seasoning oil", "Applicator pad included"],
    cons: ["Higher price point"],
  },
  {
    name: "Cast Iron Cleaner & Care Kit",
    price: "$19.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Cast-Iron-Cleaner-Care-Kit/dp/B07B3NVN4Q?tag=cookinkitchen-20",
    pros: ["Chain mail scrubber", "Seasoning oil", "Pan scrapers", "Hot handle cover", "Great value"],
    cons: ["Oil may need reapplying"],
  },
  {
    name: "Crisbee Stik Cast Iron Seasoning",
    price: "$14.95",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Crisbee-Original-Cast-Iron-Seasoning/dp/B00KDK94D2?tag=cookinkitchen-20",
    pros: ["Rave reviews", "Easy application", "Perfect seasoning", "Long lasting"],
    cons: ["Only seasoning, no tools"],
  },
  {
    name: "Field Company Cast Iron Care Kit",
    price: "$45.00",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://fieldcompany.com/products/cast-iron-care-kit?tag=cookinkitchen-20",
    pros: ["Premium quality", "Natural fiber brush", "Chain mail scrubber", "Field seasoning oil"],
    cons: ["Premium price", "Not on Amazon"],
  },
];

export default function BestCastIronCare() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cast Iron Care</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.8</span>
            <span className="font-lato text-stone-400 text-sm">Feb 18, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" 
              alt="Best Cast Iron Care Products" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Cast Iron Care Products: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Keep your cast iron cookware in perfect condition with our tested picks for cleaning, seasoning, and maintaining your pans.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Cast Iron Care Matters</h2>
            <p className="mb-4 text-stone-600">Proper cast iron maintenance ensures your pans last generations. Regular seasoning creates a natural non-stick surface and prevents rust.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Chain mail scrubber</strong> - Gentle yet effective cleaning</li>
              <li>• <strong>Seasoning oil</strong> - Maintains the non-stick surface</li>
              <li>• <strong>Pan scraper</strong> - Removes stuck-on food</li>
              <li>• <strong>Scrub brush</strong> - For thorough cleaning between uses</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Lodge Cast Iron Care Kit</h2>
            <p className="mb-4 text-stone-600">Lodge offers the best all-in-one solution with 5 essential tools at an affordable price. Includes seasoning spray, pan scraper, silicone handle holder, scrub brush, and care booklet.</p>
          </div>
        </article>
        
        {/* Products Grid */}
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
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.pros.slice(3).map((pro, i) => (
                        <span key={i} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-lato">{pro}</span>
                      ))}
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
        
        {/* CTA */}
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Maintain Your Cast Iron?</h3>
          <p className="font-lato text-stone-600 mb-6">Invest in quality care products and your cast iron will last a lifetime.</p>
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
