import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          😂 Meme Generator
        </h1>

        <Link
          href="/memes"
          className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-indigo-100 hover:scale-105"
        >
          Browse Memes
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;