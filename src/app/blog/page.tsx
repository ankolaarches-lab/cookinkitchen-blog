import Link from "next/link";

const blogPosts = [
  {
    slug: "chefs-knives-how-to-choose",
    title: "How to Choose the Perfect Chef's Knife: A Complete Guide",
    excerpt: "Master the art of selecting your ideal chef's knife. Learn about blade materials, handle types, size options, and find the perfect knife for your cooking style.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&h=400&fit=crop",
  },
  {
    slug: "dutch-ovens-bread-baking-braising",
    title: "Dutch Oven Cooking: Bread Baking, Braising, and Beyond",
    excerpt: "Discover why a Dutch oven is the most versatile pot in your kitchen. From artisan bread to fall-off-the-bone braised meats, we cover everything.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop",
  },
  {
    slug: "cast-iron-care-seasoning-guide",
    title: "Cast Iron Care: The Ultimate Seasoning and Cleaning Guide",
    excerpt: "Learn how to season, clean, and maintain your cast iron cookware for a lifetime of perfect cooking. Expert tips inside.",
    category: "Tutorial",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "air-fryer-recipes-tips",
    title: "Air Fryer Recipes and Tips for Crispy, Healthy Cooking",
    excerpt: "Get the most out of your air fryer with our expert tips and delicious recipe ideas. Healthier fried food starts here.",
    category: "Recipes",
    date: "Feb 19, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=800&h=400&fit=crop",
  },
  {
    slug: "instant-pot-beginner-guide",
    title: "Instant Pot Beginner Guide: Master Your Electric Pressure Cooker",
    excerpt: "New to Instant Pot? Our comprehensive beginner guide covers everything from basic functions to delicious first recipes.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=400&fit=crop",
  },
  {
    slug: "stand-mixer-baking-basics",
    title: "Stand Mixer Baking Basics: From Dough to Delicious",
    excerpt: "Unlock the full potential of your stand mixer with our baking guide. Perfect breads, cookies, and more await.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "knife-sets-what-to-look-for",
    title: "Knife Sets: What to Look for When Buying",
    excerpt: "Complete guide to choosing the best knife set for your kitchen. We cover essential knives, quality indicators, and top recommendations.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&h=400&fit=crop",
  },
  {
    slug: "food-processor-time-saving-tips",
    title: "Food Processor Time-Saving Tips and Techniques",
    excerpt: "Transform your meal prep with these food processor tips. Chop, slice, and blend faster than ever before.",
    category: "Tutorial",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop",
  },
  {
    slug: "rice-cooker-recipes-beyond-rice",
    title: "Rice Cooker Recipes: Cooking Beyond Rice",
    excerpt: "Your rice cooker can do so much more! Discover surprising recipes from oatmeal to soups and everything in between.",
    category: "Recipes",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "sous-vide-precision-cooking",
    title: "Sous Vide Cooking: Precision at Home",
    excerpt: "Master sous vide cooking for perfectly cooked meals every time. Learn about equipment, techniques, and delicious recipes.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=400&fit=crop",
  },
  {
    slug: "coffee-grinders-fresh-coffee",
    title: "Coffee Grinders: The Secret to Fresh Coffee",
    excerpt: "Discover why grinding your own coffee beans transforms your morning cup. We compare grinders and share brewing tips.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop",
  },
  {
    slug: "electric-kettles-coffee-tea",
    title: "Electric Kettles: Perfect for Coffee and Tea",
    excerpt: "Elevate your hot beverage game with the right electric kettle. Temperature control and speed matter.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop",
  },
  {
    slug: "food-storage-containers-organization",
    title: "Food Storage Containers: Kitchen Organization Guide",
    excerpt: "Organize your pantry and keep food fresh with the best storage containers. A tidy kitchen starts here.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909112-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "vacuum-sealers-meal-prep",
    title: "Vacuum Sealers: Meal Prep Game Changer",
    excerpt: "Extend food freshness and simplify meal prep with vacuum sealing. Learn about equipment and best practices.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "nonstick-pans-care",
    title: "Nonstick Pan Care: Making Your Pans Last",
    excerpt: "Protect your investment with proper nonstick pan care. Tips for cleaning, storage, and extending pan life.",
    category: "Tutorial",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop",
  },
  {
    slug: "carbon-steel-wok-stir-fry",
    title: "Carbon Steel Wok: Perfect Stir Fry at Home",
    excerpt: "Master wok cooking with a carbon steel pan. From seasoning to high-heat techniques, become a stir-fry pro.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "bakeware-essentials",
    title: "Bakeware Essentials: Sheets, Muffin Tins & More",
    excerpt: "Build your baking arsenal with essential bakeware. We cover baking sheets, muffin tins, and must-have items.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "kitchen-utensils-essentials",
    title: "Kitchen Utensils: Essential Tools Every Cook Needs",
    excerpt: "Stock your kitchen with essential utensils. From spatulas to ladles, we cover must-have tools for home cooks.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909112-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "knife-blocks-storage",
    title: "Knife Blocks: Safe and Stylish Storage",
    excerpt: "Protect your knives and showcase your style with the right knife block. Options for every kitchen aesthetic.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&h=400&fit=crop",
  },
  {
    slug: "cutting-boards-material-guide",
    title: "Cutting Boards: Material Guide for Every Need",
    excerpt: "Wood, plastic, or bamboo? Find the perfect cutting board for your kitchen with our comprehensive material guide.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "measuring-tools-accuracy",
    title: "Measuring Tools: Precision in Every Recipe",
    excerpt: "Baking success starts with accurate measurements. Learn about cups, spoons, scales, and when each matters.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "mixing-bowls-basics",
    title: "Mixing Bowls: The Foundation of Cooking",
    excerpt: "From mixing batter to serving salads, mixing bowls are kitchen essentials. Find the perfect set for your needs.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "spatulas-silicone-vs-wood",
    title: "Spatulas: Silicone vs Wood - Which is Best?",
    excerpt: "The great spatula debate resolved. Compare silicone and wood spatulas for cooking and baking applications.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "whisks-types-uses",
    title: "Whisks: Types and Their Perfect Uses",
    excerpt: "Not all whisks are created equal. Learn about different types and which is best for beating, folding, and more.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "tongs-kitchen-multitasker",
    title: "Tongs: The Ultimate Kitchen Multitasker",
    excerpt: "Why tongs are the most versatile tool in your kitchen. From flipping meat to tossing salads, discover their potential.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "salt-pepper-fresh-seasoning",
    title: "Salt and Pepper Grinders: Fresh Seasoning Guide",
    excerpt: "Elevate your dishes with freshly ground spices. Learn why it matters and find the perfect grinders.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "mandolines-slice-perfectly",
    title: "Mandolines: Slice Perfectly Every Time",
    excerpt: "Master uniform slicing with a mandoline. From julienne to wavy cuts, achieve professional results at home.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "garlic-presses-worth-it",
    title: "Garlic Presses: Are They Worth It?",
    excerpt: "The great garlic press debate. We explore whether this gadget earns its place in your kitchen.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "pizza-cutters-types",
    title: "Pizza Cutters: Types and Best Uses",
    excerpt: "Wheel vs rocker? Find the perfect pizza cutter for clean slices every time. We compare options.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "cheese-graters-guide",
    title: "Cheese Graters: For Every Type of Cheese",
    excerpt: "From parmesan to cheddar, find the right grater for each cheese. Elevate your cheese dishes.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "colanders-draining-guide",
    title: "Colanders: The Complete Draining Guide",
    excerpt: "Perfect pasta drainage every time. Learn about different colander styles and which is right for you.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "salad-spinners-crisp-greens",
    title: "Salad Spinners: For Crispy Greens",
    excerpt: "Get perfectly dry salad greens with a quality spinner. Reviews and tips for the best results.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "rolling-pins-pastry-basics",
    title: "Rolling Pins: Pastry Basics for Home Bakers",
    excerpt: "Master pie crusts, pastry, and more with the right rolling pin. French taper vs classic - we explain.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "casserole-dishes-one-dish",
    title: "Casserole Dishes: One-Dish Meal Solutions",
    excerpt: "Discover the best casserole dishes for comforting one-pot meals. From lasagna to chicken pot pie.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "lazy-susans-cabinet-organization",
    title: "Lazy Susans: Maximize Cabinet Space",
    excerpt: "Transform cluttered cabinets with a lazy susan. Organize spices, condiments, and more efficiently.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "pizza-ovens-indoor-outdoor",
    title: "Pizza Ovens: Indoor and Outdoor Options",
    excerpt: "Pizza oven buying guide. From countertop to outdoor ovens, make restaurant-quality pizza at home.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "pressure-cookers-fast-meals",
    title: "Pressure Cookers: Fast Meals Made Easy",
    excerpt: "Master pressure cooking for quick, flavorful meals. Tips, tricks, and recipe ideas inside.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "slow-cookers-set-forget",
    title: "Slow Cookers: Set It and Forget It Cooking",
    excerpt: "Embrace convenient slow cooking. From stews to pulled pork, perfect hands-off meals await.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "toaster-ovens-versatile",
    title: "Toaster Ovens: The Versatile Countertop Appliance",
    excerpt: "More than just toast! Discover the many uses for your toaster oven, from baking to roasting.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "hand-mixers-lightweight",
    title: "Hand Mixers: The Lightweight Alternative",
    excerpt: "When a stand mixer is overkill, reach for a hand mixer. Perfect for quick baking tasks and light jobs.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "bread-makers-homemade",
    title: "Bread Makers: Fresh Homemade Bread Daily",
    excerpt: "Wake up to the smell of fresh bread. Learn about bread makers and simple recipes to get started.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=400&fit=crop",
  },
  {
    slug: "woks-chinese-cooking",
    title: "Woks: Authentic Chinese Cooking at Home",
    excerpt: "Master wok cooking for authentic Asian dishes. From stir-fry to steaming, unlock versatile techniques.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "grill-pans-indoor-grilling",
    title: "Grill Pans: Indoor Grilling Year-Round",
    excerpt: "Get those grill marks anytime with an indoor grill pan. Perfect for apartments and winter grilling.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "kitchen-scales-baking-precision",
    title: "Kitchen Scales: Baking Precision",
    excerpt: "Why professional bakers rely on scales. Improve your baking accuracy with the right kitchen scale.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "stand-mixer-attachments-guide",
    title: "Stand Mixer Attachments: Expand Your Possibilities",
    excerpt: "Your stand mixer can do more than mix! Discover attachments for pasta, ice cream, and more.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "blender-vs-food-processor",
    title: "Blender vs Food Processor: Which Do You Need?",
    excerpt: "Both are kitchen powerhouses, but for different jobs. We break down when to use each appliance.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "cookware-materials-guide",
    title: "Best Cookware Materials: Cast Iron, Stainless, Carbon Steel, Nonstick",
    excerpt: "Compare cookware materials to find your perfect pans. We break down pros, cons, and best uses.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "kitchen-organization-tips",
    title: "Kitchen Organization Tips for a Clutter-Free Space",
    excerpt: "Transform your kitchen with smart organization strategies. Maximize space and find everything easily.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "must-have-kitchen-gadgets",
    title: "Must-Have Kitchen Gadgets for Every Cook",
    excerpt: "Upgrade your cooking with essential gadgets. Our curated list of must-have tools for home kitchens.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
  {
    slug: "kitchen-essentials-beginners",
    title: "Kitchen Essentials for Beginners: Start Cooking Today",
    excerpt: "New to cooking? Start here with the essential tools and ingredients every beginner needs in their kitchen.",
    category: "Guide",
    date: "Feb 19, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=400&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Kitchen Blog
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Guides, tutorials, and recipes to make you a better home cook.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-300 transform hover:-translate-y-2 cursor-pointer"
              style={{animationDelay: `${idx * 0.05}s`}}
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center relative overflow-hidden h-40 flex items-center justify-center">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg text-stone-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-bold group-hover:translate-x-1 transition-transform duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Get Kitchen Tips Weekly!
          </h3>
          <p className="text-amber-100 mb-6 max-w-lg mx-auto">
            Join 10,000+ home cooks getting our best tips and recipes every week.
          </p>
          <div className="flex gap-2 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-lg text-stone-900 w-full max-w-xs"
            />
            <button className="bg-stone-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-stone-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
