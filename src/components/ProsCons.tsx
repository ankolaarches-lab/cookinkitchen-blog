import React from "react";

export default function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
    return (
        <div className="grid md:grid-cols-2 gap-4 my-8">
            {/* Pros Container */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6">
                <h4 className="font-lato font-black text-emerald-800 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-200 text-emerald-700">✓</span>
                    The Good
                </h4>
                <ul className="space-y-3">
                    {pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-lato text-emerald-900 text-sm leading-relaxed">{pro}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Cons Container */}
            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
                <h4 className="font-lato font-black text-red-800 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-200 text-red-700">✕</span>
                    The Bad
                </h4>
                <ul className="space-y-3">
                    {cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="font-lato text-red-900 text-sm leading-relaxed">{con}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
