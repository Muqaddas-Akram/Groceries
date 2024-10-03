import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
   
    <>
    {/* navbar */}
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-5 md:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white text-3xl">Your Logo</h1>
          </div>
          
          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:justify-center flex-1 md:ml-8 absolute lg:top-0 top-16 left-0 w-full bg-black bg-opacity-30 md:bg-transparent md:relative`}
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

  {/* contact form */}
  <div className="min-h-screen pt-20 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/Images/Contact Pics/Pic.jfif")' }}>
  <div className="p-8 rounded-lg w-full max-w-md">
    <h1 className="text-4xl text-white mb-6 text-center font-inria">Contact Us</h1>
    <p className="text-white text-sm mb-6 text-center font-inria">
      TextFree is a mobile application and web <br />service that allows users to send
    </p>
    <form>
      <div className="mb-4">
        <label className="block text-white text-sm mb-2 font-inria" htmlFor="name"> 
          Name:
        </label>
        <input
          type="text"
          placeholder="Enter Your Name..."
          className="w-full px-3 py-2 bg-gray-200 bg-opacity-50 rounded text-white placeholder-[#343434] font-inria"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm mb-2 font-inria" htmlFor="email"> 
          E-Mail:
        </label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          className="w-full px-3 py-2 bg-gray-200 bg-opacity-50 rounded text-white placeholder-[#343434] font-inria"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm mb-2 font-inria" htmlFor="password"> 
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          className="w-full px-3 py-2 bg-gray-200 bg-opacity-50 rounded text-white placeholder-[#343434] font-inria"
        />
      </div>
      <div className="mb-6">
        <label className="block text-white text-sm mb-2 font-inria" htmlFor="message"> 
          Message:
        </label>
        <textarea
          placeholder="Message..."
          className="w-full px-3 py-2 bg-gray-200 bg-opacity-50 rounded text-white placeholder-[#343434] h-24 font-inria"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-64 text-center bg-transparent hover:bg-[#E7D37F] border-2 border-[#E7D37F] text-white py-4 rounded-2xl flex items-center justify-center font-inria"
        >
          Submit
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</div>

            
    
    </>
  );
};

export default Contact;