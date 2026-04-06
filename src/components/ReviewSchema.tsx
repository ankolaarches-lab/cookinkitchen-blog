"use client";

interface Product {
  name: string;
  price: string;
  rating: number;
  link: string;
}

interface ReviewSchemaProps {
  /** Page title, e.g. "Best Air Fryers 2026" */
  title: string;
  /** Full page description */
  description: string;
  /** URL slug, e.g. "best-air-fryer-2026" */
  slug: string;
  /** ISO date string or readable date */
  datePublished: string;
  /** Optional date modified */
  dateModified?: string;
  /** Image URL path, e.g. "/images/reviews/air-fryer.jpg" */
  image?: string;
  /** Products featured in the review */
  products: Product[];
}

const BASE_URL = "https://cookinkitchen.online";

function parsePrice(priceStr: string): number {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ""));
}

export default function ReviewSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
  products,
}: ReviewSchemaProps) {
  // ItemList for the "best of" roundup
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: `${BASE_URL}/reviews/${slug}`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        url: product.link,
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: product.rating,
            bestRating: 5,
            worstRating: 1,
          },
          author: {
            "@type": "Organization",
            name: "CookinKitchen",
          },
        },
        offers: {
          "@type": "Offer",
          price: parsePrice(product.price),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: product.link,
        },
      },
    })),
  };

  // Article schema for the review page itself
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/reviews/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    ...(image && { image: `${BASE_URL}${image}` }),
    author: {
      "@type": "Organization",
      name: "CookinKitchen",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CookinKitchen",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
