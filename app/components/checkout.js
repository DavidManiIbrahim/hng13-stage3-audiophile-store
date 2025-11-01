'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function CheckoutPage() {
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [formData, setFormData] = useState({
    name: 'Alexei Ward',
    email: 'alexei@gmail.com',
    phone: '+1 202-555-0136',
    address: '1137 Williams Avenue',
    zipCode: '10001',
    city: 'New York',
    country: 'United States',
    eMoneyNumber: '238521993',
    eMoneyPin: '6891'
  });

  const cartItems = [
    { id: 1, name: 'XX99 MK II', price: 2999, quantity: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' },
    { id: 2, name: 'XX59', price: 899, quantity: 2, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100' },
    { id: 3, name: 'YX1', price: 599, quantity: 1, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100' }
  ];

  const total = 5396;
  const shipping = 50;
  const vat = 1079;
  const grandTotal = 5446;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            audiophile
          </Link>
          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/">HOME</Link>
            <Link href="/category/headphones">HEADPHONES</Link>
            <Link href="/category/speakers">SPEAKERS</Link>
            <Link href="/category/earphones">EARPHONES</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/" className="text-gray-600 hover:text-orange-500 mb-8 inline-block">
          Go Back
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>

            {/* Billing Details */}
            <div className="mb-8">
              <h2 className="text-orange-500 font-semibold text-sm mb-4">BILLING DETAILS</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mb-8">
              <h2 className="text-orange-500 font-semibold text-sm mb-4">SHIPPING INFO</h2>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Address</label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">ZIP Code</label>
                  <input 
                    type="text" 
                    value={formData.zipCode}
                    onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">City</label>
                  <input 
                    type="text" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">Country</label>
                <input 
                  type="text" 
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <h2 className="text-orange-500 font-semibold text-sm mb-4">PAYMENT DETAILS</h2>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Payment Method</label>
                <div className="space-y-3">
                  <label className="flex items-center border border-gray-300 rounded px-4 py-3 cursor-pointer hover:border-orange-500">
                    <input 
                      type="radio" 
                      name="payment"
                      value="emoney"
                      checked={paymentMethod === 'emoney'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-4"
                    />
                    <span className="font-semibold">e-Money</span>
                  </label>
                  <label className="flex items-center border border-gray-300 rounded px-4 py-3 cursor-pointer hover:border-orange-500">
                    <input 
                      type="radio" 
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-4"
                    />
                    <span className="font-semibold">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              {paymentMethod === 'emoney' && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">e-Money Number</label>
                    <input 
                      type="text" 
                      value={formData.eMoneyNumber}
                      onChange={(e) => setFormData({...formData, eMoneyNumber: e.target.value})}
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">e-Money PIN</label>
                    <input 
                      type="text" 
                      value={formData.eMoneyPin}
                      onChange={(e) => setFormData({...formData, eMoneyPin: e.target.value})}
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'cash' && (
                <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded">
                  <svg className="w-12 h-12 text-orange-500 flex-shrink-0" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-14 26c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  </svg>
                  <p className="text-sm text-gray-600">
                    The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </form>

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-8 h-fit">
            <h2 className="text-xl font-bold mb-6">SUMMARY</h2>
            
            <div className="space-y-4 mb-6">
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
                  <span className="text-gray-500 text-sm">x{item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">TOTAL</span>
                <span className="font-bold">$ {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">SHIPPING</span>
                <span className="font-bold">$ {shipping}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">VAT (INCLUDED)</span>
                <span className="font-bold">$ {vat.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500">GRAND TOTAL</span>
              <span className="text-xl font-bold text-orange-500">$ {grandTotal.toLocaleString()}</span>
            </div>

            <button 
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 font-semibold transition"
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowModal(false)} />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 max-w-md w-full z-50">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <Check size={32} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">THANK YOU<br />FOR YOUR ORDER</h2>
            <p className="text-gray-500 mb-6">You will receive an email confirmation shortly.</p>

            <div className="grid grid-cols-2 mb-6 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={cartItems[0].image}
                    alt={cartItems[0].name}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <h3 className="font-bold text-sm">{cartItems[0].name}</h3>
                    <p className="text-gray-500 text-sm">$ {cartItems[0].price.toLocaleString()}</p>
                  </div>
                  <span className="text-gray-500 text-sm">x{cartItems[0].quantity}</span>
                </div>
                <p className="text-center text-gray-500 text-sm border-t pt-4">
                  and {cartItems.length - 1} other item(s)
                </p>
              </div>
              <div className="bg-black text-white p-6 flex flex-col justify-center">
                <p className="text-gray-400 text-sm mb-2">GRAND TOTAL</p>
                <p className="text-xl font-bold">$ {grandTotal.toLocaleString()}</p>
              </div>
            </div>

            <Link 
              href="/"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-4 font-semibold transition"
            >
              BACK TO HOME
            </Link>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold tracking-wider mb-6">audiophile</div>
              <p className="text-gray-400 text-sm max-w-md">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
              </p>
            </div>
            <div className="flex flex-col md:items-end">
              <div className="flex space-x-8 text-sm mb-8">
                <Link href="/">HOME</Link>
                <Link href="/category/headphones">HEADPHONES</Link>
                <Link href="/category/speakers">SPEAKERS</Link>
                <Link href="/category/earphones">EARPHONES</Link>
              </div>
              <div className="flex space-x-4">
                <a href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
                <a href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0z"/></svg></a>
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-sm pt-8 border-t border-gray-800">
            Copyright 2021. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}