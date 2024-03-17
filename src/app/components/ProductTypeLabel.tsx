"use client";
import React from "react";

interface productTypeLabelProps {
  title: string;

  classNames?: {
    title?: string;
    container?: string;
  };
}

const ProductTypeLabel = ({ title, classNames }: productTypeLabelProps) => {
  return (
    <div
      className={` px-3  rounded-md capitalize z-20  text-white flex justify-center items-center ${classNames?.container}`}
    >
      <h1 className="text-center text-[.8rem] md:text-[.9rem] lg:text-[1rem]">
        {title}
      </h1>
    </div>
  );
};

export default ProductTypeLabel;
