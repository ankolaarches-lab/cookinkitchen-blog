import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface RelatedArticle {
    title: string;
    href: string;
    image?: string;
    category: string;
}

interface RelatedContentProps {
    articles: RelatedArticle[];
    title?: string;
}

export default function RelatedContent({ articles, title = "You Might Also Like" }: RelatedContentProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <div className="mt-16 pt-12 border-t border-stone-200">
            <h3 className="font-serif text-3xl font-black text-slate-900 mb-8 tracking-tight">
                {title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <Link
                        key={index}
                        href={article.href}
                        className="group glass-premium bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        {article.image && (
                        <div className="relative h-40 bg-slate-100 overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <span className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-md">
                                {article.category}
                            </span>
                        </div>
                        )}
                        {!article.image && (
                        <div className="relative h-40 bg-slate-100 overflow-hidden flex items-center justify-center">
                            <span className="bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-md">
                                {article.category}
                            </span>
                        </div>
                        )}
                        <div className="p-5 flex flex-col flex-grow">
                            <h4 className="font-serif text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                                {article.title}
                            </h4>
                            <div className="mt-auto pt-4 flex items-center justify-between text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
                                <span>Read Article</span>
                                <span>→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
