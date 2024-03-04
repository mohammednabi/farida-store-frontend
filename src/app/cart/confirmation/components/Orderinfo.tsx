"use client";
import React, { useContext } from "react";
import InfoCard from "./InfoCard";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/contexts/StoreContext";

const Orderinfo = () => {
  const { userOrders } = useContext(StoreContext);

  const information = [
    { title: "order number:", description: userOrders.orderDetails.data?.id },
    {
      title: "created at  :",
      description: userOrders.orderDetails.data?.attributes.createdAt,
    },
    {
      title: "total price:",
      description: userOrders.orderDetails.data?.attributes.total,
    },
    {
      title: "payment method :",
      description:
        userOrders.orderDetails.data?.attributes.user_order_address.data
          .attributes.fullname,
    },
    {
      title: "order notes :",
      description: userOrders.orderDetails.data?.attributes.order_notes,
    },
  ];

  return (
    <div className="border-1 border-mainBlack/25 border-solid flex flex-col gap-2 px-10 py-3 capitalize">
      <h1 className="text-xl capitalize text-center">order information</h1>
      {information?.map(
        (info) =>
          info.description && (
            <InfoCard
              key={info.title}
              title={info.title}
              description={info.description?.toString() ?? ""}
            />
          )
      )}
    </div>
  );
};

export default observer(Orderinfo);
