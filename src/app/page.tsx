import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import RefinedCard from "@/components/RefinedCard";

export const metadata: Metadata = {
  title: "Home",
  description: "Access elite culinary intelligence. Expert reviews on chef knives, dutch ovens, and professional kitchen gear.",
};

const featuredProducts = [
  {
    name: "Victorinox Chef's Knife",
    price: "$39.99",
    rating: 4.8,
    image: "/images/chefs-knife.jpg",
    slug: "best-chef-knives-home-cooks",
    badge: "Best Seller",
  },
  {
    name: "Lodge Dutch Oven",
    price: "$59.99",
    rating: 4.9,
    image: "/images/dutch-oven.png",
    slug: "best-dutch-ovens",
    badge: "Best Value",
  },
  {
    name: "KitchenAid Stand Mixer",
    price: "$449.99",
    rating: 4.8,
    image: "/images/stand-mixer.png",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    badge: "Editor's Choice",
  },
];

const latestReviews = [
  {
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
    slug: "best-chef-knives-home-cooks",
    category: "Knives",
    rating: 4.8,
    image: "/images/chefs-knife.jpg",
  },
  {
    title: "Dutch Oven Comparison",
    excerpt: "Le Creuset vs Lodge vs AmazonBasics — which is worth your money?",
    slug: "best-dutch-ovens",
    category: "Cookware",
    rating: 4.9,
    image: "/images/dutch-oven.png",
  },
  {
    title: "Stand Mixer Showdown",
    excerpt: "KitchenAid vs Cuisinart — we baked 50 batches to find the winner.",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    category: "Appliances",
    rating: 4.7,
    image: "/images/stand-mixer.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mesh-gradient py-32 md:py-48 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-[20vw] font-black text-white/10 select-none uppercase tracking-tighter">chef</div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
              Intelligence Briefing // 2026 Edition
            </span>
          </div>

          <h1 className="font-serif font-black text-5xl md:text-8xl text-white mb-8 tracking-tighter leading-[0.9]">
            The Future of <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Kitchen Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Independent, data-driven reviews for the modern culinary enthusiast.
            We analyze performance, durability, and value so you don't have to.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/reviews"
              className="px-10 py-5 bg-emerald-500 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105"
            >
              Access Intelligence
            </Link>
            <Link
              href="#featured"
              className="px-10 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Top Rated Gear
            </Link>
          </div>
        </div>

        {/* Floating Stat Ticker */}
        <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/10 py-6">
          <div className="max-w-6xl mx-auto px-6 flex justify-around items-center opacity-60">
            {[
              { label: "Reports", value: "450+" },
              { label: "Accuracy", value: "99.2%" },
              { label: "Updated", value: "Live" },
              { label: "Expertise", value: "Elite" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-white font-black text-xl uppercase tracking-tighter">{stat.value}</div>
                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Intelligence - Grid */}
      <section id="featured" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-4 block">Selected Personnel Picks</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Top Rated Culinary Instruments
              </h2>
            </div>
            <Link href="/reviews" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition">
              Explore Full Catalog
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <RefinedCard
                key={product.name}
                title={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                slug={product.slug}
                badge={product.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/kitchen-prep.jpg')] bg-cover bg-fixed grayscale"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-black mb-10 leading-tight">
            Independent. Honest. <br />
            <span className="text-emerald-400 italic">Absolute.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
            We've spent thousands of hours in the test kitchen so you don't have to.
            No sponsored fluff. No biased takes. Just pure, unadulterated kitchen intelligence
            designed for those who take their craft seriously.
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>
      </section>

      {/* Latest Analysis Feed */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-4 block">Intelligence Reports</span>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-gray-900">
              Latest Field Analyses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {latestReviews.map((review) => (
              <RefinedCard
                key={review.slug}
                title={review.title}
                excerpt={review.excerpt}
                image={review.image}
                category={review.category}
                rating={review.rating}
                slug={review.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Reviews Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-black text-stone-800 mb-4">Popular Reviews</h2>
          <p className="text-stone-600 mb-10">Data-driven analysis of the best kitchen tools.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/reviews/best-dutch-ovens" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <Image src="/images/dutch-oven.png" alt="Best Dutch Ovens" width={400} height={192} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-emerald-600 uppercase">Cookware</span>
                <h3 className="font-bold text-xl text-stone-800 mt-2 group-hover:text-emerald-600 transition">Best Dutch Ovens</h3>
                <p className="text-stone-500 text-sm mt-2">Le Creuset vs Lodge vs more</p>
              </div>
            </a>
            
            <a href="/reviews/best-air-fryer-2026" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <Image src="/images/air-fryer.jpg" alt="Best Air Fryers 2026" width={400} height={192} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-emerald-600 uppercase">Appliances</span>
                <h3 className="font-bold text-xl text-stone-800 mt-2 group-hover:text-emerald-600 transition">Best Air Fryers 2026</h3>
                <p className="text-stone-500 text-sm mt-2">Ninja vs Instant Pot vs COSORI</p>
              </div>
            </a>
            
            <a href="/reviews/best-chef-knives-home-cooks" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <Image src="/images/chefs-knife.jpg" alt="Best Chef's Knives" width={400} height={192} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-emerald-600 uppercase">Knives</span>
                <h3 className="font-bold text-xl text-stone-800 mt-2 group-hover:text-emerald-600 transition">Best Chef's Knives</h3>
                <p className="text-stone-500 text-sm mt-2">Victorinox vs Wüsthof vs MAC</p>
              </div>
            </a>
          </div>
          
          <div className="mt-10 text-center">
            <a href="/reviews" className="inline-block bg-stone-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-stone-900 transition">View All Reviews →</a>
          </div>
        </div>
      </section>

      {/* Intelligence Protocol (CTA) */}
      <section className="py-32 bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-8 leading-tight">
              Stay Ahead of the Protocol.
            </h2>
            <p className="text-xl text-emerald-100 mb-10 font-light">
              Get weekly intelligence briefings on the latest gear, techniques, and data-driven deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="SECURE_EMAIL@DOMAIN.COM"
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 font-bold tracking-widest outline-none focus:bg-white/20 transition"
              />
              <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-black transition">
                Subscribe
              </button>
            </form>
          </div>
          <div className="glass-premium p-12 rounded-3xl border-emerald-400/30">
            <h3 className="font-serif text-2xl font-bold mb-6">Analytic Summary</h3>
            <ul className="space-y-6">
              {[
                "15+ New Reports Weekly",
                "Data-Driven Price Tracking",
                "Exclusive Tool Deep-Dives",
                "Community Intelligence Access"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 group">
                  <span className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-200 group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-emerald-100 font-bold tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
