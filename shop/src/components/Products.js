import React from "react";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* <h1 className="bg-[#040c16] my-2 py-2  text-center mt-6 w-60 shadow-md shadow-[#040c16] rounded-xl"> */}
      <h1 className="bg-[#040c16] my-2 mt-6 py-1.5 w-40 sm:py-2 sm:w-60 text-center   shadow-md shadow-[#040c16] rounded-xl">
        <Link to="/shops">
          <h2 className="text-sm hover:text-lg sm:text-xl hover:sm:text-2xl text-gray-300 hover:text-white  duration-700 cursor-pointer">
            Enjoy Shopping <br />
            With Coffee
          </h2>
        </Link>
      </h1>
      <span className="w-40 h-[3px] bg-[#0a192f] shadow-xl shadow-[#040c16]"></span>

      <p className="max-w-[700px] text-gray-600 text-center">
        From casual wear to elegant evening attire, we have the latest designs
        to keep you on top of the fashion game.
      </p>
      <div className="max-w-screen-xl mx-auto p-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-12">
        {products?.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
