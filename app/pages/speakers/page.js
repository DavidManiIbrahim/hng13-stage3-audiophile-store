"use client"
import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import Nav from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import About from '@/app/components/About';
import Category from '@/app/components/category';



export default function SpeakersCategory() {
  const products = [
    {
      id: 1,
      slug: 'zx9-speaker',
      name: 'ZX9 SPEAKER',
      new: true,
      description: 'Upgrade your sound system with the all new ZX9 active speaker. It\'s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      image: '/assets/image-removebg-preview(38).png'
    },
    {
      id: 2,
      slug: 'zx7-speaker',
      name: 'ZX7 SPEAKER',
      new: false,
      description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      image: '/assets/image-removebg-preview(49).png'
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />

      {/* Category Header */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold">SPEAKERS</h1>
      </div>

      {/* Products List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-black space-y-32">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? '' : ''
              }`}
            >
              <div className={`bg-gray-100 rounded-lg p-12 flex items-center justify-center ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-sm object-contain"
                />
              </div>
              
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                {product.new && (
                  <p className="text-orange-500 text-sm tracking-widest mb-4">NEW PRODUCT</p>
                )}
                <h2 className="text-4xl font-bold mb-6 leading-tight">{product.name}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <Link 
                  href={`/product/${product.slug}`}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          ))}
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