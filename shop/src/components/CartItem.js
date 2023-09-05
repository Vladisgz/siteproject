// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrementQuantity,
//   deleteItem,
//   incrementQuantity,
//   resetCart,
// } from "../redux/coffeeSlice";
// import { Link } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";

// import { MdOutlineClose } from "react-icons/md";
// import { HiOutlineArrowLeft } from "react-icons/hi";

// const CartItem = ({ product }) => {
//   const dispatch = useDispatch();
//   const productData = useSelector((state) => state.coffee.productData);

//   return (
//     <div className="w-full md:w-2/3 pr-10">
//       <div className="w-full">
//         <h2 className="font-titleFont text-2xl">shopping cart</h2>
//       </div>
//       <div>
//         {productData.map((item) => (
//           <div
//             key={item._id}
//             className="sm:flex grid grid-cols-2 items-center justify-between gap-6 mt-6"
//           >
//             <div className="flex items-center gap-2">
//               <MdOutlineClose
//                 onClick={() =>
//                   dispatch(deleteItem(item._id)) &
//                   toast.error(`${item.title} is removed`)
//                 }
//                 className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
//               />
//               <img
//                 className="sm:w-32 sm:h-32 object-cover cursor-pointer rounded-lg"
//                 src={item.image}
//                 alt="prodImg"
//               />
//             </div>
//             <h2 className="w-52">{item.title}</h2>
//             <p className="w-10">${item.price}</p>
//             <div className="w-52 flex items-center justify-between border text-gray-500 gap-4 p-3 rounded-lg shadow-lg">
//               <p className="text-sm">Quantity</p>
//               <div className="flex items-center gap-4 text-sm font-semibold">
//                 <span
//                   onClick={() =>
//                     dispatch(
//                       decrementQuantity({
//                         _id: item._id,
//                         title: item.title,
//                         image: item.image,
//                         price: item.price,
//                         quantity: 1,
//                         description: item.description,
//                       }),
//                     )
//                   }
//                   className="h-5 px-2 font-normal text-xl flex items-center justify-center active:text-2xl cursor-pointer duration-500"
//                 >
//                   -
//                 </span>
//                 {item.quantity}
//                 <span
//                   onClick={() =>
//                     dispatch(
//                       incrementQuantity({
//                         _id: item._id,
//                         title: item.title,
//                         image: item.image,
//                         price: item.price,
//                         quantity: 1,
//                         description: item.description,
//                       }),
//                     )
//                   }
//                   className="h-5 px-2 font-normal text-xl flex items-center justify-center active:text-2xl cursor-pointer duration-500"
//                 >
//                   +
//                 </span>
//               </div>
//             </div>
//             <p className="w-14">${item.quantity * item.price}</p>
//           </div>
//         ))}
//       </div>
//       {productData.length > 0 ? (
//         <button
//           onClick={() => dispatch(resetCart()) & toast.error("Cart is empty!")}
//           className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300 rounded-lg"
//         >
//           Reset Cart
//         </button>
//       ) : (
//         ""
//       )}

//       <Link to="/shop">
//         <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300 mb-5 md:mb-0">
//           <span>
//             <HiOutlineArrowLeft />
//           </span>
//           back to shop
//         </button>
//       </Link>

//       <ToastContainer
//         position="top-left"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// };

// export default CartItem;
