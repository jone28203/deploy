"use client";
import React from "react";
import Image from "next/image";

interface SlideProps {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<SlideProps> = ({ img, title, mainTitle, price }) => {
  return (
     <div className="container mx-auto px-4 mt-4">
    <div className=" relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] ">
      {/* Ảnh banner */}
      <Image
        src={img}
        alt={title}
        fill
        sizes="100vw"   // đảm bảo Next.js chọn ảnh đủ lớn cho màn hình
        className="object-cover object-center rounded-xl" // crop vừa khung, ưu tiên giữa ảnh
        priority
        unoptimized     // nếu muốn giữ nguyên ảnh gốc, tránh mờ
      />

      {/* Lớp overlay + text */}
      <div className="absolute  left-[30px] md:left-[70px] inset-0  flex flex-col  justify-center  text-left px-4">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">{title}</h3>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">{mainTitle}</h2>
        <p className="text-sm sm:text-base md:text-lg">{price}</p>
      </div>
    </div>
    </div>
  );
};

export default Slide;
