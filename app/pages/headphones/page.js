"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Facebook, Twitter, Instagram } from "lucide-react";

export default function HeadphonesPage() {
  const categories = [
    { name: "HEADPHONES", image: "/images/category-headphones.png" },
    { name: "SPEAKERS", image: "/images/category-speakers.png" },
    { name: "EARPHONES", image: "/images/category-earphones.png" },
  ];

  const products = [
    {
      id: 1,
      image: "/images/xx99-mark2.png",
      newProduct: true,
      title: "XX99 MARK II HEADPHONES",
      description:
        "The new XX99 Mark II headphones are the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      reverse: false,
    },
    {
      id: 2,
      image: "/images/xx99-mark1.png",
      title: "XX99 MARK I HEADPHONES",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate sound reproduction for audiophiles, mixing engineers, and music enthusiasts alike.",
      reverse: true,
    },
    {
      id: 3,
      image: "/images/xx59.png",
      title: "XX59 HEADPHONES",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable design makes them a perfect companion at home or on the go.",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12 border-b border-gray-700">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            audiophile
          </Link>
          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pages/headphones">Headphones</Link></li>
            <li><Link href="/pages/speakers">Speakers</Link></li>
            <li><Link href="/pages/earphones">Earphones</Link></li>
          </ul>
          <ShoppingCart size={22} className="cursor-pointer hover:text-orange-500" />
        </div>
      </nav>

      {/* Header */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-widest">
          HEADPHONES
        </h1>
      </section>

      {/* Product Section */}
      <section className="flex flex-col items-center gap-24 py-20 px-6 md:px-12">
        {products.map((p) => (
          <div
            key={p.id}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
              p.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="bg-gray-100 rounded-xl flex items-center justify-center w-full md:w-1/2">
              <Image
                src={p.image}
                alt={p.title}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            <div className="md:w-1/2 text-center md:text-left space-y-6">
              {p.newProduct && (
                <p className="uppercase tracking-[8px] text-orange-500 text-sm font-semibold">
                  New Product
                </p>
              )}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">{p.title}</h2>
              <p className="text-gray-600">{p.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 uppercase tracking-wider text-sm rounded-md transition">
                See Product
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Category Section */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-12 py-12">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl flex flex-col items-center py-10 relative overflow-hidden"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={120}
              height={120}
              className="absolute -top-10"
            />
            <h3 className="mt-16 font-bold text-lg">{cat.name}</h3>
            <button className="flex items-center gap-2 text-sm mt-2 text-gray-500 hover:text-orange-500 transition">
              SHOP <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 py-20">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO GEAR
          </h2>
          <p className="text-gray-600">
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. Visit our demo facility to browse our wide range of
            premium products and meet our expert team.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/about-person.jpg"
            alt="Man listening to music"
            width={540}
            height={540}
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Footer */}
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
            Audiophile is your one-stop destination for premium audio products.
            Visit our store or demo facility to experience sound perfection.
          </p>

          <div className="flex justify-center md:justify-end gap-4 text-gray-400">
            <Facebook className="cursor-pointer hover:text-orange-500" />
            <Twitter className="cursor-pointer hover:text-orange-500" />
            <Instagram className="cursor-pointer hover:text-orange-500" />
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
