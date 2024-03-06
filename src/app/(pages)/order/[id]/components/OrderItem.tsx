"use client";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface orderItemProps {
  id: string | number;
  imgsrc: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const OrderItem = ({
  id,
  imgsrc,
  title,
  description,
  price,
  quantity,
}: orderItemProps) => {
  return (
    <Link
      href={`/product/${id}`}
      className="grid grid-cols-[1fr_4fr_2fr] items-center gap-5 border-2 border-mainBlack/25 border-solid p-5 rounded-md"
    >
      <div className="flex justify-center items-center w-full aspect-square">
        <Image
          src={`${process.env.NEXT_PUBLIC_HOST}${imgsrc}`}
          alt=""
          classNames={{
            img: "w-full h-full object-contain",
          }}
        />
      </div>
      <div className="grid grid-rows-2 gap-2">
        <h1 className="text-xl line-clamp-2">{title}</h1>
        <h1 className="text-lg text-mainBlack/50 line-clamp-2">
          {description}
        </h1>
      </div>
      <div className="grid grid-rows-3 gap-2">
        <h1 className="text-right text-xl font-bold">{`${price} $`}</h1>
        <h1 className="text-right text-xl space-x-5">{`qty: ${quantity}`}</h1>
        <h1 className="text-right text-2xl font-bold">{`${
          price * quantity
        } $`}</h1>
      </div>
    </Link>
  );
};

export default OrderItem;
