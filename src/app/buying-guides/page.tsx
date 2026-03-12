import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Definitive Buying Guides",
  description: "Curated kitchen intelligence. Comprehensive buying guides and expert recommendations for chef's knives, Dutch ovens, and essential appliances.",
};

const categories = [
  {
    name: "Chef's Knives",
    description: "The most important tool in any kitchen",
    image: "/images/kitchen/4.jpg",
    products: [
      {
        name: "Miyabi Birchwood Chef's Knife",
        price: "$$$",
        rating: 4.9,
        affiliateLink: "https://amzn.to/4rPdEWZ",
        badge: "Premium Pick",
      },
      {
        name: "Victorinox Swiss Classic 8-inch",
        price: "$",
        rating: 4.7,
        affiliateLink: "https://amzn.to/4qE0Th1",
        badge: "Best Value",
      },
      {
        name: "Wüsthof Classic 8-inch",
        price: "$$",
        rating: 4.8,
        affiliateLink: "https://amzn.to/3OK10du",
      },
    ],
  },
  {
    name: "Cookware Sets",
    description: "Everything you need to start cooking",
    image: "/images/kitchen/5.jpg",
    products: [
      {
        name: "Le Creuset Enameled Dutch Oven",
        price: "$$$",
        rating: 4.9,
        affiliateLink: "https://amzn.to/3MG2mFH",
        badge: "Best Overall",
      },
      {
        name: "Lodge Enameled Dutch Oven",
        price: "$",
        rating: 4.7,
        affiliateLink: "https://www.amazon.com/s?k=Lodge+Enameled+Dutch+Oven&tag=cookinkitchen-20",
        badge: "Best Budget",
      },
      {
        name: "T-fal Ultimate Hard Anodized Set",
        price: "$$",
        rating: 4.6,
        affiliateLink: "https://www.amazon.com/s?k=T-fal+Ultimate+Hard+Anodized+Cookware+Set&tag=cookinkitchen-20",
      },
    ],
  },
  {
    name: "Small Appliances",
    description: "Power tools for your kitchen",
    image: "/images/kitchen/6.jpg",
    products: [
      {
        name: "KitchenAid Artisan Stand Mixer",
        price: "$$$",
        rating: 4.8,
        affiliateLink: "https://www.amazon.com/s?k=KitchenAid+Artisan+Stand+Mixer&tag=cookinkitchen-20",
        badge: "Best Mixer",
      },
      {
        name: "Instant Pot Duo 7-in-1",
        price: "$",
        rating: 4.7,
        affiliateLink: "https://www.amazon.com/s?k=Instant+Pot+Duo+7-in-1&tag=cookinkitchen-20",
        badge: "Best Value",
      },
      {
        name: "Ninja Foodi 9-in-1",
        price: "$$",
        rating: 4.5,
        affiliateLink: "https://www.amazon.com/s?k=Ninja+Foodi+9-in-1&tag=cookinkitchen-20",
      },
    ],
  },
  {
    name: "Essential Gadgets",
    description: "Must-have tools for every kitchen",
    image: "/images/kitchen/7.jpg",
    products: [
      {
        name: "OXO Good Grips Pop Scale",
        price: "$",
        rating: 4.8,
        affiliateLink: "https://www.amazon.com/s?k=OXO+Good+Grips+Pop+Scale&tag=cookinkitchen-20",
        badge: "Best Scale",
      },
      {
        name: "John Boos Maple Cutting Board",
        price: "$$",
        rating: 4.9,
        affiliateLink: "https://www.amazon.com/s?k=John+Boos+Maple+Cutting+Board&tag=cookinkitchen-20",
      },
      {
        name: "OXO Good Grips Cutting Board Set",
        price: "$",
        rating: 4.6,
        affiliateLink: "https://www.amazon.com/s?k=OXO+Good+Grips+Cutting+Board+Set&tag=cookinkitchen-20",
      },
    ],
  },
];

export default function BuyingGuidesPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Hero Section */}
      <section className="relative mesh-gradient py-24 overflow-hidden mb-16">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-[15vw] font-black text-white/10 select-none uppercase tracking-tighter">guide</div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
            Intelligence Reports
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-6 tracking-tighter leading-[1]">
            Curated Buying Guides
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto font-light leading-relaxed">
            Expert-tested recommendations designed for precision. Discover the highest-rated gear in every category.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Categories */}
        {categories.map((category) => (
          <section key={category.name} className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-10">
              <div className="w-full md:w-1/3">
                <div className="sticky top-24">
                  <h2 className="font-serif text-3xl font-black text-slate-900 mb-4">{category.name}</h2>
                  <p className="font-lato text-slate-600 mb-6 text-lg">{category.description}</p>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 w-full border border-stone-200">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 grid gap-6">
                {category.products.map((product, idx) => (
                  <div
                    key={idx}
                    className="glass-premium bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex-1">
                      {product.badge && (
                        <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded mb-2">
                          {product.badge}
                        </span>
                      )}
                      <h3 className="font-serif text-xl font-bold text-slate-900 leading-tight mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="font-lato text-stone-500 font-medium">Est: {product.price}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-emerald-500 font-bold text-sm">★</span>
                          <span className="text-sm font-bold text-slate-700">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-lato font-black tracking-wide hover:bg-emerald-500 transition shadow-md shadow-emerald-500/20"
                      >
                        Check Price
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-px bg-stone-200/60 mt-20"></div>
          </section>
        ))}

        {/* SEO Intelligence Guide */}
        <div className="mb-20 glass-premium bg-white p-10 md:p-16 rounded-3xl border border-stone-200 shadow-sm prose prose-stone max-w-none">
          <h2 className="font-serif text-3xl font-black text-slate-900 mb-6">How to Choose the Right Kitchen Gear in 2026</h2>
          <p className="font-lato text-lg text-slate-600 leading-relaxed mb-6">
            Building a highly functional kitchen isn't about buying the most expensive tools; it's about acquiring the <em>right</em> instruments designed for longevity, performance, and precision. Our data-driven approach to testing kitchen equipment at CookInKitchen ensures you make informed decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-10">
            <div>
              <h3 className="font-playfair text-xl font-bold text-slate-800 mb-4 border-b border-emerald-100 pb-2">1. Material Science Matters</h3>
              <p className="font-lato text-slate-600 leading-relaxed">
                When evaluating cookware and knives, pay close attention to metallurgy and material composition. High-carbon stainless steel (like VG-10 or SG2) offers unparalleled edge retention for knives, while fully-clad tri-ply structure provides the necessary thermal conductivity for professional-grade pans.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-slate-800 mb-4 border-b border-emerald-100 pb-2">2. Ergonomics & Usability</h3>
              <p className="font-lato text-slate-600 leading-relaxed">
                A tool is only as good as its handling. We rigorously assess weight distribution, handle geometry, and tactile feedback. A perfectly balanced Chef's knife reduces wrist fatigue, just as intuitive controls on an appliance reduce friction during high-pressure meal prep.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-slate-800 mb-4 border-b border-emerald-100 pb-2">3. The Cost per Use Metric</h3>
              <p className="font-lato text-slate-600 leading-relaxed">
                Applying a strict "Cost per Use" analysis often reveals that premium tools offer better long-term value. An inexpensive non-stick pan may require replacement annually, while an enameled cast iron Dutch oven or a carbon steel skillet only improves over decades of rigorous service.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-slate-800 mb-4 border-b border-emerald-100 pb-2">4. Ecosystem Compatibility</h3>
              <p className="font-lato text-slate-600 leading-relaxed">
                Consider how new acquisitions integrate into your existing workflow. An induction-compatible cookware set future-proofs your kitchen, while modular appliances (like high-end stand mixers with robust hubs) minimize countertop clutter while maximizing utility.
              </p>
            </div>
          </div>
        </div>

        {/* Intelligence Protocol CTA */}
        <div className="mt-20 bg-slate-950 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-emerald-900/30 shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/kitchen/8.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 w-full max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 mb-6 rounded-full bg-emerald-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
              Protocol Invitation
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white font-black mb-4">
              Access the Inner Circle
            </h3>
            <p className="font-lato text-emerald-100/70 mb-8 text-lg font-light">
              Subscribe to get notified when new definitive buying guides and field analyses drop. No fluff, just raw kitchen intelligence.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-lg mx-auto">
              <input
                type="email"
                placeholder="SECURE_EMAIL@DOMAIN.COM"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-bold tracking-widest outline-none focus:bg-white/20 transition text-sm"
              />
              <button type="submit" className="px-8 py-4 bg-emerald-500 text-white rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-emerald-400 transition hover:shadow-lg hover:shadow-emerald-500/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
