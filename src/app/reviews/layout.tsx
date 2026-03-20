import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Product Reviews | CookinKitchen",
  description: "Expert reviews of the best kitchen tools, appliances, and cookware. Find the perfect products for your kitchen with our in-depth buying guides.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "CookinKitchen",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
