import React from "react";

const CartTableHeader = () => {
  return (
    <div className="grid text-center bg-mainPink font-bold text-lg md:text-xl rounded-lg capitalize text-mainWhite px-5 py-1 md:py-2 grid-cols-[5.5fr_1fr_1.5fr_1fr_.5fr] gap-3 items-center">
      <h1 className="text-center lmob:text-left col-span-5 lmob:col-span-3 md:col-span-1">
        product{" "}
      </h1>
      <h1 className="hidden md:block">price </h1>
      <h1 className="hidden md:block">quantity </h1>
      <h1 className="hidden lmob:block">total </h1>
    </div>
  );
};

export default CartTableHeader;
