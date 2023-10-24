import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsOnPage = 9;

  const startIndex = (currentPage - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;

  const displayProducts = products?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products?.length / itemsOnPage);

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        className={`${
          i === currentPage
            ? "bg-slate-500 text-white"
            : "bg-white text-slate-500"
        } hover:bg-slate-400 active:bg-slate-500 hover:text-white px-3 py-1 rounded-full`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>,
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="bg-[#040c16] my-2 mt-6 py-1.5 w-40 sm:py-2 sm:w-60 text-center shadow-md shadow-[#040c16] rounded-xl">
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
      <div className="max-w-screen-xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {displayProducts?.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4 mb-10">
        {pageButtons}
      </div>
    </div>
  );
};

export default Products;
