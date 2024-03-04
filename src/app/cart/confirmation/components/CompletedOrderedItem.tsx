"use client";
import { Divider, Image } from "@nextui-org/react";
import React from "react";

const CompletedOrderedItem = () => {
  return (
    <>
      <Divider />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-1/6 aspect-square grid place-items-center">
            <Image
              radius="none"
              src="/fridge2.webp"
              alt=""
              classNames={{
                img: "w-full h-full object contain",
              }}
            />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-xl line-clamp-2">title</h1>
            <h1 className="text-lg text-mainBlack/50 line-clamp-2">
              desription
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-5 items-center">
          <h1 className="text-red-500/50 text-lg">5000 $ X 10</h1>
          <Divider orientation="vertical" />
          <h1 className="text-emerald-500 font-semibold text-2xl">500000 $</h1>
        </div>
      </div>
    </>
  );
};

export default CompletedOrderedItem;
