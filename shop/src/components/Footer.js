import React, { useState, useEffect } from "react";
import { sneakers } from "../assets";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { SiFampay } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  const [subscribed, setSubcribed] = useState(
    localStorage.getItem("subscribe") === "true",
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    setSubcribed(true);
  };

  useEffect(() => {
    localStorage.setItem("subscribed", subscribed);
  }, [subscribed]);

  return (
    <footer className="bg-gray-800 text-[#949494] font-titleFont ">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div>
            <h2 className="font-semibold text-white text-xl">contacts</h2>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p>Samara, Russia</p>
              <a
                className="hover:text-white duration-300 cursor-pointer"
                href="tel:89198044708"
              >
                Mobile: +7(919)-***-**-**
              </a>
              <a
                className="hover:text-white duration-300 cursor-pointer"
                href="mailto:pmvladi@yandex.ru"
              >
                e-mail: pmvladi@yandex.ru
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-white text-xl">profile</h2>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                  <BsPersonFill />
                </span>
                my account
              </p>
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                  <SiFampay />
                </span>
                checkout
              </p>
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                  <CiDeliveryTruck />
                </span>
                order tracking
              </p>
              <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                <span>
                  <MdOutlineContactSupport />
                </span>
                help & support
              </p>
            </div>
          </div>

          {subscribed ? (
            <div className="col-span-1 lg:col-span-2 max-w-lg md:my-auto mt-6">
              <span className="flex flex-wrap text-sm font-titleFont tracking-wide text-slate-700 xl:texl-xl border-0 rounded-lg py-3 px-5 bg-emerald-400 ">
                Success! Now check your email to confirm your subscription.
              </span>
            </div>
          ) : (
            <div className="sm:col-span-2 ">
              <h2 className="max-w-lg text-base font-semibold tracking-tight text-white xl:text-xl">
                subscribe to receive new products & newsletter.
              </h2>
              <form
                className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row "
                onSubmit={handleSubmit}
              >
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="px-4 py-2 text-white shadow-sm bg-white/5 border-0 rounded-md ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 text-sm font-semibold tracking-wider text-white shadow-sm transition-colors transform duration-500 md:w-auto md:mx-4 focus:outline-none bg-indigo-600 rounded-lg  hover:bg-indigo-500 active:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm leading-8 text-gray-400">
                By clicking "Subscribe" you are agreeing to the Terms and
                Conditions.
              </p>
            </div>
          )}
        </div>

        <hr className="my-6 border-gray-200 md:my-8" />

        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="w-auto h-10 lg:h-14"
              src={sneakers}
              alt="logo light theme"
            />
          </Link>
          <div className="flex -mx-2">
            <a
              className="mx-2 hover:text-white scale-125 hover:scale-150 duration-700 cursor-pointer"
              href="https://github.com/Vladisgz"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub />
            </a>
            <a
              className="mx-2 hover:text-white scale-125 hover:scale-150 duration-700 cursor-pointer"
              href="https://www.facebook.com/profile.php?id=100006700171814"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              className="mx-2 hover:text-white scale-125 hover:scale-150 duration-700 cursor-pointer"
              href="https://www.instagram.com/vladiskhorenko/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
