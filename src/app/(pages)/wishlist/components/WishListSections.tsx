"use client";
import React from "react";
import WishlistContent from "./WishlistContent";
import WishListFliters from "./WishListFliters";
import { Divider } from "@nextui-org/react";
import { isUserLoggedIn } from "@/functions/credentials";
import LoginWarning from "./LoginWarning";

const WishListSections = () => {
  return (
    <div>
      {isUserLoggedIn() ? (
        <div className="grid grid-rows-1 grid-cols-1 xl:grid-cols-[5fr_auto_1fr]  mt-10 px-1 sm:px-5 lg:px-10  xl:px-20 gap-10">
          <WishlistContent />
          <Divider orientation="vertical" className="hidden xl:block" />
          <WishListFliters />
        </div>
      ) : (
        <LoginWarning />
      )}
    </div>
  );
};

export default WishListSections;
