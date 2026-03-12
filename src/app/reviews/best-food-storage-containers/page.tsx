import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Food Storage Containers - 2026 Buying Guide",
  description: "Keep your food fresh with the best food storage containers. We tested glass, plastic, and stainless steel options.",
};

const products = [
  {
    name: "Pyrex Glass Food Storage Set (18-Piece)",
    price: "$44.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Pyrex+18+Piece+Smart+Seal?tag=cookinkitchen-20",
    pros: ["Glass is microwave-safe", "BPA-free", "Stackable", "Oven safe"],
    cons: ["Glass can break if dropped"],
  },
  {
    name: "Rubbermaid Brilliance Clear Food Storage (14-Piece)",
    price: "$29.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Rubbermaid+Brilliance+Storage+14+Piece?tag=cookinkitchen-20",
    pros: ["Crystal clear", "Leak-proof", "BPA-free", "Stain-resistant"],
    cons: ["Not oven-safe"],
  },
  {
    name: "Stainless Steel Lunch Box by Lunchbots",
    price: "$32.00",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Lunchbots+Stainless+Steel+Food?tag=cookinkitchen-20",
    pros: ["Eco-friendly", "No plastic", "Durable", "Non-toxic"],
    cons: ["Not microwave-safe", "No lids"],
  },
  {
    name: "Glasslock Glass Food Container Set (18-Piece)",
    price: "$39.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Glasslock+18+Piece+Container+Modular?tag=cookinkitchen-20",
    pros: ["Tempered glass", "Snap lock lids", "Microwave safe", "Freezer safe"],
    cons: ["Lids can stain"],
  },
  {
    name: "OXO Good Grips POP Container Set (10-Piece)",
    price: "$69.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1514986888952-c8f3ef7e8f64?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=OXO+Grips+POP+Container+Set?tag=cookinkitchen-20",
    pros: ["Airtight seal", "Stackable", "BPA-free", "Modern design"],
    cons: ["Premium price", "Lids sold separately"],
  },
];

export default function BestFoodStorageContainers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Food Storage Containers
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Keep your food fresh longer. We tested glass, plastic, and stainless steel options for every kitchen need.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Whether you're meal prepping for the week or storing leftovers, having the right food storage 
            containers makes a huge difference. We tested the top options for freshness, durability, 
            and value.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
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

        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            The <strong>OXO Good Grips POP Container Set</strong> is our top pick for most kitchens. 
            The airtight seal keeps food fresh for weeks, and the modular design looks great on any countertop.
          </p>
          <a
            href="https://www.amazon.com/s?k=OXO+Grips+POP+Container+Set?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Buy OXO Containers on Amazon
          </a>
        </section>

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
