import { MetadataRoute } from 'next';

const baseUrl = 'https://cookinkitchen.online';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/buying-guides`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/how-we-test`, lastModified: new Date(), priority: 0.7 },
  ];

  // Review pages - these are the main content
  const reviewPages = [
    'best-air-fryer-2026', 'best-air-fryer-accessories', 'best-air-fryers-under-100',
    'best-baking-mats', 'best-baking-sheets-2026', 'best-blenders-2026', 'best-bread-makers',
    'best-carbon-steel-wok', 'best-casserole-dishes', 'best-casserole-dishes-2026',
    'best-cast-iron-care', 'best-cast-iron-skillet', 'best-cast-iron-skillet-2026',
    'best-cheese-graters', 'best-chef-knives-home-cooks', 'best-coffee-grinder',
    'best-coffee-grinders-2026', 'best-colanders', 'best-cookie-sheets', 'best-cookware-sets-2026',
    'best-cutting-boards-2026', 'best-drip-coffee-makers-2026', 'best-dutch-ovens',
    'best-dutch-ovens-2026', 'best-dutch-ovens-for-bread-baking', 'best-dutch-ovens-under-100',
    'best-egg-cookers', 'best-electric-can-openers-2026', 'best-electric-griddles-2026',
    'best-electric-kettle-2026', 'best-electric-skillets-2026', 'best-espresso-machines-under-500',
    'best-food-dehydrators-2026', 'best-food-processor', 'best-food-storage-containers',
    'best-food-vacuum-sealer', 'best-garlic-presses', 'best-grill-pans', 'best-grill-presses-2026',
    'best-hand-mixers', 'best-immersion-blenders', 'best-immersion-blenders-2026',
    'best-instant-pot', 'best-instant-read-meat-thermometer', 'best-instant-read-thermometers',
    'best-jar-openers', 'best-kitchen-faucets-2026', 'best-kitchen-gadgets-2026',
    'best-kitchen-knife-set', 'best-kitchen-organizers', 'best-kitchen-scales',
    'best-kitchen-scales-2026', 'best-kitchen-shears', 'best-kitchen-timers-2026',
    'best-kitchen-utensil-set', 'best-kitchen-utensils-2026', 'best-knife-blocks',
    'best-knife-sharpeners', 'best-knife-storage-2026', 'best-knives-under-50',
    'best-lazy-susans', 'best-mandoline-slicers-2026', 'best-mandolines', 'best-measuring-cups',
    'best-meat-slicers-2026', 'best-mixing-bowls', 'best-muffin-tins', 'best-non-toxic-baking-sheets',
    'best-nonstick-pan', 'best-oil-dispensers-sprayers', 'best-oven-mitts-2026',
    'best-pasta-makers-2026', 'best-pizza-cutters', 'best-pizza-ovens', 'best-pizza-stones-2026',
    'best-pressure-cookers', 'best-rice-cooker', 'best-rice-cookers-2026', 'best-rolling-pins',
    'best-salad-spinners', 'best-salt-pepper-grinders', 'best-sheet-pans',
    'best-silicone-stretch-lids', 'best-slow-cookers', 'best-smart-thermomix', 'best-sous-vide',
    'best-spatulas', 'best-spice-racks-2026', 'best-stand-mixers', 'best-stanley-tumblers',
    'best-stockpots-2026', 'best-toaster-ovens', 'best-toasters-2026', 'best-tongs',
    'best-waffle-makers-2026', 'best-whisks', 'best-woks', 'best-wooden-kitchen-utensils',
    'best-yeti-rambler-tumblers', 'cast-iron-vs-carbon-steel', 'cosori-air-fryer',
    'instant-pot-vs-ninja-foodi', 'kitchenaid-vs-cuisinart-stand-mixer', 'ninja-air-fryer-pro-6-in-1',
  ];

  const reviewUrls = reviewPages.map((slug) => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  // Blog posts
  const blogPosts = [
    'instant-read-thermometer-guide-2026', 'air-fryer-accessories-guide', 'kitchen-shears-essential-guide',
    'chefs-knives-how-to-choose', 'dutch-ovens-bread-baking-braising', 'cast-iron-care-seasoning-guide',
    'air-fryer-recipes-tips', 'instant-pot-beginner-guide', 'stand-mixer-baking-basics',
    'knives-101-everything-you-need-to-know', 'nonstick-cookware-pros-cons', 'cutting-board-guide-materials',
    'blender-buying-guide', 'measuring-cups-spoons-accuracy', 'spatula-spoon-set-essentials',
    'food-processor-time-saver', 'rice-cooker-recipes-beyond-rice', 'sous-vide-precision-cooking',
    'kitchen-organization-2026', 'best-kitchen-timer-2026', 'air-fryer-beginners-guide',
    'espresso-machine-guide', 'coffee-grinder-types', 'knives-101-beginners', 'cooking-terms-glossary',
    'kitchen-conversion-chart', 'temperature-guide-meat', 'kitchen-safety-tips',
    'spring-kitchen-organization', 'vegetable-cutting-techniques', 'pizza-stone-vs-steel',
    'cast-iron-troubleshooting', 'knife-skills-basics', 'herb-storage-guide',
    'air-fryer-maintenance-tips', 'stand-mixer-attachments', 'nonstick- cookware-care',
    'kitchen-measurement-basics', 'bread-maker-home', 'sous-vide-precision',
    'thermometer-cooking', 'kitchen-timer-digital', 'trivet-hot-pads',
    'best-dutch-oven-recipes', 'kitchen-organization-hacks-2026',
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...reviewUrls, ...blogUrls];
}
