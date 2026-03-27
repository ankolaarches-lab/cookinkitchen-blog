import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Bench Scrapers 2026 - Dough Scraper & Pastry Cutter Guide",
  description: "Speed up your baking prep with the best bench scrapers. We tested top-rated dough scrapers and pastry cutters for every kitchen need.",
  keywords: ["bench scraper", "dough scraper", "pastry cutter", "baking tools", "kitchen utensils"],
  openGraph: {
    title: "Best Bench Scrapers 2026 - Dough Scraper & Pastry Cutter Guide",
    description: "Speed up your baking prep with the best bench scrapers. We tested top-rated dough scrapers and pastry cutters for every kitchen need.",
    type: "article",
    url: "https://cookinkitchen.online/reviews/best-bench-scrapers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bench Scrapers 2026 - Dough Scraper & Pastry Cutter Guide",
    description: "Speed up your baking prep with the best bench scrapers. We tested top-rated dough scrapers and pastry cutters for every kitchen need.",
  },
};

const products = [
  {
    name: "OXO Good Grips Bench Scraper",
    price: "$9.99",
    rating: 4.8,
    reviews: "18,000+",
    link: "https://www.amazon.com/OXO-Good-Grips-Bench-Scraper/dp/B000VLRUR8?tag=cookinkitchen-20",
    image: "/images/kitchen/1.jpg",
    pros: ["Measurement markings", "Non-slip grip", "Dishwasher safe", "Versatile"],
    cons: ["Plastic not metal"],
  },
  {
    name: "Spring Chef Dough Scraper",
    price: "$12.99",
    rating: 4.7,
    reviews: "8,000+",
    link: "https://www.amazon.com/Spring-Chef-Dough-Scraper-Stainless/dp/B07YLF7XR6?tag=cookinkitchen-20",
    image: "/images/kitchen/2.jpg",
    pros: ["Stainless steel blade", "Comfortable handle", "Sharp edge", "Durable"],
    cons: ["Hand wash recommended"],
  },
  {
    name: "Lamson Professional Dough Scraper",
    price: "$24.95",
    rating: 4.9,
    reviews: "2,500+",
    link: "https://www.amazon.com/Lamson-Professional-Dough-Scraper-Walnut/dp/B01N5EZT3G?tag=cookinkitchen-20",
    image: "/images/kitchen/3.jpg",
    pros: ["Walnut handle", "American stainless steel", "Lifetime warranty", "Professional quality"],
    cons: ["Premium price"],
  },
  {
    name: "Di Oro Bench Scraper",
    price: "$14.99",
    rating: 4.6,
    reviews: "5,000+",
    link: "https://www.amazon.com/Di-Oro-Stainless-Bench-Scraper/dp/B072C4RK2L?tag=cookinkitchen-20",
    image: "/images/kitchen/4.jpg",
    pros: ["Razor-sharp edge", "Mirror finish", "Comfort grip", "Affordable"],
    cons: ["May dull over time"],
  },
  {
    name: "Rachael Ray Non-Stick Bench Scraper",
    price: "$7.99",
    rating: 4.5,
    reviews: "3,500+",
    link: "https://www.amazon.com/Rachael-Ray-Non-Stick-Bench-Scraper/dp/B0041OS5X4?tag=cookinkitchen-20",
    image: "/images/kitchen/5.jpg",
    pros: ["Non-stick surface", "Dishwasher safe", "Budget-friendly", "Colorful"],
    cons: ["Not as durable"],
  },
];

export default function BestBenchScrapers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Bench Scrapers 2026</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">The essential baking tool for scraping, cutting, and transferring dough with ease.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Breadcrumbs items={[
            { label: 'Intelligence Hub', href: '/' },
            { label: 'Reviews', href: '/reviews' },
            { label: 'Best Bench Scrapers 2026', href: '/reviews/best-bench-scrapers' }
          ]} />
        </div>
        
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            A bench scraper is one of the most underrated tools in any baker's arsenal. Whether you're dividing dough, scraping flour off your counter, or transferring chopped vegetables, the right bench scraper makes cleanup faster and more efficient. After testing dozens of models, we've found the best options for every budget and need.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-stone-100 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-stone-600">{product.rating}/5</span>
                    <span className="text-stone-400 text-sm">({product.reviews} reviews)</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-emerald-700 mb-1">Pros:</p>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => (<li key={i}>✓ {pro}</li>))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-700 mb-1">Cons:</p>
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

        <section className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            <strong>OXO Good Grips Bench Scraper</strong> is our 2026 winner. With over 18,000 Amazon reviews and a 4.8 rating, it's proven its worth in countless kitchens. The measurement markings are genius for portioning dough, the non-slip grip stays comfortable during extended use, and at under $10, it's an incredible value.
          </p>
          <p className="text-stone-700 mb-4">
            If you want professional-grade quality, the <strong>Lamson Professional Dough Scraper</strong> with its walnut handle and lifetime warranty is worth the investment.
          </p>
          <a href="https://www.amazon.com/OXO-Good-Grips-Bench-Scraper/dp/B000VLRUR8?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition">Buy on Amazon</a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/reviews/best-rolling-pins" className="block bg-white p-4 rounded-xl border border-stone-200 hover:border-amber-300 transition">
              <h3 className="font-semibold text-stone-900">Best Rolling Pins</h3>
              <p className="text-sm text-stone-600">Perfect dough partners</p>
            </Link>
            <Link href="/reviews/best-mixing-bowls" className="block bg-white p-4 rounded-xl border border-stone-200 hover:border-amber-300 transition">
              <h3 className="font-semibold text-stone-900">Best Mixing Bowls</h3>
              <p className="text-sm text-stone-600">For all your baking needs</p>
            </Link>
            <Link href="/reviews/best-baking-sheets" className="block bg-white p-4 rounded-xl border border-stone-200 hover:border-amber-300 transition">
              <h3 className="font-semibold text-stone-900">Best Baking Sheets</h3>
              <p className="text-sm text-stone-600">Even heat distribution</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}