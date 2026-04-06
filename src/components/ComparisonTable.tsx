import Image from "next/image";

export interface ComparisonItem {
    name: string;
    image: string;
    badge?: string;
    rating: number;
    price: string;
    keyFeature: string;
    affiliateLink: string;
}

export default function ComparisonTable({ items }: { items: ComparisonItem[] }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-10 w-full overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr className="bg-stone-50 border-b border-stone-200">
                        <th className="p-4 font-playfair font-bold text-stone-800 w-1/3">Top Picks</th>
                        <th className="p-4 font-lato font-semibold text-stone-600 text-sm">Key Feature</th>
                        <th className="p-4 font-lato font-semibold text-stone-600 text-sm text-center">Score</th>
                        <th className="p-4 font-lato font-semibold text-stone-600 text-sm text-center">Price</th>
                        <th className="p-4 font-lato font-semibold text-stone-600 text-sm text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors">
                            <td className="p-4">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-stone-200">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="64px"
                                        />
                                    </div>
                                    <div>
                                        {item.badge && (
                                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-800 mb-1">
                                                {item.badge}
                                            </span>
                                        )}
                                        <div className="font-playfair font-bold text-stone-800 leading-tight">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-stone-600 font-lato text-sm">
                                {item.keyFeature}
                            </td>
                            <td className="p-4 text-center">
                                <div className="inline-flex items-center justify-center bg-stone-100 rounded-full px-3 py-1">
                                    <span className="font-lato font-bold text-stone-800">{item.rating}</span>
                                    <span className="text-emerald-500 ml-1 text-sm">★</span>
                                </div>
                            </td>
                            <td className="p-4 text-center font-lato font-medium text-stone-600">
                                {item.price}
                            </td>
                            <td className="p-4 text-center">
                                <a
                                    href={item.affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full sm:w-auto px-4 py-2 bg-emerald-600 text-white rounded-lg font-lato font-bold text-sm tracking-wide hover:bg-emerald-700 transition shadow-md shadow-emerald-600/20 whitespace-nowrap"
                                >
                                    Check Price
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
