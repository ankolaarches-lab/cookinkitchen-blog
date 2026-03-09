import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AuthorBioProps {
    name?: string;
    title?: string;
    bio?: string;
    imageUrl?: string;
}

export default function AuthorBio({
    name = "Chef Quentin",
    title = "Head of Culinary Testing",
    bio = "With over 15 years in Michelin-starred kitchens and 5 years rigorously testing equipment for Culinary Intelligence, Chef Quentin brings unparalleled expertise to every review.",
    imageUrl = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop"
}: AuthorBioProps) {
    return (
        <div className="my-16 bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 scale-110 -z-10"></div>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-2xl font-black text-slate-900">{name}</h3>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest border border-emerald-200">
                            Expert
                        </span>
                    </div>
                    <p className="font-bold text-emerald-700 text-sm tracking-wide uppercase mb-4">
                        {title}
                    </p>
                    <p className="font-lato text-slate-600 leading-relaxed max-w-2xl mb-6">
                        {bio}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                        <Link
                            href="/how-we-test"
                            className="font-bold text-slate-900 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            View Testing Methodology
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
