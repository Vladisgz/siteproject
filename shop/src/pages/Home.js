import React from "react";
import { back } from "../assets";

const links = [
  { name: "To shopping", href: "/shop" },
  // { name: "Internship program", href: "#" },
  // { name: "Our values", href: "#" },
  // { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "13" },
  { name: "Reviews", value: "999+" },
  { name: "Delivery", value: "Around the World" },
  { name: "Help & Support", value: "24/7" },
];

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 border-b-1 border-b-inherit">
      <img
        // src="https://wokecustoms.com/cdn/shop/products/CustomBlackAirForce1-Bluecartoonoutline.jpg?v=1671630959&width=1946"
        src={back}
        alt=""
        className="absolute inset-0 -z-10 h-50% w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bodyFont font-semibold tracking-wide text-slate-800 sm:text-5xl">
            Enjoy shopping with us
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 font-titleFont font-semibold">
            We take great pride in our commitment to quality, offering products
            from renowned brands and trusted manufacturers. Our competitive
            pricing and regular discounts ensure that you get the best value for
            your money. <br /> <br />
            For those who prefer shopping from the comfort of their homes, our
            user-friendly website offers a seamless online shopping experience,
            with secure payment options and prompt delivery services.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <button className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-titleFont text-slate-200 hover:scale-110 hover:text-base duration-700 hover:text-white shadow-sm hover:bg-indigo-500 active:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              </button>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-slate-500 font-bodyFont">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-slate-800 font-titleFont">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home;
