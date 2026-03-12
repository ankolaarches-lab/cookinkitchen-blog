import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Wooden Kitchen Utensils 2026 - Natural & Durable Cookware Tools',
  description: 'Discover the best wooden kitchen utensils for your kitchen. We tested top-rated wooden spoons, spatulas, and more for durability and performance.',
};

const products = [
  {
    name: 'CAROTE Wooden Kitchen Utensils Set',
    description: 'Acacia wood 8-piece set, perfect for nonstick cookware. Smooth finish, long-lasting.',
    price: '$24.99',
    rating: 4.7,
    reviews: '15,000+',
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop",
    amazonLink: 'https://www.amazon.com/s?k=CAROTE+Wooden+Kitchen+Utensils?tag=cookinkitchen-20',
    pros: ['Acacia wood durable', '8 pieces included', 'Smooth finish', 'Great value'],
    cons: ['Needs occasional oiling'],
  },
  {
    name: 'Zulay Kitchen 6-Piece Wooden Spoons',
    description: 'Premium teak wood spoons with soft comfort-grip. Non-stick friendly and easy to clean.',
    price: '$29.99',
    rating: 4.8,
    reviews: '8,000+',
    image: "https://images.unsplash.com/photo-1514986888952-c8f3ef7e8f64?w=600&h=400&fit=crop",
    amazonLink: 'https://www.amazon.com/s?k=Zulay+Kitchen+6+Piece+Wooden+Spoons?tag=cookinkitchen-20',
    pros: ['Teak wood premium', 'Comfort grip', 'Excellent quality'],
    cons: ['Higher price point'],
  },
  {
    name: 'Chef Craft Wooden Utensil Set',
    description: '4-piece bamboo set including Turner, Spoon, Slotted Spoon, and Fork. Budget-friendly.',
    price: '$14.99',
    rating: 4.5,
    reviews: '12,000+',
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&h=400&fit=crop",
    amazonLink: 'https://www.amazon.com/s?k=Chef+Craft+Wooden+Cooking+Utensil?tag=cookinkitchen-20',
    pros: ['Budget-friendly', 'Bamboo eco-friendly', '4 essential pieces'],
    cons: ['Bamboo less durable than hardwood'],
  },
  {
    name: 'OXO Good Grips Wooden Turner',
    description: 'Single acacia wood spatula with stainless steel handle. Perfect for flipping delicate foods.',
    price: '$12.99',
    rating: 4.6,
    reviews: '5,000+',
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
    amazonLink: 'https://www.amazon.com/s?k=OXO+Good+Grips+Wooden+Turner?tag=cookinkitchen-20',
    pros: ['Ergonomic handle', 'Sturdy construction', 'OXO quality'],
    cons: ['Single piece only'],
  },
  {
    name: 'Woodenhouse Teak Wood Utensil Set',
    description: 'Premium 5-piece teak set. Restaurant quality for home kitchens.',
    price: '$39.99',
    rating: 4.8,
    reviews: '3,500+',
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
    amazonLink: 'https://www.amazon.com/s?k=Woodenhouse+Teak+Wood+Utensil?tag=cookinkitchen-20',
    pros: ['Premium teak', 'Restaurant quality', 'Beautiful design'],
    cons: ['Premium price'],
  },
];

export default function BestWoodenKitchenUtensils() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="bg-amber-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Wooden Kitchen Utensils 2026
          </h1>
          <p className="text-xl text-amber-100">
            Natural, durable, and gentle on your cookware. We tested the top wooden utensils for every kitchen.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image placeholder */}
                  <div className="w-full md:w-48 h-48 bg-stone-100 rounded-xl overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                      <span className="text-2xl">⭐ {product.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-amber-700">{product.price}</span>
                      <span className="text-gray-500">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.pros.map((pro, i) => (
                        <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          ✓ {pro}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guide */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Wooden Utensils?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-amber-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Gentle on Cookware</h3>
              <p className="text-gray-600">Wood won't scratch or damage your nonstick pans, extending their life.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Natural & Sustainable</h3>
              <p className="text-gray-600">Bamboo and wood are renewable resources, making them eco-friendly choices.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Heat Resistant</h3>
              <p className="text-gray-600">Wood doesn't conduct heat like metal, staying cool even when cooking at high temps.</p>
            </div>
          </div>
        </div>

        {/* Back to reviews */}
        <div className="mt-12 text-center">
          <Link href="/reviews" className="text-amber-700 hover:underline text-lg">
            ← Back to All Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
