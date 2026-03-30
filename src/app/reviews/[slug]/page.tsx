import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ComparisonTable from "@/components/ComparisonTable";
import ProsCons from "@/components/ProsCons";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import RelatedContent from "@/components/RelatedContent";
import AuthorBio from "@/components/AuthorBio";
import Breadcrumbs from "@/components/Breadcrumbs";
import { supabase, formatDate, Review } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data: review } = await supabase
    .from('reviews')
    .select('title, excerpt, date')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!review) {
    return { title: "Review Not Found" };
  }

  return {
    title: review.title,
    description: review.excerpt,
    openGraph: {
      title: review.title,
      description: review.excerpt,
      type: "article",
      publishedTime: review.date,
      images: [
        {
          url: "https://cookinkitchen.online/images/og-image.jpg",
          alt: review.title,
        },
      ],
    },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [{ data: review }, { data: related }] = await Promise.all([
    supabase
      .from('reviews')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single(),
    supabase
      .from('reviews')
      .select('slug, title, image_url, category')
      .eq('published', true)
      .neq('slug', slug)
      .order('date', { ascending: false })
      .limit(3),
  ])

  if (!review) {
    notFound();
    return null;
  }

  const relatedReviews = (related ?? []) as Pick<Review, 'slug' | 'title' | 'image_url' | 'category'>[]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": review.title.split(":")[0].trim(),
    "description": review.excerpt,
    "image": "https://cookinkitchen.online/images/og-image.jpg",
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "CookinKitchen Intelligence Unit"
      },
      "datePublished": review.date
    }
  };

  const affiliateLink = review.affiliate_link || "#"
  const imageUrl = review.image_url || "/images/reviews/hero-appliances.png"

  return (
    <div className="min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[
          { label: 'Intelligence Hub', href: '/' },
          { label: 'Reviews', href: '/reviews' },
          { label: review.title, href: `/reviews/${review.slug}` }
        ]} />

        <article>
          <div className="flex items-center gap-4 mb-4">
            <Link
              href={`/reviews?category=${encodeURIComponent(review.category)}`}
              className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium hover:bg-emerald-200 transition"
            >
              {review.category}
            </Link>
            <span className="font-lato text-emerald-500 font-bold">★ {review.rating}</span>
            <span className="font-lato text-stone-400 text-sm">{formatDate(review.date)}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-y border-stone-200 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-playfair font-bold text-lg">
                CQ
              </div>
              <div>
                <p className="font-lato font-bold text-stone-900 text-sm m-0">Chef Quentin</p>
                <p className="font-lato text-stone-500 text-xs m-0">Head of Culinary Testing</p>
              </div>
            </div>
            <div className="bg-stone-50 px-3 py-2 rounded text-xs font-lato text-stone-500 md:text-right max-w-xs">
              <span className="font-bold">Affiliate Disclosure:</span> We independently test products. We may earn a commission from purchases made via our links.
            </div>
          </div>

          <h1 className="font-playfair text-4xl text-stone-800 mb-6">
            {review.title}
          </h1>

          <p className="font-lato text-xl text-stone-600 mb-8">
            {review.excerpt}
          </p>

          <ComparisonTable items={[
            {
              name: "Top Recommended Option",
              image: imageUrl,
              badge: "Editor's Choice",
              rating: 4.9,
              price: "$$",
              keyFeature: "Best overall performance in all our tests.",
              affiliateLink
            },
            {
              name: "Best Value Option",
              image: imageUrl,
              badge: "Best Value",
              rating: 4.7,
              price: "$",
              keyFeature: "Excellent entry-level choice with great durability.",
              affiliateLink
            },
            {
              name: "Premium Option",
              image: imageUrl,
              badge: "Premium Pick",
              rating: 4.8,
              price: "$$$",
              keyFeature: "High-end materials and unparalleled reliability.",
              affiliateLink
            }
          ]} />

          <div className="prose prose-stone max-w-none font-lato">
            {review.content.split('\n').map((paragraph: string, i: number) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('## ')) {
                return <h2 key={i} className="font-playfair text-2xl text-stone-800 mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={i} className="font-playfair text-xl text-stone-700 mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
              }
              if (trimmed.startsWith('- ')) {
                return <li key={i} className="ml-4 mb-2">{trimmed.replace('- ', '')}</li>;
              }

              const linkMatch = trimmed.match(/\[(.*?)\]\((.*?)\)/);
              if (linkMatch) {
                const [, text, url] = linkMatch;
                const isAmazon = url.includes('amazon.com') || url.includes('amzn.to');
                const isCTA = text.toLowerCase().includes('shop') || text.toLowerCase().includes('check price') || text.toLowerCase().includes('buy');

                if (isAmazon || isCTA) {
                  return (
                    <div key={i} className="my-10 flex justify-center">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 bg-stone-900 text-white rounded-2xl font-lato font-bold tracking-widest hover:bg-emerald-600 transition-all shadow-xl hover:-translate-y-1 hover:shadow-emerald-900/20 uppercase text-sm group"
                      >
                        {text}
                        <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  );
                }
              }

              return <p key={i} className="mb-4 text-stone-600 leading-relaxed">{trimmed}</p>;
            })}
          </div>

          <ProsCons
            pros={[
              "Exceptional build quality and durability",
              "Consistently outperformed competitors in testing",
              "Ergonomic design prevents fatigue during extended use"
            ]}
            cons={[
              "Premium price point might not suit all budgets",
              "Requires specific care and maintenance",
              "Not dishwasher safe"
            ]}
          />

          <div className="mt-12 bg-stone-100 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-lg text-stone-800 mb-3">
              Where to Buy
            </h3>
            <p className="text-stone-500 text-sm mb-4">
              We may earn a commission when you buy through our links.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-lato font-black tracking-wide hover:bg-emerald-500 transition shadow-lg hover:-translate-y-0.5"
              >
                Check Price on Amazon
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <AuthorBio />
        </article>

        {relatedReviews.length > 0 && (
          <RelatedContent
            title="More Culinary Reviews"
            articles={relatedReviews.map(r => ({
              title: r.title,
              href: `/reviews/${r.slug}`,
              image: r.image_url || "/images/reviews/hero-appliances.png",
              category: r.category
            }))}
          />
        )}
      </div>

      <StickyMobileCTA
        productName={review.title}
        affiliateLink={affiliateLink}
      />
    </div>
  );
}
