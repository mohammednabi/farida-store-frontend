"use client";
import { Image } from "@nextui-org/react";
import React from "react";

interface orderedItemProps {
  title: string;
  price: number;
  quantity: number;
  imgSrc: string;
}

const OrderedItem = ({ title, price, imgSrc, quantity }: orderedItemProps) => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr]  gap-10 items-center my-2">
      <div className="w-20 aspect-square flex justify-center items-center">
        <Image
          radius="none"
          src={imgSrc}
          alt=""
          classNames={{
            img: "w-full h-full object-contain",
          }}
        />
      </div>

      <h1 className="text-left  line-clamp-2">{title}</h1>

      <div className="flex flex-col gap-1 items-end ">
        <h1 className="text-lg text-red-500/50">{price.toFixed(2)}$</h1>
        <div className="flex items-center gap-1 text-mainBlack/50 capitalize font-semibold">
          <h1 className="uppercase text-sm">X</h1>
          <p className="text-xl">{quantity}</p>
        </div>
        <h1 className="text-lg text-emerald-500">
          {(price * quantity).toFixed(2)}$
        </h1>
      </div>
    </div>
  );
};

export default OrderedItem;
