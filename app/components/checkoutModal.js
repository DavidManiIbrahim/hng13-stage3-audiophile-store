'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';

export default function ProductWithCartModal() {
  const [showCart, setShowCart] = useState(true);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'XX99 MK II', price: 2999, quantity: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' },
    { id: 2, name: 'XX59', price: 899, quantity: 2, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop' },
    { id: 3, name: 'YX1', price: 599, quantity: 1, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&h=100&fit=crop' }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeAll = () => {
    setCartItems([]);
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
                <div key={item.id} className="flex items-center justify-between">
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
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-2 hover:text-orange-500"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="px-4 py-2 font-bold text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
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