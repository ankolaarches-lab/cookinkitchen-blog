import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Mandoline Slicers 2026 - Ultimate Buying Guide",
  description: "Slice like a pro. We tested the best mandoline slicers for uniform cuts, from预算-friendly to professional-grade. Find your perfect slicer.",
};

const products = [
  {
    name: "OXO Good Grips V-Blade Mandoline Slicer",
    price: "$34.95",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=OXO+Good+Grips+Mandoline+Slicer?tag=cookinkitchen-20",
    pros: ["V-shaped blade", "Non-slip base", "Easy to clean", "Multiple slice thicknesses"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "Borner V-Power Mandoline",
    price: "$49.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590483734730-67d710e40277?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Borner+V-Power+Mandoline?tag=cookinkitchen-20",
    pros: ["German engineering", "Very sharp blades", "Durable construction", "Made in Germany"],
    cons: ["No food holder included"],
  },
  {
    name: "KitchenAid Mandoline Slicer",
    price: "$44.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1579722820308-d74e5719d38e?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=KitchenAid+Mandoline+Slicer?tag=cookinkitchen-20",
    pros: ["Stainless steel blades", "Adjustable thickness", "Built-in food holder", "Dishwasher safe"],
    cons: ["Takes more storage space"],
  },
  {
    name: "Mueller Austria Mandoline Pro",
    price: "$39.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Mueller+Mandoline+Pro+Slicer?tag=cookinkitchen-20",
    pros: ["4 blade types", "Julienne and wavy cuts", "Includes food holder", "Value pack"],
    cons: ["Plastic feel"],
  },
  {
    name: "Chef'n Veggie Chop Hand-Powered Slicer",
    price: "$29.99",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Chef+n+Veggie+Chop?tag=cookinkitchen-20",
    pros: ["Compact design", "Easy to store", "No electricity needed", "Fun to use"],
    cons: ["Not for precision slicing"],
  },
];

export default function BestMandolineSlicers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Gadgets</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Mar 10, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&h=400&fit=crop" 
              alt="Best Mandoline Slicers 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Mandoline Slicers 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">Uniform slices in seconds. We tested the top mandoline slicers to find the best for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Get a Mandoline Slicer?</h2>
            <p className="mb-4 text-stone-600">Mandoline slicers deliver perfectly even slices in seconds — something even the sharpest knife can't consistently achieve. Whether you're making paper-thin cucumber salads, uniform sweet potato fries, or professional-looking vegetable garnishes, a mandoline transforms prep time.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <ul className="mb-4 text-stone-600 space-y-2">
              <li>• <strong>Blade type</strong> - V-blades are sharpest, straight blades are more durable</li>
              <li>• <strong>Thickness settings</strong> - Look for adjustable from 1mm to 10mm+</li>
              <li>• <strong>Safety features</strong> - Food holders protect your fingers</li>
              <li>• <strong>Cleaning</strong> - Dishwasher-safe saves time, but hand wash extends life</li>
              <li>• <strong>Storage</strong> - Consider size if cabinet space is limited</li>
            </ul>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: OXO Good Grips V-Blade Mandoline</h2>
            <p className="mb-4 text-stone-600">The OXO Good Grips V-Blade Mandoline earns our top spot for its exceptional sharpness, stable non-slip base, and thoughtful design. The V-shaped blade slices effortlessly through vegetables while the finger guard keeps you safe. Multiple thickness settings make it versatile for everything from delicate lettuce to hearty zucchini.</p>
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

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <h2 className="font-playfair text-2xl text-stone-800 mb-6">Quick Comparison</h2>
          <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100">
            <thead className="bg-stone-100">
              <tr>
                <th className="text-left p-4 font-playfair text-stone-800">Product</th>
                <th className="text-left p-4 font-playfair text-stone-800">Price</th>
                <th className="text-left p-4 font-playfair text-stone-800">Rating</th>
                <th className="text-left p-4 font-playfair text-stone-800">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-stone-100">
                <td className="p-4 font-lato text-stone-700">OXO Good Grips V-Blade</td>
                <td className="p-4 font-lato text-stone-700">$34.95</td>
                <td className="p-4 font-lato text-emerald-600">4.8</td>
                <td className="p-4 font-lato text-stone-600">Best Overall</td>
              </tr>
              <tr className="border-t border-stone-100 bg-stone-50">
                <td className="p-4 font-lato text-stone-700">Borner V-Power</td>
                <td className="p-4 font-lato text-stone-700">$49.99</td>
                <td className="p-4 font-lato text-emerald-600">4.7</td>
                <td className="p-4 font-lato text-stone-600">Professional Use</td>
              </tr>
              <tr className="border-t border-stone-100">
                <td className="p-4 font-lato text-stone-700">KitchenAid Mandoline</td>
                <td className="p-4 font-lato text-stone-700">$44.99</td>
                <td className="p-4 font-lato text-emerald-600">4.6</td>
                <td className="p-4 font-lato text-stone-600">Durability</td>
              </tr>
              <tr className="border-t border-stone-100 bg-stone-50">
                <td className="p-4 font-lato text-stone-700">Mueller Austria Mandoline Pro</td>
                <td className="p-4 font-lato text-stone-700">$39.99</td>
                <td className="p-4 font-lato text-emerald-600">4.5</td>
                <td className="p-4 font-lato text-stone-600">Value / Features</td>
              </tr>
              <tr className="border-t border-stone-100">
                <td className="p-4 font-lato text-stone-700">Chef'n Veggie Chop</td>
                <td className="p-4 font-lato text-stone-700">$29.99</td>
                <td className="p-4 font-lato text-emerald-600">4.4</td>
                <td className="p-4 font-lato text-stone-600">Small Kitchens</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 bg-emerald-50 rounded-xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">Ready to Slice Like a Pro?</h3>
          <p className="font-lato text-stone-600 mb-6">A quality mandoline transforms everyday cooking. Pick one that fits your needs and start slicing!</p>
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
