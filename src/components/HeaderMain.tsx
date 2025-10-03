"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-gray-800">
            Sick
          </div>

          {/* Search box Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6 relative">
            <input
              type="text"
              placeholder="Enter any product name..."
              className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-gray-600 text-xl">
            {/* Mobile search toggle */}
            <button
              className="md:hidden hover:text-blue-600 transition"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <BsSearch />
            </button>

            <button className="hover:text-blue-600 transition">
              <BiUser />
            </button>
            <button className="hover:text-red-500 transition">
              <FiHeart />
            </button>
            <button className="hover:text-green-600 transition relative">
              <HiOutlineShoppingBag />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Search box Mobile (ẩn/hiện khi click) */}
        {showSearch && (
          <div className="md:hidden mt-3 relative">
            <input
              type="text"
              placeholder="Enter any product name..."
              className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;