import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ShopByCategory = () => {
  return (
    <div className="h-full mt-20 border-b-[3px] pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mx-4 sm:mx-64 my-8 text-2xl sm:text-5xl font-medium">
          Shop By Categories
        </div>
        <div className="mx-4 sm:mx-0 flex justify-center sm:justify-end items-center md:mr-64">
          <button className="m-3 border-2 bg-black rounded-md px-4 py-2 text-white">
            <FaArrowLeftLong />
          </button>
          <button className="m-3 border-2 bg-black rounded-md px-4 py-2 text-white">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div>
        {/* Shopping cards from here */}
        <div className="mx-4 sm:mx-64 flex flex-wrap">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="mx-2 sm:mx-4 my-6 relative border-gray-300"
              style={{ flex: "1 1 calc(25% - 16px)" }}
            >
              <img
                className="opacity-[0.8] w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwRfjqEl6AR2JULiAXiHTQvGByfe_rjcK0Q&usqp=CAU"
                alt=""
              />
              <button className="absolute bottom-3 left-4 sm:left-[55px] z-10 text-white bg-black px-2 py-1 rounded-md">
                Iphone 15
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
