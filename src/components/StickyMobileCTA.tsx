import React from 'react';

interface StickyMobileCTAProps {
    productName: string;
    price?: string;
    affiliateLink: string;
}

export default function StickyMobileCTA({ productName, price, affiliateLink }: StickyMobileCTAProps) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/95 backdrop-blur-md border-t border-emerald-900/30 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] animate-slide-up">
            <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
                <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm truncate">{productName}</p>
                    {price && <p className="text-emerald-400 font-bold text-xs mt-0.5">{price}</p>}
                </div>
                <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:from-emerald-500 hover:to-teal-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 shadow-lg"
                >
                    Check Price
                </a>
            </div>
        </div>
    );
}
