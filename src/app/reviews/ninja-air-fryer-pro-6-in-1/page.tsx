import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninja Air Fryer Pro XL 6-in-1 Review 2026",
  description: "Complete review of the Ninja Air Fryer Pro XL 6-in-1 (AF181). 6.5-quart capacity, MaxCrisp technology, and versatile cooking functions tested.",
};

const product = {
  name: "Ninja Air Fryer Pro XL 6-in-1 (AF181)",
  price: "$169.99",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop",
  link: "https://www.amazon.com/Ninja-Air-Fryer-Pro-XL-6-in-1/dp/B0B7T1VJGP?tag=cookinkitchen-20",
  features: [
    "6.5-quart capacity",
    "MaxCrisp technology for extra crispy results",
    "6 cooking functions: Air Fry, Air Roast, Bake, Reheat, Dehydrate",
    "1750 watts",
    "Dishwasher-safe parts",
    "Nonstick basket & crisper plate",
  ],
  pros: [
    "Large family-sized capacity",
    "MaxCrisp delivers extra crispy results",
    "Versatile 6-in-1 functions",
    "Easy to clean - dishwasher safe",
    "Fast preheating",
  ],
  cons: [
    "Takes up counter space",
    "Larger footprint than compact models",
  ],
};

export default function NinjaAirFryerProReview() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Appliance Review</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ninja Air Fryer Pro XL 6-in-1</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">The ultimate air fryer for crispy, family-sized meals with MaxCrisp technology.</p>
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
              The Ninja Air Fryer Pro XL 6-in-1 (AF181) is a powerhouse kitchen appliance that delivers exceptional results. With its generous 6.5-quart capacity, it's perfect for families or anyone who loves to cook in batches.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The standout feature is MaxCrisp technology, which uses superheated air to deliver up to 50% crispier results than traditional air frying. Whether you're making french fries, chicken wings, or roasted vegetables, this machine delivers that perfect golden crunch.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              With 6 cooking functions (Air Fry, Air Roast, Bake, Reheat, Dehydrate, and MaxCrisp), this is more than just an air fryer—it's a versatile cooking appliance that can replace multiple gadgets on your counter.
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
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Final Verdict</h3>
          <p className="text-emerald-100 text-lg mb-6">
            The Ninja Air Fryer Pro XL 6-in-1 is our top pick for families and serious air fryer enthusiasts. The combination of large capacity, MaxCrisp technology, and versatile cooking functions makes it worth the investment.
          </p>
          <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition">Buy on Amazon</a>
        </section>

        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
