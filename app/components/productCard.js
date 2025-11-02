"use clieent"
import Image from "next/image";

export default function ProductCard({ image, newProduct, title, description, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="bg-gray-100 rounded-xl flex items-center justify-center w-full md:w-1/2">
        <Image src={image} alt={title} width={400} height={400} className="object-contain" />
      </div>

      <div className="md:w-1/2 text-center md:text-left space-y-6">
        {newProduct && (
          <p className="uppercase tracking-[8px] text-orange-500 text-sm font-semibold">
            New Product
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 uppercase tracking-wider text-sm rounded-md transition">
          See Product
        </button>
      </div>
    </div>
  );
}
