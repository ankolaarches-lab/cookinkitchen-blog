import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Blenders 2026 - Ultimate Buying Guide",
  description: "Best Blenders 2026 - Complete guide",
  openGraph: {
    title: "Best Blenders 2026",
    description: "Best Blenders 2026 - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-appliances.png"],
  },
};

const products = [
  {
    name: "Vitamix 5200",
    price: "$549.95",
    rating: 4.9,
    link: `https://www.amazon.com/s?k=Vitamix+5200+Standard+Blender+Professional&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Commercial-grade motor", "Variable speed control", "Perfect for hot soups", "10-year warranty"],
    cons: ["Premium price", "Loud operation", "Heavy"],
  },
  {
    name: "Vitamix Ascent X4",
    price: "$649.95",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Vitamix+Ascent+Blender+Set+Black&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Smart auto-detection", "Multiple container sizes", "Touchscreen controls", "Self-cleaning"],
    cons: ["Very expensive", "Complex features"],
  },
  {
    name: "Ninja Professional BL610",
    price: "$99.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Ninja+Professional+Blender+Quiet&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Affordable", "Large 72oz capacity", "Powerful 1000W motor", "Easy to clean"],
    cons: ["Not as durable", "No variable speed"],
  },
  {
    name: "Ninja Foodi Power Pitcher",
    price: "$149.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Ninja+Foodi+Power+Pitcher+System&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Built-in sensor", "Auto-iQ programs", "Smoothie cups included", "Nutrient extraction"],
    cons: ["Learning curve", "More parts to clean"],
  },
  {
    name: "Oster Pro 1200",
    price: "$129.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Oster+Blender+Stainless+Brushed+Nickel&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Good value", "Dual-direction blade", "Food processor jar included", "Smoothie cups"],
    cons: ["Less powerful", "Warranty shorter"],
  },
  {
    name: "Blendtec Designer 725",
    price: "$699.95",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Blendtec+Designer+725+Blender+Black&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["Wildside+ jar", "Touchscreen interface", "Pre-programmed recipes", "10-year warranty"],
    cons: ["Very expensive", "Large footprint"],
  },
];

export default function BestBlenders2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 5, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/blender.jpg" 
              alt="Best Blenders 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Blenders 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From silky smoothies to creamy soups, we tested the top blenders to find the perfect one for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Quality Blender?</h2>
            <p className="mb-4 text-stone-600">A great blender is the heart of a healthy kitchen. Whether you're making morning smoothies, nut butters, hot soups, or frozen desserts, the right blender makes all the difference.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Motor Power</strong> - 1000W+ for heavy-duty tasks, 500W+ for everyday use</li>
              <li>• <strong>Container Design</strong> - Look for square bottoms and patented blade technology</li>
              <li>• <strong>Variable Speed</strong> - Essential for precision blending and making hot soups</li>
              <li>• <strong>Warranty</strong> - Premium blenders offer 7-10 year warranties</li>
              <li>• <strong>Noise Level</strong> - Consider sound enclosures if noise is a concern</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Vitamix 5200</h2>
            <p className="mb-4 text-stone-600">The Vitamix 5200 remains the gold standard for home blenders. Its commercial-grade 2 HP motor and variable speed control deliver restaurant-quality results from smoothies to hot soups. The 64oz container is perfect for families, and the 10-year warranty provides peace of mind.</p>
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
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Blend?</h3>
          <p className="font-lato text-stone-600 mb-6">Invest in a quality blender and transform your cooking with smoothies, soups, sauces, and more.</p>
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
