"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RefinedCard from "@/components/RefinedCard";

const categoryImages: Record<string, string> = {
  "Kitchen Utensils": "/images/kitchen/7.jpg",
  "Wooden Utensils": "/images/kitchen/8.jpg",
  "Knives": "/images/kitchen/9.jpg",
  "Cookware": "/images/kitchen/10.jpg",
  "Appliances": "/images/kitchen/11.jpg",
  "Gadgets": "/images/gadgets.png",
  "Cutting Boards": "/images/kitchen/1.jpg",
  "Baking Sheets": "/images/kitchen/2.jpg",
  "Food Storage": "/images/kitchen/3.jpg",
};

const getImageUrl = (category: string): string => {
  return categoryImages[category] || "/images/kitchen/4.jpg";
};

const reviews = [
  {
    id: 69,
    slug: "best-pizza-ovens-2026",
    title: "Best Pizza Ovens 2026 - Complete Buying Guide",
    excerpt: "Make restaurant-quality pizza at home with the best pizza ovens. We tested gas, electric, and wood-fired pizza ovens for every budget.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 21, 2026",
  },
  {
    id: 68,
    slug: "best-citrus-juicers-2026",
    title: "Best Citrus Juicers 2026 - Lemon & Lime Squeezers",
    excerpt: "Get fresh citrus juice with the best lemon squeezers and citrus juicers. We tested top-rated manual and electric models for maximum extraction.",
    category: "Kitchen Utensils",
    rating: 4.7,
    date: "Mar 21, 2026",
  },
  {
    id: 67,
    slug: "best-avocado-slicers-2026",
    title: "Best Avocado Slicers 2026 - Complete Buying Guide",
    excerpt: "Slice, pit, and scoop avocados safely with the best avocado tools. We tested top-rated slicers for perfect avocado preparation every time.",
    category: "Kitchen Utensils",
    rating: 4.6,
    date: "Mar 21, 2026",
  },
  {
    id: 66,
    slug: "best-measuring-spoons-2026",
    title: "Best Measuring Spoons 2026 - Complete Buying Guide",
    excerpt: "Find the perfect measuring spoons for accurate baking and cooking. We tested stainless steel, magnetic, and adjustable measuring spoons.",
    category: "Kitchen Utensils",
    rating: 4.6,
    date: "Mar 21, 2026",
  },
  {
    id: 65,
    slug: "best-whisks-2026",
    title: "Best Whisks 2026 - Complete Buying Guide",
    excerpt: "Find the perfect whisk for your kitchen. We tested the best whisks for baking, cooking, and mixing - from balloon whisks to silicone whisks.",
    category: "Kitchen Utensils",
    rating: 4.7,
    date: "Mar 20, 2026",
  },
  {
    id: 64,
    slug: "best-breakfast-sandwich-makers-2026",
    title: "Best Breakfast Sandwich Makers 2026 - Complete Buying Guide",
    excerpt: "Make restaurant-quality breakfast sandwiches at home. We tested the best breakfast sandwich makers for perfect eggs, bacon, and more.",
    category: "Appliances",
    rating: 4.5,
    date: "Mar 20, 2026",
  },
  {
    id: 63,
    slug: "best-electric-griddles-2026",
    title: "Best Electric Griddles 2026 - Complete Buying Guide",
    excerpt: "Discover the best electric griddles for perfect pancakes, burgers, and more. We tested top-rated options for home kitchens.",
    category: "Appliances",
    rating: 4.5,
    date: "Mar 20, 2026",
  },
  {
    id: 62,
    slug: "best-cookware-sets-2026",
    title: "Best Cookware Sets 2026 - Complete Buying Guide",
    excerpt: "We tested the best cookware sets for every budget. From ceramic to stainless steel, find your perfect cookware set.",
    category: "Cookware",
    rating: 4.7,
    date: "Mar 20, 2026",
  },
  {
    id: 59,
    slug: "best-immersion-blenders-2026",
    title: "Best Immersion Blenders 2026 - Complete Buying Guide",
    excerpt: "Find the perfect immersion blender for smoothies, soups, and sauces. We tested the best hand blenders for every kitchen in 2026.",
    category: "Appliances",
    rating: 4.7,
    date: "Mar 19, 2026",
  },
  {
    id: 58,
    slug: "best-casserole-dishes-2026",
    title: "Best Casserole Dishes 2026 - Complete Buying Guide",
    excerpt: "Find the perfect casserole dish for your kitchen. We tested ceramic, glass, cast iron, and enamel options for baking, serving, and meal prep.",
    category: "Cookware",
    rating: 4.7,
    date: "Mar 19, 2026",
  },
  {
    id: 57,
    slug: "best-pizza-stones-2026",
    title: "Best Pizza Stones 2026 - Perfect Pizza at Home",
    excerpt: "Achieve crispy, restaurant-quality pizza at home with the best pizza stones. We tested cordierite, ceramic, and steel stones.",
    category: "Cookware",
    rating: 4.6,
    date: "Mar 19, 2026",
  },
  {
    id: 56,
    slug: "best-oven-mitts-2026",
    title: "Best Oven Mitts 2026 - Heat Resistant Buying Guide",
    excerpt: "Protect your hands from high heat with the best oven mitts. We tested silicone, fabric, and hybrid mitts for maximum protection.",
    category: "Kitchen Utensils",
    rating: 4.6,
    date: "Mar 18, 2026",
  },
  {
    id: 55,
    slug: "best-air-fryers-under-100",
    title: "Best Air Fryers Under $100 - 2026 Buying Guide",
    excerpt: "Get crispy results without breaking the bank. We tested the best budget air fryers under $100 for every kitchen.",
    category: "Appliances",
    rating: 4.5,
    date: "Mar 17, 2026",
  },
  {
    id: 54,
    slug: "best-dutch-ovens-2026",
    title: "Best Dutch Ovens 2026 - Complete Buying Guide",
    excerpt: "Find the perfect Dutch oven for your kitchen in 2026. We tested top-rated enameled cast iron, raw cast iron, and stainless steel options from Lodge, Le Creuset, and more.",
    category: "Cookware",
    rating: 4.7,
    date: "Mar 18, 2026",
  },
  {
    id: 53,
    slug: "best-grill-presses-2026",
    title: "Best Grill Presses 2026 - Complete Buying Guide",
    excerpt: "Achieve perfect sear marks and even cooking with the best grill presses of 2026. We tested top-rated cast iron, stainless steel, and aluminum presses.",
    category: "Cookware",
    rating: 4.5,
    date: "Mar 17, 2026",
  },
  {
    id: 52,
    slug: "best-stockpots-2026",
    title: "Best Stockpots 2026 - Complete Buying Guide",
    excerpt: "From soups to pasta, find the best stockpots of 2026. We tested stainless steel, aluminum, and enameled options from top brands.",
    category: "Cookware",
    rating: 4.6,
    date: "Mar 17, 2026",
  },
  {
    id: 51,
    slug: "best-electric-can-openers-2026",
    title: "Best Electric Can Openers 2026 - Complete Buying Guide",
    excerpt: "Make opening cans effortless with the best electric can openers of 2026. We tested top-rated models from Hamilton Beach, KitchenAid, and more.",
    category: "Kitchen Utensils",
    rating: 4.5,
    date: "Mar 17, 2026",
  },
  {
    id: 50,
    slug: "best-kitchen-faucets-2026",
    title: "Best Kitchen Faucets 2026 - Complete Buying Guide",
    excerpt: "Upgrade your kitchen with the best faucets of 2026. We tested pull-down, pull-out, and touchless faucets from Moen, Delta, Kohler, and more.",
    category: "Kitchen",
    rating: 4.7,
    date: "Mar 16, 2026",
  },
  {
    id: 49,
    slug: "best-meat-slicers-2026",
    title: "Best Meat Slicers 2026 - Complete Buying Guide",
    excerpt: "Slice like a pro at home. We tested the best meat slicers from Chef'sChoice, Cuisinart, and more. Find the perfect slicer for your kitchen.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 16, 2026",
  },
  {
    id: 48,
    slug: "best-electric-skillets-2026",
    title: "Best Electric Skillets 2026 - Complete Buying Guide",
    excerpt: "Versatile cooking solutions for every kitchen. We tested the best electric skillets from Zojirushi, Cuisinart, and more. Find your perfect skillet.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 16, 2026",
  },
  {
    id: 47,
    slug: "best-pasta-makers-2026",
    title: "Best Pasta Makers 2026 - Ultimate Buying Guide",
    excerpt: "Fresh homemade pasta in minutes. We tested the best pasta makers from KitchenAid, Atlas, and more. Find the perfect machine for your kitchen.",
    category: "Appliances",
    rating: 4.7,
    date: "Mar 15, 2026",
  },
  {
    id: 46,
    slug: "best-espresso-machines-under-500",
    title: "Best Espresso Machines Under $500 - 2026 Buying Guide",
    excerpt: "Barista-quality espresso at home without breaking the bank. We tested the best espresso machines under $500 for beginners and enthusiasts.",
    category: "Appliances",
    rating: 4.7,
    date: "Mar 15, 2026",
  },
  {
    id: 45,
    slug: "best-dutch-ovens-for-bread-baking",
    title: "Best Dutch Ovens for Bread Baking 2026",
    excerpt: "Bake bakery-quality bread at home. We tested the best Dutch ovens for sourdough, no-knead, and artisan bread recipes.",
    category: "Cookware",
    rating: 4.7,
    date: "Mar 14, 2026",
  },
  {
    id: 44,
    slug: "best-spice-racks-2026",
    title: "Best Spice Racks 2026 - Complete Buying Guide",
    excerpt: "Organize your kitchen with the best spice racks of 2026. We tested wall-mounted, drawer, and countertop organizers to find the perfect solution.",
    category: "Kitchen Utensils",
    rating: 4.6,
    date: "Mar 14, 2026",
  },
  {
    id: 43,
    slug: "best-coffee-grinders-2026",
    title: "Best Coffee Grinders 2026 - Expert Buying Guide",
    excerpt: "Freshly ground coffee is the secret to amazing coffee. We tested the best coffee grinders for every budget - from blade to burr grinders.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 13, 2026",
  },
  {
    id: 41,
    slug: "best-drip-coffee-makers-2026",
    title: "Best Drip Coffee Makers 2026 - Expert Tested",
    excerpt: "From budget-friendly to premium, we tested the best drip coffee makers for perfectly brewed coffee every morning.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 13, 2026",
  },
  {
    id: 42,
    slug: "best-kitchen-scales-2026",
    title: "Best Kitchen Scales 2026 - Digital & Analog Options",
    excerpt: "We tested the best kitchen scales for baking and cooking. Find the perfect scale for precise measurements in 2026.",
    category: "Gadgets",
    rating: 4.7,
    date: "Mar 13, 2026",
  },
  {
    id: 40,
    slug: "instant-pot-vs-crock-pot",
    title: "Instant Pot vs Crock-Pot: Which Slow Cooker Wins?",
    excerpt: "Two giants of slow cooking face off. We compare Instant Pot vs Crock-Pot to find which delivers the best meals.",
    category: "Appliances",
    rating: 4.4,
    date: "Mar 12, 2026",
  },
  {
    id: 39,
    slug: "best-rice-cookers-2026",
    title: "Best Rice Cookers 2026 - Ultimate Buying Guide",
    excerpt: "Perfect rice every time. We tested the best rice cookers from Zojirushi, Instant Pot, Tiger, and more for fluffy grains.",
    category: "Appliances",
    rating: 4.7,
    date: "Mar 12, 2026",
  },
  {
    id: 38,
    slug: "best-waffle-makers-2026",
    title: "Best Waffle Makers 2026 - Ultimate Buying Guide",
    excerpt: "Golden, crispy waffles at home. We tested the top waffle makers from Breville, Cuisinart, and more for perfect breakfast every time.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 12, 2026",
  },
  {
    id: 37,
    slug: "best-food-dehydrators-2026",
    title: "Best Food Dehydrators 2026 - Make Jerky & Dried Fruits",
    excerpt: "Preserve fruits, make jerky, and create healthy snacks at home. We tested the best food dehydrators for every budget.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 12, 2026",
  },
  {
    id: 36,
    slug: "best-toasters-2026",
    title: "Best Toasters 2026 - Perfect Toast Every Time",
    excerpt: "From budget to premium, we tested the best toasters for consistent browning. Find your perfect morning appliance.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 12, 2026",
  },
  {
    id: 35,
    slug: "best-kitchen-timers-2026",
    title: "Best Kitchen Timers 2026 - Never Burn Again",
    excerpt: "Never burn anything again. We tested the best kitchen timers for every need - from digital to mechanical, magnetic to mounted.",
    category: "Gadgets",
    rating: 4.7,
    date: "Mar 11, 2026",
  },
  {
    id: 34,
    slug: "best-yeti-rambler-tumblers",
    title: "Best YETI Rambler Tumblers 2026 - Buying Guide",
    excerpt: "Keep drinks cold for hours with the best YETI Rambler tumblers and bottles. We tested the top options for insulation and durability.",
    category: "Appliances",
    rating: 4.8,
    date: "Mar 11, 2026",
  },
  {
    id: 33,
    slug: "best-stanley-tumblers",
    title: "Best Stanley Tumblers 2026 - Buying Guide",
    excerpt: "The viral Stanley Quencher and more. We reviewed the best Stanley tumblers for keeping drinks cold and looking great doing it.",
    category: "Appliances",
    rating: 4.7,
    date: "Mar 11, 2026",
  },
  {
    id: 32,
    slug: "best-egg-cookers",
    title: "Best Egg Cookers 2026 - Perfect Eggs Every Time",
    excerpt: "Cook perfect boiled, poached, or scrambled eggs with the best egg cookers. We tested top-rated options for every kitchen.",
    category: "Appliances",
    rating: 4.6,
    date: "Mar 11, 2026",
  },
  {
    id: 31,
    slug: "best-dutch-ovens-under-100",
    title: "Best Dutch Ovens Under $100 - 2026 Buying Guide",
    excerpt: "Find the best Dutch oven under $100. We tested affordable enameled cast iron pots from Lodge, Amazon Basics, and more for braising, bread, and soups.",
    category: "Cookware",
    rating: 4.7,
    date: "Mar 11, 2026",
  },
  {
    id: 30,
    slug: "best-mandoline-slicers-2026",
    title: "Best Mandoline Slicers 2026 - Ultimate Buying Guide",
    excerpt: "Slice like a pro. We tested the best mandoline slicers for uniform cuts, from budget-friendly to professional-grade.",
    category: "Gadgets",
    rating: 4.6,
    date: "Mar 10, 2026",
  },
  {
    id: 29,
    slug: "best-non-toxic-baking-sheets",
    title: "Best Non-Toxic Baking Sheets 2026 - PFAS-Free Guide",
    excerpt: "Skip the toxic chemicals. We tested the best PFAS-free, ceramic, and silicone baking mats and sheets for safe, easy baking.",
    category: "Baking Sheets",
    rating: 4.7,
    date: "Mar 10, 2026",
  },
  {
    id: 23,
    slug: "best-kitchen-gadgets-2026",
    title: "Best Kitchen Gadgets Under $25 - 2026 Buying Guide",
    excerpt: "Smart kitchen tools under $25 that make cooking easier. We tested the best affordable gadgets from Oxo, Dreamfarm, and more.",
    category: "Gadgets",
    rating: 4.7,
    date: "Mar 2, 2026",
  },
  {
    id: 24,
    slug: "best-instant-read-thermometers",
    title: "Best Instant Read Thermometers 2026",
    excerpt: "Stop guessing if your meat is done. We tested the best instant read thermometers for accuracy, speed, and durability.",
    category: "Gadgets",
    rating: 4.8,
    date: "Mar 2, 2026",
  },
  {
    id: 25,
    slug: "best-air-fryer-accessories",
    title: "Best Air Fryer Accessories 2026",
    excerpt: "Get more from your air fryer with these essential accessories. From racks to silicone liners, we tested must-have add-ons.",
    category: "Appliances",
    rating: 4.7,
    date: "Mar 2, 2026",
  },
  {
    id: 26,
    slug: "best-kitchen-shears",
    title: "Best Kitchen Shears 2026",
    excerpt: "Cut, trim, and slice like a pro. We tested the best kitchen shears for every task from herbs to chicken.",
    category: "Gadgets",
    rating: 4.8,
    date: "Mar 2, 2026",
  },
  {
    id: 27,
    slug: "best-baking-mats",
    title: "Best Baking Mats 2026",
    excerpt: "Replace parchment paper forever. We tested silicone and non-stick mats for even baking and easy release.",
    category: "Baking Sheets",
    rating: 4.7,
    date: "Mar 2, 2026",
  },
  {
    id: 22,
    slug: "best-wooden-kitchen-utensils",
    title: "Best Wooden Kitchen Utensils 2026 - Natural & Durable",
    excerpt: "From teak to acacia, we tested the best wooden spoons, spatulas, and utensil sets for every kitchen.",
    category: "Kitchen Utensils",
    rating: 4.7,
    date: "Feb 21, 2026",
  },
  {
    id: 21,
    slug: "best-jar-openers",
    title: "Best Jar Openers 2026 - For Weak Hands & Easy Opening",
    excerpt: "Struggling with stuck lids? We tested the best jar openers for seniors, weak hands, and everyone in between.",
    category: "Gadgets",
    rating: 4.6,
    date: "Feb 20, 2026",
  },
  {
    id: 20,
    slug: "best-kitchen-utensils-2026",
    title: "Best Kitchen Utensils 2026 - Complete Guide",
    excerpt: "From spatulas to ladles, we tested the best kitchen utensils for every cooking need in 2026.",
    category: "Kitchen Utensils",
    rating: 4.7,
    date: "Feb 20, 2026",
  },
  {
    id: 19,
    slug: "best-kitchen-utensil-set",
    title: "Best Kitchen Utensil Sets for Every Cook",
    excerpt: "From sautéing to serving, we tested the top utensil sets to find the perfect tools for your kitchen.",
    category: "Kitchen Utensils",
    rating: 4.6,
    date: "Feb 16, 2026",
  },
  {
    id: 1,
    slug: "best-chef-knives-home-cooks",
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
    category: "Knives",
    rating: 4.8,
    date: "Feb 10, 2026",
  },
  {
    id: 2,
    slug: "cast-iron-vs-carbon-steel",
    title: "Cast Iron vs. Carbon Steel: Which is Right?",
    excerpt: "A deep dive into two kitchen essentials. We compare heat retention, maintenance, and cooking results.",
    category: "Cookware",
    rating: 4.5,
    date: "Feb 8, 2026",
  },
  {
    id: 28,
    slug: "best-silicone-stretch-lids",
    title: "Best Silicone Stretch Lids 2026",
    excerpt: "Replace plastic wrap with these reusable silicone bowl covers. We tested the best stretchy lids for airtight food storage.",
    category: "Gadgets",
    rating: 4.7,
    date: "Mar 10, 2026",
  },
  {
    id: 3,
    slug: "instant-pot-vs-ninja-foodi",
    title: "Instant Pot Duo vs. Ninja Foodi",
    excerpt: "Two popular multicookers face off. Which one deserves a spot on your countertop?",
    category: "Appliances",
    rating: 4.3,
    date: "Feb 5, 2026",
  },
];

const categories = ["All", "Knives", "Cookware", "Appliances", "Gadgets", "Kitchen Utensils", "Baking Sheets"];

function ReviewsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") || "All";
  
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sync state with URL parameter
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`/reviews?${params.toString()}`, { scroll: false });
  };

  const filteredReviews = activeCategory === "All"
    ? reviews
    : reviews.filter(r => r.category === activeCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-4 block">Intelligence Reports</span>
          <h1 className="font-serif text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Laboratory Analysis
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Every instrument we review undergoes rigorous field testing and data analysis.
            Access our latest intelligence reports below.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${activeCategory === cat
                ? "bg-gray-900 border-gray-900 text-white shadow-xl shadow-gray-900/10"
                : "bg-white border-gray-100 text-gray-400 hover:border-emerald-200 hover:text-emerald-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredReviews.map((review) => (
            <RefinedCard
              key={review.id}
              title={review.title}
              excerpt={review.excerpt}
              image={getImageUrl(review.category)}
              category={review.category}
              rating={review.rating}
              slug={review.slug}
              date={review.date}
            />
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-40 glass-premium rounded-3xl">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
              [ NO INTEL FOUND IN THIS SECTOR ]
            </p>
          </div>
        )}

        {/* Popular Guides from Blog */}
        <section className="py-20 bg-stone-100 mt-20 rounded-3xl">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl font-black text-stone-800 mb-8">Popular Guides</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="/blog/air-fryer-recipes-tips" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🍟</span>
                <h3 className="font-bold text-stone-800 mt-3">Air Fryer Recipes</h3>
                <p className="text-sm text-stone-500 mt-2">Master your air fryer</p>
              </a>
              <a href="/blog/essential-knife-skills-guide" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🔪</span>
                <h3 className="font-bold text-stone-800 mt-3">Knife Skills 101</h3>
                <p className="text-sm text-stone-500 mt-2">Essential cutting techniques</p>
              </a>
              <a href="/blog/cast-iron-care-seasoning-guide" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🍳</span>
                <h3 className="font-bold text-stone-800 mt-3">Cast Iron Care</h3>
                <p className="text-sm text-stone-500 mt-2">Season and maintain</p>
              </a>
              <a href="/blog/instant-pot-recipes-beginners" className="block bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition hover:-translate-y-1">
                <span className="text-4xl">🥘</span>
                <h3 className="font-bold text-stone-800 mt-3">Instant Pot Guide</h3>
                <p className="text-sm text-stone-500 mt-2">Get started with pressure cooking</p>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <div className="mt-40 glass-premium bg-emerald-600 text-white rounded-[3rem] p-16 text-center shadow-2xl shadow-emerald-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <span className="text-9xl font-black">@</span>
          </div>

          {subscribed ? (
            <div className="py-8">
              <h3 className="text-4xl font-black mb-4">PERSONNEL AUTHENTICATED</h3>
              <p className="text-emerald-100 font-light text-xl">
                Intelligence link established. Your first briefing is in transit.
              </p>
            </div>
          ) : (
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-200 mb-6 block">
                Stay Ahead of the Protocol
              </span>
              <h3 className="font-serif text-4xl md:text-6xl font-black mb-6">
                Establish Connection.
              </h3>
              <p className="text-emerald-100 mb-12 max-w-lg mx-auto text-lg font-light">
                Join our elite list for automated gear updates and culinary intelligence alerts.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENCRYPTED_EMAIL@SECURE.COM"
                  required
                  disabled={loading}
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-bold tracking-widest outline-none focus:bg-white/20 transition disabled:opacity-50"
                />
                <button type="submit" disabled={loading} className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all duration-300 disabled:opacity-50 hover:scale-[1.02]">
                  {loading ? 'SYNCING...' : 'INITIATE SYNC'}
                </button>
              </form>
              <p className="text-[10px] text-emerald-200/60 mt-8 font-bold uppercase tracking-widest">
                Protocol: Privacy Guaranteed // Unsubscribe any time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    }>
      <ReviewsContent />
    </Suspense>
  );
}
