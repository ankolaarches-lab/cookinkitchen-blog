import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Chef's Knives",
    description: "The most important tool in any kitchen",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop",
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
        affiliateLink: "#",
        badge: "Best Budget",
      },
      {
        name: "T-fal Ultimate Hard Anodized Set",
        price: "$$",
        rating: 4.6,
        affiliateLink: "#",
      },
    ],
  },
  {
    name: "Small Appliances",
    description: "Power tools for your kitchen",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
    products: [
      {
        name: "KitchenAid Artisan Stand Mixer",
        price: "$$$",
        rating: 4.8,
        affiliateLink: "#",
        badge: "Best Mixer",
      },
      {
        name: "Instant Pot Duo 7-in-1",
        price: "$",
        rating: 4.7,
        affiliateLink: "#",
        badge: "Best Value",
      },
      {
        name: "Ninja Foodi 9-in-1",
        price: "$$",
        rating: 4.5,
        affiliateLink: "#",
      },
    ],
  },
  {
    name: "Essential Gadgets",
    description: "Must-have tools for every kitchen",
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
    products: [
      {
        name: "OXO Good Grips Pop Scale",
        price: "$",
        rating: 4.8,
        affiliateLink: "#",
        badge: "Best Scale",
      },
      {
        name: "John Boos Maple Cutting Board",
        price: "$$",
        rating: 4.9,
        affiliateLink: "#",
      },
      {
        name: "OXO Good Grips Cutting Board Set",
        price: "$",
        rating: 4.6,
        affiliateLink: "#",
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

        {/* Intelligence Protocol CTA */}
        <div className="mt-20 bg-slate-950 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-emerald-900/30 shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=900&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
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
