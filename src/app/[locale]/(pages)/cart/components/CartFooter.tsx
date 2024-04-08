"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { isUserLoggedIn } from "@/functions/credentials";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useContext } from "react";
import { BiSend } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useScreenSize } from "react-screen-size-helper";

const CartFooter = () => {
  const { cart, user } = useContext(StoreContext);
  const { currentWidth } = useScreenSize({});
  const t = useTranslations("cartPage");

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
    <div className="flex justify-between items-center flex-wrap  gap-3">
      <Input
        type="text"
        placeholder={t("cartHome.footer.code")}
        radius="sm"
        size={currentWidth > 768 ? "md" : "sm"}
        variant="bordered"
        className="w-full  md:w-1/3"
        endContent={
          <div className="text-lg md:text-2xl cursor-pointer">
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
          size={currentWidth > 768 ? "md" : "sm"}
          className="bg-red-500 text-mainWhite capitalize px-10 "
          endContent={<MdDeleteForever className="text-lg md:text-2xl" />}
          onClick={deleteAllCartProducts}
        >
          {t("cartHome.footer.removeAll")}
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
