import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Grill Presses 2026 - Complete Buying Guide",
  description: "Achieve perfect sear marks and even cooking with the best grill presses of 2026. We tested top-rated cast iron, stainless steel, and aluminum presses.",
  openGraph: {
    title: "Best Grill Presses 2026 - Complete Buying Guide",
    description: "Achieve perfect sear marks. We tested top-rated cast iron, stainless steel, and aluminum grill presses.",
    type: "article",
    publishedTime: "2026-03-19",
    authors: ["CookinKitchen"],
    images: ["/images/reviews/grill-presses-2026.jpg"],
  },
};

const products = [
  {
    name: "Lodge Cast Iron Grill Press",
    price: "$24.99",
    rating: 4.7,
    link: "https://www.amazon.com/s?k=Lodge+Cast+Iron+Press+LGPP3&tag=cookinkitchen-20",
    pros: ["Pre-seasoned cast iron", "Excellent heat retention", "Built-in handle", "Durable construction"],
    cons: ["Heavy (3.5 lbs)", "Requires seasoning maintenance"],
  },
  {
    name: "Cuisinart Grill Press, 11-Inch",
    price: "$34.99",
    rating: 4.5,
    link: "https://www.amazon.com/s?k=Cuisinart+11+Inch+Grill+Press+CP+8&tag=cookinkitchen-20",
    pros: ["Aluminum construction", "Nonstick coating", "Easy to clean", "Lightweight"],
    cons: ["Less heat retention than cast iron", "Can warp over time"],
  },
  {
    name: "StarPack Home Stainless Steel Grill Press",
    price: "$29.99",
    rating: 4.4,
    link: "https://www.amazon.com/s?k=StarPack+Home+Stainless+Grill+Press&tag=cookinkitchen-20",
    pros: ["Rust-resistant stainless steel", "Ergonomic handle", "Modern design", "Dishwasher safe"],
    cons: ["Slides on smooth surfaces", "May not get as hot as cast iron"],
  },
  {
    name: "Lodge Pro-Grid Cast Iron Grill Press",
    price: "$39.99",
    rating: 4.6,
    link: "https://www.amazon.com/s?k=Lodge+Pro+Grid+Grill+Press+LGP3&tag=cookinkitchen-20",
    pros: ["Grid pattern for marks", "Large surface area", "Excellent weight", "Professional grade"],
    cons: ["Premium price", "Heavy"],
  },
  {
    name: "Leonyx Cast Iron Bacon Press/Grill Press",
    price: "$19.99",
    rating: 4.3,
    link: "https://www.amazon.com/s?k=Leonyx+Cast+Iron+Press+Handle&tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Pre-seasoned", "Versatile for bacon", "Good size"],
    cons: ["Smaller surface area", "Mixed reviews on handle"],
  },
];

export default function BestGrillPresses2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.5</span>
            <span className="font-lato text-stone-400 text-sm">Mar 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/grill-presses-2026.jpg" 
              alt="Best Grill Presses 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Grill Presses 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Get restaurant-quality sear marks and perfectly cooked meats at home. We tested the top grill presses to find the best options for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Use a Grill Press?</h2>
            <p className="mb-4 text-stone-600">A grill press is an essential tool for achieving that perfect sear on steaks, burgers, and sandwiches. It applies even pressure across the entire surface, ensuring uniform cooking and those beautiful grill marks. It's also great for pressing out excess moisture from burgers and flattening bacon for consistent cooking.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Material</strong> - Cast iron retains heat best, aluminum is lightweight, stainless steel is durable</li>
              <li>• <strong>Weight</strong> - Heavier presses apply more pressure but can be harder to handle</li>
              <li>• <strong>Surface Size</strong> - Larger surfaces cook more at once but require more storage space</li>
              <li>• <strong>Handle</strong> - Look for heat-resistant handles that stay cool during cooking</li>
              <li>• <strong>Maintenance</strong> - Consider whether it's dishwasher safe or requires special care</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Lodge Cast Iron Grill Press</h2>
            <p className="mb-4 text-stone-600">The Lodge Cast Iron Grill Press earns our top pick for its excellent heat retention, pre-seasoned surface, and built-in handle. It weighs just the right amount to apply firm pressure without being unwieldy, and the natural nonstick seasoning improves with each use.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div>
                  <div>
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
                          {product.pros.slice(2).map((pro, i) => (
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

        <div className="mt-12 bg-emerald-50 rounded-xl p-8">
          <h2 className="font-playfair text-2xl text-stone-800 mb-4">Best for Different Needs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Overall</h3>
              <p className="text-stone-600">Lodge Cast Iron - Perfect balance of heat retention and handleability</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Lightweight</h3>
              <p className="text-stone-600">Cuisinart - Easy to handle with nonstick coating</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Premium</h3>
              <p className="text-stone-600">Lodge Pro-Grid - Professional results with grid pattern</p>
            </div>
            <div>
              <h3 className="font-lato font-bold text-stone-700 mb-2">Best Value</h3>
              <p className="text-stone-600">Leonyx - Budget-friendly cast iron option</p>
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
