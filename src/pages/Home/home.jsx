import Navbar from "../../components/Navbar/navbar";
import Vegetables from "../../components/Vegetables/vegetables";
import Softdrinks from "../../components/Softdrinks/softdrinks"
import Fruits from "../../components/Fruits/fruits"
import Gradiants from "../../components/Gradiants/gradiants"
import React, { useState, useEffect } from "react";
import ProductGridGallery from "../../components/Gallery/gallery";
import { FaPhone, FaFacebookF, FaLinkedinIn, FaTwitter, FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const products = [
    {
      name: "Full Cream Milk",
      units: "1500ml",
      image: "src/assets/Images/Home Pics/2.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Dog Feed",
      units: "1000g",
      image: "src/assets/Images/Home Pics/3.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Jam",
      units: "100ml",
      image: "src/assets/Images/Home Pics/4.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Derm Stick",
      units: "1000g",
      image: "src/assets/Images/Home Pics/5.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Full Cream Milk",
      units: "1500ml",
      image: "src/assets/Images/Home Pics/2.jfif",
      description: "On a recent test run of all three services.",
    },
  ];

  // Adjust itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= products.length - itemsPerPage + 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? products.length - itemsPerPage : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [itemsPerPage]); // Run only on itemsPerPage change


    const menuItems = [
        {
          title: 'PRODUCT',
          items: ['Product Overview', 'Omni-Channel', 'Sourcing', 'Compliance & Contracting', 'Payments', 'Data & ReportingPricing']
        },
        {
          title: 'WHY WORKSOME',
          items: ['Product Overview', 'Omni-Channel', 'Sourcing', 'Compliance & Contracting', 'Payments', 'Data & ReportingPricing']
        },
        {
          title: 'RESOURCES',
          items: ['Product Overview', 'Omni-Channel', 'Sourcing', 'Compliance & Contracting', 'Payments', 'Data & ReportingPricing']
        }
      ];
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center text-white pt-10"
        style={{ backgroundImage: "url('src/assets/Images/Home Pics/1.jfif')" }}
      >
       
        <main className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
       
          <div className="relative w-full max-w-5xl ">
          <Navbar />
            <img
              src="src/assets/Images/Home Pics/1.jfif"
              alt="Basket of vegetables"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center p-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-kaushan leading-tight">
                Millions Of
                <br />
                Happy
              </h1>
              <p className="text-sm md:text-base mb-6 font-inria">
                Send unlimited free texts and make WiFi calls
                <br />
                from a free phone number. Download
                <br />
                the free app or sign up online to
                <br />
                pick your free phone number.
              </p>
              <button className="bg-transparent font-inria text-yellow-400 w-1/3 border border-yellow-400 font-bold py-2 px-6 rounded-md hover:bg-yellow-400 hover:text-white transition duration-300">
                Start Now
              </button>
            </div>
          </div>
        </main>
      </div>
      {/* top seller */}
      <div className="bg-[#674D00] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-black mb-8 ml-16">
            Top Seller
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2`}
                >
                  <div className="bg-[#031E00] overflow-hidden rounded-3xl px-8 py-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-tl-2xl object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-2xl text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-white">{product.units}</p>
                      <p className="text-sm md:text-base text-white mb-2">
                        {product.description}
                      </p>
                      <button className="mt-4 px-6 py-2 border-2 border-[#E7D37F] hover:bg-[#E7D37F] text-white font-semibold rounded-xl">
                        Add to Card
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white hover:text-[#E7D37F]"
            >
              <FaLessThan className="w-8 h-8 " />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white  hover:text-[#E7D37F]"
            >
              <FaGreaterThan className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="bg-[#674D00] p-6">
        {/* Content container */}
        <div className="relative z-10 w-full max-w-[90vw] mx-auto p-4">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: "url('src/assets/Images/Home Pics/26.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="relative flex flex-col md:flex-row items-center">
              {/* Image container */}
              <div className="w-full md:w-1/5 p-4">
                <div className="bg-orange-400 rounded-lg overflow-hidden">
                  <img
                    src="src/assets/Images/Home Pics/4.jfif"
                    alt="Orange juice bottle"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/3 p-6 text-center">
                <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">
                  Top Seller
                </h2>
                <p className="text-xl md:text-xl text-white italic">
                  "On A Recent Test Run Of All Three Services, Text
                </p>
                <p className="text-xl md:text-xl text-white italic">
                  Free Was The Fastest, Most
                </p>
                <p className="text-xl md:text-xl text-white italic">
                  Reliable And Easiest To Use."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      < Vegetables/>
      {/* Coca-Cola */}
      <div className="bg-[#674D00] p-4 sm:p-8 md:p-12 lg:p-16 flex justify-center items-center min-h-screen">
        <div className="bg-[#031E00] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-[70vw] flex justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            {/* Image container */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center items-center">
              <img
                src="src/assets/Images/Home Pics/14.png"
                alt="Coca-Cola bottle"
                className="w-full h-auto object-contain transform rotate-[10deg]"
              />
            </div>
            {/* Text content */}
            <div className="w-full md:w-1/2 md:pl-8 text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                Coca Cola
              </h2>
              <p className="text-xl sm:text-2xl text-white mb-2">1 LITRE</p>
              <p className="text-sm sm:text-base text-white mb-6">
                "On A Recent Test Run Of
                <br />
                All Three Services."
              </p>
              <button className="w-full py-2 px-4 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-green-900 transition duration-300">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <Softdrinks/>
      {/* Products */}
      <div className="bg-[#674D00] p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Original Formula */}
            <div className="col-span-1 row-span-1 bg-pink-500 rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/30.jfif"
                alt="Original Formula"
                className="w-full h-full object-fit"
              />
            </div>
            {/* Soft Drinks */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-white rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/24.jfif"
                alt="Soft Drinks"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mehran Products */}
            <div className="col-span-1 row-span-1 bg-white rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/23.jfif"
                alt="Mehran Products"
                className="w-full h-full fit"
              />
            </div>

            {/* Number 1 */}
            <div className="col-span-1 row-span-1 bg-blue-300 rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/26.jfif"
                alt="Number 1"
                className="w-full h-full object-fit"
              />
            </div>

            {/* Cleaning Products */}
            <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/25.jfif"
                alt="Cleaning Products"
                className="w-full h-full object-fit"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Banner2 */}
      <div className="bg-[#674D00] p-6">
        {/* Content container */}
        <div className="relative z-10 w-full max-w-[90vw] mx-auto p-4">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: "url('src/assets/Images/Home Pics/26.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="relative flex flex-col md:flex-row items-center">
              {/* Image container */}
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-orange-400 rounded-lg overflow-hidden">
                  <img
                    src="src/assets/Images/Home Pics/28.jfif"
                    alt="Orange juice bottle"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/3 p-6 text-center">
                <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">
                  Top Seller
                </h2>
                <p className="text-xl md:text-xl text-white italic">
                  "On A Recent Test Run Of All Three Services, Text
                </p>
                <p className="text-xl md:text-xl text-white italic">
                  Free Was The Fastest, Most
                </p>
                <p className="text-xl md:text-xl text-white italic">
                  Reliable And Easiest To Use."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fruits/>
      {/* Banner3 */}
      <div className="bg-[#674D00] p-6">
        {/* Content container */}
        <div className="relative z-10 w-full max-w-[90vw] mx-auto p-4">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: "url('src/assets/Images/Home Pics/26.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="relative flex flex-col md:flex-row items-center">
              {/* Image container */}
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-orange-400 rounded-lg overflow-hidden">
                  <img
                    src="src/assets/Images/Home Pics/28.jfif"
                    alt="Orange juice bottle"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/3 p-6 text-center">
                <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">
                  Top Seller
                </h2>
                <p className="text-xl md:text-xl text-white italic">
                  "On A Recent Test Run Of All Three Services, Text
                </p>
                <p className="text-xl md:text-xl text-white italic">
                  Free Was The Fastest, Most
                </p>
                <p className="text-xl md:text-xl text-white italic">
                  Reliable And Easiest To Use."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products2 */}
      <div className="bg-[#674D00] p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Original Formula */}
            <div className="col-span-1 row-span-1 bg-pink-500 rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/43.jfif"
                alt="Original Formula"
                className="w-full h-full object-fit"
              />
            </div>
            {/* Soft Drinks */}
            <div className="col-span-2 md:col-span-1 row-span-2 bg-white rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/39.jpg"
                alt="Soft Drinks"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mehran Products */}
            <div className="col-span-1 row-span-1 bg-white rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/40.jfif"
                alt="Mehran Products"
                className="w-full h-full fit"
              />
            </div>

            {/* Number 1 */}
            <div className="col-span-1 row-span-1 bg-blue-300 rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/42.jpg"
                alt="Number 1"
                className="w-full h-full object-fit"
              />
            </div>

            {/* Cleaning Products */}
            <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="src/assets/Images/Home Pics/25.jfif"
                alt="Cleaning Products"
                className="w-full h-full object-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <Gradiants/>
      {/* Gallery */}
      <ProductGridGallery/>
      {/* Footer */}
      <footer className="bg-[#031E00] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">YOUR LOGO</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    <a href="#" className="hover:underline hover:text-[#E7D37F] ">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-end gap-4">
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaPhone /></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><BiLogoGmail/></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaFacebookF /></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaLinkedinIn /></a>
          <a href="#" className="text-2xl hover:text-[#E7D37F]"><FaTwitter /></a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
