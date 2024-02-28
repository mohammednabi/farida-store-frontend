"use client";
import { FaBagShopping } from "react-icons/fa6";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import ConfirmMergeCart from "@/components/ConfirmMergeCart";
import { isUserLoggedIn } from "@/functions/credentials";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";

const EmptyCart = () => {
  const { cartSidebar, user } = useContext(StoreContext);

  const router = useRouter();

  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <div className="relative">
      <div className="w-full h-auto flex flex-col gap-5 items-center mt-20">
        <div className="flex flex-col gap-5 items-center justify-center">
          <FaBagShopping className="text-9xl text-mainBlack/10" />

          <h1 className="capitalize text-xl">your cart is empty </h1>
        </div>

        <button
          className=" px-5 py-2 capitalize bg-transparent  text-mainBlack border-mainBlack border-2 border-solid transition-all hover:bg-mainBlack hover:text-mainWhite"
          onClick={goToHomePage}
        >
          back to home
        </button>
      </div>

      {isUserLoggedIn() &&
        cartSidebar.isLocalCartHasItems &&
        !user.isMergingOrRemovingLoading && (
          <div className="px-32">
            <ConfirmMergeCart />
          </div>
        )}
    </div>
  );
};

export default observer(EmptyCart);
