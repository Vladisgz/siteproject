import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { iphone, macbook, dyson, appleWatch } from "../assets";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const data = [{ iphone, macbook, dyson, appleWatch }];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full  max-w-full overflow-x-hidden">
      <div className="w-screen sm:h-[700px] h-56 relative">
        <div
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={iphone}
            alt="img1"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={macbook}
            alt="img2"
          />
          <img
            className="w-screen h-full object-cover"
            src={dyson}
            alt="img3"
          />
          <img
            className="w-screen h-full object-cover"
            src={appleWatch}
            alt="img4"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-2 sm:gap-8 bottom-5 sm:bottom-40">
          <div
            onClick={prevSlide}
            className="w-7 h-7 sm:w-14 sm:h-14 border-[1px] rounded-full text-slate-700 border-slate-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <BsArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-7 h-7 sm:w-14 sm:h-14 border-[1px] rounded-full text-slate-700 border-slate-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
