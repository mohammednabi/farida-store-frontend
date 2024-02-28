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
        <div className="grid grid-cols-[3fr_auto_1fr] mt-10  px-20 gap-20">
          <WishlistContent />
          <Divider orientation="vertical" />
          <WishListFliters />
        </div>
      ) : (
        <LoginWarning />
      )}
    </div>
  );
};

export default WishListSections;
