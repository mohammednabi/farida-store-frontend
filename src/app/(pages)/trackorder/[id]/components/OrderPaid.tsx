"use client";
import { Image } from "@nextui-org/react";
import React from "react";

interface orderPaidProps {
  status: "completed" | "in progress" | "on hold";
}

const OrderPaid = ({ status }: orderPaidProps) => {
  return (
    <div
      className={`${status === "in progress" && `scale-105 md:scale-110`} ${
        status !== "completed" && `opacity-50`
      } transition-all w-full grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 md:grid-cols-[6fr_1fr] items-center bg-mainWhite shadow-md border-2 border-mainGray border-solid p-5 rounded-md`}
    >
      <div className="flex flex-col gap-3">
        <div>
          <h1
            className={`capitalize font-bold text-sm md:text-xl ${
              status === "in progress" ? `text-emerald-500` : ``
            }`}
          >
            {status}
          </h1>
          <h2 className="capitalize font-bold text-lg md:text-2xl">
            3. order arrived{" "}
          </h2>
        </div>
        <div>
          <p className="capitalize font-semibold text-sm md:text-lg">
            you will pay for your items after you recive them
          </p>
        </div>
      </div>
      <div className="w-1/4 justify-self-center md:w-full flex justify-center items-center">
        <Image
          src="/money.png"
          alt=""
          radius="none"
          className="w-full h-full flex justify-center items-center z-[1]"
          classNames={{ img: "w-full h-full object-contain" }}
        />
      </div>
    </div>
  );
};

export default OrderPaid;
