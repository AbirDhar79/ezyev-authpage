import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          EzyEV
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/login" className="hover:text-gray-400">
            Login
          </Link>
          <Link href="/example" className="hover:text-gray-400">
            Protected Page
          </Link>
        </div>
      </div>
    </nav>
  );
}
