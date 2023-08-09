import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import CartItem from "../components/CartItem";

// const Cart = () => {
//   const productData = useSelector((state) => state.coffee.productData);
//   const userInfo = useSelector((state) => state.coffee.userInfo);

//   const [totalPrice, setTotalPrice] = useState("");
//   const [payNow, setPayNow] = useState(false);

//   useEffect(() => {
//     let price = 0;
//     productData.forEach((item) => {
//       price += item.price * item.quantity;
//     });
//     setTotalPrice(price.toFixed(2));
//   }, [productData]);

//   const handleCheckout = () => {
//     if (userInfo) {
//       setPayNow(true);
//     } else {
//       toast.error("Please sign in for Checkout");
//     }
//   };

//   const payment = async (token) => {
//     try {
//       await axios.post("http://localhost:3001/pay", {
//         amount: totalPrice * 100,
//         token: token,
//       });
//     } catch (error) {
//       toast.error("Payment failed. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <img
//         className="w-full h-60 object-cover"
//         src="https://media.gq-magazine.co.uk/photos/5d13a9c2976fa37177f3b040/16:9/w_2560%2Cc_limit/hp-gq-6dec18_istock_.jpg"
//         alt="Background in the cart"
//       />
//       <div className="mx-auto max-w-screen-xl justify-center py-20 md:flex md:space-x-6 xl:px-0">
//         <CartItem />
//         <div className="w-1/3 bg-[#fafafa] py-6 px-4">
//           <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
//             <h2 className="text-2xl font-medium">Cart Totals</h2>
//             <p className="flex items-center gap-4 text-base">
//               Subtotal
//               <span className="font-titleFont font-bold text-lg">
//                 $ {totalPrice}
//               </span>
//             </p>
//             <p className="flex items-center gap-4 text-base">
//               Shipping
//               <span>We deliver anywhere in the world</span>
//             </p>
//           </div>
//           <p className="font-titleFont font-semibold flex justify-between mt-6">
//             Total <span className="text-xl font-bold">$ {totalPrice}</span>
//           </p>
//           <button
//             onClick={handleCheckout}
//             className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
//           >
//             Proceed to Checkout
//           </button>
//           {payNow && (
//             <div className="w-full mt-6 flex items-center justify-center">
//               <StripeCheckout
//                 stripeKey="pk_test_..."
//                 name="Coffee Online"
//                 amount={totalPrice * 100}
//                 label="Pay to Vladis"
//                 description={`Your Payment amount is $${totalPrice}`}
//                 token={payment}
//                 email={userInfo.email}
//               />
//             </div>
//           )}
//         </div>
//       </div>
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

// export default Cart;

const Cart = () => {
  const productData = useSelector((state) => state.coffee.productData);
  const userInfo = useSelector((state) => state.coffee.userInfo);

  const [totalPrice, setTotalPrice] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalPrice(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in for Checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:3001/pay", {
      amount: totalPrice * 100,
      token: token,
    });
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://media.gq-magazine.co.uk/photos/5d13a9c2976fa37177f3b040/16:9/w_2560%2Cc_limit/hp-gq-6dec18_istock_.jpg"
        alt="фоновое в корзине"
      />
      {/* <div className="max-w-screen-xl mx-auto py-20 flex"> */}
      <div class="mx-auto max-w-screen-xl justify-center py-20 md:flex md:space-x-6 xl:px-0">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="font-titleFont font-bold text-lg">
                $ {totalPrice}
              </span>
            </p>
            <p className="flex items-center gap-4 text-base">
              Shipping
              {/* <span className="font-titleFont text-lg"> */}
              <span>We deliver anywhere in the world</span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {totalPrice}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NVtRQJW0Rf4zOPEhVIM8eJn4ISMp1XUStYN4iJSc6sNKu0TzylycYV0S9id4qapUdO9NLQvMA0IoddHXmW0U2Lp00oyZr643i"
                name="Coffee Online"
                amount={totalPrice * 100}
                label="Pay to Vladis"
                description={`Your Payment amount is $${totalPrice}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
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
  );
};

export default Cart;
