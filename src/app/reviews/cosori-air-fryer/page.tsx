import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosori Air Fryer Review 2026 - Premium 5.8 Quart",
  description: "In-depth review of the Cosori Air Fryer 5.8 Quart. Sleek design, ceramic nonstick basket, and 12 cooking presets tested.",
};

const product = {
  name: "Cosori Air Fryer 5.8 Quart",
  price: "$89.99",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=400&fit=crop",
  link: "https://www.amazon.com/COSORI-5-8-Quart-Air-Fryer/dp/B07GWLBJP7?tag=cookinkitchen-20",
  features: [
    "5.8-quart capacity",
    "12 cooking presets",
    "Ceramic nonstick basket",
    "Digital touch display",
    "1700 watts",
    "Dishwasher-safe parts",
    "30-minute timer",
  ],
  pros: [
    "Sleek, modern design",
    "Easy-to-use digital interface",
    "Great value for the price",
    "12 convenient presets",
    "Ceramic coating is health-safe",
  ],
  cons: [
    "Basket smaller than some competitors",
    "No see-through window",
    "Power cord could be longer",
  ],
};

export default function CosoriAirFryerReview() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Appliance Review</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cosori Air Fryer 5.8 Quart</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">Premium air frying with sleek design and smart presets at an affordable price.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>

        {/* Product Hero */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-80 h-64 bg-stone-100 rounded-xl flex-shrink-0 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-stone-900 mb-2">{product.name}</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-500 text-xl">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                <span className="text-stone-600 font-medium">{product.rating}/5</span>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-4">{product.price}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-stone-600 text-sm flex items-start gap-2">
                    <span className="text-emerald-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-stone-800 transition text-lg">Check Price on Amazon</a>
            </div>
          </div>
        </div>

        {/* Review Content */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Our Review</h3>
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The Cosori Air Fryer 5.8 Quart strikes the perfect balance between performance, design, and price. This popular air fryer has become a kitchen staple for thousands of home cooks, and after testing, it's easy to see why.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The standout feature is the sleek, modern design that looks great on any countertop. But it's not just about looks—the digital touch display with 12 cooking presets makes operation incredibly intuitive. From fries to chicken to baked goods, one-touch presets handle it all.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The ceramic nonstick basket is a health-conscious choice, free from PTFE and PFOA. It cooks evenly and cleans up easily—most messes wipe away with a damp cloth, and the entire basket is dishwasher safe.
            </p>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <span className="text-emerald-500">✓</span> Pros
            </h3>
            <ul className="space-y-3">
              {product.pros.map((pro, i) => (
                <li key={i} className="text-stone-700">{pro}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <span className="text-red-500">✗</span> Cons
            </h3>
            <ul className="space-y-3">
              {product.cons.map((con, i) => (
                <li key={i} className="text-stone-700">{con}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Verdict */}
        <section className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Final Verdict</h3>
          <p className="text-orange-100 text-lg mb-6">
            The Cosori Air Fryer is an excellent choice for anyone wanting a reliable, attractive air fryer without breaking the bank. The combination of 12 presets, ceramic coating, and easy cleanup makes it a best-seller for good reason.
          </p>
          <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition">Buy on Amazon</a>
        </section>

        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
