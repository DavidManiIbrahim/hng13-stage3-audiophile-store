"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { ShoppingCart, Plus, Minus, ChevronLeft } from 'lucide-react';
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Nav from "@/app/components/Navbar"
import Footer from '@/app/components/Footer';
import About from '@/app/components/About';
import Category from '@/app/components/category';
import Intrested from '@/app/components/intrested'

export default function AudiophileProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const router = useRouter();

  const { user } = useUser();
  const userId = user?.id || "anonymous";

  // Get product from Convex
  const product = useQuery(api.products.getByName, { name: "XX99 Mark II Headphones" });
  
  // Add to cart mutation
  const addToCart = useMutation(api.cart.addToCart);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);

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
    <Nav />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => router.back()}
          className="text-gray-400 text-sm hover:text-gray-600 cursor-pointer"
        >
          Go Back
        </button>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg p-12 flex items-center justify-center">
            <img 
              src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" 
              alt="XX99 MARK II Headphones"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <p className="text-orange-400 text-sm tracking-widest">NEW PRODUCT</p>
            <h1 className="text-4xl text-black md:text-5xl font-bold tracking-wider">
              XX99 MARK II<br />HEADPHONES
            </h1>
            <p className="text-gray-600 leading-relaxed">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. 
              It redefines your premium headphone experience by reproducing the 
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="text-2xl text-black font-bold">$ 2,999</p>
            
            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-gray-100">
                <button 
                  onClick={decrementQuantity}
                  className="px-4 cursor-pointer text-black py-3 hover:text-orange-400 transition"
                  disabled={isAdding}
                  >
                  <Minus size={16} />
                </button>
                <span className="px-6 py-3 text-black font-bold">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-4 cursor-pointer py-3 text-black hover:text-orange-400 transition"
                  disabled={isAdding}
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                disabled={isAdding || product === undefined}
                className="bg-orange-400 h-12 cursor-pointer hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 font-bold tracking-wider transition relative"
              >
                {isAdding ? "Adding..." : product === undefined ? "Loading..." : "ADD TO CART"}
              </button>
              {showFeedback && (
                <span className="text-green-600 font-semibold animate-fade-in">
                  ✓ Added to cart!
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features and In The Box */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Features */}
          <div>
            <h2 className="text-3xl text-black font-bold mb-6 tracking-wider">FEATURES</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Featuring a genuine leather head strap and premium earcups, these 
                headphones deliver superior comfort for those who like to enjoy 
                endless listening. It includes intuitive controls designed for any 
                situation. Whether you're taking a business call or just in your own 
                personal space, the auto on/off and pause features ensure that you'll 
                never miss a beat.
              </p>
              <p>
                The advanced Active Noise Cancellation with high-quality integrated 
                microphone allows you to enjoy your audio content in any environment, 
                whether you're at a café, on the move, or in your own room. It's your 
                perfect companion for all your devices.
              </p>
            </div>
          </div>

         
          <div>
            <h2 className="text-3xl text-black font-bold mb-6 tracking-wider">IN THE BOX</h2>
            <div className="space-y-3">
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold">1x</span>
                <span className="text-gray-600">Headphone Unit</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold">2x</span>
                <span className="text-gray-600">Replacement Earcups</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold">1x</span>
                <span className="text-gray-600">User Manual</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold">1x</span>
                <span className="text-gray-600">3.5mm 5m Audio Cable</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold">1x</span>
                <span className="text-gray-600">Travel Bag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg" 
              alt="Gallery 1"
              className="w-full rounded-lg object-cover h-75"
            />
            <img 
              src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg" 
              alt="Gallery 2"
              className="w-full rounded-lg object-cover h-75"
            />
          </div>
          <img 
            src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" 
            alt="Gallery 3"
            className="w-full rounded-lg object-cover h-full"
          />
        </div>
      </section>

     
      {/* You may also like */}
      <Intrested />

      {/* Categories */}
      <Category />

      {/* About */}
      <About />

      {/* Footer */}
     <Footer />
    </div>
  );
}