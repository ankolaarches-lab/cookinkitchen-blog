import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Electric Griddles - 2026 Buying Guide",
  description: "Best Electric Griddles 2026 - Complete guide",
  openGraph: {
    title: "Best Electric Griddles 2026",
    description: "Best Electric Griddles 2026 - Complete guide for home cooks",
    type: "article",
    images: ["/images/reviews/hero-appliances.png"],
  },
};

const products = [
  {
    name: "Presto 07061 22-Inch Electric Griddle",
    price: "$49.99",
    rating: 4.7,
    link: `https://www.amazon.com/s?k=Presto+07061+22+Inch+Electric+Griddle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["大烹饪面积", "可调温度控制", "不粘表面", "易于清洁"],
    cons: ["没有温度显示", "电源线略短"],
  },
  {
    name: "Hamilton Beach 38518 Electric Griddle",
    price: "$44.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Hamilton+Beach+38518+Electric+Griddle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["防泼溅护罩", "可拆卸温度控制", "不粘涂层", "现代设计"],
    cons: ["烹饪面积较小", "温度控制不够精确"],
  },
  {
    name: "Cuisinart GR-4N 5-In-1 Griddler",
    price: "$99.99",
    rating: 4.6,
    link: `https://www.amazon.com/s?k=Cuisinart+GR+4N+5+In+1+Griddler&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["多功能（烤、压、烤三明治）", "可拆卸烤盘", "数字定时器", "垂直存放"],
    cons: ["价格较高", "烹饪面积有限"],
  },
  {
    name: "Zojirushi NeRice-Hard Anodized Electric Griddle",
    price: "$89.99",
    rating: 4.4,
    link: `https://www.amazon.com/s?k=Zojirushi+NeRice+Hard+Anodized+Electric+Griddle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["优质硬阳极氧化表面", "精确温度控制", "美观设计", "耐用"],
    cons: ["烹饪面积较小", "价格偏高"],
  },
  {
    name: "Techef Smokeless Indoor Grill/Griddle",
    price: "$69.99",
    rating: 4.5,
    link: `https://www.amazon.com/s?k=Techef+Smokeless+Indoor+Grill+Griddle&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`,
    pros: ["无烟设计", "可调温度", "可拆卸烤盘", "适合室内使用"],
    cons: ["需要定期清洁油盘", "配件需要单独购买"],
  },
];

export default function BestElectricGriddles2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Small Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.5</span>
            <span className="font-lato text-stone-400 text-sm">Mar 20, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/reviews/electric-griddle.jpg" 
              alt="Best Electric Griddles 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Electric Griddles 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">From breakfast pancakes to perfect burgers, we tested the best electric griddles to find which ones deliver consistent results every time.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <p className="mb-4 text-stone-600">The best electric griddle should have: even heat distribution, adjustable temperature control, nonstick surface, and easy cleanup. Consider the cooking area based on your household size.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Presto 22-Inch Electric Griddle</h2>
            <p className="mb-4 text-stone-600">The Presto offers the best combination of large cooking surface, reliable temperature control, and excellent nonstick performance at an affordable price.</p>
          </div>
        </article>

        <section className="space-y-8 mt-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div>
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
                  <ul className="mb-4 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="text-stone-600 text-sm font-lato">✓ {pro}</li>
                    ))}
                  </ul>
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
