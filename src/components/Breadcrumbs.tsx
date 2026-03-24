import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://cookinkitchen.online${item.href}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-stone-500 font-bold uppercase tracking-widest font-lato">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={item.href} className="flex items-center">
                                {isLast ? (
                                    <span className="text-emerald-700 pointer-events-none truncate max-w-[200px] sm:max-w-none">
                                        {item.label}
                                    </span>
                                ) : (
                                    <>
                                        <Link
                                            href={item.href}
                                            className="hover:text-emerald-600 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                        <svg
                                            className="w-4 h-4 mx-2 text-stone-300 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
