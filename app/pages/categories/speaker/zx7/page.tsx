"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Plus, Minus, ChevronRight } from 'lucide-react';
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Nav from '@/app/components/Navbar'
import Footer from '@/app/components/Footer';
import Category from '@/app/components/category';
import About from '@/app/components/About';
import Intrested from '@/app/components/intrested'

export default function Audiophilezx7SpeakerPage() {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const router = useRouter();

  const { user } = useUser();
  const userId = user?.id || "anonymous";

  // Get product from Convex
  const product = useQuery(api.products.getByName, { name: "ZX7 Speaker" });
  
  // Mutations
  const addToCart = useMutation(api.cart.addToCart);
  const createOrGetProduct = useMutation(api.products.createOrGet);

  // Ensure product exists in database
  useEffect(() => {
    if (product === null) {
      createOrGetProduct({
        name: "ZX7 Speaker",
        price: 3500,
        description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        image: "/assets/product-zx7-speaker/desktop/image-product.jpg",
        category: "speakers",
      }).catch((error) => console.error("Error creating product:", error));
    }
  }, [product, createOrGetProduct]);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  const handleAddToCart = async () => {
    let productId = product?._id;

    if (!productId) {
      setIsAdding(true);
      try {
        productId = await createOrGetProduct({
          name: "ZX7 Speaker",
          price: 3500,
          description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
          image: "/assets/product-zx7-speaker/desktop/image-product.jpg",
          category: "speakers",
        });
      } catch (error) {
        console.error("Error creating product:", error);
        alert("Failed to initialize product. Please try again.");
        setIsAdding(false);
        return;
      }
    }

    if (!productId) {
      alert("Product not found. Please try again.");
      setIsAdding(false);
      return;
    }

    try {
      await addToCart({
        userId,
        productId: productId,
        quantity,
      });
      // Fire-and-forget confirmation email
      try {
        const to = user?.primaryEmailAddress?.emailAddress;
        if (to) {
          await fetch("/api/email/sendCartConfirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to,
              productName: product?.name || "ZX7 Speaker",
              quantity,
            }),
          });
        }
      } catch (e) {
        console.error("Email send failed:", e);
      }
      setShowFeedback(true);
      setQuantity(1);
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

      {/* Main Content */}
      <main className="max-w-7xl text-black mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="py-8">
          <button 
            onClick={() => router.back()}
            className="text-gray-500 cursor-pointer text-sm hover:text-gray-700 transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Product Section */}
        <section className="grid lg:grid-cols-2 gap-16 py-8 mb-20">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg flex items-center justify-center p-12 lg:p-20">
            <img 
              src="/assets/product-zx7-speaker/desktop/image-product.jpg"
              alt="zx7 Speaker"
              className="w-full max-w-sm object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-orange-400 text-sm font-normal tracking-[0.6em] uppercase">
              New Product
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wide uppercase leading-tight">
              zx7<br />Speaker
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Upgrade your sound system with the all new zx7 active 
              speaker. It's a bookshelf speaker system that offers truly 
              wireless connectivity -- creating new possibilities for more 
              pleasing and practical audio setups.
            </p>
            <p className="text-lg font-bold tracking-wider">$ 4,500</p>
            
            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center bg-gray-100">
                <button 
                  onClick={decrementQuantity}
                  className="px-5 py-4 cursor-pointer text-gray-500 hover:text-orange-400 transition-colors disabled:opacity-50"
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
                  className="px-5 py-4 cursor-pointer text-gray-500 hover:text-orange-400 transition-colors disabled:opacity-50"
                  aria-label="Increase quantity"
                  disabled={isAdding}
                >
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className="bg-orange-400 h-12 cursor-pointer hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 font-bold text-xs tracking-widest uppercase transition-colors"
              >
                {isAdding ? "Adding..." : "Add to Cart"}
              </button>
              {showFeedback && (
                <span className="text-green-600 font-semibold animate-fade-in">
                  ✓ Added to cart!
                </span>
              )}
            </div>
          </div>
        </section>

      
        <section className="grid lg:grid-cols-5 gap-16 lg:gap-24 py-16 mb-20">
          {/* Features */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-8 tracking-wider uppercase">Features</h2>
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                Connect via Bluetooth or nearly any wired source. This speaker features optical, 
                digital coaxial, USB Type-B, stereo RCA, and stereo 3.5mm inputs, allowing you to have 
                up to 5 wired source devices connected for easy audio switching. Improved bluetooth 
                enables quick and more stable connectivity, so you can enjoy your music every time you 
                want without audio quality drops or lag time.
              </p>
              <p>
                Discover clear, more natural sounding highs than the competition with zx7's signature 
                planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 
                6.5" aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a 
                large room or small den. Furthermore, you will experience new sensations from old songs 
                since it can respond to even the subtle waveforms.
              </p>
            </div>
          </div>

         
          <div className="lg:col-span-2 ">
            <h2 className="text-3xl font-bold mb-8 tracking-wider uppercase">In the Box</h2>
            <div className="space-y-3">
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">2x</span>
                <span className="text-gray-600 text-base">Speaker Unit</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">2x</span>
                <span className="text-gray-600 text-base">Speaker Cloth Panel</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">1x</span>
                <span className="text-gray-600 text-base">User Manual</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">1x</span>
                <span className="text-gray-600 text-base">3.5mm 10m Audio Cable</span>
              </div>
              <div className="flex gap-6">
                <span className="text-orange-400 font-bold text-base w-8">1x</span>
                <span className="text-gray-600 text-base">10m Optical Cable</span>
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
                  src="/assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
                  alt="Speaker close-up"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/product-zx7-speaker/desktop/image-gallery-2.jpg" 
                  alt="Room setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img 
                src="/assets/product-zx7-speaker/desktop/image-gallery-3.jpg" 
                alt="Speaker pair"
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
      <Footer />
    </div>
  );
}