import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl text-stone-800 mb-6 font-bold">
            The Intelligence Hub
          </h1>
          <p className="font-lato text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Deep-dive guides, expert techniques, and the latest trends 
            shaping the modern kitchen in 2026.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl border border-stone-200 overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-stone-400 text-xs font-bold uppercase tracking-tighter mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="font-playfair text-2xl text-stone-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="font-lato text-stone-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 flex items-center text-emerald-600 font-bold text-sm tracking-wider uppercase group-hover:translate-x-2 transition-transform duration-300">
                  Read Analysis
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / CTA Section */}
        <div className="mt-24 bg-stone-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop')] bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="font-playfair text-3xl md:text-5xl text-white mb-6">
              Join the Culinary Vanguard
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
              Get our biannual intelligence report on kitchen technology 
              and essential culinary techniques.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-emerald-500 transition-colors flex-grow"
              />
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-900/20 active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
