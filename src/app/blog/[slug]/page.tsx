import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase, formatDate, BlogPost } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex mb-8 text-sm font-medium tracking-wide">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <span className="mx-2 text-stone-400">/</span>}
            <Link
              href={item.href}
              className={`${
                index === items.length - 1
                  ? "text-emerald-600 font-bold"
                  : "text-stone-500 hover:text-stone-800 transition-colors"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function RelatedContent({ title, articles }: { title: string; articles: any[] }) {
  return (
    <div className="mt-24 border-t border-stone-200 pt-16">
      <h2 className="font-playfair text-3xl text-stone-800 mb-10">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">
              {article.category}
            </span>
            <h3 className="font-playfair text-xl text-stone-800 group-hover:text-emerald-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, date, image_url')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [post.image_url],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const [{ data: post }, { data: related }] = await Promise.all([
    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single(),
    supabase
      .from('blog_posts')
      .select('slug, title, image_url, category')
      .eq('published', true)
      .neq('slug', slug)
      .order('date', { ascending: false })
      .limit(3),
  ])

  if (!post) {
    notFound();
    return null;
  }

  const relatedPosts = (related ?? []) as Pick<BlogPost, 'slug' | 'title' | 'image_url' | 'category'>[]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-6">
        <Breadcrumbs items={[
          { label: 'Intelligence Hub', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` }
        ]} />

        <article className="glass-premium bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="relative h-80 bg-slate-900">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-10 left-0 right-0 px-8 md:px-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg shadow-emerald-900/20">
                  {post.category}
                </span>
                <span className="text-emerald-50 text-sm font-medium tracking-wide">{post.read_time}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-stone prose-lg max-w-none font-lato text-slate-600 prose-headings:font-playfair prose-headings:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
              {post.content.split('\n').map((paragraph: string, i: number) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith('## ')) {
                  return <h2 key={i} className="text-3xl font-black mt-12 mb-6 tracking-tight text-slate-900">{trimmed.replace('## ', '')}</h2>;
                }
                if (trimmed.startsWith('### ')) {
                  return <h3 key={i} className="text-xl font-bold mt-8 mb-4 border-b border-emerald-100 pb-2 inline-block text-slate-800">{trimmed.replace('### ', '')}</h3>;
                }
                if (trimmed.startsWith('- ')) {
                  return <li key={i} className="ml-4 mb-2 list-none flex items-start gap-2">
                    <span className="text-emerald-500 mt-1.5">•</span>
                    <span>{trimmed.replace('- ', '')}</span>
                  </li>;
                }
                if (trimmed.match(/^\d+\./)) {
                  return <p key={i} className="font-bold text-slate-800 mt-6 mb-2">{trimmed}</p>;
                }

                const linkMatch = trimmed.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (linkMatch) {
                  const [, text, url] = linkMatch;
                  const isAmazon = url.includes('amazon.com') || url.includes('amzn.to');
                  const isShop = text.toLowerCase().includes('shop') || text.toLowerCase().includes('check price') || text.toLowerCase().includes('buy');

                  if (isAmazon || isShop) {
                    return (
                      <div key={i} className="my-10 flex justify-center">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-600 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300 no-underline text-base uppercase tracking-[0.1em] shadow-xl group"
                        >
                          <span className="mr-2">{text}</span>
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    );
                  }

                  if (url.startsWith('/')) {
                    return (
                      <p key={i} className="ml-4 mb-2 flex items-center gap-2">
                        <span className="text-emerald-500">→</span>
                        <Link href={url} className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition-colors decoration-2 underline-offset-4">
                          {text}
                        </Link>
                      </p>
                    );
                  }
                }

                return <p key={i} className="mb-6 leading-relaxed text-slate-600">{trimmed}</p>;
              })}
            </div>

            <div className="mt-16 p-10 bg-slate-950 rounded-[2rem] border border-emerald-900/30 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/kitchen/8.jpg')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Upgrade Your Arsenal</h3>
                <p className="text-emerald-50/70 mb-8 font-medium">Equip your kitchen with the exact gear our analysts recommend.</p>
                <a
                  href={`https://www.amazon.com/s?k=${encodeURIComponent(post.title)}&tag=provenpantry3-20`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-10 py-4 rounded-xl font-bold hover:from-emerald-500 hover:to-teal-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-sm uppercase tracking-widest"
                >
                  Acquire Equipment
                </a>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-20 pt-10 border-t border-stone-100">
          <h3 className="font-playfair text-2xl text-stone-800 mb-8 font-bold">Related Intelligence</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/reviews" className="block bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all hover:-translate-y-1">
              <span className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em] mb-2 block">Database</span>
              <h4 className="font-bold text-stone-900 text-lg">All Kitchen Reviews</h4>
              <p className="text-stone-500 text-sm mt-3 leading-relaxed">Access our complete vault of in-depth product comparisons.</p>
            </Link>
            <Link href="/reviews/best-dutch-ovens" className="block bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all hover:-translate-y-1">
              <span className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em] mb-2 block">Top Rated</span>
              <h4 className="font-bold text-stone-900 text-lg">Best Dutch Ovens</h4>
              <p className="text-stone-500 text-sm mt-3 leading-relaxed">Performance testing results for the market leaders.</p>
            </Link>
            <Link href="/reviews/best-chef-knives-home-cooks" className="block bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all hover:-translate-y-1">
              <span className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em] mb-2 block">Essential</span>
              <h4 className="font-bold text-stone-900 text-lg">Best Chef's Knives</h4>
              <p className="text-stone-500 text-sm mt-3 leading-relaxed">The only three knives a home cook truly needs.</p>
            </Link>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <RelatedContent
            title="More from the Intelligence Hub"
            articles={relatedPosts.map(p => ({
              title: p.title,
              href: `/blog/${p.slug}`,
              image: p.image_url,
              category: p.category
            }))}
          />
        )}
      </div>
    </div>
  );
}
