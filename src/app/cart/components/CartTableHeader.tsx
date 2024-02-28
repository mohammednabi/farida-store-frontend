import React from "react";

const CartTableHeader = () => {
  return (
    <div className="grid text-center bg-mainPink font-bold text-xl rounded-lg capitalize text-mainWhite px-5 py-2 grid-cols-[5.5fr_1fr_1.5fr_1fr_.5fr] gap-3 items-center">
      <h1 className="text-left">product </h1>
      <h1>price </h1>
      <h1>quantity </h1>
      <h1>total </h1>
    </div>
  );
};

export default CartTableHeader;
