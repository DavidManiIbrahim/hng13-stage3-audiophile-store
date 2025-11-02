"use client"

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import Nav from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function EarphonesCategory() {
  const categories = [
    { name: 'HEADPHONES', slug: 'headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
    { name: 'SPEAKERS', slug: 'speakers', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop' },
    { name: 'EARPHONES', slug: 'earphones', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop' }
  ];

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
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
                alt="YX1 Wireless Earphones"
                className="w-full max-w-xs object-contain"
              />
            </div>
            
            <div>
              <p className="text-orange-500 text-sm tracking-widest mb-4">NEW PRODUCT</p>
              <h2 className="text-4xl font-bold mb-6">YX1 WIRELESS<br />EARPHONES</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              href={`/category/${category.slug}`}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition group"
            >
              <img 
                src={category.image}
                alt={category.name}
                className="w-32 h-32 object-cover mx-auto mb-6 rounded-full"
              />
              <h3 className="font-bold text-lg mb-3">{category.name}</h3>
              <span className="text-sm text-gray-600 group-hover:text-orange-500 transition">
                SHOP →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              BRINGING YOU THE<br />
              <span className="text-orange-500">BEST AUDIO GEAR</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration room available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=700&fit=crop"
              alt="Person with headphones"
              className="w-full max-w-lg rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}