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
import { useScreenSize } from "react-screen-size-helper";

const ShippingContent = () => {
  const { cart, userOrders } = useContext(StoreContext);
  const { currentWidth } = useScreenSize({});
  return (
    <div className="relative">
      {userOrders.isCreatingOrderLoading && <LoadingOverlay />}
      {cart.productsCount > 0 ? (
        <div className="grid grid-rows-[auto_auto_auto] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[3fr_auto_1.5fr] px-5 md:px-9 lg:px-20 gap-5">
          <ShippingForm />
          <Divider
            orientation={currentWidth > 1024 ? "vertical" : "horizontal"}
          />
          <ShippingOrderAndPrice />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default observer(ShippingContent);
