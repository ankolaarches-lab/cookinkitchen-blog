import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Knife Blocks & Storage - 2026 Buying Guide",
  description: "Keep your knives safe and organized. We tested the best knife blocks, magnetic strips, and storage solutions.",
};

const products = [
  {
    name: "Wüsthof 7-Slot Knife Block",
    price: "$39.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=W%C3%BCsthof+7+Slot+Knife+Block?tag=cookinkitchen-20",
    pros: ["Solid beech wood", "Fits most knife sizes", "Keeps blades sharp", "Durable"],
    cons: ["Takes counter space"],
  },
  {
    name: "KitchenAid Knife Block Set",
    price: "$79.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556910110-a5a66af3b497?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=KitchenAid+4+Slot+Knife+Block?tag=cookinkitchen-20",
    pros: ["Includes steak knives", "Rotating base", "Sleek design", "Giftable"],
    cons: ["Smaller slots"],
  },
  {
    name: "Chef'sPath Magnetic Knife Strip (20 inch)",
    price: "$24.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Ch%C2%B4fsPath+Magnetic+Knife+Strip?tag=cookinkitchen-20",
    pros: ["Saves counter space", "Strong magnet", "Easy installation", "Fits any knife"],
    cons: ["Wall-mounted"],
  },
  {
    name: "Joseph Joseph Expandable Knife Drawer",
    price: "$29.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=Joseph+Jos+Select+Drawer+Organizer?tag=cookinkitchen-20",
    pros: ["Fits in drawer", "Expandable", "Non-slip", "Space-saving"],
    cons: ["Limited to drawer space"],
  },
  {
    name: "McCook 15-Piece Knife Set with Block",
    price: "$59.99",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/s?k=McCook+Knife+Block+Set?tag=cookinkitchen-20",
    pros: ["Complete set", "Great value", "Sharpener included", "Modern look"],
    cons: ["Lower quality than premium"],
  },
];

export default function BestKnifeBlocks() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Knife Blocks & Storage
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Keep your knives organized, accessible, and safely stored. From counter blocks to magnetic strips.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Proper knife storage protects your investment and keeps your blades sharper longer. 
            We tested the top knife blocks, magnetic strips, and drawer organizers to find the best options 
            for every kitchen.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="text-stone-600 text-sm mb-4 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i}>✓ {pro}</li>
                    ))}
                  </ul>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            The <strong>Wüsthof 7-Slot Knife Block</strong> is our top pick for most kitchens. 
            The quality beech wood construction protects blades, and the slots fit most knife sizes. 
            It's a classic that will last for decades.
          </p>
          <a
            href="https://www.amazon.com/s?k=W%C3%BCsthof+7+Slot+Knife+Block?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Buy on Amazon
          </a>
        </section>

        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-emerald-600 font-medium hover:underline">
            ← Back to All Reviews
          </Link>
        </div>
      
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/reviews/best-knife-sharpener" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Best Knife Sharpeners</h3>
              <p className="text-sm text-stone-600 mt-1">Keep knives sharp</p>
            </a>
            <a href="/reviews/best-knife-storage-2026" className="block bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition">
              <h3 className="font-bold text-stone-900">Best Knife Storage</h3>
              <p className="text-sm text-stone-600 mt-1">Protect your knives</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
