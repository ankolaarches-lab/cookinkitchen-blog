import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Meat Slicers 2026 - Complete Buying Guide",
  description: "Slice like a pro at home. We tested the best meat slicers from Chef'sChoice, Cuisinart, and more. Find the perfect slicer for your kitchen.",
  openGraph: {
    title: "Best Meat Slicers 2026 - Complete Buying Guide",
    description: "Slice like a pro at home. We tested the best meat slicers from Chef'sChoice, Cuisinart, and more.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/meat-slicers-2026.jpg"],
  },
};

const products = [
  {
    name: "Chef'sChoice 615A Premium Meat Slicer",
    price: "$249.99",
    rating: 4.7,
    image: "/images/kitchen/1.jpg",
    link: "https://www.amazon.com/s?k=ChefsChoice+615A+Premium+Meat+Slicer&tag=cookinkitchen-20",
    pros: ["Professional-grade slicing", "Adjustable thickness (0-1 inch)", "Easy to clean", "Powerful 120W motor", "Sturdy die-cast aluminum"],
    cons: ["Louder than some models", "Requires some assembly"],
  },
  {
    name: "Cuisinart Kitchen Pro 7.5-Inch Meat Slicer",
    price: "$149.99",
    rating: 4.5,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=Cuisinart+Kitchen+Pro+7+5+Inch+Slicer&tag=cookinkitchen-20",
    pros: ["Compact size perfect for home kitchens", "Stainless steel blade", "Adjustable thickness dial", "Easy storage", "Affordable"],
    cons: ["Smaller blade than competitors", "Not for heavy commercial use"],
  },
  {
    name: "SuperBuddy Manual Meat Slicer",
    price: "$89.99",
    rating: 4.4,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=SuperBuddy+Manual+Meat+Slicer&tag=cookinkitchen-20",
    pros: ["Budget-friendly option", "Manual operation - no electricity needed", "Lightweight and portable", "Great for thin cuts"],
    cons: ["Requires more effort to use", "Less consistent slices", "Not suitable for tough meats"],
  },
  {
    name: "BESWOOD 10-Inch Electric Meat Slicer",
    price: "$299.99",
    rating: 4.6,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=BESWOOD+10+Inch+Electric+Meat+Slicer&tag=cookinkitchen-20",
    pros: ["Large 10-inch blade", "Heavy-duty motor", "Professional results", "High rpm for clean cuts", "Durable construction"],
    cons: ["Higher price point", "Takes up more counter space"],
  },
  {
    name: "VonShef 7.5-Inch Electric Food Slicer",
    price: "$79.99",
    rating: 4.3,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=VonShef+7+5+Inch+Electric+Slicer&tag=cookinkitchen-20",
    pros: ["Most affordable electric option", "Compact design", "Great for beginners", "Adjustable thickness"],
    cons: ["Less powerful motor", "Smaller capacity", "Mixed reviews on durability"],
  },
  {
    name: "HausundChef Professional Meat Slicer",
    price: "$349.99",
    rating: 4.8,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=HausundChef+Professional+Meat+Slicer&tag=cookinkitchen-20",
    pros: ["Commercial-grade quality", "Very sharp stainless steel blade", "Precise thickness control", "Silent motor", "Easy to maintain"],
    cons: ["Premium price", "Heavy - hard to move around"],
  },
];

export default function BestMeatSlicers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 16, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/7.jpg" 
              alt="Best Meat Slicers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Meat Slicers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Slice like a pro at home. We tested the top meat slicers to find the best for deli-quality cuts in your own kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Meat Slicer?</h2>
            <p className="mb-4 text-stone-600">A quality meat slicer transforms how you cook at home. Create restaurant-quality deli meats, paper-thin prosciutto, perfectly uniform slices for sandwiches, or even slice vegetables and cheese with precision. No more uneven cuts or struggling with dull knives.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Blade Size</strong> - 7-10 inches depending on your needs</li>
              <li>• <strong>Motor Power</strong> - More wattage = easier slicing through tough meats</li>
              <li>• <strong>Thickness Control</strong> - Look for precise dial adjustments (paper-thin to 1 inch)</li>
              <li>• <strong>Material Quality</strong> - Stainless steel blades last longer, die-cast aluminum bodies are more durable</li>
              <li>• <strong>Ease of Cleaning</strong> - Removable blades and parts make maintenance simple</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Chef'sChoice 615A</h2>
            <p className="mb-4 text-stone-600">The Chef'sChoice 615A earns our top spot with its professional-grade performance, powerful 120W motor, and incredibly precise thickness control. It's the closest thing to commercial deli equipment you can get for home use.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex gap-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-lg text-stone-800">{product.name}</h3>
                      <span className="font-lato text-emerald-600 font-bold">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-500 font-bold">★ {product.rating}</span>
                    </div>
                    <div className="flex gap-4 text-sm mb-3">
                      <div>
                        <span className="text-stone-500 font-medium">Pros:</span>
                        <ul className="text-stone-600">
                          {product.pros.slice(3).map((pro, i) => (
                            <li key={i}>✓ {pro}</li>
                          ))}
                        </ul>
                      </div>
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
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Comparison Table</h2>
          <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-lato">Product</th>
                <th className="px-4 py-3 text-left font-lato">Price</th>
                <th className="px-4 py-3 text-left font-lato">Rating</th>
                <th className="px-4 py-3 text-left font-lato">Blade Size</th>
                <th className="px-4 py-3 text-left font-lato">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr>
                <td className="px-4 py-3 font-lato text-stone-800">Chef'sChoice 615A</td>
                <td className="px-4 py-3 font-lato text-stone-600">$249.99</td>
                <td className="px-4 py-3 font-lato text-emerald-600 font-bold">4.7</td>
                <td className="px-4 py-3 font-lato text-stone-600">8.5"</td>
                <td className="px-4 py-3 font-lato text-stone-600">Best Overall</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="px-4 py-3 font-lato text-stone-800">Cuisinart Kitchen Pro</td>
                <td className="px-4 py-3 font-lato text-stone-600">$149.99</td>
                <td className="px-4 py-3 font-lato text-emerald-600 font-bold">4.5</td>
                <td className="px-4 py-3 font-lato text-stone-600">7.5"</td>
                <td className="px-4 py-3 font-lato text-stone-600">Best Compact</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-lato text-stone-800">SuperBuddy Manual</td>
                <td className="px-4 py-3 font-lato text-stone-600">$89.99</td>
                <td className="px-4 py-3 font-lato text-emerald-600 font-bold">4.4</td>
                <td className="px-4 py-3 font-lato text-stone-600">6.5"</td>
                <td className="px-4 py-3 font-lato text-stone-600">Best Budget</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="px-4 py-3 font-lato text-stone-800">BESWOOD 10-Inch</td>
                <td className="px-4 py-3 font-lato text-stone-600">$299.99</td>
                <td className="px-4 py-3 font-lato text-emerald-600 font-bold">4.6</td>
                <td className="px-4 py-3 font-lato text-stone-600">10"</td>
                <td className="px-4 py-3 font-lato text-stone-600">Best Large</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-lato text-stone-800">VonShef 7.5-Inch</td>
                <td className="px-4 py-3 font-lato text-stone-600">$79.99</td>
                <td className="px-4 py-3 font-lato text-emerald-600 font-bold">4.3</td>
                <td className="px-4 py-3 font-lato text-stone-600">7.5"</td>
                <td className="px-4 py-3 font-lato text-stone-600">Best Value Electric</td>
              </tr>
              <tr className="bg-stone-50">
                <td className="px-4 py-3 font-lato text-stone-800">HausundChef Professional</td>
                <td className="px-4 py-3 font-lato text-stone-600">$349.99</td>
                <td className="px-4 py-3 font-lato text-emerald-600 font-bold">4.8</td>
                <td className="px-4 py-3 font-lato text-stone-600">12"</td>
                <td className="px-4 py-3 font-lato text-stone-600">Best Premium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-8">
          <h2 className="font-playfair text-2xl text-stone-800 mb-4">Best for Different Needs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Overall</h3>
              <p className="text-stone-600">Chef'sChoice 615A - Professional performance at home</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Budget</h3>
              <p className="text-stone-600">SuperBuddy Manual - Great value without electricity</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Compact</h3>
              <p className="text-stone-600">Cuisinart Kitchen Pro - Perfect for small kitchens</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Premium</h3>
              <p className="text-stone-600">HausundChef Professional - Commercial quality</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/reviews" className="text-emerald-600 hover:text-emerald-700 font-lato font-medium">
            ← Browse All Kitchen Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
