"use client";
import React from "react";
import OrderCardInfo from "./OrderCardInfo";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface orderCardProps {
  orderNumber?: number;
  totalPrice?: number;
  orderedOn?: Date;
  arrivedOn?: Date;
  orderItemsCount?: number;
}

const OrderCard = ({
  totalPrice,
  orderNumber,
  orderedOn,
  arrivedOn,
  orderItemsCount,
}: orderCardProps) => {
  const orderedOnDate = new Date(orderedOn ?? "").toDateString();
  const arrivedOnDate = new Date(arrivedOn ?? "").toDateString();

  const information: { title: string; description: string }[] = [
    { title: "order number:", description: `${orderNumber}` },
    { title: "number of items:", description: `${orderItemsCount} items` },
    { title: "ordered on:", description: orderedOnDate },
    { title: "arrived on:", description: arrivedOnDate },
    { title: "total price:", description: `${totalPrice} $` },
  ];

  const router = useRouter();

  const goToDetails = () => {
    router.push(`/order/${orderNumber}`);
  };

  return (
    <div className="border-2 border-mainBlack/25 border-solid rounded-md p-10">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          {information.map((item) => (
            <OrderCardInfo
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <Button
          className="bg-mainBlack capitalize text-mainWhite"
          radius="sm"
          onClick={goToDetails}
        >
          see details
        </Button>
      </div>
    </div>
  );
};

export default OrderCard;
