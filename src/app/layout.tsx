import type { Metadata } from "next";
import Link from "next/link";
import { Lato, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import NewsletterSignup from "@/components/NewsletterSignup";
import Header from "@/components/Header";

const GA_MEASUREMENT_ID = "G-0KVR8EH0TE";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "CookinKitchen | Elite Culinary Instruments & Intelligence",
    template: "%s | CookinKitchen Laboratory",
  },
  verification: {
    google: "GDRSPd9qRITqCI8E_QqhKTQY2-LqiiU_EPnK4cOv8Lc",
  },
  description: "Independent, data-driven analysis of professional kitchen tools. We test performance, durability, and ergonomic value for the modern culinary enthusiast.",
  icons: {
    icon: "/favicon.ico?v=2",
    apple: "/favicon.png?v=2",
  },

  authors: [{ name: "CookinKitchen Intelligence Unit" }],
  creator: "CookinKitchen",
  publisher: "CookinKitchen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cookinkitchen.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cookinkitchen.online",
    siteName: "CookinKitchen Intelligence",
    title: "CookinKitchen | Elite Culinary Instruments & Intelligence",
    description: "Independent, data-driven analysis of professional kitchen tools. Professional gear for professional cooks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CookinKitchen – Expert Kitchen Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CookinKitchen - Expert Kitchen Tool Reviews",
    description: "Honest, expert reviews of kitchen tools. Find the best chef's knives, cookware, and appliances.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MM268LC3');`}</Script>

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CookinKitchen",
              url: "https://cookinkitchen.online",
              description: "Expert reviews of kitchen tools and cookware",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://cookinkitchen.online/reviews?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased pattern-bg selection:bg-emerald-100 selection:text-emerald-900">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM268LC3" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>

        <Analytics />
        <Header />
        <main>{children}</main>

        <div className="px-6 mt-16 pb-16">
          <NewsletterSignup />
        </div>

        <footer className="bg-gray-950 text-gray-500 py-20 border-t border-gray-900">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <Link href="/" className="font-serif text-2xl font-bold text-white mb-6 block">
                CookinKitchen
              </Link>
              <p className="text-sm leading-relaxed max-w-sm">
                The intelligence-driven platform for the modern culinary enthusiast.
                We test, analyze, and report so you can cook with absolute confidence.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Intelligence</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/reviews" className="hover:text-emerald-400 transition">Latest Reports</Link></li>
                <li><Link href="/blog" className="hover:text-emerald-400 transition">Tech Analysis</Link></li>
                <li><Link href="/buying-guides" className="hover:text-emerald-400 transition">Buying Protocols</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
              <p className="text-[11px] leading-relaxed">
                As an Amazon Associate, we earn from qualifying purchases.
                All logos and brands are property of their respective owners.
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs uppercase tracking-[0.2em]">© 2026 CookinKitchen Intelligence Ops</p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              {/* TODO: Add real social profile URLs */}
            </div>
          </div>
        </footer>
        <ChatWidget />
      </body>
    </html>
  );
}
