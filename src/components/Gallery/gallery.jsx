import React from 'react';

const ProductCard = ({ imageSrc, title, subtitle }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-[#E7D37F] font-bold text-lg">{title}</h3>
      <p className="text-white text-sm">{subtitle}</p>
    </div>
  </div>
);

const ProductGridGallery = () => {
  const products = [
    { id: 1, imageSrc: "/src/assets/Images/Home Pics/45.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
    { id: 2, imageSrc: "src/assets/Images/Home Pics/46.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
    { id: 3, imageSrc: "src/assets/Images/Home Pics/47.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
    { id: 4, imageSrc: "src/assets/Images/Home Pics/48.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
    { id: 5, imageSrc: "src/assets/Images/Home Pics/50.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
    { id: 6, imageSrc: "src/assets/Images/Home Pics/51.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
    { id: 7, imageSrc: "src/assets/Images/Home Pics/52.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
    { id: 8, imageSrc: "src/assets/Images/Home Pics/53.jfif", title: "Milk", subtitle: "Millions Of Happy Users" },
  ];

  return (
    <div className="bg-[#674D00] p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* First Row */}
          <div className="col-span-1 row-span-1">
            <ProductCard {...products[0]} />
          </div>
          <div className="col-span-1 row-span-1">
            <ProductCard {...products[1]} />
          </div>
          <div className="col-span-1 row-span-1">
            <ProductCard {...products[2]} />
          </div>
          <div className="col-span-1 row-span-1">
            <ProductCard {...products[3]} />
          </div>

          {/* Second Row */}
          <div className="col-span-1 row-span-1 -mt-16">
            <ProductCard {...products[4]} />
          </div>
          <div className="col-span-1 row-span-1">
            <ProductCard {...products[5]} />
          </div>
          <div className="col-span-1 row-span-1 -mt-40">
            <ProductCard {...products[6]} />
          </div>
          <div className="col-span-1 row-span-1 -mt-36">
            <ProductCard {...products[7]} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductGridGallery;
