import React, { useEffect, useState } from "react";
// import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { addToCart } from "../redux/coffeeSlice";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Product = () => {
  const dispatch = useDispatch();

  const [details, setDetails] = useState({});
  // ________
  //  Счетчик
  let [baseQ, setBaseQ] = useState(1);

  const Location = useLocation();

  useEffect(() => {
    setDetails(Location.state.item);
  }, [Location.state.item]);

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-[550px] h-96 object-cover object-center rounded-xl shadow-xl"
            src={details.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {details.isNew && (
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                SALE
              </h2>
            )}
            <h1 class="text-gray-900 text-3xl font-bodyFont font-medium mb-1">
              {details.title}
            </h1>
            <div className="itens-center flex gap-4 ">
              <span class="font-titleFont font-base text-xl text-gray-500 line-through">
                $ {details.oldPrice}
              </span>
              <span class="font-titleFont font-medium text-xl text-gray-900">
                $ {details.price}
              </span>
            </div>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p class="leading-relaxed">{details.description}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div class="flex items-center justify-between border text-gray-500 gap-4 p-3 rounded-lg shadow-lg">
                <span class="mr-3 text-sm">Quantity</span>
                <div className="flex items-center text-sm font-semibold gap-4">
                  <button
                    onClick={() =>
                      setBaseQ(baseQ === 1 ? (baseQ = 1) : baseQ - 1)
                    }
                    className="h-5 px-2 font-normal text-lg flex items-center justify-center cursor-pointer active:text-2xl duration-500"
                  >
                    -
                  </button>
                  <span>{baseQ}</span>
                  <button
                    onClick={() => setBaseQ(baseQ + 1)}
                    className="h-5 px-2 font-normal text-lg flex items-center justify-center cursor-pointer active:text-2xl duration-500"
                  >
                    +
                  </button>
                </div>
              </div>

              <div class="flex ml-6 items-center">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: details._id,
                        title: details.title,
                        image: details.image,
                        price: details.price,
                        quantity: baseQ,
                        description: details.description,
                      }),
                    ) & toast.success(`${details.title} is added`)
                  }
                  className="bg-black opacity-90 text-white py-2 px-5 active:bg-gray-800 rounded-lg shadow-lg"
                >
                  add to cart
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-10">
              <p class="text-base text-gray-500">
                Category: {""}
                <span className="font-medium capitalize">
                  {details.category}
                </span>
              </p>
              <Link to="/shop">
                <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                  <span>
                    <HiOutlineArrowLeft />
                  </span>
                  back to shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </section>
  );
};

export default Product;
