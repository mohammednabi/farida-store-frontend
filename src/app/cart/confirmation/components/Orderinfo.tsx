"use client";
import React, { useContext } from "react";
import InfoCard from "./InfoCard";
import { observer } from "mobx-react-lite";
import { StoreContext } from "@/contexts/StoreContext";

const Orderinfo = () => {
  const { userOrders } = useContext(StoreContext);

  const formattedDate = new Date(
    userOrders.orderDetails.data?.attributes?.createdAt
  ).toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const arrivedDate = userOrders.orderDetails.data?.attributes?.arrivedAt
    ? new Date(
        userOrders.orderDetails.data?.attributes?.arrivedAt
      ).toLocaleDateString("en", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "soon";

  const information = [
    {
      title: "order for:",
      description:
        userOrders.orderDetails.data?.attributes?.user?.data?.attributes
          ?.username,
    },
    { title: "order number:", description: userOrders.orderDetails?.data?.id },
    {
      title: "ordered on  :",
      description: formattedDate,
    },
    {
      title: "arrived on  :",
      description: arrivedDate,
    },
    {
      title: "total price:",
      description: `${userOrders.orderDetails.data?.attributes?.total} $`,
    },
    {
      title: "payment method :",
      description: "cash",
    },
    {
      title: "order notes :",
      description: userOrders.orderDetails.data?.attributes?.order_notes,
    },
  ];

  return (
    <div className="border-1 border-mainBlack/25 border-solid flex flex-col gap-2 px-10 py-3 capitalize">
      <h1 className="text-lg md:text-xl capitalize text-center">
        order information
      </h1>
      <div className="grid grid-cols-1 lmob:grid-cols-2 gap-2">
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
    </div>
  );
};

export default observer(Orderinfo);
