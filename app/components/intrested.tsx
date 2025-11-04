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
         <h2 className="text-3xl text-black font-bold text-center mb-12 tracking-wider">YOU MAY ALSO LIKE</h2>
        <div className="grid text-black md:grid-cols-3 gap-8">
          {[
            { name: 'XX99 MARK I', img: '/assets/shared/desktop/image-category-thumbnail-headphones.png', href: '/pages/categories/headphones/xx99mark1' },
            { name: 'XX59', img: '/assets/shared/desktop/image-xx59-headphones.jpg', href: '/pages/categories/headphones/xx59' },
            { name: 'ZX9 SPEAKER', img: '/assets/shared/desktop/image-category-thumbnail-speakers.png', href: '/pages/categories/speaker/zx9' }
          ].map((product, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <img src={product.img} alt={product.name} className="w-full object-contain h-48" />
              </div>
              <h3 className="font-bold tracking-wider">{product.name}</h3>
              <Link href={product.href}>
              <button className="bg-orange-400 cursor-pointer hover:bg-orange-500 text-white px-6 py-3 font-bold tracking-wider transition">
                SEE PRODUCT
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Category