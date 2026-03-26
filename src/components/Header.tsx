"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/buying-guides", label: "Guides" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="glass-premium sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-3xl font-black text-gray-900 hover:text-emerald-700 transition-all group flex items-center gap-3"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-stone-200/50 shadow-sm">
            <Image
              src="/favicon.png"
              alt="CookinKitchen Intelligence Logo"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
            CookinKitchen
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-[0.15em]">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`animated-link transition ${
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest py-2 transition ${
                    isActive
                      ? "text-emerald-600"
                      : "text-gray-600 hover:text-emerald-600"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
