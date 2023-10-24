import React from "react";
import {
  balenc,
  balenc1,
  nike_office,
  nike1,
  apple_build_2,
  nike_shoes,
  drew,
  iphone14,
  mac,
  star,
} from "../assets";

const Blog = () => {
  return (
    <div>
      <section className="py-6 text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={balenc1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-lg min-h-96 md:col-start-3 md:row-start-1 bg-gray-500"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg min-h-48 bg-gray-500 object-cover"
            src={nike_office}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg min-h-48 bg-gray-500 object-cover"
            src={balenc}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg  min-h-48 bg-gray-500 "
            src={nike_shoes}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg min-h-48 bg-gray-500"
            src={drew}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg min-h-48 bg-gray-500"
            src={iphone14}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg min-h-48 bg-gray-500 "
            src={mac}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg min-h-48 bg-gray-500"
            src={nike1}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-lg min-h-48 bg-gray-500 "
            src={star}
          />
          <img
            src={apple_build_2}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Blog;
