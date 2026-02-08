import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 leading-tight">
            CookInKitchen
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            Intelligence-driven reviews for the modern culinary enthusiast.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-4">
          <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
          Latest Insights
        </h2>

        {allPostsData.length === 0 ? (
          <div className="text-center py-20 bg-slate-800/50 rounded-3xl border border-slate-700">
            <p className="text-slate-500 italic">No insights harvested yet. The agents are researching...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/${id}`} key={id} className="group">
                <article className="h-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-blue-400 text-sm font-medium mb-4 uppercase tracking-widest">{date}</div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-300 transition-colors leading-snug">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-400 mt-auto pt-4 group-hover:translate-x-2 transition-transform">
                    Read Report <span className="text-xl">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 text-center text-slate-500 text-sm tracking-wider uppercase">
        © 2026 CookInKitchen | AI-Powered Culinary Intelligence
      </footer>
    </main>
  );
}
