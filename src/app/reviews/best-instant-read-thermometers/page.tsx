import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Instant Read Thermometers 2026 - Perfect Results Every Time",
  description: "Stop guessing if your meat is done. We tested the best instant read thermometers for accuracy, speed, and durability.",
};

const products = [
  {
    name: "ThermoWorks ThermoPop 2",
    price: "$49.95",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/ThermoWorks-ThermoPop-2-Thermometer/dp/B0BQR1QVQ8?tag=cookinkitchen-20",
    pros: ["2-second read", "Waterproof", "Backlight", "Auto-rotating display", "Lifetime warranty"],
    cons: ["No probe storage"],
  },
  {
    name: "ThermoWorks ChefAlarm",
    price: "$79.95",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/ThermoWorks-ChefAlarm-Cooking-Thermometer/dp/B00K9C6F2U?tag=cookinkitchen-20",
    pros: ["Count-up timer", "High/low alarm", "Big display", "Kitchen-ready", "Professional grade"],
    cons: ["More expensive"],
  },
  {
    name: "Kizen Instant Read Thermometer",
    price: "$24.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Kizen-Instant-Read-Thermometer-Waterproof/dp/B07RF1YLQG?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Fast 2-3 second read", "Auto-off", "Celsius/Fahrenheit"],
    cons: ["Less durable"],
  },
  {
    name: "Polder Digital Instant Read",
    price: "$19.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Polder-Digital-Instant-Thermometer/dp/B00UH7RV8I?tag=cookinkitchen-20",
    pros: ["Magnetic back", "Foldable", "Budget option"],
    cons: ["Slower reading"],
  },
];

export default function BestInstantReadThermometers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Instant Read Thermometers 2026</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">Perfect results every time. No more guessing if your meat is done.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">An instant read thermometer is the one tool that will transform your cooking. Whether you're grilling steaks, roasting chicken, or making candy, precise temperature readings ensure perfect results every time.</p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48100 rounded-lg flex bg-stone--shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="text-stone-600 text-sm mb-4 space-y-1">
                    {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                  </ul>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">The <strong>ThermoWorks ThermoPop 2</strong> is our top pick. It delivers professional-grade accuracy in just 2 seconds, with a waterproof design and lifetime warranty. Worth the investment for serious home cooks.</p>
          <a href="https://www.amazon.com/ThermoWorks-ThermoPop-2-Thermometer/dp/B0BQR1QVQ8?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy on Amazon</a>
        </section>
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">← Back to All Reviews</Link>
        </div>
      </main>
    </div>
  );
}
