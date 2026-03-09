import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory Analysis",
  description: "Detailed intelligence reports on kitchen instruments. Performance data, durability testing, and ergonomic reviews.",
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
