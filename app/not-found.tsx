import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f8f2ea] px-6 text-center text-[#241b16]">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#a17a45]">404</p>
        <h1 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">This frame is missing.</h1>
        <p className="mt-6 text-lg leading-8 text-[#735c45]">
          The page you are looking for may have moved, but the VowLens story continues on the homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#241b16] px-7 py-4 text-sm font-medium text-[#fff7ec] shadow-xl shadow-[#241b16]/15 transition hover:-translate-y-1"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
