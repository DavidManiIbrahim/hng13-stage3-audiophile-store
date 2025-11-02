"use client"

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import Nav from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Category from '@/app/components/category';
import About from '@/app/components/About';

export default function EarphonesCategory() {


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     <Nav />

      {/* Category Header */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold">EARPHONES</h1>
      </div>

      {/* Product Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg p-16 flex items-center justify-center">
              <img 
                src="/assets/Group 4.png"
                alt="YX1 Wireless Earphones"
                className="w-full max-w-xs object-contain"
              />
            </div>
            
            <div>
              <p className="text-orange-500 text-sm tracking-widest mb-4">NEW PRODUCT</p>
              <h2 className="text-4xl text-black font-bold mb-6">YX1 WIRELESS<br />EARPHONES</h2>
              <p className="text-gray-900 mb-8 leading-relaxed">
                Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
              </p>
              <Link 
                href="/product/yx1-wireless-earphones"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
     <Category />

      {/* About Section */}
    <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}