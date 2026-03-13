import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Best Kitchen Scales 2026 - Digital & Analog Options",
  description: "We tested the best kitchen scales for baking and cooking. Find the perfect scale for precise measurements in 2026.",
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
              Gadgets
            </span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Mar 13, 2026</span>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-rose-50 rounded-2xl p-10 text-center mb-8 shadow-inner">
            <div className="text-6xl mb-4">⚖️</div>
            <div className="text-sm text-stone-500 font-lato">Tested & Recommended</div>
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">
            Best Kitchen Scales 2026: Precision for Every Cook
          </h1>
          
          <p className="font-lato text-xl text-stone-600 mb-8">
            Whether you're baking delicate pastries or portioning meals, a reliable kitchen scale transforms your cooking. We tested the top models for accuracy, durability, and ease of use.
          </p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Why You Need a Kitchen Scale</h2>
            <p className="mb-4 text-stone-600">
              Volume measurements vary by ingredient, but weight is always precise. A scale eliminates guesswork, ensures consistent results, and makes recipe scaling effortless. It's the foundation of professional cooking.
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Overall: OXO Good Grips 11-lb Stainless Steel Scale</h2>
            <p className="mb-4 text-stone-600">
              The OXO Good Grips scale combines elegant design with exceptional accuracy. The pull-out display is genius—read measurements even with large bowls blocking the view. The stainless steel platform is durable and easy to clean.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">11 lb / 5 kg capacity</li>
              <li className="mb-2">Pull-out display for easy reading</li>
              <li className="mb-2">Bowl mode with auto-tare</li>
              <li className="mb-2">Unit conversion (g, oz, ml, lb:oz)</li>
              <li className="mb-2">Stainless steel platform</li>
            </ul>
            <p className="mb-4">
              <a href="https://www.amazon.com/s?k=OXO+Good+Grips+Stainless+Steel+Kitchen+Scale&tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Value: Ozeri Pronto Digital Scale</h2>
            <p className="mb-4 text-stone-600">
              The Ozeri Pronto delivers impressive accuracy at an unbeatable price. It's slim, lightweight, and perfect for everyday cooking. The touch-sensitive buttons are responsive, and it powers off automatically to save battery.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">11 lb capacity</li>
              <li className="mb-2">Compact, slim design</li>
              <li className="mb-2">Auto-off feature</li>
              <li className="mb-2">Includes 2 AAA batteries</li>
            </ul>
            <p className="mb-4">
              <a href="https://www.amazon.com/s?k=Ozeri+Pronto+Digital+Kitchen+Scale&tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best for Baking: Etekcity Digital Food Scale</h2>
            <p className="mb-4 text-stone-600">
              With 0.1 oz / 1g precision, the Etekcity is ideal for baking where exact measurements matter. The backlit display is easy to read, and it includes a removable stainless steel bowl perfect for mixing and measuring.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">22 lb capacity with high precision mode</li>
              <li className="mb-2">0.1 oz / 1g accuracy</li>
              <li className="mb-2">Removable stainless steel bowl</li>
              <li className="mb-2">Backlit LCD display</li>
            </ul>
            <p className="mb-4">
              <a href="https://www.amazon.com/s?k=Etekcity+Digital+Food+Scale+22lb&tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Best Basic: Amazon Basics Digital Kitchen Scale</h2>
            <p className="mb-4 text-stone-600">
              Simple, reliable, and affordable. The Amazon Basics scale does exactly what it says—no frills, just accurate measurements. The low-profile design stores easily in any drawer.
            </p>
            <ul className="ml-4 mb-4">
              <li className="mb-2">10 lb capacity</li>
              <li className="mb-2">Sleek, low-profile design</li>
              <li className="mb-2">Easy-to-clean platform</li>
              <li className="mb-2">Auto-off to save battery</li>
            </ul>
            <p className="mb-4">
              <a href="https://www.amazon.com/s?k=Amazon+Basics+Digital+Kitchen+Scale&tag=cookinkitchen-20" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                Check Price on Amazon →
              </a>
            </p>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">How We Tested</h2>
            <ul className="ml-4 mb-4">
              <li className="mb-2">Accuracy against calibrated weights</li>
              <li className="mb-2">Consistency across multiple readings</li>
              <li className="mb-2">Ease of use and readability</li>
              <li className="mb-2">Bowl clearing and tare function</li>
              <li className="mb-2">Durability and build quality</li>
            </ul>

            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Verdict</h2>
            <p className="mb-4 text-stone-600">
              The <strong>OXO Good Grips scale</strong> earns our top pick for its thoughtful design, accuracy, and durability. If you're on a budget, the <strong>Ozeri Pronto</strong> delivers exceptional value without compromising quality.
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
                href="https://www.amazon.com/s?k=OXO+Good+Grips+Stainless+Steel+Kitchen+Scale&tag=cookinkitchen-20"
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
