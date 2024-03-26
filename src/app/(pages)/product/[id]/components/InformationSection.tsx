import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import BestSellerMenu from "./BestSellerMenu";

const InformationSection = () => {
  return (
    <div className="flex flex-col gap-5 order-3 md:order-none ">
      <div className="w-full  h-auto md:aspect-square bg-mainDarkBlue p-3 flex justify-center items-center">
        <div className="w-full h-full  py-20 md:py-0 border-1 border-mainWhite border-dashed  capitalize  flex flex-col justify-center items-center gap-2">
          <h1 className="text-white font-bold text-lg md:text-xl text-center">
            Elevate your everyday
          </h1>
          <h1 className="text-white text-xs md:text-sm text-center">
            Quality you can trust.
          </h1>
          <h1 className="text-white text-xs md:text-sm underline text-center">
            Farida store
          </h1>
        </div>
      </div>
      <div className="w-full h-auto bg-mainGray capitalize p-3 flex flex-col gap-5">
        <div className="grid grid-cols-[auto_1fr] items-start  gap-2">
          <AiOutlineGlobal className="text-xs md:text-lg" />
          <h1 className="text-xs md:text-sm">Shipping all over egypt</h1>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-start  gap-2">
          <RiExchangeDollarLine className="text-xs md:text-lg" />
          <h1 className="text-xs md:text-sm">
            Exchange and return with a 14-day guarantee
          </h1>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-start  gap-2">
          <MdOutlinePayment className="text-xs md:text-lg" />
          <h1 className="text-xs md:text-sm">
            All your payments are fully insured
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="capitalize text-lg md:text-xl">best seller</h1>
        <BestSellerMenu />
      </div>
    </div>
  );
};

export default InformationSection;
