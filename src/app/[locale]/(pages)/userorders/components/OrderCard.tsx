"use client";
import React from "react";
import OrderCardInfo from "./OrderCardInfo";
import { Button } from "@nextui-org/react";
import { useRouter } from "@/navigation";
import { useScreenSize } from "react-screen-size-helper";

interface orderCardProps {
  orderNumber: number;
  totalPrice: number;
  orderedOn: Date;
  arrivedOn: Date;
  orderItemsCount: number;
}

const OrderCard = ({
  totalPrice,
  orderNumber,
  orderedOn,
  arrivedOn,
  orderItemsCount,
}: orderCardProps) => {
  const orderedOnDate = new Date(orderedOn).toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const arrivedOnDate = arrivedOn
    ? new Date(arrivedOn).toLocaleDateString("en", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "soon";

  const information: { title: string; description: string }[] = [
    { title: "order number:", description: `${orderNumber}` },
    { title: "number of items:", description: `${orderItemsCount} items` },
    { title: "ordered on:", description: orderedOnDate },
    { title: "arrived on:", description: arrivedOnDate },
    { title: "total price:", description: `${totalPrice} $` },
  ];

  const router = useRouter();
  const { currentWidth } = useScreenSize({});

  const goToDetails = () => {
    router.push(`/order/${orderNumber}`);
  };

  const goToTrackOrder = () => {
    router.push(`/trackorder/${orderNumber}`);
  };

  return (
    <div className="border-2 border-mainBlack/25 border-solid rounded-md p-10">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 lmob:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {information.map((item) => (
            <OrderCardInfo
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Button
            size={currentWidth > 768 ? "md" : "sm"}
            className="bg-mainBlack capitalize text-mainWhite"
            radius="none"
            onClick={goToDetails}
          >
            see details
          </Button>
          <Button
            size={currentWidth > 768 ? "md" : "sm"}
            className="text-mainBlack capitalize bg-mainWhite border-1 border-solid border-mainBlack"
            radius="none"
            onClick={goToTrackOrder}
          >
            track order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
