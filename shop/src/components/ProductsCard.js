import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import { Provider, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/coffeeSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const _id = product.title;
  const navigate = useNavigate();
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="relative ">
      <div className="p-3 h-full w-96 m-auto bg-white shadow-lg rounded-xl">
        <div
          onClick={handleDetails}
          className="p-3 w-full h-96 cursor-pointer overflow-hidden"
          // className="p-2 cursor-pointer h-96 overflow-hidden aspect-w-4 aspect-h-5 md:aspect-w-3 md:aspect-h-4 lg:aspect-w-4 lg:aspect-h-5"
        >
          <img
            className="w-full h-full object-cover rounded-xl"
            src={product.image}
            alt="prodimg"
          />
        </div>
        <div className="w-full px-2 py-4">
          <div className="flex justify-between items-center">
            <div>
              {product.isNew && (
                <p className="text-slate-500 font-semibold font-titleFont">
                  Sale
                </p>
              )}
              <h2 className="font-titleFont text-base font-bold">
                {product.title.substring(0, 15)}
              </h2>
            </div>
            <div className="group flex justify-end gap-2 relative overflow-hidden text-sm w-28">
              {/* <div className="group flex justify-end gap-2 relative overflow-hidden text-sm w-16 md:w-28 lg:w-28"> */}
              <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform cursor-pointer duration-1000">
                <p className="line-through text-gray-500">
                  ${product.oldPrice}
                </p>
                <p className="font-semibold">${product.price}</p>
              </div>
              <p
                onClick={() => {
                  dispatch(
                    addToCart({
                      _id: product._id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                      quantity: 1,
                      description: product.description,
                    }),
                  );
                  toast.success(`${product.title} is added `);
                }}
                className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-1000"
                // className="absolute z-20 w-[100px] md:w-[140px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-1/2 md:-translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-1000"
              >
                add to cart
                <span>
                  <BsArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-sm">{product.category}</p>
          </div>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default ProductsCard;
