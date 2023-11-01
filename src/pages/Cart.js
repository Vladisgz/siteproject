import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/coffeeSlice";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  IconButton,
} from "@material-tailwind/react";

import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";

import { empty } from "../assets";

const Cart = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productData = useSelector((state) => state.coffee.productData);
  const userInfo = useSelector((state) => state.coffee.userInfo);

  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [payNow, setPayNow] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const price = productData.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    setTotalPrice(price.toFixed(2));

    if (price > 500) {
      setShippingPrice(20);
    } else {
      setShippingPrice(30);
    }
  }, [productData]);

  const totalWithShipping = (parseFloat(totalPrice) + shippingPrice).toFixed(2);

  const payment = async (token) => {
    try {
      await axios.post("/pay", {
        amount: parseFloat(totalPrice) * 100,
        token: token,
      });

      toast.success("Payment successful!", {
        position: "top-center",
        autoClose: 50,
      });
      dispatch(resetCart());
      setPaymentSuccess(true);
    } catch (error) {
      console.log("Payment error with: ", error);
    }
  };

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in for Checkout", {
        position: "top-center",
        autoClose: 50,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  if (paymentSuccess) {
    return (
      <div className="mx-auto max-w-screen-xl justify-center py-20 md:flex  md:space-x-1 px-4">
        <div className="w-full">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-lg text-slate-900 font-semibold font-bodyFont text-center">
              Payment Done!
            </h3>
            <p className="text-slate-600 my-4 font-titleFont md:text-xl text-base">
              Thank you for completing your secure online payment.
            </p>
            <p className="font-titleFont md:text-xl text-lg text-slate-600">
              {" "}
              Have a great day!{" "}
            </p>
            <div className="mt-6 text-center font-titleFont">
              <Link to="/shop">
                <button
                  className="px-8 py-2.5 text-base font-semibold font-titleFont
                    tracking-wider text-white shadow-lg transition-colors
                    transform duration-500 md:w-auto md:mx-4 focus:outline-none
                    bg-indigo-600 rounded-lg hover:bg-indigo-500
                    active:bg-indigo-600 focus-visible:outline
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-indigo-500"
                >
                  GO BACK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {productData.length > 0 ? (
        <div className="mx-auto max-w-screen-xl justify-center py-20 md:flex  md:space-x-1 px-4">
          <div className="w-full md:w-2/3 pr-10">
            <div className="w-full flex justify-between ">
              <h2 className="font-titleFont sm:text-2xl text-xl mb-2">
                Shopping cart
              </h2>

              <button
                onClick={() => dispatch(resetCart())}
                className="text-slate-400 hover:text-slate-800 active:text-black duration-300 mb-2"
              >
                <span className="flex items-center gap-1">
                  Reset Cart <RiDeleteBin6Line className="scale-105" />
                </span>
              </button>
            </div>
            <div>
              {productData.map((item) => {
                const _id = item.title;
                const idString = (_id) => {
                  return String(_id).toLowerCase().split(" ").join("");
                };

                const rootId = idString(_id);

                const handleDetails = () => {
                  navigate(`/product/${rootId}`, {
                    state: { item },
                  });
                };

                return (
                  <ul
                    key={item._id}
                    className="w-full flex flex-col divide-y divide-gray-700"
                  >
                    <li className="flex flex-col py-4 px-4 sm:flex-row sm:justify-between border rounded-xl shadow-lg mb-4">
                      <div className="flex w-full space-x-3 sm:space-x-4">
                        <img
                          onClick={handleDetails}
                          className="flex-shrink-0 object-cover sm:w-40 sm:h-40 w-32 h-32 rounded-lg outline-none cursor-pointer"
                          src={item.image}
                          alt="prodImg"
                        />
                        <div className="flex flex-col justify-between w-full ">
                          <div className="flex justify-between w-full">
                            <div className="space-y-2">
                              <h3 className="sm:text-base text-sm font-bodyFont font-medium">
                                {item.title.substring(0, 40)}
                              </h3>
                              <p className="sm:text-base text-sm text-slate-700 font-titleFont">
                                $ {item.price.toFixed(2)}
                              </p>
                              <div className="flex sm:text-base text-xs text-slate-600 gap-1 items-center justify-start px-1 py-2">
                                <span className="text-sm">Quantity:</span>
                                <span
                                  onClick={() =>
                                    dispatch(
                                      decrementQuantity({
                                        _id: item._id,
                                        title: item.title,
                                        image: item.image,
                                        price: item.price,
                                        quantity: 1,
                                        description: item.description,
                                      }),
                                    )
                                  }
                                  className="border-inherit rounded-full w-5 h-5 font-titleFont text-lg active:text-2xl cursor-pointer duration-500 hover:bg-slate-200 active:bg-slate-400 flex items-center justify-center "
                                >
                                  -
                                </span>
                                <span className="font-titleFont sm:text-base text-sm items-center justify-center active">
                                  {item.quantity}
                                </span>
                                <span
                                  onClick={() =>
                                    dispatch(
                                      incrementQuantity({
                                        _id: item._id,
                                        title: item.title,
                                        image: item.image,
                                        price: item.price,
                                        quantity: 1,
                                        description: item.description,
                                      }),
                                    )
                                  }
                                  className="border-inherit rounded-full w-5 h-5 font-titleFont text-lg active:text-2xl cursor-pointer duration-500 hover:bg-slate-200 active:bg-slate-400 flex items-center justify-center "
                                >
                                  +
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <button
                                onClick={() =>
                                  dispatch(deleteItem(item._id)) &
                                  toast.error(`${item.title} is removed`, {
                                    position: "top-center",
                                    autoClose: 50,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: false,
                                    draggable: true,
                                    theme: "light",
                                  })
                                }
                                type="button"
                              >
                                <MdClose className="w-6 h-6  text-slate-500 hover:text-slate-900 active:text-black" />
                              </button>
                            </div>
                          </div>
                          <p className="sm:text-lg text-base text-slate-700 font-titleFont border-t pt-3">
                            $ {(item.quantity * item.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
            <Link to="/shop">
              <button className="md:ml-0 mt-2 flex items-center gap-1 text-gray-400 hover:text-black duration-300 mb-4 md:mb-0">
                <span>
                  <HiOutlineArrowLeft />
                </span>
                back to shop
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/3 h-full sm:mt-10 mt-0 bg-[#fafafa] rounded-xl py-2 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-xl font-medium">cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal
                <span className="font-titleFont font-bold text-lg text-slate-900">
                  $ {totalPrice}
                </span>
              </p>
              <p className="flex items-center gap-4 text-base text-slate-900">
                Shipping
                <span className="font-titleFont font-bold text-lg">
                  $ {shippingPrice.toFixed(2)}
                </span>
                <Popover>
                  <PopoverHandler>
                    <IconButton variant="text" className="rounded-full w-5 h-5">
                      <BsInfoCircle className="w-5 h-5 -mt-2.5" />
                    </IconButton>
                  </PopoverHandler>
                  <PopoverContent>
                    <div className="p-3 space-y-2">
                      <h3 className="font-semibold font-bodyFont text-slate-900">
                        Shipping Information
                      </h3>
                      <p className="font-titleFont text-slate-800">
                        We offer two shipping options:
                        <ul>
                          <li>Standard Shipping: $30 (Orders below $500)</li>
                          <li>Standart Shipping: $20 (Orders over $500)</li>
                        </ul>
                      </p>
                      <h3 className="font-bodyFont font-semibold text-slate-900 ">
                        Calculation
                      </h3>
                      <p className="font-titleFont text-slate-800">
                        Our shipping prices are calculated based on the total
                        price of your order.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total{" "}
              <span className="text-lg font-bold">$ {totalWithShipping}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-black rounded-lg text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              proceed to checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51NVtRQJW0Rf4zOPEhVIM8eJn4ISMp1XUStYN4iJSc6sNKu0TzylycYV0S9id4qapUdO9NLQvMA0IoddHXmW0U2Lp00oyZr643i"
                  name="Coffee Online"
                  amount={parseFloat(totalPrice) * 100}
                  description={`Your Payment amount is $${totalPrice}`}
                  token={payment}
                  email={userInfo.email}
                >
                  <button className="font-titleFont text-white rounded-lg shadow-lg px-4 py-1.5 tracking-wider transition-colors transform duration-500 focus:outline-none bg-indigo-600  hover:bg-indigo-500 active:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Pay to Vladis
                  </button>
                </StripeCheckout>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-xl justify-center py-20 md:flex md:space-x-1 px-4">
          <div className="w-full md:w-2/3 pr-10">
            <div className="flex flex-col justify-center items-center mt-2 ">
              <img src={empty} alt="" className="w-50 h-50" />
              <div className="sm:text-xl text-lg font-titleFont text-center">
                Your cart is empty
              </div>
              <span className="sm:text-lg text-base font-titleFont font-light text-slate-600 text-center">
                You have no stuff in shopping cart.
              </span>
              <span className="sm:text-lg text-base font-titleFont font-light text-slate-600 text-center">
                Back to shop and buy something.
              </span>
              <Link to="/shop">
                <button className="px-5 py-2.5 flex gap-2 justify-center items-center mt-4 md:mb-0 text-sm text-white font-titleFont shadow-sm tracking-wider transition-colors transform duration-500 focus:outline-none bg-indigo-600 rounded-lg  hover:bg-indigo-500 active:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span>
                    <HiOutlineArrowLeft />
                  </span>
                  Continue shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
