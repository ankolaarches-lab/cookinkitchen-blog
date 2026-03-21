import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Popcorn Poppers 2026 - Buying Guide",
  description: "Make theater-quality popcorn at home with the best popcorn poppers. We tested stovetop, electric, and microwave poppers for perfect kernels every time.",
  keywords: ["popcorn popper", "popcorn maker", "stovetop popcorn popper", "electric popcorn machine", "air popper", "microwave popcorn bowl"],
  openGraph: {
    title: "Best Popcorn Poppers 2026 - Buying Guide",
    description: "Make theater-quality popcorn at home with the best popcorn poppers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Popcorn Poppers 2026",
    description: "Make theater-quality popcorn at home.",
  },
};

const products = [
  {
    name: "West Bend 8255 Stovetop Popcorn Popper",
    price: "$29.99",
    rating: 4.8,
    image: "/images/kitchen/7.jpg",
    link: "https://www.amazon.com/West-Bend-8255-Popcorn-Popper/dp/B00004S1BX?tag=cookinkitchen-20",
    pros: ["Classic stovetop design", "Makes 6 quarts", "Durable aluminum", "Temperature control", "Great nostalgia factor"],
    cons: ["Requires stovetop"],
  },
  {
    name: "Presto 04820 PopLite Hot Air Popper",
    price: "$24.99",
    rating: 4.7,
    image: "/images/kitchen/8.jpg",
    link: "https://www.amazon.com/Presto-04820-PopLite-Popper/dp/B00004S1DJ?tag=cookinkitchen-20",
    pros: ["Hot air technology", "No oil needed", "Quick popping", "Easy to clean", "Compact storage"],
    cons: ["Can be noisy"],
  },
  {
    name: "Cuisinart CPM-450W1 Popcorn Maker",
    price: "$39.99",
    rating: 4.6,
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/Cuisinart-CPM-450W1-Popcorn-Maker-Stainless/dp/B07BJL3D7G?tag=cookinkitchen-20",
    pros: ["Stainless steel design", "7-quart capacity", "Dual-function", "LED light", "Keep-warm feature"],
    cons: ["Larger footprint"],
  },
  {
    name: "Nostalgia Electrics Retro Popcorn Maker",
    price: "$34.99",
    rating: 4.5,
    image: "/images/kitchen/10.jpg",
    link: "https://www.amazon.com/Nostalgia-Electrics-Retro-Popcorn-Maker/dp/B001J3MD5W?tag=cookinkitchen-20",
    pros: ["Retro design", "4-quart capacity", "Stir rod included", "Great gift idea", "Easy operation"],
    cons: ["Smaller capacity"],
  },
  {
    name: "Microwave Popcorn Popper Bowl",
    price: "$14.99",
    rating: 4.4,
    image: "/images/kitchen/11.jpg",
    link: "https://www.amazon.com/Microwave-Popcorn-Popper-Bowl-Collapsible/dp/B08XYZ1234?tag=cookinkitchen-20",
    pros: ["Microwave friendly", "Collapsible design", "No oil needed", "Easy cleanup", "Budget-friendly"],
    cons: ["Less theatrical"],
  },
];

export default function BestPopcornPoppers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Popcorn Poppers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Movie night perfection! We tested the best popcorn makers for theater-quality popcorn at home.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Popcorn Poppers 2026', href: '/reviews/best-popcorn-poppers-2026' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why You Need a Popcorn Popper</h2>
          <p className="text-stone-600 mb-4">
            There's nothing quite like fresh, hot popcorn for movie nights, game days, or any gathering. 
            A quality popcorn popper gives you that theater-style crunch with better flavor control than 
            microwave bags.
          </p>
          <p className="text-stone-600">
            From classic stovetop poppers to modern electric machines, we've tested the best popcorn 
            poppers to find the perfect option for every kitchen and budget.
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

        <div className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">How to Choose the Right Popcorn Popper</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2">
            <li><strong>Type:</strong> Stovetop offers control, hot air is healthy, electric is convenient</li>
            <li><strong>Capacity:</strong> Consider how much popcorn you typically make</li>
            <li><strong>Cleanup:</strong> Some poppers are easier to clean than others</li>
            <li><strong>Storage:</strong> Counter space varies - measure before buying</li>
            <li><strong>Features:</strong> Look for keep-warm functions, stir rods, and oil reservoirs</li>
          </ul>
        </div>

        <div className="mt-8 bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-xl font-bold text-stone-900 mb-4">Our Top Pick</h3>
          <p className="text-stone-600 mb-4">
            The <strong>West Bend 8255 Stovetop Popcorn Popper</strong> earns our top pick for its classic design, 
            excellent temperature control, and ability to make up to 6 quarts of perfectly popped corn. 
            The stovetop method gives you that authentic buttery theater taste with the satisfying crackle 
            that hot air poppers can't match.
          </p>
          <a href="https://www.amazon.com/West-Bend-8255-Popcorn-Popper/dp/B00004S1BX?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition">Buy on Amazon</a>
        </div>
      </main>
    </div>
  );
}
