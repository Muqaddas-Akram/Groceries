import React from "react";
import left from "../../assets/Images/About Pics/1.jpg";
import right from "../../assets/Images/About Pics/2.jfif";
import Navbar from "../../components/Navbar/navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
 <div className="min-h-screen bg-white flex flex-col items-center justify-center">
  <Navbar/>
  <main className="mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 relative">
        <img
          src={left}
          alt="Various foods"
          className="w-full h-auto md:h-[1000px] object-cover"
          style={{ clipPath: 'polygon(8.25% 0%, 100% 0%, 73.72% 45.15%, 68.72% 80%, 45% 80%, 0% 80%, 0% 40%, 0% 0%)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="text-left max-w-md px-4 md:pl-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-yellow-400 mb-4 font-kaushan">
              About Us
            </h1>
            <p className="text-white text-base md:text-lg font-semibold">
              TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative mt-8 md:mt-0 md:-ml-40"> {/* Adjust margin for small screens */}
        <img
          src={right}
          alt="Man shopping in grocery store"
          className="w-full h-auto md:h-[1000px] object-cover"
          style={{ clipPath: 'polygon(31% 0%, 100% 0%, 100% 80%, 0% 80%, 4.25% 46.75%)' }}
        />
      </div>
    </div>
  </main>
</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-20 -mt-28 px-4">
        <div className="text-center">
          <img
            src="src/assets/Images/About Pics/3.jfif"
            alt="Food items"
            className="w-full h-96 sm:h-96 lg:h-96 object-cover mb-2"
          />
          <h3 className="font-bold font-inria">Free text online</h3>
          <p className="text-sm font-inria text-[#808080]">
            TextFree is a mobile application and web service
          </p>
          <button className="mt-2 font-inria text-[#808080] underline">
            See More...
          </button>
        </div>
        <div className="text-center">
          <img
            src="src/assets/Images/About Pics/4.jfif"
            alt="Person with groceries"
            className="w-full h-96 sm:h-96 lg:h-96 object-cover mb-2"
          />
          <h3 className="font-bold font-inria">Free text online</h3>
          <p className="text-sm text-[#808080] font-inria">
            TextFree is a mobile application and web service
          </p>
          <button className="mt-2 font-inria text-[#808080] underline">
            See More...
          </button>
        </div>
        <div className="text-center">
          <img
            src="src/assets/Images/About Pics/5.jfif"
            alt="Grocery bag"
            className="w-full h-96 sm:h-96 lg:h-96 object-cover mb-2"
          />
          <h3 className="font-bold font-inria">Free text online</h3>
          <p className="text-sm font-inria text-[#808080]">
            TextFree is a mobile application and web service
          </p>
          <button className="mt-2 font-inria text-[#808080] underline">
            See More...
          </button>
        </div>
        <div className="text-center p-4 pt-20">
          <h2 className="text-2xl font-bold mb-2 font-inria">Free text online</h2>
          <p className="mb-4 text-[#808080] font-inria">
            TextFree is a mobile application and web service that allows users
            to send and receive text messages, as well as make and receive VoIP
            phone calls, for free over .
          </p>
         <Link to='/login'><button className=" text-[#808080] hover:underline font-inria">Sign Up</button></Link>
        </div>
      </div>

      <section className="text-[#808080] bg-[#F0F0F0]">
        <div className="container py-20">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-full "
              src="src/assets/Images/About Pics/6.jfif"
            />
            <div className="lg:w-1/2 w-full pl-20 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 font-inria text-3xl title-font font-medium mb-1">
                Free text online
              </h1>
              <p className="leading-relaxed font-inria">
                TextFree is a mobile application and web service that allows
                users to send and receive text messages, as well as make and
                receive VoIP phone calls, for free over. TextFree is a mobile
                application and web service that allows users to send and
                receive text messages, as well as make and receive VoIP phone
                calls, for free over.
              </p>
              <div className="flex justify-center w-full mt-2">
                <button className="text-[#808080] font-inria underline">
                  See More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-[#808080]">
        <div className="container py-20">
          <div className="lg:w-4/5 mx-auto flex flex-wrap lg:flex-row-reverse">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-full"
              src="src/assets/Images/About Pics/7.jfif"
            />
            <div className="lg:w-1/2 w-full lg:pr-20 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 font-inria text-3xl title-font font-medium mb-1">
                Free text online
              </h1>
              <p className="leading-relaxed font-inria">
                TextFree is a mobile application and web service that allows
                users to send and receive text messages, as well as make and
                receive VoIP phone calls, for free over. TextFree is a mobile
                application and web service that allows users to send and
                receive text messages, as well as make and receive VoIP phone
                calls, for free over.
              </p>
              <div className="flex justify-center w-full mt-2">
                <button className="text-[#808080] font-inria underline">
                  See More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F0F0F0]">
        <h1 className="text-center text-4xl py-10 font-inria">About Services</h1>
        <p className="text-sm text-[#808080] font-inria text-center">
          TextFree is a mobile application and web service <br />
          that allows users to send and receive text
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-20 px-16 gap-x-8 justify-center items-center">
          <div className="text-center">
            <img
              src="src/assets/Images/About Pics/8.jfif"
              alt="Food items"
              className="w-full h-96 sm:h-96 lg:h-96 object-cover mb-2"
            />
            <h3 className="font-bold font-inria">Free text online</h3>
            <p className="text-sm font-inria text-[#808080]">
              TextFree is a mobile application and web service
            </p>
            <button className="mt-2 font-inria text-[#808080] underline">
              See More...
            </button>
          </div>
          <div className="text-center">
            <img
              src="src/assets/Images/About Pics/9.webp"
              alt="Person with groceries"
              className="w-full h-96 sm:h-96 lg:h-96 object-cover mb-2"
            />
            <h3 className="font-bold font-inria">Free text online</h3>
            <p className="text-sm text-[#808080] font-inria">
              TextFree is a mobile application and web service
            </p>
            <button className="mt-2 font-inria text-[#808080] underline">
              See More...
            </button>
          </div>
          <div className="text-center">
            <img
              src="src/assets/Images/About Pics/10.jfif"
              alt="Grocery bag"
              className="w-full h-96 sm:h-96 lg:h-96 object-cover mb-2"
            />
            <h3 className="font-bold">Free text online</h3>
            <p className="text-sm text-[#808080] font-inria">
              TextFree is a mobile application and web service
            </p>
            <button className="mt-2 text-[#808080] font-inria underline">
              See More...
            </button>
          </div>
        </div>
      </div>

      <section className="text-[#808080]">
        <div className="container py-20">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-full "
              src="src/assets/Images/About Pics/11.jfif"
            />
            <div className="lg:w-1/2 w-full pl-20 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 font-inria text-3xl title-font font-medium mb-1">
                Free text online
              </h1>
              <p className="leading-relaxed font-inria">
                TextFree is a mobile application and web service that allows
                users to send and receive text messages, as well as make and
                receive VoIP phone calls, for free over. TextFree is a mobile
                application and web service that allows users to send and
                receive text messages, as well as make and receive VoIP phone
                calls, for free over.
              </p>
              <div className="flex justify-center w-full mt-2">
                <button className="text-[#808080] underline font-inria">
                  See More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
