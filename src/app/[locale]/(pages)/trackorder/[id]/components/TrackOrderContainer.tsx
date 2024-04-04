"use client";
import React, { useContext, useEffect, useState } from "react";
import OrderReceived from "./OrderReceived";
import OrderShipped from "./OrderShipped";
import OrderPaid from "./OrderPaid";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";
import EmptyOrderTrack from "./EmptyOrderTrack";

const TrackOrderContainer = ({ orderId }: { orderId: string }) => {
  const { userOrders, user } = useContext(StoreContext);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    userOrders.getOrderDetails(orderId);
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
      {isAllowed ? (
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
                : userOrders.orderDetails?.data?.attributes?.status ===
                  "arrived"
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
      ) : (
        <EmptyOrderTrack />
      )}
    </>
  );
};

export default observer(TrackOrderContainer);
