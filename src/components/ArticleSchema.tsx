"use client";

interface ArticleSchemaProps {
  /** Article title */
  title: string;
  /** Article description/excerpt */
  description: string;
  /** URL slug, e.g. "air-fryer-recipes-tips" */
  slug: string;
  /** ISO date or readable date */
  datePublished: string;
  /** Optional date modified */
  dateModified?: string;
  /** Image URL path */
  image?: string;
}

const BASE_URL = "https://cookinkitchen.online";

export default function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
