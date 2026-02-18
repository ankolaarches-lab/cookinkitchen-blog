import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitchen Knife Set - Expert Tested 2026",
  description: "From budget to premium, we tested the best kitchen knife sets for home cooks. Find the perfect combination for your cooking needs.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Knives</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-rose-50 rounded-2xl p-10 text-center mb-8 shadow-inner">
            <div className="text-6xl mb-4">🔪</div>
            <div className="text-sm text-stone-500 font-lato">Tested & Recommended</div>
          </div>
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Kitchen Knife Sets: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested knife sets from budget to premium to find the best combinations for every kitchen and budget.</p>
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <p className="mb-4 text-stone-600">A good knife set should include: chef's knife (daily workhorse), paring knife (precise work), and serrated knife (bread & tomatoes). Avoid sets with unnecessary knives.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Overall: Wüsthof Classic 7-Piece</h2>
            <p className="mb-4 text-stone-600">German-engineered precision. The Wüsthof Classic is the standard by which other knives are measured. Full tang, comfortable handles, and incredibly sharp.</p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">German stainless steel holds edge well</li>
              <li className="mb-2">Full tang construction</li>
              <li className="mb-2">Precision Edge technology</li>
              <li className="mb-2">Lifetime warranty</li>
            </ul>
            <p className="mb-4"><a href="https://www.amazon.com/Wusthof-Classic-7-Piece-Knife/dp/B000S6OZOK?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">Check Price on Amazon →</a></p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Value: Victorinox Swiss Classic 6-Piece</h2>
            <p className="mb-4 text-stone-600">Victorinox delivers Swiss precision at an affordable price. These knives are sharp out of the box and easy to sharpen.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Premium: Miyabi Birchwood 7-Piece</h2>
            <p className="mb-4 text-stone-600">Japanese craftsmanship meets modern tech. The Miyabi combines beautiful Damascus patterns with exceptional sharpness.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Verdict</h2>
            <p className="mb-4 text-stone-600">For most home cooks, the <strong>Victorinox Swiss Classic</strong> offers the best value. Upgrade to <strong>Wüsthof</strong> for professional-grade performance.</p>
          </div>
          <div className="mt-12 bg-stone-100 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-lg text-stone-800 mb-3">Where to Buy</h3>
            <p className="text-stone-500 text-sm mb-4">We may earn a commission when you buy through our links.</p>
            <a href="https://www.amazon.com/Wusthof-Classic-7-Piece-Knife/dp/B000S6OZOK?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">Check Price on Amazon</a>
          </div>
        </article>
      </div>
    </div>
  );
}
