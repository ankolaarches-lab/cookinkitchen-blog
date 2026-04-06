import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Drip Coffee Makers 2026 - Expert Tested",
  description: "From budget-friendly to premium, we tested the best drip coffee makers for perfectly brewed coffee every morning.",
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
            <span className="font-lato text-stone-400 text-sm">Mar 13, 2026</span>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl p-10 text-center mb-8 shadow-inner">
            <div className="text-6xl mb-4">☕</div>
            <div className="text-sm text-stone-500 font-lato">Tested & Recommended</div>
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">
            Best Drip Coffee Makers 2026: Morning Perfection
          </h1>
          
          <p className="font-lato text-xl text-stone-600 mb-8">
            A great drip coffee maker should brew consistently, keep coffee hot, and fit your lifestyle. We tested the top models from budget to premium to find the perfect morning companion.
          </p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What Makes a Great Coffee Maker</h2>
            <p className="mb-4 text-stone-600">
              Temperature consistency, brew time, and carafe design matter most. The best machines maintain optimal brewing temperature (195-205°F), distribute water evenly over grounds, and keep coffee at the right temperature without burning it.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Overall: Hamilton Beach 12-Cup Programmable Coffee Maker</h2>
            <p className="mb-4 text-stone-600">
              The Hamilton Beach delivers everything you need at a reasonable price. Programmable brewing lets you wake up to fresh coffee, the dual-brew options handle single cups or full carafes, and the easy-clean design makes maintenance simple.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">12-cup capacity</li>
              <li className="mb-2">Programmable start time</li>
              <li className="mb-2">Auto-off feature</li>
              <li className="mb-2">Brew strength selector</li>
              <li className="mb-2">Dishwasher-safe carafe</li>
            </ul>
            <p className="mb-4">
              <a href={`https://www.amazon.com/s?k=Hamilton+Beach+12+Cup+Programmable+Coffee+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Premium: Breville Precision Brewer</h2>
            <p className="mb-4 text-stone-600">
              The Breville Precision Brewer is a coffee lover's dream. With six brewing modes, adjustable temperature, and flow rate control, you can dial in the perfect cup. The thermal carafe keeps coffee hot for hours without a warming plate.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Six customizable brew modes</li>
              <li className="mb-2">Adjustable temperature (185-205°F)</li>
              <li className="mb-2">Flow rate control</li>
              <li className="mb-2">Thermal carafe included</li>
              <li className="mb-2">Gold tone and regular coffee presets</li>
            </ul>
            <p className="mb-4">
              <a href={`https://www.amazon.com/s?k=Breville+Precision+Brewer+Coffee+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Value: Black+Decker 12-Cup Thermal Coffeemaker</h2>
            <p className="mb-4 text-stone-600">
              The Black+Decker offers thermal carafe technology at a budget price. The stainless steel carafe keeps coffee hot longer than glass, and the programmable features rival machines twice the price.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">12-cup thermal carafe</li>
              <li className="mb-2">Programmable brew timer</li>
              <li className="mb-2">Sneak-a-cup feature</li>
              <li className="mb-2">Washable filter basket</li>
              <li className="mb-2">2-year warranty</li>
            </ul>
            <p className="mb-4">
              <a href={`https://www.amazon.com/s?k=Black+Decker+12+Cup+Thermal+Coffee+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best for Small Kitchens: Ninja Coffee Bar</h2>
            <p className="mb-4 text-stone-600">
              The Ninja Coffee Bar does it all—single serve, XL carafe, specialty drinks, and over ice. It's compact but powerful, perfect for counter space-challenged kitchens.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Multiple brew sizes (single to XL)</li>
              <li className="mb-2">Built-in frother for specialty drinks</li>
              <li className="mb-2">Over-ice coffee setting</li>
              <li className="mb-2">Thermal or glass carafe options</li>
              <li className="mb-2">Compact footprint</li>
            </ul>
            <p className="mb-4">
              <a href={`https://www.amazon.com/s?k=Ninja+Coffee+Bar++coffee+maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Single-Serve: Cuisinart SS-10P1</h2>
            <p className="mb-4 text-stone-600">
              The Cuisinart SS-10P1 combines a traditional coffee maker with single-serve pod brewing. It handles both ground coffee and K-Cups, giving you maximum flexibility.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Dual brewing (grounds + K-Cups)</li>
              <li className="mb-2">5 cup sizes</li>
              <li className="mb-2">Hot water on demand</li>
              <li className="mb-2">Adjustable brew temperature</li>
              <li className="mb-2">Includes charcoal water filter</li>
            </ul>
            <p className="mb-4">
              <a href={`https://www.amazon.com/s?k=Cuisinart+SS-10P1+coffee+maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">How We Tested</h2>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Brew temperature consistency</li>
              <li className="mb-2">Brew time accuracy</li>
              <li className="mb-2">Coffee taste and aroma preservation</li>
              <li className="mb-2">Carafe heat retention</li>
              <li className="mb-2">Ease of cleaning and maintenance</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Verdict</h2>
            <p className="mb-4 text-stone-600">
              For most households, the <strong>Hamilton Beach 12-Cup Programmable</strong> offers the best balance of features, price, and performance. If you're serious about coffee, the <strong>Breville Precision Brewer</strong> justifies its premium price with unmatched customization.
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
                href={`https://www.amazon.com/s?k=Hamilton+Beach+12+Cup+Programmable+Coffee+Maker&tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG}`}
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
