import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center md:text-left space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="text-2xl font-bold">audiophile</Link>
          <ul className="flex gap-6 text-sm uppercase tracking-widest">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/headphones">Headphones</Link></li>
            <li><Link href="/speakers">Speakers</Link></li>
            <li><Link href="/earphones">Earphones</Link></li>
          </ul>
        </div>

        <p className="text-gray-400 max-w-2xl">
          Audiophile is your one-stop destination for premium audio products. Visit our store or demo facility to experience sound perfection.
        </p>

        <div className="flex justify-center md:justify-end gap-4 text-gray-400">
          <Facebook className="cursor-pointer hover:text-orange-500" />
          <Twitter className="cursor-pointer hover:text-orange-500" />
          <Instagram className="cursor-pointer hover:text-orange-500" />
        </div>

        <p className="text-gray-500 text-sm mt-6">Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
}
