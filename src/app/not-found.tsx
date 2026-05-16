import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-4xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-slate-600">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
