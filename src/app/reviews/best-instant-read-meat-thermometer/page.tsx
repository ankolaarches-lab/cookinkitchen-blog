import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Instant Read Meat Thermometers 2026 - Digital Thermometer Guide",
  description: "Perfect temps every time. We tested the best instant read meat thermometers for grilling, baking, and smoking. Find your perfect match.",
};

const products = [
  {
    name: "ThermoWorks ThermoPop 2",
    price: "$59.95",
    rating: 4.9,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=best instant read meat thermometer?tag=cookinkitchen-20",
    pros: ["Super fast (2-3 seconds)", "Waterproof", "Backlight display"],
    cons: ["Premium price"],
  },
  {
    name: "Lavatools Javelin PRO Duo",
    price: "$49.95",
    rating: 4.8,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=best instant read meat thermometer?tag=cookinkitchen-20",
    pros: ["Instant read", "Auto-rotating display", "Holds temp"],
    cons: ["Not waterproof"],
  },
  {
    name: "Kizen Instant Read Thermometer",
    price: "$24.99",
    rating: 4.7,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=best instant read meat thermometer?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Fast reading", "Easy to use"],
    cons: ["Not as durable"],
  },
  {
    name: "iDevices iGrill Mini",
    price: "$49.99",
    rating: 4.6,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=best instant read meat thermometer?tag=cookinkitchen-20",
    pros: ["Bluetooth connectivity", "App integration", "Compact"],
    cons: ["Requires battery"],
  },
  {
    name: "CDN IR Non-Contact Infrared Thermometer",
    price: "$39.95",
    rating: 4.5,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=best instant read meat thermometer?tag=cookinkitchen-20",
    pros: ["No contact needed", "Instant readings", "Laser targeting"],
    cons: ["Not for thin meats"],
  },
];

export default function InstantReadThermometer() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Tools & Gadgets</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 9, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/7.jpg" 
              alt="Best Instant Read Meat Thermometers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Instant Read Meat Thermometers 2026</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Never serve overcooked steak again. We tested the top instant read thermometers for perfect results every time.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need an Instant Read Thermometer</h2>
            <p className="mb-4 text-stone-600">The difference between a perfect steak and a dry, overcooked mess is just a few degrees. An instant read thermometer takes the guesswork out of cooking meat to perfection.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Response time</strong> - 2-3 seconds is ideal</li>
              <li>• <strong>Accuracy</strong> - Look for ±1°F accuracy</li>
              <li>• <strong>Waterproof</strong> - Makes cleaning easier</li>
              <li>• <strong>Display</strong> - Backlight for outdoor/low-light use</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: ThermoWorks ThermoPop 2</h2>
            <p className="mb-4 text-stone-600">The ThermoPop 2 delivers professional-grade accuracy in a pocket-sized package. Waterproof, lightning-fast readings, and the backlight display makes it perfect for evening grilling sessions.</p>
          </div>
        </article>

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
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Perfect Temps, Every Time</h3>
          <p className="font-lato text-stone-600 mb-6">Invest in a quality instant read thermometer and never guess at doneness again.</p>
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
