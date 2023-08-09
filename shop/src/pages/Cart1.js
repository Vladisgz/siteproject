import React from "react";
import CartItem1 from "../components/CartItem1";

const Cart1 = () => {
  return (
    <body>
      <img
        className="w-full h-60 object-cover"
        src="https://media.gq-magazine.co.uk/photos/5d13a9c2976fa37177f3b040/16:9/w_2560%2Cc_limit/hp-gq-6dec18_istock_.jpg"
        alt="Background in the cart"
      />
      <div class="max-h-screen-xlpb-20">
        <h1 class="my-10  text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <CartItem1 />
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 mb-10">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">$129.99</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Cart1;
