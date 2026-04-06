import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Air Fryer Toaster Ovens 2026 - Complete Buying Guide",
  description: "Maximize counter space with a combo air fryer and toaster oven. We tested the best air fryer toaster ovens for crispy results.",
  keywords: ["air fryer toaster oven", "combo appliance", "countertop oven", "air fry", "best 2026"],
  openGraph: {
    title: "Best Air Fryer Toaster Ovens 2026 - Complete Buying Guide",
    description: "Maximize counter space with a combo air fryer and toaster oven. We tested the best air fryer toaster ovens for crispy results.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Air Fryer Toaster Ovens 2026",
    description: "Maximize counter space with a combo air fryer and toaster oven.",
  },
};

const products = [
  {
    name: "Ninja Foodi XL Pro Air Fry Oven",
    price: "$399.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Ninja+Foodi+XL+Pro+Air+Fry+Oven&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    image: "/images/kitchen/1.jpg",
    pros: ["10-in-1 versatility", "Holds 10 lbs chicken", "Dual heating technology", "Large capacity"],
    cons: ["Premium price", "Large footprint"],
  },
  {
    name: "Breville Smart Oven Air Fryer Pro",
    price: "$399.95",
    rating: 4.8,
    link: `https://www.amazon.com/s?k=Breville+Smart+Oven+Air+Fryer+Pro&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    image: "/images/kitchen/2.jpg",
    pros: ["Superior build quality", "Advanced convection", "Multiple functions", "Perfect browning"],
    cons: ["Expensive", "Heavy"],
  },
  {
    name: "KitchenAid Dual Convection Countertop Oven",
    price: "$249.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=KitchenAid+Dual+Convection+Countertop+Oven&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    image: "/images/kitchen/3.jpg",
    pros: ["Dual convection fans", "Affordable premium", "Good capacity", "Easy controls"],
    cons: ["Limited presets"],
  },
  {
    name: "Ninja 10-in-1 Air Fryer Toaster Oven",
    price: "$349.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Ninja+10-in-1+Air+Fryer+Toaster+Oven&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    image: "/images/kitchen/4.jpg",
    pros: ["10 cooking functions", "Digital display", "Air fry basket included", "Toast, bake, dehydrate"],
    cons: ["Takes counter space"],
  },
  {
    name: " VAL CUCINA 6-in-1 Air Fryer Toaster Oven",
    price: "$119.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=VAL+CUCINA+6-in-1+Air+Fryer+Toaster+Oven&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    image: "/images/kitchen/5.jpg",
    pros: ["Budget-friendly", "Compact size", "6 functions", "Good for small kitchens"],
    cons: ["Smaller capacity", "Basic features"],
  },
];

export default function BestAirFryerToasterOvens() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Air Fryer Toaster Ovens 2026</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Two appliances in one. We tested the best air fryer toaster oven combos for versatile cooking.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Air Fryer Toaster Ovens 2026', href: '/reviews/best-air-fryer-toaster-ovens' }
          ]} />
        </div>
        
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Choose an Air Fryer Toaster Oven?</h2>
          <p className="text-stone-600 mb-4">
            Air fryer toaster ovens combine the functionality of both appliances, saving counter space while delivering excellent Results. 
            These versatile units can air fry, toast, bake, broil, and more — perfect for smaller kitchens or those who want to minimize appliances.
          </p>
          <ul className="text-stone-600 space-y-2">
            <li>✓ Save counter space with 2-in-1 design</li>
            <li>✓ Faster air frying than traditional ovens</li>
            <li>✓Toast, bake, roast, and dehydrate</li>
            <li>✓Crispy results with less oil</li>
          </ul>
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-stone-900">Our Top Picks</h2>
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image src={product.image} alt={product.name} width={180} height={180} className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900">{product.name}</h3>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-emerald-700 mb-1">Pros</p>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => <li key={i}>✓ {pro}</li>)}
                      </ul>
                    </div>
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition">Check Price on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </section>
        
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">How We Tested</h2>
          <p className="text-stone-600 mb-4">
            We tested each air fryer toaster oven by cooking a variety of foods including fries, chicken wings, toast, and baked goods. 
            We evaluated each model on cooking performance, temperature accuracy, ease of use, cleaning, and build quality.
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/reviews" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to All Reviews
          </Link>
        </div>
      </main>
    </div>
  );
}