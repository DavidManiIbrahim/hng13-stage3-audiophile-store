"use client"
import { useState } from 'react';
import Link from "next/link";
import { ShoppingCart, Menu, X, Plus, Minus } from "lucide-react";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'XX99 MK II',
      price: 2999,
      quantity: 1,
      image: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
    },
    {
      id: 2,
      name: 'XX59',
      price: 899,
      quantity: 2,
      image: "/assets/product-xx59-headphones/desktop/image-product.jpg"
    },
    {
      id: 3,
      name: 'YX1',
      price: 599,
      quantity: 1,
      image: "/assets/product-yx1-earphones/desktop/image-product.jpg"
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <nav className="bg-black text-white relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-12 border-b border-gray-700">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <Menu size={24} className="cursor-pointer hover:text-orange-500" />
          </button>
          
          <Link href="/" className="text-2xl font-bold tracking-wide">
            audiophile
          </Link>
          
          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <li><Link href="/" className="hover:text-orange-600 cursor-pointer">Home</Link></li>
            <li><Link href="/pages/headphones" className="hover:text-orange-600 cursor-pointer">Headphones</Link></li>
            <li><Link href="/pages/speakers" className="hover:text-orange-600 cursor-pointer">Speakers</Link></li>
            <li><Link href="/pages/earphone" className="hover:text-orange-600 cursor-pointer">Earphones</Link></li>
          </ul>
          
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingCart size={22} className="cursor-pointer hover:text-orange-500" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0  text-white bg-transparent bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="bg-black text- w-64 h-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex bg-black justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} className="text-black hover:text-orange-500" />
                </button>
              </div>
              
              <ul className="space-y-6 text-white">
                <li>
                  <Link 
                    href="/" 
                    className="block text-lg font-medium hover:text-orange-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/pages/headphones" 
                    className="block text-lg font-medium hover:text-orange-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/pages/speakers" 
                    className="block text-lg font-medium hover:text-orange-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/pages/earphone" 
                    className="block text-lg font-medium hover:text-orange-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Earphones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-start justify-end p-4 z-40" onClick={() => setIsCartOpen(false)}>
          <div 
            className="bg-white rounded-lg w-full max-w-md mt-20 mr-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold tracking-wider text-black">
                  CART ({cartItems.length})
                </h2>
                <button
                  onClick={removeAll}
                  className="text-gray-500 hover:text-gray-700 text-sm underline"
                >
                  Remove all
                </button>
              </div>

              <div className="space-y-6 mb-6">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                          ) : (
                            <span className="text-gray-400 text-xs">IMG</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-black">{item.name}</h3>
                          <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-500 hover:text-orange-500 w-4 h-4 flex items-center justify-center"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-bold text-sm w-4 text-center text-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-gray-500 hover:text-orange-500 w-4 h-4 flex items-center justify-center"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500 text-sm font-medium">TOTAL</span>
                    <span className="text-lg font-bold text-black">$ {total.toLocaleString()}</span>
                  </div>

                  <Link href='/components/checkout/'>
                    <button className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-4 rounded text-sm tracking-wider transition-colors">
                      CHECKOUT
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}