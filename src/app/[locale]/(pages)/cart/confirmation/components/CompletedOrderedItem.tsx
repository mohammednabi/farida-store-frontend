"use client";
import { Divider, Image } from "@nextui-org/react";
import React from "react";

interface completedOrderItemProps {
  title: string;
  description: string;
  imgSrc: string;
  quantity: number;
  price: number;
}

const CompletedOrderedItem = ({
  title,
  description,
  imgSrc,
  price,
  quantity,
}: completedOrderItemProps) => {
  return (
    <div className="w-full border-2 border-mainBlack/25 border-solid rounded-md">
      {/* <Divider /> */}
      <div className="grid grid-cols-[1fr_6fr_3fr] items-center  gap-5 py-5 px-10">
        <div className="w-full aspect-square grid place-items-center">
          <Image
            radius="none"
            src={imgSrc}
            alt=""
            classNames={{
              img: "w-full h-full object contain",
            }}
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-xl line-clamp-2">{title}</h1>
          <h1 className="text-lg text-mainBlack/50 line-clamp-2">
            {description}
          </h1>
        </div>

        <div className="grid grid-rows-3 gap-3 items-center justify-end">
          <h1 className="text-red-500/50 text-lg text-right">{price} $</h1>
          <h1 className="text-mainBlack/50 text-lg text-right capitalize">
            quantity : {quantity}
          </h1>

          <h1 className="text-emerald-500 font-semibold text-2xl  text-right">
            {`${price * quantity} $`}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CompletedOrderedItem;
