import Link from "next/link";
import Image from "next/image";

const kitchenImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556910110-a5a66af3b497?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1514986888952-c8f3ef7e8f64?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556909113-6f2586d46001?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556910110-a5a66af3b497?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=400&fit=crop",
];

const getImage = (index: number) => kitchenImages[index % kitchenImages.length];

const blogPosts = [
  {
    slug: "instant-read-thermometer-guide-2026",
    title: "Instant Read Thermometer Guide: Perfect Temperature Every Time",
    excerpt: "Why every home cook needs an instant read thermometer. We explain when to use it, ideal temperatures for different foods, and our top picks.",
    category: "Guide",
    date: "Mar 2, 2026",
    readTime: "5 min read",
    image: getImage(0),
  },
  {
    slug: "air-fryer-accessories-guide",
    title: "Air Fryer Accessories: Get More From Your Appliance",
    excerpt: "Your air fryer can do so much more than french fries. Discover accessories that expand what you can cook and make cleanup easier.",
    category: "Guide",
    date: "Mar 2, 2026",
    readTime: "6 min read",
    image: getImage(1),
  },
  {
    slug: "kitchen-shears-essential-guide",
    title: "Why You Need Kitchen Shears: The Unsung Hero of Kitchen Tools",
    excerpt: "Kitchen shears are more than scissors. From herbs to chicken, learn how the right shears can revolutionize your prep work.",
    category: "Guide",
    date: "Mar 2, 2026",
    readTime: "4 min read",
    image: getImage(2),
  },
  {
    slug: "chefs-knives-how-to-choose",
    title: "How to Choose the Perfect Chef's Knife: A Complete Guide",
    excerpt: "Master the art of selecting your ideal chef's knife. Learn about blade materials, handle types, size options, and find the perfect knife for your cooking style.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: getImage(0),
  },
  {
    slug: "dutch-ovens-bread-baking-braising",
    title: "Dutch Oven Cooking: Bread Baking, Braising, and Beyond",
    excerpt: "Discover why a Dutch oven is the most versatile pot in your kitchen. From artisan bread to fall-off-the-bone braised meats, we cover everything.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(1),
  },
  {
    slug: "cast-iron-care-seasoning-guide",
    title: "Cast Iron Care: The Ultimate Seasoning and Cleaning Guide",
    excerpt: "Learn how to season, clean, and maintain your cast iron cookware for a lifetime of perfect cooking. Expert tips inside.",
    category: "Tutorial",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(2),
  },
  {
    slug: "air-fryer-recipes-tips",
    title: "Air Fryer Recipes and Tips for Crispy, Healthy Cooking",
    excerpt: "Get the most out of your air fryer with our expert tips and delicious recipe ideas. Healthier fried food starts here.",
    category: "Recipes",
    date: "Feb 19, 2026",
    readTime: "9 min read",
    image: getImage(3),
  },
  {
    slug: "instant-pot-beginner-guide",
    title: "Instant Pot Beginner Guide: Master Your Electric Pressure Cooker",
    excerpt: "New to Instant Pot? Our comprehensive beginner guide covers everything from basic functions to delicious first recipes.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "10 min read",
    image: getImage(4),
  },
  {
    slug: "stand-mixer-baking-basics",
    title: "Stand Mixer Baking Basics: Dough, Batter, and More",
    excerpt: "Unlock the full potential of your stand mixer. From perfect doughs to fluffy meringues, we show you how.",
    category: "Tutorial",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: getImage(5),
  },
  {
    slug: "knives-101-everything-you-need-to-know",
    title: "Kitchen Knives 101: Everything You Need to Know",
    excerpt: "A comprehensive guide to kitchen knives. Learn about different blade types, sharpening techniques, and how to build your knife collection.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "12 min read",
    image: getImage(6),
  },
  {
    slug: "nonstick-cookware-pros-cons",
    title: "Nonstick Cookware: Pros, Cons, and Best Practices",
    excerpt: "Is nonstick cookware right for you? We break down the benefits, drawbacks, and how to care for your pans.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(7),
  },
  {
    slug: "cutting-board-guide-materials",
    title: "Cutting Board Guide: Wood, Plastic, and Glass Compared",
    excerpt: "Find the perfect cutting board for your kitchen. We compare materials, durability, and knife care considerations.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(8),
  },
  {
    slug: "blender-buying-guide",
    title: "Blender Buying Guide: Finding the Perfect Blend",
    excerpt: "From smoothies to soups, learn what to look for in a blender. We review top models for every budget.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "9 min read",
    image: getImage(9),
  },
  {
    slug: "measuring-cups-spoons-accuracy",
    title: "Measuring Cups and Spoons: Precision in Baking",
    excerpt: "Why accurate measurements matter in cooking and baking. Our guide to the best measuring tools for your kitchen.",
    category: "Tutorial",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(10),
  },
  {
    slug: "spatula-spoon-set-essentials",
    title: "Kitchen Utensil Sets: Spatulas, Spoons, and More",
    excerpt: "The essential utensils every kitchen needs. We review top-rated sets and help you build your collection.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(11),
  },
  {
    slug: "food-processor-time-saver",
    title: "Food Processor: The Ultimate Time-Saver",
    excerpt: "Chop, slice, and shred in seconds. Discover how a food processor can revolutionize your meal prep.",
    category: "Appliances",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: getImage(12),
  },
  {
    slug: "rice-cooker-beyond-rice",
    title: "Rice Cooker: Beyond Just Rice",
    excerpt: "Your rice cooker can do so much more. From oatmeal to cakes, explore unexpected recipes.",
    category: "Recipes",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(13),
  },
  {
    slug: "slow-cooker-comfort-food",
    title: "Slow Cooker Comfort Food: Set It and Forget It",
    excerpt: "Easy, hands-off recipes for your slow cooker. Perfect for busy weeknights and meal prep.",
    category: "Recipes",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(14),
  },
  {
    slug: "espresso-machine-home",
    title: "Bringing the Cafe Home: Espresso Machines Reviewed",
    excerpt: "From manual to automatic, we review the best home espresso machines for coffee lovers.",
    category: "Appliances",
    date: "Feb 19, 2026",
    readTime: "10 min read",
    image: getImage(0),
  },
  {
    slug: "coffee-grinder-fresh",
    title: "Freshly Ground Coffee: Why a Grinder Matters",
    excerpt: "Upgrade your morning coffee with a quality grinder. We explain burr vs. blade and top picks.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(1),
  },
  {
    slug: "toaster-oven-versatility",
    title: "Toaster Oven: The Versatile Countertop Appliance",
    excerpt: "More than just toast! Discover recipes and tips for getting the most from your toaster oven.",
    category: "Appliances",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(2),
  },
  {
    slug: "mandoline-slicer-precision",
    title: "Mandoline Slicer: Precision Slicing Made Easy",
    excerpt: "Get restaurant-quality cuts at home. Our guide to using and choosing a mandoline slicer.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(3),
  },
  {
    slug: "kitchen-scale-baking-precision",
    title: "Why Every Baker Needs a Kitchen Scale",
    excerpt: "Ditch the measuring cups for precision baking. We review top kitchen scales for accuracy.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(4),
  },
  {
    slug: "salt-pepper-grinders",
    title: "Salt and Pepper Grinders: Elevate Your Seasoning",
    excerpt: "Freshly ground seasoning makes a difference. Our top picks for grinders and why they matter.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: getImage(5),
  },
  {
    slug: "whisk-buying-guide",
    title: "Whisk Buying Guide: Balloon, Flat, and Beyond",
    excerpt: "From beating eggs to mixing batter, find the right whisk for every kitchen task.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(6),
  },
  {
    slug: "tongs-kitchen-essential",
    title: "Tongs: The Ultimate Kitchen Tool",
    excerpt: "Why tongs are the most versatile tool in your kitchen. Our top picks for every use.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: getImage(7),
  },
  {
    slug: "colander-pasta-strainer",
    title: "Colanders and Strainers: Drain with Ease",
    excerpt: "From pasta to rinsed vegetables, find the perfect strainer for your kitchen needs.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(8),
  },
  {
    slug: "mixing-bowls-set",
    title: "Nesting Mixing Bowls: A Kitchen Essential",
    excerpt: "Why every kitchen needs a good set of mixing bowls. Our top picks for size, material, and durability.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(9),
  },
  {
    slug: "rolling-pin-guide",
    title: "Rolling Pin Guide: French, Wood, and Silicone",
    excerpt: "Find the perfect rolling pin for pie crusts, cookies, and more. We compare styles and materials.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(10),
  },
  {
    slug: "baking-sheet-review",
    title: "Baking Sheets Reviewed: Cookie Sheets and Sheet Pans",
    excerpt: "From cookies to roasted veggies, find the best baking sheets for your oven. Aluminum vs. nonstick vs. silicone.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(11),
  },
  {
    slug: "muffin-tin-baking",
    title: "Muffin Tins: Cupcake, Muffin, and Beyond",
    excerpt: "Our guide to muffin tins for cupcakes, muffins, and savory baked goods. Material and size comparisons.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(12),
  },
  {
    slug: "casserole-dish-essentials",
    title: "Casserole Dishes: Comfort Food Essentials",
    excerpt: "From lasagna to enchiladas, find the perfect casserole dish. Glass vs. ceramic vs. cast iron.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(13),
  },
  {
    slug: "pressure-cooker-safety",
    title: "Pressure Cooker Safety: Tips and Best Practices",
    excerpt: "Use your pressure cooker safely and effectively. Expert tips for perfect results every time.",
    category: "Tutorial",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(14),
  },
  {
    slug: "wok-buying-guide",
    title: "Wok Buying Guide: Carbon Steel, Cast Iron, and Nonstick",
    excerpt: "Master stir-fry with the right wok. We compare materials and help you choose the perfect pan.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: getImage(0),
  },
  {
    slug: "grill-pan-indoor",
    title: "Indoor Grill Pans: Year-Round Grilling",
    excerpt: "Get grill marks indoors with the right grill pan. Our top picks for gas, electric, and induction.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(1),
  },
  {
    slug: "sauté-pan-skillet",
    title: "Sauté Pan vs. Skillet: What's the Difference?",
    excerpt: "Understand cookware terminology and choose the right pan for sautéing, frying, and more.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(2),
  },
  {
    slug: "saucepan-essentials",
    title: "Saucepans: The Workhorses of Your Kitchen",
    excerpt: "From sauces to grains, saucepans are kitchen essentials. Our guide to choosing the best ones.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(3),
  },
  {
    slug: "stockpot-soups-stocks",
    title: "Stockpot Guide: Soups, Stocks, and Pasta",
    excerpt: "A good stockpot is a kitchen cornerstone. Find the right size and material for your needs.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(4),
  },
  {
    slug: "knife-sharpener-guide",
    title: "Knife Sharpener Guide: Keep Your Blades Razor Sharp",
    excerpt: "Hone and sharpen your knives like a pro. We review sharpeners from manual to electric.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(5),
  },
  {
    slug: "kitchen-organizer-ideas",
    title: "Kitchen Organization: Maximize Your Space",
    excerpt: "Smart storage solutions for a clutter-free kitchen. Drawer organizers, cabinet systems, and more.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: getImage(6),
  },
  {
    slug: "food-storage-containers",
    title: "Food Storage Containers: Keep Food Fresh Longer",
    excerpt: "From glass to plastic, find the best food storage containers for your kitchen and fridge.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(7),
  },
  {
    slug: "vacuum-sealer-benefits",
    title: "Food Vacuum Sealer: Extend Freshness and Save Money",
    excerpt: "Reduce food waste with vacuum sealing. Our guide to the best countertop and handheld sealers.",
    category: "Appliances",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(8),
  },
  {
    slug: "hand-mixer-vs-stand",
    title: "Hand Mixer vs. Stand Mixer: Which Do You Need?",
    excerpt: "Compare handheld and stand mixers to find the right tool for your baking needs and budget.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(9),
  },
  {
    slug: "electric-kettle-guide",
    title: "Electric Kettles: Fast Boiling for Tea and More",
    excerpt: "Speed up your morning routine with an electric kettle. We review top picks for temperature control and capacity.",
    category: "Appliances",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(10),
  },
  {
    slug: "cheese-grater-types",
    title: "Cheese Graters: Box, Rotary, and Microplane Compared",
    excerpt: "From parmesan to cheddar, find the right grater for every cheese. Our comprehensive guide.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(11),
  },
  {
    slug: "pizza-cutter-guide",
    title: "Pizza Cutters: Wheel vs. Rocking Blade",
    excerpt: "Get perfect pizza slices every time. We compare pizza cutter styles and top picks.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: getImage(12),
  },
  {
    slug: "garlic-press-utility",
    title: "Garlic Press: Is It Worth the Counter Space?",
    excerpt: "Mince garlic in seconds with a press. Our review of top models and alternatives.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: getImage(13),
  },
  {
    slug: "salad-spinner-review",
    title: "Salad Spinners: Dry Your Greens in Seconds",
    excerpt: "Get perfectly dry salad greens with a spinner. We review the best for every budget.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(14),
  },
  {
    slug: "lazy-susan-turntable",
    title: "Lazy Susan Turntables: Organize Your Cabinets",
    excerpt: "Maximize corner cabinet space with a rotating turntable. Our organizational tips and product picks.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: getImage(0),
  },
  {
    slug: "bread-maker-home",
    title: "Bread Makers: Fresh Bread with Zero Effort",
    excerpt: "Wake up to the smell of fresh bread. Our guide to the best home bread makers.",
    category: "Appliances",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: getImage(1),
  },
  {
    slug: "sous-vide-precision",
    title: "Sous Vide: Precision Cooking at Home",
    excerpt: "Restaurant-quality results with sous vide. Our guide to getting started with precision cooking.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "9 min read",
    image: getImage(2),
  },
  {
    slug: "thermometer-cooking",
    title: "Instant-Read Thermometers: Perfect Temperature Every Time",
    excerpt: "Take the guesswork out of cooking with a reliable thermometer. We review top instant-read models.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: getImage(3),
  },
  {
    slug: "kitchen-timer-digital",
    title: "Digital Kitchen Timers: Never Overcook Again",
    excerpt: "Multiple timers, loud alarms, and smart features. Find the perfect kitchen timer for your cooking.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: getImage(4),
  },
  {
    slug: "trivet-hot-pads",
    title: "Trivets and Hot Pads: Protect Your Counters",
    excerpt: "From silicone to woven, protect surfaces with the right trivets and pot holders.",
    category: "Gadgets",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: getImage(5),
  },
  {
    slug: "best-dutch-oven-recipes",
    title: "What to Cook in Your Dutch Oven: 15 Essential Recipes",
    excerpt: "From hearty stews to artisan bread, maximize your Dutch oven with these must-try recipes that showcase its versatility.",
    category: "Recipes",
    date: "Mar 10, 2026",
    readTime: "8 min read",
    image: getImage(6),
  },
  {
    slug: "kitchen-organization-hacks-2026",
    title: "Kitchen Organization Hacks: Maximize Your Space",
    excerpt: "Smart storage solutions to organize your kitchen. From drawer dividers to cabinet organizers, we share the best tips.",
    category: "Guide",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    image: getImage(7),
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=900&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Intelligence Hub
          </h1>
          <p className="font-lato text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Data-driven culinary techniques, equipment maintenance protocols, and advanced kitchen analysis.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass-premium bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {post.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="font-lato text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-stone-100 mt-auto">
                  <span>{post.date}</span>
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
