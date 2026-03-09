import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How We Test | Culinary Intelligence Protocol',
    description: 'Discover the rigorous data-driven methodology Behind Culinary Intelligence reviews. We spend hundreds of hours in our lab testing kitchen gear so you don\'t have to.',
};

export default function HowWeTestPage() {
    return (
        <div className="min-h-screen bg-stone-50">
            <header className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-stone-800">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=900&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute inset-0 mesh-gradient opacity-30"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 font-bold text-xs tracking-widest uppercase mb-6">
                        Methodology
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                        Our Testing Protocol
                    </h1>
                    <p className="font-lato text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We don't just cook. We analyze, measure, and stress-test kitchen equipment in our controlled lab environment to bring you data-driven recommendations.
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-stone prose-lg max-w-none font-lato text-slate-600 prose-headings:font-playfair prose-headings:text-slate-900">
                    <p className="text-xl leading-relaxed text-slate-700 font-medium mb-12">
                        At Culinary Intelligence, we believe that choosing the right kitchen equipment should be based on objective data, not marketing hype. Our rigorous testing methodology ensures that every product we recommend has survived hundreds of hours of real-world and controlled lab testing.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16 not-prose">
                        <div className="glass-premium bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 font-bold text-xl">
                                1
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Market Analysis</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Before testing begins, our analysts scour the market, parsing through thousands of user reviews, specs, and price points to select the top contenders in a category.
                            </p>
                        </div>

                        <div className="glass-premium bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 font-bold text-xl">
                                2
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Lab Stress-Testing</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Products enter our test kitchen where they are subjected to standardized, highly repeatable tests designed to push them to their mechanical and thermal limits.
                            </p>
                        </div>

                        <div className="glass-premium bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 font-bold text-xl">
                                3
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Real-World Application</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Lab data only tells half the story. Our chefs use the equipment in daily meal prep for weeks to evaluate ergonomics, cleaning difficulty, and overall UX.
                            </p>
                        </div>

                        <div className="glass-premium bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 font-bold text-xl">
                                4
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Data Synthesis</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We compile the quantitative lab data and qualitative chef feedback into a proprietary scoring matrix to determine our "Top Pick" and "Best Value" winners.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-4xl font-black mt-16 mb-8 tracking-tight">How We Remain Unbiased</h2>
                    <p>
                        Trust is our most valuable asset. To maintain complete editorial independence:
                    </p>
                    <ul>
                        <li><strong>We buy our own gear:</strong> We purchase all the products we test at retail price. We do not accept free review units from manufacturers.</li>
                        <li><strong>No sponsored content:</strong> You cannot pay for a favorable review on Culinary Intelligence. Our recommendations are strictly based on test results.</li>
                        <li><strong>Blind testing:</strong> Whenever possible, we obscure branding during the qualitative testing phases to prevent brand bias from influencing our chefs.</li>
                    </ul>

                    <div className="bg-slate-900 text-white p-10 rounded-3xl mt-16 text-center relative overflow-hidden shadow-xl border border-emerald-900/50">
                        <div className="absolute inset-0 mesh-gradient opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="font-serif text-3xl font-bold mb-4 !text-white !mt-0">Ready to Upgrade?</h2>
                            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                                Explore our data-backed recommendations and find the exact tools you need to elevate your cooking.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/reviews" className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-500 transition-colors uppercase tracking-wider text-sm">
                                    View Latest Reviews
                                </Link>
                                <Link href="/buying-guides" className="bg-slate-800 text-slate-200 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-700 transition-colors uppercase tracking-wider text-sm border border-slate-700">
                                    Read Buying Guides
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
