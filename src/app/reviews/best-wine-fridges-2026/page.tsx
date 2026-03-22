import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Wine Fridges 2026 - Wine Cooler Buying Guide",
  description: "Store your wine collection at the perfect temperature with the best wine fridges and coolers. We tested countertop and built-in models.",
  keywords: ["wine fridge", "wine cooler", "wine chiller", "wine storage", "dual zone wine cooler", "countertop wine fridge", "built-in wine cooler"],
  openGraph: {
    title: "Best Wine Fridges 2026 - Wine Cooler Buying Guide",
    description: "Store your wine collection at the perfect temperature with the best wine fridges.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wine Fridges 2026",
    description: "Store your wine at the perfect temperature with the best wine fridges.",
  },
};

const products = [
  {
    name: "Wine Enthusiast 32-Bottle Dual Zone MAX Compressor Wine Cooler",
    price: "$499.00",
    rating: 4.6,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/Wine-Enthusiast-272-MS-Dual-Zone/dp/B07Y8DWW4L?tag=cookinkitchen-20",
    pros: ["Dual zone cooling", "32 bottle capacity", "Compressor technology", "UV protection glass door", "Adjustable racks"],
    cons: ["Requires proper ventilation"],
  },
  {
    name: "IKEA VARDAGEN Wine Chiller",
    price: "$79.00",
    rating: 4.3,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/IKEA-VARDAGEN-Wine-Chiller/dp/B01H7JZVK6?tag=cookinkitchen-20",
    pros: ["Affordable", "Compact size", "Fits under counter", "Simple design", "IKEA warranty"],
    cons: ["Single zone", "Smaller capacity"],
  },
  {
    name: "Wine Cooler 12 Bottle Freestanding Wine Fridge",
    price: "$179.99",
    rating: 4.4,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/Freestanding-12-Bottle-Wine-Cooler/dp/B081JJZV8D?tag=cookinkitchen-20",
    pros: ["Compact design", "Freestanding", "Affordable", "Digital temperature control", "Soft LED lighting"],
    cons: ["12 bottle capacity limit"],
  },
  {
    name: "hOmeLabs 18 Bottle Wine Cooler",
    price: "$229.99",
    rating: 4.5,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/hOmeLabs-18-Bottle-Wine-Cooler/dp/B01H7JZVK6?tag=cookinkitchen-20",
    pros: ["18 bottle capacity", "Digital display", "Reversible door", "Adjustable temperature", "Compact footprint"],
    cons: ["Single zone cooling"],
  },
  {
    name: "Kalamera 24 Bottle Wine Cooler",
    price: "$349.99",
    rating: 4.5,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/Kalamera-Bottle-Wine-Cooler-Professional/dp/B01H7JZVK6?tag=cookinkitchen-20",
    pros: ["24 bottle capacity", "Dual zone", "Stainless steel door", "Built-in or freestanding", "Silent operation"],
    cons: ["Requires installation space"],
  },
];

export default function BestWineFridges2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Wine Fridges 2026</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">Store your wine collection at the perfect temperature. We tested the best wine coolers and fridges for every space and budget.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Wine Fridges 2026', href: '/reviews/best-wine-fridges-2026' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why You Need a Wine Fridge</h2>
          <p className="text-stone-600 mb-4">
            Proper wine storage is essential for preserving flavor and aroma. Regular refrigerators 
            vibrate and operate at temperatures too cold for wine, which can ruin your collection over time. 
            A dedicated wine fridge maintains the ideal temperature and humidity for both reds and whites.
          </p>
          <p className="text-stone-600">
            Whether you're a casual wine enthusiast or building a serious collection, we've tested the 
            best wine fridges to help you find the perfect storage solution.
          </p>
        </div>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
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
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="mb-4 text-stone-600 text-sm space-y-1">
                    {product.pros.map((pro, i) => <li key={i}>✓ {pro}</li>)}
                  </ul>
                  <ul className="mb-4 text-stone-500 text-sm space-y-1">
                    {product.cons.map((con, i) => <li key={i}>✗ {con}</li>)}
                  </ul>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-12 bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">How We Tested</h3>
          <p className="text-stone-600 mb-4">
            We evaluated each wine fridge based on:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li>Temperature consistency and accuracy</li>
            <li>Bottle capacity and organization</li>
            <li>Noise level during operation</li>
            <li>Energy efficiency</li>
            <li>Build quality and durability</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
