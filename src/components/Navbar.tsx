"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Categories",
    "Men's",
    "Women's",
    "Jewelry",
    "Perfume",
    "Blog",
    "Hot Offers",
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-10 text-gray-700 font-medium">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-blue-600 transition-all duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100 last:border-b-0"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;