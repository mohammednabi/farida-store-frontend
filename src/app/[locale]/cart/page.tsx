"use client";
import React, { useContext } from "react";
import EmptyCart from "./components/EmptyCart";

import CartContent from "./components/CartContent";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";

const CartPage = () => {
  const { cart } = useContext(StoreContext);

  return (
    <div>{cart.productsCount === 0 ? <EmptyCart /> : <CartContent />}</div>
  );
};

export default observer(CartPage);
