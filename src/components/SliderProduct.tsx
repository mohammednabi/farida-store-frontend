/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { Link } from "@/navigation";

import React from "react";
import { Sliderify } from "react-sliderify";

interface sliderProductProps {
  img: string;
  title: string;
  isLinkActive: boolean;
}

const SliderProduct = ({ img, title, isLinkActive }: sliderProductProps) => {
  return (
    <Link
      href={`${isLinkActive ? `/categories/${title}` : `#`}`}
      className={`bg-white min-w-[10rem] sm:min-w-[30rem] h-auto    grid grid-rows-[3fr_1fr]  sm:grid-cols-[1fr_3fr] sm:grid-rows-1  place-items-center p-1 sm:p-5 sm:gap-5 ${
        isLinkActive ? `cursor-pointer` : `cursor-grab`
      }`}
    >
      <div className=" w-full  sm:w-full   h-auto  aspect-square grid place-items-center">
        <img
          src={`${img}`}
          alt="product image"
          className="w-full h-full object-contain p-2 sm:p-0"
        />
      </div>

      <h1 className="text-lg sm:text-3xl capitalize text-center sm:text-left">
        {title}
      </h1>
    </Link>
  );
};

export default SliderProduct;
