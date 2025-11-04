"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Facebook, Twitter, Instagram } from "lucide-react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Category from "../../components/category";

interface Category {
  name: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  isNew: boolean;
}

export default function EARPHONESPage(): React.ReactElement {
  const categories = [
    { name: "EARPHONES", image: "/assets/image-removebg-preview(41)-1.png" },
    { name: "SPEAKERS", image: "/assets/image-removebg-preview(38).png" },
    { name: "EARPHONES", image: "/assets/image-removebg-preview(42).png" },
  ];

  const products = [
    {
      id: 1,
      image: "/assets/product-yx1-earphones/desktop/image-product.jpg",
      newProduct: true,
      title: "YX1 WIRELESS EARPHONES",
      description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      reverse: false,
      href: '/pages/categories/EARPHONES/xx99mark2',
    },

  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Nav />

      {/* Header */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-widest">
          EARPHONES
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
            <div className="bg-gray-100x   flex items-center justify-center  w-full md:w-1/2">
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
              <Link href={p.href}>
              <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-3 uppercase tracking-wider text-sm rounded-md transition">
                See Product
              </button>
            </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Category Section */}
     <Category />

      {/* About Section */}
     <About />

      {/* Footer */}
        <Footer />
    </div>
  );
}
