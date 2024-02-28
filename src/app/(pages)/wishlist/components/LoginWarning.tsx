"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { VscSignIn } from "react-icons/vsc";

const LoginWarning = () => {
  return (
    <div className="w-full h-auto grid place-items-center mt-10">
      <div className="flex flex-col gap-3">
        <div className="relative flex justify-center items-center ">
          <LiaShoppingBagSolid className="text-[12rem] " />
          {/* <VscSignIn className="text-4xl absolute rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
        </div>

        <h1 className="text-2xl capitalize font-semibold">
          sign in first to see your wish list{" "}
        </h1>

        <Link href={"/login"} className="w-full">
          <Button className="bg-mainPink text-mainWhite capitalize text-xl w-full">
            sign in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginWarning;
