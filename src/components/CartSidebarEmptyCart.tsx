import React from "react";
import { FaBagShopping } from "react-icons/fa6";

const CartSidebarEmptyCart = () => {
  return (
    <div className="p-5 flex flex-col gap-3 justify-center items-center">
      <FaBagShopping className="text-7xl md:text-9xl text-mainBlack/25" />
      <h1 className="capitalize text-lg md:text-xl text-mainBlack/50">
        your cart is empty
      </h1>
    </div>
  );
};

export default CartSidebarEmptyCart;
