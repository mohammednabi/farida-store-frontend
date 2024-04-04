import React from "react";
import { FaBox } from "react-icons/fa";
const NoOrder = () => {
  return (
    <div className="w-full flex flex-col  text-mainBlack/10 gap-5 mt-20 justify-center items-center">
      <FaBox className="text-[10rem]" />
      <h1 className="text-4xl capitalize">no order found</h1>
    </div>
  );
};

export default NoOrder;
