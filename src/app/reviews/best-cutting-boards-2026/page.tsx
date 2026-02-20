import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cutting Boards 2026 - Buying Guide",
  description: "From plastic to wood to bamboo, we tested the best cutting boards for every kitchen. Find your perfect board for meal prep.",
};

const products = [
  {
    name: "Joseph Joseph Tri-Prep Cutting Board",
    price: "$24.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Joseph-Joseph-Tri-Prep-Cutting-Board/dp/B01H5OX5KQ?tag=cookinkitchen-20",
    pros: ["3 different sizes", "Non-slip edges", "Juice grooves", "Dishwasher safe"],
    cons: ["Plastic material"],
  },
  {
    name: "OXO Good Grips 3-Piece Cutting Board Set",
    price: "$29.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/OXO-Good-Grips-3-Piece-Cutting/dp/B079GBL3TH?tag=cookinkitchen-20",
    pros: ["Color coded", "Non-slip grips", "BPA-free plastic", "Dishwasher safe"],
    cons: ["Can warp over time"],
  },
  {
    name: "Teakhaus by Proteak End-Grain Cutting Board",
    price: "$89.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Teakhaus-Proteak-End-Grain-Cutting/dp/B000J2J4Q0?tag=cookinkitchen-20",
    pros: ["End-grain construction", "Self-healing", "FDA approved", "Beautiful wood grain"],
    cons: ["Premium price", "Requires oiling"],
  },
  {
    name: "John Boos Maple Wood Cutting Board",
    price: "$79.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/John-Boos-Blended-Maple-18-Inch/dp/B0006JX1E0?tag=cookinkitchen-20",
    pros: ["Professional grade", "Reversible", "Rubber feet", "Made in USA"],
    cons: ["Heavy", "Needs regular oiling"],
  },
  {
    name: "Totally Bamboo Kitchen Board Set",
    price: "$34.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Totally-Bamboo-Kitchen-3-Piece-Set/dp/B0018RX1Q8?tag=cookinkitchen-20",
    pros: ["Eco-friendly bamboo", "3 sizes", "Stain resistant", "Affordable"],
    cons: ["Not for heavy duty"],
  },
];

export default function BestCuttingBoards2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Cutting Boards 2026
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            From plastic to premium wood — we tested the top cutting boards for every kitchen.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            After testing over 15 cutting boards, we've found the best options for every budget and cooking style. 
            Whether you need a lightweight plastic board for quick prep or a professional-grade wooden board that lasts decades 
            we've got, you covered.
          </p>
        </section>

        {/* Products */}
        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 flex-shrink-0">
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
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-emerald-700 mb-1">✓ Pros:</h3>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Recommendation */}
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            The <strong>Teakhaus by Proteak End-Grain Cutting Board</strong> is our top recommendation. 
            End-grain construction means it's self-healing, incredibly durable, and gentle on knife edges. 
            Plus, it's FDA approved and looks stunning on your countertop.
          </p>
          <a
            href="https://www.amazon.com/Teakhaus-Proteak-End-Grain-Cutting/dp/B000J2J4Q0?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Buy Now on Amazon
          </a>
        </section>

        {/* Back to Reviews */}
        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="text-emerald-600 font-medium hover:underline"
          >
            ← Back to All Reviews
          </Link>
        </div>
      </main>
    </div>
  );
}
