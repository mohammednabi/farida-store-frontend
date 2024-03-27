"use client";
import OrderAddress from "@/app/cart/confirmation/components/OrderAddress";
import Orderinfo from "@/app/cart/confirmation/components/Orderinfo";
import { StoreContext } from "@/contexts/StoreContext";
import React, { useContext, useEffect, useState } from "react";
import OrderItemsContainer from "./OrderItemsContainer";
import { observer } from "mobx-react-lite";
import EmptyOrderTrack from "@/app/(pages)/trackorder/[id]/components/EmptyOrderTrack";

const PageContainer = ({ orderId }: { orderId: string }) => {
  const { userOrders, user } = useContext(StoreContext);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    userOrders.getOrderDetails(orderId);
    userOrders.getAllOrderItems(orderId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      userOrders.orderDetails.data?.attributes?.user?.data?.id ===
      user.strapiUserdata?.id
    ) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  }, [
    orderId,
    user.strapiUserdata?.id,
    userOrders.orderDetails.data?.attributes?.user?.data?.id,
  ]);

  return (
    <>
      {!isAllowed ? (
        <EmptyOrderTrack />
      ) : (
        <div className="px-5 lmob:px-10 md:px-32 flex flex-col gap-5 mt-10">
          <Orderinfo />
          <OrderAddress />
          <OrderItemsContainer />
        </div>
      )}
    </>
  );
};

export default observer(PageContainer);
