import { Suspense } from "react";
import { supabase, Review } from "@/lib/supabase";
import ReviewsClient from "./ReviewsClient";

export const dynamic = 'force-dynamic';

export default async function ReviewsPage() {
  const { data } = await supabase
    .from('reviews')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false })

  const reviews: Review[] = data ?? []

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
