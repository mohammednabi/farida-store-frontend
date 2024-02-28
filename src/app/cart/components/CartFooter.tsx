"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { isUserLoggedIn } from "@/functions/credentials";
import { Button, Input } from "@nextui-org/react";
import React, { useContext } from "react";
import { BiSend } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const CartFooter = () => {
  const { cart, user } = useContext(StoreContext);

  const deleteAllCartProducts = () => {
    if (isUserLoggedIn()) {
      user.setIsMergingOrRemovingLoading = true;
      user.clearUserCart(cart.userCartItems).then(() => {
        user.setIsMergingOrRemovingLoading = false;
      });
    } else {
      user.setIsMergingOrRemovingLoading = true;
      cart.deleteAllProducts();
      user.setIsMergingOrRemovingLoading = false;
    }
  };

  return (
    <div className="flex justify-between items-center px-5">
      <Input
        type="text"
        placeholder="promo code"
        radius="sm"
        variant="bordered"
        className="w-1/3"
        endContent={
          <div className="text-2xl cursor-pointer">
            <BiSend />
          </div>
        }
      />

      <div className="flex items-center gap-5">
        {/* <div
          className="flex gap-2 items-center cursor-pointer capitalize"
          onClick={deleteAllCartProducts}
        >
          <h1>remove all </h1>
          <MdDeleteForever className="text-2xl" />
        </div> */}

        <Button
          radius="sm"
          className="bg-red-500 text-mainWhite capitalize px-10 "
          endContent={<MdDeleteForever className="text-2xl" />}
          onClick={deleteAllCartProducts}
        >
          remove all
        </Button>

        {/* <Button
          radius="sm"
          className="bg-mainBlack text-mainWhite capitalize px-10 "
        >
          update
        </Button> */}
      </div>
    </div>
  );
};

export default CartFooter;
