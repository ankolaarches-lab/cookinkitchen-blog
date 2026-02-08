import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    if (!postData) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#0f172a] text-slate-300 pb-20">
            {/* Article Header */}
            <header className="relative py-24 px-6 border-b border-slate-800 bg-slate-900/50">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Intelligence Feed
                    </Link>
                    <div className="text-emerald-400 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                        Ref: {postData.date} // {postData.id}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-100 leading-tight mb-8">
                        {postData.title}
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500 font-mono text-sm">
                        <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">AUTHOR: AI_AGENT_COPYWRITER</span>
                        <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">CLEARANCE: PUBLIC</span>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                <div
                    className="prose prose-invert prose-lg max-w-none
          prose-headings:text-slate-100 prose-headings:font-bold
          prose-p:text-slate-400 prose-p:leading-relaxed
          prose-strong:text-blue-400 prose-strong:font-semibold
          prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
          prose-li:text-slate-400"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

                {/* Affiliate Disclosure */}
                <div className="mt-20 p-8 bg-slate-800/30 border border-slate-700 rounded-2xl">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Affiliate Intelligence Note</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic">
                        CookInKitchen is an automated intelligence platform. When you acquire items through our analyzed links,
                        we may earn a commission. This helps sustain our multi-agent research clusters and specialized culinary AI.
                    </p>
                </div>
            </main>
        </article>
    );
}
