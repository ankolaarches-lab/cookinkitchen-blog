import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Cookware Sets - 2026 Buying Guide",
  description: "We tested the best cookware sets for every budget. From ceramic to stainless steel, find your perfect cookware set.",
};

const products = [
  {
    name: "GreenPan Valencia Pro Ceramic Nonstick 11-Piece Set",
    price: "$199.99",
    rating: 4.7,
    image: "/images/kitchen/5.jpg",
    link: "https://www.amazon.com/GreenPan-Valencia-Pro-Ceramic-Nonstick/dp/B08XWQWJ3R?tag=cookinkitchen-20",
    pros: ["健康陶瓷涂层", "耐用的硬阳极氧化铝", "安全适用于金属器具", "出色的不粘性能"],
    cons: ["价格较高", "陶瓷涂层需要小心保养"],
  },
  {
    name: "All-Clad HA1 Hard-Anodized Nonstick 10-Piece Set",
    price: "$349.99",
    rating: 4.8,
    image: "/images/kitchen/7.jpg",
    link: "https://www.amazon.com/All-Clad-HA1-Hard-Anodized-10-Piece/dp/B08J5J3TRL?tag=cookinkitchen-20",
    pros: ["高级硬阳极氧化铝", "金属器具安全", "终身保修", "完美热分布"],
    cons: ["非常昂贵", "重量较重"],
  },
  {
    name: "Calphalon Premier Hard-Anodized 10-Piece Set",
    price: "$279.99",
    rating: 4.6,
    image: "/images/kitchen/6.jpg",
    link: "https://www.amazon.com/Calphalon-Premier-Hard-Anodized-10-Piece/dp/B07GVRFR4B?tag=cookinkitchen-20",
    pros: ["三层不粘涂层", "耐用硬质铝结构", "现代设计", "出色的烹饪性能"],
    cons: ["手洗更佳", "价格偏高"],
  },
  {
    name: "Tramontina Tri-Ply Clad 10-Piece Stainless Steel Set",
    price: "$179.99",
    rating: 4.5,
    image: "/images/kitchen/8.jpg",
    link: "https://www.amazon.com/Tramontina-Tri-Ply-Clad-10-Piece-Stainless/dp/B00QKWMCG2?tag=cookinkitchen-20",
    pros: ["优质三层结构", "兼容所有炉灶类型", "可放入洗碗机", "优秀价值"],
    cons: ["不粘性能不如涂层锅具", "需要调味"],
  },
  {
    name: "Lodge Pre-Seasoned Cast Iron 3-Piece Skillet Set",
    price: "$54.99",
    rating: 4.8,
    image: "/images/kitchen/4.jpg",
    link: "https://www.amazon.com/Lodge-Pre-Seasoned-Cast-Iron-3-Piece/dp/B0015HRT5O?tag=cookinkitchen-20",
    pros: ["超耐用铸铁", "自然不粘表面", "兼容所有炉灶和烤箱", "绝佳价值"],
    cons: ["需要保养", "重量很重"],
  },
];

export default function BestCookwareSets2026() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Cookware</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 20, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="/images/kitchen/8.jpg" 
              alt="Best Cookware Sets 2026" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Cookware Sets 2026: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested and reviewed the top cookware sets to help you find the perfect balance of performance, durability, and value for your kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <p className="mb-4 text-stone-600">A great cookware set should include: even heat distribution, comfortable handles, compatibility with your stovetop, and durability that lasts for years.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: GreenPan Valencia Pro</h2>
            <p className="mb-4 text-stone-600">The GreenPan Valencia Pro offers the best overall value with its healthy ceramic coating, excellent nonstick performance, and durable hard-anodized construction at a reasonable price point.</p>
          </div>
        </article>

        <section className="space-y-8 mt-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 relative flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
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
