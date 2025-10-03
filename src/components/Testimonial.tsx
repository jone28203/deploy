import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>

      {/* Flex row layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Testimonial Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <Image
              src="/banner1.jpg"
              width={200}
              height={200}
              alt="avatar"
              className="rounded-full border-4 border-gray-200 shadow"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Elsa Doe</h3>
          <p className="text-gray-500 mb-6">CEO & Founder, Invision</p>

          {/* Quote Icon */}
          <div className="flex justify-center mb-4">
            <Image
              src="/svg.svg"
              width={40}
              height={40}
              alt="quote"
              className="opacity-70"
            />
          </div>

          {/* Feedback */}
          <p className="text-gray-600 leading-relaxed">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            magni repellat veniam unde laborum corrupti odio voluptatibus,
            architecto rem nihil similique magnam reiciendis maiores qui alias
            dignissimos nemo id eligendi."
          </p>
        </div>

        {/* Promo Section */}
        <div className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg text-center text-white py-12 px-6 flex flex-col justify-center">
          <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full mb-4 shadow hover:scale-105 transition ">
            25% DISCOUNT
          </button>
          <h2 className="text-3xl font-bold mb-2">Summer Collection</h2>
          <p className="text-lg">
            Starting @ $20{" "}
            <strong className="underline cursor-pointer">Shop Now</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
