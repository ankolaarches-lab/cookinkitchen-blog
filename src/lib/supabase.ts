import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export type BlogPost = {
  id: string
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
}

export type Review = {
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
