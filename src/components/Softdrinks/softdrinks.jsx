import React, { useState, useEffect } from "react";

function Softdrinks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const products = [
    {
      name: "Full Cream Milk",
      units: "1000ML",
      image: "src/assets/Images/Home Pics/15.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Full Cream Milk",
      units: "1000ML",
      image: "src/assets/Images/Home Pics/16.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Full Cream Milk",
      units: "1000ML",
      image: "src/assets/Images/Home Pics/17.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Full Cream Milk",
      units: "1000ML",
      image: "src/assets/Images/Home Pics/18.jfif",
      description: "On a recent test run of all three services.",
    },
    {
      name: "Full Cream Milk",
      units: "1000ML",
      image: "src/assets/Images/Home Pics/19.jfif",
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
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [itemsPerPage]); // Run only on itemsPerPage change

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / itemsPerPage));
  };

  return (
    <>
      <div className="bg-[#674D00] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-black mb-20 ml-16 underline">
          Softdrinks
          </h2>
          <div className="relative overflow-hidden ml-20">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
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
                      className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl object-cover"
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
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Softdrinks;
