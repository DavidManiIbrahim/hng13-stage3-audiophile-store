'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

export default function CheckoutPage(): React.ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'e-money'>('cash');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    eMoneyNumber: '',
    eMoneyPin: ''
  });

  const cartItems = [
    { id: 1, name: 'XX99 MK II', price: 2999, quantity: 1, image: '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg' },
    { id: 2, name: 'XX59', price: 899, quantity: 2, image: '/assets/product-xx59-headphones/desktop/image-product.jpg' },
    { id: 3, name: 'YX1', price: 599, quantity: 1, image: '/assets/product-yx1-earphones/desktop/image-product.jpg' }
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
    <div className="min-h-screen text-black bg-gray-50">
      {/* Navigation */}
     <Navbar />

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
                  {/* <img src="" alt="" /> */}
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
          <div className="fixed inset-0 bg-transparent bg-opacity-50 z-40" onClick={() => setShowModal(false)} />
          <div className="fixed top-1/2 left-1/2 border-1 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 max-w-md w-full z-50">
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
     <Footer />
     
    </div>
  );
}