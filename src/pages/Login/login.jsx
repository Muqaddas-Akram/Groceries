import React, { useState } from 'react';
import { FaFacebook, FaTimes, FaBars } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* navbar */}
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-5 md:px-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-black text-3xl">Your Logo</h1>
              </div>
              
              {/* Hamburger Menu for Small Screens */}
              <div className="md:hidden ml-auto">
                <button
                  onClick={toggleMenu}
                  className="text-black focus:outline-none"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
              
              {/* Navigation Links */}
              <div
                className={`${
                  isMenuOpen ? 'block' : 'hidden'
                } md:flex md:items-center md:justify-end flex-1 md:ml-8 absolute lg:top-0 top-16 left-0 w-full bg-black bg-opacity-30 md:bg-transparent md:relative`}
              >
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
                    Contact Us
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

        {/* Left side - Login Form */}
      <div className="flex-grow flex flex-col justify-center items-center font-inria">
        <h2 className="text-3xl font-bold mb-8">User Login</h2>
        
        <div className="flex items-center mb-6">
          <button className="mx-2 p-2 border rounded-full">
            <SiGmail className="text-2xl text-red-500" />
          </button>
          <span className="mx-2">Or</span>
          <button className="mx-2 p-2 border rounded-full">
            <FaFacebook className="text-2xl text-blue-600" />
          </button>
        </div>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail:</label>
            <input type="email" id="email" placeholder="Enter your Email..." 
                  className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
            <input type="password" id="password" placeholder="Enter your Password..." 
                  className="w-full px-3 py-2 border rounded-md" />
          </div>
          <button type="submit" className="w-full bg-gray-100 border-solid border-2 shadow-[#9b9797] shadow-lg border-spacing-9 text-2xl border-[#E7D37F] text-black py-2 rounded-md font-bold hover:bg-[#E7D37F]">
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link  to='/about' className="text-sm text-gray-600 hover:underline">Help!</Link><br/>
          <a href="#" className="text-sm text-gray-600 hover:underline">Forgot Password?</a>
        </div>
      </div>

      {/* Right side - Image and Welcome Text */}
      <div className="hidden lg:block w-1/2 relative rounded-tl-[250px] overflow-hidden">
        <img src="src/assets/Images/Login Pics/pic.jfif" alt="Welcome" className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-center font-inria">Welcome to Website</h2>
          <p className="text-white text-center font-inria">
            TextFree is a mobile application and web service that allows users to send and receive text
            messages, as well as make and receive VoIP phone calls, for free over the
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
