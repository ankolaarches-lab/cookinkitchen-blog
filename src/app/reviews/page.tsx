import { Suspense } from "react";
import { Review } from "@/lib/supabase";
import ReviewsClient from "./ReviewsClient";

export const dynamic = 'force-dynamic';

// Static reviews data (Supabase unavailable)
const staticReviews: Review[] = [
  {
    id: '1',
    slug: 'best-dutch-ovens',
    title: 'Best Dutch Ovens',
    excerpt: 'We tested the top Dutch ovens to find the best for every budget.',
    category: 'Cookware',
    rating: 4.8,
    date: '2026-03-15',
    affiliate_link: 'https://www.amazon.com/s?k=dutch+oven&tag=cookinkitchen-20',
    image_url: '/images/kitchen/1.jpg',
    content: '',
    published: true,
    created_at: '2026-03-15'
  },
  {
    id: '2',
    slug: 'best-chef-knives-home-cooks',
    title: 'Best Chef\'s Knives for Home Cooks',
    excerpt: 'Our experts tested 15 chef knives to find the perfect blade.',
    category: 'Cutlery',
    rating: 4.9,
    date: '2026-03-10',
    affiliate_link: 'https://www.amazon.com/s?k=chef+knife&tag=cookinkitchen-20',
    image_url: '/images/kitchen/2.jpg',
    content: '',
    published: true,
    created_at: '2026-03-10'
  },
  {
    id: '3',
    slug: 'best-air-fryers-under-100',
    title: 'Best Air Fryers Under $100',
    excerpt: 'Affordable air fryers that deliver crispy results.',
    category: 'Appliances',
    rating: 4.6,
    date: '2026-03-05',
    affiliate_link: 'https://www.amazon.com/s?k=air+fryer&tag=cookinkitchen-20',
    image_url: '/images/kitchen/3.jpg',
    content: '',
    published: true,
    created_at: '2026-03-05'
  }
];

export default async function ReviewsPage() {
  // Use static reviews data (Supabase unavailable)
  const reviews = staticReviews;

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    }>
      <ReviewsClient reviews={reviews} />
    </Suspense>
  );
}
