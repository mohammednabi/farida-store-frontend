"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { StoreContext } from "@/contexts/StoreContext";
import EmptyCartDrop from "./EmptyCartDrop";
import CartDropProductsMenu from "./CartDropProductsMenu";
import CartDropTotalPrice from "./CartDropTotalPrice";
import { Divider } from "@nextui-org/react";
import CartSideBarLoading from "./CartProductLoading";
import ConfirmMergeCart from "./ConfirmMergeCart";
import { isUserLoggedIn } from "@/functions/credentials";

const CartDrop2 = () => {
  const { cart, user, cartSidebar } = useContext(StoreContext);

  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{
        scaleY: cart.isCartMenuDisplayed ? 1 : 0,
        opacity: cart.isCartMenuDisplayed ? 1 : 0,
      }}
      className="origin-top  bg-white min-w-[25rem]  w-[25rem] max-w-[25rem] h-auto p-5  text-mainBlack absolute top-20 right-0 z-10 border-1 border-solid border-mainBlack border-t-0"
    >
      <div className="flex flex-col gap-5 relative">
        {user.isMergingOrRemovingLoading && <CartSideBarLoading />}
        <h1 className="text-xl capitalize">cart ({cart.productsCount}) </h1>

        {cart.productsCount === 0 ? (
          <EmptyCartDrop />
        ) : (
          <CartDropProductsMenu />
        )}

        <Divider />
        {isUserLoggedIn() &&
          cartSidebar.isLocalCartHasItems &&
          !user.isMergingOrRemovingLoading && <ConfirmMergeCart />}
        <CartDropTotalPrice />
      </div>
    </motion.div>
  );
};

export default observer(CartDrop2);
