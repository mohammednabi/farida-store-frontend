"use client";
import React, { useContext } from "react";
import { Divider } from "@nextui-org/react";
import TotalPrice from "./TotalPrice";
import CartFooter from "./CartFooter";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";

import ProductsTable2 from "./ProductsTable2";
import { isUserLoggedIn } from "@/functions/credentials";
import ConfirmMergeCart from "@/components/ConfirmMergeCart";

const CartContent = () => {
  const { cartSidebar, user } = useContext(StoreContext);

  return (
    <div className="grid grid-cols-[3fr_auto_1fr] px-32 ">
      <div className="flex flex-col gap-2">
        <ProductsTable2 />

        <CartFooter />
      </div>

      <Divider orientation="vertical" />
      <div className="flex w-full flex-col items-start gap-5">
        <TotalPrice />
        {isUserLoggedIn() &&
          cartSidebar.isLocalCartHasItems &&
          !user.isMergingOrRemovingLoading && <ConfirmMergeCart />}
      </div>
    </div>
  );
};

export default observer(CartContent);
