"use client"
import { useState } from 'react';
import Link from 'next/link'
import { ShoppingCart, Facebook, Twitter, Instagram } from 'lucide-react';
import About from '@/app/components/About';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Category from '@/app/components/category';

export default function YX1ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="min-h-screen text-black bg-white">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-12">
        <Link href='/'>
        <button className="text-gray-500 cursor-pointer text-sm mb-8 hover:text-black">Go Back</button>
        </Link>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="bg-gray-100 rounded-lg flex items-center justify-center p-12">
               <img 
              src="/assets/Group 4.png" 
              alt="YX1 EARPHONES"
              className="w-full max-w-sm object-contain"
            />
          
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-orange-500 text-sm tracking-widest mb-4">NEW PRODUCT</p>
            <h2 className="text-4xl font-bold mb-6">YX1 WIRELESS<br />EARPHONES</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
            </p>
            <p className="text-2xl font-bold mb-8">$ 599</p>

            <div className="flex gap-4">
              <div className="flex items-center gap-4 bg-gray-100 px-6 py-3">
                <button onClick={decrementQuantity} className="text-gray-400 cursor-pointer hover:text-orange-500 font-bold">-</button>
                <span className="font-bold w-8 text-center">{quantity}</span>
                <button onClick={incrementQuantity} className="text-gray-400 cursor-pointer hover:text-orange-500 font-bold">+</button>
              </div>
              <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold px-8 py-3 tracking-wider">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-bold mb-6">FEATURES</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">IN THE BOX</h3>
            <ul className="space-y-2">
              <li className="flex gap-6">
                <span className="text-orange-500 font-bold">2x</span>
                <span className="text-gray-600">Earphone Unit</span>
              </li>
              <li className="flex gap-6">
                <span className="text-orange-500 font-bold">6x</span>
                <span className="text-gray-600">Multi-size Earplugs</span>
              </li>
              <li className="flex gap-6">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">User Manual</span>
              </li>
              <li className="flex gap-6">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">USB-C Charging Cable</span>
              </li>
              <li className="flex gap-6">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-600">Travel Pouch</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Gallery */}
        <section className="py-16 mb-20">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/Bitmap (9).png" 
                  alt="Speaker close-up"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="/assets/Bitmap (8).png" 
                  alt="Room setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img 
                src="/assets/Bitmap (7).png" 
                alt="Speaker pair"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

       
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">YOU MAY ALSO LIKE</h3>
          <div className="grid md:grid-cols-3 object-fit-contain gap-8">
            {[
              { name: 'XX99 MARK I', image: '/assets/image-removebg-preview(41)-1.png' },
              { name: 'XX59', image: '/assets/image-removebg-preview(48).png' },
              { name: 'ZX9 SPEAKER', image: '/assets/image-removebg-preview(38).png' }
            ].map((product, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-8 mb-6 h-64 flex items-center justify-center">
                  <div className="text-6xl object-fit-contain">
                    <img className='h-50' src={product.image} />
                  </div>
                </div>
                <h4 className="font-bold mb-4">{product.name}</h4>
                <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold px-6 py-3 text-sm tracking-wider">
                  SEE PRODUCT
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Category */}
       <Category />

        {/* About */}
       <About/>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}