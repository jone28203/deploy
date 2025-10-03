import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const HeaderTop: React.FC = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-2">
          
          {/* Social icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <BsFacebook className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="text-gray-600 hover:text-pink-500 transition"
            >
              <BsInstagram className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
              className="text-gray-600 hover:text-sky-500 transition"
            >
              <BsTwitter className="w-5 h-5" />
            </a>
          </div>

          {/* Center text */}
          <div className="text-base text-gray-500 font-medium">
            <strong>Free Shipping</strong>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <select
              name="cur"
              id="cur"
              className=" px-2 py-1 text-sm bg-white text-gray-500 "
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>

            <select
              name="language"
              id="language"
              className="px-2 py-1 text-sm bg-white text-gray-500"
            >
              <option value="vietnam">Tiếng Việt</option>
              <option value="english">Tiếng Anh</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
