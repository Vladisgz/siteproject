import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

import { addUser, removeUser } from "../redux/coffeeSlice";

import { userLogo, sneakers } from "../assets";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const productData = useSelector((state) => state.coffee.productData);
  const userInfo = useSelector((state) => state.coffee.userInfo);

  const handleDropdownToggle = () => {
    setIsNavOpen(false);
    setIsUserOpen((prevState) => !prevState);
  };

  const handleNavToggle = () => {
    setIsUserOpen(false);
    setIsNavOpen((prevState) => !prevState);
  };

  // Login and logout

  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          }),
        );
      })
      .catch((error) => console.log(error));
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast("Log Out Succesfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log("You got some error with login");
      });
  };

  return (
    <nav className="bg-white border-b-[1px] border-b-gray-200 font-titleFont sticky scroll-smooth top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img
            src={sneakers}
            alt="dark logo"
            className="sm:h-14 sm:w-14 h-10 mr-3"
          />
        </Link>
        <div className="flex items-center md:order-2 ">
          <div className="relative">
            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0"
              type="button"
              onClick={handleDropdownToggle}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="sm:w-10 sm:h-10 h-8 w-8 rounded-full"
                src={userInfo ? userInfo.image : userLogo}
                alt="user logo"
              />
            </button>

            {isUserOpen && (
              <div
                id="dropdownAvatar"
                className="z-50 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <div className="px-4 py-3">
                  <span className=" block text-sm text-gray-900">
                    {userInfo ? userInfo.name : "Welcone here"}
                  </span>
                  <span className=" block  text-sm text-gray-600">
                    {userInfo ? userInfo.email : ""}
                  </span>
                </div>
                <div className="py-2">
                  {userInfo ? (
                    <p
                      onClick={handleSignout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      Sign out
                    </p>
                  ) : (
                    <p
                      onClick={handleGoogleLogin}
                      className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
                    >
                      Log in
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen ? "true" : "false"}
            onClick={handleNavToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {/* <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 "> */}
            <Link to="/">
              <li className=" block py-2 pl-3 pr-4 md:p-0 text-base text-gray-700 hover:text-slate-800  md:text-slate-700   md:hover:text-slate-800 md:hover:scale-110 md:hover:underline md:underline-offset-4 md:text-decoration-[2px] md:duration-500 md:cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/shop">
              <li className=" block py-2 pl-3 pr-4 md:p-0 text-base text-gray-700 hover:text-slate-800  md:text-slate-700   md:hover:text-slate-800 md:hover:scale-110 md:hover:underline md:underline-offset-4 md:text-decoration-[2px] md:duration-500 md:cursor-pointer">
                Shop Store
              </li>
            </Link>
            <Link to="/tech">
              <li className=" block py-2 pl-3 pr-4 md:p-0 text-base text-gray-700 hover:text-slate-800  md:text-slate-700   md:hover:text-slate-800 md:hover:scale-110 md:hover:underline md:underline-offset-4 md:text-decoration-[2px] md:duration-500 md:cursor-pointer">
                Tech Store
              </li>
            </Link>

            <Link to="/shops">
              <li className=" block py-2 pl-3 pr-4 md:p-0 text-base text-gray-700 hover:text-slate-800  md:text-slate-700   md:hover:text-slate-800 md:hover:scale-110 md:hover:underline md:underline-offset-4 md:text-decoration-[2px] md:duration-500 md:cursor-pointer">
                Coffee Shops
              </li>
            </Link>

            <Link to="/blog">
              <li className=" block py-2 pl-3 pr-4 md:p-0 text-base  text-gray-700 hover:text-slate-800  md:text-slate-700   md:hover:text-slate-800 md:hover:scale-110 md:hover:underline md:underline-offset-4 md:text-decoration-[2px] md:duration-500 md:cursor-pointer">
                Blog
              </li>
            </Link>
            <Link to="/cart">
              <div className=" flex justify-start pl-2.5 items-center">
                <div className="relative">
                  <div className="absolute -top-1 left-4">
                    <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      {productData.length}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1 sm:1.5"
                    stroke="currentColor"
                    className="file: h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={50}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </nav>
  );
};

export default Nav;
