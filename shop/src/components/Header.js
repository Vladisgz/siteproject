import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogo, sneakers } from "../assets";

const Header = () => {
  const productData = useSelector((state) => state.coffee.productData);
  const userInfo = useSelector((state) => state.coffee.userInfo);
  // console.log(productData);
  // console.log(userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-900 font-titleFont sticky scroll-smooth top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            {/* <img className="w-14" src={darkLogo} alt="dark logo" /> */}
            <img className="w-14" src={sneakers} alt="dark logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-slate-800 font-bold font-titleFont hover:text-slate-900 hover:scale-110 hover:underline underline-offset-4 decoration-[2px] duration-400 cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/shop">
              <li className="text-base text-slate-800 font-bold font-titleFont hover:text-slate-900 hover:scale-110 hover:underline underline-offset-4 decoration-[2px] duration-400 cursor-pointer">
                Shop Store
              </li>
            </Link>
            <Link to="/tech">
              {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer"> */}
              <li className="text-base text-slate-800 font-bold font-titleFont hover:text-slate-900 hover:scale-110 hover:underline underline-offset-4 decoration-[2px] duration-400 cursor-pointer">
                Tech Store
              </li>
            </Link>

            <Link to="/shops">
              <li className="text-base text-slate-800 font-bold font-titleFont hover:text-slate-900 hover:scale-110 hover:underline underline-offset-4 decoration-[2px] duration-400 cursor-pointer">
                Coffee Shops
              </li>
            </Link>

            <Link to="/blog">
              <li className="text-base text-slate-800 font-bold font-titleFont hover:text-slate-900 hover:scale-110 hover:underline underline-offset-4 decoration-[2px] duration-400 cursor-pointer">
                Blog
              </li>
            </Link>
          </ul>

          <Link to="/cart">
            <div class=" flex justify-center items-center">
              <div class="relative">
                <div class="absolute -top-1 left-4">
                  <p class="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    {productData.length}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="file: h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-10 h-10 rounded-full"
              // src={userLogo}
              src={userInfo ? userInfo.image : userLogo}
              alt="user logo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
