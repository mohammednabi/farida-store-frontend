"use client";
import React, { useContext } from "react";
import OrderItem from "./OrderItem";
import { StoreContext } from "@/contexts/StoreContext";
import { observer } from "mobx-react-lite";

const OrderItemsContainer = () => {
  const { userOrders } = useContext(StoreContext);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl capitalize font-semibold text-center">
        order items
      </h1>
      <div className="grid grid-cols-1 gap-2">
        {userOrders?.orderItems?.data?.map((item) => (
          <OrderItem
            key={item.id}
            id={item.attributes.product.data.id}
            title={item.attributes.product.data.attributes.title}
            description={item.attributes.product.data.attributes.description}
            imgsrc={
              item.attributes.product.data.attributes.thumbnail.data.attributes
                .url
            }
            price={item.attributes.product.data.attributes.price}
            quantity={item.attributes.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default observer(OrderItemsContainer);
