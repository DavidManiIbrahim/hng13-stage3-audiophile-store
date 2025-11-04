"use client"
import React from 'react';
import { ShoppingCart, ChevronRight, Router } from 'lucide-react';
import Link from "next/link"
import Category from './components/category';
import Nav from "./components/Navbar"
import Footer from "./components/Footer"
import About from './components/About';

export default function AudiophileSite(): React.ReactElement {




  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />


      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 hero">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 cursor-pointer text-sm tracking-widest mb-4">NEW PRODUCT</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              XX99 MARK II<br />HEADPHONES
            </h1>
            <p className="text-gray-400 mb-8 max-w-md">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link href='/pages/categories/headphones/xx99mark2'>
            <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-3 font-semibold transition"
            >
              SEE PRODUCT
            </button>
              </Link>
          </div>
           {/* <div className="flex justify-center">
            <img 
              src="/assets/Bitmap-1.png" 
              alt="XX99 Mark II Headphones"
              className="w-full max-w-md object-contain"
            />
          </div>  */}
        </div>
      </section>

      {/* Category Cards */}
     <Category />

      {/* ZX9 Speaker Feature */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-orange-500 rounded-lg overflow-hidden grid md:grid-cols-2 gap-12 items-center p-12">
            <div className="flex relative top-18 justify-center">
              <img 
                src="/assets/home/desktop/image-speaker-zx9.png" 
                alt="ZX9 Speaker"
                height={500}
                className="w-full  h-ull max-w-xs object-contain"
              />
            </div>
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6">
                ZX9<br />SPEAKER
              </h2>
              <p className="mb-8 max-w-md text-white/90">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <Link href='/pages/categories/speaker/zx9'>
              <button className="bg-black cursor-pointer hover:bg-gray-900 text-white px-8 py-3 font-semibold transition">
                SEE PRODUCT
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Feature */}
      <section className="px-6 text-white pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-200 rounded-lg overflow-hidden relative h-80">
            <img 
              src="/assets/home/desktop/image-speaker-zx7.jpg" 
              alt="ZX7 Speaker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center px-12">
              <div>
                <h2 className="text-3xl cursor-pointer font-bold mb-6">ZX7 SPEAKER</h2>
                <Link href="/pages/categories/speaker/zx7">
                <button className="border-2 cursor-pointer border-black hover:bg-black hover:text-white px-8 py-3 font-semibold transition">
                  SEE PRODUCT
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YX1 Earphones Feature */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
            <img 
              src="/assets/home/desktop/image-earphones-yx1.jpg" 
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center px-12">
            <div>
              <h2 className="text-3xl text-black font-bold mb-6">YX1 EARPHONES</h2>
              <Link href='/pages/earphone/'>
              <button className="border-2 cursor-pointer border-black text-black hover:bg-black hover:text-white px-8 py-3 font-semibold transition">
                SEE PRODUCT
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
     
    </div>
  );
}