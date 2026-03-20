import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Kitchen Organizers 2026 - Buying Guide",
  description: "Drawer organizers, cabinet systems, pantry bins, and more. We tested the best kitchen organizers to maximize your storage space.",
};

const products = [
  // Lazy Susans
  {
    name: "YouCopia StoraLazzy Cabinet Organizer",
    price: "$29.99",
    rating: 4.7,
    image: "/images/kitchen/2.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Cabinet Organizer",
    pros: ["Expands cabinet space", "Smooth 360° turn", "Fits most cabinets", "Easy installation"],
    cons: ["Limited weight capacity"],
  },
  {
    name: "LAMU 2-Tier Lazy Susan Turntable",
    price: "$24.99",
    rating: 4.6,
    image: "/images/kitchen/3.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Cabinet Organizer",
    pros: ["Doubles vertical space", "Clear design shows contents", "Stackable", "Great for spices"],
    cons: ["Requires 9.25\" cabinet depth"],
  },
  // Drawer Organizers
  {
    name: "Pipishell Bamboo Expandable Silverware Tray",
    price: "$19.99",
    rating: 4.5,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Drawer Organizer",
    pros: ["Natural bamboo material", "Expandable design", "Fits most drawer sizes", "Eco-friendly"],
    cons: ["Fixed slots not adjustable"],
  },
  {
    name: "Homecor Expandable Cutlery Drawer Organizer",
    price: "$24.99",
    rating: 4.6,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Drawer Organizer",
    pros: ["Removable knife blocks", "Expandable 13-22 inches", "7 compartments", "Non-slip base"],
    cons: ["Takes up drawer space"],
  },
  // Pantry Organizers
  {
    name: "Vtopmart Clear Food Storage Bins (4-Pack)",
    price: "$27.99",
    rating: 4.7,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Pantry Organizer",
    pros: ["Clear see-through design", "Stackable", "Handles for easy pulling", "4 sizes included"],
    cons: ["Not as sturdy as higher-end"],
  },
  {
    name: "madesmart Classic Organizer",
    price: "$14.99",
    rating: 4.5,
    image: "/images/kitchen/7.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Pantry Organizer",
    pros: ["Removable dividers", "Versatile use", "FDA approved", "Stackable"],
    cons: ["Smaller than expected"],
  },
  // Countertop Organizers
  {
    name: "KitchenAid 15-Slot Knife Block",
    price: "$39.99",
    rating: 4.6,
    image: "/images/kitchen/8.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Countertop Organizer",
    pros: ["Holds 15 knives", "Sturdy construction", "Universal fit", "Classic design"],
    cons: ["Takes counter space"],
  },
  {
    name: "Joseph Joseph Easy-Press Paper Towel Holder",
    price: "$24.99",
    rating: 4.4,
    image: "/images/kitchen/9.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Countertop Organizer",
    pros: ["One-handed dispensing", "Weighted base", "Holds most paper roll sizes", "Sleek design"],
    cons: ["Base can slide on smooth counters"],
  },
  // Spice Racks
  {
    name: "SpaceAid Wall-Mounted Spice Rack",
    price: "$34.99",
    rating: 4.5,
    image: "/images/kitchen/10.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Spice Rack",
    pros: ["Wall or door mount", "Holds 12 jars", "Hardware included", "Modern look"],
    cons: ["Jars not included"],
  },
  {
    name: "Lynk Professional Pull-Out Spice Rack",
    price: "$59.99",
    rating: 4.7,
    image: "/images/kitchen/11.jpg",
    link: "https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20",
    category: "Spice Rack",
    pros: ["Mounts inside cabinet", "Pull-out drawers", "Holds 20+ jars", "Commercial quality"],
    cons: ["Premium price", "Requires cabinet modification"],
  },
];

export default function BestOrganizers2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Kitchen Organizers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">Maximize your cabinet, drawer, and counter space with these tested organizers.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Kitchen Organizers 2026', href: '/reviews/best-kitchen-organizers' }
          ]} />
        </div>
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">A well-organized kitchen starts with the right storage solutions. Whether you're dealing with a cramped cabinet, messy drawers, or a cluttered countertop, the right organizer can transform your space. We've tested these products for durability, functionality, and ease of use to bring you the best options for every area of your kitchen.</p>
        </section>
        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-lg flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-1 rounded">{product.category}</span>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-bold text-stone-700 mb-2">Pros</p>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-700 mb-2">Cons</p>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.cons.map((con, i) => (<li key={i}>✗ {con}</li>))}
                      </ul>
                    </div>
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4"><strong>YouCopia StoraLazzy</strong> remains our top pick for cabinet organization. It doubles your storage space with smooth 360° rotation, making items in the back accessible without digging. The sturdy construction and universal fit make it a winner for any kitchen.</p>
          <a href="https://www.amazon.com/s?k=best+kitchen+organizers&tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Buy on Amazon</a>
        </section>
        
      </main>
    </div>
  );
}
