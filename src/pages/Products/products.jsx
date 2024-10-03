import React, { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaSearch,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fruits = [
    { name: "Dragon Fruit", image: "src/assets/Images/Product Pics/2.webp" },
    { name: "Pomegranate", image: "src/assets/Images/Product Pics/3.jpg" },
    { name: "Orange", image: "src/assets/Images/Product Pics/4.jfif" },
    { name: "Apple", image: "src/assets/Images/Product Pics/5.jpg" },
    { name: "Watermelon", image: "src/assets/Images/Product Pics/6.jpg" },
    { name: "Grapes", image: "src/assets/Images/Product Pics/7.webp" },
    { name: "Loquat", image: "src/assets/Images/Product Pics/8.jfif" },
    { name: "Orange (sliced)", image: "src/assets/Images/Product Pics/9.jpg" },
  ];
  const FruitCard = ({ fruit }) => (
    <div className="bg-white p-4 rounded-lg ">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-full h-60 object-cover mb-4 rounded-md"
      />
      <div className="flex items-center text-yellow-400 font-semibold mb-1">
        <span className="ml-2 text-yellow-400 text-4xl  font-kaushan">
          Fresh
        </span>
        <span className="text-gray-800 font-bold ml-40 text-2xl font-inria">
          4.3
        </span>
        <FaStar className="text-yellow-400  text-2xl" />
      </div>
      <p className="text-xl text-gray-600 mb-4 ml-2 font-inria">
        A mango is an edible stone fruit.
      </p>
      <button className="w-full py-2 px-4 bg-white text-black font-bold rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-white transition duration-300 shadow-[#9b9797] shadow-lg font-inria">
        Add Cart
      </button>
    </div>
  );
  const fruits1 = [
    { name: "Dragon Fruit", image: "src/assets/Images/Product Pics/12.jfif" },
    { name: "Pomegranate", image: "src/assets/Images/Product Pics/13.jpg" },
    { name: "Orange", image: "src/assets/Images/Product Pics/15.jfif" },
    { name: "Apple", image: "src/assets/Images/Product Pics/16.webp" },
    { name: "Watermelon", image: "src/assets/Images/Product Pics/17.jpg" },
    { name: "Grapes", image: "src/assets/Images/Product Pics/18.jfif" },
    { name: "Loquat", image: "src/assets/Images/Product Pics/19.jfif" },
    {
      name: "Orange (sliced)",
      image: "src/assets/Images/Product Pics/20.jfif",
    },
  ];
  const FruitCard1 = ({ fruit }) => (
    <div className="bg-white p-4 rounded-lg ">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-full h-60 object-cover mb-4 rounded-md"
      />
      <div className="flex items-center text-yellow-400 font-semibold mb-1">
        <span className="ml-2 text-yellow-400 text-4xl  font-kaushan">
          Fresh
        </span>
        <span className="text-gray-800 font-bold ml-40 text-2xl font-inria">
          4.3
        </span>
        <FaStar className="text-yellow-400  text-2xl" />
      </div>
      <p className="text-xl text-gray-600 mb-4 ml-2 font-inria">
        A mango is an edible stone fruit.
      </p>
      <button className="w-full py-2  font-inria px-4 bg-white text-black font-bold rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-white transition duration-300 shadow-[#9b9797] shadow-lg">
        Add Cart
      </button>
    </div>
  );
  const fruits2 = [
    { name: "Dragon Fruit", image: "src/assets/Images/Product Pics/24.jfif" },
    { name: "Pomegranate", image: "src/assets/Images/Product Pics/25.jfif" },
    { name: "Orange", image: "src/assets/Images/Product Pics/26.jfif" },
    { name: "Apple", image: "src/assets/Images/Product Pics/27.jfif" },
    { name: "Watermelon", image: "src/assets/Images/Product Pics/28.jfif" },
    { name: "Grapes", image: "src/assets/Images/Product Pics/29.jpg" },
    { name: "Loquat", image: "src/assets/Images/Product Pics/29.jfif" },
    {
      name: "Orange (sliced)",
      image: "src/assets/Images/Product Pics/30.jpeg",
    },
  ];
  const FruitCard2 = ({ fruit }) => (
    <div className="bg-white p-4 rounded-lg ">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-full h-60 object-cover mb-4 rounded-md"
      />
      <div className="flex items-center text-yellow-400 font-semibold mb-1">
        <span className="ml-2 text-yellow-400  font-kaushan text-4xl">
          Fresh
        </span>
        <span className="text-gray-800 font-bold ml-40 text-2xl font-inria">
          4.3
        </span>
        <FaStar className="text-yellow-400  text-2xl" />
      </div>
      <p className="text-xl text-gray-600 mb-4 font-inria ml-2">
        A mango is an edible stone fruit.
      </p>
      <button className="w-full py-2 px-4 bg-white font-inria text-black font-bold rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-white transition duration-300 shadow-[#9b9797] shadow-lg">
        Add Cart
      </button>
    </div>
  );
  const fruits3 = [
    { name: "Dragon Fruit", image: "src/assets/Images/Product Pics/21.jfif" },
    { name: "Pomegranate", image: "src/assets/Images/Product Pics/22.jfif" },
  ];
  const FruitCard3 = ({ fruit }) => (
    <div className="bg-white p-4 rounded-lg flex flex-col items-center">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-96 h-96 object-cover mb-4 rounded-md"
      />
      <div className="flex items-center text-yellow-400 font-semibold mb-1">
        <span className="text-yellow-400 text-4xl  font-kaushan">Fresh</span>
        <div className="flex items-center ml-4">
          <span className="text-gray-800 font-bold text-2xl font-inria">
            4.3
          </span>
          <FaStar className="text-yellow-400 text-2xl ml-1" />
        </div>
      </div>
      <p className="text-xl font-inria text-gray-600 mb-4 text-center">
        A mango is an edible stone fruit.
      </p>
      <button className="w-1/2 font-inria py-2 px-4 bg-white text-black font-bold rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-white transition duration-300 shadow-[#9b9797] shadow-lg">
        Add to Cart
      </button>
    </div>
  );

  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        {/* Header */}
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-5 md:px-20 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-gray-400 text-3xl">Your Logo</h1>
              </div>

              {/* Search Bar */}
              <div className="relative hidden md:flex md:flex-grow justify-end">
                <div className="relative w-1/2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-12 pr-4 py-1 rounded-full bg-white w-full"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Hamburger Menu for Small Screens */}
              <div className="md:hidden ml-auto">
                <button
                  onClick={toggleMenu}
                  className="text-gray-400 focus:outline-none"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>

              {/* Navigation Links */}
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } md:items-center md:justify-end flex-1 md:ml-8 absolute lg:top-0 top-16 left-0 w-full bg-black bg-opacity-70 md:bg-transparent md:relative md:flex`}
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
                    to="/"
                    className="text-gray-400 hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
                  >
                    Home
                  </Link>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
                  >
                    Store
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:underline hover:text-[#E7D37F] px-3 py-2 rounded-md text-lg"
                  >
                    Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-40 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 ">
          {/* Left Column */}
          <div className="w-full md:w-1/2 pt-20 space-y-6 px-4 md:px-8 lg:px-16">
            <h1 className="text-7xl md:text-7xl font-light text-gray-400 font-inria">
              Testy and
            </h1>
            <span className="font-bold text-8xl  font-kaushan text-yellow-400">
              {" "}
              Fresh
            </span>

            <p className="text-gray-600 max-w-md text-2xl font-inria">
              A mango is an edible stone fruit produced by the tropical tree
              Mangifera indica.
            </p>
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
              <FaStarHalfAlt className="text-yellow-400 text-2xl" />
            </div>
            <button
              type="submit"
              className="w-full md:w-1/2 font-inria bg-gray-100 border-solid border-2 border-spacing-9 text-2xl border-yellow-400 text-black py-2 rounded-md font-bold hover:bg-yellow-400 shadow-[#9b9797] shadow-lg"
            >
              BUY NOW
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 ">
            <div className="bg-white rounded-tl-[100px] rounded-bl-[100px] overflow-hidden shadow-lg">
              <img
                src="src/assets/Images/Product Pics/1.jfif"
                alt="Fresh Mango"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </main>
      </div>
      {/* Card1 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fruits.map((fruit, index) => (
            <FruitCard key={index} fruit={fruit} />
          ))}
        </div>
      </div>
      {/*Banner1 */}
      <div className="relative w-full h-80 md:h-80 lg:h-96 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mt-5 mb-5"
          style={{
            backgroundImage: "url('src/assets/Images/Product Pics/10.jfif')",
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <h1 className="text-white text-3xl md:text-4xl  font-inrialg:text-5xl font-light mb-2">
            Testy and
          </h1>
          <span className="text-yellow-400 font-bold  font-kaushan text-8xl md:text-6xl lg:text-8xl">
            Fresh
          </span>
          <p className="text-white font-inria text-sm md:text-base lg:text-lg max-w-md mt-2">
            A mango is an edible stone fruit produced by the tropical tree
            Mangifera indica.
          </p>
        </div>

        {/* Strawberry Image */}
        <img
          src="src/assets/Images/Product Pics/11.png"
          alt="Fresh Strawberries"
          className="absolute right-0 bottom-0 w-1/2 md:w-2/5 lg:w-1/3 object-contain"
        />
      </div>
      {/* Card2 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fruits1.map((fruit, index) => (
            <FruitCard1 key={index} fruit={fruit} />
          ))}
        </div>
      </div>
      {/* Cards 3 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {fruits3.map((fruit, index) => (
            <FruitCard3 key={index} fruit={fruit} />
          ))}
        </div>
      </div>
      {/* Banner2 */}
      <div className="relative w-full h-80 md:h-80 lg:h-96 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mt-5 mb-5"
          style={{
            backgroundImage: "url('src/assets/Images/Product Pics/23.jfif')",
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-white  font-inria text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Testy and
          </h1>
          <span className="text-yellow-400  font-kaushan font-bold text-8xl md:text-6xl lg:text-8xl">
            Fresh
          </span>
          <p className="text-white font-inria text-sm md:text-base lg:text-lg max-w-md mt-2">
            A mango is an edible stone fruit produced by the tropical tree
            Mangifera indica.{" "}
          </p>
        </div>
      </div>
      {/* Cards4 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fruits2.map((fruit, index) => (
            <FruitCard2 key={index} fruit={fruit} />
          ))}
        </div>
      </div>
      {/* Banner3 */}
      <div className="relative w-full h-80 md:h-80 lg:h-96 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mt-5 "
          style={{
            backgroundImage: "url('src/assets/Images/Product Pics/31.jpg')",
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-end text-right px-6 md:px-12 lg:px-24">
          <h1 className="text-white font-inria text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Testy and
          </h1>
          <span className="text-yellow-400  font-kaushan font-bold text-8xl md:text-6xl lg:text-8xl">
            Fresh
          </span>
          <p className="text-white font-inria text-sm md:text-base lg:text-lg max-w-md mt-2">
            A mango is an edible stone fruit produced by the tropical tree
            Mangifera indica.
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
