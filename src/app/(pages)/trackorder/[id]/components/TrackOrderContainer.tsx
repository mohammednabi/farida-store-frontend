"use client";
import React, { useContext, useEffect } from "react";
import OrderReceived from "./OrderReceived";
import OrderShipped from "./OrderShipped";
import OrderPaid from "./OrderPaid";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";

const TrackOrderContainer = ({ orderId }: { orderId: string }) => {
  const { userOrders } = useContext(StoreContext);

  useEffect(() => {
    userOrders.getOrderDetails(orderId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 px-5 lmob:px-10 md:px-32 lg:px-56 place-items-center py-10">
      <OrderReceived
        address={`${userOrders.orderDetails?.data?.attributes?.street},${userOrders.orderDetails?.data?.attributes?.city},${userOrders.orderDetails?.data?.attributes?.state}`}
        status={
          userOrders.orderDetails?.data?.attributes?.status === "placed"
            ? "in progress"
            : "completed"
        }
      />
      <OrderShipped
        status={
          userOrders.orderDetails?.data?.attributes?.status === "delivery"
            ? "in progress"
            : userOrders.orderDetails?.data?.attributes?.status === "arrived"
            ? "completed"
            : "on hold"
        }
        arrivedDate={
          new Date(userOrders.orderDetails?.data?.attributes?.arrivedAt)
        }
        orderedDate={
          new Date(userOrders.orderDetails?.data?.attributes?.createdAt)
        }
      />
      <OrderPaid
        status={
          userOrders.orderDetails?.data?.attributes?.status === "arrived"
            ? "completed"
            : "on hold"
        }
      />
    </div>
  );
};

export default observer(TrackOrderContainer);
