"use client";
import { Image } from "@nextui-org/react";
import React from "react";

interface orderReceivedProps {
  address: string;
  status: "completed" | "in progress" | "on hold";
}

const OrderReceived = ({ status, address }: orderReceivedProps) => {
  return (
    <div
      className={`${status === "in progress" && `scale-110`} ${
        status !== "in progress" && `opacity-50`
      } transition-all w-full grid grid-cols-[6fr_1fr] items-center bg-mainWhite shadow-md border-2 border-mainGray border-solid p-5 rounded-md`}
    >
      <div className="flex flex-col gap-3">
        <div>
          <h1
            className={`capitalize font-bold text-xl ${
              status === "in progress" ? `text-emerald-500` : ``
            }`}
          >
            {status}
          </h1>
          <h2 className="capitalize font-bold text-2xl">1. order placed </h2>
        </div>
        <div>
          <p className="capitalize font-semibold text-lg">
            congratiulations your order was received successfully{" "}
          </p>
          <p className="capitalize  text-lg">
            your order will be shipped soon to:{" "}
          </p>
        </div>
        <h3 className="text-lg font-bold">{address}</h3>
      </div>
      <div className=" flex justify-center items-center">
        <Image
          src="/received.png"
          alt=""
          radius="none"
          className="w-full h-full flex justify-center items-center z-[1]"
          classNames={{ img: "w-full h-full object-contain" }}
        />
      </div>
    </div>
  );
};

export default OrderReceived;
