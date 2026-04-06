// Local data types and formatters (Supabase unavailable - using blogPosts.ts data)
import { blogPosts } from "@/data/blogPosts";

export function formatDate(dateStr: string): string {
  // Handle both "Mar 23, 2026" and "2026-03-23" formats
  try {
    if (dateStr.includes(',')) {
      return dateStr; // Already formatted
    }
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return dateStr;
  }
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  read_time: string
  image_url: string
  content: string
  published: boolean
  created_at: string
  amazonLink?: string
}

// Transform local blogPosts to BlogPost format
export function getBlogPosts(): BlogPost[] {
  return blogPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    read_time: post.readTime,
    image_url: post.image,
    content: post.content,
    published: true,
    created_at: post.date,
    amazonLink: post.amazonLink
  }))
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return undefined
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    read_time: post.readTime,
    image_url: post.image,
    content: post.content,
    published: true,
    created_at: post.date,
    amazonLink: post.amazonLink
  }
}

export interface Review {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  rating: number
  date: string
  affiliate_link: string
  image_url: string
  content: string
  published: boolean
  created_at: string
}

// Re-export for compatibility - though we use local data
export const supabase = null