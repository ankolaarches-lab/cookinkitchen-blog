import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Pasta Makers 2026 - Ultimate Buying Guide",
  description: "Fresh homemade pasta in minutes. We tested the best pasta makers from KitchenAid, Atlas, and more. Find the perfect machine for your kitchen.",
};

const products = [
  {
    name: "KitchenAid Pasta Roller Attachment",
    price: "$149.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=KitchenAid+Pasta+Roller+Attachment&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Compatible with KitchenAid stand mixers", "Multiple thickness settings", "Durable construction"],
    cons: ["Requires stand mixer purchase", "Limited to flat pasta shapes"],
  },
  {
    name: "Atlas Pasta Machine",
    price: "$89.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Atlas+Pasta+Machine&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Includes cutting attachments", "Manual operation"],
    cons: ["Requires hand-cranking", "Takes counter space"],
  },
  {
    name: "Marcato Atlas 150 Manual Pasta Machine",
    price: "$124.99",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Marcato+Atlas+150+Pasta+Machine&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Italian craftsmanship", "9 thickness settings", "Lifetime warranty"],
    cons: ["Hand-operated only", "Accessories sold separately"],
  },
  {
    name: "Philips Pasta Maker Plus",
    price: "$299.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Philips+Pasta+Maker+Plus&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Fully automatic", "Digital display", "Includes multiple shapes"],
    cons: ["Expensive", "Large footprint"],
  },
  {
    name: "CucinaPro Manual Pasta Machine",
    price: "$69.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=CucinaPro+Manual+Pasta+Machine&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Budget-friendly", "Chrome-plated steel", "Easy to clean"],
    cons: ["Limited settings", "Noisy operation"],
  },
  {
    name: "KitchenAid Pasta Sheet Roller & Cutter Set",
    price: "$199.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=KitchenAid+Pasta+Sheet+Roller&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Makes ravioli, fettuccine, linguine", "Storage case included", "Dishwasher safe parts"],
    cons: ["Pricey with attachments", "Complex for beginners"],
  },
];

export default function BestPastaMakers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 15, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/pasta-maker.jpg" 
              alt="Best Pasta Makers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Pasta Makers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Fresh, delicious homemade pasta in your own kitchen. We tested the top pasta makers to find the perfect machine for every home cook.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Pasta Maker?</h2>
            <p className="mb-4 text-stone-600">Homemade pasta tastes nothing like the store-bought variety. With a pasta maker, you can create fresh linguine, fettuccine, ravioli, and more in just minutes. It's easier than you think and the results are absolutely worth it.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Type</strong> - Manual crank vs. electric automatic</li>
              <li>• <strong>Capacity</strong> - How much pasta can you make at once?</li>
              <li>• <strong>Pasta Shapes</strong> - Some make only flat pasta, others do multiple shapes</li>
              <li>• <strong>Ease of cleaning</strong> - Look for dishwasher-safe parts</li>
              <li>• <strong>Storage</strong> - Consider counter space and storage needs</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Marcato Atlas 150</h2>
            <p className="mb-4 text-stone-600">The Marcato Atlas 150 combines Italian craftsmanship with practical design. With 9 thickness settings and included cutting attachments, it's the most versatile manual pasta machine at a reasonable price. The lifetime warranty ensures it'll be a kitchen staple for years to come.</p>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Our Top Picks</h2>
          <div className="grid gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition">
                <div>
                  <div>
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

        {/* Comparison Table */}
        <div className="mt-12">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-stone-200">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left p-4 font-lato text-stone-600">Product</th>
                  <th className="text-left p-4 font-lato text-stone-600">Price</th>
                  <th className="text-left p-4 font-lato text-stone-600">Rating</th>
                  <th className="text-left p-4 font-lato text-stone-600">Type</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className={index !== products.length - 1 ? "border-b border-stone-100" : ""}>
                    <td className="p-4 font-lato text-stone-800">{product.name}</td>
                    <td className="p-4 font-lato text-emerald-600 font-medium">{product.price}</td>
                    <td className="p-4 font-lato text-stone-600">{product.rating}</td>
                    <td className="p-4 font-lato text-stone-600">{index < 2 ? "Attachment" : index < 4 ? "Standalone" : "Set"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Make Fresh Pasta?</h3>
          <p className="font-lato text-stone-600 mb-6">A pasta maker opens up a world of possibilities. From simple spaghetti to intricate ravioli, you'll never go back to store-bought.</p>
          <Link 
            href="/reviews"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
          >
            Browse All Reviews
          </Link>
        </div>

        {/* Related Reviews */}
        <div className="mt-12">
          <h3 className="font-playfair text-xl text-stone-800 mb-4">You Might Also Like</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/reviews/best-stand-mixers" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Stand Mixers</h4>
              <p className="text-xs text-stone-500 mt-1">Your pasta maker's best friend</p>
            </a>
            <a href="/reviews/best-knives-under-50" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Review</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Chef Knives Under $50</h4>
              <p className="text-xs text-stone-500 mt-1">Slice and dice with precision</p>
            </a>
            <a href="/reviews/best-kitchen-utensils-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <span className="text-sm text-emerald-600 font-medium">Guide</span>
              <h4 className="font-bold text-stone-900 mt-1">Best Kitchen Utensils</h4>
              <p className="text-xs text-stone-500 mt-1">Complete your kitchen setup</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
