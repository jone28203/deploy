"use client";
import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
  img: any;
  title: string;
  desc: string;
  rating: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  // ⭐ Generate stars dynamically
  const generateStars = (rating: number) => {
    return (
      <div className="flex gap-1 text-yellow-500">
        {Array.from({ length: 5 }, (_, i) =>
          i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
        )}
      </div>
    );
  };

  return (
    <div className="bg-white  overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative w-full h-64">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2">{desc}</p>

        <div className="mt-2">{generateStars(rating)}</div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl font-bold text-blue-600">
            ${price}.00
          </span>
          <del className="text-gray-400">${price + 50}.00</del>
        </div>

        {/* CTA */}
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
