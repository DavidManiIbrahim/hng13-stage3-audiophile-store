import React from 'react'
import Link from 'next/link'
import { ShoppingCart, ChevronRight } from 'lucide-react';

interface CategoryItem {
  name: string;
  img: string;
  href: string;
}

const Category = (): React.ReactElement => {
  return (
    <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto  text-bg-dark object-fit-contain grid md:grid-cols-3 gap-8">
          {[
            { name: 'HEADPHONES', img: '/assets/shared/desktop/image-category-thumbnail-headphones.png',href:'/pages/headphones' },
            { name: 'SPEAKERS', img: '/assets/shared/desktop/image-category-thumbnail-speakers.png',href:'/pages/speakers' },
            { name: 'EARPHONES', img: '/assets/shared/desktop/image-category-thumbnail-earphones.png',href:'/pages/earphones' }
          ].map((category, idx) => (
            <div key={idx} className="bg-white   p-8 text-center hover:shadow-lg transition group">
              <img 
                src={category.img} 
                alt={category.name}
                className="w-50 h-50 mx-auto mb-6 "
              />
              <h3 className="font-bold text-sm text-gray-900 text-xl mb-3">{category.name}</h3>
              <Link href={category.href}>
              <button className="text-sm text-gray-600 cursor-pointer group-hover:text-orange-500 transition flex items-center justify-center mx-auto">
                SHOP <ChevronRight size={16} className="ml-1" />
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Category