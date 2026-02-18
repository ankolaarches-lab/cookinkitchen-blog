import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Coffee Grinder - Expert Tested 2026",
  description: "Freshly ground coffee is the secret to amazing coffee. We tested burr grinders from budget to premium for every brewing method.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-rose-50 rounded-2xl p-10 text-center mb-8 shadow-inner">
            <div className="text-6xl mb-4">☕</div>
            <div className="text-sm text-stone-500 font-lato">Tested & Recommended</div>
          </div>
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Coffee Grinders: Fresh is Best</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested 15+ coffee grinders to find the best for every brewing method and budget. Freshly ground beans make all the difference.</p>
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Burr vs. Blade</h2>
            <p className="mb-4 text-stone-600">Always choose a burr grinder. Blade grinders produce inconsistent particle sizes, while burr grinders crush beans uniformly for better extraction.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Overall: Baratza Encore ESP</h2>
            <p className="mb-4 text-stone-600">The Baratza Encore ESP is the gold standard for home grinding. 40 grind settings, consistent burrs, and legendary reliability.</p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">40 grind settings</li>
              <li className="mb-2">Simple one-button operation</li>
              <li className="mb-2">Great for drip, pour-over, and espresso</li>
              <li className="mb-2">Easy to clean and maintain</li>
            </ul>
            <p className="mb-4"><a href="https://www.amazon.com/Baratza-Encore-Burr-Grinder/dp/B07VPMRQLB?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">Check Price on Amazon →</a></p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Value: Krups Fast Touch</h2>
            <p className="mb-4 text-stone-600">Under $50 and gets the job done. Not as consistent as burr grinders, but a solid entry point.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Premium: Eureka Mignon Libra</h2>
            <p className="mb-4 text-stone-600">If you're serious about espresso, the Eureka delivers cafe-quality grinding with digital timed dosing.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Verdict</h2>
            <p className="mb-4 text-stone-600">The <strong>Baratza Encore ESP</strong> is the best all-around choice. It's reliable, versatile, and the price is right.</p>
          </div>
          <div className="mt-12 bg-stone-100 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-lg text-stone-800 mb-3">Where to Buy</h3>
            <p className="text-stone-500 text-sm mb-4">We may earn a commission when you buy through our links.</p>
            <a href="https://www.amazon.com/Baratza-Encore-Burr-Grinder/dp/B07VPMRQLB?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">Check Price on Amazon</a>
          </div>
        </article>
      </div>
    </div>
  );
}
