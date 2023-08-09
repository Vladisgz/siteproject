import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/coffeeSlice";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";

const CartItem1 = ({ product }) => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.coffee.productData);

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDelete = (itemId, title) => {
    dispatch(deleteItem(itemId));
    toast.error(`${title} is removed`);
  };
  return (
    <div class="rounded-lg md:w-2/3">
      {productData.map((item) => (
        <div
          key={item._id}
          className="justify-between mb-6 items-center gap-4 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
        >
          <div className="flex items-center gap-2">
            <MdOutlineClose
              onClick={() => handleDelete(item._id, item.title)}
              className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
            />
            <img
              src={item.image}
              alt="product-s"
              className="w-40 h-40 rounded-lg sm:w-32 object-cover"
            />
          </div>
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
              <p className="mt-1 text-base text-gray-700">${item.price}</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 rounded-lg shadow-lg p-3 w-52">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={() => handleDecrement(item)}
                  className="h-5 px-2 font-normal text-xl flex items-center justify-center active:text-2xl cursor-pointer duration-500"
                >
                  -
                </span>
                {item.quantity}
                <span
                  onClick={() => handleIncrement(item)}
                  className="h-5 px-2 font-normal text-xl flex items-center justify-center active:text-2xl cursor-pointer duration-500"
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <p className="w-14">${item.quantity * item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItem1;
