"use client";
import OrderAddress from "@/app/cart/confirmation/components/OrderAddress";
import Orderinfo from "@/app/cart/confirmation/components/Orderinfo";
import { StoreContext } from "@/contexts/StoreContext";
import React, { useContext, useEffect } from "react";
import OrderItemsContainer from "./OrderItemsContainer";

const PageContainer = ({ orderId }: { orderId: string }) => {
  const { userOrders } = useContext(StoreContext);

  useEffect(() => {
    userOrders.getOrderDetails(orderId);
    userOrders.getAllOrderItems(orderId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" px-32 flex flex-col gap-5 mt-10">
      <Orderinfo />
      <OrderAddress />
      <OrderItemsContainer />
    </div>
  );
};

export default PageContainer;
