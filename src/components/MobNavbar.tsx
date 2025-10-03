"use client";
import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Demo state cho hamburger toggle

  const menuItems = [
    { icon: AiOutlineHome, label: "Home", onClick: () => console.log("Go to Home") },
    { icon: AiOutlineAppstore, label: "Categories", onClick: () => console.log("Go to Categories") },
    { icon: FiHeart, label: "Wishlist", badge: 0, onClick: () => console.log("Go to Wishlist") },
    { icon: HiOutlineShoppingBag, label: "Cart", badge: 2, onClick: () => console.log("Go to Cart") },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Toggle mobile menu");
  };

  return (
    <>
      

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-40">
        <div className="flex justify-around items-center h-16 px-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="relative flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-200 hover:scale-110"
              aria-label={item.label}
            >
              <item.icon className="text-xl" />
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobNavbar;