import React from 'react'

const About: React.FC = () => {
  return (
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
  )
}

export default About