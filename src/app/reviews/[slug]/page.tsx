import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  // Reviews are now static pages - redirect to static page or 404
  return { title: "Review Not Found" };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Static review pages exist in /src/app/reviews/best-*/
  // This dynamic route is deprecated
  notFound();
}