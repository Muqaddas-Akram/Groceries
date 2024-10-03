import React, { useState } from "react";
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-5 md:px-20">
      <div className="max-w-7xl mr-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white text-3xl">Your Logo</h1>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:flex md:flex-grow mr-10 justify-end">
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-1 rounded-full bg-white w-full"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-gray-500 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:items-center md:justify-end flex-1 md:ml-8 absolute lg:top-0 top-16 left-0 w-full bg-black bg-opacity-30 md:bg-transparent md:relative md:flex`}
          >
            <div className="relative md:hidden flex-grow mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 rounded-full bg-white w-full"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <Link
                to='/'
                className="text-white hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
              >
                Home
              </Link>
              <Link
                to='/products'
                className="text-white hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
              >
                Store
              </Link>
              <Link
                to='/contact'
                className="text-white hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
              >
                Contact
              </Link>
              <Link
                to='/about'
                className="text-white hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
