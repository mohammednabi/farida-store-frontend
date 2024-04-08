"use client";
import { Image } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import { useTranslations } from "next-intl";
import React from "react";

interface orderedItemProps {
  title: string;
  price: number;
  quantity: number;
  imgSrc: string;
}

const OrderedItem = ({ title, price, imgSrc, quantity }: orderedItemProps) => {
  const currency = useTranslations("currency");

  return (
    <div className="grid grid-cols-[1fr_3fr] lmob:grid-cols-[1fr_2fr_1fr] gap-3  lmob:gap-10 items-center my-2">
      <div className="w-14 medmob:w-20 aspect-square flex justify-center items-center">
        <Image
          radius="none"
          src={imgSrc}
          alt=""
          classNames={{
            img: "w-full h-full object-contain",
          }}
        />
      </div>

      <h1 className=" ltr:text-left rtl:text-right text-sm md:text-lg line-clamp-2 ">
        {title}
      </h1>

      <div className="flex flex-wrap col-span-2 smob:col-span-1  lmob:flex-col gap-x-3  gap-y-1 items-end smob:col-start-2 lmob:col-start-auto">
        <h1 className="text-sm md:text-lg text-red-500/50">
          {price.toFixed(2)}
          <span className="text-sm ltr:ml-1 rtl:mr-1">
            {currency("currency")}
          </span>
        </h1>
        <div className="flex items-center gap-1 text-mainBlack/50 capitalize font-semibold">
          <h1 className="uppercase text-xs md:text-sm">X</h1>
          <p className="text-sm md:text-xl">{quantity}</p>
          <h1 className="uppercase text-xs lmob:hidden">=</h1>
        </div>
        <h1 className="text-sm md:text-lg text-emerald-500">
          {(price * quantity).toFixed(2)}
          <span className="text-sm ltr:ml-1 rtl:mr-1">
            {currency("currency")}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default observer(OrderedItem);
