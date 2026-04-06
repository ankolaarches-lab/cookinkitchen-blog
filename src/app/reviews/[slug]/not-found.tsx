import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-playfair text-6xl text-stone-800 mb-4">404</h1>
        <p className="font-lato text-xl text-stone-600 mb-8">
          This recipe got lost in the kitchen.
        </p>
        <Link 
          href="/reviews" 
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-lato font-bold hover:bg-orange-700 transition"
        >
          Back to Reviews
        </Link>
      </div>
    </div>
  );
}
