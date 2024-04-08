"use client";
import { Divider, Image } from "@nextui-org/react";
import { Link } from "@/navigation";
import React from "react";
import { LuBox } from "react-icons/lu";

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
      className="grid grid-rows-[auto_auto_auto] items-center gap-3 border-2 border-mainBlack/25 border-solid  rounded-md shadow-sm"
    >
      <div className="grid  grid-cols-1 grid-rows-[auto_auto] lmob:grid-cols-2 lmob:grid-rows-1 px-3">
        <div className="flex justify-self-center w-32  lmob:w-40 md:w-52 aspect-square p-5">
          <Image
            src={`${process.env.NEXT_PUBLIC_HOST}${imgsrc}`}
            alt=""
            classNames={{
              img: "w-full h-full object-contain",
            }}
          />
        </div>

        {/* <div className="w-14 medmob:w-20 aspect-square flex justify-center items-center">
        <Image
          radius="none"
          src={`${process.env.NEXT_PUBLIC_HOST}${imgsrc}`}
          alt=""
          classNames={{
            img: "w-full h-full object-contain",
          }}
        />
      </div> */}

        <div className="flex flex-col justify-center  gap-2 ">
          <h1 className="text-sm md:text-xl line-clamp-2 text-center lmob:text-left">
            {title}
          </h1>
          <h1 className="text-xs md:text-lg text-mainBlack/50 line-clamp-2 text-center lmob:text-left">
            {description}
          </h1>
        </div>
      </div>
      <Divider orientation="horizontal" />
      <div className="grid grid-cols-2  gap-2 px-5 pb-2 text-lg md:text-xl capitalize ">
        {/* <h1 className="text-right text-xl font-bold">{`${price} $`}</h1> */}
        {/* <h1 className="text-sm hidden md:block md:text-lg justify-self-start">{`quantity: ${quantity}`}</h1> */}
        <div className="flex gap-3 items-center  text-sm md:text-lg">
          <LuBox className="opacity-50" />
          <h1>{quantity}</h1>
        </div>
        <h1 className="text-sm md:text-lg justify-self-end">{`${
          price * quantity
        } $`}</h1>
      </div>
    </Link>
  );
};

export default OrderItem;
