"use client";
import { Divider, Input } from "@nextui-org/react";
import React, { useContext } from "react";
import ShippingForm from "./ShippingForm";
import TotalPrice from "../../components/TotalPrice";
import ShippingOrderAndPrice from "./ShippingOrderAndPrice";
import { StoreContext } from "@/contexts/StoreContext";
import EmptyCart from "../../components/EmptyCart";
import { observer } from "mobx-react-lite";

const ShippingContent = () => {
  const { cart } = useContext(StoreContext);
  return (
    <div>
      {cart.productsCount > 0 ? (
        <div className="grid grid-cols-[3fr_auto_1.5fr] px-32 gap-5">
          <ShippingForm />
          <Divider orientation="vertical" />
          <ShippingOrderAndPrice />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default observer(ShippingContent);
