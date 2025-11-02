import Link from "next/link";

import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12 border-b border-gray-700">
        <img src="/assets/Group.svg" className="md:hidden" />
        <Link href="/" className="text-2xl font-bold tracking-wide">
          audiophile
        </Link>
        <ul className="hidden md:flex  gap-8 text-sm uppercase tracking-widest">
          <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link href="/pages/headphones" className="hover:text-orange-600">Headphones</Link></li>
          <li><Link href="/pages/speakers" className="hover:text-orange-600">Speakers</Link></li>
          <li><Link href="/pages/earphones" className="hover:text-orange-600">Earphones</Link></li>
        </ul>
        {/* <Link href="/components/"> */}
        <ShoppingCart size={22} className="cursor-pointer hover:text-orange-500" />
        {/* </Link> */}
      </div>
    </nav>
  );
}
