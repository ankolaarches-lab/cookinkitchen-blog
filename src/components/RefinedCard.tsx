import Link from "next/link";
import Image from "next/image";

interface RefinedCardProps {
    title: string;
    excerpt?: string;
    image: string;
    category?: string;
    rating?: number;
    slug: string;
    href?: string;
    badge?: string;
    price?: string;
    date?: string;
}

export default function RefinedCard({
    title,
    excerpt,
    image,
    category,
    rating,
    slug,
    href,
    badge,
    price,
    date,
}: RefinedCardProps) {
    const targetHref = href || `/reviews/${slug}`;

    return (
        <Link
            href={targetHref}
            className="group block h-full"
        >
            <article className="glass-premium h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-emerald-500/10 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-white/50">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {badge && (
                        <div className="absolute top-4 left-4">
                            <span className="bg-gray-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
                                {badge}
                            </span>
                        </div>
                    )}
                    {category && (
                        <div className="absolute top-4 right-4 z-10">
                            <Link
                                href={`/reviews?category=${encodeURIComponent(category)}`}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-emerald-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition"
                            >
                                {category}
                            </Link>
                        </div>
                    )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                        {date && <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{date}</span>}
                        {rating && (
                            <div className="flex items-center gap-1.5">
                                <span className="text-emerald-500 font-black text-sm">★</span>
                                <span className="text-[12px] font-bold text-gray-700">{rating}</span>
                            </div>
                        )}
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors leading-tight">
                        {title}
                    </h3>

                    {excerpt && (
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
                            {excerpt}
                        </p>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                        {price ? (
                            <span className="text-lg font-black text-gray-900">{price}</span>
                        ) : (
                            <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600">
                                Analysis Report
                            </span>
                        )}
                        <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
