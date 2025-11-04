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

export default function HeadphonesPage(): React.ReactElement {
  const categories = [
    { name: "HEADPHONES", image: "/assets/image-removebg-preview(41)-1.png" },
    { name: "SPEAKERS", image: "/assets/image-removebg-preview(38).png" },
    { name: "EARPHONES", image: "/assets/image-removebg-preview(42).png" },
  ];

  const products = [
    {
      id: 1,
      image: "/assets/image-removebg-preview(47).png",
      newProduct: true,
      title: "XX99 MARK II HEADPHONES",
      description:
        "The new XX99 Mark II headphones are the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      reverse: false,
      href: '/pages/categories/headphones/xx99mark2',
    },
    {
      id: 2,
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      title: "XX99 MARK I HEADPHONES",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate sound reproduction for audiophiles, mixing engineers, and music enthusiasts alike.",
      reverse: true,
      href: '/pages/categories/headphones/xx99mark1',
    },
    {
      id: 3,
      image: "/assets/image-removebg-preview(48).png",
      title: "XX59 HEADPHONES",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable design makes them a perfect companion at home or on the go.",
      reverse: false,
      href: '/pages/categories/headphones/xx59',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Nav />

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
