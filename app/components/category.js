import React from 'react'
import { ShoppingCart, ChevronRight } from 'lucide-react';

const category = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-bg-dark object-fit-contain grid md:grid-cols-3 gap-8">
          {[
            { name: 'HEADPHONES', img: '/assets/image-removebg-preview(41)-1.png' },
            { name: 'SPEAKERS', img: '/assets/image-removebg-preview(38).png' },
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
  )
}

export default category