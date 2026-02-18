import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Electric Kettle 2026 - Expert Tested",
  description: "From gooseneck pour-over to rapid boiling, we tested the best electric kettles for tea and coffee lovers in 2026.",
};

export default function Page() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link 
          href="/reviews" 
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition"
        >
          ← Back to Reviews
        </Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">
              Appliances
            </span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.6</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-rose-50 rounded-2xl p-10 text-center mb-8 shadow-inner">
            <div className="text-6xl mb-4">🫖</div>
            <div className="text-sm text-stone-500 font-lato">Tested & Recommended</div>
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">
            Best Electric Kettles 2026: Precision Brewing Starts Here
          </h1>
          
          <p className="font-lato text-xl text-stone-600 mb-8">
            Whether you're a coffee enthusiast or tea connoisseur, the right electric kettle makes all the difference. We tested the top models for temperature control, speed, and design.
          </p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why Temperature Matters</h2>
            <p className="mb-4 text-stone-600">
              Different teas and coffee brewing methods require different temperatures. Green tea的最佳温度 is 175°F, while French press needs 200°F. Precision temperature control means better flavor extraction.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Overall: Fellow Stagg EKG</h2>
            <p className="mb-4 text-stone-600">
              The Fellow Stagg EKG combines stunning design with precise temperature control. The LCD display shows your exact temperature, the pour is incredibly controlled, and it holds your temp for up to 60 minutes.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Variable temperature control (135-212°F)</li>
              <li className="mb-2">Hold mode for up to 60 minutes</li>
              <li className="mb-2">Precision pour spout</li>
              <li className="mb-2">LCD display</li>
              <li className="mb-2">Multiple color options</li>
            </ul>
            <p className="mb-4">
              <a href="https://www.amazon.com/Fellow-Stagg-EKG-Electric-Pour-over/dp/B07CM5H7BQ?tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Value: Hamilton Beach 1.7L</h2>
            <p className="mb-4 text-stone-600">
              Fast boiling at an affordable price. The Hamilton Beach delivers 1500W power for rapid heating without breaking the bank. Simple, reliable, effective.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Gooseneck: Bonavita Connoisseur</h2>
            <p className="mb-4 text-stone-600">
              For pour-over coffee enthusiasts, the Bonavita gooseneck offers the precise control you need. The slender spout allows for slow, steady pours essential for balanced extraction.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Smart Kettle: Xiaomi Smart Kettle</h2>
            <p className="mb-4 text-stone-600">
              WiFi-enabled with app control. Set your temperature from bed and have hot water waiting. Great for morning routines.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">How We Tested</h2>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Boiling speed (time to 212°F)</li>
              <li className="mb-2">Temperature accuracy</li>
              <li className="mb-2">Pour control (gooseneck models)</li>
              <li className="mb-2">Build quality and durability</li>
              <li className="mb-2">Noise level</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Verdict</h2>
            <p className="mb-4 text-stone-600">
              For most people, the <strong>Fellow Stagg EKG</strong> is worth the investment. It's beautiful enough to display, precise enough for perfect brewing, and durable enough to last years.
            </p>
          </div>
          
          {/* Affiliate CTA */}
          <div className="mt-12 bg-stone-100 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-lg text-stone-800 mb-3">
              Where to Buy
            </h3>
            <p className="text-stone-500 text-sm mb-4">
              We may earn a commission when you buy through our links.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a 
                href="https://www.amazon.com/Fellow-Stagg-EKG-Electric-Pour-over/dp/B07CM5H7BQ?tag=cookinkitchen-20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium hover:underline"
              >
                Check Price on Amazon
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
