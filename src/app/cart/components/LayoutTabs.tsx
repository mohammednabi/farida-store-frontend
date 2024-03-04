"use client";
import React from "react";
import CartTab from "./CartTab";
import { Progress } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const LayoutTabs = () => {
  const currentLink = usePathname();

  return (
    <div className="flex flex-col gap-2 w-full h-auto px-32 py-3">
      <div className="w-full  grid grid-cols-3 ">
        <CartTab
          step={1}
          title="shopping cart"
          description="View your items"
          targetLink={"/cart"}
          opacity={currentLink === "/cart" ? "opacity-100" : "opacity-50"}
        />
        <CartTab
          step={2}
          title="Shipping and payment"
          description="Add some details about you"
          opacity={
            currentLink === "/cart/shipping" ? "opacity-100" : "opacity-50"
          }
          targetLink={"/cart/shipping"}
        />
        <CartTab
          step={3}
          title="Confirmation"
          description="Review your orders"
          opacity={
            currentLink === "/cart/confirmation" ? "opacity-100" : "opacity-50"
          }
          targetLink="/cart/confirmation"
        />
      </div>
      <Progress
        aria-label="Loading..."
        value={
          currentLink === "/cart"
            ? 100 / 3
            : currentLink === "/cart/shipping"
            ? (100 / 3) * 2
            : currentLink === "/cart/confirmation"
            ? 100
            : 0
        }
        size="sm"
        radius="none"
        className="w-full"
        classNames={{
          indicator: "bg-gradient-to-r from-mainPink to-mainPink",
        }}
      />
    </div>
  );
};

export default LayoutTabs;
