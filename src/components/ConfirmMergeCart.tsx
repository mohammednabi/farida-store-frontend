"use client";
import { StoreContext } from "@/contexts/StoreContext";
import { Button } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";

const ConfirmMergeCart = () => {
  const { user, cart, cartSidebar } = useContext(StoreContext);

  const accept = () => {
    user.setIsMergingOrRemovingLoading = true;
    user.mergeLocalCartWithUserCart(cart.userCartItems).then((check) => {
      if (check) {
        user.setIsMergingOrRemovingLoading = false;
      }
    });
  };

  const refuse = () => {
    user.setIsMergingOrRemovingLoading = true;
    user.clearLocalCart().then((check) => {
      if (check) {
        user.setIsMergingOrRemovingLoading = false;
      }
    });
  };

  return (
    <div className="px-5 flex flex-col gap-2 justify-self-end w-full">
      <h1 className="text-xl capitalize">merge your carts ?</h1>
      <div className="grid grid-cols-2 gap-2">
        <Button
          radius="none"
          className="bg-mainBlack text-mainWhite capitalize"
          onClick={accept}
        >
          yes
        </Button>
        <Button
          radius="none"
          className="text-mainBlack bg-mainBlack/20 capitalize"
          onClick={refuse}
        >
          no
        </Button>
      </div>
    </div>
  );
};

export default observer(ConfirmMergeCart);
