"use client";
import React from "react";
import CartTab from "./CartTab";
import { Progress } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const LayoutTabs = () => {
  const currentLink = usePathname();

  return (
    <div className="flex flex-col gap-2 w-full h-auto px-5 md:px-9 lg:px-20 py-3">
      <div className="w-full  grid grid-rows-[auto_auto_auto] grid-cols-1 gap-y-5 mt-5 md:mt-0 md:grid-cols-3 md:grid-rows-1 gap-x-1  ">
        <div className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 gap-2">
          <CartTab
            step={1}
            title="shopping cart"
            description="View your items"
            targetLink={"/cart"}
            opacity={currentLink === "/cart" ? "opacity-100" : "opacity-50"}
            isChecked={
              currentLink === "/cart/shipping" ||
              currentLink === "/cart/confirmation"
                ? true
                : false
            }
          />
          <Progress
            aria-label="Loading..."
            value={100}
            size="sm"
            radius="none"
            className="w-full md:hidden"
            classNames={{
              indicator: "bg-gradient-to-r from-mainPink to-mainPink",
            }}
          />
        </div>
        <div className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 gap-2">
          <CartTab
            step={2}
            title="Shipping and payment"
            description="Add some details about you"
            opacity={
              currentLink === "/cart/shipping" ? "opacity-100" : "opacity-50"
            }
            targetLink={"/cart/shipping"}
            isChecked={currentLink === "/cart/confirmation" ? true : false}
          />
          <Progress
            aria-label="Loading..."
            value={
              currentLink === "/cart/shipping" ||
              currentLink === "/cart/confirmation"
                ? 100
                : 0
            }
            size="sm"
            radius="none"
            className="w-full md:hidden"
            classNames={{
              indicator: "bg-gradient-to-r from-mainPink to-mainPink",
            }}
          />
        </div>
        <div className="grid grid-rows-[auto_auto] grid-cols-1 md:grid-rows-1 gap-2">
          <CartTab
            step={3}
            title="Confirmation"
            description="Review your orders"
            opacity={
              currentLink === "/cart/confirmation"
                ? "opacity-100"
                : "opacity-50"
            }
            targetLink="/cart/confirmation"
            isDisabled
          />
          <Progress
            aria-label="Loading..."
            value={currentLink === "/cart/confirmation" ? 100 : 0}
            size="sm"
            radius="none"
            className="w-full md:hidden "
            classNames={{
              indicator: "bg-gradient-to-r from-mainPink to-mainPink",
            }}
          />
        </div>
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
        className="w-full hidden md:block"
        classNames={{
          indicator: "bg-gradient-to-r from-mainPink to-mainPink",
        }}
      />
    </div>
  );
};

export default LayoutTabs;
