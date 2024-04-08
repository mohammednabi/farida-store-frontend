"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "@/navigation";
import React from "react";
import { TfiDropbox } from "react-icons/tfi";

const WishListIsEmpty = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full h-72 pt-10">
      <div className="flex flex-col items-center gap-2">
        <TfiDropbox className="text-9xl md:text-[12rem] text-mainBlack/50" />
        <h1 className="text-lg md:text-2xl text-mainBlack/50 capitalize text-center">
          your wishlist is empty
        </h1>
      </div>
      <Button
        className="bg-mainBlack text-sm md:text-xl text-mainWhite capitalize py-3 px-10 md:py-6 md:px-20"
        onClick={goToHomePage}
      >
        explore
      </Button>
    </div>
  );
};

export default WishListIsEmpty;
