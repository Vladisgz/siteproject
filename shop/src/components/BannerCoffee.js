import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { surf, starb, vergano, shop } from "../assets";

const BannerCoffee = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const data = [
  //   "https://img.freepik.com/free-photo/close-up-hand-pouring-milk-delicious-coffee-cup_23-2148865585.jpg?w=2000&t=st=1688984502~exp=1688985102~hmac=d14d95ca7b20cb5da93a32949c7cd5d238b1f9e2c97ba4c4479127bff2eef16b",
  //   "https://img.freepik.com/free-photo/tool-used-coffee-press-cup_23-2149878081.jpg?w=2000&t=st=1688984515~exp=1688985115~hmac=f2188968006235c3c3dbb99996f65a9b4fd7f060b2a3d44d6c41e0b5dac6dbe5",
  //   "https://img.freepik.com/free-photo/tool-used-coffee-press_23-2149878069.jpg?w=2000&t=st=1688984518~exp=1688985118~hmac=edf17e1578bd966293e8a78531980c3d70a60cfb7eb4c6d83f27bb7da58dcee4",
  //   "https://img.freepik.com/premium-vector/cold-brew-coffee-ads-with-retro-style-engraving-brown-background-3d-illustration_317396-1183.jpg?w=2000",
  // ];

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
            src={starb}
            alt="img1"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={vergano}
            alt="img2"
          />
          <img className="w-screen h-full object-cover" src={surf} alt="img3" />
          <img className="w-screen h-full object-cover" src={shop} alt="img4" />
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

export default BannerCoffee;
