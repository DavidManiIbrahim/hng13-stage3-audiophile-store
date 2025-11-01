"use client"
import React from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import Link from "next/link"
// import Headphone from "@/public/assets/Bitmap-1.png"
import Nav from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"



export default function AudiophileSite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />


      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 hero">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-sm tracking-widest mb-4">NEW PRODUCT</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              XX99 MARK II<br />HEADPHONES
            </h1>
            <p className="text-gray-400 mb-8 max-w-md">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition">
              SEE PRODUCT
            </button>
          </div>
          {/* <div className="flex justify-center">
            <img 
              // src={Headphone} 
             
              alt="XX99 Mark II Headphones"
              className="w-full max-w-md object-contain"
            />
          </div> */}
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-bg-dark object-fit-contain grid md:grid-cols-3 gap-8">
          {[
            { name: 'HEADPHONES', img: '/assets/image-removebg-preview(41)-1.png' },
            { name: 'SPEAKERS', img: '/assets/image-removebg-preview(38).png' },
            // { name: 'EARPHONES', img: '/assets/Group 4.png' }
            { name: 'EARPHONES', img: '/assets/image-removebg-preview(42).png' }
          ].map((category, idx) => (
            <div key={idx} className="bg-white cursor-pointer  p-8 text-center hover:shadow-lg transition group">
              <img 
                src={category.img} 
                alt={category.name}
                className="w-50 h-50 mx-auto mb-6 "
              />
              <h3 className="font-bold text-sm text-gray-900 text-xl mb-3">{category.name}</h3>
              <button className="text-sm text-gray-600 group-hover:text-orange-500 transition flex items-center justify-center mx-auto">
                SHOP <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ZX9 Speaker Feature */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-orange-500 rounded-lg overflow-hidden grid md:grid-cols-2 gap-12 items-center p-12">
            <div className="flex justify-center">
              <img 
                src="/assets/image-removebg-preview(38)-1.png" 
                alt="ZX9 Speaker"
                className="w-full h-100 top-25 max-w-xs object-contain"
              />
            </div>
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6">
                ZX9<br />SPEAKER
              </h2>
              <p className="mb-8 max-w-md text-white/90">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 font-semibold transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Feature */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-200 rounded-lg overflow-hidden relative h-80">
            <img 
              src="/assets/Bitmap (20).png" 
              alt="ZX7 Speaker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center px-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">ZX7 SPEAKER</h2>
                <button className="border-2 border-black hover:bg-black hover:text-white px-8 py-3 font-semibold transition">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YX1 Earphones Feature */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
            <img 
              src="/assets/Group 12.jpg" 
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-100 rounded-lg flex items-center px-12">
            <div>
              <h2 className="text-3xl text-black font-bold mb-6">YX1 EARPHONES</h2>
              <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 font-semibold transition">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-black font-bold mb-6">
              BRINGING YOU THE<br />
              <span className="text-orange-500">BEST </span> AUDIO GEAR
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration room available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/assets/Bitmap-2.png" 
              alt="Person with headphones"
              className="w-full max-w-lg rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
     
    </div>
  );
}