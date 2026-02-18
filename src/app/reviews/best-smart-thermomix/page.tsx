import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Smart Thermomix - Expert Tested 2026",
  description: "The Thermomix vs. alternatives. We tested the best smart kitchen robots for automated cooking, blending, and meal prep.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Appliances</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.5</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-rose-50 rounded-2xl p-10 text-center mb-8 shadow-inner">
            <div className="text-6xl mb-4">🤖</div>
            <div className="text-sm text-stone-500 font-lato">Tested & Recommended</div>
          </div>
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Smart Thermomix & Kitchen Robots</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested the top smart kitchen assistants to find the best for automated cooking, from Thermomix to Ninja Foodi.</p>
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What is a Thermomix?</h2>
            <p className="mb-4 text-stone-600">A Thermomix is an all-in-one kitchen robot that chops, blends, steams, cooks, and kneads. It guides you through recipes with built-in instructions.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Thermomix TM6</h2>
            <p className="mb-4 text-stone-600">The Thermomix TM6 is the gold standard. 12 functions in one machine, guided cooking, and over 100,000 recipes in the app. Yes, it's expensive - but it's incredibly capable.</p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">12 functions: blend, chop, weigh, cook, steam, knead, whisk, grind, emulsify, stir, heat, sous-vide</li>
              <li className="mb-2">Guided cooking with step-by-step instructions</li>
              <li className="mb-2">Built-in scale</li>
              <li className="mb-2">Connected app with thousands of recipes</li>
            </ul>
            <p className="mb-4"><a href="https://www.amazon.com/Thermomix-TM6-Motor-White/dp/B07QTC4LWQ?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">Check Price on Amazon →</a></p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Alternative: Ninja Foodi Multi-Cooker</h2>
            <p className="mb-4 text-stone-600">The Ninja Foodi offers many Thermomix functions at a fraction of the price. Pressure cooking, air frying, sous vide, and more.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Value: Instant Pot Duo</h2>
            <p className="mb-4 text-stone-600">For budget-conscious cooks, the Instant Pot Duo does 90% of what the Thermomix does for 1/4 the price.</p>
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Verdict</h2>
            <p className="mb-4 text-stone-600">If you have the budget, the <strong>Thermomix TM6</strong> is unparalleled. But for most home cooks, the <strong>Ninja Foodi</strong> offers the best value.</p>
          </div>
          <div className="mt-12 bg-stone-100 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-lg text-stone-800 mb-3">Where to Buy</h3>
            <p className="text-stone-500 text-sm mb-4">We may earn a commission when you buy through our links.</p>
            <a href="https://www.amazon.com/Thermomix-TM6-Motor-White/dp/B07QTC4LWQ?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">Check Price on Amazon</a>
          </div>
        </article>
      </div>
    </div>
  );
}
