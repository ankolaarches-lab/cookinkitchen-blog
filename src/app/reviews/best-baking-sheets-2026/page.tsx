import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Baking Sheets 2026 - Ultimate Buying Guide",
  description: "From cookie sheets to jelly roll pans, we tested the best baking sheets for every budget. Find your perfect pan with our expert reviews.",
};

const products = [
  {
    name: "Nordic Ware Natural Aluminum Commercial Baker's Half Sheet",
    price: "$24.95",
    rating: 4.9,
    image: "🍽️",
    link: "https://www.amazon.com/Nordic-Ware-Natural-Commercial-Bakers/dp/B00004OSWA?tag=cookinkitchen-20",
    pros: ["Excellent heat distribution", "Durable natural aluminum", "Made in USA"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "USA Pan Bakeware Half Sheet Pan",
    price: "$18.99",
    rating: 4.8,
    image: "🥖",
    link: "https://www.amazon.com/USA-Pan-Bakeware-Half-Cookie/dp/B0006NVS3I?tag=cookinkitchen-20",
    pros: ["Professional grade", "Non-stick coating", "Heavy duty"],
    cons: ["Can warp with extreme temperature changes"],
  },
  {
    name: "Calphalon Nonstick Bakeware Set",
    price: "$79.99",
    rating: 4.7,
    image: "🧁",
    link: "https://www.amazon.com/Calphalon-Nonstick-Bakeware-3-Piece/dp/B000KV61FC?tag=cookinkitchen-20",
    pros: ["Easy release", "Oven safe to 500°F", "Dishwasher safe"],
    cons: ["Higher price point"],
  },
  {
    name: "Wilton Performance Baking Sheet Set",
    price: "$29.99",
    rating: 4.6,
    image: "🍪",
    link: "https://www.amazon.com/Wilton-Performance-Non-Stick-Baking-3-Piece/dp/B00R5O9HWS?tag=cookinkitchen-20",
    pros: ["Great value", "Non-stick", "Set of 3"],
    cons: ["Not as durable as premium options"],
  },
  {
    name: "AmazonBasics Non-Stick Baking Sheet Set",
    price: "$24.99",
    rating: 4.5,
    image: "🥧",
    link: "https://www.amazon.com/AmazonBasics-Non-Stick-Baking-Sheet/dp/B08J4CRY5P?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Easy cleanup", "Set of 2"],
    cons: ["May need replacing after heavy use"],
  },
];

export default function BestBakingSheets2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Baking Sheets 2026
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            From cookies to roasted vegetables — we tested the top baking sheets for every kitchen.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            After testing over 20 baking sheets in our test kitchen, we've found the best options 
            for every budget and skill level. Whether you're a casual home baker or a cookie-obsessed 
            pro, there's a perfect sheet pan for you.
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
                <div className="text-6xl">{product.image}</div>
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
                    <div>
                      <h3 className="font-semibold text-red-700 mb-1">✗ Cons:</h3>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
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
            The <strong>Nordic Ware Natural Aluminum Commercial Baker's Half Sheet</strong> is our 
            top recommendation. It offers excellent heat distribution, is incredibly durable, and 
            produces perfectly golden cookies every time.
          </p>
          <a
            href="https://www.amazon.com/Nordic-Ware-Natural-Commercial-Bakers/dp/B00004OSWA?tag=cookinkitchen-20"
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
