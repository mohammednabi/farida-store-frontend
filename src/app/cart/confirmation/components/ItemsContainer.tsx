import React from "react";
import OrderedItem from "../../shipping/components/OrderedItem";
import CompletedOrderedItem from "./CompletedOrderedItem";

const ItemsContainer = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold capitalize text-center">
        order details
      </h1>
      <CompletedOrderedItem />
      <CompletedOrderedItem />
      <CompletedOrderedItem />
      <CompletedOrderedItem />
      <CompletedOrderedItem />
    </div>
  );
};

export default ItemsContainer;
