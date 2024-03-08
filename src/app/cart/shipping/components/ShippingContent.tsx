"use client";
import { Divider, Input } from "@nextui-org/react";
import React, { useContext } from "react";
import ShippingForm from "./ShippingForm";
import TotalPrice from "../../components/TotalPrice";
import ShippingOrderAndPrice from "./ShippingOrderAndPrice";
import { StoreContext } from "@/contexts/StoreContext";
import EmptyCart from "../../components/EmptyCart";
import { observer } from "mobx-react-lite";
import LoadingOverlay from "@/components/LoadingOverlay";

const ShippingContent = () => {
  const { cart, userOrders } = useContext(StoreContext);
  return (
    <div className="relative">
      {userOrders.isCreatingOrderLoading && <LoadingOverlay />}
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
