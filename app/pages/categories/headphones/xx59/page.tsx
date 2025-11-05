"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Plus, Minus, ChevronRight } from 'lucide-react';
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Navbar from '@/app/components/Navbar';
import Category from '@/app/components/category';
import About from '@/app/components/About';
import Intrested from '@/app/components/intrested';

export default function AudiophileXX59HeadphonesPage() {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const router = useRouter();

  const { user } = useUser();
  const userId = user?.id || "anonymous";

  // Get product from Convex
  const product = useQuery(api.products.getByName, { name: "XX59 Headphones" });
  
  // Add to cart mutation
  const addToCart = useMutation(api.cart.addToCart);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  const handleAddToCart = async () => {
    if (!product?._id) {
      alert("Product not found. Please try again.");
      return;
    }

    setIsAdding(true);
    try {
      await addToCart({
        userId,
        productId: product._id,
        quantity,
      });
      
      // Show success feedback
      setShowFeedback(true);
      setQuantity(1); // Reset quantity after adding
      
      // Hide feedback after 2 seconds
      setTimeout(() => setShowFeedback(false), 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl text-black mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="py-8">
          <button 
            onClick={() => router.back()}
            className="text-gray-500 text-sm hover:text-gray-700 transition-colors cursor-pointer"
          >
            Go Back
          </button>
        </div>

        {/* Product Section */}
        <section className="grid lg:grid-cols-2 gap-16 py-8 mb-20">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center p-5 lg:p-5">
            <img 
              src="/assets/product-xx59-headphones/desktop/image-product.jpg" 
              alt="XX59 Headphones"
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight">
              XX59<br />Headphones
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Enjoy your audio almost anywhere and customize it to your 
              specific tastes with the XX59 headphones. The stylish yet 
              durable versatile wireless headset is a brilliant companion 
              at home or on the move.
            </p>
            <p className="text-lg font-bold tracking-wider">$ 899</p>
            
            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-gray-100">
                <button 
                  onClick={decrementQuantity}
                  className="px-5 cursor-pointer py-4 text-gray-500 hover:text-orange-400 transition-colors disabled:opacity-50"
                  aria-label="Decrease quantity"
                  disabled={isAdding}
                >
                  <Minus size={14} strokeWidth={3} />
                </button>
                <span className="px-6 py-4 font-bold text-sm min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQuantity}
                  className="px-5 cursor-pointer py-4 text-gray-500 hover:text-orange-400 transition-colors disabled:opacity-50"
                  aria-label="Increase quantity"
                  disabled={isAdding}
                >
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                disabled={isAdding || product === undefined}
                className="bg-orange-400 h-12 cursor-pointer hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 font-bold text-xs tracking-widest uppercase transition-colors"
              >
                {isAdding ? "Adding..." : product === undefined ? "Loading..." : "Add to Cart"}
              </button>
              {showFeedback && (
                <span className="text-green-600 font-semibold animate-fade-in">
                  ✓ Added to cart!
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid lg:grid-cols-5 gap-16 lg:gap-24 py-16 mb-20">
          {/* Features */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-8 tracking-wider uppercase">Features</h2>
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                These headphones have been created from durable, high-quality materials tough enough 
                to take anywhere. Its compact folding design fuses comfort and minimalist style making it 
                perfect for travel. Flawless transmission is assured by the latest wireless technology engineered 
                for audio enthusiasts and passionate music lovers.
              </p>
              <p>
                Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved 
                ergonomics designed for long listening sessions, the XX59 headphones remain light and compact, 
                with powerful sound. Crafted for both style and comfort, these headphones convey the best in 
                portable audio and stay true to your musical preferences. Their durable foldable design 
                means you can take them with you almost anywhere at any time, making these perfect for 
                all music fans.
              </p>
            </div>
          </div>

         
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 tracking-wider uppercase">In the Box</h2>
            <div className="space-y-3">
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">1x</span>
                <span className="text-gray-600 text-base">Headphone Unit</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">2x</span>
                <span className="text-gray-600 text-base">Replacement Earcups</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">1x</span>
                <span className="text-gray-600 text-base">User Manual</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">1x</span>
                <span className="text-gray-600 text-base">3.5mm 5m Audio Cable</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 mb-20">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/product-xx59-headphones/desktop/image-gallery-1.jpg" 
                  alt="Person listening to music"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/product-xx59-headphones/desktop/image-gallery-2.jpg" 
                  alt="Headphones on stand"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img 
                src="/assets/product-xx59-headphones/desktop/image-gallery-3.jpg" 
                alt="Headphones detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Intrested */}
        <Intrested />

        {/* Categories */}
        <Category />

        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
          <div className="w-24 h-1 bg-orange-400 mb-12"></div>
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold lowercase tracking-tight mb-10">
                audiophile
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                Audiophile is an all in one stop to fulfill your audio needs. 
                We're a small team of music lovers and sound specialists who are 
                devoted to helping you get the most out of personal audio. Come 
                and visit our demo facility - we're open 7 days a week.
              </p>
            </div>
            <div className="flex flex-col lg:items-end justify-between">
              <nav className="flex flex-wrap gap-8 text-xs font-bold tracking-widest mb-8 lg:mb-0">
                <a href="#" className="hover:text-orange-400 transition-colors">HOME</a>
                <a href="#" className="hover:text-orange-400 transition-colors">HEADPHONES</a>
                <a href="#" className="hover:text-orange-400 transition-colors">SPEAKERS</a>
                <a href="#" className="hover:text-orange-400 transition-colors">EARPHONES</a>
              </nav>
              <div className="flex gap-4">
                <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-base">Copyright 2021. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}