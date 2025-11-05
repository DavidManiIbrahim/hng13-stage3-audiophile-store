'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';
import { useUser } from "@clerk/nextjs";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export default function ProductWithCartModal(): React.ReactElement {
  const [showCart, setShowCart] = useState<boolean>(true);

  const { user } = useUser();
  const userId = user?.id || "anonymous";

  const cartItems = useQuery(api.cart.getCartItems, { userId }) || [];
  const updateQuantity = useMutation(api.cart.updateQuantity);
  const removeAllItems = useMutation(api.cart.removeAllItems);

  const handleUpdateQuantity = (cartItemId: Id<'cartItems'>, currentQuantity: number, delta: number) => {
    const next = Math.max(1, currentQuantity + delta);
    updateQuantity({ cartItemId, quantity: next });
  };

  const removeAll = () => {
    removeAllItems({ userId });
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            audiophile
          </Link>
          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/" className="hover:text-orange-500">HOME</Link>
            <Link href="/category/headphones" className="hover:text-orange-500">HEADPHONES</Link>
            <Link href="/category/speakers" className="hover:text-orange-500">SPEAKERS</Link>
            <Link href="/category/earphones" className="hover:text-orange-500">EARPHONES</Link>
          </div>
          <button onClick={() => setShowCart(!showCart)} className="hover:text-orange-500">
            <ShoppingCart size={20} />
          </button>
        </div>
      </nav>

      {/* Page Content (Grayed out) */}
      <div className="relative">
        <div className={`${showCart ? 'opacity-40' : ''} p-8`}>
          <button className="text-gray-600 mb-8">Go Back</button>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-gray-200 rounded-lg p-12 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
                alt="Headphones"
                className="w-full max-w-sm"
              />
            </div>
            
            <div>
              <p className="text-orange-500 text-sm tracking-widest mb-2">NEW PRODUCT</p>
              <h1 className="text-4xl font-bold mb-4">XX99 MARK II<br />HEADPHONES</h1>
              <p className="text-gray-600 mb-6">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
              </p>
              <p className="text-2xl font-bold mb-6">$ 2,999</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-gray-200">
                  <button className="px-4 py-3"><Minus size={16} /></button>
                  <span className="px-6 py-3 font-bold">1</span>
                  <button className="px-4 py-3"><Plus size={16} /></button>
                </div>
                <button className="bg-orange-500 text-white px-8 py-3 font-semibold">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">FEATURES</h2>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">IN THE BOX</h2>
            </div>
          </div>
        </div>

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed top-24 right-6 bg-white rounded-lg shadow-2xl w-full max-w-md p-8 z-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">CART ({cartItems.length})</h2>
              <button 
                onClick={removeAll}
                className="text-gray-500 hover:text-orange-500 underline text-sm"
              >
                Remove all
              </button>
            </div>

            <div className="space-y-6 mb-6">
              {cartItems.map(item => (
                <div key={item._id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-sm">{item.name}</h3>
                      <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-100">
                    <button 
                      onClick={() => handleUpdateQuantity(item._id, item.quantity, -1)}
                      className="px-3 py-2 hover:text-orange-500"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="px-4 py-2 font-bold text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => handleUpdateQuantity(item._id, item.quantity, 1)}
                      className="px-3 py-2 hover:text-orange-500"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 uppercase text-sm">Total</span>
              <span className="text-xl font-bold">$ {total.toLocaleString()}</span>
            </div>

            <Link 
              href="/checkout"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-4 font-semibold transition"
            >
              CHECKOUT
            </Link>
          </div>
        )}

        {/* Overlay */}
        {showCart && (
          <div 
            onClick={() => setShowCart(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}
      </div>
    </div>
  );
}